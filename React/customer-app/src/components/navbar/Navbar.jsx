import React from "react";
import "./Navbar.css";
import SpeedIcon from "@mui/icons-material/Speed";
import PersonIcon from "@mui/icons-material/Person";
import FeedbackIcon from "@mui/icons-material/Feedback";
import StoreIcon from "@mui/icons-material/Store";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="menu">
        <i className="fa fa-bars hamburger-menu" aria-hidden="true"></i>
        <ul className="menu-list">
          <li className="nav-li">
            <Link to="/">
              <HomeIcon /> <span className="nav-span">Home</span>
            </Link>
          </li>
          <li className="nav-li">
            <Link to="/dashboard">
              <SpeedIcon /> <span className="nav-span">Dashboard</span>
            </Link>
          </li>

          <li className="nav-li">
            <Link to="/profile">
              <PersonIcon /> <span className="nav-span">Profile</span>
            </Link>
          </li>
          <li className="nav-li">
            <Link to="/accessories">
              <StoreIcon /> <span className="nav-span">Accessories</span>
            </Link>
          </li>
          <li className="nav-li">
            <Link to="/feedback">
              <FeedbackIcon /> <span className="nav-span">Feedback</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* <div className="menu-right">
        <div className="nav-search">
          <SearchIcon className="search-icon" />
          <input
            type="search"
            placeholder="Search.."
            className="search-intput"
          />
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
