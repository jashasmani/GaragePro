const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  garageName: String,
  ownerName: String,
  address: String,
  contactNumber: String,
  email: String,
  services: String,
});

module.exports = mongoose.model("Profile", profileSchema);
