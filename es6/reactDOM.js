'use strict';

const VirtualDOMNode = require('./element/virtualDOMNode');

class ReactDOM {
  static render(element, parentDOMElement) {
    const parent = VirtualDOMNode.fromDOMElement(parentDOMElement),
          reference = null,
          context = {};

    element.mount(parent, reference, context);
  }
}

module.exports = ReactDOM;
