import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { setPokemons } from "../../Actions";
//import { useNavigate } from "react-router-dom";
import "./addPokemon.css";

export default function AddPokemon() {
  const allTypes = useSelector((store) => {
    return store.types;
  });

  const [myPokemon, setMyPokemon] = useState({
    name: "",
    hp: "",
    strength: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });

  // let navigate = useNavigate();

  const onInputChange = (e) => {
    setMyPokemon({ ...myPokemon, [e.target.id]: e.target.value });
  };
  const onTypeChange = (e) => {
    setMyPokemon({
      ...myPokemon,
      types: [...myPokemon.types, e.target.value],
    });
  };
  async function onSubmit(e) {
    console.log(myPokemon);
    try {
      e.preventDefault();
      await axios.post("http://localhost:3001/pokemons/create", myPokemon);
      setPokemons({
        name: "",
        hp: "",
        strength: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: [],
      });
      alert("Pokemon successfully created!");
    } catch (error) {
      alert("Pokemon creation failed.");
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <>Create your own Pokemon</>
      </div>
      <label>Name: </label>
      <input
        onChange={(e) => onInputChange(e)}
        id="name"
        className="name"
        type="text"
        placeholder="Name..."
        value={myPokemon.name}
      />

      <label>Life: </label>
      <input
        onChange={(e) => onInputChange(e)}
        id="hp"
        className="life"
        type="number"
        value={myPokemon.hp}
      />

      <label>Strength: </label>
      <input
        onChange={(e) => onInputChange(e)}
        id="strength"
        className="strength"
        type="number"
        value={myPokemon.strength}
      />

      <label>Defense: </label>
      <input
        onChange={(e) => onInputChange(e)}
        id="defense"
        className="defense"
        type="number"
        value={myPokemon.defense}
      />

      <label>Speed: </label>
      <input
        onChange={(e) => onInputChange(e)}
        id="speed"
        className="speed"
        type="number"
        value={myPokemon.speed}
      />
      <label>Height: </label>
      <input
        onChange={(e) => onInputChange(e)}
        id="height"
        className="height"
        type="number"
        value={myPokemon.height}
      />
      <label>Weight: </label>
      <input
        onChange={(e) => onInputChange(e)}
        id="weight"
        className="weight"
        type="number"
        value={myPokemon.weight}
      />
      <label>Type</label>
      <select onClick={(e) => onTypeChange(e)} className="types">
        {allTypes.map((t, index) => {
          return (
            <option key={index} value={[t]}>
              {t}
            </option>
          );
        })}
      </select>

      <div>
        <button type="submit">Create pokemon</button>
      </div>
    </form>
  );
}
