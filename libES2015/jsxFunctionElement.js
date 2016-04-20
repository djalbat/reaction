'use strict';

var JSXBaseElement = require('./jsxBaseElement');

class JSXFunctionElement extends JSXBaseElement {
  constructor(reactFunction, properties, children) {
    super(properties, children);

    this.reactFunction = reactFunction;
    
    this.render();
  }
  
  render() {
    this.jsxElement = this.reactFunction(this._ref);
  }
}

module.exports = JSXFunctionElement;
