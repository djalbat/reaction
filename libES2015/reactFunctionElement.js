'use strict';

var ReactElement = require('./reactElement');

class ReactFunctionElement extends ReactElement {
  constructor(reactFunction, props, children) {
    super(props, children);

    this.reactFunction = reactFunction;
  }
  
  render(context) {
    

    return this.reactFunction(this.props, this.children, context);
  }

  componentDidMount(context) {
    if (this.reactFunction.componentDidMount) {
      this.reactFunction.componentDidMount(this.props, this.children, context);
    }
  }
  
  componentWillUnmount(context) {
    if (this.reactFunction.componentWillUnmount) {
      this.reactFunction.componentWillUnmount(this.props, this.children, context);
    }
  }

  getChildContext() {
    if (this.reactFunction.getChildContext) {
      return this.reactFunction.getChildContext(this.props);
    }
  }
}

module.exports = ReactFunctionElement;
