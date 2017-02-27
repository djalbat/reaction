'use strict';

const Element = require('./element');

class TextElement extends Element {
  constructor(text) {
    const domElement = document.createTextNode(text),
          children = [],
          props = {
            children: children
          };

    super(domElement, props);
  }

  mount(parent, reference, context) {
    super.mount(parent, reference);
  }
  
  unmount(context) {
    super.unmount();
  }

  setAttribute(name, value) {

  }

  clearAttribute(name) {

  }

  getText() {
    const domElement = this.getDOMElement(),
          text = domElement.nodeValue; ///

    return text;
  }

  setText(text) {
    const domElement = this.getDOMElement();

    domElement.nodeValue = text;
  }
}

module.exports = TextElement;
