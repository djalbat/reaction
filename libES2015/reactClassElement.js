'use strict';

var ReactElement = require('./reactElement');

class ReactClassElement extends ReactElement {
  constructor(reactClass, properties, children) {
    super(properties, children);

    this.instance.displayName = reactClass.getDisplayName();
    
    this.instance.state = reactClass.getInitialState(); ///

    this.reactClass = reactClass;
  }

  render(context) {
    this.instance.context = context;
    
    return this.reactClass.render.apply(this.instance);
  }
 
  componentDidMount(context) {
    this.instance.context = context;

    this.reactClass.componentDidMount.apply(this.instance);
  }

  componentWillUnmount(context) {
    this.instance.context = context;

    this.reactClass.componentWillUnmount.apply(this.instance);
  }

  getChildContext() {
    return this.reactClass.getChildContext();
  }

  setState(state) {
    this.instance.state = state;

    this.forceUpdate();
  }
}

module.exports = ReactClassElement;
