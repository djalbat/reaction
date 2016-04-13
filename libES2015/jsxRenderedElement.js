'use strict';

class JSXRenderedElement {
  constructor(reactClass, properties, childJSXElements) {
    this.reactClass = reactClass;
    this.properties = properties;
    this.childJSXElements = childJSXElements;

    this.parentJSXElement = null;

    this.element = null;
  }
  
  render(parentJSXElement) {
    this.parentJSXElement = parentJSXElement;

    var reactClass = this.reactClass,
        getInitialState = reactClass.getInitialState,
        initialState = getInitialState();

    this.state = initialState;

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
        props = this.properties,  ///
        state = this.state;
    
    props.children = this.childJSXElements; ///;

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
