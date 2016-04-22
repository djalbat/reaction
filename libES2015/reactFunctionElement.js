'use strict';

var ReactElement = require('./reactElement');

class ReactFunctionElement extends ReactElement {
  constructor(reactFunction, properties, children) {
    super(properties, children);
    
    this.reactFunction = reactFunction;

    if (!reactFunction.getChildContext) {
      reactFunction.getChildContext = defaultGetChildContext;
    }
  }
  
  render(context) {
    return this.reactFunction(this.instance.props, context); ///
  }

  getChildContext() {
    return this.reactFunction.getChildContext();
  }

  componentDidMount(context) {
    ///
  }
  
  componentWillUnmount(context) {
    ///
  }
}

module.exports = ReactFunctionElement;

function defaultGetChildContext() { return undefined; }

