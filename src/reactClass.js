"use strict";

export default class ReactClass {
  constructor(render, getInitialState, getChildContext, componentDidMount, componentWillUnmount, mixins) {
    this.render = render;

    if (getInitialState) { this.getInitialState = getInitialState; }
    if (getChildContext) { this.getChildContext = getChildContext; }
    if (componentDidMount) { this.componentDidMount = componentDidMount; }
    if (componentWillUnmount) { this.componentWillUnmount = componentWillUnmount; }

    this.mixins = mixins;
  }

  getInitialState() {
    return {};
  }

  getChildContext(context) {
    return context;
  }
  
  componentDidMount() {

  }

  componentWillUnmount() {

  }

  static create(object) {
    const { render, getInitialState, getChildContext, componentDidMount, componentWillUnmount, mixins } = object;

    return new ReactClass(render, getInitialState, getChildContext, componentDidMount, componentWillUnmount, mixins);
  }
}
