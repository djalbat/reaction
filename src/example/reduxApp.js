"use strict";

import { React, ReactDOM } from "../index"; ///

import { createStore } from "./reduxApp/redux";

import reducer from "./reduxApp/reducer";
import TodoApp from "./reduxApp/component/todoApp";
import Provider from "./reduxApp/component/provider";

import { ROOT } from "./reduxApp/constants";

export default function reduxApp() {
  const store = createStore(reducer),
        rootDOMElement = document.getElementById(ROOT);

  ReactDOM.render(

      <Provider store={store}>
        <TodoApp/>
      </Provider>

    ,
    rootDOMElement
  );
}
