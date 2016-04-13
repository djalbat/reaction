'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    Element = easyui.Element;

var ReactClass = require('./reactClass'),
    JSXElement = require('./jsxElement'),
    JSXTextElement = require('./jsxTextElement'),
    JSXRenderedElement = require('./jsxRenderedElement');

var React = function () {
  function React() {
    _classCallCheck(this, React);
  }

  _createClass(React, null, [{
    key: 'createClass',
    value: function createClass(properties) {
      return ReactClass.fromProperties(properties);
    }
  }, {
    key: 'createElement',
    value: function createElement(reactClassOrElementName) {
      var properties = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      if (reactClassOrElementName === undefined) {
        return undefined;
      }

      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var jsxElement = undefined,
          childJSXElements = childJSXElementsFromRemainingArguments.apply(null, remainingArguments);

      var elementName, elementHTML, element;

      if (typeof reactClassOrElementName === 'string') {
        elementName = reactClassOrElementName;

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

      jsxElement = new JSXRenderedElement(reactClass, properties, childJSXElements);

      return jsxElement;
    }
  }]);

  return React;
}();

function childJSXElementsFromRemainingArguments() {
  var childJSXElements,
      remainingArguments = Array.prototype.slice.call(arguments),
      ///
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSSxTQUFTLFFBQVEsUUFBUixDQUFUO0lBQ0EsVUFBVSxPQUFPLE9BQVA7O0FBRWQsSUFBSSxhQUFhLFFBQVEsY0FBUixDQUFiO0lBQ0EsYUFBYSxRQUFRLGNBQVIsQ0FBYjtJQUNBLGlCQUFpQixRQUFRLGtCQUFSLENBQWpCO0lBQ0EscUJBQXFCLFFBQVEsc0JBQVIsQ0FBckI7O0lBRUU7Ozs7Ozs7Z0NBQ2UsWUFBWTtBQUFFLGFBQU8sV0FBVyxjQUFYLENBQTBCLFVBQTFCLENBQVAsQ0FBRjs7OztrQ0FFVix5QkFBaUU7VUFBeEMsbUVBQWEsa0JBQTJCOztBQUNwRixVQUFJLDRCQUE0QixTQUE1QixFQUF1QztBQUN6QyxlQUFPLFNBQVAsQ0FEeUM7T0FBM0M7O3dDQURnRTs7T0FBb0I7O0FBS3BGLFVBQUksYUFBYSxTQUFiO1VBQ0EsbUJBQW1CLHVDQUF1QyxLQUF2QyxDQUE2QyxJQUE3QyxFQUFtRCxrQkFBbkQsQ0FBbkIsQ0FOZ0Y7O0FBUXBGLFVBQUksV0FBSixFQUNJLFdBREosRUFFSSxPQUZKLENBUm9GOztBQVlwRixVQUFJLE9BQU8sdUJBQVAsS0FBbUMsUUFBbkMsRUFBNkM7QUFDL0Msc0JBQWMsdUJBQWQsQ0FEK0M7O0FBRy9DLHFCQUFhLElBQUksVUFBSixDQUFlLFdBQWYsRUFBNEIsVUFBNUIsRUFBd0MsZ0JBQXhDLENBQWIsQ0FIK0M7O0FBSy9DLGVBQU8sVUFBUCxDQUwrQztPQUFqRDs7QUFRQSxVQUFJLGFBQWEsdUJBQWI7O0FBQ0EsZUFBUyxXQUFXLFNBQVgsRUFBVCxDQXJCZ0Y7O0FBdUJwRixVQUFJLFdBQVcsU0FBWCxFQUFzQjtBQUN4QixZQUFJLGNBQWMsV0FBVyxjQUFYLEVBQWQsQ0FEb0I7O0FBR3hCLHNCQUFjLFdBQWQ7O0FBSHdCLGtCQUt4QixHQUFhLElBQUksVUFBSixDQUFlLFdBQWYsRUFBNEIsVUFBNUIsRUFBd0MsZ0JBQXhDLENBQWIsQ0FMd0I7O0FBT3hCLGVBQU8sVUFBUCxDQVB3QjtPQUExQjs7QUFVQSxtQkFBYSxJQUFJLGtCQUFKLENBQXVCLFVBQXZCLEVBQW1DLFVBQW5DLEVBQStDLGdCQUEvQyxDQUFiLENBakNvRjs7QUFtQ3BGLGFBQU8sVUFBUCxDQW5Db0Y7Ozs7U0FIbEY7OztBQTBDTixTQUFTLHNDQUFULEdBQWtEO0FBQ2hELE1BQUksZ0JBQUo7TUFDSSxxQkFBcUIsTUFBTSxTQUFOLENBQWdCLEtBQWhCLENBQXNCLElBQXRCLENBQTJCLFNBQTNCLENBQXJCOztBQUNBLDJCQUF5QixNQUFNLGtCQUFOLENBQXpCLENBSDRDOztBQUtoRCxNQUFJLEtBQUosRUFBVyxFQUFYLE1BRU8sSUFBSSwyQkFBMkIsU0FBM0IsRUFBc0M7QUFDL0MsdUJBQW1CLEVBQW5CLENBRCtDO0dBQTFDLE1BRUEsSUFBSSxrQ0FBa0MsS0FBbEMsRUFBeUM7QUFDbEQsdUJBQW1CLHNCQUFuQjtBQURrRCxHQUE3QyxNQUVBO0FBQ0wseUJBQW1CLG1CQUFtQixHQUFuQixDQUF1QixVQUFTLGlCQUFULEVBQTRCO0FBQ3BFLFlBQUksT0FBTyxpQkFBUCxLQUE2QixRQUE3QixFQUF1QztBQUN6QyxjQUFJLE9BQU8saUJBQVA7O0FBQ0EsZ0NBQXNCLElBQUksY0FBSixDQUFtQixJQUFuQixDQUF0QixDQUZxQzs7QUFJekMsaUJBQU8sbUJBQVAsQ0FKeUM7U0FBM0MsTUFLTztBQUNMLGNBQUksa0JBQWtCLGlCQUFsQjs7QUFEQyxpQkFHRSxlQUFQLENBSEs7U0FMUDtPQUR3QyxDQUExQyxDQURLO0tBRkE7O0FBaUJQLFNBQU8sZ0JBQVAsQ0ExQmdEO0NBQWxEOztBQTZCQSxTQUFTLEtBQVQsQ0FBZSxLQUFmLEVBQXNCO0FBQUUsU0FBTyxNQUFNLENBQU4sQ0FBUCxDQUFGO0NBQXRCOztBQUVBLE9BQU8sT0FBUCxHQUFpQixLQUFqQiIsImZpbGUiOiJyZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgIEVsZW1lbnQgPSBlYXN5dWkuRWxlbWVudDtcblxudmFyIFJlYWN0Q2xhc3MgPSByZXF1aXJlKCcuL3JlYWN0Q2xhc3MnKSxcbiAgICBKU1hFbGVtZW50ID0gcmVxdWlyZSgnLi9qc3hFbGVtZW50JyksXG4gICAgSlNYVGV4dEVsZW1lbnQgPSByZXF1aXJlKCcuL2pzeFRleHRFbGVtZW50JyksXG4gICAgSlNYUmVuZGVyZWRFbGVtZW50ID0gcmVxdWlyZSgnLi9qc3hSZW5kZXJlZEVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3Qge1xuICBzdGF0aWMgY3JlYXRlQ2xhc3MocHJvcGVydGllcykgeyByZXR1cm4gUmVhY3RDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTsgfVxuXG4gIHN0YXRpYyBjcmVhdGVFbGVtZW50KHJlYWN0Q2xhc3NPckVsZW1lbnROYW1lLCBwcm9wZXJ0aWVzID0ge30sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChyZWFjdENsYXNzT3JFbGVtZW50TmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHZhciBqc3hFbGVtZW50ID0gdW5kZWZpbmVkLFxuICAgICAgICBjaGlsZEpTWEVsZW1lbnRzID0gY2hpbGRKU1hFbGVtZW50c0Zyb21SZW1haW5pbmdBcmd1bWVudHMuYXBwbHkobnVsbCwgcmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHZhciBlbGVtZW50TmFtZSxcbiAgICAgICAgZWxlbWVudEhUTUwsXG4gICAgICAgIGVsZW1lbnQ7XG5cbiAgICBpZiAodHlwZW9mIHJlYWN0Q2xhc3NPckVsZW1lbnROYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgZWxlbWVudE5hbWUgPSByZWFjdENsYXNzT3JFbGVtZW50TmFtZTtcblxuICAgICAganN4RWxlbWVudCA9IG5ldyBKU1hFbGVtZW50KGVsZW1lbnROYW1lLCBwcm9wZXJ0aWVzLCBjaGlsZEpTWEVsZW1lbnRzKTtcblxuICAgICAgcmV0dXJuIGpzeEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgdmFyIHJlYWN0Q2xhc3MgPSByZWFjdENsYXNzT3JFbGVtZW50TmFtZSwgLy8vXG4gICAgICAgIHJlbmRlciA9IHJlYWN0Q2xhc3MuZ2V0UmVuZGVyKCk7XG5cbiAgICBpZiAocmVuZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHJlYWN0Q2xhc3MuZ2V0RGlzcGxheU5hbWUoKTtcblxuICAgICAgZWxlbWVudE5hbWUgPSBkaXNwbGF5TmFtZTsgIC8vL1xuXG4gICAgICBqc3hFbGVtZW50ID0gbmV3IEpTWEVsZW1lbnQoZWxlbWVudE5hbWUsIHByb3BlcnRpZXMsIGNoaWxkSlNYRWxlbWVudHMpO1xuXG4gICAgICByZXR1cm4ganN4RWxlbWVudDtcbiAgICB9XG5cbiAgICBqc3hFbGVtZW50ID0gbmV3IEpTWFJlbmRlcmVkRWxlbWVudChyZWFjdENsYXNzLCBwcm9wZXJ0aWVzLCBjaGlsZEpTWEVsZW1lbnRzKTtcbiAgICBcbiAgICByZXR1cm4ganN4RWxlbWVudDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGlsZEpTWEVsZW1lbnRzRnJvbVJlbWFpbmluZ0FyZ3VtZW50cygpIHtcbiAgdmFyIGNoaWxkSlNYRWxlbWVudHMsXG4gICAgICByZW1haW5pbmdBcmd1bWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLCAvLy9cbiAgICAgIGZpcnN0UmVtYWluaW5nQXJndW1lbnQgPSBmaXJzdChyZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gIGlmIChmYWxzZSkge1xuICAgIFxuICB9IGVsc2UgaWYgKGZpcnN0UmVtYWluaW5nQXJndW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgIGNoaWxkSlNYRWxlbWVudHMgPSBbXTtcbiAgfSBlbHNlIGlmIChmaXJzdFJlbWFpbmluZ0FyZ3VtZW50IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICBjaGlsZEpTWEVsZW1lbnRzID0gZmlyc3RSZW1haW5pbmdBcmd1bWVudDsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNoaWxkSlNYRWxlbWVudHMgPSByZW1haW5pbmdBcmd1bWVudHMubWFwKGZ1bmN0aW9uKHJlbWFpbmluZ0FyZ3VtZW50KSB7XG4gICAgICBpZiAodHlwZW9mIHJlbWFpbmluZ0FyZ3VtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgdGV4dCA9IHJlbWFpbmluZ0FyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICBjaGlsZEpTWFRleHRFbGVtZW50ID0gbmV3IEpTWFRleHRFbGVtZW50KHRleHQpO1xuXG4gICAgICAgIHJldHVybiBjaGlsZEpTWFRleHRFbGVtZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGNoaWxkSlNYRWxlbWVudCA9IHJlbWFpbmluZ0FyZ3VtZW50OyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIGNoaWxkSlNYRWxlbWVudDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZEpTWEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcbiJdfQ==
