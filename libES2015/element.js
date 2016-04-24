'use strict';

class Element {
  constructor(domElement, props) {
    this.domElement = domElement;
    this.props = props;

    this.parent = undefined;
    this.sibling = undefined;
    
    this.children = props.children;  ///
  }

  getDOMElement() {
    return this.domElement;
  }

  getParent() {
    return this.parent;
  }

  getSibling() {
    return this.sibling;
  }

  getChildren() {
    return this.children;
  }

  mount(parent, sibling) {
    this.parent = parent;
    this.sibling = sibling;

    mount(this, parent, sibling);
  }
  
  unmount() {
    this.remove();
  }

  remove() {
    remove(this);
  }

  setAttribute(attributeName, attributeValue) {
    if (attributeName === 'className') { attributeName = 'class'; }
    if (attributeName === 'htmlFor') { attributeName = 'for'; }

    if (false ) {
      
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
}

module.exports = Element;

function remove(element) {
  element.domElement.parentElement.removeChild(element.domElement);
}

function mount(element, parent, sibling) {
  var lastSibling = sibling;

  if (!appendAfterSiblings(element, lastSibling) && !prependToParent(element, parent)) {
    sibling = parent.getSibling();
    parent = parent.getParent();

    mount(element, parent, sibling);
  }
}

function prependToParent(element, parent) {
  if (!parent) {
    return false;
  }

  var parentDOMElement = parent.getDOMElement();

  if (parentDOMElement !== null) {
    prependTo(element.domElement, parentDOMElement);

    return true;
  } else {
    return false;
  }
}

function appendAfterSiblings(element, lastSibling) {
  if (!lastSibling) {
    return false;
  }

  var sibling = lastSibling;

  while (sibling !== null) {
    var siblingDOMElement = sibling.getDOMElement();

    if (siblingDOMElement !== null) {
      appendAfter(element.domElement, siblingDOMElement);

      return true;
    } else {
      var siblingChildren = sibling.getChildren();

      lastSibling = last(siblingChildren);

      if (appendAfterSiblings(element, lastSibling)) {
        return true;
      }
    }

    sibling = sibling.getSibling();
  }

  return false;
}

function prependTo(domElement, existingDOMElement) {
  existingDOMElement.insertBefore(domElement, existingDOMElement.firstChild);
}

function appendAfter(domElement, existingDOMElement) {
  existingDOMElement.parentElement.insertBefore(domElement, existingDOMElement.nextSibling);
}

function last(array) { return array[array.length - 1]; }
