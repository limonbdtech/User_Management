import { createStore} from "redux";
import { User} from "./service/reducer/reducer";

let store = createStore(User)

export default store;