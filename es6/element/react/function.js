'use strict';

const ReactElement = require('../react');

class ReactFunctionElement extends ReactElement {
  constructor(reactFunction, props) {
    super(props);

    this.reactFunction = reactFunction;

    const initialState = this.getInitialState();

    this.setInitialState(initialState);
  }
 
  render() {
    return this.reactFunction(this.props, this.context);
  }

  getInitialState() {
    return undefined;
  }

  getChildContext(context) {
    return undefined;
  }

  componentDidMount() {

  }
 
  componentWillUnmount() {

  }
}

module.exports = ReactFunctionElement;
