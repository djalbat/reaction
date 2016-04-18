'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXTextElement = function () {
  function JSXTextElement(text) {
    _classCallCheck(this, JSXTextElement);

    this.text = text;

    this.parentJSXElement = undefined; ///
  }

  _createClass(JSXTextElement, [{
    key: 'getElement',
    value: function getElement() {
      var element = this.text; ///

      return element;
    }
  }, {
    key: 'mount',
    value: function mount(parentJSXElement) {
      parentJSXElement.append(this);
    }
  }]);

  return JSXTextElement;
}();

module.exports = JSXTextElement;