'use strict';

class ReactClass {
  constructor(elementName, render, getInitialState, componentDidMount) {
    this.elementName = elementName;
    this.render = render;
    this.getInitialState = getInitialState;
    this.componentDidMount = componentDidMount;
  }

  getElementName() {
    return this.elementName;
  }

  getRender() {
    return this.render;
  }

  getGetInitialState() {
    return this.getInitialState;
  }
  
  getComponentDidMount() {
    return this.componentDidMount;
  }
  
  static fromProperties(properties) {
    var displayName = properties['displayName'],
        render = properties['render'],
        getInitialState = properties['getInitialState'] || defaultGetInitialState,
        componentDidMount = properties['componentDidMount'] || defaultComponentDidMount,
        elementName = displayName;  ///

    return new ReactClass(elementName, render, getInitialState, componentDidMount);
  }
}

function defaultGetInitialState () {
  var initialState = {};
  
  return initialState;
}

function defaultComponentDidMount () {
  
}

module.exports = ReactClass;
