'use strict';

var JSXElement = require('./jsxElement');

class ReactClass {
  constructor(render, displayName, getInitialState, componentDidMount) {
    this.render = render;
    this.displayName = displayName;
    this.getInitialState = getInitialState;
    this.componentDidMount = componentDidMount;
  }
  
  getRender() {
    return this.render;
  }

  getDisplayName() {
    return this.displayName;
  }

  getGetInitialState() {
    return this.getInitialState;
  }
  
  getComponentDidMount() {
    return this.componentDidMount;
  }
  
  static fromProperties(properties) {
    var render = properties['render'] || defaultRender,
        displayName = properties['displayName'] || defaultDisplayName,
        getInitialState = properties['getInitialState'] || defaultGetInitialState,
        componentDidMount = properties['componentDidMount'] || defaultComponentDidMount,
        reactClass = new ReactClass(render, displayName, getInitialState, componentDidMount);
    
    return reactClass;
  }
}

module.exports = ReactClass;

function defaultRender() {
  var properties = this.props,  ///
      elementName = this.displayName, ///
      childJSXElements = this.props.children; ///

  delete properties.children; ///

  var jsxElement = new JSXElement(elementName, properties, childJSXElements);

  return jsxElement;
}

const defaultDisplayName = undefined; ///

function defaultGetInitialState() {
  var initialState = {};

  return initialState;
}

function defaultComponentDidMount() {
  
}
