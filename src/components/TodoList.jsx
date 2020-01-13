import React from "react";
import useTodos from "../hooks/useTodos";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const todos = useTodos();

  return (
    <div>
      {todos.map(todo => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
