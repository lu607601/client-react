import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Layouts from "./containers/layout";
import routers from "./router/index.js";
const App = () => {
  return (
    <Fragment>
      <Switch>
        <Layouts>
          {routers.map((r, key) => (
            <Route
              component={r.component}
              exact={!!r.exact}
              key={key}
              path={r.path}
            />
          ))}
        </Layouts>
      </Switch>
    </Fragment>
  );
};

export default App;
