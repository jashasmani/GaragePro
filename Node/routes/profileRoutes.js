const express = require("express");
const Profile = require("../models/Profile.js");

const router = express.Router();

// POST: Create a new profile
router.post("/save", async (req, res) => {
  try {
    const newProfile = new Profile(req.body);
    await newProfile.save();
    res.status(201).json({ message: "Profile saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save profile" });
  }
});

module.exports = router;
