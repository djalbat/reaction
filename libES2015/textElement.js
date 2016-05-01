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

  mount(parent, context) {
    super.mount(parent);
  }
  
  unmount(context) {
    super.unmount();
  }
}

module.exports = TextElement;
