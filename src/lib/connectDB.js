import mongoose from "mongoose";

export const connectDatabase = async () => {
  try {
    const DB = await mongoose.connect(process.env.DB_URI);
    console.log("db connected");
  } catch (error) {
    console.log("something went wrong to connect db", error);
  }
};
