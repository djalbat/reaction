'use strict';

var DisplayElement = require('./displayElement');

class ReactDOM {
  static render(element, parentDOMElement) {
    var props = null,
        children = [],
        parentElement = new DisplayElement(parentDOMElement, props, children);

    parentElement.empty();

    element.mount(parentElement); ///
  }
}

module.exports = ReactDOM;
