'use strict';

require('jquery-textrange');

var InputElement = require('./inputElement');

class TextArea extends InputElement {
  constructor(selectorOr$Element, changeHandler) {
    super(selectorOr$Element);

    if (changeHandler) {
      this.onChange(changeHandler);
    }
  }

  clone() { return TextArea.clone(this.$element); }

  onChange(handler) {
    this.$element.keydown(function() {
      setTimeout(function() {
        var value = this.getValue();

        handler(value);
      }.bind(this));
    }.bind(this));
  }

  onScroll(handler) {
    this.$element.scroll(function() {
      var scrollTop = this.getScrollTop(),
          scrollLeft = this.getScrollLeft();

      handler(scrollTop, scrollLeft);
    }.bind(this));
  }

  getScrollTop() { return this.$element.scrollTop(); }
  getScrollLeft() { return this.$element.scrollLeft(); }

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

  setScrollTop(scrollTop) { this.$element.scrollTop(scrollTop); }
  setScrollLeft(scrollLeft) { this.$element.scrollLeft(scrollLeft); }

  select() {
    this.$element.select();
  }
}

TextArea.clone = function(selectorOr$Element) {
  return InputElement.clone(TextArea, selectorOr$Element);
};

TextArea.fromHTML = function(html) {
  return InputElement.fromHTML(TextArea, html);
};

module.exports = TextArea;
