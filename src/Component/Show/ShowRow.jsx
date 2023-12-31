1 
import PropTypes from 'prop-types';
// import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faRefresh, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Edite, EditeCondition, Remove } from "../../service/action/action";

function ShowRow({
  item,
  index,
  updateData,
  handleChange,
  handleUpdate,
}) {
  // Redux state variables
  let edite = useSelector(state => state.edite);
  let editecondition = useSelector(state => state.editecondition);
    
  let dispatch = useDispatch();

  // Handle the "Edit" button click
  let editItem = (id) => {
    dispatch(Edite(true));
    dispatch(EditeCondition(id));
  };
  return (
    <tr className="text-center">
      <th scope="row">{index + 1}</th>
      <td>
        {edite && editecondition === item.id ? (
          // Edit mode: show input field
          <div className="form-group">
            <input
              type="text"
              name="fname" // Corrected the name attribute
              value={updateData.fname} // Use updateData.name instead of item.fname
              onChange={handleChange}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="enter your name"
            />
          </div>
        ) : (
          // Display name
          item.fname // Corrected to item.name
        )}
      </td>
      <td>
        {edite && editecondition === item.id ? (
          // Edit mode: show input field
          <div className="form-group">
            <input
              type="text"
              name="email"
              value={updateData.email}
              onChange={handleChange}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="enter your email" // Corrected placeholder text
            />
          </div>
        ) : (
          // Display email
          item.email // Corrected to item.email
        )}
      </td>
      <td>
        {edite && editecondition === item.id ? (
          // Edit mode: show select field
          <select
            className="form-control"
            name="position"
            value={updateData.position} // Use updateData.position
            onChange={handleChange}
            id="exampleFormControlSelect1"
          >
            <option value={updateData.position}>select your profession</option>
            <option value="frontend developer">frontend developer</option>
            <option value="backend developer">backend developer</option>
            <option value="senior software engineer">senior software engineer</option>
            <option value="software architect">software architect</option>
          </select>
        ) : (
          // Display position
          item.position
        )}
      </td>
      <td>
        {edite && editecondition === item.id ? (
          // Show "Update" button during edit mode
          <button className='delete' onClick={handleUpdate}>

            <FontAwesomeIcon  className="text-success click"icon={faRefresh}/>
          </button>
        ) : (
          // Show "Edit" button during non-edit mode
          <button className='delete' onClick={() => editItem(item.id)}>

            <FontAwesomeIcon  className="text-success click"icon={faEdit}/>
          </button>
        )}
      </td>
      <td>
        {/* "Remove" button */}
        <button
        
          className="delete"
          onClick={() => dispatch(Remove(item.id))}
        >
          <FontAwesomeIcon  className='text-danger click h-2' icon={faTrash}/>
        </button>
      </td>
    </tr>
  );
}

ShowRow.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  updateData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

export default ShowRow;
