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
            reactComponent = new reactComponentConstructor();

        element = new ReactComponentElement(reactComponent, properties, children);
      } else if (firstArgument instanceof ReactClass) {
        var reactClass = firstArgument;

        element = new ReactClassElement(reactClass, properties, children);
      } else if (typeof firstArgument === 'function') {
        var reactFunction = firstArgument;

        element = new ReactFunctionElement(reactFunction, properties, children);
      } else {
        var displayName = firstArgument;

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
    remainingArguments = firstRemainingArgument;
  }

  var children = remainingArguments.map(function (remainingArgument) {
    var child;

    if (remainingArgument instanceof Element || remainingArgument instanceof ReactElement) {
      child = remainingArgument;
    } else {
      var text = '' + remainingArgument,
          textElement = new TextElement(text);

      child = textElement;
    }

    return child;
  });

  return children;
}

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,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Y2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdENvbXBvbmVudCA9IHJlcXVpcmUoJy4vcmVhY3RDb21wb25lbnQnKSxcbiAgICBSZWFjdENsYXNzID0gcmVxdWlyZSgnLi9yZWFjdENsYXNzJyksXG4gICAgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpLFxuICAgIFRleHRFbGVtZW50ID0gcmVxdWlyZSgnLi90ZXh0RWxlbWVudCcpLFxuICAgIFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RFbGVtZW50JyksXG4gICAgRGlzcGxheUVsZW1lbnQgPSByZXF1aXJlKCcuL2Rpc3BsYXlFbGVtZW50JyksXG4gICAgUmVhY3RDbGFzc0VsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0Q2xhc3NFbGVtZW50JyksXG4gICAgUmVhY3RGdW5jdGlvbkVsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0RnVuY3Rpb25FbGVtZW50JyksXG4gICAgUmVhY3RDb21wb25lbnRFbGVtZW50ID0gcmVxdWlyZSgnLi9yZWFjdENvbXBvbmVudEVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3Qge1xuICBzdGF0aWMgY3JlYXRlQ2xhc3MocHJvcGVydGllcykge1xuICAgIHZhciByZWFjdENsYXNzID0gUmVhY3RDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiByZWFjdENsYXNzO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKGZpcnN0QXJndW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGRyZW4gPSBjaGlsZHJlbkZyb21SZW1haW5pbmdBcmd1bWVudHMocmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgZWxlbWVudDtcblxuICAgIGlmIChmYWxzZSkge1xuXG4gICAgfSBlbHNlIGlmIChmaXJzdEFyZ3VtZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIFJlYWN0Q29tcG9uZW50KSB7XG4gICAgICB2YXIgcmVhY3RDb21wb25lbnRDb25zdHJ1Y3RvciA9IGZpcnN0QXJndW1lbnQsXG4gICAgICAgICAgcmVhY3RDb21wb25lbnQgPSBuZXcgcmVhY3RDb21wb25lbnRDb25zdHJ1Y3RvcigpO1xuXG4gICAgICBlbGVtZW50ID0gbmV3IFJlYWN0Q29tcG9uZW50RWxlbWVudChyZWFjdENvbXBvbmVudCwgcHJvcGVydGllcywgY2hpbGRyZW4pO1xuICAgIH0gZWxzZSBpZiAoZmlyc3RBcmd1bWVudCBpbnN0YW5jZW9mIFJlYWN0Q2xhc3MpIHtcbiAgICAgIHZhciByZWFjdENsYXNzID0gZmlyc3RBcmd1bWVudDtcblxuICAgICAgZWxlbWVudCA9IG5ldyBSZWFjdENsYXNzRWxlbWVudChyZWFjdENsYXNzLCBwcm9wZXJ0aWVzLCBjaGlsZHJlbik7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIHJlYWN0RnVuY3Rpb24gPSBmaXJzdEFyZ3VtZW50O1xuXG4gICAgICBlbGVtZW50ID0gbmV3IFJlYWN0RnVuY3Rpb25FbGVtZW50KHJlYWN0RnVuY3Rpb24sIHByb3BlcnRpZXMsIGNoaWxkcmVuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gZmlyc3RBcmd1bWVudDtcblxuICAgICAgZWxlbWVudCA9IG5ldyBEaXNwbGF5RWxlbWVudChkaXNwbGF5TmFtZSwgcHJvcGVydGllcywgY2hpbGRyZW4pO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cblJlYWN0LkNvbXBvbmVudCA9IFJlYWN0Q29tcG9uZW50O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5mdW5jdGlvbiBjaGlsZHJlbkZyb21SZW1haW5pbmdBcmd1bWVudHMocmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIHZhciBmaXJzdFJlbWFpbmluZ0FyZ3VtZW50ID0gZmlyc3QocmVtYWluaW5nQXJndW1lbnRzKTtcblxuICBpZiAoZmlyc3RSZW1haW5pbmdBcmd1bWVudCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgcmVtYWluaW5nQXJndW1lbnRzID0gZmlyc3RSZW1haW5pbmdBcmd1bWVudDtcbiAgfVxuXG4gIHZhciBjaGlsZHJlbiA9IHJlbWFpbmluZ0FyZ3VtZW50cy5tYXAoZnVuY3Rpb24ocmVtYWluaW5nQXJndW1lbnQpIHtcbiAgICB2YXIgY2hpbGQ7XG5cbiAgICBpZiAocmVtYWluaW5nQXJndW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50XG4gICAgIHx8IHJlbWFpbmluZ0FyZ3VtZW50IGluc3RhbmNlb2YgUmVhY3RFbGVtZW50KSB7XG4gICAgICBjaGlsZCA9IHJlbWFpbmluZ0FyZ3VtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdGV4dCA9ICcnICsgcmVtYWluaW5nQXJndW1lbnQsXG4gICAgICAgICAgdGV4dEVsZW1lbnQgPSBuZXcgVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgIGNoaWxkID0gdGV4dEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KTtcblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19