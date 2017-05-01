'use strict';

const helpers = require('../helpers'),
      Element = require('../element'),
      inferenceMixin = require('../mixin/react/inference');

class ReactElement extends Element {
  constructor(props) {
    super(props);
    
    this.state = undefined; ///

    this.context = undefined;
  }

  mount(parent, reference, context) {
    const childContext = this.getChildContext(context) || context,
          children = helpers.guaranteeArray(this.render());

    super.mount(parent, children);

    children.forEach(function(child) {
      const childParent = this,
            childReference = reference;

      child.mount(childParent, childReference, childContext);
    }.bind(this));

    this.context = context;

    this.componentDidMount();
  }

  unmount(context) {
    this.context = context;

    this.componentWillUnmount();

    const childContext = this.getChildContext(context) || context,
          children = this.getChildren();

    children.forEach(function(child) {
      child.unmount(childContext);
    });

    super.unmount();
  }

  remount() {
    const childParent = this,
          childReference = this.getChildReference(),
          childContext = this.getChildContext(this.context) || this.context;

    this.children.forEach(function(child) {
      child.unmount(childContext);
    });

    this.children = helpers.guaranteeArray(this.render());

    this.children.forEach(function(child) {
      child.mount(childParent, childReference, childContext);
    }.bind(this));
  }

  getDOMElement() {
    return null;
  }

  setInitialState(initialState) {
    this.state = initialState;  ///
  }

  setState(state) {
    this.state = state;

    this.remount();
  }

  forceUpdate(update) {
    if (update !== undefined) {
      this.render(update);
    } else {
      this.remount();
    }
  }

  getChildReference() {
    const parent = this.getParent(),
          child = this;

    return reference(parent, child);
  }
}

Object.assign(ReactElement.prototype, inferenceMixin);

module.exports = ReactElement;

function reference(parent, child) {
  let reference = findReference(parent, child),
      parentDOMElement = parent.getDOMElement();

  while ((reference === null) && (parentDOMElement === null)) {
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
      const remainingChildDOMElement = remainingChild.getDOMElement();

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
