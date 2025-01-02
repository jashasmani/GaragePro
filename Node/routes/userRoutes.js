const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User.js");

const router = express.Router();

router.post("/", async (req, res) => {
  const { email, contactme, password, profileCreated } = req.body;
  try {
    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email }, { contact: contactme }],
    });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Create and save the new user
    const user = new User({
      email,
      contact: contactme,
      password,
      profileCreated,
    });
    await user.save();
    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

// Login
router.get("/:contact/:password", async (req, res) => {
  const { contact, password } = req.params;
  try {
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

module.exports = router;
