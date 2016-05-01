'use strict';

const helpers = require('./helpers'),
      Element = require('./element');

class ReactElement extends Element {
  constructor(props) {
    const domElement = null;

    super(domElement, props);

    this.context = undefined;
  }

  mount(parent, reference, context) {
    super.mount(parent, reference);

    this.context = context;

    this.children = helpers.toArray(this.render());

    const childParent = this,
          childReference = reference,
          childContext = this.getChildContext() || context;

    this.children.forEach(function(child) {
      child.mount(childParent, childReference, childContext);
    });

    this.componentDidMount(context);
  }

  unmount(context) {
    this.context = context;

    this.componentWillUnmount();

    const childContext = this.getChildContext() || context;

    this.children.forEach(function(child) {
      child.unmount(childContext);
    });
  }

  remount() {
    this.children.forEach(function(child) {
      child.remove();
    });

    this.children = helpers.toArray(this.render());

    const childParent = this,
          childReference = this.getChildReference(),
          childContext = this.getChildContext() || this.context;

    this.children.forEach(function(child) {
      child.mount(childParent, childReference, childContext);
    }.bind(this));
  }

  remove() {
    this.children.forEach(function(child) {
      child.remove();
    });
  }

  forceUpdate() {
    this.remount();
  }

  getChildReference() {
    var parent = this.getParent(),
        child = this;

    return reference(parent, child);
  }
}

module.exports = ReactElement;

function reference(parent, child) {
  var reference = findReference(parent, child),
      parentDOMElement = parent.getDOMElement();

  while (reference === null && parentDOMElement === null) {
    child = parent;
    parent = parent.getParent();

    reference = findReference(parent, child);
    parentDOMElement = parent.getDOMElement();
  }

  return reference;
}

function findReference(parent, child) {
  const children = parent.getChildren(),
        remainingChildren = helpers.remaining(child, children);

  return remainingChildren.reduce(function(reference, remainingChild) {
    if (reference === null) {
      var remainingChildDOMElement = remainingChild.getDOMElement();

      if (remainingChildDOMElement !== null) {
        reference = remainingChild;
      } else {
        child = null;
        parent = remainingChild;

        reference = findReference(parent, child);
      }
    }

    return reference;
  }, null);
}
