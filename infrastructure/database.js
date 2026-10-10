
import mongoose from "mongoose";

export async function connectDatabase() {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error(
      "MONGODB_URI is missing from the environment variables."
    );
  }

  try {
    await mongoose.connect(mongoUri);

    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    throw error;
  }
}

export async function disconnectDatabase() {
  await mongoose.disconnect();
  console.log("MongoDB disconnected.");
}
