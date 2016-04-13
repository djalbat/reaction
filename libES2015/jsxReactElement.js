'use strict';

class JSXReactElement {
  constructor(reactClass, properties, childJSXElements) {
    this.reactClass = reactClass;
    this.properties = properties;
    this.childJSXElements = childJSXElements;

    this.jsxElement = null;
  }

  mount(parentJSXElement) {
    var reactClass = this.reactClass,
        getInitialState = reactClass.getGetInitialState(),
        initialState = getInitialState();

    this.state = initialState;

    this.update();

    this.jsxElement.mount(parentJSXElement);
  }

  setState(state) {
    this.state = state;

    this.remove();

    this.update();
  }

  remove() { this.jsxElement.remove(); }

  update() {
    var props = this.properties || {},  ///
        state = this.state;
    
    props.children = this.childJSXElements; ///;

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
