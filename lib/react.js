'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactComponent = require('./reactComponent'),
    ReactClass = require('./reactClass'),
    JSXElement = require('./jsxElement'),
    JSXTextElement = require('./jsxTextElement'),
    JSXReactElement = require('./jsxReactElement'),
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
    value: function createElement(reactThing, properties) {
      if (reactThing === undefined) {
        return undefined;
      }

      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var jsxElement = undefined,
          childJSXElements = childJSXElementsFromRemainingArguments.apply(null, remainingArguments);

      if (reactThing instanceof ReactClass) {
        var reactClass = reactThing; ///

        jsxElement = new JSXReactElement(reactClass, properties, childJSXElements);
      } else if (typeof reactThing === 'function') {
        try {
          var reactComponentConstructor = reactThing,
              ///
          reactComponent = new reactComponentConstructor();

          jsxElement = new JSXComponentElement(reactComponent, properties, childJSXElements);
        } catch (error) {
          var reactFunction = reactThing; ///

          jsxElement = new JSXFunctionElement(reactFunction, properties, childJSXElements);
        }
      } else {
        var elementName = reactThing; ///

        jsxElement = new JSXElement(elementName, properties, childJSXElements);
      }

      return jsxElement;
    }
  }]);

  return React;
}();

React.Component = ReactComponent;

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
        if (remainingArgument instanceof JSXElement || remainingArgument instanceof JSXTextElement || remainingArgument instanceof JSXReactElement || remainingArgument instanceof JSXFunctionElement || remainingArgument instanceof JSXComponentElement) {
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
//# sourceMappingURL=data:application/json;base64,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Z0JBQVAsQ0E5QmdEO0NBQWxEOztBQWlDQSxTQUFTLEtBQVQsQ0FBZSxLQUFmLEVBQXNCO0FBQUUsU0FBTyxNQUFNLENBQU4sQ0FBUCxDQUFGO0NBQXRCOztBQUVBLE9BQU8sT0FBUCxHQUFpQixLQUFqQiIsImZpbGUiOiJyZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0Q29tcG9uZW50ID0gcmVxdWlyZSgnLi9yZWFjdENvbXBvbmVudCcpLFxuICAgIFJlYWN0Q2xhc3MgPSByZXF1aXJlKCcuL3JlYWN0Q2xhc3MnKSxcbiAgICBKU1hFbGVtZW50ID0gcmVxdWlyZSgnLi9qc3hFbGVtZW50JyksXG4gICAgSlNYVGV4dEVsZW1lbnQgPSByZXF1aXJlKCcuL2pzeFRleHRFbGVtZW50JyksXG4gICAgSlNYUmVhY3RFbGVtZW50ID0gcmVxdWlyZSgnLi9qc3hSZWFjdEVsZW1lbnQnKSxcbiAgICBKU1hGdW5jdGlvbkVsZW1lbnQgPSByZXF1aXJlKCcuL2pzeEZ1bmN0aW9uRWxlbWVudCcpLFxuICAgIEpTWENvbXBvbmVudEVsZW1lbnQgPSByZXF1aXJlKCcuL2pzeENvbXBvbmVudEVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3Qge1xuICBzdGF0aWMgY3JlYXRlQ2xhc3MocHJvcGVydGllcykge1xuICAgIHZhciByZWFjdENsYXNzID0gUmVhY3RDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiByZWFjdENsYXNzO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUVsZW1lbnQocmVhY3RUaGluZywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKHJlYWN0VGhpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB2YXIganN4RWxlbWVudCA9IHVuZGVmaW5lZCxcbiAgICAgICAgY2hpbGRKU1hFbGVtZW50cyA9IGNoaWxkSlNYRWxlbWVudHNGcm9tUmVtYWluaW5nQXJndW1lbnRzLmFwcGx5KG51bGwsIHJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBpZiAocmVhY3RUaGluZyBpbnN0YW5jZW9mIFJlYWN0Q2xhc3MpIHtcbiAgICAgIHZhciByZWFjdENsYXNzID0gcmVhY3RUaGluZzsgLy8vXG5cbiAgICAgIGpzeEVsZW1lbnQgPSBuZXcgSlNYUmVhY3RFbGVtZW50KHJlYWN0Q2xhc3MsIHByb3BlcnRpZXMsIGNoaWxkSlNYRWxlbWVudHMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlYWN0VGhpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZWFjdENvbXBvbmVudENvbnN0cnVjdG9yID0gcmVhY3RUaGluZywgIC8vL1xuICAgICAgICAgICAgcmVhY3RDb21wb25lbnQgPSBuZXcgcmVhY3RDb21wb25lbnRDb25zdHJ1Y3RvcigpO1xuXG4gICAgICAgIGpzeEVsZW1lbnQgPSBuZXcgSlNYQ29tcG9uZW50RWxlbWVudChyZWFjdENvbXBvbmVudCwgcHJvcGVydGllcywgY2hpbGRKU1hFbGVtZW50cyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB2YXIgcmVhY3RGdW5jdGlvbiA9IHJlYWN0VGhpbmc7ICAvLy9cblxuICAgICAgICBqc3hFbGVtZW50ID0gbmV3IEpTWEZ1bmN0aW9uRWxlbWVudChyZWFjdEZ1bmN0aW9uLCBwcm9wZXJ0aWVzLCBjaGlsZEpTWEVsZW1lbnRzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGVsZW1lbnROYW1lID0gcmVhY3RUaGluZzsgIC8vL1xuXG4gICAgICBqc3hFbGVtZW50ID0gbmV3IEpTWEVsZW1lbnQoZWxlbWVudE5hbWUsIHByb3BlcnRpZXMsIGNoaWxkSlNYRWxlbWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiBqc3hFbGVtZW50O1xuICB9XG59XG5cblJlYWN0LkNvbXBvbmVudCA9IFJlYWN0Q29tcG9uZW50O1xuXG5mdW5jdGlvbiBjaGlsZEpTWEVsZW1lbnRzRnJvbVJlbWFpbmluZ0FyZ3VtZW50cygpIHtcbiAgdmFyIGNoaWxkSlNYRWxlbWVudHMsXG4gICAgICByZW1haW5pbmdBcmd1bWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLFxuICAgICAgZmlyc3RSZW1haW5pbmdBcmd1bWVudCA9IGZpcnN0KHJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgaWYgKGZhbHNlKSB7XG4gICAgXG4gIH0gZWxzZSBpZiAoZmlyc3RSZW1haW5pbmdBcmd1bWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2hpbGRKU1hFbGVtZW50cyA9IFtdO1xuICB9IGVsc2UgaWYgKGZpcnN0UmVtYWluaW5nQXJndW1lbnQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIGNoaWxkSlNYRWxlbWVudHMgPSBmaXJzdFJlbWFpbmluZ0FyZ3VtZW50OyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY2hpbGRKU1hFbGVtZW50cyA9IHJlbWFpbmluZ0FyZ3VtZW50cy5tYXAoZnVuY3Rpb24ocmVtYWluaW5nQXJndW1lbnQpIHtcbiAgICAgIGlmIChyZW1haW5pbmdBcmd1bWVudCBpbnN0YW5jZW9mIEpTWEVsZW1lbnRcbiAgICAgICB8fCByZW1haW5pbmdBcmd1bWVudCBpbnN0YW5jZW9mIEpTWFRleHRFbGVtZW50XG4gICAgICAgfHwgcmVtYWluaW5nQXJndW1lbnQgaW5zdGFuY2VvZiBKU1hSZWFjdEVsZW1lbnRcbiAgICAgICB8fCByZW1haW5pbmdBcmd1bWVudCBpbnN0YW5jZW9mIEpTWEZ1bmN0aW9uRWxlbWVudFxuICAgICAgIHx8IHJlbWFpbmluZ0FyZ3VtZW50IGluc3RhbmNlb2YgSlNYQ29tcG9uZW50RWxlbWVudCkge1xuICAgICAgICB2YXIgY2hpbGRKU1hFbGVtZW50ID0gcmVtYWluaW5nQXJndW1lbnQ7ICAvLy9cblxuICAgICAgICByZXR1cm4gY2hpbGRKU1hFbGVtZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHRleHQgPSAnJyArIHJlbWFpbmluZ0FyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICBjaGlsZEpTWFRleHRFbGVtZW50ID0gbmV3IEpTWFRleHRFbGVtZW50KHRleHQpO1xuXG4gICAgICAgIHJldHVybiBjaGlsZEpTWFRleHRFbGVtZW50O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkSlNYRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuIl19