'use strict';

var Element = require('./element');

class Body extends Element {
  constructor(selectorOr$Element) {
    if (selectorOr$Element === undefined) {
      selectorOr$Element = 'body';
    }

    super(selectorOr$Element);
  }

  clone() { return Body.clone(this.$element); }

  onClick(handler) {
    this.$element.click(function() {
      handler();

      return false;
    })
  }

  onDoubleClick(handler) {
    this.$element.dblclick(function() {
      handler();

      return false;
    })
  }
}

Body.clone = function(selectorOr$Element) {
  return Element.clone(Body, selectorOr$Element);
};

Body.fromHTML = function(html) {
  return Element.fromHTML(Body, html);
};

module.exports = Body;
