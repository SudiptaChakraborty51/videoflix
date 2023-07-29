import React, { useContext, useState } from "react";
import "./addNote.css";
import { VideoContext } from "../../contexts/videoContext";

const AddNote = ({ addNoteModal, setAddNoteModal, id }) => {
  const { videoDispatch, videoState } = useContext(VideoContext);
  const [noteData, setNoteData] = useState({
    id:
      videoState?.videoData
        ?.find((video) => video?._id === id)
        ?.notes?.find((note) => note?.id === addNoteModal?.id) ?? Math.random(),
    text:
      videoState?.videoData
        ?.find((video) => video?._id === id)
        ?.notes?.find((note) => note?.id === addNoteModal?.id) ?? "",
  });

  const addHandler = () => {
    if (noteData?.text?.trim() !== "") {
      videoDispatch({
        type: "ADD_NOTE",
        payload: { text: noteData, id: addNoteModal?.id },
      });
      setAddNoteModal({ ...addNoteModal, show: false });
    } else {
      alert("Please add a note!");
    }
  };

  return (
    <div className="add-modal-container">
      <div className="add-modal">
        <div className="add-modal-header">
          <h3>{addNoteModal.type}</h3>
          <i
            className="fa-solid fa-xmark"
            onClick={() =>
              setAddNoteModal((prev) => ({ ...prev, show: false }))
            }
          ></i>
        </div>
        <div className="modal-content">
          <input
            type="text"
            placeholder="Write a note"
            value={noteData?.text}
            onChange={(e) => setNoteData({ ...noteData, text: e.target.value })}
          />
          <button onClick={addHandler}>Add new Note</button>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
