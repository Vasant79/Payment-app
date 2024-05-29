import { Router } from "express";
import { signUp, testing, signIn } from "../controller/user.controller.js";

const route = Router();

route.get("/testing", testing);
route.post("/signup", signUp);
route.post("/signin", signIn);

export default route;
