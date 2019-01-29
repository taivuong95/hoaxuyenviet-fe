import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./containers/App/App";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import productReducer from "./redux/product/reducer";
import userReducer from "./redux/user/reducer";
import htmlContentReducer from "./redux/htmlContent/reducer";

const rootReducer = combineReducers({
  productList: productReducer,
  authUser: userReducer,
  htmlContent: htmlContentReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
