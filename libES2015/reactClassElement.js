'use strict';

var ReactElement = require('./reactElement');

class ReactClassElement extends ReactElement {
  constructor(reactClass, properties, children) {
    super(properties, children);

    this.instance.displayName = reactClass.getDisplayName();
    this.instance.state = reactClass.getInitialState(); ///

    this.reactClass = reactClass;
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

  componentWillUnmount() {
    this.reactClass.componentWillUnmount.apply(this.instance);
  }
}

module.exports = ReactClassElement;
