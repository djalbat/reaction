'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactClass = require('./reactClass'),
    ReactComponent = require('./reactComponent'),
    JSXElement = require('./jsxElement'),
    JSXDOMElement = require('./jsxDOMElement'),
    JSXTextElement = require('./jsxTextElement'),
    JSXClassElement = require('./jsxClassElement'),
    JSXDisplayElement = require('./jsxDisplayElement'),
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

    if (remainingArgument instanceof JSXElement || remainingArgument instanceof JSXDOMElement) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSSxhQUFhLFFBQVEsY0FBUixDQUFiO0lBQ0EsaUJBQWlCLFFBQVEsa0JBQVIsQ0FBakI7SUFDQSxhQUFhLFFBQVEsY0FBUixDQUFiO0lBQ0EsZ0JBQWdCLFFBQVEsaUJBQVIsQ0FBaEI7SUFDQSxpQkFBaUIsUUFBUSxrQkFBUixDQUFqQjtJQUNBLGtCQUFrQixRQUFRLG1CQUFSLENBQWxCO0lBQ0Esb0JBQW9CLFFBQVEscUJBQVIsQ0FBcEI7SUFDQSxxQkFBcUIsUUFBUSxzQkFBUixDQUFyQjtJQUNBLHNCQUFzQixRQUFRLHVCQUFSLENBQXRCOztJQUVFOzs7Ozs7O2dDQUNlLFlBQVk7QUFDN0IsVUFBSSxhQUFhLFdBQVcsY0FBWCxDQUEwQixVQUExQixDQUFiLENBRHlCOztBQUc3QixhQUFPLFVBQVAsQ0FINkI7Ozs7a0NBTVYsZUFBZSxZQUFtQztBQUNyRSxVQUFJLGtCQUFrQixTQUFsQixFQUE2QjtBQUMvQixlQUFPLFNBQVAsQ0FEK0I7T0FBakM7O3dDQURpRDs7T0FBb0I7O0FBS3JFLFVBQUksV0FBVywrQkFBK0Isa0JBQS9CLENBQVg7VUFDQSxVQURKLENBTHFFOztBQVFyRSxVQUFJLEtBQUosRUFBVyxFQUFYLE1BRU8sSUFBSSxjQUFjLFNBQWQsWUFBbUMsY0FBbkMsRUFBbUQ7QUFDNUQsWUFBSSw0QkFBNEIsYUFBNUI7O0FBQ0EseUJBQWlCLElBQUkseUJBQUosRUFBakIsQ0FGd0Q7O0FBSTVELHFCQUFhLElBQUksbUJBQUosQ0FBd0IsY0FBeEIsRUFBd0MsVUFBeEMsRUFBb0QsUUFBcEQsQ0FBYixDQUo0RDtPQUF2RCxNQUtBLElBQUkseUJBQXlCLFVBQXpCLEVBQXFDO0FBQzlDLFlBQUksYUFBYSxhQUFiOztBQUQwQyxrQkFHOUMsR0FBYSxJQUFJLGVBQUosQ0FBb0IsVUFBcEIsRUFBZ0MsVUFBaEMsRUFBNEMsUUFBNUMsQ0FBYixDQUg4QztPQUF6QyxNQUlBLElBQUksT0FBTyxhQUFQLEtBQXlCLFVBQXpCLEVBQXFDO0FBQzlDLFlBQUksZ0JBQWdCLGFBQWhCOztBQUQwQyxrQkFHOUMsR0FBYSxJQUFJLGtCQUFKLENBQXVCLGFBQXZCLEVBQXNDLFVBQXRDLEVBQWtELFFBQWxELENBQWIsQ0FIOEM7T0FBekMsTUFJQTtBQUNMLFlBQUksY0FBYyxhQUFkOztBQURDLGtCQUdMLEdBQWEsSUFBSSxpQkFBSixDQUFzQixXQUF0QixFQUFtQyxVQUFuQyxFQUErQyxRQUEvQyxDQUFiLENBSEs7T0FKQTs7QUFVUCxhQUFPLFVBQVAsQ0E3QnFFOzs7O1NBUG5FOzs7QUF3Q04sTUFBTSxTQUFOLEdBQWtCLGNBQWxCOztBQUVBLE9BQU8sT0FBUCxHQUFpQixLQUFqQjs7QUFFQSxTQUFTLDhCQUFULENBQXdDLGtCQUF4QyxFQUE0RDtBQUMxRCxNQUFJLHlCQUF5QixNQUFNLGtCQUFOLENBQXpCLENBRHNEOztBQUcxRCxNQUFJLGtDQUFrQyxLQUFsQyxFQUF5QztBQUMzQyx5QkFBcUIsc0JBQXJCO0FBRDJDLEdBQTdDOztBQUlBLE1BQUksV0FBVyxtQkFBbUIsR0FBbkIsQ0FBdUIsVUFBUyxpQkFBVCxFQUE0QjtBQUNoRSxRQUFJLEtBQUosQ0FEZ0U7O0FBR2hFLFFBQUksNkJBQTZCLFVBQTdCLElBQ0EsNkJBQTZCLGFBQTdCLEVBQTRDO0FBQzlDLGNBQVEsaUJBQVI7QUFEOEMsS0FEaEQsTUFHTztBQUNMLFlBQUksT0FBTyxLQUFLLGlCQUFMOztBQUNQLHlCQUFpQixJQUFJLGNBQUosQ0FBbUIsSUFBbkIsQ0FBakIsQ0FGQzs7QUFJTCxnQkFBUSxjQUFSO0FBSkssT0FIUDs7QUFVQSxXQUFPLEtBQVAsQ0FiZ0U7R0FBNUIsQ0FBbEMsQ0FQc0Q7O0FBdUIxRCxTQUFPLFFBQVAsQ0F2QjBEO0NBQTVEOztBQTBCQSxTQUFTLEtBQVQsQ0FBZSxLQUFmLEVBQXNCO0FBQUUsU0FBTyxNQUFNLENBQU4sQ0FBUCxDQUFGO0NBQXRCIiwiZmlsZSI6InJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RDbGFzcyA9IHJlcXVpcmUoJy4vcmVhY3RDbGFzcycpLFxuICAgIFJlYWN0Q29tcG9uZW50ID0gcmVxdWlyZSgnLi9yZWFjdENvbXBvbmVudCcpLFxuICAgIEpTWEVsZW1lbnQgPSByZXF1aXJlKCcuL2pzeEVsZW1lbnQnKSxcbiAgICBKU1hET01FbGVtZW50ID0gcmVxdWlyZSgnLi9qc3hET01FbGVtZW50JyksXG4gICAgSlNYVGV4dEVsZW1lbnQgPSByZXF1aXJlKCcuL2pzeFRleHRFbGVtZW50JyksXG4gICAgSlNYQ2xhc3NFbGVtZW50ID0gcmVxdWlyZSgnLi9qc3hDbGFzc0VsZW1lbnQnKSxcbiAgICBKU1hEaXNwbGF5RWxlbWVudCA9IHJlcXVpcmUoJy4vanN4RGlzcGxheUVsZW1lbnQnKSxcbiAgICBKU1hGdW5jdGlvbkVsZW1lbnQgPSByZXF1aXJlKCcuL2pzeEZ1bmN0aW9uRWxlbWVudCcpLFxuICAgIEpTWENvbXBvbmVudEVsZW1lbnQgPSByZXF1aXJlKCcuL2pzeENvbXBvbmVudEVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3Qge1xuICBzdGF0aWMgY3JlYXRlQ2xhc3MocHJvcGVydGllcykge1xuICAgIHZhciByZWFjdENsYXNzID0gUmVhY3RDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiByZWFjdENsYXNzO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKGZpcnN0QXJndW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGRyZW4gPSBjaGlsZHJlbkZyb21SZW1haW5pbmdBcmd1bWVudHMocmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAganN4RWxlbWVudDtcblxuICAgIGlmIChmYWxzZSkge1xuXG4gICAgfSBlbHNlIGlmIChmaXJzdEFyZ3VtZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIFJlYWN0Q29tcG9uZW50KSB7XG4gICAgICB2YXIgcmVhY3RDb21wb25lbnRDb25zdHJ1Y3RvciA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICByZWFjdENvbXBvbmVudCA9IG5ldyByZWFjdENvbXBvbmVudENvbnN0cnVjdG9yKCk7XG5cbiAgICAgIGpzeEVsZW1lbnQgPSBuZXcgSlNYQ29tcG9uZW50RWxlbWVudChyZWFjdENvbXBvbmVudCwgcHJvcGVydGllcywgY2hpbGRyZW4pO1xuICAgIH0gZWxzZSBpZiAoZmlyc3RBcmd1bWVudCBpbnN0YW5jZW9mIFJlYWN0Q2xhc3MpIHtcbiAgICAgIHZhciByZWFjdENsYXNzID0gZmlyc3RBcmd1bWVudDsgLy8vXG5cbiAgICAgIGpzeEVsZW1lbnQgPSBuZXcgSlNYQ2xhc3NFbGVtZW50KHJlYWN0Q2xhc3MsIHByb3BlcnRpZXMsIGNoaWxkcmVuKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgcmVhY3RGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAganN4RWxlbWVudCA9IG5ldyBKU1hGdW5jdGlvbkVsZW1lbnQocmVhY3RGdW5jdGlvbiwgcHJvcGVydGllcywgY2hpbGRyZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGpzeEVsZW1lbnQgPSBuZXcgSlNYRGlzcGxheUVsZW1lbnQoZGlzcGxheU5hbWUsIHByb3BlcnRpZXMsIGNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICByZXR1cm4ganN4RWxlbWVudDtcbiAgfVxufVxuXG5SZWFjdC5Db21wb25lbnQgPSBSZWFjdENvbXBvbmVudDtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuZnVuY3Rpb24gY2hpbGRyZW5Gcm9tUmVtYWluaW5nQXJndW1lbnRzKHJlbWFpbmluZ0FyZ3VtZW50cykge1xuICB2YXIgZmlyc3RSZW1haW5pbmdBcmd1bWVudCA9IGZpcnN0KHJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgaWYgKGZpcnN0UmVtYWluaW5nQXJndW1lbnQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIHJlbWFpbmluZ0FyZ3VtZW50cyA9IGZpcnN0UmVtYWluaW5nQXJndW1lbnQ7ICAvLy9cbiAgfVxuXG4gIHZhciBjaGlsZHJlbiA9IHJlbWFpbmluZ0FyZ3VtZW50cy5tYXAoZnVuY3Rpb24ocmVtYWluaW5nQXJndW1lbnQpIHtcbiAgICB2YXIgY2hpbGQ7XG5cbiAgICBpZiAocmVtYWluaW5nQXJndW1lbnQgaW5zdGFuY2VvZiBKU1hFbGVtZW50XG4gICAgIHx8IHJlbWFpbmluZ0FyZ3VtZW50IGluc3RhbmNlb2YgSlNYRE9NRWxlbWVudCkge1xuICAgICAgY2hpbGQgPSByZW1haW5pbmdBcmd1bWVudDsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdGV4dCA9ICcnICsgcmVtYWluaW5nQXJndW1lbnQsICAvLy9cbiAgICAgICAgICBqc3hUZXh0RWxlbWVudCA9IG5ldyBKU1hUZXh0RWxlbWVudCh0ZXh0KTtcblxuICAgICAgY2hpbGQgPSBqc3hUZXh0RWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KTtcblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19