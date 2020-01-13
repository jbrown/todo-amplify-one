import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "../graphql/mutations";

const TodoListItem = ({ todo }) => {
  return (
    <div className="d-flex border rounded py-1 px-2 mt-1">
      <div className="flex-fill">{todo.name}</div>
      <div className="btn-group dropleft">
        <button
          type="button"
          className="btn btn-secondary btn-sm dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Action
        </button>
        <div className="dropdown-menu">
          <a
            className="dropdown-item"
            href="#"
            onClick={() => {
              console.log("delete todo");
              API.graphql(
                graphqlOperation(mutations.deleteTodo, {
                  input: { id: todo.id }
                })
              );
            }}
          >
            Delete
          </a>
        </div>
      </div>
    </div>
  );
};

export default TodoListItem;
