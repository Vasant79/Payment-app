const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./database/db");
const { mainRouter } = require("./routes/mainRouter");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3001;

dbConnect();
app.use(cors());
app.use(cookieParser());
app.subscribe(cors());
app.use(express.json());

app.use("/v1", mainRouter);

app.listen(PORT, () => {
  console.log(`listening at ${PORT}`);
});
