import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initGetNotes } from "./redux/actions";

function NotesList() {
  const dispatch = useDispatch();
  //could also be written as
  // const {notesList, isFetching} = useSelector((state) => state.notesListReducer)
  const notesList = useSelector((state) => state.notesListReducer.notesList);
  const isFetching = useSelector(
    (state) => state.notesListReducer.fetchingNotes
  );

  console.log(isFetching);

  useEffect(() => {
    dispatch(initGetNotes());
  }, []);

  if (isFetching) {
    return <div>Loading...</div>;
  }
  return (
    <div className="notes-list-div">
      <h1>Notes List</h1>
      <div className="notes-list-grid">
        {notesList &&
          notesList.map((note) => (
            <div key={note.id} className="note-card">
              <h2>{note.name}</h2>
            </div>
          ))}
      </div>
    </div>
  );
}

export default NotesList;
