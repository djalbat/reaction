'use strict';

const ReactElement = require('../react');

class ReactFunctionElement extends ReactElement {
  constructor(reactFunction, props) {
    super(props);

    this.reactFunction = reactFunction;




  }
 
  render() {
    return this.reactFunction(this.props, this.context);
  }

  getInitialState() {

  }

  getChildContext(context) {

  }

  componentDidMount() {

  }
 
  componentWillUnmount() {

  }
}

module.exports = ReactFunctionElement;
