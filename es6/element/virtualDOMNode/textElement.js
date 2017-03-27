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

  getTagName() {
    return undefined;
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
