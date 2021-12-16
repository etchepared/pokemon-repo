import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Form() {
  const allTypes = useSelector((store) => {
    return store.types;
  });

  const [state, setState] = useState({
    name: "",
    life: 0,
    strength: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    types: [],
  });

  const handleState = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };
  //console.log(state);
  return (
    <div>
      <>Create your own Pokemon</>
      <div>
        Name:
        <input
          id="name"
          className="name"
          type="text"
          placeholder="Name..."
          onChange={(e) => handleState(e)}
        />
      </div>
      <div>
        Life:{" "}
        <input
          id="life"
          className="life"
          type="number"
          onChange={(e) => handleState(e)}
        />
      </div>
      <div>
        Strength:{" "}
        <input
          id="strength"
          className="strength"
          type="number"
          onChange={(e) => handleState(e)}
        />
      </div>
      <div>
        Defense:{" "}
        <input
          id="defense"
          className="defense"
          type="number"
          onChange={(e) => handleState(e)}
        />
      </div>
      <div>
        Speed:{" "}
        <input
          id="speed"
          className="speed"
          type="number"
          onChange={(e) => handleState(e)}
        />
      </div>
      <div>
        Height:{" "}
        <input
          id="height"
          className="height"
          type="number"
          onChange={(e) => handleState(e)}
        />
      </div>
      <div>
        Weight:{" "}
        <input
          id="weight"
          className="weight"
          type="number"
          onChange={(e) => handleState(e)}
        />
      </div>
      <select id="types" className="types" onClick={(e) => handleState(e)}>
        <option value="">Type</option>
        {allTypes.map((t, index) => {
          return (
            <option key={index} value={t}>
              {t}
            </option>
          );
        })}
      </select>
    </div>
  );
}
