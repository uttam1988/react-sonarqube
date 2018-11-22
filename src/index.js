import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AppContainer } from "./Container";
import * as serviceWorker from "./serviceWorker";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./Reducers";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  users: {
    loading: false,
    selectedUser: null,
    ids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  departments: ["HR", "ENGINEERING"]
};
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
