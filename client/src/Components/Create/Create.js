import React from "react";
import { Link } from "react-router-dom";

import "./create.css";

const Create = () => {
  return (
    <div className="containerCreate">
      <nav>
        <Link to="/create">
          <button>Create</button>
        </Link>
      </nav>
    </div>
  );
};

export default Create;
