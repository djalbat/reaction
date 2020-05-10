"use strict";

import { React, ReactDOM } from "reaction";

import { createStore } from "./reduxApp/redux";

import reducer from "./reduxApp/reducer";
import TodoApp from "./reduxApp/component/todoApp";
import Provider from "./reduxApp/component/provider";

export default function reduxApp() {
  const store = createStore(reducer),
        rootDOMElement = document.getElementById("root");

  ReactDOM.render(

      <Provider store={store}>
        <TodoApp />
      </Provider>

    ,
    rootDOMElement

  );
}
