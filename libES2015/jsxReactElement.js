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
    
    const children = this.childJSXElements, ///
          props = Object.assign({}, this.properties, {children: children}),
          state = this.state,
          displayName = reactClass.getDisplayName();

    this.instance = Object.assign({
      props: props,
      state: state,
      displayName: displayName
    });

    this.render();
  }

  mount(parentJSXElement) {
    this.jsxElement.mount(parentJSXElement);

    this.reactClass.componentDidMount.apply(this.instance);
  }

  remount(oldJSXElement) {
    this.jsxElement.remount(oldJSXElement);
  }

  setState(state) {
    this.state = state;

    var oldJSXElement = this.jsxElement;

    this.render();

    this.jsxElement.remount(oldJSXElement)
  }

  render() {
    this.jsxElement = this.reactClass.render.apply(this.instance);
  }
}

module.exports = JSXReactElement;
