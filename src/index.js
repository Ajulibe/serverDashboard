import React from "react";
import ReactDOM from "react-dom";
import "../src/css/index.css";
import App from "./App";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Logs from "./components/Logs";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/dashboard">
        <App />
      </Route>
      <Route exact path="/view-logs">
        <Logs />
      </Route>
      <Redirect to="/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
