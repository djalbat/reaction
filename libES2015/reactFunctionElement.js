'use strict';

var ReactElement = require('./reactElement');

class ReactFunctionElement extends ReactElement {
  constructor(reactFunction, props, children) {
    super(props, children);

    this.reactFunction = reactFunction;
  }
  
  render(context) {
    

    return this.reactFunction(this.instance.props, this.instance.children, context);
  }

  componentDidMount(context) {
    if (this.reactFunction.componentDidMount) {
      this.reactFunction.componentDidMount(this.instance.props, this.instance.children, context);
    }
  }
  
  componentWillUnmount(context) {
    if (this.reactFunction.componentWillUnmount) {
      this.reactFunction.componentWillUnmount(this.instance.props, this.instance.children, context);
    }
  }

  getChildContext() {
    if (this.reactFunction.getChildContext) {
      return this.reactFunction.getChildContext(this.instance.props);
    }
  }
}

module.exports = ReactFunctionElement;
