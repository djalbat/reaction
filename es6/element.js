'use strict';

const arrayUtilities = require('./utilities/array');

const { first } = arrayUtilities;

class Element {
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
    const firstChild = first(this.children);

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

module.exports = Element;
