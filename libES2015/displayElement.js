'use strict';

const Element = require('./element');

class DisplayElement extends Element {
  constructor(displayName, props) {
    const domElement = document.createElement(displayName);

    super(domElement, props);
  }

  mount(parent, reference, context) {
    super.mount(parent, reference);
    
    const childParent = this,
          childReference = null,
          childContext = context;

    this.children.forEach(function(child) {
      child.mount(childParent, childReference, childContext);
    });

    this.applyProps();
  }

  unmount(context) {
    this.children.forEach(function(child) {
      child.unmount(context);
    });

    super.unmount();
  }

  applyProps() {
    var propNames = Object.keys(this.props);

    propNames.forEach(function (propName) {
      var propValue = this.props[propName];

      if (false) {

      } else if (propName === 'ref') {
        var callback = propValue,
            domElement = this.getDOMElement();
        
        callback(domElement)
      } else if (propNameIsHandlerName(propName)) {
        var eventName = eventNameFromPropertyName(propName),
            handler = propValue;

        this.setHandler(eventName, handler);
      } else {
        var attributeName = propName,
            attributeValue = propValue;
        
        this.setAttribute(attributeName, attributeValue);
      }
    }.bind(this));
  }
}

module.exports = DisplayElement;

function propNameIsHandlerName(propName) {
  return propName.match(/^on/);
}

function eventNameFromPropertyName(propName) {
  return propName.toLowerCase();
}
