'use strict';

///var easyui = require('easyui'),
///    Element = easyui.Element;

var Element = require('./element'),
    JSXTextElement = require('./jsxTextElement');

class JSXElement {
  constructor(elementOrSelector, childJSXElements) {
    var element = (elementOrSelector instanceof Element) ?
      elementOrSelector :  ///
        new Element(elementOrSelector);

    element.data('jsxElement', this);

    this.element = element;

    this.componentDidMount = null;

    if (childJSXElements) {
      this.appendChildJSXElements(childJSXElements);
    }
  }
  
  setComponentDidMount(componentDidMount) {
    this.componentDidMount = componentDidMount;    
  }

  setState(state) {
    console.log(JSON.stringify(state, null, '\t'))
  }

  getComponentDidMount() {
    return this.componentDidMount;
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

      this.mount();
    }
  }

  mount() {
    var childJSXElements = this.childJSXElements();

    childJSXElements.forEach(function(childJSXElement) {
      childJSXElement.mount();
    });
    
    if (this.componentDidMount) {
      this.componentDidMount();
    }
  }

  childJSXElements() {
    var childElements = this.element.childElements(),
        childJSXElements = childElements.reduce(function(childJSXElements, childElement) {
          var childJSXElement = childElement.data('jsxElement');

          if (childJSXElement) {
            childJSXElements.push(childJSXElement);
          }

          return childJSXElements;
        }, []);

    return childJSXElements;
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
}

module.exports = JSXElement;
