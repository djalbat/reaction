'use strict';

class ReactDOM {
  static render(element, parentDOMElement) {
    const siblingDOMElement = null,
          context = undefined;

    element.mount(parentDOMElement, siblingDOMElement, context);
  }
}

module.exports = ReactDOM;
