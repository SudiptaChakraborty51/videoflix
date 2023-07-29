import React, { useContext } from "react";
import "./videoCard.css";
import { useNavigate } from "react-router-dom";
import { VideoContext } from "../../contexts/videoContext";

const VideoCard = ({ video }) => {
  const navigate = useNavigate();
  const { videoDispatch, isInWatchLater } = useContext(VideoContext);

  return (
    <div className="video-card">
      {isInWatchLater(video) ? (
        <i
          className="fa-solid fa-clock"
          title="remove from watch later"
          onClick={() =>
            videoDispatch({ type: "REMOVE_FROM_WATCH_LATER", payload: video })
          }
        ></i>
      ) : (
        <i className="fa-regular fa-clock" title="add to watch later" onClick={() =>
          videoDispatch({ type: "ADD_TO_WATCH_LATER", payload: video })
        }></i>
      )}

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
