'use strict';

class ReactClass {
  constructor(render, getInitialState, getChildContext, componentDidMount, componentWillUnmount) {
    if (render) { this.render = render; }
    if (getInitialState) { this.getInitialState = getInitialState; }
    if (getChildContext) { this.getChildContext = getChildContext; }
    if (componentDidMount) { this.componentDidMount = componentDidMount; }
    if (componentWillUnmount) { this.componentWillUnmount = componentWillUnmount; }
  }

  render() {
    ///
  }

  getInitialState() {
    return {};
  }

  getChildContext() {
    return undefined;
  }
  
  componentDidMount() {

  }

  componentWillUnmount() {

  }

  static fromObject(object) {
    const render = object['render'],
          getInitialState = object['getInitialState'],
          getChildContext = object['getChildContext'],
          componentDidMount = object['componentDidMount'],
          componentWillUnmount = object['componentWillUnmount'];
   
    return new ReactClass(render, getInitialState, getChildContext, componentDidMount, componentWillUnmount);
  }
}

module.exports = ReactClass;
