import mongoose from "mongoose";
require("dotenv").config();

const MONGO_URL = process.env.MONGO_URI;

async function dbConnect() {
  if (mongoose.connections[0].readyState) return; // If it's already connected

  // Using new Promise to deal with Mongoose's open() deprecation warning
  return new Promise<void>((resolve, reject) => {
    mongoose
      .connect(MONGO_URL as string, {})
      .then(() => resolve())
      .catch((err) => reject(err));
  });
}

export default dbConnect;
