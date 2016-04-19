'use strict';

class JSXComponentElement {
  constructor(reactComponent, properties, childJSXElements) {
    this.reactComponent = reactComponent;
    this.properties = properties;
    this.childJSXElements = childJSXElements;

    this.jsxElement = undefined;  ///

    this.parentJSXElement = undefined;  ///
  }
  
  mount(parentJSXElement) {
    this.parentJSXElement = parentJSXElement;

    this.render();
    
    this.remount();
  }

  render() {
    var instance = this.instance();
    
    this.jsxElement = this.reactComponent.render.apply(instance);
  }

  remount() {
    this.jsxElement.mount(this.parentJSXElement);
  }

  instance() {
    var props = this.properties || {},  ///
        instance = {
          props: props
        };

    instance.children = this.childJSXElements; ///
    
    return instance;
  }
}

module.exports = JSXComponentElement;
