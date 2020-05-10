"use strict";

import { React } from "reaction";

const { Component } = React;

export default class Provider extends Component {
  getChildContext(context) {
    const { store } = this.props,
          childContext = {
            store
          };

    return childContext;
  }

  render() {
    const { children } = this.props;

    return children;
  }
}
