import React, { useContext } from "react";
import "./singlePlaylist.css";
import Sidebar from "../../components/Sidebar/sidebar";
import { useParams } from "react-router-dom";
import { VideoContext } from "../../contexts/videoContext";
import VideoCard from "../../components/VideoCard/videoCard";
import { toast } from "react-toastify";

const SinglePlaylist = () => {
  const { playlistName } = useParams();
  const { videoState, videoDispatch } = useContext(VideoContext);

  const selectedPlaylist = videoState?.playlists?.find(
    (playlist) =>
      playlist?.name?.toLowerCase()?.trim() ===
      playlistName?.toLowerCase()?.trim()
  );

  return (
    <div className="single-playlist">
      <Sidebar />
      <div className="single-playlist-main">
        <h2>{playlistName}</h2>
        <div className="playlist-container">
          {selectedPlaylist?.videos?.length === 0 ? (
            <p>No videos present in this playlists!</p>
          ) : (
            selectedPlaylist?.videos?.map((video) => (
              <div key={video?.title} className="playlist-video-div">
                <i
                  className="fa-solid fa-circle-xmark"
                  title="remove fom playlist"
                  onClick={() => {
                    videoDispatch({
                      type: "REMOVE_FROM_PLAYLIST",
                      payload: { videoId: video?._id, playlistName },
                    });
                    toast.warn("Video is removed from playlist");
                  }}
                ></i>
                <VideoCard key={video?._id} video={video} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePlaylist;
