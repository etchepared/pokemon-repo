import { useDispatch, useSelector } from "react-redux";
import { filterByType } from "../../Actions";
import "./filterByType.css";

export default function FilterByType() {
  const allTypes = useSelector((store) => {
    return store.types;
  });

  const dispatch = useDispatch();

  function onSelectChange(e) {
    e.preventDefault();
    dispatch(filterByType(e.target.value));
  }

  return (
    <select id="select" name="select" onChange={onSelectChange}>
      <option id="selectOp" value="ALL">
        Filter by Type
      </option>
      {allTypes.map((t, index) => {
        return (
          <option key={index} value={t}>
            {t}
          </option>
        );
      })}
    </select>
  );
}
