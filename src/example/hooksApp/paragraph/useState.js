"use strict";

import { useState } from "../../../hooks";

const initialCount = 0;

const UseStateParagraph = (props, context, element) => {
  const [ count, setCount ] = useState(initialCount, element);

  return (

    <p onClick={(event) => setCount(count + 1)}>
      state: {`${count}`}
    </p>

  );
};

export default UseStateParagraph;
