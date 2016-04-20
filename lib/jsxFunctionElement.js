'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXFunctionElement = function () {
  function JSXFunctionElement(reactFunction, properties, childJSXElements) {
    _classCallCheck(this, JSXFunctionElement);

    this.reactFunction = reactFunction;
    this.properties = properties;
    this.childJSXElements = childJSXElements;

    this.jsxElement = undefined; ///

    var children = childJSXElements; ///

    this._ref = Object.assign({}, this.properties, { children: children });

    this.render();
  }

  _createClass(JSXFunctionElement, [{
    key: 'mount',
    value: function mount(parentJSXElement) {
      this.jsxElement.mount(parentJSXElement);
    }
  }, {
    key: 'remount',
    value: function remount(oldJSXElement) {
      this.jsxElement.remount(oldJSXElement);
    }
  }, {
    key: 'render',
    value: function render() {
      this.jsxElement = this.reactFunction(this._ref);
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.jsxElement.remove();
    }
  }, {
    key: 'appendAfter',
    value: function appendAfter(jsxElement) {
      this.jsxElement.appendAfter(jsxElement);
    }
  }]);

  return JSXFunctionElement;
}();

module.exports = JSXFunctionElement;