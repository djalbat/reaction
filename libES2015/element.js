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

  mount(parent, sibling) {
    this.parent = parent;
    this.sibling = sibling;

    mount(this, parent, sibling);
  }
  
  unmount() {
    this.remove();
  }

  remount() {
    ///
  }

  remove() {
    this.domElement.parentElement.removeChild(this.domElement);
  }

  prepend(child) {
    var childDOMElement = child.getDOMElement();

    this.domElement.insertBefore(childDOMElement, this.domElement.firstChild);

    return true;
  }

  appendAfter(sibling) {
    var siblingDOMElement = sibling.getDOMElement();

    this.domElement.parentElement.insertBefore(siblingDOMElement, this.domElement.nextSibling);

    return true;
  }
}

module.exports = Element;

function mount(element, parent, sibling) {
  const lastSibling = sibling;

  if (mountToSiblings(element, lastSibling) || mountToParent(element, parent)) {
    return true;
  }

  sibling = parent.getSibling();
  parent = parent.getParent();

  mount(element, parent, sibling);
}

function mountToSiblings(element, lastSibling) {
  var sibling = lastSibling;

  while (sibling !== null) {
    if (mountToSibling(element, sibling)) {
      return true;
    } else {
      sibling = sibling.getSibling();
    }
  }

  return false;
}

function mountToSibling(element, sibling) {
  if (sibling.appendAfter(element)) {
    return true;
  }

  const siblingChildren = sibling.getChildren(),
        siblingsLastChild = last(siblingChildren);

  return mount(element, sibling, siblingsLastChild);
}

function mountToParent(element, parent) {
  return parent.prepend(element);
}

function last(array) { return array[array.length - 1]; }
