'use strict';

class JSXFunctionElement {
  constructor(reactFunction, properties, childJSXElements) {
    this.reactFunction = reactFunction;
    this.properties = properties;
    this.childJSXElements = childJSXElements;

    var initialState = {};  ///

    this.state = initialState;  ///

    this.jsxElement = undefined;  ///
    this.parentJSXElement = undefined;  ///
  }
  
  mount(parentJSXElement) {
    this.parentJSXElement = parentJSXElement;

    this.render();
    
    this.remount();

    this.componentDidMount();
  }

  setState(state) {
    this.state = state;

    this.jsxElement.remove();

    this.render();

    this.remount();
  }

  remount() {
    this.jsxElement.mount(this.parentJSXElement);
  }

  render() {
    var reactFunction = this.reactFunction,
        properties = this.properties;

    this.jsxElement = reactFunction(properties);
  }

  componentDidMount() {
    ///
  }
}

module.exports = JSXFunctionElement;
