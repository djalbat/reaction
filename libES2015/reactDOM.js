'use strict';

const Element = require('./element');

class ReactDOM {
  static render(element, parentDOMElement) {
    const parent = Element.fromDOMElement(parentDOMElement),
          reference = null,
          context = undefined;

    element.mount(parent, reference, context);
  }
}

module.exports = ReactDOM;
