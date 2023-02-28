import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AddNotesContext, NotesListContext } from "../context/NavbarContext";

function Header() {
  const { notesListActive, setNotesListActive } = useContext(NotesListContext);
  const { addNotesActive, setAddNotesActive } = useContext(AddNotesContext);
  const notesListClick = () => {
    setNotesListActive(true);
    setAddNotesActive(false);
    navigate("/notesList");
  };
  const addNotesClick = () => {
    setAddNotesActive(true);
    setNotesListActive(false);
    navigate("/");
  };

  console.log(notesListActive);

  const navigate = useNavigate();
  return (
    <div className="header-div">
      <h2
        onClick={() => notesListClick()}
        style={{
          color: notesListActive ? "green" : "white",
        }}
      >
        Notes List
      </h2>
      <h2
        onClick={() => addNotesClick()}
        style={{
          color: addNotesActive ? "green" : "white",
        }}
      >
        Add New Note
      </h2>
    </div>
  );
}

export default Header;
