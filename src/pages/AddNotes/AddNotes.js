import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { initSaveNote } from "./redux/actions";

function AddNotes() {
  const dispatch = useDispatch();
  const [noteName, setNoteName] = useState("");

  const handleOnChange = (e) => {
    setNoteName(e.target.value);
  };

  const handleClick = () => {
    dispatch(initSaveNote(noteName));
  };

  return (
    <div className="add-notes-div">
      <h1>Add New Note</h1>
      <div className="new-note-div">
        <input placeholder="New Note" onChange={handleOnChange} />
        <button onClick={handleClick}>Submit</button>
      </div>
    </div>
  );
}

export default AddNotes;
