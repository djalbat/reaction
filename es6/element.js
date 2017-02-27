'use strict';

class Element {
  constructor(domElement, props) {
    this.domElement = domElement;

    this.props = props;

    this.parent = undefined;

    this.children = props.children;  ///
  }

  getDOMElement() {
    return this.domElement;
  }

  getParent() {
    return this.parent;
  }

  getChildren() {
    return this.children;
  }

  mount(parent, reference) {
    this.parent = parent;

    if (this.domElement !== null) {
      parentDOMElement(parent).insertBefore(this.domElement, referenceDOMElement(reference));
    }
  }

  unmount() {
    if (this.domElement !== null) {
      this.domElement.parentElement.removeChild(this.domElement);
    }
  }

  setAttribute(attributeName, attributeValue) {
    if (attributeName === 'className') {
      attributeName = 'class';
    }
    if (attributeName === 'htmlFor') {
      attributeName = 'for';
    }

    if (false) {

    } else if (typeof attributeValue === 'object') {
      const keys = Object.keys(attributeValue);

      keys.forEach(function (key) {
        const value = attributeValue[key];

        this.domElement[attributeName][key] = value;
      }.bind(this));
    } else if (typeof attributeValue === 'boolean') {
      if (attributeValue) {
        attributeValue = attributeName; ///

        this.domElement.setAttribute(attributeName, attributeValue);
      }
    } else {
      this.domElement.setAttribute(attributeName, attributeValue);
    }
  }

  setHandler(eventName, handler) {
    this.domElement[eventName] = handler;
  }

  static fromDOMElement(domElement) {
    const children = [],
          props = {
            children: children
          },
          element = new Element(domElement, props);

    return element;
  }
}

module.exports = Element;

function parentDOMElement(parent) {
  let parentDOMElement = parent.getDOMElement();

  while (parentDOMElement === null) {
    parent = parent.getParent();

    parentDOMElement = parent.getDOMElement();
  }

  return parentDOMElement;
}

function referenceDOMElement(reference) {
  const referenceDOMElement = reference !== null ?
                                reference.getDOMElement() :
                                  null;

  return referenceDOMElement;
}
