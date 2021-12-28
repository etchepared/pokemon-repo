import React from "react";
import ToHome from "../ToHome/ToHome";
import Create from "../Create/Create";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="containerNavbar">
      <nav className="navbar">
        <ToHome />
        <Create />
      </nav>
    </div>
  );
};

export default Navbar;
