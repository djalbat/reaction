'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactClass = require('./reactClass'),
    JSXElement = require('./jsxElement'),
    JSXTextElement = require('./jsxTextElement'),
    JSXReactElement = require('./jsxReactElement');

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

      if (typeof reactClassOrElementName === 'string') {
        var elementName = reactClassOrElementName; ///

        jsxElement = new JSXElement(elementName, properties, childJSXElements);

        return jsxElement;
      }

      var reactClass = reactClassOrElementName,
          ///
      render = reactClass.getRender();

      if (render === undefined) {
        var displayName = reactClass.getDisplayName();
        elementName = displayName; ///

        jsxElement = new JSXElement(elementName, properties, childJSXElements);

        return jsxElement;
      }

      {
        jsxElement = new JSXReactElement(reactClass, properties, childJSXElements);

        return jsxElement;
      }
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
        if (typeof remainingArgument === 'string') {
          var text = remainingArgument,
              ///
          childJSXTextElement = new JSXTextElement(text);

          return childJSXTextElement;
        } else {
          var childJSXElement = remainingArgument; ///

          return childJSXElement;
        }
      });
    }

  return childJSXElements;
}

function first(array) {
  return array[0];
}

module.exports = React;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSSxhQUFhLFFBQVEsY0FBUixDQUFiO0lBQ0EsYUFBYSxRQUFRLGNBQVIsQ0FBYjtJQUNBLGlCQUFpQixRQUFRLGtCQUFSLENBQWpCO0lBQ0Esa0JBQWtCLFFBQVEsbUJBQVIsQ0FBbEI7O0lBRUU7Ozs7Ozs7Z0NBQ2UsWUFBWTtBQUM3QixVQUFJLGFBQWEsV0FBVyxjQUFYLENBQTBCLFVBQTFCLENBQWIsQ0FEeUI7O0FBRzdCLGFBQU8sVUFBUCxDQUg2Qjs7OztrQ0FNVix5QkFBeUIsWUFBbUM7QUFDL0UsVUFBSSw0QkFBNEIsU0FBNUIsRUFBdUM7QUFDekMsZUFBTyxTQUFQLENBRHlDO09BQTNDOzt3Q0FEMkQ7O09BQW9COztBQUsvRSxVQUFJLGFBQWEsU0FBYjtVQUNBLG1CQUFtQix1Q0FBdUMsS0FBdkMsQ0FBNkMsSUFBN0MsRUFBbUQsa0JBQW5ELENBQW5CLENBTjJFOztBQVEvRSxVQUFJLE9BQU8sdUJBQVAsS0FBbUMsUUFBbkMsRUFBNkM7QUFDL0MsWUFBSSxjQUFjLHVCQUFkOztBQUQyQyxrQkFHL0MsR0FBYSxJQUFJLFVBQUosQ0FBZSxXQUFmLEVBQTRCLFVBQTVCLEVBQXdDLGdCQUF4QyxDQUFiLENBSCtDOztBQUsvQyxlQUFPLFVBQVAsQ0FMK0M7T0FBakQ7O0FBUUEsVUFBSSxhQUFhLHVCQUFiOztBQUNBLGVBQVMsV0FBVyxTQUFYLEVBQVQsQ0FqQjJFOztBQW1CL0UsVUFBSSxXQUFXLFNBQVgsRUFBc0I7QUFDeEIsWUFBSSxjQUFjLFdBQVcsY0FBWCxFQUFkLENBRG9CO0FBRXBCLHNCQUFjLFdBQWQ7O0FBRm9CLGtCQUl4QixHQUFhLElBQUksVUFBSixDQUFlLFdBQWYsRUFBNEIsVUFBNUIsRUFBd0MsZ0JBQXhDLENBQWIsQ0FKd0I7O0FBTXhCLGVBQU8sVUFBUCxDQU53QjtPQUExQjs7QUFTQTtBQUNFLHFCQUFhLElBQUksZUFBSixDQUFvQixVQUFwQixFQUFnQyxVQUFoQyxFQUE0QyxnQkFBNUMsQ0FBYixDQURGOztBQUdFLGVBQU8sVUFBUCxDQUhGO09BNUIrRTs7OztTQVA3RTs7O0FBMkNOLFNBQVMsc0NBQVQsR0FBa0Q7QUFDaEQsTUFBSSxnQkFBSjtNQUNJLHFCQUFxQixNQUFNLFNBQU4sQ0FBZ0IsS0FBaEIsQ0FBc0IsSUFBdEIsQ0FBMkIsU0FBM0IsQ0FBckI7TUFDQSx5QkFBeUIsTUFBTSxrQkFBTixDQUF6QixDQUg0Qzs7QUFLaEQsTUFBSSxLQUFKLEVBQVcsRUFBWCxNQUVPLElBQUksMkJBQTJCLFNBQTNCLEVBQXNDO0FBQy9DLHVCQUFtQixFQUFuQixDQUQrQztHQUExQyxNQUVBLElBQUksa0NBQWtDLEtBQWxDLEVBQXlDO0FBQ2xELHVCQUFtQixzQkFBbkI7QUFEa0QsR0FBN0MsTUFFQTtBQUNMLHlCQUFtQixtQkFBbUIsR0FBbkIsQ0FBdUIsVUFBUyxpQkFBVCxFQUE0QjtBQUNwRSxZQUFJLE9BQU8saUJBQVAsS0FBNkIsUUFBN0IsRUFBdUM7QUFDekMsY0FBSSxPQUFPLGlCQUFQOztBQUNBLGdDQUFzQixJQUFJLGNBQUosQ0FBbUIsSUFBbkIsQ0FBdEIsQ0FGcUM7O0FBSXpDLGlCQUFPLG1CQUFQLENBSnlDO1NBQTNDLE1BS087QUFDTCxjQUFJLGtCQUFrQixpQkFBbEI7O0FBREMsaUJBR0UsZUFBUCxDQUhLO1NBTFA7T0FEd0MsQ0FBMUMsQ0FESztLQUZBOztBQWlCUCxTQUFPLGdCQUFQLENBMUJnRDtDQUFsRDs7QUE2QkEsU0FBUyxLQUFULENBQWUsS0FBZixFQUFzQjtBQUFFLFNBQU8sTUFBTSxDQUFOLENBQVAsQ0FBRjtDQUF0Qjs7QUFFQSxPQUFPLE9BQVAsR0FBaUIsS0FBakIiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdENsYXNzID0gcmVxdWlyZSgnLi9yZWFjdENsYXNzJyksXG4gICAgSlNYRWxlbWVudCA9IHJlcXVpcmUoJy4vanN4RWxlbWVudCcpLFxuICAgIEpTWFRleHRFbGVtZW50ID0gcmVxdWlyZSgnLi9qc3hUZXh0RWxlbWVudCcpLFxuICAgIEpTWFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4vanN4UmVhY3RFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0IHtcbiAgc3RhdGljIGNyZWF0ZUNsYXNzKHByb3BlcnRpZXMpIHtcbiAgICB2YXIgcmVhY3RDbGFzcyA9IFJlYWN0Q2xhc3MuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gcmVhY3RDbGFzcztcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVFbGVtZW50KHJlYWN0Q2xhc3NPckVsZW1lbnROYW1lLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAocmVhY3RDbGFzc09yRWxlbWVudE5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB2YXIganN4RWxlbWVudCA9IHVuZGVmaW5lZCxcbiAgICAgICAgY2hpbGRKU1hFbGVtZW50cyA9IGNoaWxkSlNYRWxlbWVudHNGcm9tUmVtYWluaW5nQXJndW1lbnRzLmFwcGx5KG51bGwsIHJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBpZiAodHlwZW9mIHJlYWN0Q2xhc3NPckVsZW1lbnROYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIGVsZW1lbnROYW1lID0gcmVhY3RDbGFzc09yRWxlbWVudE5hbWU7ICAvLy9cblxuICAgICAganN4RWxlbWVudCA9IG5ldyBKU1hFbGVtZW50KGVsZW1lbnROYW1lLCBwcm9wZXJ0aWVzLCBjaGlsZEpTWEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIGpzeEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgdmFyIHJlYWN0Q2xhc3MgPSByZWFjdENsYXNzT3JFbGVtZW50TmFtZSwgLy8vXG4gICAgICAgIHJlbmRlciA9IHJlYWN0Q2xhc3MuZ2V0UmVuZGVyKCk7XG5cbiAgICBpZiAocmVuZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHJlYWN0Q2xhc3MuZ2V0RGlzcGxheU5hbWUoKTtcbiAgICAgICAgICBlbGVtZW50TmFtZSA9IGRpc3BsYXlOYW1lOyAgLy8vXG5cbiAgICAgIGpzeEVsZW1lbnQgPSBuZXcgSlNYRWxlbWVudChlbGVtZW50TmFtZSwgcHJvcGVydGllcywgY2hpbGRKU1hFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIHJldHVybiBqc3hFbGVtZW50O1xuICAgIH0gXG4gICAgXG4gICAge1xuICAgICAganN4RWxlbWVudCA9IG5ldyBKU1hSZWFjdEVsZW1lbnQocmVhY3RDbGFzcywgcHJvcGVydGllcywgY2hpbGRKU1hFbGVtZW50cyk7XG5cbiAgICAgIHJldHVybiBqc3hFbGVtZW50O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGlsZEpTWEVsZW1lbnRzRnJvbVJlbWFpbmluZ0FyZ3VtZW50cygpIHtcbiAgdmFyIGNoaWxkSlNYRWxlbWVudHMsXG4gICAgICByZW1haW5pbmdBcmd1bWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLFxuICAgICAgZmlyc3RSZW1haW5pbmdBcmd1bWVudCA9IGZpcnN0KHJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgaWYgKGZhbHNlKSB7XG4gICAgXG4gIH0gZWxzZSBpZiAoZmlyc3RSZW1haW5pbmdBcmd1bWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2hpbGRKU1hFbGVtZW50cyA9IFtdO1xuICB9IGVsc2UgaWYgKGZpcnN0UmVtYWluaW5nQXJndW1lbnQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIGNoaWxkSlNYRWxlbWVudHMgPSBmaXJzdFJlbWFpbmluZ0FyZ3VtZW50OyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY2hpbGRKU1hFbGVtZW50cyA9IHJlbWFpbmluZ0FyZ3VtZW50cy5tYXAoZnVuY3Rpb24ocmVtYWluaW5nQXJndW1lbnQpIHtcbiAgICAgIGlmICh0eXBlb2YgcmVtYWluaW5nQXJndW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciB0ZXh0ID0gcmVtYWluaW5nQXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIGNoaWxkSlNYVGV4dEVsZW1lbnQgPSBuZXcgSlNYVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkSlNYVGV4dEVsZW1lbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY2hpbGRKU1hFbGVtZW50ID0gcmVtYWluaW5nQXJndW1lbnQ7ICAvLy9cblxuICAgICAgICByZXR1cm4gY2hpbGRKU1hFbGVtZW50O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkSlNYRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuIl19
