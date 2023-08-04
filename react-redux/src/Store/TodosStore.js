import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { todosReducer } from "../components/reducer/TodosReducer";

export const todosStore = createStore(todosReducer, applyMiddleware(thunk));

