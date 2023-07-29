import React, { useContext, useState } from "react";
import Sidebar from "../../components/Sidebar/sidebar";
import { useNavigate, useParams } from "react-router-dom";
import { VideoContext } from "../../contexts/videoContext";
import "./singleVideo.css";
import AddNote from "../../components/AddNote/addNote";

const SingleVideo = () => {
  const { ID } = useParams();

  const [addNoteModal, setAddNoteModal] = useState({
    type: "",
    show: false,
    id: "",
  });

  const { videoState, videoDispatch, isInWatchLater } =
    useContext(VideoContext);

  const navigate = useNavigate();

  const selectedVideo = videoState?.videoData?.find(
    ({ _id }) => _id === Number(ID)
  );

  const moreVideos = videoState?.videoData?.filter(
    ({ _id }) => _id !== selectedVideo?._id
  );

  return (
    <div className="single-video">
      <Sidebar />
      <div className="single-video-main">
        <div className="video-content-container">
          <iframe
            src={selectedVideo?.src}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen=""
          ></iframe>
          <div className="single-video-content-container">
            <div className="single-video-content-left">
              <img src="https://picsum.photos/40/40" alt="avatar" />
              <strong>{selectedVideo?.title}</strong>
            </div>
            <div className="single-video-content-right">
              {isInWatchLater(selectedVideo) ? (
                <i
                  className="fa-solid fa-clock"
                  title="remove from watch later"
                  onClick={() =>
                    videoDispatch({
                      type: "REMOVE_FROM_WATCH_LATER",
                      payload: selectedVideo,
                    })
                  }
                ></i>
              ) : (
                <i
                  className="fa-regular fa-clock"
                  title="add to watch later"
                  onClick={() =>
                    videoDispatch({
                      type: "ADD_TO_WATCH_LATER",
                      payload: selectedVideo,
                    })
                  }
                ></i>
              )}
              <i
                className="fa-solid fa-square-plus"
                title="add to playlist"
              ></i>
              <i
                className="fa-solid fa-square-pen"
                title="add notes"
                onClick={() =>
                  setAddNoteModal({
                    ...addNoteModal,
                    show: true,
                    type: "Add a Note",
                    id: selectedVideo?._id,
                  })
                }
              ></i>
            </div>
          </div>
          <hr />
          <div className="my-notes-container">
            <h3>My Notes</h3>
            <div className="notes-container">
              {selectedVideo?.notes?.map((currNote) => (
                <div key={currNote?.id} className="note-card">
                  <p>{currNote?.text}</p>
                  <div>
                    <i
                      className="fa-solid fa-pen"
                      title="edit-note"
                      onClick={() =>
                        setAddNoteModal({
                          ...addNoteModal,
                          show: true,
                          id: currNote?.id,
                          type: "Edit Note"
                        })
                      }
                    ></i>
                    <i
                      className="fa-solid fa-trash-can"
                      title="delete-note"
                    ></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="more-videos-container">
          <h3>More Videos</h3>
          {moreVideos?.map((video) => (
            <div
              className="more-video-card"
              onClick={() => navigate(`/video/${video?._id}`)}
            >
              <img src={video?.thumbnail} alt={video?.title} />
              <div>
                <strong>{video?.title}</strong>
                <p>{video?.creator}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {addNoteModal.show && (
        <AddNote
          addNoteModal={addNoteModal}
          setAddNoteModal={setAddNoteModal}
          id={selectedVideo?._id}
        />
      )}
    </div>
  );
};

export default SingleVideo;
