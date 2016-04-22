'use strict';

var Element = require('./element');

class DisplayElement extends Element {
  constructor(displayNameOrDOMElement, properties, children) {
    var domElement = (typeof displayNameOrDOMElement === 'string') ? 
                       document.createElement(displayNameOrDOMElement) :
                         displayNameOrDOMElement;
    
    super(domElement);
    
    this.properties = properties;

    this.children = children;
  }

  mount(parent, context) {
    super.mount(parent);

    this.children.forEach(function(child) {
      child.mount(this, context);
    }.bind(this));

    this.applyProperties();
  }

  remount(previousSibling, context) {
    super.remount(previousSibling);

    this.children.forEach(function(child) {
      child.mount(this, context);
    }.bind(this));

    this.applyProperties();
  }

  remove() {
    ///
    
    super.remove();
  }

  applyProperties() {
    if (this.properties === null) {
      return;
    }

    var domElement = this.getDOMElement(),
        propertyNames = Object.keys(this.properties);

    propertyNames.forEach(function (propertyName) {
      var propertyValue = this.properties[propertyName],
          attributeName,
          attributeValue;

      if (false) {

      } else if (propertyName === 'ref') {
        var callback = propertyValue,
            ref = domElement;
        
        callback(ref)
      } else if (beginsWith(propertyName, 'on')) {
        var handlerName = lowercase(propertyName),
            handler = propertyValue;

        domElement[handlerName] = handler;
      } else if (typeof propertyValue === 'string') {
        attributeName = attributeNameFromPropertyName(propertyName);
        attributeValue = propertyValue;

        domElement.setAttribute(attributeName, attributeValue);
      } else if (typeof propertyValue === 'object') {
        attributeName = propertyName;

        var keys = Object.keys(propertyValue);
        keys.forEach(function(key) {
          var value = propertyValue[key];

          domElement[attributeName][key] = value;
        });
      } else {
        ///
      }
    }.bind(this));
  }
}

module.exports = DisplayElement;

function attributeNameFromPropertyName(propertyName) {
  switch (propertyName) {
    case 'className':
      return 'class';

    case 'htmlFor':
      return 'for';
  }

  return propertyName;
}

function lowercase(string) {
  return string.toLowerCase();
}

function beginsWith(string, beginningString) {
  var regExp = new RegExp('^' + beginningString),
      matches = string.match(regExp);

  return !!matches; ///
}
