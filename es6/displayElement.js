'use strict';

const Element = require('./element');

class DisplayElement extends Element {
  constructor(displayName, props) {
    const domElement = document.createElement(displayName);

    super(domElement, props);
  }

  mount(parent, reference, context) {
    super.mount(parent, reference);

    const childParent = this,
          childReference = null,
          childContext = context;

    this.children.forEach(function(child) {
      child.mount(childParent, childReference, childContext);
    });

    this.applyProps();
  }

  unmount(context) {
    const childContext = context;

    this.children.forEach(function(child) {
      child.unmount(childContext);
    });

    super.unmount();
  }

  applyProps() {
    const propNames = Object.keys(this.props);

    propNames.forEach(function(propName) {
      const propValue = this.props[propName];

      if (false) {

      } else if (propName === 'ref') {
        const callback = propValue,
              domElement = this.getDOMElement();

        callback(domElement)
      } else if (propNameIsHandlerName(propName)) {
        const eventName = eventNameFromPropertyName(propName),
              handler = propValue;

        this.setHandler(eventName, handler);
      } else {
        const attributeName = propName,
              attributeValue = propValue;

        this.setAttribute(attributeName, attributeValue);
      }
    }.bind(this));
  }

  spliceChildren(start, removeCount, addedChildren, context) {
    const childParent = this,
          childReference = null,
          childContext = context;

    addedChildren.forEach(function(addedChild) {
      addedChild.mount(childParent, childReference, childContext);
    });

    const removedChildren = this.children.splice(start, removeCount, addedChildren);

    removedChildren.forEach(function(removedChild) {
      removedChild.unmount(childContext);
    });
  }

  addChild(child, context) {
    const start = Infinity,
          removeCount = 0,
          addedChildren = [child];

    this.spliceChildren(start, removeCount, addedChildren, context);
  }

  removeChild(child, context) {
    const index = this.children.indexOf(child);

    if (index > -1) {
      const start = index,
            removeCount = 1,
            addedChildren = [];

      this.spliceChildren(start, removeCount, addedChildren, context);
    }
  }
}

module.exports = DisplayElement;

function propNameIsHandlerName(propName) {
  return propName.match(/^on/);
}

function eventNameFromPropertyName(propName) {
  return propName.substr(2).toLowerCase();
}
