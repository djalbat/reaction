'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXDOMElement = function () {
  function JSXDOMElement(ref) {
    _classCallCheck(this, JSXDOMElement);

    this.ref = ref;
  }

  _createClass(JSXDOMElement, [{
    key: 'getRef',
    value: function getRef() {
      return this.ref;
    }
  }, {
    key: 'mount',
    value: function mount(parentJSXElement) {
      parentJSXElement.append(this);
    }
  }, {
    key: 'update',
    value: function update(oldJSXElement) {
      oldJSXElement.appendAfter(this);

      oldJSXElement.remove();
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      this.remove();
    }
  }, {
    key: 'append',
    value: function append(jsxElement) {
      var ref = jsxElement.getRef();

      this.ref.appendChild(ref);
    }
  }, {
    key: 'appendAfter',
    value: function appendAfter(jsxElement) {
      var element = jsxElement.getRef();

      this.ref.parentNode.insertBefore(element, this.ref.nextSibling);
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.ref.parentNode.removeChild(this.ref);
    }
  }, {
    key: 'empty',
    value: function empty() {
      while (this.ref.firstChild) {
        this.ref.removeChild(this.ref.firstChild);
      }
    }
  }]);

  return JSXDOMElement;
}();

module.exports = JSXDOMElement;