import React from "react";
import "./videoCard.css";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video }) => {
  const navigate = useNavigate();
  return (
    <div className="video-card">
      <i className="fa-regular fa-clock" title="watch later"></i>
      <img
        src={video?.thumbnail}
        alt={video?.category}
        className="thumbnail"
        onClick={() => navigate(`/video/${video?._id}`)}
      />
      <div className="video-card-content">
        <img src="https://picsum.photos/40/40" alt="avatar" />
        <div>
          <strong>{video?.title}</strong>
          <span>
            {video?.views} | {video?.creator}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
