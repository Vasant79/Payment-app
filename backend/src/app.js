import express from "express";

const app = express();

//middlewares
app.use(express.json());

//routes
import userRoute from "./routes/user.routes.js";

app.use("/fastpay/api/v1", userRoute);

export default app;
