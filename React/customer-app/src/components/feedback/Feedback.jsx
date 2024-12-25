import React, { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import "./Feedback.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import RadioGroupRating from "../rating/Rating";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [newFeedback, setNewFeedback] = useState({
    customer_name: "",
    feedback: "",
    rating: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFeedback({ ...newFeedback, [name]: value });
  };

  const handleAddFeedback = () => {
    if (
      newFeedback.customer_name.trim() &&
      newFeedback.feedback.trim() &&
      newFeedback.rating > 0
    ) {
      setFeedbacks([...feedbacks, newFeedback]);
      setNewFeedback({ customer_name: "", feedback: "", rating: 0 });
    } else {
      alert("Please fill in all fields with valid data.");
    }
  };

  const handleDeleteFeedback = (index) => {
    const updatedFeedbacks = feedbacks.filter((_, i) => i !== index);
    setFeedbacks(updatedFeedbacks);
  };

  return (
    <>
      <Navbar />
      <div className="feedback-page">
        <h1>Customer Feedback</h1>

        {/* Feedback Form */}
        <div className="feedback-form">
          <input
            type="text"
            name="customer_name"
            placeholder="Customer Name"
            value={newFeedback.customer_name}
            onChange={handleInputChange}
          />
          <textarea
            name="feedback"
            placeholder="Feedback"
            value={newFeedback.feedback}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating (1-5)"
            value={newFeedback.rating}
            min="1"
            max="5"
            onChange={handleInputChange}
          />
          <RadioGroupRating />
          <button onClick={handleAddFeedback}>Submit Feedback</button>
        </div>

        <div className="feedback-list">
          {feedbacks.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Feedback</th>
                  <th>Rating</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {feedbacks.map((fb, index) => (
                  <tr key={index}>
                    <td>{fb.customer_name}</td>
                    <td>{fb.feedback}</td>
                    <td>{fb.rating}</td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => handleDeleteFeedback(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No feedback available. Be the first to leave one!</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Feedback;
