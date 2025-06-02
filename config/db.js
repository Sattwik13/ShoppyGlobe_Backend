// const mongoose = require('mongoose');
import mongoose from "mongoose"
const connectDB = async () => {
  try {
    // mongodb connection
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
