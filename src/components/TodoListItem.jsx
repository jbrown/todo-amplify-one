import React, { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Link } from "react-router-dom";
import * as mutations from "../graphql/mutations";
import TodoForm from "./TodoForm";

const TodoListItemDetails = ({ todo, onEdit }) => {
  return (
    <React.Fragment>
      <div className="flex-fill">
        <Link to={"/todos/" + todo.id}>
          {!!todo.completedAt ? <del>{todo.name}</del> : todo.name}
        </Link>
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
          <div className="dropdown-item" onClick={onEdit}>
            Edit
          </div>
          <div
            className="dropdown-item"
            onClick={() => {
              API.graphql(
                graphqlOperation(mutations.deleteTodo, {
                  input: { id: todo.id }
                })
              );
            }}
          >
            Delete
          </div>
          <div
            className="dropdown-item"
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
          </div>
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
