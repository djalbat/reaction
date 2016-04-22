'use strict';

var ReactElement = require('./reactElement');

class ReactComponentElement extends ReactElement {
  constructor(reactComponent, properties, children) {
    super(properties, children);

    this.reactComponent = reactComponent;
  }

  render() {
    return this.reactComponent.render.apply(this.instance);
  }

  getChildContext() {
    return this.reactComponent.getChildContext()
  }

  componentDidMount() {
    this.reactComponent.componentDidMount.apply(this.instance);
  }

  componentWillUnMount() {
    this.reactComponent.componentWillUnMount.apply(this.instance);
  }
}

module.exports = ReactComponentElement;
