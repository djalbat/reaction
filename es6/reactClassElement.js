'use strict';

const ReactElement = require('./reactElement');

class ReactClassElement extends ReactElement {
  constructor(reactClass, props) {
    super(props);

    this.reactClass = reactClass;

    this.state = this.getInitialState();
  }

  render() {
    return this.reactClass.render.apply(this);
  }

  getInitialState() {
    return this.reactClass.getInitialState.apply(this);
  }

  getChildContext() {
    return this.reactClass.getChildContext.apply(this);
  }
  
  componentDidMount() {
    this.reactClass.componentDidMount.apply(this);
  }

  componentWillUnmount() {
    this.reactClass.componentWillUnmount.apply(this);
  }
}

module.exports = ReactClassElement;
