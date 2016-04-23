'use strict';

var DisplayElement = require('./displayElement');

class ReactComponent {
  constructor() {

  }

  render(context) {
    return new DisplayElement(this.displayName, this.props, this.children);
  }

  getChildContext() {
    return undefined;
  }

  componentDidMount(context) {
    
  }
  
  componentWillUnmount(context) {

  }
}

module.exports = ReactComponent;
