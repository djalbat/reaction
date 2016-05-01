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

  mount(parent, reference) {
    this.parent = parent;

    if (this.domElement === null) {
      return;
    }

    var parentDOMElement = this.parentDOMElement(parent),
        referenceDOMElement = this.referenceDOMElement(reference);

    parentDOMElement.insertBefore(this.domElement, referenceDOMElement);
  }

  unmount() {
    if (this.domElement === null) {
      return;
    }

    this.domElement.parentElement.removeChild(this.domElement);
  }

  remove() {
    if (this.domElement === null) {
      return;
    }

    this.domElement.parentElement.removeChild(this.domElement);
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

  parentDOMElement(parent) {
    var parentDOMElement = parent.getDOMElement();

    while (parentDOMElement === null) {
      parent = parent.getParent();

      parentDOMElement = parent.getDOMElement();
    }

    return parentDOMElement;
  }

  referenceDOMElement(reference) {
    var referenceDOMElement = reference !== null ?
                                reference.getDOMElement() :
                                  null;

    return referenceDOMElement;
  }

  childReference(child) {
    var childReference = this.findChildReference(child);

    if (childReference !== null) {
      return childReference;
    }

    var domElement = this.getDOMElement();

    if (domElement !== null) {
      return null;
    }

    const parent = this.getParent();

    child = this;

    return parent.childReference(child)
  }

  findChildReference(child) {
    var childIndex = indexOf(child, this.children),
        children = this.children.slice(childIndex + 1),
        childReference = children.reduce(function(childReference, child) {
          if (childReference === null) {
            var childDOMElement = child.getDOMElement();

            if (childDOMElement !== null) {
              childReference = child;
            } else {
              childReference = child.findChildReference(null);
            }
          }

          return childReference;
        }, null);

    return childReference;
  }

  static fromDOMElement(domElement) {
    var children = [],
        props = {
          children: children
        };

    return new Element(domElement, props);
  }
}

function indexOf(element, array) {
  var index = -1;

  array.some(function(currentElement, currentElementIndex) {
    if (currentElement === element) {
      index = currentElementIndex;

      return true;
    } else {
      return false;
    }
  });

  return index;
}

module.exports = Element;
