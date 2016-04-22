'use strict';

var BaseElement = require('./baseElement');

class DisplayElement extends BaseElement {
  constructor(domElementOrDisplayName, properties, children) {
    var domElement;

    if (typeof domElementOrDisplayName === 'string') {
      var displayName = domElementOrDisplayName;  ///

      domElement = document.createElement(displayName);
    } else {
      domElement = domElementOrDisplayName; ///
    }
    
    super(domElement);

    this.addPropertiesToBaseElement(properties);

    children.forEach(function(child) {
      child.mount(this);  ///
    }.bind(this));
  }
  
  addPropertiesToBaseElement(properties) {
    if (properties === null) {
      return;
    }

    var domElement = this.getDOMElement(),
        propertyNames = Object.keys(properties);

    propertyNames.forEach(function (propertyName) {
      var propertyValue = properties[propertyName],
          attributeName,
          attributeValue;

      if (false) {

      } else if (propertyName === 'ref') {
        var callback = propertyValue, ///
            ref = domElement; ///
        
        callback(ref)
      } else if (beginsWith(propertyName, 'on')) {
        var onevent = lowercase(propertyName),  ///
            handler = propertyValue;  ///

        domElement[onevent] = handler;
      } else if (typeof propertyValue === 'string') {
        attributeName = attributeNameFromPropertyName(propertyName);
        attributeValue = propertyValue; ///

        domElement.setAttribute(attributeName, attributeValue);
      } else if (typeof propertyValue === 'object') {
        attributeName = propertyName; ///

        var keys = Object.keys(propertyValue); ///
        keys.forEach(function(key) {
          var value = propertyValue[key];

          domElement[attributeName][key] = value;
        });
      } else {
        ///
      }
    });
  }

  static fromDOMElement(domElement) {
    var properties = null,
        children = [];
    
    return new DisplayElement(domElement, properties, children);
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

  return propertyName;  ///
}

function lowercase(string) {
  return string.toLowerCase();
}

function beginsWith(string, beginningString) {
  var regExp = new RegExp('^' + beginningString),
      matches = string.match(regExp);

  return !!matches; ///
}
