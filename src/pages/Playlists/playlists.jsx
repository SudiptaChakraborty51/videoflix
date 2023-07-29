import React from "react";
import "./playlists.css";
import Sidebar from "../../components/Sidebar/sidebar";

const Playlists = () => {
  return (
    <div className="playlists">
      <Sidebar />
      <div className="playlists-main">
        <h2>Playlists</h2>
      </div>
    </div>
  );
};

export default Playlists;
