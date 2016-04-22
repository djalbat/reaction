'use strict';

class BaseElement {
  constructor(domElement) {
    this.domElement = domElement;
  }

  getDOMElement() {
    return this.domElement;
  }

  mount(parent) {
    parent.append(this);
  }

  update(previous) {
    previous.appendAfter(this);

    previous.remove();
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

    this.domElement.parentNode.insertBefore(previousSiblingDOMElement, this.domElement.nextSibling);
  }

  remove() {
    this.domElement.parentNode.removeChild(this.domElement); 
  }

  empty() {
    var firstChild = this.domElement.firstChild;
    
    while (firstChild) { 
      this.domElement.removeChild(firstChild);

      firstChild = this.domElement.firstChild;
    } 
  }
}

module.exports = BaseElement;
