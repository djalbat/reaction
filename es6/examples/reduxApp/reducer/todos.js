"use strict";

import { ADD_TODO, TOGGLE_TODO } from "../constants";

export default function todos(state = [], action = {}) {
  const { type } = action;

  let todos = state;

  switch (type) {
    case ADD_TODO :
      todos = addTodoToTodos(todos, action);
      break;

    case TOGGLE_TODO :
      todos = toggleTodos(todos, action);
      break;
  }

  state = todos;

  return state;
}

function addTodoToTodos(todos, action) {
  const { id, text } = action,
        completed = false,
        todo = {
          id,
          text,
          completed
        };

  todos = [
    ...todos,
    todo
  ];

  return todos;
}

function toggleTodos(todos, action) {
  const { id } = action;

  todos = todos.map((todo) => {
    if (todo.id === id) {
      let { completed } = todo;

      completed = !completed;

      todo.completed = completed;
    }

    return todo;
  });

  return todos;
}
