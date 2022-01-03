import React from "react";
import SortByName from "../SortByName/SortByName.js";
import Pokemons from "../Pokemons/Pokemons.js";
import SortByStrength from "../SortByStrength/SortByStrength.js";
import CatchPokemon from "../CatchPokemon/CatchPokemon.js";
import FilterByType from "../FilterByType/FilterByType.js";
import FilterCreated from "../FilterCreated/FilterCreated.js";
import "./home.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <div>
        <div className="center">
          <div id="searchbar">
            <CatchPokemon />
          </div>
          <div>
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
