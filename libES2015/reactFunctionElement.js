'use strict';

var ReactElement = require('./reactElement');

class ReactFunctionElement extends ReactElement {
  constructor(reactFunction, props) {
    super(props);

    this.reactFunction = reactFunction;
  }
  
  render() {
    return this.reactFunction(this.props, this.context);
  }

  getChildContext() {
    if (this.reactFunction.getChildContext) {
      return this.reactFunction.getChildContext(this.props, this.context);
    }
  }

  componentDidMount() {
    if (this.reactFunction.componentDidMount) {
      this.reactFunction.componentDidMount(this.props, this.context);
    }
  }
  
  componentWillUnmount() {
    if (this.reactFunction.componentWillUnmount) {
      this.reactFunction.componentWillUnmount(this.props, this.context);
    }
  }
}

module.exports = ReactFunctionElement;
