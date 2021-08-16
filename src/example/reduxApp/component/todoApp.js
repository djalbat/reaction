"use strict";

import { React } from "../../../index"; ///

import Footer from "./footer";
import AddTodo from "./addTodo";
import TodoList from "./todoList";

const TodoApp = (props, context) =>

  <div>
    <AddTodo/>
    <TodoList/>
    <Footer/>
  </div>

;

export default TodoApp;
