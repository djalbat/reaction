'use strict';

class JSXFunctionElement {
  constructor(reactFunction, _ref) {
    this.reactFunction = reactFunction;
    this._ref = _ref;

    this.jsxElement = undefined;  ///

    this.parentJSXElement = undefined;  ///
  }
  
  mount(parentJSXElement) {
    this.parentJSXElement = parentJSXElement;

    this.render();
    
    this.remount();
  }

  render() {
    this.jsxElement = this.reactFunction(this._ref);
  }

  remount() {
    this.jsxElement.mount(this.parentJSXElement);
  }
}

module.exports = JSXFunctionElement;
