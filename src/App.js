import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NotesList from "./pages/NotesList/NotesList";
import AddNotes from "./pages/AddNotes/AddNotes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<NotesList />}></Route>
        <Route path="/addNote" element={<AddNotes />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
