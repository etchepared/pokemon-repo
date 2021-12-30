import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setPokemons, setTypes } from "../../Actions";
import PokeGo from "../MyImages/PokeGo.png";
import HomeReset from "../MyImages/Home.png";
import ash from "../MyImages/3770952.jpg"
import "./toHome.css";

const ToHome = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPokemons());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setTypes());
  }, [dispatch]);

  return (
    <div className="containerToHome">
      <nav>
        <div id="homeButton" onClick={() => dispatch(setPokemons())}>
          <Link to="/home">
          <img className="pokego" src={ash} alt="Home" />
          <img className="homeReset" src={HomeReset} alt="Home" />
            {/* <span className="homeSpan">Home / Reset filters</span> */}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default ToHome;
