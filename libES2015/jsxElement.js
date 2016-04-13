'use strict';

var easyui = require('easyui'),
    Element = easyui.Element;

var JSXTextElement = require('./jsxTextElement');

class JSXElement {
  constructor(elementOrElementName, properties, childJSXElements) {
    var element;

    if (elementOrElementName instanceof Element) {
      element = elementOrElementName; ///
    } else {
      var elementName = elementOrElementName,
          elementHTML = '<' + elementName + '/>';

      element = Element.fromHTML(elementHTML);
    }

    this.element = element;

    this.addPropertiesAsElementAttributes(properties);

    this.appendChildJSXElements(childJSXElements);
  }
  
  getElement() {
    return this.element;
  }

  append(jsxElementOrString) {
    if (typeof jsxElementOrString === 'string') {
      var string = jsxElementOrString;  ///

      this.element.append(string);
    } else {
      var jsxElement = jsxElementOrString,  ///
          element = jsxElement.getElement();

      this.element.append(element);
    }
  }

  remove() {
    this.element.remove();
  }

  addPropertiesAsElementAttributes(properties) {
    if (properties === null) {
      return;
    }

    var propertyNames = Object.keys(properties);

    propertyNames.forEach(function (propertyName) {
      var attributeName,
          propertyValue = properties[propertyName],
          attributeValue = propertyValue;

      switch (propertyName) {
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

      this.element.addAttribute(attributeName, attributeValue);
    }.bind(this));
  }

  appendChildJSXElements(childJSXElements) {
    childJSXElements.forEach(function(childJSXElement) {
      if (childJSXElement instanceof Array) {
        var childJSXElements = childJSXElement; ///

        this.appendChildJSXElements(childJSXElements);
      } else if (childJSXElement instanceof JSXElement) {
        var element = childJSXElement.getElement();

        this.element.append(element);
      } else if (childJSXElement instanceof JSXTextElement) {
        var childJSXTextElement = childJSXElement,  ///
            text = childJSXTextElement.getText();

        this.element.append(text);
      } else if (childJSXElement instanceof JSXElement) {
        this.append(childJSXElement)
      }
    }.bind(this));
  }

  static fromDOMElement(domElement) {
    var element = Element.fromDOMElement(domElement),
        properties = null,
        childJSXElements = [];
    
    return new JSXElement(element, properties, childJSXElements);
  }
}

module.exports = JSXElement;

