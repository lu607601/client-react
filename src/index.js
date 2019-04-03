import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import App from "./App";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import {
  connectRouter,
  routerMiddleware,
  ConnectedRouter
} from "connected-react-router/immutable";
import { createLogger } from "redux-logger";

import Immutable from "immutable";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers/index";

const history = createBrowserHistory();

const initialState = Immutable.Map();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composeEnhancer(
    applyMiddleware(routerMiddleware(history), thunk, createLogger())
  )
);
const render = Component =>
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Component />
      </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
  );

render(App);
