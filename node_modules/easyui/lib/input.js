'use strict';

require('jquery-textrange');

var InputElement = require('./inputElement');

class Input extends InputElement {
  constructor(selectorOr$Element, changeHandler) {
    super(selectorOr$Element);

    if (changeHandler) {
      this.onChange(changeHandler);
    }
  }

  clone() { return Input.clone(this.$element); }

  onChange(handler) {
    this.$element.keydown(function() {
      setTimeout(function() {
        var value = this.getValue();

        handler(value);
      }.bind(this));
    }.bind(this));
  }

  getValue() {
    var value = this.$element.val();

    return value;
  }

  getSelectionStart() {
    var textrange = this.$element.textrange('get'),
        selectionStart = textrange['start'];  ///

    return selectionStart;
  }

  getSelectionEnd() {
    var textrange = this.$element.textrange('get'),
        selectionEnd = textrange['end'];  ///

    return selectionEnd;
  }

  setValue(value) {
    this.$element.val(value);
  }

  select() {
    this.$element.select();
  }
}

Input.clone = function(selectorOr$Element) {
  return InputElement.clone(Input, selectorOr$Element);
};

Input.fromHTML = function(html) {
  return InputElement.fromHTML(Input, html);
};

module.exports = Input;
