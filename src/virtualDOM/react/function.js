"use strict";

import ReactElement from "../react";

export default class ReactFunctionElement extends ReactElement {
  constructor(reactFunction, props) {
    super(props);

    this.reactFunction = reactFunction;
  }
 
  render(update) {
    return this.reactFunction(this.props, this.context, update, this);
  }

  getInitialState() {
    ///
  }

  getChildContext(context) {
    return context;
  }

  childContextSet(context) {
    ///
  }

  componentDidMount() {
    ///
  }
 
  componentWillUnmount() {
    ///
  }
}
