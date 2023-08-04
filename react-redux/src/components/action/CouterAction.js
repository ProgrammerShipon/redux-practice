import { DECREMENT, GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, INCREMENT, RESET } from "../constants/Constants"

export const incrementCounter = () => {
   return {
      type: INCREMENT
   }
}

export const decrementCounter = () => {
   return {
      type: DECREMENT
   }
}

export const resetCounter = () => {
   return {
      type: RESET
   }
}

const getTodosRequest = () => {
   return {
         type: GET_TODOS_REQUEST
      }
}

const getTodosSuccess = () => {
   return {
      type: GET_TODOS_SUCCESS
   }
}

const getTodosFailed = () => {
   return {
      type: GET_TODOS_FAILED
   }
}