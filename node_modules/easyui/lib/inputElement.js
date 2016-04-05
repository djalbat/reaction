'use strict';

var Element = require('./element');

class InputElement extends Element {
  constructor(selectorOr$Element) {
    super(selectorOr$Element);
  }

  hasFocus() {
    var focused = document.activeElement === this.$element[0];  ///

    return focused;
  }

  onFocus(focusHandler) {
    this.$element.focus(focusHandler);
  }

  onBlur(blurHandler) {
    this.$element.blur(blurHandler);
  }

  focus() {
    this.$element.focus();
  }
}

InputElement.clone = Element.clone;
InputElement.fromHTML = Element.fromHTML;

module.exports = InputElement;
