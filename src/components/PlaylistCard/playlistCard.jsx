import React, { useContext } from "react";
import "./playlistCard.css";
import { VideoContext } from "../../contexts/videoContext";

const PlaylistCard = ({ playlist }) => {
  const { videoDispatch } = useContext(VideoContext);

  return (
    <div className="playlist-card">
      <i
        className="fa-solid fa-circle-xmark"
        title="delete playlist"
        onClick={() =>
          videoDispatch({ type: "DELETE_PLAYLIST", payload: playlist?.name })
        }
      ></i>
      <img src={playlist?.src} alt={playlist?.name} />
      <h4>
        {playlist?.name} ({playlist?.videos?.length})
      </h4>
      <span>{playlist?.description}</span>
    </div>
  );
};

export default PlaylistCard;
