'use strict';

var JSXElement = require('./jsxElement');

class ReactDOM {
  static render(childJSXElement, domElement) {
    var jsxElement = JSXElement.fromDOMElement(domElement);

    jsxElement.append(childJSXElement);
  }
}

module.exports = ReactDOM;
