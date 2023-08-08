import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import App from "./App";

import counterReducer from "./redux/counterReducer"
const store = configureStore({reducer :counterReducer });

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
   <Provider store={store}>
    <App />
   </Provider>
  </StrictMode>,
  rootElement
);
