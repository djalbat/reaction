'use strict';

class Element {
  constructor(domElement) {
    this.domElement = domElement;
  }

  mount(parent, context) {
    parent.append(this);
  }
  
  remount(previousSibling, context) {
    previousSibling.appendAfter(this);

    return this;
  }

  unmount(context) {
    this.remove();
  }

  remove() {
    this.domElement.parentElement.removeChild(this.domElement);
  }

  append(child) {
    var childDOMElement = child.getDOMElement();

    this.domElement.appendChild(childDOMElement);
  }

  appendAfter(previousSibling) {
    var previousSiblingDOMElement = previousSibling.getDOMElement();

    this.domElement.parentElement.insertBefore(previousSiblingDOMElement, this.domElement.nextSibling);
  }

  empty() {
    while (this.domElement.firstChild) {
      this.domElement.removeChild(this.domElement.firstChild);
    }
  }

  getDOMElement() {
    return this.domElement;
  }

  setAttribute(attributeName, attributeValue) {
    if (false) {

    } else if (typeof attributeValue === 'string') {
      switch (attributeName) {
        case 'className':
          attributeName = 'class';
          break;

        case 'htmlFor':
          attributeName = 'for';
          break;
      }

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
}

module.exports = Element;
