import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initGetNotes, deleteNote, deleteAllNotes } from "./redux/actions";
import { MdDeleteForever } from "react-icons/md";

function NotesList() {
  const dispatch = useDispatch();

  const notesList = useSelector((state) => state.notesListReducer.notesList);

  // console.log(notesList);

  useEffect(() => {
    dispatch(initGetNotes());
  }, [notesList]);

  return (
    <div className="notes-list-div">
      <h1>Notes List</h1>
      {notesList.length === 0 ? (
        <h2>No notes to display</h2>
      ) : (
        <div className="notes-list-grid">
          {notesList.map((note) => (
            <div key={note.noteTitle} className="note-card">
              <h2>{note.noteTitle}</h2>
              <p>
                <MdDeleteForever
                  onClick={() => dispatch(deleteNote(note.noteTitle))}
                />
              </p>
            </div>
          ))}
        </div>
      )}
      <div className="button-container">
        <button
          disabled={notesList.length === 0}
          onClick={() => dispatch(deleteAllNotes())}
        >
          Delete all notes
        </button>
      </div>
    </div>
  );
}

export default NotesList;
