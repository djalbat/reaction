'use strict';

const arrayUtilities = require('../../utilities/array');

const { first } = arrayUtilities;

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

  firstChild.addAttribute(name, value);
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
  const firstChild = first(this.children);

  return firstChild.getTagName();
}

function setStyle(name, value) {
  const firstChild = first(this.children);

  firstChild.setStyle(name, value);
}

module.exports = {
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
  getTagName: getTagName,
  setStyle: setStyle
};
