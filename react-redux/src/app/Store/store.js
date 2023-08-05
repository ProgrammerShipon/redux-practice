import { configureStore } from '@reduxjs/toolkit';
import counterSlice from "../features/counter/counter";

const store = configureStore({
  counter: counterSlice,
});

export default store;
