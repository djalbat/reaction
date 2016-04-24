'use strict';

var Element = require('./element');

class ReactDOM {
  static render(element, parentDOMElement) {
    const parentProps = {children: []}, ///
          parent = new Element(parentDOMElement, parentProps),
          sibling = null,
          context = undefined;

    element.mount(parent, sibling, context);
  }
}

module.exports = ReactDOM;
