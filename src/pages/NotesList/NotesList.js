import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initGetNotes } from "./redux/actions";

function NotesList() {
  const dispatch = useDispatch();
  const notesList = useSelector((state) => state.notesListReducer.notesList);
  console.log(notesList);
  const dummyData = [
    {
      id: 1,
      name: "First Note",
    },
    {
      id: 2,
      name: "Second Note",
    },
    {
      id: 3,
      name: "Third Note",
    },
  ];

  useEffect(() => {
    dispatch(initGetNotes());
  });

  return (
    <div className="notes-list-div">
      <h1>Notes List</h1>
      <div className="notes-list-grid">
        {notesList.map((note) => (
          <div key={note.id} className="note-card">
            <h2>{note.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotesList;
