import React from "react";
import NewTodo from "../components/NewTodo";
import TodoList from "../components/TodoList";
import Search from "../components/Search";

import useSearch from "../hooks/useSearch";
import useTodos from "../hooks/useTodos";

const Home = () => {
  const { results, search, setSearch } = useSearch();
  const todos = useTodos();
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Home;
