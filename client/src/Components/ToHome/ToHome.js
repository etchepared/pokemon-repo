import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setPokemons, setTypes } from "../../Actions";
import PokeGo from "../MyImages/PokeGo.png";
import Home from "../MyImages/Home.png";
import Reset from "../MyImages/ResetFilters.png";
import ash from "../MyImages/3770952.jpg"
import "./toHome.css";

const ToHome = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(setPokemons());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setTypes());
  }, [dispatch]);

  return (
    <div className="containerToHome">
      <nav>
        <div className="homeButton" onClick={() => dispatch(setPokemons())}>
          <Link to="/home">
          <img className="pokego" src={ash} alt="Home" />
          {location.pathname === "/home" ? 
            <img className="homeReset" src={Reset} alt="Home" /> : 
            <img className="home" src={Home} alt="Home" />
          }
            {/* <span className="homeSpan">Home / Reset filters</span> */}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default ToHome;
