"use strict";

import ReactElement from "./virtualDOM/react";

export default class ReactComponent extends ReactElement {
  constructor(props) {
    super(props);

    const initialState = this.getInitialState();

    this.setInitialState(initialState);
  }

  getInitialState() {
    return {};
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
