'use strict';

///var easyui = require('easyui'),
///   Element = easyui.Element;

var Element = require('./element');

class JSXElement extends Element {
  constructor(elementName, attributes, childJSXElements) {
    var elementHTML = '<' + elementName + '/>',
        element = Element.fromHTML(elementHTML);
    
    if (attributes !== null) {
      var attributeNames = Object.keys(attributes);
      
      attributeNames.forEach(function(attributeName) {
        var attributeValue = attributes[attributeName];

        switch(attributeName) {
          case 'className':
            attributeName = 'class';
            break;

          case 'htmlFor':
            attributeName = 'for';
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
