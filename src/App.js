import React from "react";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Todo from "./screens/Todo";

Amplify.configure(awsconfig);

function App() {
  return (
    <Router>
      <Navbar onSignOut={() => Auth.signOut()} />
      <div className="container">
        <Switch>
          <Route path="/todos/:id">
            <Todo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default withAuthenticator(App, false);
