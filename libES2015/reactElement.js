'use strict';

class ReactElement {
  constructor(props) {
    
    this.props = props;

    this.parent = undefined;
    this.sibling = undefined;
    this.context = undefined;

    this.children = props.children; ///
  }
  
  getDOMElement() {
    return null;
  }
  
  getParent() {
    return this.parent;
  }
  
  getSibling() {
    return this.sibling;
  }
  
  getChildren() {
    return this.children;
  }

  forceUpdate() {
    this.remove();

    this.remount();
  }
  
  

  mount(parent, sibling, context) {
    this.parent = parent;
    this.sibling = sibling;
    this.context = context;

    var childParent = this,
        childSibling = null,
        childContext = this.getChildContext() || context,
        childOrChildren = this.render();

    this.children = (childOrChildren instanceof Array) ?
                      childOrChildren :
                        [childOrChildren];

    this.children.forEach(function(child) {
      childSibling = child.mount(childParent, childSibling, childContext);
    });

    this.componentDidMount(context);
    
    return this;
  }

  unmount(context) {
    this.context = context;

    this.componentWillUnmount();

    var childContext = this.getChildContext() || context;

    this.children.forEach(function(child) {
      child.unmount(childContext);
    });
  }

  remount() {
    var context = this.context,
        childParent = this,
        childSibling = null,
        childContext = this.getChildContext() || context,
        childOrChildren = this.render(context);

    this.children = (childOrChildren instanceof Array) ?
                      childOrChildren :
                        [childOrChildren];

    this.children.forEach(function(child) {
      childSibling = child.mount(childParent, childSibling, childContext);
    });
  }

  remove() {
    this.children.forEach(function(child) {
      child.remove();
    });
  }

  prepend(child) {
    return false;
  }
  
  appendAfter(sibling) {
    return false;
  }
}

module.exports = ReactElement;
