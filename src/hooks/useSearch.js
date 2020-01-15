import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../graphql/queries";

function useSearch() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function searchTodos() {
      if (search.length > 2) {
        const results = await API.graphql(
          graphqlOperation(queries.searchTodos, {
            filter: { name: { wildcard: `*${search}*` } },
            sort: { field: "name", direction: "asc" },
            limit: 5,
            nextToken: null
          })
        );

        if (results.errors) {
          console.log("errors", results.errors);
        } else {
          setResults(results.data.searchTodos.items);
        }
      } else {
        setResults([]);
      }
    }
    searchTodos();
  }, [search]);

  return { results, search, setSearch };
}

export default useSearch;
