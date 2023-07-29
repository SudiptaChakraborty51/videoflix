import React from "react";
import "./playlistCard.css";

const PlaylistCard = ({ playlist }) => {
  return (
    <div className="playlist-card">
      <i className="fa-solid fa-circle-xmark" title="delete playlist"></i>
      <img src={playlist?.src} alt={playlist?.name} />
      <h4>{playlist?.name}</h4>
      <span>{playlist?.description}</span>
    </div>
  );
};

export default PlaylistCard;
