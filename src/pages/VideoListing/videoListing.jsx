import React, { useContext } from "react";
import Sidebar from "../../components/Sidebar/sidebar";
import "./videoListing.css";
import { VideoContext } from "../../contexts/videoContext";
import { useParams } from "react-router-dom";
import VideoCard from "../../components/VideoCard/videoCard";

const VideoListing = () => {
  const { videoState } = useContext(VideoContext);
  const { categoryName } = useParams();

  let filteredVideos = [];

  if (categoryName) {
    filteredVideos = videoState?.videoData?.filter(
      ({ category }) =>
        category?.toLowerCase()?.trim() === categoryName?.toLowerCase().trim()
    );
  }

  return (
    <div className="video-listing">
      <Sidebar />
      <div className="video-listing-main">
        <h2>{categoryName}</h2>
        <div className="video-listing-container">
          {filteredVideos?.map((video) => (
            <VideoCard key={video?._id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoListing;
