'use strict';

var JSXElement = require('./jsxElement');

class ReactDOM {
  static render(jsxElement, parentDOMElement) {
    var parentJSXElement = JSXElement.fromDOMElement(parentDOMElement);

    jsxElement.render(parentJSXElement); ///
  }
}

module.exports = ReactDOM;
