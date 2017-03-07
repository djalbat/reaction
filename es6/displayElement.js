'use strict';

const Element = require('./element');

class DisplayElement extends Element {
  constructor(tagName, props) {
    const domElement = document.createElement(tagName);

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
      } else if (isPropNameHandlerName(propName)) {
        const eventType = eventTypeFromPropertyName(propName),
              handler = propValue;

        this.setEventHandler(eventType, handler);
      } else {
        const attributeName = propName,
              attributeValue = propValue;

        this.setAttribute(attributeName, attributeValue);
      }
    }.bind(this));
  }

  spliceChildren(start, removedChildrenCount, addedChildren, context) {
    const childParent = this,
          childReference = null,
          childContext = context;

    addedChildren.forEach(function(addedChild) {
      addedChild.mount(childParent, childReference, childContext);
    });

    const args = [start, removedChildrenCount].concat(addedChildren),
          removedChildren = Array.prototype.splice.apply(this.children, args);

    removedChildren.forEach(function(removedChild) {
      removedChild.unmount(childContext);
    });
  }

  addChild(child, context) {
    const start = Infinity,
          removedChildrenCount = 0,
          addedChildren = [child];

    this.spliceChildren(start, removedChildrenCount, addedChildren, context);
  }

  removeChild(child, context) {
    const index = this.children.indexOf(child);

    if (index > -1) {
      const start = index,
            removedChildrenCount = 1,
            addedChildren = [];

      this.spliceChildren(start, removedChildrenCount, addedChildren, context);
    }
  }
}

module.exports = DisplayElement;

function isPropNameHandlerName(propName) {
  return propName.match(/^on/);
}

function eventTypeFromPropertyName(propName) {
  return propName.substr(2).toLowerCase();
}
