import React, { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "../graphql/mutations";
import TodoForm from "./TodoForm";

const TodoListItemDetails = ({ todo, onEdit }) => {
  return (
    <React.Fragment>
      <div className="flex-fill">
        {!!todo.completedAt ? <del>{todo.name}</del> : todo.name}
      </div>
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
          <a className="dropdown-item" href="#" onClick={onEdit}>
            Edit
          </a>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => {
              API.graphql(
                graphqlOperation(mutations.deleteTodo, {
                  input: { id: todo.id }
                })
              );
            }}
          >
            Delete
          </a>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => {
              API.graphql(
                graphqlOperation(mutations.updateTodo, {
                  input: {
                    id: todo.id,
                    completedAt: !!todo.completedAt
                      ? null
                      : new Date().toISOString()
                  }
                })
              );
            }}
          >
            {!!todo.completedAt ? "Uncomplete" : "Complete"}
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

const TodoListItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="d-flex border rounded py-1 px-2 mt-1">
      {isEditing ? (
        <TodoForm todo={todo} onClose={() => setIsEditing(false)} />
      ) : (
        <TodoListItemDetails todo={todo} onEdit={() => setIsEditing(true)} />
      )}
    </div>
  );
};

export default TodoListItem;
