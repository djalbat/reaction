'use strict';

var JSXDOMElement = require('./jsxDOMElement');

class JSXTextElement extends JSXDOMElement {
  constructor(text) {
    var ref = document.createTextNode(text);

    super(ref);
  }
}

module.exports = JSXTextElement;
