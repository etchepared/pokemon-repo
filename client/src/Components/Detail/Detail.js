import { React } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./detail.css";

const Detail = () => {
  //const dispatch = useDispatch();

  const { id } = useParams();

  // useEffect(() => {
  //   dispatch(selectedPokemon(id));
  // }, [dispatch, id]); //esto monta en el initialState del reducer lo que diga la funcion setPokemons

  let pokemon = useSelector((store) => {
    return store.trappedPokemons;
  }); // trae del store la info que está dentro del estado trappedPokemons del reducer
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
