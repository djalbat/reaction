'use strict';

const necessary = require('necessary');

const { arrayUtilities } = necessary;

function guarantee(arrayOrElement) {
  return (arrayOrElement instanceof Array) ?
            arrayOrElement :
              [arrayOrElement];
}

function remaining(element, array) {
  if (element === null) {
    return array;
  }

  const index = indexOf(element, array);

  return array.slice(index + 1);
}

module.exports = Object.assign(arrayUtilities, {
  guarantee: guarantee,
  remaining: remaining
});

function indexOf(element, array) {
  let index = null;

  array.some(function(currentElement, currentElementIndex) {
    if (currentElement === element) {
      index = currentElementIndex;

      return true;
    }
  });

  return index;
}