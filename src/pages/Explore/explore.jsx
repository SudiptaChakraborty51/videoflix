import React, { useContext } from "react";
import "./explore.css";
import Sidebar from "../../components/Sidebar/sidebar";
import { VideoContext } from "../../contexts/videoContext";
import VideoCard from "../../components/VideoCard/videoCard";

const Explore = () => {
  const { videoState, videoDispatch } = useContext(VideoContext);
  let searchedVideos = videoState?.videoData;

  if (videoState?.search !== "") {
    searchedVideos = videoState?.videoData?.filter((video) =>
      video?.title?.trim()?.toLowerCase().includes(videoState?.search)
    );
  }

  return (
    <div className="explore">
      <Sidebar />
      <div className="explore-main">
        <h2>Explore</h2>
        <input
          placeholder="Search video by title"
          type="text"
          onChange={(e) =>
            videoDispatch({ type: "SEARCH", payload: e.target.value })
          }
        />
        <div className="video-listing-container">
          {searchedVideos?.length !== 0 ? (
            searchedVideos?.map((video) => (
              <VideoCard video={video} key={video?._id} />
            ))
          ) : (
            <p>No videos found!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Explore;
