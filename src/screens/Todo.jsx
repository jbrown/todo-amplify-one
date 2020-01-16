import React from "react";
import { useParams } from "react-router-dom";

const Todo = () => {
  const { id } = useParams();

  return <div>Todo Details {id}</div>;
};

export default Todo;
