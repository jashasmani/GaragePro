import React, { useState, useNavigate } from "react";
import "./CreateProfile.css";

const CreateProfile = ({ onProfileCreate }) => {
  const [profile, setProfile] = useState({
    garageName: "ABC Garage",
    ownerName: "John Doe",
    address: "123 Main Street, Springfield",
    contactNumber: "9876543210",
    email: "abcgarage@example.com",
    services: "Car Repair, Tire Replacement, Oil Change",
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(profile);
  const nav = useNavigate();
  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Save profile updates
  const handleSave = () => {
    setProfile(formData);
    setEditMode(false);
    nav("/home");
  };

  return (
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
  );
};

export default CreateProfile;
