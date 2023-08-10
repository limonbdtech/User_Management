import  { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Edite, EditeCondition, Update } from "../../service/action/action";
import { PropTypes } from 'prop-types';
import { Button } from "react-bootstrap";
import Position from "../Controls/Position";
import Search from "../Controls/Search";
import ShowRow from "./ShowRow";
import Sort from "../Controls/Sort";

function Show({ setCreate }) {
  // Redux state variables
  let search = useSelector(state => state.search);
  let position = useSelector(state => state.position);
  let user = useSelector(state => state.user);
  let sort = useSelector(state => state.sort);
  let editecondition = useSelector(state => state.editecondition);

  let dispatch = useDispatch();
  let [updateData, setUpdateData] = useState({});

  // Fetch data for editing
  let data = useMemo(() => user.find((item) => item.id === editecondition) || {}, [
    user,
    editecondition
  ]);

  useEffect(() => {
    setUpdateData(data);
  }, [data]);

  // Handle update
  let handleUpdate = () => {
    dispatch(Edite(null));
    dispatch(EditeCondition(null));
    let updatedData = { ...data, ...updateData };
    dispatch(Update(updatedData));
  }

  // Handle input change for editing
  let handleChange = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value
    });
  }

  // Filtering and sorting logic
  let filterData = user.filter((item) => {
    const lowerSearch = search.toLowerCase();
    if (position === "all") {
      return (
        item.fname.toLowerCase().includes(lowerSearch) ||
        item.email.toLowerCase().includes(lowerSearch)
      );
    } else {
      return item.position.includes(position);
    }
  });

  let sortedData;

  if (sort === "normal") {
    sortedData = filterData;
  } else if (sort === "asending") {
    sortedData = filterData.slice().sort((a, b) => a.fname.localeCompare(b.fname));
  } else if (sort === "desending") {
    sortedData = filterData.slice().sort((a, b) => b.fname.localeCompare(a.fname));
  } else {
    sortedData = filterData;
  }

  return (
    <div>
      <table className="table table table-responsive align-middle">
        <thead>
          <tr className="d-flex align-items-center justify-content-between">
            <th scope="col"> <Search /> </th>
            <th scope="col"> <Position /> </th>
            <th scope="col"> <Sort /> </th>
            <th scope="col">
              create: {<Button onClick={() => setCreate(true)}>Create</Button>}
            </th>
          </tr>
        </thead>
      </table>

      <table className="table table table-responsive align-middle">
        <thead>
          <tr className="text-center">
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">position</th>
            <th scope="col">action</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {filterData !== "" ? (
            sortedData.map((item, index) =>
              <ShowRow key={item.id} item={item} index={index} updateData={updateData} setUpdateData={setUpdateData}
                handleChange={handleChange} handleUpdate={handleUpdate} />
            )
          ) : (
            user.map((item, index) =>
              <ShowRow key={item.id} item={item} index={index} updateData={updateData} setUpdateData={setUpdateData}
                handleChange={handleChange} handleUpdate={handleUpdate} />
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

Show.propTypes = {
  setCreate: PropTypes.func.isRequired,
  // Other prop types...
};

export default Show;
