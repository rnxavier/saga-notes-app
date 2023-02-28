import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initSaveNote, saveNoteSuccess } from "./redux/actions";
import { useNavigate } from "react-router-dom";

function AddNotes() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [noteName, setNoteName] = useState("");

  const handleOnChange = (e) => {
    setNoteName(e.target.value);
  };

  const handleClick = () => {
    dispatch(initSaveNote(noteName));
    navigate("/");
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
    </div>
  );
}

export default AddNotes;
