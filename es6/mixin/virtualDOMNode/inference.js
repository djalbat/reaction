'use strict';

function spliceChildren(start, removedChildrenCount, addedChildren, context) {
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

function addChild(child, context) {
  const start = Infinity,
        removedChildrenCount = 0,
        addedChildren = [child];

  this.spliceChildren(start, removedChildrenCount, addedChildren, context);
}

function removeChild(child, context) {
  const index = this.children.indexOf(child);

  if (index > -1) {
    const start = index,
          removedChildrenCount = 1,
          addedChildren = [];

    this.spliceChildren(start, removedChildrenCount, addedChildren, context);
  }
}

function setAttribute(name, value) {
  if (name === 'className') {
    name = 'class';
  }

  if (name === 'htmlFor') {
    name = 'for';
  }

  if (typeof value === 'object') {
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

function getAttribute(name) { return this.domElement.getAttribute(name); }

function clearAttribute(name) { this.domElement.removeAttribute(name); }

function addAttribute(name, value) { this.setAttribute(name, value); }

function removeAttribute(name) { this.domElement.removeAttribute(name); }

function setClass(className) { this.domElement.className = className; }

function addClass(className) { this.domElement.classList.add(className); }

function removeClass(className) { this.domElement.classList.remove(className); }

function toggleClass(className) { this.domElement.classList.toggle(className); }

function hasClass(className) { return this.domElement.classList.contains(className); }

function hasClasses(classNames) {
  return classNames.every(function(className) {
    return this.hasClass(className);
  }.bind(this));
}

function clearClasses() { this.domElement.className = ''; }

function getTagName() { return this.domElement.tagName; }

const inferenceMixin = {
  spliceChildren: spliceChildren,
  addChild: addChild,
  removeChild: removeChild,
  setAttribute: setAttribute,
  getAttribute: getAttribute,
  clearAttribute: clearAttribute,
  addAttribute: addAttribute,
  removeAttribute: removeAttribute,
  setClass: setClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  hasClass: hasClass,
  hasClasses: hasClasses,
  clearClasses: clearClasses,
  getTagName: getTagName
};

module.exports = inferenceMixin;
