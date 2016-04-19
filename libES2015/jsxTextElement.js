'use strict';

class JSXTextElement {
  constructor(text) {
    this.text = text;
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
