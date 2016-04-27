'use strict';

var Element = require('./element');

class TextElement extends Element {
  constructor(text, props) {
    var domElement = document.createTextNode(text);

    super(domElement, props);
  }
  
  mount(parentDOMElement, siblingDOMElement, context) {
    super.mount(parentDOMElement, siblingDOMElement);
    
    return this.getDOMElement();
  }
  
  unmount(context) {
    super.unmount();
  }
}

module.exports = TextElement;
