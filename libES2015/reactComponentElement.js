'use strict';

var ReactElement = require('./reactElement');

class ReactComponentElement extends ReactElement {
  constructor(reactComponent, props) {
    super(props);

    this.reactComponent = reactComponent;
  }

  render() {
    return this.reactComponent.render.apply(this);
  }

  getChildContext() {
    return this.reactComponent.getChildContext.apply(this);
  }

  componentDidMount() {
    this.reactComponent.componentDidMount.apply(this);
  }

  componentWillUnMount() {
    this.reactComponent.componentWillUnMount.apply(this);
  }
}

module.exports = ReactComponentElement;
