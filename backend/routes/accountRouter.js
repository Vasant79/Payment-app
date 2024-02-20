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
  const token = req.headers.authorization;

  //decode token
  const validation = jwt.verify(token, jwtSecret);
  const id = validation.payload.userId;

  //from acc get balance for person == validation.payload.userId
  const personBalance = await Account.findOne({ person: id });
  const balance = personBalance.balance;

  res.json({
    msg: `persons balance is ${balance}`,
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
    const senderData = req.headers.authorization;
    console.log("sender data ----- ", senderData);
    const { name, amount } = req.body;

    console.log(name, amount);

    //identifying sender id
    const tokenObj = jwt.verify(senderData, jwtSecret);
    console.log(tokenObj);

    //adjust his/her acc balance
    const balObj = await Account.findOne({
      person: tokenObj.payload.userId,
    });
    console.log("balance ", balObj.balance);

    let updatedBalance = balObj.balance - amount;
    console.log("updatedBalance ----- ", updatedBalance);

    const accountObj = await Account.updateOne(
      { person: tokenObj.payload.userId },
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

    const rereceiverBal = await Account.findOne({ person: personId });
    console.log(rereceiverBal.balance);
    let recieverUpdatedBalance = rereceiverBal.balance + amount;
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
