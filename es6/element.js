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

    } else if (typeof attributeValue === 'string') {
      this.domElement.setAttribute(attributeName, attributeValue);
    } else if (typeof attributeValue === 'object') {
      var keys = Object.keys(attributeValue);

      keys.forEach(function (key) {
        var value = attributeValue[key];

        this.domElement[attributeName][key] = value;
      }.bind(this));
    } else {
      ///
    }
  }

  setHandler(eventName, handler) {
    this.domElement[eventName] = handler;
  }

  static fromDOMElement(domElement) {
    var children = [],
        props = {
          children: children
        };

    return new Element(domElement, props);
  }
}

module.exports = Element;

function parentDOMElement(parent) {
  var parentDOMElement = parent.getDOMElement();

  while (parentDOMElement === null) {
    parent = parent.getParent();

    parentDOMElement = parent.getDOMElement();
  }

  return parentDOMElement;
}

function referenceDOMElement(reference) {
  var referenceDOMElement = reference !== null ?
                              reference.getDOMElement() :
                                null;

  return referenceDOMElement;
}
