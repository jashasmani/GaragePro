import React, { useState, useNavigate } from "react";
import "./CreateProfile.css";
import Footer from "../footer/Footer";
import axios from "axios";

const CreateProfile = () => {
  const [profile, setProfile] = useState({
    garageName: "",
    ownerName: "",
    address: "",
    contactNumber: "",
    email: "",
    services: "",
  });

  const [editMode, setEditMode] = useState(true);
  const [formData, setFormData] = useState(profile);
  // const nav = useNavigate();
  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/create-profiles/save",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data.message); // Display success message
      setProfile(formData);
      setEditMode(false);
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <>
      <div className="profile-page">
        <h1>Garage Profile</h1>
        {editMode ? (
          <div className="profile-form">
            <input
              type="text"
              name="garageName"
              value={formData.garageName}
              onChange={handleInputChange}
              placeholder="Garage Name"
            />
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleInputChange}
              placeholder="Owner Name"
            />
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Address"
            />
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              placeholder="Contact Number"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
            <textarea
              name="services"
              value={formData.services}
              onChange={handleInputChange}
              placeholder="Services Offered"
            />
            <button className="save-button" onClick={handleSave}>
              Save
            </button>
          </div>
        ) : (
          <div className="profile-details">
            <p>
              <strong>Garage Name:</strong> {profile.garageName}
            </p>
            <p>
              <strong>Owner Name:</strong> {profile.ownerName}
            </p>
            <p>
              <strong>Address:</strong> {profile.address}
            </p>
            <p>
              <strong>Contact Number:</strong> {profile.contactNumber}
            </p>
            <p>
              <strong>Email:</strong> {profile.email}
            </p>
            <p>
              <strong>Services Offered:</strong> {profile.services}
            </p>
            <button className="edit-button" onClick={() => setEditMode(true)}>
              Edit Profile
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CreateProfile;
