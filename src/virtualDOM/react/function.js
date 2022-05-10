"use strict";

import ReactElement from "../react";

export default class ReactFunctionElement extends ReactElement {
  constructor(reactFunction, props) {
    super(props);

    this.reactFunction = reactFunction;
  }
 
  render(update) {
    return this.reactFunction(this.props, this.context, this);
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
