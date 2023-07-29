import React, { useContext } from "react";
import "./watchLater.css";
import Sidebar from "../../components/Sidebar/sidebar";
import { VideoContext } from "../../contexts/videoContext";
import VideoCard from "../../components/VideoCard/videoCard";

const WatchLater = () => {
  const { videoState } = useContext(VideoContext);

  return (
    <div className="watch-later">
      <Sidebar />
      <div className="watch-later-main">
        <h2>Watch Later</h2>
        <div className="video-listing-container">
          {videoState?.watchLaterVideos?.length === 0 ? (
            <p>No videos in watch later!</p>
          ) : (
            videoState?.watchLaterVideos?.map((video) => (
              <VideoCard key={video?._id} video={video} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default WatchLater;
