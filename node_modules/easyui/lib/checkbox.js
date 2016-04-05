'use strict';

var InputElement = require('./inputElement');

class Checkbox extends InputElement {
  constructor(selectorOr$Element, changeHandler) {
    super(selectorOr$Element);

    if (changeHandler) {
      this.onChange(changeHandler);
    }
  }

  clone(changeHandler) { return Checkbox.clone(this.$element, changeHandler); }

  onChange(handler) {
    this.$element.click(function() {
      var checked = this.isChecked();

      handler(checked);
    }.bind(this))
  }

  check(checked) {
    if (arguments.length === 0) {
      checked = true;
    }

    if (checked) {
      this.$element.attr('checked', 'checked');
    } else {
      this.$element.removeAttr('checked');
    }
  }

  isChecked() {
    return this.$element.is(':checked');
  }
}

Checkbox.clone = function(selectorOr$Element, changeHandler) {
  return InputElement.clone(Checkbox, selectorOr$Element, changeHandler);
};

Checkbox.fromHTML = function(html, changeHandler) {
  return InputElement.fromHTML(Checkbox, html, changeHandler);
};

module.exports = Checkbox;
