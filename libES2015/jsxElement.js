'use strict';

var easyui = require('easyui'),
    Element = easyui.Element;

class JSXElement {
  constructor(elementOrElementName, properties, childJSXElements) {
    var element;

    if (elementOrElementName instanceof Element) {
      element = elementOrElementName; ///
    } else {
      var elementName = elementOrElementName, ///
          elementHTML = '<' + elementName + '/>';

      element = Element.fromHTML(elementHTML);
    }

    this.element = element;

    this.properties = properties;
    this.childJSXElements = childJSXElements;
  }
  
  getElement() {
    return this.element;
  }

  mount(parentJSXElement) {
    this.addPropertiesAsAttributesToElement();

    this.childJSXElements.forEach(function(childJSXElement) {
      childJSXElement.mount(this);
    }.bind(this));

    parentJSXElement.append(this);
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

  addPropertiesAsAttributesToElement() {
    if (this.properties === null) {
      return;
    }

    var propertyNames = Object.keys(this.properties);

    propertyNames.forEach(function (propertyName) {
      var attributeName,
          propertyValue = this.properties[propertyName],
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

  static fromDOMElement(domElement) {
    var element = Element.fromDOMElement(domElement),
        properties = null,
        childJSXElements = [];
    
    return new JSXElement(element, properties, childJSXElements);
  }
}

module.exports = JSXElement;
