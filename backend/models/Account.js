const { mongoose, Schema } = require("mongoose");

const accountSchema = new mongoose.Schema({
  person: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  balance: {
    type: Number,
    require: true,
  },
});

const Account = mongoose.model("Account", accountSchema);
module.exports = {
  Account,
};
