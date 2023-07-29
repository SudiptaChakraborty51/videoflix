import React from "react";
import "./videoCard.css";

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <i className="fa-regular fa-clock" title="watch later"></i>
      <img src={video?.thumbnail} alt={video?.category} className="thumbnail" />
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
