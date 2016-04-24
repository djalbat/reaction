'use strict';

class ReactClass {
  constructor(displayName, render, getChildContext, componentDidMount, componentWillUnmount) {
    this.displayName = displayName;
    
    if (render) { this.render = render; }
    if (getChildContext) { this.getChildContext = getChildContext; }
    if (componentDidMount) { this.componentDidMount = componentDidMount; }
    if (componentWillUnmount) { this.componentWillUnmount = componentWillUnmount; }
  }

  render() {
    return undefined;
  }

  getChildContext() {
    return undefined;
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  static fromObject(object) {
    var displayName = object['displayName'],
        render = object['render'],
        getChildContext = object['getChildContext'],
        componentDidMount = object['componentDidMount'],
        componentWillUnmount = object['componentWillUnmount'];
    
    return new ReactClass(displayName, render, getChildContext, componentDidMount, componentWillUnmount);
  }
}

module.exports = ReactClass;
