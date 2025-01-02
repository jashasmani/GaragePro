const express = require("express");
const connectDB = require("./config/db");
const profileRoutes = require("./routes/profileRoutes.js");
const userRoutes = require("./routes/userRoutes.js");

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/create-profiles", profileRoutes);
app.use("/user", userRoutes);

module.exports = app;
