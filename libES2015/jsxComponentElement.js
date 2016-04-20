'use strict';

var JSXElement = require('./jsxElement');

class JSXComponentElement extends JSXElement {
  constructor(reactComponent, properties, children) {
    super(properties, children);

    this.reactComponent = reactComponent;
    
    this.render();
  }

  render() {
    this.jsxElement = this.reactComponent.render.apply(this.instance);
  }

  componentDidMount() {
    this.reactComponent.componentDidMount.apply(this.instance);
  }
}

module.exports = JSXComponentElement;
