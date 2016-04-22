'use strict';

var Element = require('./element');

class ComponentElement extends Element {
  constructor(reactComponent, properties, children) {
    super(properties, children);

    this.reactComponent = reactComponent;
    
    this.render();
  }

  render() {
    this.element = this.reactComponent.render.apply(this.instance);
  }

  componentDidMount() {
    this.reactComponent.componentDidMount.apply(this.instance);
  }
}

module.exports = ComponentElement;
