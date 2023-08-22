// import { useState } from "react";
import Show from "../Show/Show";
import Create from "../Create";
// import { Routes,Route } from "react-router-dom";
import { useState } from "react";




function UserMangement() {
    let [create,setCreate]= useState(null)


    return (
        <div>
            <h2 className="text-center text-success h1  font-weight-bold">User Mangement</h2>
            {create ? <Create  setCreate={setCreate}/>: <Show setCreate={setCreate}/>}
           
        </div>
    );
}

export default UserMangement;