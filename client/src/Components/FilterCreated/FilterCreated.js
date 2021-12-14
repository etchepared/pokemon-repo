import { useDispatch } from "react-redux";
import { filterCreated } from "../../Actions";
import "./filterCreated.css";

export default function FilterCreated() {
  const dispatch = useDispatch();

  function onSelectChange(e) {
    e.preventDefault();
    dispatch(filterCreated(e.target.value));
  }

  return (
    <select name="select" onChange={onSelectChange}>
      <option value="ALL">Filter by Creator</option>
      <option value="API">Existing Pokemons</option>
      <option value="CREATED">My Pokemons</option>
    </select>
  );
}
