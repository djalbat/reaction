'use strict';

var JSXDOMElement = require('./jsxDOMElement'),
    JSXBaseElement = require('./jsxBaseElement');

class JSXTextElement extends JSXBaseElement {
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
