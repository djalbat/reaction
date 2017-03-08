'use strict';

class Element {
  constructor(props) {
    this.props = props;

    this.parent = null;

    this.children = props.children;  ///
  }

  mount(parent) {
    this.parent = parent;
  }

  unmount() {
    this.parent = null;
  }

  getParent() {
    return this.parent;
  }

  getChildren() {
    return this.children;
  }
}

module.exports = Element;
