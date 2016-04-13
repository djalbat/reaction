'use strict';

class JSXRenderedElement {
  constructor(reactClass, childJSXElements, properties) {
    this.reactClass = reactClass;
    this.childJSXElements = childJSXElements;
    this.properties = properties;

    this.parentJSXElement = null;

    this.element = null;
  }
  
  render(parentJSXElement) {
    var reactClass = this.reactClass,
        getInitialState = reactClass.getInitialState || defaultGetInitialState,
        initialState = getInitialState();

    this.state = initialState;

    this.parentJSXElement = parentJSXElement;

    this.renderElement();
  }

  setState(state) {
    this.state = state;

    this.remove();

    this.renderElement();
  }

  renderElement() {
    var parentJSXElement = this.parentJSXElement,
        reactClass = this.reactClass,
        children = this.childJSXElements, ///
        props = this.properties || {},  ///
        state = this.state;
    
    props.children = children;

    var render = reactClass.render,
        instance = {
          props: props,
          state: state
        },
        jsxElement = render.apply(instance); ///

    this.element = jsxElement.element;  ///

    parentJSXElement.append(jsxElement);
  }

  remove() {
    this.element.remove();
  }
}

module.exports = JSXRenderedElement;

function defaultGetInitialState() {
  var initialState = {};
  
  return initialState;
}
