import React from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Landing from "./Components/Landing/Landing";
import Detail from "./Components/Detail/Detail";
import Navbar from "./Components/Navbar/Navbar";
import Form from "./Components/Form/Form";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      {location.pathname === "/" ? (
        <Landing />
      ) : (
        <>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/:id/detail" element={<Detail />} />
            <Route path="/create" element={<Form />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
