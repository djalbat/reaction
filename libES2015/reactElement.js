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
  
  mount(parent, context) {
    const childOrChildren = this.render(context),
          childContext = this.getChildContext() || context;

    this.children = (childOrChildren instanceof Array) ?
                      childOrChildren :
                        [childOrChildren]; 

    this.children.forEach(function(child) {
      child.mount(parent, childContext);
    });

    this.componentDidMount(context);
  }

  remount(previousSibling, context) {
    const childOrChildren = this.render(context),
          childContext = this.getChildContext() || context;

    this.children = (childOrChildren instanceof Array) ?
                      childOrChildren :
                        [childOrChildren];

    this.children.forEach(function(child) {
      child.remount(previousSibling, childContext);
    });
  }

  unmount(context) {
    this.componentWillUnmount(context);

    const childContext = this.getChildContext() || context;

    this.children.forEach(function(child) {
      child.unmount(context, childContext);
    });
  }

  forceUpdate() {
    var previousChildren = this.children,
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
