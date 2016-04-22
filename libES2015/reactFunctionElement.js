'use strict';

var ReactElement = require('./reactElement');

class ReactFunctionElement extends ReactElement {
  constructor(reactFunction, properties, children) {
    super(properties, children);
    
    this.reactFunction = reactFunction;
  }
  
  render() {
    return this.reactFunction(this.instance.props); ///
  }
  
  componentDidMount() {
    ///
  }
  
  componentWillUnmount() {
    ///
  }
}

module.exports = ReactFunctionElement;
