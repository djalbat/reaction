"use strict";

import { React } from "reaction";

import TodoListItem from "./todoListItem";

import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED, TOGGLE_TODO } from "../constants";

const { Component } = React;

export default class TodoListItems extends Component {
  componentDidMount() {
    const { store } = this.context;

    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context,
          state = store.getState(),
          { todos, visibilityFilter } = state,
          visibleTodos = getVisibleTodos(todos, visibilityFilter),
          items = visibleTodos.map((visibleTodo) => {
            const { id, text, completed } = visibleTodo;

            return (

              <TodoListItem text={text}
                            completed={completed}
                            clickHandler={() => {

                              const type = TOGGLE_TODO,
                                    action = {
                                      type,
                                      id
                                    };

                              store.dispatch(action);

                            }}
              />

            );
          });

    return items;
  }
}

const getVisibleTodos = (todos, visibilityFilter) => {
  let visibleTodos;

  switch (visibilityFilter) {
    case SHOW_ALL:
      visibleTodos = todos;
      break;

    case SHOW_ACTIVE:
      visibleTodos = todos.filter((todo) => {
        const { completed } = todo,
            active = !completed;

        return active;
      });
      break;

    case SHOW_COMPLETED:
      visibleTodos = todos.filter((todo) => {
        const { completed } = todo;

        return completed;
      });
      break;
  }

  return visibleTodos;
};
