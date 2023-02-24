import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header-div">
      <h2 onClick={() => navigate("/")}>Notes List</h2>
      <h2 onClick={() => navigate("/addNote")}>Add New Note</h2>
    </div>
  );
}

export default Header;
