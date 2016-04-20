'use strict';

var JSXElement = require('./jsxElement'),
    JSXDOMElement = require('./jsxDOMElement');

class JSXTextElement extends JSXElement {
  constructor(text) {
    const properties = {},
          children = [];
    
    super(properties, children);

    var domElement = document.createTextNode(text);

    this.jsxElement = JSXDOMElement.fromDOMElement(domElement);
  }

  render() {

  }
}

module.exports = JSXTextElement;
