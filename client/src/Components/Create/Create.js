import React from "react";
import { Link } from "react-router-dom";
import CreateYours from "../MyImages/create.png"
import "./create.css";

const Create = () => {
  return (
    <div className="containerCreate">
      <nav>
        <Link to="/create">
          <img id="create" src={CreateYours} alt="Create your Pokémon"/>
        </Link>
      </nav>
    </div>
  );
};

export default Create;
