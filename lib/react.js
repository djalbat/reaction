'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactClass = require('./reactClass'),
    ReactComponent = require('./reactComponent'),
    JSXElement = require('./jsxElement'),
    JSXDOMElement = require('./jsxDOMElement'),
    JSXTextElement = require('./jsxTextElement'),
    JSXClassElement = require('./jsxClassElement'),
    JSXFunctionElement = require('./jsxFunctionElement'),
    JSXComponentElement = require('./jsxComponentElement');

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
    value: function createElement(firstArgument, properties) {
      if (firstArgument === undefined) {
        return undefined;
      }

      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var children = childrenFromRemainingArguments(remainingArguments),
          jsxElement;

      if (false) {} else if (firstArgument.prototype instanceof ReactComponent) {
        var reactComponentConstructor = firstArgument,
            ///
        reactComponent = new reactComponentConstructor();

        jsxElement = new JSXComponentElement(reactComponent, properties, children);
      } else if (firstArgument instanceof ReactClass) {
        var reactClass = firstArgument; ///

        jsxElement = new JSXClassElement(reactClass, properties, children);
      } else if (typeof firstArgument === 'function') {
        var reactFunction = firstArgument; ///

        jsxElement = new JSXFunctionElement(reactFunction, properties, children);
      } else {
        var elementName = firstArgument; ///

        jsxElement = new JSXDOMElement(elementName, properties, children);
      }

      return jsxElement;
    }
  }]);

  return React;
}();

React.Component = ReactComponent;

module.exports = React;

function childrenFromRemainingArguments(remainingArguments) {
  remainingArguments = Array.prototype.slice.call(remainingArguments); ///

  var firstRemainingArgument = first(remainingArguments),
      children;

  if (false) {} else if (firstRemainingArgument === undefined) {
    children = [];
  } else if (firstRemainingArgument instanceof Array) {
    children = firstRemainingArgument; ///
  } else {
      children = remainingArguments.map(function (remainingArgument) {
        var child;

        if (remainingArgument.prototype instanceof JSXElement) {
          child = remainingArgument; ///
        } else {
            var text = '' + remainingArgument,
                ///
            jsxTextElement = new JSXTextElement(text);

            child = jsxTextElement; ///
          }

        return child;
      });
    }

  return children;
}

function first(array) {
  return array[0];
}