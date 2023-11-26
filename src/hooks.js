"use strict";

const elementToStateWeakMap = new WeakMap();

export function useState(initialState, element) {
  let state;

  if (elementToStateWeakMap.has(element)) {
    state = elementToStateWeakMap.get(element);
  } else {
    state = initialState; ///

    elementToStateWeakMap.set(element, state);
  }

  return ([ state, (updatedState) => {
    state = updatedState;  ///

    elementToStateWeakMap.set(element, state);

    const update = null;

    element.remount(update);
  }]);
}
