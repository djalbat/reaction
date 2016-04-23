'use strict';

var ReactElement = require('./reactElement');

class ReactComponentElement extends ReactElement {
  constructor(reactComponent, props, children) {
    super(props, children);

    this.reactComponent = reactComponent;
  }

  render(context) {
    this.instance.context = context;
    
    return this.reactComponent.render.apply(this.instance);
  }

  componentDidMount(context) {
    this.instance.context = context;

    this.reactComponent.componentDidMount.apply(this.instance);
  }

  componentWillUnMount(context) {
    this.instance.context = context;

    this.reactComponent.componentWillUnMount.apply(this.instance);
  }

  getChildContext() {
    
    
    return this.reactComponent.getChildContext.apply(this.instance);
  }
}

module.exports = ReactComponentElement;
