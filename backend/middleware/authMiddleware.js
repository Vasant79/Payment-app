const { jwtSecret } = require("../config");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

async function authMiddleware(req, res, next) {
  //get token - cookie
  //decode token - get user id
  // id verify with db
  //add user in req
  // move to next

  try {
    const { accessToken } = req.cookie?.accessToken;

    const decodedToken = jwt.verify(accessToken, jwtSecret);

    const user = await User.findOne({ _id: decodedToken.id });

    if (!user) {
      return res.status(400).json({ msg: "Unauthorized user" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("error unauthorized user --> ", error);
  }
}

module.exports = {
  authMiddleware,
};
