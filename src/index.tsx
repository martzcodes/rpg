import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { loadState, saveState } from "./services/localStorage";
import { throttle } from "lodash";
import thunk from "redux-thunk";

const persistedState = loadState();
let store: any;
if (persistedState) {
  store = createStore(rootReducer, persistedState, applyMiddleware(thunk));
} else {
  store = createStore(rootReducer, applyMiddleware(thunk));
}

store.subscribe(
  throttle(() => {
    saveState({
      ...store.getState()
    });
  }, 1000)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default store;
