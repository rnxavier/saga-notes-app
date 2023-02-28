import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initGetNotes, deleteNote } from "./redux/actions";
import { MdDeleteForever } from "react-icons/md";

function NotesList() {
  const dispatch = useDispatch();
  //could also be written as
  // const {notesList, isFetching} = useSelector((state) => state.notesListReducer)
  const notesList = useSelector((state) => state.notesListReducer.notesList);
  const isFetching = useSelector(
    (state) => state.notesListReducer.fetchingNotes
  );

  useEffect(() => {
    dispatch(initGetNotes());
  }, [notesList]);

  if (isFetching) {
    return <div>Loading...</div>;
  }
  return (
    <div className="notes-list-div">
      <h1>Notes List</h1>

      <div className="notes-list-grid">
        {notesList &&
          notesList.map((note) => (
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
    </div>
  );
}

export default NotesList;
