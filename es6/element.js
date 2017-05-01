'use strict';

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
