'use strict';

var easyui = require('easyui'),
    Element = easyui.Element;

var JSXTextElement = require('./jsxTextElement');

class JSXElement {
  constructor(elementOrSelector, childJSXElements) {
    var element = (elementOrSelector instanceof Element) ?
      elementOrSelector :  ///
        new Element(elementOrSelector);

    // element.data('jsxElement', this);

    this.element = element;

    this.childJSXElements = childJSXElements;

    this.componentDidMount = null;
    
    this.render();
  }
  
  setComponentDidMount(componentDidMount) {
    this.componentDidMount = componentDidMount;    
  }
  
  setState(state) {
    
  }

  getElement() {
    return this.element;
  }

  getComponentDidMount() {
    return this.componentDidMount;
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

  mount() {
    // var childJSXElements = this.childJSXElements();
    //
    // childJSXElements.forEach(function(childJSXElement) {
    //   childJSXElement.mount();
    // });

    this.childJSXElements.forEach(function(childJSXElement) {
      childJSXElement.mount();
    });

    if (this.componentDidMount) {
      this.componentDidMount();
    }
  }

  // childJSXElements() {
  //   var childElements = this.element.childElements(),
  //       childJSXElements = childElements.reduce(function(childJSXElements, childElement) {
  //         var childJSXElement = childElement.data('jsxElement');
  //
  //         if (childJSXElement) {
  //           childJSXElements.push(childJSXElement);
  //         }
  //
  //         return childJSXElements;
  //       }, []);
  //
  //   return childJSXElements;
  // }

  render() {
    if (this.childJSXElements !== undefined) {
      this.appendChildJSXElements(this.childJSXElements);
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
    var element = Element.fromDOMElement(domElement);
    
    return new JSXElement(element);
  }
}

module.exports = JSXElement;
