import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initGetNotes, deleteNote, deleteAllNotes } from "./redux/actions";
import { MdDeleteForever } from "react-icons/md";
import { Puff } from "react-loader-spinner";

function NotesList() {
  const dispatch = useDispatch();

  const notesList = useSelector((state) => state.notesListReducer.notesList);
  const status = useSelector(
    (state) => state.notesListReducer.fetchingNotesList
  );
  console.log(status);

  useEffect(() => {
    dispatch(initGetNotes());
  }, [notesList]);

  if (status) {
    return (
      <div className="loading-div">
        <Puff
          height="80"
          width="80"
          radius={1}
          color="orange"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

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
