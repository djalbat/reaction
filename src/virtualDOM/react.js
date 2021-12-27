"use strict";

import VirtualDOMElement from "../virtualDOMElement";
import reactElementMixins from "../mixins/reactElement";

import { guarantee, remaining } from "../utilities/array";

class ReactElement extends VirtualDOMElement {
  constructor(props) {
    super(props);
    
    this.state = undefined; ///

    this.context = undefined; ///
  }

  mount(parent, reference, context) {
    this.context = context;

    const childContext = this.getChildContext(context),
          children = guarantee(this.render());

    super.mount(parent, children);

    children.forEach((child) => {
      const childParent = this,
            childReference = reference;

      child.mount(childParent, childReference, childContext);
    });

    this.componentDidMount();
  }

  unmount(context) {
    this.context = context;

    this.componentWillUnmount();

    const childContext = this.getChildContext(context),
          children = this.getChildren();

    children.forEach((child) => child.unmount(childContext));

    super.unmount();
  }

  remount(update) {
    const childParent = this,
          childReference = this.getChildReference(),
          childContext = this.getChildContext(this.context);

    this.children.forEach((child) => child.unmount(childContext));

    this.children = guarantee(this.render(update));

    this.children.forEach((child) => child.mount(childParent, childReference, childContext));
  }

  getDOMElement() {
    return null;
  }

  getState() {
    return this.state;
  }

  setInitialState(initialState) {
    this.state = initialState;  ///
  }

  setState(state) {
    this.state = state;

    this.remount();
  }

  updateState(newState) {
    const oldState = this.state;  ///

    this.state = Object.assign(oldState, newState);

    this.remount();
  }

  forceUpdate(update) {
    this.remount(update);
  }

  getChildReference() {
    const parent = this.getParent(),
          child = this; ///

    return reference(parent, child);
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
