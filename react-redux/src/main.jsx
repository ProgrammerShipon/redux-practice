import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import { Provider } from 'react-redux';
import App from './App.jsx';
import { todosStore } from './Store/TodosStore.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider store={counterStore}>
  <Provider store={todosStore}>
    <App />
  </Provider>,
)
