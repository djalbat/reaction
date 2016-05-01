'use strict';

var ReactElement = require('./reactElement');

class ReactClassElement extends ReactElement {
  constructor(reactClass, props) {
    super(props);

    this.reactClass = reactClass;
  }

  render() {
    return this.reactClass.render.apply(this);
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
