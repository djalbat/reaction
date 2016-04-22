'use strict';

var BaseElement = require('./baseElement');

class TextElement extends BaseElement {
  constructor(text) {
    var domElement = document.createTextNode(text);

    super(domElement);
  }
}

module.exports = TextElement;
