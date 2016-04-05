'use strict';

var InputElement = require('./inputElement');

class Select extends InputElement {
  constructor(selectorOr$Element, changeHandler) {
    super(selectorOr$Element);

    if (changeHandler) {
      this.onChange(changeHandler);
    }
  }

  clone(changeHandler) { return Select.clone(this.$element, changeHandler); }

  onChange(handler) {
    this.$element.change(function() {
      var selectedOptionValue = this.getSelectedOptionValue();

      handler(selectedOptionValue);
    }.bind(this));
  }

  getSelectedOptionValue() {
    var $selectedOption = this.$element.find(':selected'),
        selectedOptionValue = $selectedOption.val();

    return selectedOptionValue;
  }

  setSelectedOptionByValue(value) {
    this.$element.val(value);
  }
}

Select.clone = function(selectorOr$Element, changeHandler) {
  return InputElement.clone(Select, selectorOr$Element, changeHandler);
};

Select.fromHTML = function(html, changeHandler) {
  return InputElement.fromHTML(Select, html, changeHandler);
};

module.exports = Select;
