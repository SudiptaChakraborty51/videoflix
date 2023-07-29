import React from "react";
import "./watchLater.css";
import Sidebar from "../../components/Sidebar/sidebar";

const WatchLater = () => {
  return (
    <div className="watch-later">
      <Sidebar />
      <div className="watch-later-main">
        <h2>Watch Later</h2>
      </div>
    </div>
  );
};

export default WatchLater;
