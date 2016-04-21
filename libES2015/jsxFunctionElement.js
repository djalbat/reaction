'use strict';

var JSXElement = require('./jsxElement');

class JSXFunctionElement extends JSXElement {
  constructor(reactFunction, properties, children) {
    super(properties, children);

    this.reactFunction = reactFunction;
    
    this.render();
  }
  
  render() {
    var _ref = this.instance.props; ///

    this.jsxElement = this.reactFunction(_ref);
  }
}

module.exports = JSXFunctionElement;
