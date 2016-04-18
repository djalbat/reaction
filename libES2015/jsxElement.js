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

    this.addPropertiesToElementAsAttributes();
  }
  
  getElement() {
    return this.element;
  }

  mount(parentJSXElement) {
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

  remove() { this.element.remove(); }

  empty() { this.element.empty(); }

  addPropertiesToElementAsAttributes() {
    if (this.properties === null) {
      return;
    }

    var propertyNames = Object.keys(this.properties);

    propertyNames.forEach(function (propertyName) {
      var attributeName,
          propertyValue = this.properties[propertyName];

      if (typeof propertyValue === 'function') {
        if (beginsWith(propertyName, 'on')) {
          var events = propertyName.substring(2).toLowerCase(), ///
              handler = propertyValue;  ///
          
          this.element.on(events, handler);
        }
      } else {
        var attributeValue = propertyValue;

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

function beginsWith(string, beginningString) {
  var regExp = new RegExp('^' + beginningString),
      matches = string.match(regExp);

  return !!matches; ///
}
