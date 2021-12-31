import { useState } from "react";
import { useDispatch } from "react-redux";
import { catchPokemon } from "../../Actions";
import "./catchPokemon.css";

export default function CatchPokemon() {
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

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Pokemon name..." onChange={onInputChange} value={search} />
        <input type="submit"  value="Catch" />
      </form>
    </div>
  );
}
