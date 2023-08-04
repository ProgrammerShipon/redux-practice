# redux-practice

1. State - count: 0
   <br>
2. actions - increment, decrement, reset
   <br>
3. reducers - increment -> count => count + 1
   <br>
   increment -> count => count - 1
   <br>
   increment -> count => 0
   <br>
4. store
   <br>
   export const counterStore = createStore
   <br>(counterReducer)

5. providing store in react
   <Provider store={counterStore}>
   <App />
   </Provider>,
   <br>
6. use store
   <br>
   const store = useSelector(state => state)
   <br>
   console.log(store);

---

## Api data fetching way

Step-1: install packages
react-redux axios redux-thunk
<br>
Step-2: constants define
<br>
Step-3: async action creator
<br>
Step-4: reducers
<br>
Step-5: create store
<br>
Step-6: provide store
<br>
Step-7: use store
<br>
Step-8: adding store
<br>
