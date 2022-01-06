import React, { useState } from "react";
import Pokemons from "../Pokemons/Pokemons.js";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import {
  catchPokemon,
  filterByType,
  filterCreated,
  sortByName,
  sortByStrength,
  sortPokemons,
} from "../../Actions/index.js";
import { useLocation } from "react-router-dom";

const Home = () => {
  const allTypes = useSelector((store) => {
    return store.types;
  });
  const [search, setSearch] = useState("");
  let dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    dispatch(catchPokemon(search));
  }

  function onInputChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  // function onNameChange(e) {
  //   e.preventDefault();
  //   dispatch(sortByName(e.target.value));
  // }

  function onSortChange(e) {
    e.preventDefault();
    dispatch(sortPokemons(e.target.value));
  }

  function onTypeChange(e) {
    e.preventDefault();
    dispatch(filterByType(e.target.value));
  }

  function onCreatorChange(e) {
    e.preventDefault();
    dispatch(filterCreated(e.target.value));
  }

  return (
    <div className="homeContainer">
      <div>
        <div className="center">
          <div id="searchbar">
            <form id="searchForm" onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="Pokemon name..."
                onChange={onInputChange}
                value={search}
              />
              {/* <div id="dataCompleted"> */}
              <button type="submit">Catch</button>
              {/* </div> */}
            </form>
            {/* <CatchPokemon /> */}
          </div>
          <div id="sort">
            <select id="select" name="select" onChange={onSortChange}>
              {/* <optgroup label="Sort by Name"> */}
              {/* <option value="0">Sort by Name</option> */}
              <option value="0">Sort options</option>
              <option value="A-Z">Order A-Z</option>
              <option value="Z-A">Order Z-A</option> Sort by Name
              {/* </optgroup> */}
              {/* </select> */}
              {/* <SortByName /> */}
              {/* <select id="select" name="select" onChange={onStrengthChange}> */}
              {/* <option value="0">Sort by Strength</option> */}
              {/* <optgroup label="Sort by Strength"> */}
              <option value="MENOR">Weaker</option>
              <option value="MAYOR">Strongest</option>
              {/* </optgroup> */}
            </select>
            {/* <SortByStrength /> */}
            <select id="select" name="select" onChange={onTypeChange}>
              <option id="selectOp" value="ALL">
                Filter by Type
              </option>
              {allTypes.map((t, index) => {
                return (
                  <option key={index} value={t}>
                    {t}
                  </option>
                );
              })}
            </select>
            {/* <FilterByType /> */}
            <select id="select" name="select" onChange={onCreatorChange}>
              <option value="ALL">Filter by Creator</option>
              <option value="API">Existing Pokemons</option>
              <option value="CREATED">My Pokemons</option>
            </select>
            {/* <FilterCreated /> */}
            <button
              id="select"
              onClick={() =>
                (window.location.href = "http://localhost:3000/home")
              }
            >
              Reset filters
            </button>
          </div>
        </div>
        <Pokemons />
      </div>
    </div>
  );
};

export default Home;
