import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { setPokemons } from "../../Actions";
import "./addPokemon.css";
import hand from "../MyImages/pokeboladibujo.webp";

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

  const onInputChange = (e) => {
    setMyPokemon({ ...myPokemon, [e.target.id]: e.target.value });
  };

  const onTypeChange = (e) => {
    if (!myPokemon.types.includes(e.target.value)) {
      setMyPokemon({
        ...myPokemon,
        types: [...myPokemon.types, e.target.value],
      });
    } else {
      setMyPokemon({
        ...myPokemon,
        types: [...myPokemon.types.filter((el) => e.target.value != el)],
      });
    }
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
      window.location.href = "http://localhost:3000/home";
    } catch (error) {
      alert("Pokemon creation failed.");
    }
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      {myPokemon.name ? (
        <div id="dataCompleted">
          <button type="submit">My pokemon is ready!</button>
        </div>
      ) : null}
      <div className="inputsContainer">
        <div className="containerAddLeft">
          <div className="top">
            <div id="name">
              <div>Name: </div>
              <div>
                <input
                  onChange={(e) => onInputChange(e)}
                  id="name"
                  className="name"
                  type="text"
                  placeholder="Name..."
                  required="required"
                  value={myPokemon.name}
                />
              </div>
            </div>
            <div className="stats">
              <div>
                <div>
                  <div>Life: </div>
                  <input
                    onChange={(e) => onInputChange(e)}
                    id="hp"
                    className="life"
                    type="range"
                    min="0"
                    max="200"
                    value={myPokemon.hp}
                  />
                </div>
                <div>
                  <div>Strength: </div>
                  <input
                    onChange={(e) => onInputChange(e)}
                    id="strength"
                    className="strength"
                    type="range"
                    min="0"
                    max="200"
                    value={myPokemon.strength}
                  />
                </div>
                <div>
                  <div>Defense: </div>
                  <input
                    onChange={(e) => onInputChange(e)}
                    id="defense"
                    className="defense"
                    type="range"
                    min="0"
                    max="300"
                    value={myPokemon.defense}
                  />
                </div>
              </div>
              <div>
                <div>
                  <div>Speed: </div>
                  <input
                    onChange={(e) => onInputChange(e)}
                    id="speed"
                    className="speed"
                    type="range"
                    min="0"
                    max="200"
                    value={myPokemon.speed}
                  />
                </div>
                <div>
                  <div>Height: </div>
                  <input
                    onChange={(e) => onInputChange(e)}
                    id="height"
                    className="height"
                    type="range"
                    min="0"
                    max="200"
                    value={myPokemon.height}
                  />
                </div>
                <div>
                  <div>Weight: </div>
                  <input
                    onChange={(e) => onInputChange(e)}
                    id="weight"
                    className="weight"
                    type="range"
                    min="0"
                    max="10000"
                    value={myPokemon.weight}
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="bottom">
            <label>Type: </label>
            <div className="typesBoxs">
              {allTypes.map((t, index) => {
                return (
                  <div key={t} className="checkbag">
                    <label onClick={(e) => onTypeChange(e)} className="types">
                      <div className="checkbox">
                        <input type="checkbox" key={index} value={[t]} />
                        {t}
                      </div>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="containerAddRight">
          <div key={myPokemon.id} id="detailcard" className="pokemon">
            <div>
              <h3>{myPokemon.name || "Name"}</h3>
              <div className="pokemonImage">
                <img src={hand} alt={myPokemon.name} />
              </div>
              <div className="mapTypes">
                {myPokemon.types.map((t) => {
                  return <h4 key={myPokemon.types.indexOf(t) + 1}>{t}</h4>;
                })}
              </div>
            </div>
            <div className="statsDetail">
              <h5>Life: {myPokemon.hp}</h5>
              <h5>Strength: {myPokemon.strength}</h5>
              <h5>defense: {myPokemon.defense}</h5>
              <h5>speed: {myPokemon.speed}</h5>
              <h5>height: {myPokemon.height}</h5>
              <h5>weight: {myPokemon.weight}</h5>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
