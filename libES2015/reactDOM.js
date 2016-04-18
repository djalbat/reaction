'use strict';

var JSXElement = require('./jsxElement');

class ReactDOM {
  static render(jsxElement, parentDOMElement) {
    var parentJSXElement = JSXElement.fromDOMElement(parentDOMElement);

    parentJSXElement.empty();

    jsxElement.mount(parentJSXElement); ///
  }
}

module.exports = ReactDOM;
