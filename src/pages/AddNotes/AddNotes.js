import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNotesValue } from "./redux/actions";

function AddNotes() {
  const dispatch = useDispatch();
  const [noteName, setNoteName] = useState("");

  const handleOnChange = (e) => {
    setNoteName(e.target.value);
    console.log(noteName);
  };

  const handleClick = (noteName) => {
    dispatch(getNotesValue(noteName));
  };

  return (
    <div className="add-notes-div">
      <h1>Add New Note</h1>
      <div className="new-note-div">
        <input placeholder="New Note" onChange={handleOnChange} />
        <button onClick={handleClick(noteName)}>Submit</button>
      </div>
    </div>
  );
}

export default AddNotes;
