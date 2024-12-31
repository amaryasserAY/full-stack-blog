import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONATION);
    console.log("Connect to Database");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
