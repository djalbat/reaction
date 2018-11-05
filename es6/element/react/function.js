'use strict';

const ReactElement = require('../react');

class ReactFunctionElement extends ReactElement {
  constructor(reactFunction, props) {
    super(props);

    this.reactFunction = reactFunction;




  }
 
  render(update) {
    return this.reactFunction.call(this, this.props, this.context);
  }

  getInitialState() {
    ///
  }

  getChildContext(context) {
    return context;
  }

  componentDidMount() {
    ///
  }
 
  componentWillUnmount() {
    ///
  }
}

module.exports = ReactFunctionElement;
