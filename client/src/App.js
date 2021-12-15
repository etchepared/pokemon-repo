import React from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Landing from "./Components/Landing/Landing";
import Detail from "./Components/Detail/Detail";
import ToHome from "./Components/ToHome/ToHome";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <ToHome />
      {location.pathname === "/" ? (
        <Landing />
      ) : (
        <>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/:id/detail" element={<Detail />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
