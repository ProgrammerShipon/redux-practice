
// async actions - api calling
// api url - https://jsonplaceholder.typecode.com/todos
// middleware - redux-thunk
// axios api

const { default: axios } = require("axios")
const { createStore, applyMiddleware } = require("redux")
const {default: thunk} = require("redux-thunk")

// constants
const get_todos_request = "get_todos_request"
const get_todos_success = "get_todos_success"
const get_todos_failed = "get_todos_failed"
const api_url = "https://jsonplaceholder.typicode.com/todos"

// states
const initialTodosState = {
   todos: [],
   isLoading: false,
   error: null,
}

// action 
const getTodosRequest = () => {type: get_todos_request}
const getTodosFailed = (error) =>{ return {type: get_todos_failed, payload: error}}
const getTodosSuccess = (todos) => {
   return { type: get_todos_success, payload: todos}
}

// reducer
const todosReducer = (state = initialTodosState, action) => {
switch (action.type) {
   case get_todos_request:
      return {
         ...state,
         isLoading: true
      }

      case get_todos_success:
         return {
            ...state,
            isLoading: false,
            todos: action.payload,
         }

         case get_todos_failed: 
         return {
            ...state,
            isLoading: false,
            error: action.payload,
         }

   default:
      return state
}
}

const fetchData = () => {
return ( dispatch ) => {
   dispatch(getTodosRequest);
   axios.get(api_url).then(res => {
      const todos = res.data
      dispatch(getTodosSuccess(todos))
   }).catch(err => {
      const errorMessage = err.message;
      dispatch(getTodosFailed(errorMessage))
   })
}
}

// store date
const store = createStore(todosReducer, applyMiddleware(thunk))

store.subscribe(() => {
   console.log(store.getState())
})

// action creator
store.dispatch(fetchData())
