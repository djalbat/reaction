'use strict';

var Element = require('./element');

class DisplayElement extends Element {
  constructor(displayName, props) {
    var domElement = document.createElement(displayName);

    super(domElement, props);
  }

  mount(parent, sibling, context) {
    super.mount(parent, sibling);
    
    var childParent = this,
        childSibling = null,
        childContext = context;
    
    this.children.forEach(function(child) {
      childSibling = child.mount(childParent, childSibling, childContext);
    });

    this.applyProps();
    
    return this;
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
