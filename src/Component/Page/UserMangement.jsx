// import { useState } from "react";
import Show from "../Show/Show";
import Create from "../Create";
// import { Routes,Route } from "react-router-dom";
import { useState } from "react";




function UserMangement() {
    let [create,setCreate]= useState(null)
    // let createcall = ()=>{
        
    // }
    console.log(create)
    return (
        <div>
            <h2 className="text-center text-success h1 font-weight-bold">User Mangement</h2>
            
            {/* <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/" element={<Show />} />
        </Routes> */}
            {create ? <Create  setCreate={setCreate}/>: <Show setCreate={setCreate}/>}
           
        </div>
    );
}

export default UserMangement;