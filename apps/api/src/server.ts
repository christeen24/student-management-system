
import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL ?? "http://localhost:5173",
}));

app.use(express.json());

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Student Management API is running!",
  });
});

// Start server
const PORT = Number(process.env.PORT) || 4000;

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
