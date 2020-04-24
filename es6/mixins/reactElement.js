"use strict";

export function setAttribute(name, value) {
  const firstChild = this.getFirstChild();

  return firstChild.setAttribute(name, value);
}

export function getAttribute(name) {
  const firstChild = this.getFirstChild();

  return firstChild.getAttribute(name);
}

export function clearAttribute(name) {
  const firstChild = this.getFirstChild();

  firstChild.clearAttribute(name);
}

export function addAttribute(name, value) {
  const firstChild = this.getFirstChild();

  firstChild.addAttribute(name, value);
}

export function removeAttribute(name) {
  const firstChild = this.getFirstChild();

  firstChild.removeAttribute(name)
}

export function hasAttribute(name) {
  const firstChild = this.getFirstChild();

  return firstChild.hasAttribute(name);
}

export function setClass(className) {
  const firstChild = this.getFirstChild();

  firstChild.setClass(className);
}

export function addClass(className) {
  const firstChild = this.getFirstChild();

  firstChild.addClass(className);
}

export function removeClass(className) {
  const firstChild = this.getFirstChild();

  firstChild.removeClass(className);
}

export function toggleClass(className) {
  const firstChild = this.getFirstChild();

  firstChild.toggleClass(className);
}

export function hasClass(className) {
  const firstChild = this.getFirstChild();

  return firstChild.hasClass(className);
}

export function hasClasses(classNames) {
  const firstChild = this.getFirstChild();

  return firstChild.hasClasses(classNames);
}

export function clearClasses() {
  const firstChild = this.getFirstChild();

  firstChild.clearClasses();
}

export function getTagName() {
  return null;  ///
}

export function setStyle(name, value) {
  const firstChild = this.getFirstChild();

  firstChild.setStyle(name, value);
}
