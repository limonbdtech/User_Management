import UserMangement from "./Component/Page/UserMangement";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  return (
    <div className="container-xl container-fulid">
         <div className="row">
           <div className="col">
                <UserMangement/>

           </div>
         </div>
    </div>
  );
}

export default App;