'use strict';

const ReactElement = require('../react');

class ReactComponentElement extends ReactElement {
  constructor(reactComponent, props) {
    super(props);

    this.reactComponent = reactComponent;

    const initialState = this.getInitialState();

    this.setInitialState(initialState);
  }

  render(update) {
    return this.reactComponent.render.call(this, update);
  }

  getInitialState() {
    return this.reactComponent.getInitialState.call(this);
  }

  getChildContext() {
    return this.reactComponent.getChildContext.call(this);
  }

  componentDidMount() {
    this.reactComponent.componentDidMount.call(this);
  }

  componentWillUnmount() {
    this.reactComponent.componentWillUnmount.call(this);
  }
}

module.exports = ReactComponentElement;
