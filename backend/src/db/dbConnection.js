import mongoose from "mongoose";

async function dbConnection() {
  try {
    const connection = await mongoose.connect(process.env.DB_URL);
    console.log("db connected");
  } catch (error) {
    console.log("Error at db connection ", error);
    throw new Error(error);
  }
}

export default dbConnection;
