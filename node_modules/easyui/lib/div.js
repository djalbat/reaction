'use strict';

var Element = require('./element');

class Div extends Element {
  constructor(selectorOr$Element) {
    super(selectorOr$Element);
  }

  clone() { return Div.clone(this.$element); }
}

Div.clone = function(selectorOr$Element) {
  return Element.clone(Div, selectorOr$Element);
};

Div.fromHTML = function(html) {
  return Element.fromHTML(Div, html);
};

module.exports = Div;
