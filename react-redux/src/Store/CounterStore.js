import { createStore } from "redux";
import counterReducer from "../components/reducer/Reducer";

export const counterStore = createStore(counterReducer)




