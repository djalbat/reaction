"use strict";

import { useState } from "../../../hooks";

const { Component } = React;

let initialCount = 0;

export class ComponentUseStateParagraph extends Component {
  render(update, element) {
    const [ count, setCount ] = useState(initialCount, element);

    return (

      <p onClick={(event) => setCount(count + 1)}>
        state: {`${count}`}
      </p>

    );
  }
}
