import React from "react";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Navbar from "./components/Navbar";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

Amplify.configure(awsconfig);

function App() {
  return (
    <React.Fragment>
      <Navbar onSignOut={() => Auth.signOut()} />
      <div className="container">
        <div className="row">
          <div className="col">
            <NewTodo />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <TodoList />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default withAuthenticator(App, false);
