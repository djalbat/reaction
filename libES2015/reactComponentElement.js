'use strict';

var ReactElement = require('./reactElement');

class ReactComponentElement extends ReactElement {
  constructor(reactComponent, props, children) {
    super(props, children);

    this.reactComponent = reactComponent;
  }

  render(context) {
    this.context = context;
    
    return this.reactComponent.render.apply(this);
  }

  componentDidMount(context) {
    this.context = context;

    this.reactComponent.componentDidMount.apply(this);
  }

  componentWillUnMount(context) {
    this.context = context;

    this.reactComponent.componentWillUnMount.apply(this);
  }

  getChildContext() {
    
    
    return this.reactComponent.getChildContext.apply(this);
  }
}

module.exports = ReactComponentElement;
