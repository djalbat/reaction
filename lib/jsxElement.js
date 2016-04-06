'use strict';

///var easyui = require('easyui'),
///   Element = easyui.Element;

var Element = require('./element');

class JSXElement extends Element {
  constructor(elementName, properties, childJSXElements) {
    var elementHTML = '<' + elementName + '/>',
        element = Element.fromHTML(elementHTML);
    
    if (properties !== null) {
      var propertyNames = Object.keys(properties);
      
      propertyNames.forEach(function(propertyName) {
        var attributeName,
            propertyValue = properties[propertyName],
            attributeValue = propertyValue;

        switch(propertyName) {
          case 'className':
            attributeName = 'class';
            break;

          case 'htmlFor':
            attributeName = 'for';
            break;

          default:
            attributeName = propertyName;
            break;
        }

        element.addAttribute(attributeName, attributeValue);
      });
    }

    childJSXElements.forEach(function(childJSXElement) {
      element.append(childJSXElement);
    });

    var $element = element.$element;  ///

    super($element);
  }
}

module.exports = JSXElement;
