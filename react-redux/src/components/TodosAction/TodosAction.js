import axios from "axios";
import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../constants/Constants";

const api_url = "https://jsonplaceholder.typicode.com/todos";

export const getAllTodos = () => async (dispatch) => {
   dispatch({type: GET_TODOS_REQUEST});
  try {
    const res = await axios.get(api_url)
   dispatch({type: GET_TODOS_SUCCESS, payload: res.data})
  } catch (err) {
   dispatch({ 
      type: GET_TODOS_FAILED, 
      payload: err.message
   })
  }
}