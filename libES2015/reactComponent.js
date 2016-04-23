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

  getChildContext() {
    return undefined;
  }

  componentDidMount(context) {
    
  }
  
  componentWillUnmount(context) {

  }
}

module.exports = ReactComponent;
