'use strict';

class JSXFunctionElement {
  constructor(reactFunction, properties, childJSXElements) {
    this.reactFunction = reactFunction;
    this.properties = properties;
    this.childJSXElements = childJSXElements;

    this.jsxElement = undefined;  ///

    const children = childJSXElements; ///
    
    this._ref = Object.assign({}, this.properties, {children: children});
    
    this.render();
  }
  
  mount(parentJSXElement) {
    this.jsxElement.mount(parentJSXElement);
  }

  remount(oldJSXElement) {
    this.jsxElement.remount(oldJSXElement);
  }

  render() {
    this.jsxElement = this.reactFunction(this._ref);
  }

  remove() {
    this.jsxElement.remove();
  }

  appendAfter(jsxElement) {
    this.jsxElement.appendAfter(jsxElement);
  }
}

module.exports = JSXFunctionElement;
