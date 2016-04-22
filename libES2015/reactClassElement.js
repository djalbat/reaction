'use strict';

var ReactElement = require('./reactElement');

class ReactClassElement extends ReactElement {
  constructor(reactClass, properties, children) {
    super(properties, children);

    this.instance.displayName = reactClass.getDisplayName();
    this.instance.state = reactClass.getInitialState(); ///

    this.reactClass = reactClass;
  }

  render() {
    return this.reactClass.render.apply(this.instance);
  }

  componentDidMount() {
    this.reactClass.componentDidMount.apply(this.instance);
  }

  setState(state) {
    this.instance.state = state;

    this.forceUpdate();
  }
}

module.exports = ReactClassElement;
