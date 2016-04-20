'use strict';

var JSXElement = require('./jsxElement');

class JSXFunctionElement extends JSXElement {
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
