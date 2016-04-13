'use strict';

class JSXReactElement {
  constructor(reactClass, properties) {
    this.reactClass = reactClass;
    this.properties = properties;

    this.jsxElement = null;

    this.parentJSXElement = null;
  }

  mount(parentJSXElement) {
    var reactClass = this.reactClass,
        getInitialState = reactClass.getGetInitialState(),
        initialState = getInitialState();

    this.state = initialState;

    this.renderJSXElement();

    this.jsxElement.mount(parentJSXElement);

    this.parentJSXElement = parentJSXElement;
  }

  setState(state) {
    this.state = state;

    this.jsxElement.remove();

    this.renderJSXElement();

    var parentJSXElement = this.parentJSXElement;

    this.jsxElement.mount(parentJSXElement);  ///
  }

  renderJSXElement() {
    var props = this.properties || {},  ///
        state = this.state;
    
    // props.children = this.childJSXElements; ///;

    var reactClass = this.reactClass,
        render = reactClass.getRender(),
        instance = {
          props: props,
          state: state
        }; 

    this.jsxElement = render.apply(instance);
  }
}

module.exports = JSXReactElement;
