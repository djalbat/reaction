'use strict';

var ReactElement = require('./reactElement');

class ReactFunctionElement extends ReactElement {
  constructor(reactFunction, properties, children) {
    super(properties, children);

    this.reactFunction = reactFunction;
  }
  
  render(context) {
    

    return this.reactFunction(this.instance.props, context);
  }

  componentDidMount(context) {
    if (this.reactFunction.componentDidMount) {
      this.reactFunction.componentDidMount(this.instance.props, context);
    }
  }
  
  componentWillUnmount(context) {
    if (this.reactFunction.componentWillUnmount) {
      this.reactFunction.componentWillUnmount(this.instance.props, context);
    }
  }

  getChildContext() {
    if (this.reactFunction.getChildContext) {
      return this.reactFunction.getChildContext(this.instance.props);
    }
  }
}

module.exports = ReactFunctionElement;
