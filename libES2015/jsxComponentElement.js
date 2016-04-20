'use strict';

class JSXComponentElement {
  constructor(reactComponent, properties, childJSXElements) {
    this.reactComponent = reactComponent;
    this.properties = properties;
    this.childJSXElements = childJSXElements;

    this.jsxElement = undefined;  ///

    const children = this.childJSXElements, ///
          props = Object.assign({}, this.properties, {children: children}),
          forceUpdate = this.forceUpdate.bind(this);

    this.instance = Object.assign({}, {props: props}, {forceUpdate: forceUpdate});

    this.render();
  }
  
  mount(parentJSXElement) {
    this.jsxElement.mount(parentJSXElement);

    this.reactComponent.componentDidMount.apply(this.instance);
  }

  remount(oldJSXElement) {
    this.jsxElement.remount(oldJSXElement);
  }

  forceUpdate() {
    var oldJSXElement = this.jsxElement;
    
    this.render();

    this.jsxElement.remount(oldJSXElement)
  }

  render() {
    this.jsxElement = this.reactComponent.render.apply(this.instance);
  }

  remove() {
    this.jsxElement.remove();
  }

  appendAfter(jsxElement) {
    this.jsxElement.appendAfter(jsxElement);
  }
}

module.exports = JSXComponentElement;
