import { useEffect, useReducer } from "react";
import { API, Auth, graphqlOperation } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";

const initialState = { todos: [] };

function reducer(state, action) {
  switch (action.type) {
    case "set":
      return { todos: action.payload };
    case "add":
      return { todos: [action.payload, ...state.todos] };
    case "remove":
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      };
    default:
      return state;
  }
}
function useTodos() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // initial query for todos
  useEffect(() => {
    async function fetchTodos() {
      const all = await API.graphql(graphqlOperation(queries.listTodos));
      dispatch({ type: "set", payload: all.data.listTodos.items });
    }
    fetchTodos();
  }, []);

  // subscribe to newly added todos
  useEffect(() => {
    let subscriber;

    async function subscribeToNewTodos() {
      let { username } = await Auth.currentAuthenticatedUser({
        bypassCache: false
      });

      subscriber = API.graphql(
        graphqlOperation(subscriptions.onCreateTodo, { owner: username })
      ).subscribe({
        next: data => {
          const {
            value: {
              data: { onCreateTodo }
            }
          } = data;
          dispatch({ type: "add", payload: onCreateTodo });
        }
      });
    }
    subscribeToNewTodos();

    return () => subscriber && subscriber.unsubscribe();
  }, []);

  // subscribe to recently removed todos
  useEffect(() => {
    let subscriber;

    async function subscribeToNewTodos() {
      let { username } = await Auth.currentAuthenticatedUser({
        bypassCache: false
      });

      subscriber = API.graphql(
        graphqlOperation(subscriptions.onDeleteTodo, { owner: username })
      ).subscribe({
        next: data => {
          const {
            value: {
              data: { onDeleteTodo }
            }
          } = data;
          dispatch({ type: "remove", payload: onDeleteTodo });
        }
      });
    }
    subscribeToNewTodos();

    return () => subscriber && subscriber.unsubscribe();
  }, []);

  return state.todos;
}

export default useTodos;
