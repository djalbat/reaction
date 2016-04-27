'use strict';

class ReactElement {
  constructor(props) {
    this.props = props;

    this.parentDOMElement = undefined;
    this.siblingDOMElement = undefined;

    this.context = undefined;

    this.children = props.children; ///
  }

  mount(parentDOMElement, siblingDOMElement, context) {
    this.parentDOMElement = parentDOMElement;
    this.siblingDOMElement = siblingDOMElement;

    this.context = context;

    this.children = toArray(this.render());

    var childParentDOMElement = parentDOMElement,
        childSiblingDOMElement = siblingDOMElement,
        childContext = this.getChildContext() || context;

    reverse(this.children).forEach(function(child) {
      childSiblingDOMElement = child.mount(childParentDOMElement, childSiblingDOMElement, childContext);
    });

    this.componentDidMount(context);
    
    return this.getDOMElement();
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

    var childParentDOMElement = this.parentDOMElement,
        childSiblingDOMElement = this.siblingDOMElement,
        childContext = this.getChildContext() || this.context;

    reverse(this.children).forEach(function(child) {
      childSiblingDOMElement = child.mount(childParentDOMElement, childSiblingDOMElement, childContext);
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

  getDOMElement() {
    var domElement = null;

    this.children.some(function(child) {
      var childDOMElement = child.getDOMElement();

      if (childDOMElement !== null) {
        domElement = childDOMElement;

        return true;
      } else {
        return false;
      }
    });

    return domElement;
  }
}

module.exports = ReactElement;

function reverse(array) { return array.slice().reverse(); }
function toArray(arrayOrElement) { return (arrayOrElement instanceof Array) ?
                                            arrayOrElement :
                                              [arrayOrElement]; }
