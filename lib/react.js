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
      } else {
        var reactClass = reactClassOrElementName,
            ///
        render = reactClass.getRender();

        if (render === undefined) {
          var displayName = reactClass.getDisplayName();

          elementName = displayName; ///

          jsxElement = new JSXElement(elementName, properties, childJSXElements);

          return jsxElement;
        } else {
          jsxElement = new JSXReactElement(reactClass, properties);
        }
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
    debugger;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSSxhQUFhLFFBQVEsY0FBUixDQUFiO0lBQ0EsYUFBYSxRQUFRLGNBQVIsQ0FBYjtJQUNBLGlCQUFpQixRQUFRLGtCQUFSLENBQWpCO0lBQ0Esa0JBQWtCLFFBQVEsbUJBQVIsQ0FBbEI7O0lBRUU7Ozs7Ozs7Z0NBQ2UsWUFBWTtBQUM3QixVQUFJLGFBQWEsV0FBVyxjQUFYLENBQTBCLFVBQTFCLENBQWIsQ0FEeUI7O0FBRzdCLGFBQU8sVUFBUCxDQUg2Qjs7OztrQ0FNVix5QkFBeUIsWUFBbUM7QUFDL0UsVUFBSSw0QkFBNEIsU0FBNUIsRUFBdUM7QUFDekMsZUFBTyxTQUFQLENBRHlDO09BQTNDOzt3Q0FEMkQ7O09BQW9COztBQUsvRSxVQUFJLGFBQWEsU0FBYjtVQUNBLG1CQUFtQix1Q0FBdUMsS0FBdkMsQ0FBNkMsSUFBN0MsRUFBbUQsa0JBQW5ELENBQW5CLENBTjJFOztBQVEvRSxVQUFJLE9BQU8sdUJBQVAsS0FBbUMsUUFBbkMsRUFBNkM7QUFDL0MsWUFBSSxjQUFjLHVCQUFkOztBQUQyQyxrQkFHL0MsR0FBYSxJQUFJLFVBQUosQ0FBZSxXQUFmLEVBQTRCLFVBQTVCLEVBQXdDLGdCQUF4QyxDQUFiLENBSCtDO09BQWpELE1BSU87QUFDTCxZQUFJLGFBQWEsdUJBQWI7O0FBQ0EsaUJBQVMsV0FBVyxTQUFYLEVBQVQsQ0FGQzs7QUFJTCxZQUFJLFdBQVcsU0FBWCxFQUFzQjtBQUN4QixjQUFJLGNBQWMsV0FBVyxjQUFYLEVBQWQsQ0FEb0I7O0FBR3hCLHdCQUFjLFdBQWQ7O0FBSHdCLG9CQUt4QixHQUFhLElBQUksVUFBSixDQUFlLFdBQWYsRUFBNEIsVUFBNUIsRUFBd0MsZ0JBQXhDLENBQWIsQ0FMd0I7O0FBT3hCLGlCQUFPLFVBQVAsQ0FQd0I7U0FBMUIsTUFRTztBQUNMLHVCQUFhLElBQUksZUFBSixDQUFvQixVQUFwQixFQUFnQyxVQUFoQyxDQUFiLENBREs7U0FSUDtPQVJGOztBQXNCQSxhQUFPLFVBQVAsQ0E5QitFOzs7O1NBUDdFOzs7QUF5Q04sU0FBUyxzQ0FBVCxHQUFrRDtBQUNoRCxNQUFJLGdCQUFKO01BQ0kscUJBQXFCLE1BQU0sU0FBTixDQUFnQixLQUFoQixDQUFzQixJQUF0QixDQUEyQixTQUEzQixDQUFyQjtNQUNBLHlCQUF5QixNQUFNLGtCQUFOLENBQXpCLENBSDRDOztBQUtoRCxNQUFJLEtBQUosRUFBVyxFQUFYLE1BRU8sSUFBSSwyQkFBMkIsU0FBM0IsRUFBc0M7QUFDL0MsdUJBQW1CLEVBQW5CLENBRCtDO0dBQTFDLE1BRUEsSUFBSSxrQ0FBa0MsS0FBbEMsRUFBeUM7QUFDbEQsYUFEa0Q7O0FBR2xELHVCQUFtQixzQkFBbkI7QUFIa0QsR0FBN0MsTUFJQTtBQUNMLHlCQUFtQixtQkFBbUIsR0FBbkIsQ0FBdUIsVUFBUyxpQkFBVCxFQUE0QjtBQUNwRSxZQUFJLE9BQU8saUJBQVAsS0FBNkIsUUFBN0IsRUFBdUM7QUFDekMsY0FBSSxPQUFPLGlCQUFQOztBQUNBLGdDQUFzQixJQUFJLGNBQUosQ0FBbUIsSUFBbkIsQ0FBdEIsQ0FGcUM7O0FBSXpDLGlCQUFPLG1CQUFQLENBSnlDO1NBQTNDLE1BS087QUFDTCxjQUFJLGtCQUFrQixpQkFBbEI7O0FBREMsaUJBR0UsZUFBUCxDQUhLO1NBTFA7T0FEd0MsQ0FBMUMsQ0FESztLQUpBOztBQW1CUCxTQUFPLGdCQUFQLENBNUJnRDtDQUFsRDs7QUErQkEsU0FBUyxLQUFULENBQWUsS0FBZixFQUFzQjtBQUFFLFNBQU8sTUFBTSxDQUFOLENBQVAsQ0FBRjtDQUF0Qjs7QUFFQSxPQUFPLE9BQVAsR0FBaUIsS0FBakIiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdENsYXNzID0gcmVxdWlyZSgnLi9yZWFjdENsYXNzJyksXG4gICAgSlNYRWxlbWVudCA9IHJlcXVpcmUoJy4vanN4RWxlbWVudCcpLFxuICAgIEpTWFRleHRFbGVtZW50ID0gcmVxdWlyZSgnLi9qc3hUZXh0RWxlbWVudCcpLFxuICAgIEpTWFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4vanN4UmVhY3RFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0IHtcbiAgc3RhdGljIGNyZWF0ZUNsYXNzKHByb3BlcnRpZXMpIHtcbiAgICB2YXIgcmVhY3RDbGFzcyA9IFJlYWN0Q2xhc3MuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gcmVhY3RDbGFzcztcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVFbGVtZW50KHJlYWN0Q2xhc3NPckVsZW1lbnROYW1lLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAocmVhY3RDbGFzc09yRWxlbWVudE5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB2YXIganN4RWxlbWVudCA9IHVuZGVmaW5lZCxcbiAgICAgICAgY2hpbGRKU1hFbGVtZW50cyA9IGNoaWxkSlNYRWxlbWVudHNGcm9tUmVtYWluaW5nQXJndW1lbnRzLmFwcGx5KG51bGwsIHJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBpZiAodHlwZW9mIHJlYWN0Q2xhc3NPckVsZW1lbnROYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIGVsZW1lbnROYW1lID0gcmVhY3RDbGFzc09yRWxlbWVudE5hbWU7ICAvLy9cblxuICAgICAganN4RWxlbWVudCA9IG5ldyBKU1hFbGVtZW50KGVsZW1lbnROYW1lLCBwcm9wZXJ0aWVzLCBjaGlsZEpTWEVsZW1lbnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJlYWN0Q2xhc3MgPSByZWFjdENsYXNzT3JFbGVtZW50TmFtZSwgLy8vXG4gICAgICAgICAgcmVuZGVyID0gcmVhY3RDbGFzcy5nZXRSZW5kZXIoKTtcblxuICAgICAgaWYgKHJlbmRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHJlYWN0Q2xhc3MuZ2V0RGlzcGxheU5hbWUoKTtcblxuICAgICAgICBlbGVtZW50TmFtZSA9IGRpc3BsYXlOYW1lOyAgLy8vXG5cbiAgICAgICAganN4RWxlbWVudCA9IG5ldyBKU1hFbGVtZW50KGVsZW1lbnROYW1lLCBwcm9wZXJ0aWVzLCBjaGlsZEpTWEVsZW1lbnRzKTtcblxuICAgICAgICByZXR1cm4ganN4RWxlbWVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGpzeEVsZW1lbnQgPSBuZXcgSlNYUmVhY3RFbGVtZW50KHJlYWN0Q2xhc3MsIHByb3BlcnRpZXMpO1xuICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIGpzeEVsZW1lbnQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hpbGRKU1hFbGVtZW50c0Zyb21SZW1haW5pbmdBcmd1bWVudHMoKSB7XG4gIHZhciBjaGlsZEpTWEVsZW1lbnRzLFxuICAgICAgcmVtYWluaW5nQXJndW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxcbiAgICAgIGZpcnN0UmVtYWluaW5nQXJndW1lbnQgPSBmaXJzdChyZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gIGlmIChmYWxzZSkge1xuICAgIFxuICB9IGVsc2UgaWYgKGZpcnN0UmVtYWluaW5nQXJndW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgIGNoaWxkSlNYRWxlbWVudHMgPSBbXTtcbiAgfSBlbHNlIGlmIChmaXJzdFJlbWFpbmluZ0FyZ3VtZW50IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICBkZWJ1Z2dlclxuXG4gICAgY2hpbGRKU1hFbGVtZW50cyA9IGZpcnN0UmVtYWluaW5nQXJndW1lbnQ7ICAvLy9cbiAgfSBlbHNlIHtcbiAgICBjaGlsZEpTWEVsZW1lbnRzID0gcmVtYWluaW5nQXJndW1lbnRzLm1hcChmdW5jdGlvbihyZW1haW5pbmdBcmd1bWVudCkge1xuICAgICAgaWYgKHR5cGVvZiByZW1haW5pbmdBcmd1bWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIHRleHQgPSByZW1haW5pbmdBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgY2hpbGRKU1hUZXh0RWxlbWVudCA9IG5ldyBKU1hUZXh0RWxlbWVudCh0ZXh0KTtcblxuICAgICAgICByZXR1cm4gY2hpbGRKU1hUZXh0RWxlbWVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjaGlsZEpTWEVsZW1lbnQgPSByZW1haW5pbmdBcmd1bWVudDsgIC8vL1xuXG4gICAgICAgIHJldHVybiBjaGlsZEpTWEVsZW1lbnQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gY2hpbGRKU1hFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG4iXX0=
