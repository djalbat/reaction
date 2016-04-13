'use strict';

var easyui = require('easyui'),
    Element = easyui.Element;

var JSXTextElement = require('./jsxTextElement');

class JSXElement {
  constructor(elementOrSelector, childJSXElements) {
    var element = (elementOrSelector instanceof Element) ?
      elementOrSelector :  ///
        new Element(elementOrSelector);

    this.element = element;

    this.appendChildJSXElements(childJSXElements);
  }
  
  getElement() {
    return this.element;
  }

  remove() {
    this.element.remove();
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
        childJSXElements = [];
    
    return new JSXElement(element, childJSXElements);
  }
}

module.exports = JSXElement;
