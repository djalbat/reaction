"use strict";

export function setAttribute(name, value) {
  if (name === "className") {
    name = "class";
  }

  if (name === "htmlFor") {
    name = "for";
  }

  if (typeof value === "object") {
    const keys = Object.keys(value);

    keys.forEach((key) => {
      this.domElement[name][key] = value[key];
    });
  } else if (typeof value === "boolean") {
    if (value) {
      value = name; ///

      this.domElement.setAttribute(name, value);
    }
  } else {
    this.domElement.setAttribute(name, value);
  }
}

export function getAttribute(name) { return this.domElement.getAttribute(name); }

export function clearAttribute(name) { this.domElement.removeAttribute(name); }

export function addAttribute(name, value) { this.setAttribute(name, value); }

export function removeAttribute(name) { this.domElement.removeAttribute(name); }

export function hasAttribute(name) { return this.domElement.hasAttribute(name); }

export function setClass(className) { this.domElement.className = className; }

export function addClass(className) { this.domElement.classList.add(className); }

export function removeClass(className) { this.domElement.classList.remove(className); }

export function toggleClass(className) { this.domElement.classList.toggle(className); }

export function hasClass(className) { return this.domElement.classList.contains(className); }

export function hasClasses(classNames) { return classNames.every((className) => this.hasClass(className)); }

export function clearClasses() { this.domElement.className = ""; }

export function getTagName() { return this.domElement.tagName; }

export function setStyle(name, value) {
  this.domElement.style[name] = value;
}
