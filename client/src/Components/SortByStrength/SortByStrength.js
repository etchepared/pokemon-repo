import { useDispatch } from "react-redux";
import { sortByStrength } from "../../Actions";
import "./sortByStrength.css";

export default function SortByStrength() {
  const dispatch = useDispatch();

  function onSelectChange(e) {
    e.preventDefault();
    dispatch(sortByStrength(e.target.value));
  }
  return (
    <select id="select" name="select" onChange={onSelectChange}>
      <option value="0">Sort by Strength</option>
      <option value="MENOR">- Strength</option>
      <option value="MAYOR">+ Strength</option>
    </select>
  );
}
