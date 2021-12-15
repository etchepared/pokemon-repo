import React from "react";
import { Link } from "react-router-dom";
import PokeGo from "../MyImages/PokeGo.png";
import "./toHome.css";

const ToHome = () => {
  return (
    <div className="containerToHome">
      <nav>
        <Link to="/home">
          <img className="pokego" src={PokeGo} alt="Home" />
        </Link>
      </nav>
    </div>
  );
};

export default ToHome;
