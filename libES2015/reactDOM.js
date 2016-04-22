'use strict';

var JSXDisplayElement = require('./displayElement');

class ReactDOM {
  static render(jsxElement, parentDOMElement) {
    var parentJSXElement = JSXDisplayElement.fromDOMElement(parentDOMElement);

    parentJSXElement.empty();

    jsxElement.mount(parentJSXElement); ///
  }
}

module.exports = ReactDOM;
