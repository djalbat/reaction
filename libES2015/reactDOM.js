'use strict';

var JSXDOMElement = require('./jsxDOMElement');

class ReactDOM {
  static render(jsxElement, parentDOMElement) {
    var parentJSXElement = JSXDOMElement.fromDOMElement(parentDOMElement);

    parentJSXElement.empty();

    jsxElement.mount(parentJSXElement); ///
  }
}

module.exports = ReactDOM;
