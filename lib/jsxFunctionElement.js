'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXFunctionElement = function () {
  function JSXFunctionElement(reactFunction, _ref) {
    _classCallCheck(this, JSXFunctionElement);

    this.reactFunction = reactFunction;
    this._ref = _ref;

    this.jsxElement = undefined; ///

    this.parentJSXElement = undefined; ///
  }

  _createClass(JSXFunctionElement, [{
    key: 'mount',
    value: function mount(parentJSXElement) {
      this.parentJSXElement = parentJSXElement;

      this.render();

      this.remount();
    }
  }, {
    key: 'render',
    value: function render() {
      this.jsxElement = this.reactFunction(this._ref);
    }
  }, {
    key: 'remount',
    value: function remount() {
      this.jsxElement.mount(this.parentJSXElement);
    }
  }]);

  return JSXFunctionElement;
}();

module.exports = JSXFunctionElement;