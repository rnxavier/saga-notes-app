import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NotesList from "./pages/NotesList/NotesList";
import AddNotes from "./pages/AddNotes/AddNotes";
import { NotesListContext } from "./context/NavbarContext";
import { AddNotesContext } from "./context/NavbarContext";
import { useState } from "react";

function App() {
  const [notesListActive, setNotesListActive] = useState(false);
  const [addNotesActive, setAddNotesActive] = useState(true);
  return (
    <NotesListContext.Provider value={{ notesListActive, setNotesListActive }}>
      <AddNotesContext.Provider value={{ addNotesActive, setAddNotesActive }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<AddNotes />}></Route>
            <Route path="/notesList" element={<NotesList />}></Route>
          </Routes>
        </BrowserRouter>
      </AddNotesContext.Provider>
    </NotesListContext.Provider>
  );
}

export default App;
