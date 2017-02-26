'use strict';

const helpers = {
  guaranteeArray: function(arrayOrElement) { return (arrayOrElement instanceof Array) ?
                                                      arrayOrElement :
                                                        [arrayOrElement];
  },

  remaining: function(element, array) {
    if (element === null) {
      return array;
    }
    
    const index = indexOf(element, array);

    return array.slice(index + 1);
  }
};

module.exports = helpers;

function indexOf(element, array) {
  let index = null;

  array.some(function(currentElement, currentElementIndex) {
    if (currentElement === element) {
      index = currentElementIndex;

      return true;
    } else {
      return false;
    }
  });

  return index;
}
