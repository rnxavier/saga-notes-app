import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { initSaveNote } from "./redux/actions";

function AddNotes() {
  const dispatch = useDispatch();
  const [noteName, setNoteName] = useState("");
  const [showSubmitMessage, setShowSubmitMessage] = useState(false);

  const handleOnChange = (e) => {
    setNoteName(e.target.value);
  };

  const handleClick = () => {
    dispatch(initSaveNote(noteName));
    setNoteName("");
    setShowSubmitMessage(true);
    setTimeout(() => {
      setShowSubmitMessage(false);
    }, 3000);
  };

  return (
    <div className="add-notes-div">
      <h1>Add New Note</h1>
      <div className="new-note-div">
        <input
          placeholder="New Note"
          onChange={handleOnChange}
          value={noteName}
        />
        <button onClick={handleClick} disabled={!noteName}>
          Submit
        </button>
      </div>
      {showSubmitMessage && <h2>Note submitted!</h2>}
    </div>
  );
}

export default AddNotes;
