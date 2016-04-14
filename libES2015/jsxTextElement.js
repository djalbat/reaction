'use strict';

class JSXTextElement {
  constructor(text) {
    this.text = text;
    
    this.parentJSXElement = undefined;  ///
  }

  getElement() {
    var element = this.text;  ///

    return element;
  }

  mount(parentJSXElement) {
    parentJSXElement.append(this);
  }
}

module.exports = JSXTextElement;
