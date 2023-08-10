
import { useDispatch, useSelector } from "react-redux";
import { SortMehtod } from "../../service/action/action";

function Sort() {
  // Redux state for sorting
  let sort = useSelector(state => state.sort);
  let dispatch = useDispatch();

  return (
    <div>
      <div className="form-group d-flex align-items-center">
        <label htmlFor="exampleFormControlSelect1">Sort: </label>
        <select
          className="form-control"
          name="position"
          value={sort}
          onChange={(e) => dispatch(SortMehtod(e.target.value))}
          id="exampleFormControlSelect1"
        >
          <option value="normal">Normal</option>
          <option value="asending">Ascending Order</option>
          <option value="desending">Descending Order</option>
        </select>
      </div>
    </div>
  );
}

export default Sort;
