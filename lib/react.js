'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactClass = require('./reactClass'),
    ReactComponent = require('./reactComponent'),
    Element = require('./element'),
    BaseElement = require('./baseElement'),
    TextElement = require('./textElement'),
    ClassElement = require('./classElement'),
    DisplayElement = require('./displayElement'),
    FunctionElement = require('./functionElement'),
    ComponentElement = require('./componentElement');

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

        element = new ComponentElement(reactComponent, properties, children);
      } else if (firstArgument instanceof ReactClass) {
        var reactClass = firstArgument; ///

        element = new ClassElement(reactClass, properties, children);
      } else if (typeof firstArgument === 'function') {
        var reactFunction = firstArgument; ///

        element = new FunctionElement(reactFunction, properties, children);
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

    if (remainingArgument instanceof Element || remainingArgument instanceof BaseElement) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSSxhQUFhLFFBQVEsY0FBUixDQUFiO0lBQ0EsaUJBQWlCLFFBQVEsa0JBQVIsQ0FBakI7SUFDQSxVQUFVLFFBQVEsV0FBUixDQUFWO0lBQ0EsY0FBYyxRQUFRLGVBQVIsQ0FBZDtJQUNBLGNBQWMsUUFBUSxlQUFSLENBQWQ7SUFDQSxlQUFlLFFBQVEsZ0JBQVIsQ0FBZjtJQUNBLGlCQUFpQixRQUFRLGtCQUFSLENBQWpCO0lBQ0Esa0JBQWtCLFFBQVEsbUJBQVIsQ0FBbEI7SUFDQSxtQkFBbUIsUUFBUSxvQkFBUixDQUFuQjs7SUFFRTs7Ozs7OztnQ0FDZSxZQUFZO0FBQzdCLFVBQUksYUFBYSxXQUFXLGNBQVgsQ0FBMEIsVUFBMUIsQ0FBYixDQUR5Qjs7QUFHN0IsYUFBTyxVQUFQLENBSDZCOzs7O2tDQU1WLGVBQWUsWUFBbUM7QUFDckUsVUFBSSxrQkFBa0IsU0FBbEIsRUFBNkI7QUFDL0IsZUFBTyxTQUFQLENBRCtCO09BQWpDOzt3Q0FEaUQ7O09BQW9COztBQUtyRSxVQUFJLFdBQVcsK0JBQStCLGtCQUEvQixDQUFYO1VBQ0EsT0FESixDQUxxRTs7QUFRckUsVUFBSSxLQUFKLEVBQVcsRUFBWCxNQUVPLElBQUksY0FBYyxTQUFkLFlBQW1DLGNBQW5DLEVBQW1EO0FBQzVELFlBQUksNEJBQTRCLGFBQTVCOztBQUNBLHlCQUFpQixJQUFJLHlCQUFKLEVBQWpCLENBRndEOztBQUk1RCxrQkFBVSxJQUFJLGdCQUFKLENBQXFCLGNBQXJCLEVBQXFDLFVBQXJDLEVBQWlELFFBQWpELENBQVYsQ0FKNEQ7T0FBdkQsTUFLQSxJQUFJLHlCQUF5QixVQUF6QixFQUFxQztBQUM5QyxZQUFJLGFBQWEsYUFBYjs7QUFEMEMsZUFHOUMsR0FBVSxJQUFJLFlBQUosQ0FBaUIsVUFBakIsRUFBNkIsVUFBN0IsRUFBeUMsUUFBekMsQ0FBVixDQUg4QztPQUF6QyxNQUlBLElBQUksT0FBTyxhQUFQLEtBQXlCLFVBQXpCLEVBQXFDO0FBQzlDLFlBQUksZ0JBQWdCLGFBQWhCOztBQUQwQyxlQUc5QyxHQUFVLElBQUksZUFBSixDQUFvQixhQUFwQixFQUFtQyxVQUFuQyxFQUErQyxRQUEvQyxDQUFWLENBSDhDO09BQXpDLE1BSUE7QUFDTCxZQUFJLGNBQWMsYUFBZDs7QUFEQyxlQUdMLEdBQVUsSUFBSSxjQUFKLENBQW1CLFdBQW5CLEVBQWdDLFVBQWhDLEVBQTRDLFFBQTVDLENBQVYsQ0FISztPQUpBOztBQVVQLGFBQU8sT0FBUCxDQTdCcUU7Ozs7U0FQbkU7OztBQXdDTixNQUFNLFNBQU4sR0FBa0IsY0FBbEI7O0FBRUEsT0FBTyxPQUFQLEdBQWlCLEtBQWpCOztBQUVBLFNBQVMsOEJBQVQsQ0FBd0Msa0JBQXhDLEVBQTREO0FBQzFELE1BQUkseUJBQXlCLE1BQU0sa0JBQU4sQ0FBekIsQ0FEc0Q7O0FBRzFELE1BQUksa0NBQWtDLEtBQWxDLEVBQXlDO0FBQzNDLHlCQUFxQixzQkFBckI7QUFEMkMsR0FBN0M7O0FBSUEsTUFBSSxXQUFXLG1CQUFtQixHQUFuQixDQUF1QixVQUFTLGlCQUFULEVBQTRCO0FBQ2hFLFFBQUksS0FBSixDQURnRTs7QUFHaEUsUUFBSSw2QkFBNkIsT0FBN0IsSUFDQSw2QkFBNkIsV0FBN0IsRUFBMEM7QUFDNUMsY0FBUSxpQkFBUjtBQUQ0QyxLQUQ5QyxNQUdPO0FBQ0wsWUFBSSxPQUFPLEtBQUssaUJBQUw7O0FBQ1AseUJBQWlCLElBQUksV0FBSixDQUFnQixJQUFoQixDQUFqQixDQUZDOztBQUlMLGdCQUFRLGNBQVI7QUFKSyxPQUhQOztBQVVBLFdBQU8sS0FBUCxDQWJnRTtHQUE1QixDQUFsQyxDQVBzRDs7QUF1QjFELFNBQU8sUUFBUCxDQXZCMEQ7Q0FBNUQ7O0FBMEJBLFNBQVMsS0FBVCxDQUFlLEtBQWYsRUFBc0I7QUFBRSxTQUFPLE1BQU0sQ0FBTixDQUFQLENBQUY7Q0FBdEIiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdENsYXNzID0gcmVxdWlyZSgnLi9yZWFjdENsYXNzJyksXG4gICAgUmVhY3RDb21wb25lbnQgPSByZXF1aXJlKCcuL3JlYWN0Q29tcG9uZW50JyksXG4gICAgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpLFxuICAgIEJhc2VFbGVtZW50ID0gcmVxdWlyZSgnLi9iYXNlRWxlbWVudCcpLFxuICAgIFRleHRFbGVtZW50ID0gcmVxdWlyZSgnLi90ZXh0RWxlbWVudCcpLFxuICAgIENsYXNzRWxlbWVudCA9IHJlcXVpcmUoJy4vY2xhc3NFbGVtZW50JyksXG4gICAgRGlzcGxheUVsZW1lbnQgPSByZXF1aXJlKCcuL2Rpc3BsYXlFbGVtZW50JyksXG4gICAgRnVuY3Rpb25FbGVtZW50ID0gcmVxdWlyZSgnLi9mdW5jdGlvbkVsZW1lbnQnKSxcbiAgICBDb21wb25lbnRFbGVtZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnRFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0IHtcbiAgc3RhdGljIGNyZWF0ZUNsYXNzKHByb3BlcnRpZXMpIHtcbiAgICB2YXIgcmVhY3RDbGFzcyA9IFJlYWN0Q2xhc3MuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gcmVhY3RDbGFzcztcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChmaXJzdEFyZ3VtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkcmVuID0gY2hpbGRyZW5Gcm9tUmVtYWluaW5nQXJndW1lbnRzKHJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgIGVsZW1lbnQ7XG5cbiAgICBpZiAoZmFsc2UpIHtcblxuICAgIH0gZWxzZSBpZiAoZmlyc3RBcmd1bWVudC5wcm90b3R5cGUgaW5zdGFuY2VvZiBSZWFjdENvbXBvbmVudCkge1xuICAgICAgdmFyIHJlYWN0Q29tcG9uZW50Q29uc3RydWN0b3IgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgcmVhY3RDb21wb25lbnQgPSBuZXcgcmVhY3RDb21wb25lbnRDb25zdHJ1Y3RvcigpO1xuXG4gICAgICBlbGVtZW50ID0gbmV3IENvbXBvbmVudEVsZW1lbnQocmVhY3RDb21wb25lbnQsIHByb3BlcnRpZXMsIGNoaWxkcmVuKTtcbiAgICB9IGVsc2UgaWYgKGZpcnN0QXJndW1lbnQgaW5zdGFuY2VvZiBSZWFjdENsYXNzKSB7XG4gICAgICB2YXIgcmVhY3RDbGFzcyA9IGZpcnN0QXJndW1lbnQ7IC8vL1xuXG4gICAgICBlbGVtZW50ID0gbmV3IENsYXNzRWxlbWVudChyZWFjdENsYXNzLCBwcm9wZXJ0aWVzLCBjaGlsZHJlbik7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIHJlYWN0RnVuY3Rpb24gPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBuZXcgRnVuY3Rpb25FbGVtZW50KHJlYWN0RnVuY3Rpb24sIHByb3BlcnRpZXMsIGNoaWxkcmVuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICBlbGVtZW50ID0gbmV3IERpc3BsYXlFbGVtZW50KGRpc3BsYXlOYW1lLCBwcm9wZXJ0aWVzLCBjaGlsZHJlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuUmVhY3QuQ29tcG9uZW50ID0gUmVhY3RDb21wb25lbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbmZ1bmN0aW9uIGNoaWxkcmVuRnJvbVJlbWFpbmluZ0FyZ3VtZW50cyhyZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgdmFyIGZpcnN0UmVtYWluaW5nQXJndW1lbnQgPSBmaXJzdChyZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gIGlmIChmaXJzdFJlbWFpbmluZ0FyZ3VtZW50IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICByZW1haW5pbmdBcmd1bWVudHMgPSBmaXJzdFJlbWFpbmluZ0FyZ3VtZW50OyAgLy8vXG4gIH1cblxuICB2YXIgY2hpbGRyZW4gPSByZW1haW5pbmdBcmd1bWVudHMubWFwKGZ1bmN0aW9uKHJlbWFpbmluZ0FyZ3VtZW50KSB7XG4gICAgdmFyIGNoaWxkO1xuXG4gICAgaWYgKHJlbWFpbmluZ0FyZ3VtZW50IGluc3RhbmNlb2YgRWxlbWVudFxuICAgICB8fCByZW1haW5pbmdBcmd1bWVudCBpbnN0YW5jZW9mIEJhc2VFbGVtZW50KSB7XG4gICAgICBjaGlsZCA9IHJlbWFpbmluZ0FyZ3VtZW50OyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0ZXh0ID0gJycgKyByZW1haW5pbmdBcmd1bWVudCwgIC8vL1xuICAgICAgICAgIGpzeFRleHRFbGVtZW50ID0gbmV3IFRleHRFbGVtZW50KHRleHQpO1xuXG4gICAgICBjaGlsZCA9IGpzeFRleHRFbGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pO1xuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=