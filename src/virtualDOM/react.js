"use strict";

import VirtualDOMElement from "../virtualDOMElement";
import reactElementMixins from "../mixins/reactElement";

import { guarantee, remaining } from "../utilities/array";

class ReactElement extends VirtualDOMElement {
  constructor(props) {
    super(props);
    
    this.state = null;
    this.context = null;
  }

  getState() {
    return this.state;
  }

  getContext() {
    return this.context;
  }

  getDOMElement() {
    return null;
  }

  getChildReference() {
    const parent = this.getParent(),
          child = this; ///

    return reference(parent, child);
  }

  setState(state) {
    this.state = state;

    this.redraw();
  }

  updateState(state) {
    const oldState = this.state,  ///
          newState = state; ///

    this.state = Object.assign(oldState, newState);

    this.redraw();
  }

  setInitialState(initialState) {
    this.state = initialState;  ///
  }

  forceUpdate(update) {
    this.redraw(update);
  }

  mount(parent, reference, context) {
    this.context = context;

    const childContext = this.getChildContext(context) || null;

    const update = null,
          children = guarantee(this.render(update, this));

    super.mount(parent, children);

    children.forEach((child) => {
      const childParent = this,
            childReference = reference;

      child.mount(childParent, childReference, childContext);
    });

    this.childContextSet(childContext);

    this.componentDidMount();
  }

  unmount() {
    this.componentWillUnmount();

    const children = this.getChildren();

    children.forEach((child) => {
      child.unmount();
    });

    super.unmount();
  }

  redraw(update) {
    const childContext = this.getChildContext(this.context) || null;

    this.children.forEach((child) => {
      child.unmount();
    });

    this.children = guarantee(this.render(update, this));

    this.children.forEach((child) => {
      const childParent = this,
            childReference = this.getChildReference();

      child.mount(childParent, childReference, childContext);
    });

    this.childContextSet(childContext);
  }
}

Object.assign(ReactElement.prototype, reactElementMixins);

export default ReactElement;

function reference(parent, child) {
  let reference = findReference(parent, child),
      parentDOMElement = parent.getDOMElement();

  while ((reference === null) && (parentDOMElement === null)) {
    child = parent; ///

    parent = parent.getParent();

    reference = findReference(parent, child);

    parentDOMElement = parent.getDOMElement();
  }

  return reference;
}

function findReference(parent, child) {
  const children = parent.getChildren(),
        remainingChildren = remaining(child, children);

  return remainingChildren.reduce((reference, remainingChild) => {
    if (reference === null) {
      const remainingChildDOMElement = remainingChild.getDOMElement();

      if (remainingChildDOMElement !== null) {
        reference = remainingChild; ///
      } else {
        child = null;

        parent = remainingChild;  ///

        reference = findReference(parent, child);
      }
    }

    return reference;
  }, null);
}
