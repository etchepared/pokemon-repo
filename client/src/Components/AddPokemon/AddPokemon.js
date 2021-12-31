import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { setPokemons } from "../../Actions";
//import { useNavigate } from "react-router-dom";
import "./addPokemon.css";
import hand from "../MyImages/pngegg.png";

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
      window.location.href = "http://localhost:3000/home";
    } catch (error) {
      alert("Pokemon creation failed.");
    }
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <div>
        <>Create your own Pokemon</>
      </div>
      <div className="inputsContainer">
        <div className="containerLeft">
        <div>
          <label>Name: </label>
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
        <div>
          <label>Life: </label>
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
          <label>Strength: </label>
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
          <label>Defense: </label>
          <input
            onChange={(e) => onInputChange(e)}
            id="defense"
            className="defense"
            type="range"
            min="0"
            max="200"
            value={myPokemon.defense}
          />
        </div>
        <div>
          <label>Speed: </label>
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
          <label>Height: </label>
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
          <label>Weight: </label>
          <input
            onChange={(e) => onInputChange(e)}
            id="weight"
            className="weight"
            type="range"
            min="0"
            max="200"
            value={myPokemon.weight}
          />
        </div>
        <div>
          <label>Type: </label>
          <div className="typesBoxs">
            {allTypes.map((t, index) => {
              return (
                <div key={t} className="checkbag">
                  <label onClick={(e) => onTypeChange(e)} className="types">
                    <div className="checkbox">
                      <input  type="checkbox" key={index} value={[t]}/>
                        {t}
                    </div>
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="containerRight">
        <h3>
          {myPokemon.name}
        </h3>
        <img src={hand} alt="" />
        <div className="mapTypes">
                    {myPokemon.types.map((t) => {
                      return <h4 key={myPokemon.types.indexOf(t) + 1}>{t}</h4>;
                    })}
        </div>
        <h5>Life: {myPokemon.hp}</h5>
        <h5>Strength: {myPokemon.strength}</h5>
        <h5>defense: {myPokemon.defense}</h5>
        <h5>speed: {myPokemon.speed}</h5>
        <h5>height: {myPokemon.height}</h5>
        <h5>weight: {myPokemon.weight}</h5>
        
      </div>
      </div>
        <div>
          <button type="submit">My pokemon is ready!</button>
        </div>
    </form>
  );
}
