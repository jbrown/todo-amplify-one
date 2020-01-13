import React from "react";
import useTodos from "../hooks/useTodos";

const TodoList = () => {
  const todos = useTodos();

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
