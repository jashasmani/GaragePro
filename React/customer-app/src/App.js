import Login from "./components/login/Login.jsx";
import Home from "./components/home page/Home.jsx";
import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import Profile from "./components/profile/Profile.jsx";
import Feedback from "./components/feedback/Feedback.jsx";
import Accessories from "./components/accessories/Accessories.jsx";
import CreateProfile from "./components/create profile/CreateProfile.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}
