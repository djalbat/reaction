'use strict';

class JSXFunctionElement {
  constructor(reactFunction, properties, childJSXElements) {
    this.reactFunction = reactFunction;
    this.properties = properties;
    this.childJSXElements = childJSXElements;

    this.jsxElement = undefined;  ///

    this.parentJSXElement = undefined;  ///
  }
  
  mount(parentJSXElement) {
    this.parentJSXElement = parentJSXElement;

    this.render();
    
    this.remount();
  }

  render() {
    var _ref = this.properties; ///

    _ref.children = this.childJSXElements; ///

    this.jsxElement = this.reactFunction(_ref);
  }

  remount() {
    this.jsxElement.mount(this.parentJSXElement);
  }
}

module.exports = JSXFunctionElement;
