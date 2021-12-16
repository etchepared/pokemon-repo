import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setPokemons, setTypes } from "../../Actions";
import PokeGo from "../MyImages/PokeGo.png";
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
        <button onClick={() => dispatch(setPokemons())}>
          <Link to="/home">
            <img className="pokego" src={PokeGo} alt="Home" />
          </Link>
        </button>
      </nav>
    </div>
  );
};

export default ToHome;
