import { React } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./pokemons.css";

const Pokemons = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setPokemons());
  // }, [dispatch]); //esto monta en el initialState del reducer lo que diga la funcion setPokemons

  // useEffect(() => {
  //   dispatch(setTypes());
  // }, [dispatch]);

  const pokemons = useSelector((store) => {
    return store.catchedPokemon || store.trappedPokemons;
  }); // trae del store la info que está dentro del estado trappedPokemons del reducer
  if (!pokemons) {
    return <div className="error">Pokemon no encontrado</div>;
  }
  //console.log(pokemons);
  if (Array.isArray(pokemons)) {
    return (
      <div className="container">
        {pokemons.map((p) => {
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
