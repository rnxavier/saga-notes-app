import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initSaveNote, saveNoteFailed, saveNoteSuccess } from "./redux/actions";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";

function AddNotes() {
  const db = getDatabase();
  const notesRef = ref(db, "notesList", "56bd1973-43ae-410a-9722-311f1f31606d");
  onValue(notesRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [noteName, setNoteName] = useState("");
  const apiStatus = useSelector((state) => state.addNotesReducer);

  const handleOnChange = (e) => {
    setNoteName(e.target.value);
  };

  const handleClick = () => {
    dispatch(initSaveNote(noteName));
  };

  useEffect(() => {
    if (apiStatus.success === true) {
      setNoteName("");
      navigate("/");
      dispatch(saveNoteSuccess(false));
    }
  }, [apiStatus]);

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
