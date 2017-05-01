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
    const children = [];
    
    super.mount(parent, children, reference);
  }
  
  unmount(context) {
    super.unmount();
  }

  getText() {
    const nodeValue = this.domElement.nodeValue,
          text = nodeValue; ///

    return text;
  }

  setText(text) {
    const nodeValue = text; ///

    this.domElement.nodeValue = nodeValue;
  }
}

module.exports = VirtualDOMTextElement;
