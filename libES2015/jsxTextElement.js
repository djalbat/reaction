'use strict';

var JSXElement = require('./jsxElement'),
    JSXDOMTextElement = require('./jsxDOMTextElement');

class JSXTextElement extends JSXElement {
  constructor(text) {
    const properties = {},
          children = [];
    
    super(properties, children);

    this.text = text;
    
    this.render();
  }

  render() {
    this.jsxElement = new JSXDOMTextElement(this.text);
  }
}

module.exports = JSXTextElement;
