const express = require("express");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config");
const { Account } = require("../models/Account");
const { User } = require("../models/User");
const accountRouter = express.Router();

/**
 * probelm statement for /balance -- give user its balance
 *
 * get the token from headers.authorization from it get the id
 * id refers to the person
 * from account get the person that refers to same id & get the balance from it
 */
accountRouter.get("/balance", async function (req, res) {
  //token from header
  const token = req.cookies?.accessToken || req.headers?.["Authorization"];

  //decode token
  const validation = jwt.verify(token, jwtSecret);
  // console.log("validation ----> ", validation);
  const id = validation.id;

  //from acc get balance for person == validation.payload.userId
  const personBalance = await Account.findOne({ person: id });
  console.log(personBalance);
  const balance = personBalance.balance;

  console.log(balance);

  return res.status(200).json({
    msg: `your balance`,
    balance: balance,
  });
});

/**
 * problem statement for transfer
 * body -- reciever name & amount
 *
 * use id for
 * sender context - deduct money from sender
 * reciever context -- update  money in reciever
 *
 */
accountRouter.post("/transfer", async function (req, res) {
  //adding transaction as multiple
  // const session = await Account.startSession();
  // session.startTransaction();

  try {
    // dealing with sender
    //get data
    const senderData =
      req.cookies?.accessToken || req.headers?.["Authorization"];
    console.log("sender data ----- ", senderData);
    let { name, amount } = req.body;
    amount = parseInt(amount);

    // console.log(name, amount);
    // console.log(typeof amount);

    //identifying sender id
    const tokenObj = jwt.verify(senderData, jwtSecret);
    console.log(tokenObj);

    //adjust his/her acc balance
    const balObj = await Account.findOne({
      person: tokenObj.id,
    });
    console.log("balance ", balObj.balance);

    let updatedBalance = balObj.balance - amount;
    console.log("updatedBalance ----- ", updatedBalance);

    const accountObj = await Account.updateOne(
      { person: tokenObj.id },
      {
        $set: {
          balance: updatedBalance,
        },
      }
    );
    console.log("acc obj", accountObj);

    //dealing with reciever
    //get data -- done above
    //identifying reciever id
    const userObj = await User.findOne({ firstName: name });
    console.log("user obj ", userObj._id);
    const personId = userObj._id;

    //adjust his/her acc balance

    const receiverBal = await Account.findOne({ person: personId });
    console.log(receiverBal.balance);
    let recieverUpdatedBalance = receiverBal.balance + amount;
    const receiverBalUpdate = await Account.updateOne(
      { person: personId },
      {
        $set: {
          balance: recieverUpdatedBalance,
        },
      }
    );

    res.json({ msg: "money transfer successful" });
  } catch (error) {
    // await session.abortTransaction();
    // session.endSession();
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = {
  accountRouter,
};
