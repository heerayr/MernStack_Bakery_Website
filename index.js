const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

// Import routes
const authRoutes = require("./routes/authRoutes");
// const productRoutes = require("./routes/productRoutes"); // Uncomment when implemented

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "10mb" }));

// Routes
app.use("/api/auth", authRoutes);
// app.use("/api/products", productRoutes); // Uncomment when implemented

// Basic route for testing
app.get("/", (req, res) => res.send("API is running..."));

// Error handling middleware (add this after all routes)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Something went wrong!",
    error: process.env.NODE_ENV === "production" ? {} : err.stack
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('🚀 Server running on port ${PORT}'));

