import React from "react";

function NotesList() {
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
  return (
    <div className="notes-list-div">
      <h1>Notes List</h1>
      <div className="notes-list-grid">
        {dummyData.map((note) => (
          <div key={note.id} className="note-card">
            <h2>{note.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotesList;
