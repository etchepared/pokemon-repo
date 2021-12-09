import { useDispatch } from "react-redux";
import { sortByStrength } from "../../Actions";
import "./sortByStrength.css";

export default function SortByStrength() {
  const dispatch = useDispatch();

  function onSelectChange(e) {
    dispatch(sortByStrength(e.target.value));
  }
  return (
    <select name="select" onChange={onSelectChange}>
      <option value="MENOR">- Strength</option>
      <option value="MAYOR">+ Strength</option>
    </select>
  );
}
