'use strict';

const ReactElement = require('./reactElement');

class ReactComponentElement extends ReactElement {
  constructor(reactComponent, props) {
    super(props);

    this.reactComponent = reactComponent;

    this.state = this.getInitialState();
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
