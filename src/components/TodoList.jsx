import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../graphql/queries";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      const all = await API.graphql(graphqlOperation(queries.listTodos));
      setTodos(all.data.listTodos.items);
    }
    fetchTodos();
  }, []);

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id} className="border rounded py-1 px-2 mt-1">
          {todo.name}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
