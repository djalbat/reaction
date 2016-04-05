'use strict';

// var easyui = require('easyui'),
//     Element = easyui.Element;

var Element = require('./element');

class JSXElement extends Element {
  constructor(elementName, attributes, childJSXElements) {

    var element = Element.fromHTML('<' + elementName + '/>');
    
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
    
    if (childJSXElements) {
      childJSXElements.forEach(function(childJSXElement) {
        element.append(childJSXElement);
      });
    }

    var $element = element.$element;  ///

    super($element);
  }
}

module.exports = JSXElement;
