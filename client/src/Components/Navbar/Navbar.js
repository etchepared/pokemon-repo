import React from "react";
import ToHome from "../ToHome/ToHome";
import Create from "../Create/Create";
import "./navbar.css";
//import pokepedia from "../MyImages/pokepedia.png"
import pokepedia from "../MyImages/HenryPokepedia.png"

const Navbar = () => {
  return (
    <div className="containerNavbar">
      <nav className="navbar">
        <div className="toHomeNav">
          <ToHome />
        </div>
        <div className="pokepediaNav">
          <img id="pokepedia" src={pokepedia} alt="Pokepedia" />
        </div>
        <div className="createNav">
          <Create />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
