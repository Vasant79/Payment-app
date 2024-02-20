const { default: mongoose } = require("mongoose");

let userSchema = new mongoose.Schema({
  //add some constraint

  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
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
