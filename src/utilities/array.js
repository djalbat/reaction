"use strict";

export function first(array) { return array[0]; }

export function flatten(array) {
  return array.reduce((array, element) => {
    array = array.concat(element);  ///
    
    return array;
  }, []);
}

export function guarantee(arrayOrElement) {
  arrayOrElement = arrayOrElement || [];

  return (arrayOrElement instanceof Array) ?
            arrayOrElement :
              [arrayOrElement];
}

export function remaining(element, array) {
  if (element === null) {
    return array;
  }

  const index = indexOf(element, array);

  return array.slice(index + 1);
}

function indexOf(element, array) {
  let index = null;

  array.some((currentElement, currentElementIndex) => {
    if (currentElement === element) {
      index = currentElementIndex;

      return true;
    }
  });

  return index;
}
