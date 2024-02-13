const { default: mongoose } = require("mongoose");

let userSchema = new mongoose.Schema({
  //add some constraint
  userName: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  password: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
