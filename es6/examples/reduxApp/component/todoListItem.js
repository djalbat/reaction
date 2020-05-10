"use strict";

import { React } from "reaction";

const TodoListItem = (props, context) => {
  const { clickHandler, completed, text } = props,
        textDecoration = completed ?
                          "line-through" :
                            "none",
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
