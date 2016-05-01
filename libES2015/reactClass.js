'use strict';

class ReactClass {
  constructor(render, getChildContext, componentDidMount, componentWillUnmount) {
    if (render) { this.render = render; }
    if (getChildContext) { this.getChildContext = getChildContext; }
    if (componentDidMount) { this.componentDidMount = componentDidMount; }
    if (componentWillUnmount) { this.componentWillUnmount = componentWillUnmount; }
  }

  render() {
    ///
  }

  getChildContext() {
    return undefined;
  }
  
  componentDidMount() {

  }

  componentWillUnmount() {

  }

  static fromObject(object) {
    var render = object['render'],
        getChildContext = object['getChildContext'],
        componentDidMount = object['componentDidMount'],
        componentWillUnmount = object['componentWillUnmount'];
   
    return new ReactClass(render, getChildContext, componentDidMount, componentWillUnmount);
  }
}

module.exports = ReactClass;
