'use strict';

const Element = require('./element');

class ReactDOM {
  static render(element, parentDOMElement) {
    const parent = Element.fromDOMElement(parentDOMElement),
          context = undefined;

    element.mount(parent, context);
  }
}

module.exports = ReactDOM;

//     reference = null,
//
// element.mount(parent, reference, context);
