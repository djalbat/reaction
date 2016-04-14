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

    var reactClass = this.reactClass,
        componentDidMount = reactClass.getComponentDidMount(),
        instance = this.instance();

    componentDidMount.apply(instance);
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
    var reactClass = this.reactClass,
        render = reactClass.getRender(),
        displayName = reactClass.getDisplayName(),
        instance = this.instance();

    instance.displayName = displayName;

    this.jsxElement = render.apply(instance);
  }

  instance() {
    var props = this.properties || {},  ///
        state = this.state,
        instance = {
          props: props,
          state: state
        };

    props.children = this.childJSXElements; ///;

    return instance;
  }
}

module.exports = JSXReactElement;
