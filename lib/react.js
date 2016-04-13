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
        jsxElement = new JSXReactElement(reactClass, properties);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSSxhQUFhLFFBQVEsY0FBUixDQUFiO0lBQ0EsYUFBYSxRQUFRLGNBQVIsQ0FBYjtJQUNBLGlCQUFpQixRQUFRLGtCQUFSLENBQWpCO0lBQ0Esa0JBQWtCLFFBQVEsbUJBQVIsQ0FBbEI7O0lBRUU7Ozs7Ozs7Z0NBQ2UsWUFBWTtBQUM3QixVQUFJLGFBQWEsV0FBVyxjQUFYLENBQTBCLFVBQTFCLENBQWIsQ0FEeUI7O0FBRzdCLGFBQU8sVUFBUCxDQUg2Qjs7OztrQ0FNVix5QkFBeUIsWUFBbUM7QUFDL0UsVUFBSSw0QkFBNEIsU0FBNUIsRUFBdUM7QUFDekMsZUFBTyxTQUFQLENBRHlDO09BQTNDOzt3Q0FEMkQ7O09BQW9COztBQUsvRSxVQUFJLGFBQWEsU0FBYjtVQUNBLG1CQUFtQix1Q0FBdUMsS0FBdkMsQ0FBNkMsSUFBN0MsRUFBbUQsa0JBQW5ELENBQW5CLENBTjJFOztBQVEvRSxVQUFJLE9BQU8sdUJBQVAsS0FBbUMsUUFBbkMsRUFBNkM7QUFDL0MsWUFBSSxjQUFjLHVCQUFkOztBQUQyQyxrQkFHL0MsR0FBYSxJQUFJLFVBQUosQ0FBZSxXQUFmLEVBQTRCLFVBQTVCLEVBQXdDLGdCQUF4QyxDQUFiLENBSCtDOztBQUsvQyxlQUFPLFVBQVAsQ0FMK0M7T0FBakQ7O0FBUUEsVUFBSSxhQUFhLHVCQUFiOztBQUNBLGVBQVMsV0FBVyxTQUFYLEVBQVQsQ0FqQjJFOztBQW1CL0UsVUFBSSxXQUFXLFNBQVgsRUFBc0I7QUFDeEIsWUFBSSxjQUFjLFdBQVcsY0FBWCxFQUFkLENBRG9CO0FBRXBCLHNCQUFjLFdBQWQ7O0FBRm9CLGtCQUl4QixHQUFhLElBQUksVUFBSixDQUFlLFdBQWYsRUFBNEIsVUFBNUIsRUFBd0MsZ0JBQXhDLENBQWIsQ0FKd0I7O0FBTXhCLGVBQU8sVUFBUCxDQU53QjtPQUExQjs7QUFTQTtBQUNFLHFCQUFhLElBQUksZUFBSixDQUFvQixVQUFwQixFQUFnQyxVQUFoQyxDQUFiLENBREY7O0FBR0UsZUFBTyxVQUFQLENBSEY7T0E1QitFOzs7O1NBUDdFOzs7QUEyQ04sU0FBUyxzQ0FBVCxHQUFrRDtBQUNoRCxNQUFJLGdCQUFKO01BQ0kscUJBQXFCLE1BQU0sU0FBTixDQUFnQixLQUFoQixDQUFzQixJQUF0QixDQUEyQixTQUEzQixDQUFyQjtNQUNBLHlCQUF5QixNQUFNLGtCQUFOLENBQXpCLENBSDRDOztBQUtoRCxNQUFJLEtBQUosRUFBVyxFQUFYLE1BRU8sSUFBSSwyQkFBMkIsU0FBM0IsRUFBc0M7QUFDL0MsdUJBQW1CLEVBQW5CLENBRCtDO0dBQTFDLE1BRUEsSUFBSSxrQ0FBa0MsS0FBbEMsRUFBeUM7QUFDbEQsdUJBQW1CLHNCQUFuQjtBQURrRCxHQUE3QyxNQUVBO0FBQ0wseUJBQW1CLG1CQUFtQixHQUFuQixDQUF1QixVQUFTLGlCQUFULEVBQTRCO0FBQ3BFLFlBQUksT0FBTyxpQkFBUCxLQUE2QixRQUE3QixFQUF1QztBQUN6QyxjQUFJLE9BQU8saUJBQVA7O0FBQ0EsZ0NBQXNCLElBQUksY0FBSixDQUFtQixJQUFuQixDQUF0QixDQUZxQzs7QUFJekMsaUJBQU8sbUJBQVAsQ0FKeUM7U0FBM0MsTUFLTztBQUNMLGNBQUksa0JBQWtCLGlCQUFsQjs7QUFEQyxpQkFHRSxlQUFQLENBSEs7U0FMUDtPQUR3QyxDQUExQyxDQURLO0tBRkE7O0FBaUJQLFNBQU8sZ0JBQVAsQ0ExQmdEO0NBQWxEOztBQTZCQSxTQUFTLEtBQVQsQ0FBZSxLQUFmLEVBQXNCO0FBQUUsU0FBTyxNQUFNLENBQU4sQ0FBUCxDQUFGO0NBQXRCOztBQUVBLE9BQU8sT0FBUCxHQUFpQixLQUFqQiIsImZpbGUiOiJyZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0Q2xhc3MgPSByZXF1aXJlKCcuL3JlYWN0Q2xhc3MnKSxcbiAgICBKU1hFbGVtZW50ID0gcmVxdWlyZSgnLi9qc3hFbGVtZW50JyksXG4gICAgSlNYVGV4dEVsZW1lbnQgPSByZXF1aXJlKCcuL2pzeFRleHRFbGVtZW50JyksXG4gICAgSlNYUmVhY3RFbGVtZW50ID0gcmVxdWlyZSgnLi9qc3hSZWFjdEVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3Qge1xuICBzdGF0aWMgY3JlYXRlQ2xhc3MocHJvcGVydGllcykge1xuICAgIHZhciByZWFjdENsYXNzID0gUmVhY3RDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiByZWFjdENsYXNzO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUVsZW1lbnQocmVhY3RDbGFzc09yRWxlbWVudE5hbWUsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChyZWFjdENsYXNzT3JFbGVtZW50TmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHZhciBqc3hFbGVtZW50ID0gdW5kZWZpbmVkLFxuICAgICAgICBjaGlsZEpTWEVsZW1lbnRzID0gY2hpbGRKU1hFbGVtZW50c0Zyb21SZW1haW5pbmdBcmd1bWVudHMuYXBwbHkobnVsbCwgcmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIGlmICh0eXBlb2YgcmVhY3RDbGFzc09yRWxlbWVudE5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgZWxlbWVudE5hbWUgPSByZWFjdENsYXNzT3JFbGVtZW50TmFtZTsgIC8vL1xuXG4gICAgICBqc3hFbGVtZW50ID0gbmV3IEpTWEVsZW1lbnQoZWxlbWVudE5hbWUsIHByb3BlcnRpZXMsIGNoaWxkSlNYRWxlbWVudHMpO1xuICAgICAgXG4gICAgICByZXR1cm4ganN4RWxlbWVudDtcbiAgICB9XG5cbiAgICB2YXIgcmVhY3RDbGFzcyA9IHJlYWN0Q2xhc3NPckVsZW1lbnROYW1lLCAvLy9cbiAgICAgICAgcmVuZGVyID0gcmVhY3RDbGFzcy5nZXRSZW5kZXIoKTtcblxuICAgIGlmIChyZW5kZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gcmVhY3RDbGFzcy5nZXREaXNwbGF5TmFtZSgpO1xuICAgICAgICAgIGVsZW1lbnROYW1lID0gZGlzcGxheU5hbWU7ICAvLy9cblxuICAgICAganN4RWxlbWVudCA9IG5ldyBKU1hFbGVtZW50KGVsZW1lbnROYW1lLCBwcm9wZXJ0aWVzLCBjaGlsZEpTWEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIGpzeEVsZW1lbnQ7XG4gICAgfSBcbiAgICBcbiAgICB7XG4gICAgICBqc3hFbGVtZW50ID0gbmV3IEpTWFJlYWN0RWxlbWVudChyZWFjdENsYXNzLCBwcm9wZXJ0aWVzKTtcblxuICAgICAgcmV0dXJuIGpzeEVsZW1lbnQ7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoaWxkSlNYRWxlbWVudHNGcm9tUmVtYWluaW5nQXJndW1lbnRzKCkge1xuICB2YXIgY2hpbGRKU1hFbGVtZW50cyxcbiAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksXG4gICAgICBmaXJzdFJlbWFpbmluZ0FyZ3VtZW50ID0gZmlyc3QocmVtYWluaW5nQXJndW1lbnRzKTtcblxuICBpZiAoZmFsc2UpIHtcbiAgICBcbiAgfSBlbHNlIGlmIChmaXJzdFJlbWFpbmluZ0FyZ3VtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICBjaGlsZEpTWEVsZW1lbnRzID0gW107XG4gIH0gZWxzZSBpZiAoZmlyc3RSZW1haW5pbmdBcmd1bWVudCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgY2hpbGRKU1hFbGVtZW50cyA9IGZpcnN0UmVtYWluaW5nQXJndW1lbnQ7ICAvLy9cbiAgfSBlbHNlIHtcbiAgICBjaGlsZEpTWEVsZW1lbnRzID0gcmVtYWluaW5nQXJndW1lbnRzLm1hcChmdW5jdGlvbihyZW1haW5pbmdBcmd1bWVudCkge1xuICAgICAgaWYgKHR5cGVvZiByZW1haW5pbmdBcmd1bWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIHRleHQgPSByZW1haW5pbmdBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgY2hpbGRKU1hUZXh0RWxlbWVudCA9IG5ldyBKU1hUZXh0RWxlbWVudCh0ZXh0KTtcblxuICAgICAgICByZXR1cm4gY2hpbGRKU1hUZXh0RWxlbWVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjaGlsZEpTWEVsZW1lbnQgPSByZW1haW5pbmdBcmd1bWVudDsgIC8vL1xuXG4gICAgICAgIHJldHVybiBjaGlsZEpTWEVsZW1lbnQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gY2hpbGRKU1hFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG4iXX0=
