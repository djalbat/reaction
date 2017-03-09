'use strict';

const VirtualDOMNode = require('../virtualDOMNode');

class VirtualDOMElement extends VirtualDOMNode {
  constructor(tagName, props) {
    const domElement = document.createElement(tagName);

    super(props, domElement);
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

  getTagName() {
    const domElement = this.getDOMElement(),
          tagName = domElement.tagName; 

    return tagName;
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
  
  setAttribute(name, value) {
    if (name === 'className') {
      name = 'class';
    }
    
    if (name === 'htmlFor') {
      name = 'for';
    }

    if (false) {

    } else if (typeof value === 'object') {
      const keys = Object.keys(value);

      keys.forEach(function (key) {
        this.domElement[name][key] = value[key];
      }.bind(this));
    } else if (typeof value === 'boolean') {
      if (value) {
        value = name; ///

        this.domElement.setAttribute(name, value);
      }
    } else {
      this.domElement.setAttribute(name, value);
    }
  }

  getAttribute(name) { return this.domElement.getAttribute(name); }

  clearAttribute(name) { this.domElement.removeAttribute(name); }

  addAttribute(name, value) { this.setAttribute(name, value); }
  
  removeAttribute(name) { this.clearAttribute(name); }

  setClass(className) { this.domElement.className = className; }

  addClass(className) { this.domElement.classList.add(className); }

  removeClass(className) { this.domElement.classList.remove(className); }

  toggleClass(className) { this.domElement.classList.toggle(className); }

  hasClass(className) { return this.domElement.classList.contains(className); }

  clearClasses() { this.domElement.className = ''; }

  applyProps() {
    const names = Object.keys(this.props);

    names.forEach(function(name) {
      const value = this.props[name];

      if (isHandlerName(name)) {
        const domElement = this.getDOMElement(),
              eventType = eventTypeFromName(name),
              handler = value;  ///

        domElement.addEventListener(eventType,  handler);
      } else if (name === 'ref') {
        const callback = value, ///
              domElement = this.getDOMElement();

        callback(domElement)
      } else {
        this.setAttribute(name, value);
      }
    }.bind(this));
  }
}

module.exports = VirtualDOMElement;

function isHandlerName(name) {
  return name.match(/^on/);
}

function eventTypeFromName(name) {
  return name.substr(2).toLowerCase();
}
