import  { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Add, Change } from "../service/action/action";
import { PropTypes } from 'prop-types';

function Create({ setCreate }) {
  // Redux setup
  let dispatch = useDispatch();
  let onchange = useSelector(state => state.onchange);

  // State for handling errors
  let [error, setError] = useState("");

  // Regular expression for email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]*[0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Handler for input changes
  const change = (e) => {
    let { name, value } = e.target;

    // Dispatch action to update Redux state
    dispatch(Change(name, value));

    // Email validation
    if (name === "email") {
      if (emailRegex.test(value)) {
        setError(""); // Clear error message
      }
    }
  }

  // Handler for form submission
  const add = (e) => {
    e.preventDefault();

    // Basic email validation using regex
    if (emailRegex.test(onchange.email)) {
      // Dispatch action to add user data
      dispatch(Add(onchange));
      console.log("Validation passed");
      setCreate(null); // Close the modal
      dispatch(Change("fname", "")); // Clear form inputs
      dispatch(Change("email", ""));
    } else {
      setError("Invalid email try to :(hp23@gmail.com)"); // Display error message
    }
  }

  return (
    <form onSubmit={add}>
      <div className="modal show" style={{ display: 'block', position: 'initial', width: "100%" }}>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Create User</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {/* Input fields */}
            <div className="form-group">
              <label className="text-start" htmlFor="exampleFormControlInput1">Name: </label>
              <input type="text" name="fname" value={onchange.fname } onChange={change} className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label className="text-start" htmlFor="email">Email address: </label>
              <input type="text" name="email" value={onchange.email} onChange={change} className="form-control" id="email" placeholder="Enter your email" required />
            </div>
              {/* Display error message if present */}
              {error && <p className="text-danger">{error}</p>}
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Position select </label>
              <select className="form-control" name="position" required value={ onchange.type} onChange={change} id="exampleFormControlSelect1">
                <option value="frontend developer">Frontend Developer</option>
                <option value="backend developer">Backend Developer</option>
                <option value="senior software engineer">Senior Software Engineer</option>
                <option value="software architect">Software Architect</option>
              </select>
            </div>
          
          </Modal.Body>

          <Modal.Footer>
            {/* Close button */}
            <Button onClick={() => setCreate(null)} variant="secondary">Close</Button>
            {/* Submit button */}
            <Button type="submit" value="save">Save</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </form>
  );
}

// PropTypes validation
Create.propTypes = {
  setCreate: PropTypes.func.isRequired,
  // Other prop types...
};

export default Create;
