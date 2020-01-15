import React, { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "../graphql/mutations";

const NewTodo = ({ className }) => {
  let [todoInput, setTodoInput] = useState("");
  return (
    <div className={className + " d-flex border rounded"}>
      <input
        value={todoInput}
        onChange={e => setTodoInput(e.target.value)}
        className="flex-fill border-0 rounded px-2 py-1"
        placeholder="New todo item..."
        onKeyPress={e => {
          if (e.key === "Enter") {
            API.graphql(
              graphqlOperation(mutations.createTodo, {
                input: { name: todoInput }
              })
            );
            setTodoInput("");
          }
        }}
      />
    </div>
  );
};

export default NewTodo;
