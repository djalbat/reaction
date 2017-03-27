'use strict';

const Element = require('../element');

class VirtualDOMNode extends Element {
  constructor(props, domElement) {
    super(props);
    
    this.domElement = domElement;
  }

  mount(parent, reference) {
    super.mount(parent);

    parentDOMElement(parent).insertBefore(this.domElement, referenceDOMElement(reference));
  }

  unmount() {
    this.domElement.parentElement.removeChild(this.domElement);

    super.unmount();
  }

  getDOMElement() {
    return this.domElement;
  }

  static fromDOMElement(domElement) {
    const children = [],
          props = {
            children: children
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
