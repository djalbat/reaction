'use strict';

class JSXDOMElement {
  constructor(ref) {
    this.ref = ref;
  }

  getRef() {
    return this.ref;
  }

  mount(parentJSXElement) {
    parentJSXElement.append(this);
  }

  update(oldJSXElement) {
    oldJSXElement.appendAfter(this);

    oldJSXElement.remove();
  }

  unmount() {
    this.remove();
  }

  append(jsxElement) {
    var ref = jsxElement.getRef();

    this.ref.appendChild(ref);
  }

  appendAfter(jsxElement) {
    var element = jsxElement.getRef();

    this.ref.parentNode.insertBefore(element, this.ref.nextSibling);
  }

  remove() { this.ref.parentNode.removeChild(this.ref); }

  empty() { while (this.ref.firstChild) { this.ref.removeChild(this.ref.firstChild); } }
}

module.exports = JSXDOMElement;
