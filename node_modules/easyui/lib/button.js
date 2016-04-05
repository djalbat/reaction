'use strict';

var InputElement = require('./inputElement');

class Button extends InputElement {
  constructor(selectorOr$Element, clickHandler) {
    super(selectorOr$Element);

    if (clickHandler) {
      this.onClick(clickHandler);
    }
  }

  clone(clickHandler) { return Button.clone(this.$element, clickHandler); }

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

Button.clone = function(selectorOr$Element, clickHandler) {
  return InputElement.clone(Button, selectorOr$Element, clickHandler);
};

Button.fromHTML = function(html, clickHandler) {
  return InputElement.fromHTML(Button, html, clickHandler);
};

module.exports = Button;
