'use strict';

class Element {
  constructor(properties, children) {
    const props = properties || {},
          forceUpdate = this.forceUpdate.bind(this);

    props.children = children;

    this.instance = {
      props: props,
      forceUpdate: forceUpdate
    };

    this.element = undefined;  ///
  }
  
  mount(parent) {
    this.element.mount(parent);
    
    this.componentDidMount();
  }

  update(previous) {
    this.element.update(previous);
  }
  
  unmount() {
    this.componentWillUnmount();
    
    this.element.unmount();
  }

  forceUpdate() {
    var previous = this.element;  ///

    this.element = this.render();

    this.update(previous)
  }

  remove() { this.element.remove(); }

  appendAfter(previousSibling) { this.element.appendAfter(previousSibling); }

  componentDidMount() {

  }

  componentWillUnmount() {

  }
}

module.exports = Element;
