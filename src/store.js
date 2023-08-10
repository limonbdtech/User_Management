import { createStore} from "redux";
import { Counter } from "./service/reducer/reducer";

let store = createStore(Counter)

export default store;