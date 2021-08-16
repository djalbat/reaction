"use strict";

import { React } from "../../../index"; ///

import TodoListItems from "./todoListItems";

const TodoList = (props, context) =>

  <ul>
    <TodoListItems/>
  </ul>

;

export default TodoList;
