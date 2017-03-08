'use strict';

const VirtualDOMNode = require('../virtualDOMNode');

class VirtualDOMTextElement extends VirtualDOMNode {
  constructor(text) {
    const domElement = document.createTextNode(text),
          children = [],
          props = {
            children: children
          };

    super(props, domElement);
  }

  mount(parent, reference, context) {
    super.mount(parent, reference);
  }
  
  unmount(context) {
    super.unmount();
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

module.exports = VirtualDOMTextElement;
