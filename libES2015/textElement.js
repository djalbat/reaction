'use strict';

var Element = require('./element');

class TextElement extends Element {
  constructor(text) {
    var domElement = document.createTextNode(text);

    super(domElement);
  }
}

module.exports = TextElement;
