'use strict';

class BaseElement {
  constructor(domElement) {
    this.domElement = domElement;
  }

  getDOMElement() {
    return this.domElement;
  }

  mount(parentElement) {
    parentElement.append(this);
  }

  update(oldElement) {
    oldElement.appendAfter(this);

    oldElement.remove();
  }

  unmount() {
    this.remove();
  }

  append(element) {
    var domElement = element.getDOMElement();

    this.domElement.appendChild(domElement);
  }

  appendAfter(element) {
    var domElement = element.getDOMElement();

    this.domElement.parentNode.insertBefore(domElement, this.domElement.nextSibling);
  }

  remove() { this.domElement.parentNode.removeChild(this.domElement); }

  empty() { while (this.domElement.firstChild) { this.domElement.removeChild(this.domElement.firstChild); } }
}

module.exports = BaseElement;
