'use strict';

var ReactElement = require('./reactElement');

class ReactClassElement extends ReactElement {
  constructor(reactClass, props, children) {
    super(props, children);

    this.reactClass = reactClass;
  }

  render(context) {
    this.context = context;
    
    return this.reactClass.render.apply(this);
  }
 
  componentDidMount(context) {
    this.context = context;

    this.reactClass.componentDidMount.apply(this);
  }

  componentWillUnmount(context) {
    this.context = context;

    this.reactClass.componentWillUnmount.apply(this);
  }

  getChildContext() {
    return this.reactClass.getChildContext.apply(this);
  }
}

module.exports = ReactClassElement;
