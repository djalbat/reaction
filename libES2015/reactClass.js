'use strict';

var DisplayElement = require('./displayElement');

class ReactClass {
  constructor(render, displayName, getChildContext, componentDidMount, componentWillUnmount) {
    this.render = render;
    this.displayName = displayName;
    this.getChildContext = getChildContext;
    this.componentDidMount = componentDidMount;
    this.componentWillUnmount = componentWillUnmount;
  }
  
  static fromProperties(properties) {
    var render = properties['render'] || defaultRender,
        displayName = properties['displayName'] || defaultDisplayName,
        getChildContext = properties['getChildContext'] || defaultGetChildContext,
        componentDidMount = properties['componentDidMount'] || defaultComponentDidMount,
        componentWillUnmount = properties['componentWillUnmount'] || defaultComponentWillUnmount,
        reactClass = new ReactClass(render, displayName, getChildContext, componentDidMount, componentWillUnmount);
    
    return reactClass;
  }
}

module.exports = ReactClass;

function defaultRender() {
  var properties = this.props,  ///
      displayName = this.displayName, ///
      children = this.props.children; ///

  return new DisplayElement(displayName, properties, children);
}

const defaultDisplayName = undefined; ///
function defaultGetChildContext() { return undefined; }
function defaultComponentDidMount(context) {}
function defaultComponentWillUnmount(context) {}
