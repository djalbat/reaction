'use strict';

const arrayUtilities = require('../../utilities/array');

const { first } = arrayUtilities;

function spliceChildren(start, removeCount, addedChildren, context = this.context) {
  const firstChild = first(this.children),
        childContext = this.getChildContext(context) || context;

  firstChild.spliceChildren(start, removeCount, addedChildren, childContext);
}

function addChild(child, context = this.context) {
  const firstChild = first(this.children),
        childContext = this.getChildContext(context) || context;

  firstChild.addChild(child, childContext);
}

function removeChild(child, context = this.context) {
  const firstChild = first(this.children),
        childContext = this.getChildContext(context) || context;

  firstChild.removeChild(child, childContext);
}

function setAttribute(name, value) {
  const firstChild = first(this.children);

  return firstChild.setAttribute(name, value);
}

function getAttribute(name) {
  const firstChild = first(this.children);

  return firstChild.getAttribute(name);
}

function clearAttribute(name) {
  const firstChild = first(this.children);

  firstChild.clearAttribute(name);
}

function addAttribute(name, value) { 
  const firstChild = first(this.children);

  firstChild.setClassaddAttribute(name, value);
}

function removeAttribute(name) { 
  const firstChild = first(this.children);

  firstChild.removeAttribute(name)
}

function setClass(className) {
  const firstChild = first(this.children);

  firstChild.setClass(className);
}

function addClass(className) {
  const firstChild = first(this.children);

  firstChild.addClass(className);
}

function removeClass(className) {
  const firstChild = first(this.children);

  firstChild.removeClass(className);
}

function toggleClass(className) {
  const firstChild = first(this.children);

  firstChild.toggleClass(className);
}

function hasClass(className) {
  const firstChild = first(this.children);

  return firstChild.hasClass(className);
}

function hasClasses(classNames) {
  const firstChild = first(this.children);

  return firstChild.hasClasses(classNames);
}

function clearClasses() {
  const firstChild = first(this.children);

  firstChild.clearClasses();
}

function getTagName() {
  return null;
}

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
