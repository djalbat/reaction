'use strict';

var Element = require('./element');

class DisplayElement extends Element {
  constructor(displayName, props) {
    var domElement = document.createElement(displayName);

    super(domElement, props);
  }

  mount(parentDOMElement, siblingDOMElement, context) {
    super.mount(parentDOMElement, siblingDOMElement);
    
    var childParentDOMElement = this.getDOMElement(),
        childSiblingDOMElement = null,
        childContext = context;

    reverse(this.children).forEach(function(child) {
      childSiblingDOMElement = child.mount(childParentDOMElement, childSiblingDOMElement, childContext);
    });

    this.applyProps();

    return this.getDOMElement();
  }

  unmount(context) {
    this.children.forEach(function(child) {
      child.unmount(context);
    });

    super.unmount();
  }

  applyProps() {
    if (this.props === null) {
      return;
    }

    var propertyNames = Object.keys(this.props);

    propertyNames.forEach(function (propertyName) {
      var propertyValue = this.props[propertyName];

      if (false) {

      } else if (propertyName === 'ref') {
        var callback = propertyValue,
            domElement = this.getDOMElement();
        
        callback(domElement)
      } else if (propertyNameIsHandlerName(propertyName)) {
        var eventName = eventNameFromPropertyName(propertyName),
            handler = propertyValue;

        this.setHandler(eventName, handler);
      } else {
        var attributeName = propertyName,
            attributeValue = propertyValue;
        
        this.setAttribute(attributeName, attributeValue);
      }
    }.bind(this));
  }
}

module.exports = DisplayElement;

function eventNameFromPropertyName(propertyName) {
  return propertyName.toLowerCase();
}

function propertyNameIsHandlerName(propertyName) {
  return propertyName.match(/^on/);
}

function reverse(array) { return array.slice().reverse(); }
