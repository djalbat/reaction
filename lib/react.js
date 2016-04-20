'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactClass = require('./reactClass'),
    ReactComponent = require('./reactComponent'),
    JSXBaseElement = require('./jsxBaseElement'),
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

      var children = childrenFromRemainingArguments.apply(null, remainingArguments),
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

function childrenFromRemainingArguments() {
  var remainingArguments = Array.prototype.slice.call(arguments),
      firstRemainingArgument = first(remainingArguments),
      children;

  if (false) {} else if (firstRemainingArgument === undefined) {
    children = [];
  } else if (firstRemainingArgument instanceof Array) {
    children = firstRemainingArgument; ///
  } else {
      children = remainingArguments.map(function (remainingArgument) {
        var child;

        if (remainingArgument.prototype instanceof JSXBaseElement) {
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
//# sourceMappingURL=data:application/json;base64,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QVo0RDtPQUE1QixDQUFsQyxDQURLO0tBRkE7O0FBbUJQLFNBQU8sUUFBUCxDQTVCd0M7Q0FBMUM7O0FBK0JBLFNBQVMsS0FBVCxDQUFlLEtBQWYsRUFBc0I7QUFBRSxTQUFPLE1BQU0sQ0FBTixDQUFQLENBQUY7Q0FBdEIiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdENsYXNzID0gcmVxdWlyZSgnLi9yZWFjdENsYXNzJyksXG4gICAgUmVhY3RDb21wb25lbnQgPSByZXF1aXJlKCcuL3JlYWN0Q29tcG9uZW50JyksXG4gICAgSlNYQmFzZUVsZW1lbnQgPSByZXF1aXJlKCcuL2pzeEJhc2VFbGVtZW50JyksXG4gICAgSlNYRE9NRWxlbWVudCA9IHJlcXVpcmUoJy4vanN4RE9NRWxlbWVudCcpLFxuICAgIEpTWFRleHRFbGVtZW50ID0gcmVxdWlyZSgnLi9qc3hUZXh0RWxlbWVudCcpLFxuICAgIEpTWENsYXNzRWxlbWVudCA9IHJlcXVpcmUoJy4vanN4Q2xhc3NFbGVtZW50JyksXG4gICAgSlNYRnVuY3Rpb25FbGVtZW50ID0gcmVxdWlyZSgnLi9qc3hGdW5jdGlvbkVsZW1lbnQnKSxcbiAgICBKU1hDb21wb25lbnRFbGVtZW50ID0gcmVxdWlyZSgnLi9qc3hDb21wb25lbnRFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0IHtcbiAgc3RhdGljIGNyZWF0ZUNsYXNzKHByb3BlcnRpZXMpIHtcbiAgICB2YXIgcmVhY3RDbGFzcyA9IFJlYWN0Q2xhc3MuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gcmVhY3RDbGFzcztcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChmaXJzdEFyZ3VtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkcmVuID0gY2hpbGRyZW5Gcm9tUmVtYWluaW5nQXJndW1lbnRzLmFwcGx5KG51bGwsIHJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgIGpzeEVsZW1lbnQ7XG5cbiAgICBpZiAoZmFsc2UpIHtcblxuICAgIH0gZWxzZSBpZiAoZmlyc3RBcmd1bWVudC5wcm90b3R5cGUgaW5zdGFuY2VvZiBSZWFjdENvbXBvbmVudCkge1xuICAgICAgdmFyIHJlYWN0Q29tcG9uZW50Q29uc3RydWN0b3IgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgcmVhY3RDb21wb25lbnQgPSBuZXcgcmVhY3RDb21wb25lbnRDb25zdHJ1Y3RvcigpO1xuXG4gICAgICBqc3hFbGVtZW50ID0gbmV3IEpTWENvbXBvbmVudEVsZW1lbnQocmVhY3RDb21wb25lbnQsIHByb3BlcnRpZXMsIGNoaWxkcmVuKTtcbiAgICB9IGVsc2UgaWYgKGZpcnN0QXJndW1lbnQgaW5zdGFuY2VvZiBSZWFjdENsYXNzKSB7XG4gICAgICB2YXIgcmVhY3RDbGFzcyA9IGZpcnN0QXJndW1lbnQ7IC8vL1xuXG4gICAgICBqc3hFbGVtZW50ID0gbmV3IEpTWENsYXNzRWxlbWVudChyZWFjdENsYXNzLCBwcm9wZXJ0aWVzLCBjaGlsZHJlbik7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIHJlYWN0RnVuY3Rpb24gPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGpzeEVsZW1lbnQgPSBuZXcgSlNYRnVuY3Rpb25FbGVtZW50KHJlYWN0RnVuY3Rpb24sIHByb3BlcnRpZXMsIGNoaWxkcmVuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGVsZW1lbnROYW1lID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICBqc3hFbGVtZW50ID0gbmV3IEpTWERPTUVsZW1lbnQoZWxlbWVudE5hbWUsIHByb3BlcnRpZXMsIGNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICByZXR1cm4ganN4RWxlbWVudDtcbiAgfVxufVxuXG5SZWFjdC5Db21wb25lbnQgPSBSZWFjdENvbXBvbmVudDtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuZnVuY3Rpb24gY2hpbGRyZW5Gcm9tUmVtYWluaW5nQXJndW1lbnRzKCkge1xuICB2YXIgcmVtYWluaW5nQXJndW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxcbiAgICAgIGZpcnN0UmVtYWluaW5nQXJndW1lbnQgPSBmaXJzdChyZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgY2hpbGRyZW47XG5cbiAgaWYgKGZhbHNlKSB7XG4gICAgXG4gIH0gZWxzZSBpZiAoZmlyc3RSZW1haW5pbmdBcmd1bWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2hpbGRyZW4gPSBbXTtcbiAgfSBlbHNlIGlmIChmaXJzdFJlbWFpbmluZ0FyZ3VtZW50IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICBjaGlsZHJlbiA9IGZpcnN0UmVtYWluaW5nQXJndW1lbnQ7ICAvLy9cbiAgfSBlbHNlIHtcbiAgICBjaGlsZHJlbiA9IHJlbWFpbmluZ0FyZ3VtZW50cy5tYXAoZnVuY3Rpb24ocmVtYWluaW5nQXJndW1lbnQpIHtcbiAgICAgIHZhciBjaGlsZDtcbiAgICAgIFxuICAgICAgaWYgKHJlbWFpbmluZ0FyZ3VtZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIEpTWEJhc2VFbGVtZW50KSB7XG4gICAgICAgIGNoaWxkID0gcmVtYWluaW5nQXJndW1lbnQ7ICAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB0ZXh0ID0gJycgKyByZW1haW5pbmdBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAganN4VGV4dEVsZW1lbnQgPSBuZXcgSlNYVGV4dEVsZW1lbnQodGV4dCk7XG4gICAgICAgIFxuICAgICAgICBjaGlsZCA9IGpzeFRleHRFbGVtZW50OyAvLy9cbiAgICAgIH1cbiAgICAgIFxuICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==