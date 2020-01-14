import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "../graphql/mutations";

const TodoForm = ({ todo: { id, name: initialName }, onClose }) => {
  const [name, setName] = useState(initialName);

  useEffect(() => {
    setName(initialName);
  }, [initialName]);

  return (
    <form className="p-2">
      <div className="form-group">
        <label>Task Name</label>
        <input
          className="form-control"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="">
        <button className="btn btn-link" onClick={onClose}>
          cancel
        </button>
        <button
          className="btn btn-primary"
          onClick={async () => {
            await API.graphql(
              graphqlOperation(mutations.updateTodo, {
                input: {
                  id,
                  name
                }
              })
            );

            onClose();
          }}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
