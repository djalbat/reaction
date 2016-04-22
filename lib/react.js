'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactComponent = require('./reactComponent'),
    ReactClass = require('./reactClass'),
    Element = require('./element'),
    TextElement = require('./textElement'),
    ReactElement = require('./reactElement'),
    DisplayElement = require('./displayElement'),
    ReactClassElement = require('./reactClassElement'),
    ReactFunctionElement = require('./reactFunctionElement'),
    ReactComponentElement = require('./reactComponentElement');

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
          element;

      if (false) {} else if (firstArgument.prototype instanceof ReactComponent) {
        var reactComponentConstructor = firstArgument,
            ///
        reactComponent = new reactComponentConstructor();

        element = new ReactComponentElement(reactComponent, properties, children);
      } else if (firstArgument instanceof ReactClass) {
        var reactClass = firstArgument; ///

        element = new ReactClassElement(reactClass, properties, children);
      } else if (typeof firstArgument === 'function') {
        var reactFunction = firstArgument; ///

        element = new ReactFunctionElement(reactFunction, properties, children);
      } else {
        var displayName = firstArgument; ///

        element = new DisplayElement(displayName, properties, children);
      }

      return element;
    }
  }]);

  return React;
}();

React.Component = ReactComponent;

module.exports = React;

function childrenFromRemainingArguments(remainingArguments) {
  var firstRemainingArgument = first(remainingArguments);

  if (firstRemainingArgument instanceof Array) {
    remainingArguments = firstRemainingArgument; ///
  }

  var children = remainingArguments.map(function (remainingArgument) {
    var child;

    if (remainingArgument instanceof Element || remainingArgument instanceof ReactElement) {
      child = remainingArgument; ///
    } else {
        var text = '' + remainingArgument,
            ///
        jsxTextElement = new TextElement(text);

        child = jsxTextElement; ///
      }

    return child;
  });

  return children;
}

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,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b3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdENvbXBvbmVudCA9IHJlcXVpcmUoJy4vcmVhY3RDb21wb25lbnQnKSxcbiAgICBSZWFjdENsYXNzID0gcmVxdWlyZSgnLi9yZWFjdENsYXNzJyksXG4gICAgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpLFxuICAgIFRleHRFbGVtZW50ID0gcmVxdWlyZSgnLi90ZXh0RWxlbWVudCcpLFxuICAgIFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RFbGVtZW50JyksXG4gICAgRGlzcGxheUVsZW1lbnQgPSByZXF1aXJlKCcuL2Rpc3BsYXlFbGVtZW50JyksXG4gICAgUmVhY3RDbGFzc0VsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0Q2xhc3NFbGVtZW50JyksXG4gICAgUmVhY3RGdW5jdGlvbkVsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0RnVuY3Rpb25FbGVtZW50JyksXG4gICAgUmVhY3RDb21wb25lbnRFbGVtZW50ID0gcmVxdWlyZSgnLi9yZWFjdENvbXBvbmVudEVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3Qge1xuICBzdGF0aWMgY3JlYXRlQ2xhc3MocHJvcGVydGllcykge1xuICAgIHZhciByZWFjdENsYXNzID0gUmVhY3RDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiByZWFjdENsYXNzO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKGZpcnN0QXJndW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGRyZW4gPSBjaGlsZHJlbkZyb21SZW1haW5pbmdBcmd1bWVudHMocmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgZWxlbWVudDtcblxuICAgIGlmIChmYWxzZSkge1xuXG4gICAgfSBlbHNlIGlmIChmaXJzdEFyZ3VtZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIFJlYWN0Q29tcG9uZW50KSB7XG4gICAgICB2YXIgcmVhY3RDb21wb25lbnRDb25zdHJ1Y3RvciA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICByZWFjdENvbXBvbmVudCA9IG5ldyByZWFjdENvbXBvbmVudENvbnN0cnVjdG9yKCk7XG5cbiAgICAgIGVsZW1lbnQgPSBuZXcgUmVhY3RDb21wb25lbnRFbGVtZW50KHJlYWN0Q29tcG9uZW50LCBwcm9wZXJ0aWVzLCBjaGlsZHJlbik7XG4gICAgfSBlbHNlIGlmIChmaXJzdEFyZ3VtZW50IGluc3RhbmNlb2YgUmVhY3RDbGFzcykge1xuICAgICAgdmFyIHJlYWN0Q2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAvLy9cblxuICAgICAgZWxlbWVudCA9IG5ldyBSZWFjdENsYXNzRWxlbWVudChyZWFjdENsYXNzLCBwcm9wZXJ0aWVzLCBjaGlsZHJlbik7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIHJlYWN0RnVuY3Rpb24gPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBuZXcgUmVhY3RGdW5jdGlvbkVsZW1lbnQocmVhY3RGdW5jdGlvbiwgcHJvcGVydGllcywgY2hpbGRyZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBuZXcgRGlzcGxheUVsZW1lbnQoZGlzcGxheU5hbWUsIHByb3BlcnRpZXMsIGNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5SZWFjdC5Db21wb25lbnQgPSBSZWFjdENvbXBvbmVudDtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuZnVuY3Rpb24gY2hpbGRyZW5Gcm9tUmVtYWluaW5nQXJndW1lbnRzKHJlbWFpbmluZ0FyZ3VtZW50cykge1xuICB2YXIgZmlyc3RSZW1haW5pbmdBcmd1bWVudCA9IGZpcnN0KHJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgaWYgKGZpcnN0UmVtYWluaW5nQXJndW1lbnQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIHJlbWFpbmluZ0FyZ3VtZW50cyA9IGZpcnN0UmVtYWluaW5nQXJndW1lbnQ7ICAvLy9cbiAgfVxuXG4gIHZhciBjaGlsZHJlbiA9IHJlbWFpbmluZ0FyZ3VtZW50cy5tYXAoZnVuY3Rpb24ocmVtYWluaW5nQXJndW1lbnQpIHtcbiAgICB2YXIgY2hpbGQ7XG5cbiAgICBpZiAocmVtYWluaW5nQXJndW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50XG4gICAgIHx8IHJlbWFpbmluZ0FyZ3VtZW50IGluc3RhbmNlb2YgUmVhY3RFbGVtZW50KSB7XG4gICAgICBjaGlsZCA9IHJlbWFpbmluZ0FyZ3VtZW50OyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0ZXh0ID0gJycgKyByZW1haW5pbmdBcmd1bWVudCwgIC8vL1xuICAgICAgICAgIGpzeFRleHRFbGVtZW50ID0gbmV3IFRleHRFbGVtZW50KHRleHQpO1xuXG4gICAgICBjaGlsZCA9IGpzeFRleHRFbGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pO1xuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=