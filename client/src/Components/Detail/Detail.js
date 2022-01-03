import { React } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./detail.css";

const Detail = () => {
  const { id } = useParams();

  let pokemon = useSelector((store) => {
    return store.trappedPokemons;
  });
  let pokemon2 = useSelector((store) => {
    return store.catchedPokemon;
  });
  if (pokemon2) {
    pokemon = pokemon.concat(pokemon2);
  }

  pokemon = pokemon.find((p) => p.id == id);

  if (!pokemon) {
    return <div className="error">Pokemon no encontrado</div>;
  }
  //console.log(pokemon);
  return (
    <div id="detailContainer" className="container">
      <div key={pokemon.id} id="detailcard" className="pokemon">
        <div>
          <h3>{pokemon.name}</h3>
          <div className="pokemonImage">
            <img src={pokemon.image} alt={pokemon.name} />
          </div>
          <div className="mapTypes">
            {pokemon.types.map((t) => {
              return <h4 key={pokemon.types.indexOf(t) + 1}>{t}</h4>;
            })}
          </div>
        </div>
        <div>
          <h5>Life: {pokemon.hp}</h5>
          <h5>Strength: {pokemon.strength}</h5>
          <h5>defense: {pokemon.defense}</h5>
          <h5>speed: {pokemon.speed}</h5>
          <h5>height: {pokemon.height}</h5>
          <h5>weight: {pokemon.weight}</h5>
        </div>
      </div>
    </div>
  );
};

export default Detail;
