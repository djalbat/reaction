'use strict';

class Element {
  constructor(domElement) {
    this.domElement = domElement;
  }

  getDOMElement() {
    return this.domElement;
  }

  mount(parent) {
    parent.append(this);
  }
  
  remount(previousSibling) {
    previousSibling.appendAfter(this);
  }

  unmount() {
    this.remove();
  }

  append(child) {
    var childDOMElement = child.getDOMElement();

    this.domElement.appendChild(childDOMElement);
  }

  appendAfter(previousSibling) {
    var previousSiblingDOMElement = previousSibling.getDOMElement();

    this.domElement.parentElement.insertBefore(previousSiblingDOMElement, this.domElement.nextSibling);
  }

  remove() {
    this.domElement.parentElement.removeChild(this.domElement);
  }

  empty() {
    while (this.domElement.firstChild) {
      this.domElement.removeChild(this.domElement.firstChild);
    }
  }
}

module.exports = Element;
