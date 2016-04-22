'use strict';

var Element = require('./element');

class FunctionElement extends Element {
  constructor(reactFunction, properties, children) {
    super(properties, children);

    this.reactFunction = reactFunction;
    
    this.render();
  }
  
  render() {
    var _ref = this.instance.props; ////

    this.element = this.reactFunction(_ref);
  }
}

module.exports = FunctionElement;
