import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPokemons } from "../../Actions";
import "./pokemons.css";

const Pokemons = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPokemons());
  }, [dispatch]); //esto monta en el initialState del reducer lo que diga la funcion setPokemons

  const pokemons = useSelector((store) => {
    return store.trappedPokemons;
  }); // trae del store la info que está dentro del estado trappedPokemons del reducer
  
  if(Array.isArray(pokemons)){
    return (
      <div className="container">
        {pokemons.map((p) => {
          return (
            <div key={p.id} className="pokemon">
              <h3>{p.name}</h3>
              <div className="pokemonImage">
                <img src={p.image} alt={p.name} />
              </div>
              <div className="mapTypes">
                {p.types.map((t) => {
                  return <h4 key={t.id}>{t["name"]}</h4>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div className="container">
      <div key={pokemons.id} className="pokemon">
        <h3>{pokemons.name}</h3>
          <div className="pokemonImage">
            <img src={pokemons.image} alt={pokemons.name} />
          </div>
          <div className="mapTypes">
            {pokemons.types.map((t) => {
              return <h4 key={t.id}>{t.name}</h4>;
            })}
          </div>
        </div>
    </div>
  );
};

export default Pokemons;
