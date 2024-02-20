const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./database/db");
const { mainRouter } = require("./routes/mainRouter");

const app = express();
const PORT = 3001;

dbConnect();
app.use(cors());
app.subscribe(cors());
app.use(express.json());

app.use("/api/v1", mainRouter);

app.listen(PORT, () => {
  console.log(`listening at ${PORT}`);
});
