const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config");

let userSchema = new mongoose.Schema(
  {
    //add some constraint

    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

//before saving to db - hash the password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  //hash password
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    console.log(error);
  }
});

// check password with db has passowrd
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

/**
 * create access token & refresh token -- difference is only there expiry time
 * Note - these methods are applicale on respose we get using User.someOperation
 */

userSchema.methods.createRefreshToken = function () {
  const refreshToken = jwt.sign({ id: this._id }, jwtSecret, {
    expiresIn: "15D",
  });
  return refreshToken;
};

userSchema.methods.createAccessToken = function () {
  const accessToken = jwt.sign({ id: this._id }, jwtSecret, {
    expiresIn: "2D",
  });
  return accessToken;
};

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
