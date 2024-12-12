import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="left-section">
        <MenuIcon className="menu-icon" />
        <div className="logo"></div>
      </div>
      <div className="search-bar-container">
        <input className="search-bar" type="text" placeholder="ค้นหา" />
        <button className="search-button">
          <SearchIcon />
        </button>
        <button className="mic-button">
          <MicIcon />
        </button>
      </div>
      <div className="right-section">
        <button className="icon-btn">
          <VideoCallIcon />
        </button>
        <button className="icon-btn">
          <AppsIcon />
        </button>
        <button className="icon-btn">
          <NotificationsNoneIcon />
        </button>
        <button className="icon-btn">
          <AccountCircleIcon />
        </button>
      </div>
    </div>
  );
};

export default Header;