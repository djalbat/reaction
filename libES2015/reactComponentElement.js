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

  componentDidMount() {
    this.reactComponent.componentDidMount.apply(this.instance);
  }
}

module.exports = ReactComponentElement;
