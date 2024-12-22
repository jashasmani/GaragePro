import React from "react";
import "./Navbar.css";
import SpeedIcon from "@mui/icons-material/Speed";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import PersonIcon from "@mui/icons-material/Person";
import FeedbackIcon from "@mui/icons-material/Feedback";
import StoreIcon from "@mui/icons-material/Store";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="menu">
        <i className="fa fa-bars hamburger-menu" aria-hidden="true"></i>
        <ul className="menu-list">
          <li className="nav-li">
            {/* <a href="#"> */}
            <SpeedIcon /> <span className="nav-span">Dashboard</span>
            {/* </a> */}
          </li>
          <li className="nav-li">
            <AssignmentTurnedInIcon /> <span className="nav-span">Job Card</span>
          </li>
          <li className="nav-li">
            <PersonIcon /> <span className="nav-span">Customer</span>
          </li>
          <li className="nav-li">
            <StoreIcon /> <span className="nav-span">Market</span>
          </li>
          <li className="nav-li">
            <FeedbackIcon /> <span className="nav-span">Feedback</span>
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
