'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactClass = require('./reactClass'),
    JSXElement = require('./jsxElement'),
    JSXTextElement = require('./jsxTextElement'),
    JSXReactElement = require('./jsxReactElement'),
    JSXFunctionElement = require('./jsxFunctionElement');

var React = function () {
  function React() {
    _classCallCheck(this, React);
  }

  _createClass(React, null, [{
    key: 'createClass',
    value: function createClass(properties) {
      var reactClass = ReactClass.fromProperties(properties);

      return reactClass;
    }
  }, {
    key: 'createElement',
    value: function createElement(reactClassOrElementName, properties) {
      if (reactClassOrElementName === undefined) {
        return undefined;
      }

      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var jsxElement = undefined,
          childJSXElements = childJSXElementsFromRemainingArguments.apply(null, remainingArguments);

      if (reactClassOrElementName instanceof ReactClass) {
        var reactClass = reactClassOrElementName; ///

        jsxElement = new JSXReactElement(reactClass, properties, childJSXElements);
      } else if (typeof reactClassOrElementName === 'function') {
        var reactFunction = reactClassOrElementName,
            ///
        _ref = properties; ///

        jsxElement = new JSXFunctionElement(reactFunction, _ref);
      } else {
        var elementName = reactClassOrElementName; ///

        jsxElement = new JSXElement(elementName, properties, childJSXElements);
      }

      return jsxElement;
    }
  }]);

  return React;
}();

function childJSXElementsFromRemainingArguments() {
  var childJSXElements,
      remainingArguments = Array.prototype.slice.call(arguments),
      firstRemainingArgument = first(remainingArguments);

  if (false) {} else if (firstRemainingArgument === undefined) {
    childJSXElements = [];
  } else if (firstRemainingArgument instanceof Array) {
    childJSXElements = firstRemainingArgument; ///
  } else {
      childJSXElements = remainingArguments.map(function (remainingArgument) {
        if (remainingArgument instanceof JSXElement) {
          var childJSXElement = remainingArgument; ///

          return childJSXElement;
        } else {
          var text = '' + remainingArgument,
              ///
          childJSXTextElement = new JSXTextElement(text);

          return childJSXTextElement;
        }
      });
    }

  return childJSXElements;
}

function first(array) {
  return array[0];
}

module.exports = React;