import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Landing from "./Components/Landing/Landing";
import Detail from "./Components/Detail/Detail";
import Navbar from "./Components/Navbar/Navbar";
import AddPokemon from "./Components/AddPokemon/AddPokemon";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/:id/detail" element={<Detail />} /> */}
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<AddPokemon />} />
      </Routes>
    </div>
  );
}

export default App;
