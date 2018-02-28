import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers/index";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './style/style.css';
const store = createStore(reducers,{},applyMiddleware(reduxThunk));

ReactDOM.render(
  <div className="container">
  <Provider store={store}>
    <App />
  </Provider>
  </div>,
  document.getElementById("root")
);
registerServiceWorker();
