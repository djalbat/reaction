'use strict';

class ReactElement {
  constructor(props, children) {
    this.props = props;
    this.children = children;
  }
  
  mount(parent, context) {
    const childOrChildren = this.render(context);

    var childContext = this.getChildContext();

    childContext = childContext || context;

    this.children = (childOrChildren instanceof Array) ?
                      childOrChildren :
                        [childOrChildren];

    this.children.forEach(function(child) {
      child.mount(parent, childContext);
    });

    this.componentDidMount(context);
  }

  remount(previousSibling, context) {
    const childOrChildren = this.render(context);

    var childContext = this.getChildContext();

    childContext = childContext || context;

    this.children = (childOrChildren instanceof Array) ?
                      childOrChildren :
                        [childOrChildren];

    this.children.forEach(function(child) {
      previousSibling = child.remount(previousSibling, childContext);
    });
    
    return this;
  }

  unmount(context) {
    this.componentWillUnmount(context);

    var childContext = this.getChildContext();

    childContext = childContext || context;

    this.children.forEach(function(child) {
      child.unmount(context, childContext);
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

  forceUpdate() {
    var previousChildren = this.children,
        lastPreviousChild = last(previousChildren),
        previousSibling = lastPreviousChild,  ///
        context = this.context;

    this.remount(previousSibling, context);

    previousChildren.forEach(function(previousChild) {
      previousChild.remove();
    });
  }
}

module.exports = ReactElement;

function last(array) { return array[array.length - 1]; }
