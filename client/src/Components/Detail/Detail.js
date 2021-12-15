import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedPokemon } from "../../Actions";
import "./detail.css";

const Detail = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(selectedPokemon(id));
  }, [dispatch, id]); //esto monta en el initialState del reducer lo que diga la funcion setPokemons

  const pokemon = useSelector((store) => {
    return store.catchedPokemon;
  }); // trae del store la info que está dentro del estado trappedPokemons del reducer
  if (!pokemon) {
    return <div className="error">Pokemon no encontrado</div>;
  }

  return (
    <div className="container">
      <div key={pokemon.id} className="pokemon">
        <h3>{pokemon.name}</h3>
        <div className="pokemonImage">
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
        <div className="mapTypes">
          {pokemon.types.map((t) => {
            return <h4 key={pokemon.types.indexOf(t) + 1}>{t}</h4>;
          })}
        </div>
        <h5>Life: {pokemon.hp}</h5>
        <h5>Strength: {pokemon.strength}</h5>
        <h5>defense: {pokemon.defense}</h5>
        <h5>speed: {pokemon.speed}</h5>
        <h5>height: {pokemon.height}</h5>
        <h5>weight: {pokemon.weight}</h5>
      </div>
    </div>
  );
};

export default Detail;
