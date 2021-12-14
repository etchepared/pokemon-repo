import React from "react";
import { Link } from "react-router-dom";
import PokeGo from "../MyImages/PokeGo.png";
import SortByName from "../SortByName/SortByName.js";
import Pokemons from "../Pokemons/Pokemons.js";
import SortByStrength from "../SortByStrength/SortByStrength.js";
import CatchPokemon from "../CatchPokemon/CatchPokemon.js";
import FilterByType from "../FilterByType/FilterByType.js";
import FilterCreated from "../FilterCreated/FilterCreated.js";
import "./home.css";

const Home = () => {
  return (
    <div className="container">
      <div>
        <div className="navbar">
          <div className="left">
            <Link to="/Home">
              <img src={PokeGo} alt="Home" />
            </Link>
          </div>
          <div className="rigth">
            <CatchPokemon />
            <SortByName />
            <SortByStrength />
            <FilterByType />
            <FilterCreated />
          </div>
        </div>
        <Pokemons />
      </div>
    </div>
  );
};

export default Home;
