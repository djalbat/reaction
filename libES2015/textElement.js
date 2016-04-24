'use strict';

var Element = require('./element');

class TextElement extends Element {
  constructor(text, props) {
    var domElement = document.createTextNode(text);

    super(domElement, props);
  }
  
  mount(parent, sibling, context) {
    super.mount(parent, sibling);
    
    return this;
  }
  
  unmount(context) {
    super.unmount();
  }
}

module.exports = TextElement;
