
import "dotenv/config";
import express from "express";

import { connectDatabase } from "./infrastructure/database.js";

const app = express();

const PORT = Number(process.env.PORT) || 3000;

// Parse incoming JSON requests.
app.use(express.json());

// Basic health-check endpoint.
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "MediaForge API is running.",
  });
});

async function startServer() {
  try {
    // Connect to MongoDB before accepting requests.
    await connectDatabase();

    // Listen on all network interfaces inside Docker.
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`MediaForge API running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start the application:", error.message);
    process.exit(1);
  }
}

startServer();
