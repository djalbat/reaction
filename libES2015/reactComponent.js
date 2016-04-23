'use strict';

var DisplayElement = require('./displayElement');

class ReactComponent {
  constructor() {

  }

  render(context) {
    var properties = this.props,  ///
        displayName = this.displayName, ///
        children = this.props.children; ///

    return new DisplayElement(displayName, properties, children);
  }

  componentDidMount(context) {
    
  }
  
  componentWillUnmount(context) {

  }

  getChildContext() {
    return undefined;
  }
}

module.exports = ReactComponent;
