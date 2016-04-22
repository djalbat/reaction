'use strict';

var DisplayElement = require('./displayElement');

class ReactClass {
  constructor(render, displayName, getInitialState, componentDidMount, componentWillUnmount) {
    this.render = render;
    this.displayName = displayName;
    this.getInitialState = getInitialState;
    this.componentDidMount = componentDidMount;
    this.componentWillUnmount = componentWillUnmount;
  }
  
  getDisplayName() {
    return this.displayName;
  }
  
  static fromProperties(properties) {
    var render = properties['render'] || defaultRender,
        displayName = properties['displayName'] || defaultDisplayName,
        getInitialState = properties['getInitialState'] || defaultGetInitialState,
        componentDidMount = properties['componentDidMount'] || defaultComponentDidMount,
        componentWillUnmount = properties['componentWillUnmount'] || defaultComponentWillunmount,
        reactClass = new ReactClass(render, displayName, getInitialState, componentDidMount, componentWillUnmount);
    
    return reactClass;
  }
}

module.exports = ReactClass;

function defaultRender() {
  var properties = this.props,  ///
      displayName = this.displayName, ///
      children = this.props.children; ///

  delete properties.children; ///

  var jsxElement = new DisplayElement(displayName, properties, children);

  return jsxElement;
}

const defaultDisplayName = undefined; ///

function defaultGetInitialState() {
  return {};
}

function defaultComponentDidMount() {}

function defaultComponentWillunmount() {}
