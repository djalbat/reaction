'use strict';

var Element = require('./element');

class ClassElement extends Element {
  constructor(reactClass, properties, children) {
    super(properties, children);

    this.instance.displayName = reactClass.getDisplayName();
    this.instance.state = reactClass.getInitialState(); ///

    this.reactClass = reactClass;

    this.element = this.render();
  }

  setState(state) {
    this.instance.state = state;

    this.forceUpdate();
  }

  render() {
    return this.reactClass.render.apply(this.instance);
  }

  componentDidMount() {
    this.reactClass.componentDidMount.apply(this.instance);
  }
}

module.exports = ClassElement;
