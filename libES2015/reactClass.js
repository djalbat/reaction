'use strict';

var JSXDisplayElement = require('./displayElement');

class ReactClass {
  constructor(render, displayName, getInitialState, componentDidMount) {
    this.render = render;
    this.displayName = displayName;
    this.getInitialState = getInitialState;
    this.componentDidMount = componentDidMount;
  }
  
  getDisplayName() {
    return this.displayName;
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
      displayName = this.displayName, ///
      children = this.props.children; ///

  delete properties.children; ///

  var jsxElement = new JSXDisplayElement(displayName, properties, children);

  return jsxElement;
}

const defaultDisplayName = undefined; ///

function defaultGetInitialState() {
  var initialState = {};

  return initialState;
}

function defaultComponentDidMount() {
  
}
