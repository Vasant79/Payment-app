import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import dbConnection from "./db/dbConnection.js";

const PORT = process.env.PORT || 3001;

dbConnection()
  .then(
    app.listen(PORT, () => {
      console.log("server listening on port ", PORT);
    })
  )
  .catch((error) => {
    console.log(error);
  });
