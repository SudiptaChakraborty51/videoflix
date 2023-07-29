import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive && "var(--primary-color)",
  });
  return (
    <div className="sidebar">
      <NavLink to="/" className="sidebar-items" style={getActiveStyle}>
        <i className="fa-solid fa-house"></i> <span>Home</span>
      </NavLink>
      <NavLink to="/explore" className="sidebar-items" style={getActiveStyle}>
        <i className="fas fa-home"></i>Explore
      </NavLink>
      <NavLink to="/playlist" className="sidebar-items" style={getActiveStyle}>
        <i className="fas fa-play-circle"></i>Playlist
      </NavLink>
      <NavLink
        to="/watchlater"
        className="sidebar-items"
        style={getActiveStyle}
      >
        <i className="fas fa-clock"></i>Watch Later
      </NavLink>
    </div>
  );
};

export default Sidebar;
