'use strict';

class Element {
  constructor(domElement, props) {
    this.domElement = domElement;

    this.props = props;

    this.parent = undefined;

    this.children = props.children;  ///
  }

  getDOMElement() {
    return this.domElement;
  }

  getParent() {
    return this.parent;
  }

  getChildren() {
    return this.children;
  }

  mount(parent, reference) {
    this.parent = parent;

    if (this.domElement !== null) {
      parentDOMElement(parent).insertBefore(this.domElement, referenceDOMElement(reference));
    }
  }

  unmount() {
    if (this.domElement !== null) {
      this.domElement.parentElement.removeChild(this.domElement);
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

  getAttribute(name) {
    return this.domElement.getAttribute(name);
  }

  clearAttribute(name) {
    this.domElement.removeAttribute(name);
  }

  setClass(className) {
    this.domElement.className = className;
  }

  clearClasses() {
    this.domElement.className = '';
  }

  addClass(className) {
    this.domElement.classList.add(className);
  }

  removeClass(className) {
    this.domElement.classList.remove(className);
  }

  toggleClass(className) {
    this.domElement.classList.toggle(className);
  }

  setHandler(eventName, handler) {
    this.domElement[eventName] = handler;
  }

  static fromDOMElement(domElement) {
    const children = [],
          props = {
            children: children
          },
          element = new Element(domElement, props);

    return element;
  }
}

module.exports = Element;

function parentDOMElement(parent) {
  let parentDOMElement = parent.getDOMElement();

  while (parentDOMElement === null) {
    parent = parent.getParent();

    parentDOMElement = parent.getDOMElement();
  }

  return parentDOMElement;
}

function referenceDOMElement(reference) {
  const referenceDOMElement = reference !== null ?
                                reference.getDOMElement() :
                                  null;

  return referenceDOMElement;
}
