"use strict";

import { first } from "./utilities/array";

export default class VirtualDOMElement {
  constructor(props) {
    this.props = props;

    this.parent = null;

    this.children = props.children;  ///
  }

  getParent() {
    return this.parent;
  }

  getChildren() {
    return this.children;
  }

  getFirstChild() {
    const firstChild = first(this.children) || null;

    return firstChild;
  }

  mount(parent, children) {
    this.parent = parent;

    this.children = children;
  }

  unmount() {
    this.parent = null;

    this.children = null;
  }
}
