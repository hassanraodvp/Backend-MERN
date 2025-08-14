import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.warn("MongoDB disconnected");
  });
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("MongoDB Connected")
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Stop the app if DB doesn't connect
  }
};
export default connectDB;
