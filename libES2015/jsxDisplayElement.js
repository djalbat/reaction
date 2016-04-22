'use strict';

var JSXDOMElement = require('./jsxDOMElement');

class JSXDisplayElement extends JSXDOMElement {
  constructor(refOrDisplayName, properties, children) {
    var ref;

    if (typeof refOrDisplayName === 'string') {
      var displayName = refOrDisplayName;  ///

      ref = document.createElement(displayName);
    } else {
      ref = refOrDisplayName; ///
    }
    
    super(ref);

    this.addPropertiesToDOMElement(properties);

    children.forEach(function(child) {
      child.mount(this);  ///
    }.bind(this));
  }
  
  addPropertiesToDOMElement(properties) {
    if (properties === null) {
      return;
    }

    var ref = this.getRef(),
        propertyNames = Object.keys(properties);

    propertyNames.forEach(function (propertyName) {
      var propertyValue = properties[propertyName],
          attributeName,
          attributeValue;

      if (false) {

      } else if (propertyName === 'ref') {
        var callback = propertyValue; ///

        callback(ref)
      } else if (beginsWith(propertyName, 'on')) {
        var onevent = lowercase(propertyName),  ///
            handler = propertyValue;  ///

        ref[onevent] = handler;
      } else if (typeof propertyValue === 'string') {
        attributeName = attributeNameFromPropertyName(propertyName);
        attributeValue = propertyValue; ///

        ref.setAttribute(attributeName, attributeValue);
      } else if (typeof propertyValue === 'object') {
        attributeName = propertyName; ///

        var keys = Object.keys(propertyValue); ///
        keys.forEach(function(key) {
          var value = propertyValue[key];

          ref[attributeName][key] = value;
        });
      } else {
        ///
      }
    });
  }

  static fromRef(ref) {
    var properties = null,
        children = [];
    
    return new JSXDisplayElement(ref, properties, children);
  }
}

module.exports = JSXDisplayElement;

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
