'use strict';

class JSXDOMTextElement {
  constructor(text) {
    this.element = text; ///
  }
  
  getElement() {
    return this.element;
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
    var element = jsxElement.getElement();

    this.element.append(element);
  }

  appendAfter(jsxElement) {
    var element = jsxElement.getElement();

    this.element.appendAfter(element);
  }

  remove() { this.element.remove(); }

  empty() { this.element.empty(); }
}

module.exports = JSXDOMTextElement;
