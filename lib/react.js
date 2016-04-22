'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactClass = require('./reactClass'),
    ReactComponent = require('./reactComponent'),
    JSXElement = require('./jsxElement'),
    JSXTextElement = require('./jsxTextElement'),
    JSXClassElement = require('./jsxClassElement'),
    JSXDisplayElement = require('./jsxDisplayElement'),
    JSXDOMTextElement = require('./jsxDOMTextElement'),
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
        var displayName = firstArgument; ///

        jsxElement = new JSXDisplayElement(displayName, properties, children);
      }

      return jsxElement;
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

    if (remainingArgument instanceof JSXElement || remainingArgument instanceof JSXDisplayElement || remainingArgument instanceof JSXDOMTextElement) {
      child = remainingArgument; ///
    } else {
        var text = '' + remainingArgument,
            ///
        jsxTextElement = new JSXTextElement(text);

        child = jsxTextElement; ///
      }

    return child;
  });

  return children;
}

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSSxhQUFhLFFBQVEsY0FBUixDQUFiO0lBQ0EsaUJBQWlCLFFBQVEsa0JBQVIsQ0FBakI7SUFDQSxhQUFhLFFBQVEsY0FBUixDQUFiO0lBQ0EsaUJBQWlCLFFBQVEsa0JBQVIsQ0FBakI7SUFDQSxrQkFBa0IsUUFBUSxtQkFBUixDQUFsQjtJQUNBLG9CQUFvQixRQUFRLHFCQUFSLENBQXBCO0lBQ0Esb0JBQW9CLFFBQVEscUJBQVIsQ0FBcEI7SUFDQSxxQkFBcUIsUUFBUSxzQkFBUixDQUFyQjtJQUNBLHNCQUFzQixRQUFRLHVCQUFSLENBQXRCOztJQUVFOzs7Ozs7O2dDQUNlLFlBQVk7QUFDN0IsVUFBSSxhQUFhLFdBQVcsY0FBWCxDQUEwQixVQUExQixDQUFiLENBRHlCOztBQUc3QixhQUFPLFVBQVAsQ0FINkI7Ozs7a0NBTVYsZUFBZSxZQUFtQztBQUNyRSxVQUFJLGtCQUFrQixTQUFsQixFQUE2QjtBQUMvQixlQUFPLFNBQVAsQ0FEK0I7T0FBakM7O3dDQURpRDs7T0FBb0I7O0FBS3JFLFVBQUksV0FBVywrQkFBK0Isa0JBQS9CLENBQVg7VUFDQSxVQURKLENBTHFFOztBQVFyRSxVQUFJLEtBQUosRUFBVyxFQUFYLE1BRU8sSUFBSSxjQUFjLFNBQWQsWUFBbUMsY0FBbkMsRUFBbUQ7QUFDNUQsWUFBSSw0QkFBNEIsYUFBNUI7O0FBQ0EseUJBQWlCLElBQUkseUJBQUosRUFBakIsQ0FGd0Q7O0FBSTVELHFCQUFhLElBQUksbUJBQUosQ0FBd0IsY0FBeEIsRUFBd0MsVUFBeEMsRUFBb0QsUUFBcEQsQ0FBYixDQUo0RDtPQUF2RCxNQUtBLElBQUkseUJBQXlCLFVBQXpCLEVBQXFDO0FBQzlDLFlBQUksYUFBYSxhQUFiOztBQUQwQyxrQkFHOUMsR0FBYSxJQUFJLGVBQUosQ0FBb0IsVUFBcEIsRUFBZ0MsVUFBaEMsRUFBNEMsUUFBNUMsQ0FBYixDQUg4QztPQUF6QyxNQUlBLElBQUksT0FBTyxhQUFQLEtBQXlCLFVBQXpCLEVBQXFDO0FBQzlDLFlBQUksZ0JBQWdCLGFBQWhCOztBQUQwQyxrQkFHOUMsR0FBYSxJQUFJLGtCQUFKLENBQXVCLGFBQXZCLEVBQXNDLFVBQXRDLEVBQWtELFFBQWxELENBQWIsQ0FIOEM7T0FBekMsTUFJQTtBQUNMLFlBQUksY0FBYyxhQUFkOztBQURDLGtCQUdMLEdBQWEsSUFBSSxpQkFBSixDQUFzQixXQUF0QixFQUFtQyxVQUFuQyxFQUErQyxRQUEvQyxDQUFiLENBSEs7T0FKQTs7QUFVUCxhQUFPLFVBQVAsQ0E3QnFFOzs7O1NBUG5FOzs7QUF3Q04sTUFBTSxTQUFOLEdBQWtCLGNBQWxCOztBQUVBLE9BQU8sT0FBUCxHQUFpQixLQUFqQjs7QUFFQSxTQUFTLDhCQUFULENBQXdDLGtCQUF4QyxFQUE0RDtBQUMxRCxNQUFJLHlCQUF5QixNQUFNLGtCQUFOLENBQXpCLENBRHNEOztBQUcxRCxNQUFJLGtDQUFrQyxLQUFsQyxFQUF5QztBQUMzQyx5QkFBcUIsc0JBQXJCO0FBRDJDLEdBQTdDOztBQUlBLE1BQUksV0FBVyxtQkFBbUIsR0FBbkIsQ0FBdUIsVUFBUyxpQkFBVCxFQUE0QjtBQUNoRSxRQUFJLEtBQUosQ0FEZ0U7O0FBR2hFLFFBQUksNkJBQTZCLFVBQTdCLElBQ0EsNkJBQTZCLGlCQUE3QixJQUNBLDZCQUE2QixpQkFBN0IsRUFBZ0Q7QUFDbEQsY0FBUSxpQkFBUjtBQURrRCxLQUZwRCxNQUlPO0FBQ0wsWUFBSSxPQUFPLEtBQUssaUJBQUw7O0FBQ1AseUJBQWlCLElBQUksY0FBSixDQUFtQixJQUFuQixDQUFqQixDQUZDOztBQUlMLGdCQUFRLGNBQVI7QUFKSyxPQUpQOztBQVdBLFdBQU8sS0FBUCxDQWRnRTtHQUE1QixDQUFsQyxDQVBzRDs7QUF3QjFELFNBQU8sUUFBUCxDQXhCMEQ7Q0FBNUQ7O0FBMkJBLFNBQVMsS0FBVCxDQUFlLEtBQWYsRUFBc0I7QUFBRSxTQUFPLE1BQU0sQ0FBTixDQUFQLENBQUY7Q0FBdEIiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdENsYXNzID0gcmVxdWlyZSgnLi9yZWFjdENsYXNzJyksXG4gICAgUmVhY3RDb21wb25lbnQgPSByZXF1aXJlKCcuL3JlYWN0Q29tcG9uZW50JyksXG4gICAgSlNYRWxlbWVudCA9IHJlcXVpcmUoJy4vanN4RWxlbWVudCcpLFxuICAgIEpTWFRleHRFbGVtZW50ID0gcmVxdWlyZSgnLi9qc3hUZXh0RWxlbWVudCcpLFxuICAgIEpTWENsYXNzRWxlbWVudCA9IHJlcXVpcmUoJy4vanN4Q2xhc3NFbGVtZW50JyksXG4gICAgSlNYRGlzcGxheUVsZW1lbnQgPSByZXF1aXJlKCcuL2pzeERpc3BsYXlFbGVtZW50JyksXG4gICAgSlNYRE9NVGV4dEVsZW1lbnQgPSByZXF1aXJlKCcuL2pzeERPTVRleHRFbGVtZW50JyksXG4gICAgSlNYRnVuY3Rpb25FbGVtZW50ID0gcmVxdWlyZSgnLi9qc3hGdW5jdGlvbkVsZW1lbnQnKSxcbiAgICBKU1hDb21wb25lbnRFbGVtZW50ID0gcmVxdWlyZSgnLi9qc3hDb21wb25lbnRFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0IHtcbiAgc3RhdGljIGNyZWF0ZUNsYXNzKHByb3BlcnRpZXMpIHtcbiAgICB2YXIgcmVhY3RDbGFzcyA9IFJlYWN0Q2xhc3MuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gcmVhY3RDbGFzcztcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChmaXJzdEFyZ3VtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkcmVuID0gY2hpbGRyZW5Gcm9tUmVtYWluaW5nQXJndW1lbnRzKHJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgIGpzeEVsZW1lbnQ7XG5cbiAgICBpZiAoZmFsc2UpIHtcblxuICAgIH0gZWxzZSBpZiAoZmlyc3RBcmd1bWVudC5wcm90b3R5cGUgaW5zdGFuY2VvZiBSZWFjdENvbXBvbmVudCkge1xuICAgICAgdmFyIHJlYWN0Q29tcG9uZW50Q29uc3RydWN0b3IgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgcmVhY3RDb21wb25lbnQgPSBuZXcgcmVhY3RDb21wb25lbnRDb25zdHJ1Y3RvcigpO1xuXG4gICAgICBqc3hFbGVtZW50ID0gbmV3IEpTWENvbXBvbmVudEVsZW1lbnQocmVhY3RDb21wb25lbnQsIHByb3BlcnRpZXMsIGNoaWxkcmVuKTtcbiAgICB9IGVsc2UgaWYgKGZpcnN0QXJndW1lbnQgaW5zdGFuY2VvZiBSZWFjdENsYXNzKSB7XG4gICAgICB2YXIgcmVhY3RDbGFzcyA9IGZpcnN0QXJndW1lbnQ7IC8vL1xuXG4gICAgICBqc3hFbGVtZW50ID0gbmV3IEpTWENsYXNzRWxlbWVudChyZWFjdENsYXNzLCBwcm9wZXJ0aWVzLCBjaGlsZHJlbik7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIHJlYWN0RnVuY3Rpb24gPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGpzeEVsZW1lbnQgPSBuZXcgSlNYRnVuY3Rpb25FbGVtZW50KHJlYWN0RnVuY3Rpb24sIHByb3BlcnRpZXMsIGNoaWxkcmVuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICBqc3hFbGVtZW50ID0gbmV3IEpTWERpc3BsYXlFbGVtZW50KGRpc3BsYXlOYW1lLCBwcm9wZXJ0aWVzLCBjaGlsZHJlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGpzeEVsZW1lbnQ7XG4gIH1cbn1cblxuUmVhY3QuQ29tcG9uZW50ID0gUmVhY3RDb21wb25lbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbmZ1bmN0aW9uIGNoaWxkcmVuRnJvbVJlbWFpbmluZ0FyZ3VtZW50cyhyZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgdmFyIGZpcnN0UmVtYWluaW5nQXJndW1lbnQgPSBmaXJzdChyZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gIGlmIChmaXJzdFJlbWFpbmluZ0FyZ3VtZW50IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICByZW1haW5pbmdBcmd1bWVudHMgPSBmaXJzdFJlbWFpbmluZ0FyZ3VtZW50OyAgLy8vXG4gIH1cblxuICB2YXIgY2hpbGRyZW4gPSByZW1haW5pbmdBcmd1bWVudHMubWFwKGZ1bmN0aW9uKHJlbWFpbmluZ0FyZ3VtZW50KSB7XG4gICAgdmFyIGNoaWxkO1xuXG4gICAgaWYgKHJlbWFpbmluZ0FyZ3VtZW50IGluc3RhbmNlb2YgSlNYRWxlbWVudFxuICAgICB8fCByZW1haW5pbmdBcmd1bWVudCBpbnN0YW5jZW9mIEpTWERpc3BsYXlFbGVtZW50XG4gICAgIHx8IHJlbWFpbmluZ0FyZ3VtZW50IGluc3RhbmNlb2YgSlNYRE9NVGV4dEVsZW1lbnQpIHtcbiAgICAgIGNoaWxkID0gcmVtYWluaW5nQXJndW1lbnQ7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRleHQgPSAnJyArIHJlbWFpbmluZ0FyZ3VtZW50LCAgLy8vXG4gICAgICAgICAganN4VGV4dEVsZW1lbnQgPSBuZXcgSlNYVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgIGNoaWxkID0ganN4VGV4dEVsZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==