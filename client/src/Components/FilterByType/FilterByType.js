import { useDispatch } from "react-redux";
import { filterByType } from "../../Actions";
import "./filterByType.css";

export default function FilterByType() {
  const dispatch = useDispatch();

  function onSelectChange(e) {
    e.preventDefault();
    dispatch(filterByType(e.target.value));
  }

  return (
    <select name="select" onChange={onSelectChange}>
      <option value="ALL">Filter by Type</option>
      <option value="NORMAL">Normal</option>
      <option value="FITHTING">fighting</option>
      <option value="FLYING">flying</option>
      <option value="POISON">poison</option>
      <option value="GROUND">ground</option>
      <option value="ROCK">rock</option>
      <option value="BUG">bug</option>
      <option value="GHOST">ghost</option>
      <option value="STEEL">steel</option>
      <option value="FIRE">fire</option>
      <option value="WATER">water</option>
      <option value="GRASS">grass</option>
      <option value="ELECTRIC">electric</option>
      <option value="PSYCHIC">psychic</option>
      <option value="ICE">ice</option>
      <option value="DRAGON">dragon</option>
      <option value="DARK">dark</option>
      <option value="FAIRY">fairy</option>
      <option value="UNKNOWN">unknown</option>
      <option value="SHADOW">shadow</option>
    </select>
  );
}
