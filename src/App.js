import React from "react";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Navbar from "./components/Navbar";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import Search from "./components/Search";

import useSearch from "./hooks/useSearch";
import useTodos from "./hooks/useTodos";

Amplify.configure(awsconfig);

function App() {
  const { results, search, setSearch } = useSearch();
  const todos = useTodos();

  return (
    <React.Fragment>
      <Navbar onSignOut={() => Auth.signOut()} />
      <div className="container">
        <div className="row">
          <div className="col">
            <Search search={search} onChange={setSearch} className="my-3" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <NewTodo className="mb-1" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <TodoList todos={results.length > 0 ? results : todos} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default withAuthenticator(App, false);
