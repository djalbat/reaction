'use strict';

class ReactElement {
  constructor(properties, children) {
    const props = properties || {},
          forceUpdate = this.forceUpdate.bind(this);

    this.children = children;

    props.children = children;

    this.instance = {
      props: props,
      forceUpdate: forceUpdate
    };
  }
  
  mount(parent) {
    const childOrChildren = this.render();

    this.children = (childOrChildren instanceof Array) ?
                      childOrChildren :
                        [childOrChildren];
    
    this.children.forEach(function(child) {
      child.mount(parent);
    });

    this.componentDidMount();
  }

  remount(lastPreviousChild) {
    const childOrChildren = this.render();

    this.children = (childOrChildren instanceof Array) ?
                      childOrChildren :
                        [childOrChildren];

    this.children.forEach(function(child) {
      var previousSibling = lastPreviousChild; ///
      
      child.remount(previousSibling);
    });
  }

  forceUpdate() {
    var previousChildren = this.children, ///
        lastPreviousChild = last(previousChildren);
    
    this.remount(lastPreviousChild);

    previousChildren.forEach(function(previousChild) {
      previousChild.remove();
    });
  }

  remove() {
    this.children.forEach(function(child) {
      child.remove();
    });
  }
  
  append(parent) {
    this.children.forEach(function(child) {
      child.append(parent);
    });
  }

  appendAfter(previousSibling) {
    this.children.forEach(function(child) {
      child.appendAfter(previousSibling);
    });
  }
}

module.exports = ReactElement;

function last(array) { return array[array.length - 1]; }
