'use strict';

var DisplayElement = require('./displayElement');

class ReactDOM {
  static render(element, parentDOMElement) {
    var properties = null,
        children = [],
        parentElement = new DisplayElement(parentDOMElement, properties, children);

    parentElement.empty();

    element.mount(parentElement); ///
  }
}

module.exports = ReactDOM;
