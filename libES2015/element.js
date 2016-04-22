'use strict';

class Element {
  constructor(properties, children) {
    const props = Object.assign({}, properties, {children: children}),
          forceUpdate = this.forceUpdate.bind(this);

    this.instance = Object.assign({}, {props: props}, {forceUpdate: forceUpdate});

    this.element = undefined;  ///
  }
  
  mount(parentElement) {
    this.element.mount(parentElement);
    
    this.componentDidMount();
  }

  update(oldElement) {
    this.element.update(oldElement);
  }
  
  unmount() {
    this.componentWillUnmount();
    
    this.element.unmount();
  }

  forceUpdate() {
    var oldElement = this.element;

    this.render();

    this.update(oldElement)
  }

  remove() {
    this.element.remove();
  }

  appendAfter(element) {
    this.element.appendAfter(element);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }
}

module.exports = Element;
