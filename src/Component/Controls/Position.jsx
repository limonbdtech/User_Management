import { useDispatch, useSelector } from "react-redux";
import { Positionmethod } from "../../service/action/action";



function Position() {
    let Position = useSelector(state=>state.position)
    let dispatch = useDispatch()
    
    return (
        <div>
  <div className="form-group d-flex align-items-center">
    <label htmlFor="exampleFormControlSelect1">position</label>
    <select className="form-control" name="position" value={Position} onChange={(e)=>dispatch(Positionmethod(e.target.value))} id="exampleFormControlSelect1">
      <option value="all">all</option>
      <option value="frontend">frontend developer</option>
      <option value="backend">backend developer</option>
      <option value="senior">senior softwear enginner</option> 
      <option value="softwear">softwear architect</option> 
    </select>
  </div>
        </div>
    );
}

export default Position;