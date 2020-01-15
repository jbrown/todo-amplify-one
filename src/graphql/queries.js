/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    name
    completedAt
    owner
  }
}
`;
export const listTodos = `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      completedAt
      owner
    }
    nextToken
  }
}
`;
export const searchTodos = `query SearchTodos(
  $filter: SearchableTodoFilterInput
  $sort: SearchableTodoSortInput
  $limit: Int
  $nextToken: String
) {
  searchTodos(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      completedAt
      owner
    }
    nextToken
    total
  }
}
`;
