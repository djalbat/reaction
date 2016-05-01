'use strict';

var helpers = {
  toArray: function toArray(arrayOrElement) {
    return arrayOrElement instanceof Array ? arrayOrElement : [arrayOrElement];
  },

  remaining: function remaining(element, array) {
    var index = indexOf(element, array);

    return array.slice(index + 1);
  }
};

module.exports = helpers;

function indexOf(element, array) {
  var index = -1;

  array.some(function (currentElement, currentElementIndex) {
    if (currentElement === element) {
      index = currentElementIndex;

      return true;
    } else {
      return false;
    }
  });

  return index;
}