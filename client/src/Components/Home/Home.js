import React, { useEffect, useState } from "react";
//import Pokemons from "../Pokemons/Pokemons.js";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  catchPokemon,
  filterByType,
  filterCreated,
  sortPokemons,
  selectedPokemon,
  resetPokemons,
} from "../../Actions/index.js";
import "../Pokemons/pokemons.css";

//import { useLocation } from "react-router-dom";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pokemons = useSelector((store) => {
    return store.filteredPokemons || store.existingPokemons;
  }); // trae del store la info que está dentro del estado existingPokemons del reducer

  const allTypes = useSelector((store) => {
    return store.types;
  });
  const [search, setSearch] = useState("");
  let dispatch = useDispatch();

  useEffect(() => {
    return dispatch(resetPokemons());
  }, [dispatch]);

  function onSubmit(e) {
    e.preventDefault();
    dispatch(catchPokemon(search));
    setCurrentPage(0);
  }

  function onInputChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  function onSortChange(e) {
    e.preventDefault();
    dispatch(sortPokemons(e.target.value));
    setCurrentPage(0);
  }

  function onTypeChange(e) {
    e.preventDefault();
    dispatch(filterByType(e.target.value));
    setCurrentPage(0);
  }

  function onCreatorChange(e) {
    e.preventDefault();
    dispatch(filterCreated(e.target.value));
    setCurrentPage(0);
  }

  // function onClick(id) {
  //   dispatch(selectedPokemon(id));
  //   window.location.href = "http://localhost:3000/detail";
  // }

  // const detalle = useSelector((store) => {
  //   return store.detail;
  // });

  // console.log(detalle);

  if (Array.isArray(pokemons)) {
    const nextPage = () => {
      if (currentPage + 12 < pokemons.length - 1) {
        setCurrentPage(currentPage + 12);
      }
    };
    const prevPage = () => {
      if (currentPage > 0) setCurrentPage(currentPage - 12);
    };
    const filteredPokemons = () => {
      return pokemons.slice(currentPage, currentPage + 12);
    };
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
                <button type="submit">Catch</button>
                {/* </div> */}
              </form>
              {/* <CatchPokemon /> */}
            </div>
            <div id="sort">
              <select id="select" name="select" onChange={onSortChange}>
                <option value="0">Sort options</option>
                <option value="A-Z">Order A-Z</option>
                <option value="Z-A">Order Z-A</option> Sort by Name
                <option value="MENOR">Weaker</option>
                <option value="MAYOR">Strongest</option>
              </select>

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
              <select id="select" name="select" onChange={onCreatorChange}>
                <option value="ALL">Filter by Creator</option>
                <option value="API">Existing Pokemons</option>
                <option value="CREATED">My Pokemons</option>
              </select>
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

          <div>
            <div className="all">
              {currentPage !== 0 ? (
                <div className="page" id="searchForm">
                  <button className="prev" onClick={prevPage}>
                    prev
                  </button>
                  {currentPage + 12 < pokemons.length - 1 && (
                    <button className="next" onClick={nextPage}>
                      next
                    </button>
                  )}
                </div>
              ) : (
                <div className="page" id="searchForm">
                  {currentPage + 12 < pokemons.length - 1 && (
                    <button className="next" onClick={nextPage}>
                      next
                    </button>
                  )}
                </div>
              )}
              <div className="container">
                {pokemons.length ? (
                  filteredPokemons()?.map((p) => {
                    return (
                      <div
                        key={p.id}
                        className="pokemon"
                        // value={p.id}
                        // onClick={() => onClick(p.id)}
                      >
                        <Link to={`/detail/${p.id}`}>
                          <h3>{p.name}</h3>
                          <div className="pokemonImage">
                            <img src={p.image} alt={p.name} />
                          </div>
                          <div className="mapTypes">
                            {p.types?.map((t) => {
                              return <h4 key={p.types.indexOf(t) + 1}>{t}</h4>;
                            })}
                          </div>
                        </Link>
                      </div>
                    );
                  })
                ) : (
                  <div className="wait">Pokemons are coming...</div>
                )}
              </div>
              {currentPage !== 0 ? (
                <div className="page" id="searchForm">
                  <button className="prev" onClick={prevPage}>
                    prev
                  </button>
                  {currentPage + 12 < pokemons.length - 1 && (
                    <button className="next" onClick={nextPage}>
                      next
                    </button>
                  )}
                </div>
              ) : (
                <div className="page" id="searchForm">
                  {currentPage + 12 < pokemons.length - 1 && (
                    <button className="next" onClick={nextPage}>
                      next
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="notFound">Pokemon not found</div>;
  }
};

export default Home;
