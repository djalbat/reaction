'use strict';

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

function hasAttribute(name) { return this.domElement.hasAttribute(name); }

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

function setStyle(name, value) {
  this.domElement.style[name] = value;
}

module.exports = {
  setAttribute,
  getAttribute,
  clearAttribute,
  addAttribute,
  removeAttribute,
  hasAttribute,
  setClass,
  addClass,
  removeClass,
  toggleClass,
  hasClass,
  hasClasses,
  clearClasses,
  getTagName,
  setStyle
};
