import { useDispatch } from "react-redux";
import { sortByName } from "../../Actions";
import "./sortByName.css";

export default function SortByName() {
  const dispatch = useDispatch();

  function onSelectChange(e) {
    e.preventDefault();
    dispatch(sortByName(e.target.value));
  }

  return (
    <select name="select" onChange={onSelectChange}>
      <option value="A-Z">Order A-Z</option>
      <option value="Z-A">Order Z-A</option>
    </select>
  );
}
