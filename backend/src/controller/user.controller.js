import { singUpTypes, singInTypes } from "../utils/types.js";
import User from "../model/user.model.js";
import jwt from "jsonwebtoken";

async function testing(req, res) {
  return res.json({ msg: "Success" });
}

async function signUp(req, res) {
  let validation = singUpTypes.safeParse(req.body);

  if (!validation.success) {
    return;
  }
  const { username, avatar, email, password } = req.body;

  try {
    const userExist = await User.findOne({ email, password });

    if (userExist) {
      return res.json({ msg: "user already exist" });
    }

    const userAdded = await User.create({ username, avatar, email, password });

    if (userAdded) {
      return res.json({ msg: "user added " });
    }
  } catch (error) {
    throw new Error(error);
  }
}

async function signIn(req, res) {
  // check if refresh token present using middleware

  const validation = singInTypes.safeParse(req.body);

  if (!validation.success) {
    return;
  }

  const { email, password } = req.body;

  try {
    const userExist = await User.findOne({ email, password });

    if (!userExist) {
      return res.json({ msg: "please sign up" });
    }

    const jwtToken = jwt.sign(
      { user_id: userExist._id },
      process.env.JWT_SECRET_KEY
    );
    userExist.refreshToken = jwtToken;
    await userExist.save({ validateBeforeSave: false });

    return res.json({ user: userExist, msg: "logged in" });
  } catch (error) {
    throw new Error(error);
  }
}

export { testing, signUp, signIn };
