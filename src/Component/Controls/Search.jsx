
import { useDispatch, useSelector } from "react-redux";
import { Searchdata } from "../../service/action/action";

import "./Controls.css"



function Search() {
    let Search = useSelector(state=>state.search)
    let disaptch = useDispatch()
    let search =(e)=>{
       disaptch(Searchdata(e.target.value))
    }
    
    return (
        <div className="d-flex align-items-center">
        
            <input className="form-control search mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={Search} onChange={search}>

            </input>
        </div>
    );
}

export default Search;