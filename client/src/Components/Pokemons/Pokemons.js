import { React, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./pokemons.css";

const Pokemons = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pokemons = useSelector((store) => {
    return store.catchedPokemon || store.trappedPokemons;
  }); // trae del store la info que está dentro del estado trappedPokemons del reducer

  if (!pokemons) {
    return () => alert("Pokemon not found");
  }

  if (Array.isArray(pokemons)) {
    const nextPage = () => {
      if (currentPage < pokemons.length - 1) {
        setCurrentPage(currentPage + 12);
      }
    };
    const prevPage = () => {
      if (currentPage > 0) setCurrentPage(currentPage - 12);
    };
    const filteredPokemons = () => {
      return pokemons.slice(currentPage, currentPage + 12);
    };
    return (
      <div>
        <div className="all">
          <div className="page" id="dataCompleted">
            <button className="prev" onClick={prevPage}>
              prev
            </button>
            <button className="next" onClick={nextPage}>
              next
            </button>
          </div>
          <div className="container">
            {filteredPokemons().map((p) => {
              return (
                <div key={p.id} className="pokemon">
                  <Link to={`/${p.id}/detail`}>
                    <h3>{p.name}</h3>
                    <div className="pokemonImage">
                      <img src={p.image} alt={p.name} />
                    </div>
                    <div className="mapTypes">
                      {p.types.map((t) => {
                        return <h4 key={p.types.indexOf(t) + 1}>{t}</h4>;
                      })}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div key={pokemons.id} className="pokemon">
        <Link to={`/${pokemons.id}/detail`}>
          <h3>{pokemons.name}</h3>
          <div className="pokemonImage">
            <img src={pokemons.image} alt={pokemons.name} />
          </div>
          <div className="mapTypes">
            {pokemons.types.map((t) => {
              return <h4 key={pokemons.types.indexOf(t) + 1}>{t}</h4>;
            })}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Pokemons;
