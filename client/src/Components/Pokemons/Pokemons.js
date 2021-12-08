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

  return (
    <div className="container">
      {pokemons.map((p) => {
        return (
          <div className="pokemon">
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
};

export default Pokemons;
