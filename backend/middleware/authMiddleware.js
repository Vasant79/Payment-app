const { jwtSecret } = require("../config");
const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  //take token
  const token = req.headers.authorization;
  console.log(`token`, token);
  //check token -- respond accordingly
  try {
    const validation = jwt.verify(token, jwtSecret);
    console.log("validation", validation);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: "Unauthorized" });
  }

  next();
}

module.exports = {
  authMiddleware,
};
