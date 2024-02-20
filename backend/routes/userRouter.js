const express = require("express");
const jwt = require("jsonwebtoken");
const zod = require("zod");
const { User } = require("../models/User");
const { jwtSecret } = require("../config");
const { authMiddleware } = require("../middleware/authMiddleware");
const { Account } = require("../models/Account");
const userRouter = express.Router();

//zod for validation
const userDataSchema = zod.object({
  firstName: zod.string(),
  lastName: zod.string(),
  email: zod.string(),
  password: zod.string(),
});

userRouter.post("/signup", async function (req, res) {
  //get the data
  let userData = req.body;

  //validate the data
  let validation = userDataSchema.safeParse(userData);
  console.log(validation);

  if (!validation.success) {
    return res.status(400).json({ msg: "invalid input" });
  }
  //check with db
  const dbres = await User.findOne({
    email: userData.email,
    password: userData.password,
  });

  //store the data
  if (dbres) {
    res.status(400).json({ msg: "user already exist" });
  } else {
    const user = await User.create({
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      password: userData.password,
    });

    const userId = user._id;

    let payload = {
      //_.id
      userId,
    };
    let token = jwt.sign({ payload }, jwtSecret);

    //assign balace to user -- use userId
    const amount = (Math.random() * 100000).toFixed(2);
    await Account.create({ person: userId, balance: amount });

    return res.status(200).json({ msg: "user created", token });
  }
});

// we generate jwt using signin
const signInDataSchema = zod.object({
  email: zod.string(),
  password: zod.string(),
});

userRouter.post("/signin", async function (req, res) {
  //get data
  let body = req.body;
  let { success } = signInDataSchema.safeParse(body); //obj destructuring

  console.log(success);
  //validate data
  if (!success) {
    return res.status(400).json({ msg: "invalid inputs" });
  }
  //check in db if exist
  const dbRes = await User.findOne({
    email: body.email,
    password: body.password,
  });

  //if exist generate token
  if (!dbRes) {
    return res.status(400).json({ msg: "Unauthorized" });
  } else {
    //exist -- create jwt token
    const userId = dbRes._id;

    const token = jwt.sign({ userId }, jwtSecret);

    res.status(200).json({
      msg: "loged in",
      token: token,
    });
  }
});

// update ----------------
const updateDataSchema = zod.object({
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});

userRouter.put("/update", authMiddleware, async function (req, res) {
  //validate data

  const { success } = updateDataSchema.safeParse(req.body);

  if (!success) {
    return res.status(400).json({ msg: "invalid inputs" });
  }

  // _id from token
  const token = req.headers.authorization;
  console.log("token ----- ", token);
  let id = jwt.verify(token, jwtSecret);
  id = id.userId;

  //take data
  const { firstName, lastName, password } = req.body;

  if (firstName.length == 0 && lastName.length == 0 && password.length == 0) {
    return res.status(400).json({ msg: "Nothing to update" });
  }

  //update in db
  if (firstName.length > 0) {
    await User.updateOne({
      _id: id,
      $set: {
        firstName: firstName,
      },
    });
  }

  if (lastName.length > 0) {
    await User.updateOne({
      _id: id,
      $set: {
        lastName: lastName,
      },
    });
  }

  if (password.length > 0) {
    await User.updateOne({
      _id: id,
      $set: {
        password: password,
      },
    });
  }

  res.status(200).json({ msg: "Updated" });
});

// route to get people from db ----

const serachInputSchema = zod.string();
userRouter.get("/bulk", async function (req, res) {
  //get data from params
  const { name } = req.query;
  console.log("recieving data ", name);

  //validate data
  const { success } = serachInputSchema.safeParse(name);
  console.log("status of validation ", success);

  if (!success) {
    return res.status(400).json({
      msg: "Invalid input type",
    });
  }

  const dbRes = await User.findOne({
    firstName: name,
  });

  console.log("finding first from db ", dbRes);

  if (!dbRes) {
    return res.status(400).json({ msg: "No user of this name" });
  }
  res.status(200).json({ msg: "User found", user: dbRes });
});

module.exports = {
  userRouter,
};
