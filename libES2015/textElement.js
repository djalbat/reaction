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
}

module.exports = TextElement;
