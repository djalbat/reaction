'use strict';

const necessary = require('necessary');

const { array } = necessary;

function spliceChildren(start, removeCount, addedChildren, context = this.context) {
  const firstChild = array.first(this.children),
        childContext = this.getChildContext(context) || context;

  firstChild.spliceChildren(start, removeCount, addedChildren, childContext);
}

function addChild(child, context = this.context) {
  const firstChild = array.first(this.children),
        childContext = this.getChildContext(context) || context;

  firstChild.addChild(child, childContext);
}

function removeChild(child, context = this.context) {
  const firstChild = array.first(this.children),
        childContext = this.getChildContext(context) || context;

  firstChild.removeChild(child, childContext);
}

function setAttribute(name, value) {
  const firstChild = array.first(this.children);

  return firstChild.setAttribute(name, value);
}

function getAttribute(name) {
  const firstChild = array.first(this.children);

  return firstChild.getAttribute(name);
}

function clearAttribute(name) {
  const firstChild = array.first(this.children);

  firstChild.clearAttribute(name);
}

function addAttribute(name, value) { 
  const firstChild = array.first(this.children);

  firstChild.setClassaddAttribute(name, value);
}

function removeAttribute(name) { 
  const firstChild = array.first(this.children);

  firstChild.removeAttribute(name)
}

function setClass(className) {
  const firstChild = array.first(this.children);

  firstChild.setClass(className);
}

function addClass(className) {
  const firstChild = array.first(this.children);

  firstChild.addClass(className);
}

function removeClass(className) {
  const firstChild = array.first(this.children);

  firstChild.removeClass(className);
}

function toggleClass(className) {
  const firstChild = array.first(this.children);

  firstChild.toggleClass(className);
}

function hasClass(className) {
  const firstChild = array.first(this.children);

  return firstChild.hasClass(className);
}

function clearClasses() {
  const firstChild = array.first(this.children);

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
  clearClasses: clearClasses,
  getTagName: getTagName
};

module.exports = inferenceMixin;
