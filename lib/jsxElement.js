'use strict';

///var easyui = require('easyui'),
///   Element = easyui.Element;

var Element = require('./element'),
    JSXTextElement = require('./jsxTextElement');

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

    appendChildJSXElements(element, childJSXElements);

    var $element = element.$element;  ///

    super($element);
  }
}

function appendChildJSXElements(element, childJSXElements) {
  childJSXElements.forEach(function(childJSXElement) {
    if (childJSXElement instanceof Array) {
      var childJSXElements = childJSXElement; ///

      appendChildJSXElements(element, childJSXElements);
    } else if (childJSXElement instanceof JSXTextElement) {
      var childJSXTextElement = childJSXElement,  ///
          text = childJSXTextElement.getText();

      element.append(text);
    } else if (childJSXElement instanceof JSXElement) {
      element.append(childJSXElement)
    }
  });
}

module.exports = JSXElement;
