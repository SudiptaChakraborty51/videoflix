import React, { useContext, useState } from "react";
import "./addModal.css";
import { VideoContext } from "../../contexts/videoContext";

const AddModal = ({ addModal, setAddModal, fromSingleVideo, video }) => {
  const [playlistData, setPlaylistData] = useState({
    name: "",
    description: "",
    src: "https://source.unsplash.com/random/800x800/?playlist",
  });

  const { videoDispatch, videoState } = useContext(VideoContext);

  const addHandler = () => {
    videoDispatch({ type: "ADD_PLAYLIST", payload: playlistData });
    setAddModal({ ...addModal, show: false });
  };

  return (
    <div className="add-modal-container">
      <div className="add-modal">
        <div className="add-modal-header">
          <h3>{addModal?.type}</h3>
          <i
            className="fa-solid fa-xmark"
            onClick={() => setAddModal((prev) => ({ ...prev, show: false }))}
          ></i>
        </div>
        <div className="modal-content">
          <input
            type="text"
            placeholder="Enter title of your playlist"
            value={playlistData?.name}
            onChange={(e) =>
              setPlaylistData({ ...playlistData, name: e.target.value })
            }
          />
          <textarea
            type="text"
            placeholder="Write a description"
            rows={5}
            value={playlistData?.description}
            onChange={(e) =>
              setPlaylistData({ ...playlistData, description: e.target.value })
            }
          ></textarea>
          <button onClick={addHandler}>Create new Playlist</button>
        </div>
        {fromSingleVideo && (
          <div className="playlist-list">
            {videoState?.playlists?.map((playlist) => (
              <div key={playlist?.name} className="playlist-item">
                <p
                  onClick={() => {
                    videoDispatch({
                      type: "ADD_VIDEO_TO_PLAYLIST",
                      payload: { video: video, playlistName: playlist?.name },
                    });
                    setAddModal({...addModal, show: false});}
                  }
                >
                  {playlist?.name}
                </p>
                <i
                  className="fa-solid fa-circle-xmark"
                  title="delete playlist"
                  onClick={() =>
                    videoDispatch({
                      type: "DELETE_PLAYLIST",
                      payload: playlist?.name,
                    })
                  }
                ></i>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddModal;
