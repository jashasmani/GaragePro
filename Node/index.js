// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Initialize the Express app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const mongoURI = "mongodb://localhost:27017/garagepro"; // Replace with your MongoDB URI
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define the User schema and model
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  contact: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

app.post("/api/user", async (req, res) => {
  const { email, contactme, password } = req.body;
  try {
    
    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email }, { contact: contactme }],
    });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Create and save the new user
    const user = new User({ email, contact: contactme, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

// Login an existing user
app.get("/api/user/:contact/:password", async (req, res) => {
  const { contact, password } = req.params;
  try {
    // Find the user
    const user = await User.findOne({ contact, password });
    if (!user) {
      return res.status(401).json({ message: "Invalid contact or password." });
    }

    res.status(200).json({ id: user._id, message: "Login successful." });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
