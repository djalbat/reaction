"use strict";

import { React } from "../../../index"; ///

import { NONE, LINE_THROUGH } from "../constants";

const TodoListItem = (props, context) => {
  const { clickHandler, completed, text } = props,
        textDecoration = completed ?
                          LINE_THROUGH :
                            NONE,
        style = {
          textDecoration
        };

  return (

    <li style={style} onClick={clickHandler}>
      {text}
    </li>
  );

};

export default TodoListItem;
