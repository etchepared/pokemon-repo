import React from "react";
import SortByName from "../SortByName/SortByName.js";
import Pokemons from "../Pokemons/Pokemons.js";
import SortByStrength from "../SortByStrength/SortByStrength.js";
import CatchPokemon from "../CatchPokemon/CatchPokemon.js";

const Home = () => {
  return (
    <div className="container">
      <div>
        <CatchPokemon />
        <SortByName />
        <SortByStrength />
        <Pokemons />
      </div>
    </div>
  );
};

export default Home;
