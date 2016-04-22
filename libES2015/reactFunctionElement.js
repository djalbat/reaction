'use strict';

var ReactElement = require('./reactElement');

class ReactFunctionElement extends ReactElement {
  constructor(reactFunction, properties, children) {
    super(properties, children);
    
    
    

    this.reactFunction = reactFunction;
  }
  
  render() {
    var _ref = this.instance.props; ////

    return this.reactFunction(_ref);
  }
  
  componentDidMount() {
    
  }
}

module.exports = ReactFunctionElement;
