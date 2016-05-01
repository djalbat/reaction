'use strict';

const Element = require('./element');

class ReactElement extends Element {
  constructor(props) {
    const domElement = null;

    super(domElement, props);

    this.context = undefined;
  }

  mount(parent, reference, context) {
    super.mount(parent, reference);

    this.context = context;

    this.children = toArray(this.render());

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

    this.children = toArray(this.render());

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

    return parent.childReference(child)
  }
}

module.exports = ReactElement;

function toArray(arrayOrElement) { return (arrayOrElement instanceof Array) ?
                                            arrayOrElement :
                                              [arrayOrElement]; }
