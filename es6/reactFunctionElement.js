'use strict';

const ReactElement = require('./reactElement');

class ReactFunctionElement extends ReactElement {
  constructor(reactFunction, props) {
    super(props);

    this.reactFunction = reactFunction;

    this.state = this.getInitialState();
  }
 
  render(update) {
    return this.reactFunction(this.props, this.context, update);
  }

  getInitialState() {
    if (this.reactFunction.getInitialState) {
      return this.reactFunction.getInitialState(this.props, this.context);
    }

    return {};
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
