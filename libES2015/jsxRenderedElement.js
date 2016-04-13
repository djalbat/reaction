'use strict';

class JSXRenderedElement {
  constructor(reactClass, properties, childJSXElements) {
    this.reactClass = reactClass;
    this.properties = properties;
    this.childJSXElements = childJSXElements;

    this.parentJSXElement = null;

    this.jsxElement = null;
  }
  
  mount(parentJSXElement) {
    this.parentJSXElement = parentJSXElement;

    var reactClass = this.reactClass,
        getInitialState = reactClass.getInitialState,
        initialState = getInitialState();

    this.state = initialState;

    this.update();
  }

  setState(state) {
    this.state = state;

    this.remove();

    this.update();
  }

  remove() {
    this.jsxElement.remove();
  }

  update() {
    var parentJSXElement = this.parentJSXElement,
        props = this.properties,  ///
        state = this.state;
    
    props.children = this.childJSXElements; ///;

    var reactClass = this.reactClass,
        render = reactClass.render,
        instance = {
          props: props,
          state: state
        };
    
    this.jsxElement = render.apply(instance);
    
    parentJSXElement.append(this.jsxElement);
  }
}

module.exports = JSXRenderedElement;
