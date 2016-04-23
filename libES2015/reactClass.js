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
  
  static fromObject(object) {
    var render = object['render'] || defaultRender,
        displayName = object['displayName'] || defaultDisplayName,
        getChildContext = object['getChildContext'] || defaultGetChildContext,
        componentDidMount = object['componentDidMount'] || defaultComponentDidMount,
        componentWillUnmount = object['componentWillUnmount'] || defaultComponentWillUnmount,
        reactClass = new ReactClass(render, displayName, getChildContext, componentDidMount, componentWillUnmount);
    
    return reactClass;
  }
}

module.exports = ReactClass;

function defaultRender() {
  return new DisplayElement(this.displayName, this.props, this.children);
}

const defaultDisplayName = undefined; ///
function defaultGetChildContext() { return undefined; }
function defaultComponentDidMount(context) {}
function defaultComponentWillUnmount(context) {}
