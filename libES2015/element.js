'use strict';



class Element {
  constructor(domElement, props) {
    this.domElement = domElement;

    this.props = props;
    
    this.children = props.children;  ///
  }

  mount(parentDOMElement, siblingDOMElement) {
    parentDOMElement.insertBefore(this.domElement, siblingDOMElement);
  }

  remount() {
    ///
  }

  unmount() {
    this.remove();
  }

  remove() {
    this.domElement.parentElement.removeChild(this.domElement);
  }

  setAttribute(attributeName, attributeValue) {
    if (attributeName === 'className') { attributeName = 'class'; }
    if (attributeName === 'htmlFor') { attributeName = 'for'; }

    if (false ) {

    } else if (typeof attributeValue === 'string') {
      this.domElement.setAttribute(attributeName, attributeValue);
    } else if (typeof attributeValue === 'object') {
      var keys = Object.keys(attributeValue);

      keys.forEach(function (key) {
        var value = attributeValue[key];

        this.domElement[attributeName][key] = value;
      }.bind(this));
    } else {
      ///
    }
  }

  setHandler(eventName, handler) {
    this.domElement[eventName] = handler;
  }

  getDOMElement() {
    return this.domElement;
  }
}

module.exports = Element;
