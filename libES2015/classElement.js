'use strict';

var Element = require('./element');

class ClassElement extends Element {
  constructor(reactClass, properties, children) {
    super(properties, children);

    this.reactClass = reactClass;

    var displayName = reactClass.getDisplayName(),
        state = reactClass.getInitialState(); ///

    this.instance = Object.assign(this.instance, {
      displayName: displayName,
      state: state
    });

    this.element = this.render();
  }

  setState(state) {
    this.instance = Object.assign(this.instance, {
      state: state
    });

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
