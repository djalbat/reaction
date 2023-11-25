"use strict";

import { useState } from "../../../hooks";

const { createClass } = React;

let initialCount = 0;

export const ClassUseStateParagraph = createClass({
  render: function(update, element) {
    const [ count, setCount ] = useState(initialCount, element);

    return (

      <p onClick={(event) => setCount(count + 1)}>
        state: {`${count}`}
      </p>

    );
  }
});
