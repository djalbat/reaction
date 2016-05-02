'use strict';

const helpers = {
  toArray: function(arrayOrElement) { return (arrayOrElement instanceof Array) ?
                                                arrayOrElement :
                                                  [arrayOrElement];
  },

  remaining: function(element, array) {
    if (element === null) {
      return array;
    }
    
    var index = indexOf(element, array);

    return array.slice(index + 1);
  }
};

module.exports = helpers;

function indexOf(element, array) {
  var index = -1;

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
