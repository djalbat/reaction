'use strict';

class JSXElement {
  constructor(properties, children) {
    const props = Object.assign({}, properties, {children: children}),
          forceUpdate = this.forceUpdate.bind(this);

    this.instance = Object.assign({}, {props: props}, {forceUpdate: forceUpdate});

    this.jsxElement = undefined;  ///
  }
  
  mount(parentJSXElement) {
    this.jsxElement.mount(parentJSXElement);
    
    this.componentDidMount();
  }

  update(oldJSXElement) {
    this.jsxElement.update(oldJSXElement);
  }
  
  unmount() {
    this.componentWillUnmount();
    
    this.jsxElement.unmount();
  }

  forceUpdate() {
    var oldJSXElement = this.jsxElement;

    this.render();

    this.update(oldJSXElement)
  }

  remove() {
    this.jsxElement.remove();
  }

  appendAfter(jsxElement) {
    this.jsxElement.appendAfter(jsxElement);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }
}

module.exports = JSXElement;
