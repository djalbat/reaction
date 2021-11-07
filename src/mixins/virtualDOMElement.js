"use strict";

import { FOR, CLASS, OBJECT, BOOLEAN, CLASS_NAME, HTML_FOR, EMPTY_STRING } from "../constants";

function setAttribute(name, value) {
  if (name === CLASS_NAME) {
    name = CLASS;
  }

  if (name === HTML_FOR) {
    name = FOR;
  }

  if (typeof value === OBJECT) {
    const keys = Object.keys(value);

    keys.forEach((key) => {
      this.domElement[name][key] = value[key];
    });
  } else if (typeof value === BOOLEAN) {
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

function hasClasses(classNames) { return classNames.every((className) => this.hasClass(className)); }

function clearClasses() { this.domElement.className = EMPTY_STRING; }

function getTagName() { return this.domElement.tagName; }

function getStyle(name) { return this.domElement.style[name]; }

function setStyle(name, value) { this.domElement.style[name] = value; }

export default {
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
  getStyle,
  setStyle
};
