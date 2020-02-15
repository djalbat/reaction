'use strict';

const Element = require('../element');

class VirtualDOMNode extends Element {
  constructor(props, domElement) {
    super(props);
    
    this.domElement = domElement;
  }

  getDOMElement() {
    return this.domElement;
  }

  mount(parent, reference) {
    const children = this.getChildren();
    
    super.mount(parent, children);

    parentDOMElement(parent).insertBefore(this.domElement, referenceDOMElement(reference));

    return this.domElement;
  }

  unmount() {
    this.domElement.parentElement.removeChild(this.domElement);

    super.unmount();
  }

  static fromDOMElement(domElement) {
    const children = [],
          props = {
            children
          },
          virtualDOMNode = new VirtualDOMNode(props, domElement);

    return virtualDOMNode;
  }
}

module.exports = VirtualDOMNode;

function parentDOMElement(parent) {
  let parentDOMElement = parent.getDOMElement();

  while (parentDOMElement === null) {
    parent = parent.getParent();

    parentDOMElement = parent.getDOMElement();
  }

  return parentDOMElement;
}

function referenceDOMElement(reference) {
  const referenceDOMElement = (reference !== null) ?
                                reference.getDOMElement() :
                                  null;

  return referenceDOMElement;
}
