import React, { useContext, useState } from "react";
import "./addNote.css";
import { VideoContext } from "../../contexts/videoContext";

const AddNote = ({ addNoteModal, setAddNoteModal, note, id }) => {
  const [noteData, setNoteData] = useState("");
  const { videoDispatch } = useContext(VideoContext);

  const addHandler = () => {
    videoDispatch({
      type: "ADD_NOTE",
      payload: { text: noteData, id: id },
    });
    setAddNoteModal({ ...addNoteModal, show: false });
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
            value={noteData}
            onChange={(e) => setNoteData(e.target.value)}
          />
          <button onClick={addHandler}>Add new Note</button>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
