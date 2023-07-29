import React, { useContext } from "react";
import "./playlists.css";
import Sidebar from "../../components/Sidebar/sidebar";
import { VideoContext } from "../../contexts/videoContext";
import PlaylistCard from "../../components/PlaylistCard/playlistCard";

const Playlists = () => {
  const { videoState } = useContext(VideoContext);

  return (
    <div className="playlists">
      <Sidebar />
      <div className="playlists-main">
        <h2>Playlists</h2>
        <div className="playlist-container">
          {videoState?.playlists?.map((playlist) => (
            <PlaylistCard key={playlist?.name} playlist={playlist} />
          ))}
          <i className="fa-regular fa-square-plus add-button" title="add playlist"></i>
        </div>
      </div>
    </div>
  );
};

export default Playlists;
