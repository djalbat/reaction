'use strict';

class JSXReactElement {
  constructor(reactClass, properties, childJSXElements) {
    this.reactClass = reactClass;
    this.properties = properties;
    this.childJSXElements = childJSXElements;

    var getInitialState = reactClass.getGetInitialState(),
        initialState = getInitialState();

    this.state = initialState;  ///

    this.jsxElement = undefined;  ///
    this.parentJSXElement = undefined;  ///
  }
  
  mount(parentJSXElement) {
    this.parentJSXElement = parentJSXElement;

    this.render();
    
    this.remount();
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
    var props = this.properties || {},  ///
        state = this.state;
    
    props.children = this.childJSXElements; ///;

    var reactClass = this.reactClass,
        render = reactClass.getRender(),
        displayName = reactClass.getDisplayName(),
        instance = {
          props: props,
          state: state,
          displayName: displayName
        };

    this.jsxElement = render.apply(instance);
  }
}

module.exports = JSXReactElement;
