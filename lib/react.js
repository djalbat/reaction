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
        elementHTML = '<' + elementName + '/>';
        element = Element.fromHTML(elementHTML);

        jsxElement = new JSXElement(element, properties, childJSXElements);

        return jsxElement;
      }

      var reactClass = reactClassOrElementName,
          ///
      render = reactClass.getRender();

      if (render === undefined) {
        var displayName = reactClass.getDisplayName();

        elementName = displayName; ///
        elementHTML = '<' + elementName + '/>';
        element = Element.fromHTML(elementHTML);

        jsxElement = new JSXElement(element, properties, childJSXElements);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSSxTQUFTLFFBQVEsUUFBUixDQUFUO0lBQ0EsVUFBVSxPQUFPLE9BQVA7O0FBRWQsSUFBSSxhQUFhLFFBQVEsY0FBUixDQUFiO0lBQ0EsYUFBYSxRQUFRLGNBQVIsQ0FBYjtJQUNBLGlCQUFpQixRQUFRLGtCQUFSLENBQWpCO0lBQ0EscUJBQXFCLFFBQVEsc0JBQVIsQ0FBckI7O0lBRUU7Ozs7Ozs7Z0NBQ2UsWUFBWTtBQUFFLGFBQU8sV0FBVyxjQUFYLENBQTBCLFVBQTFCLENBQVAsQ0FBRjs7OztrQ0FFVix5QkFBaUU7VUFBeEMsbUVBQWEsa0JBQTJCOztBQUNwRixVQUFJLDRCQUE0QixTQUE1QixFQUF1QztBQUN6QyxlQUFPLFNBQVAsQ0FEeUM7T0FBM0M7O3dDQURnRTs7T0FBb0I7O0FBS3BGLFVBQUksYUFBYSxTQUFiO1VBQ0EsbUJBQW1CLHVDQUF1QyxLQUF2QyxDQUE2QyxJQUE3QyxFQUFtRCxrQkFBbkQsQ0FBbkIsQ0FOZ0Y7O0FBUXBGLFVBQUksV0FBSixFQUNJLFdBREosRUFFSSxPQUZKLENBUm9GOztBQVlwRixVQUFJLE9BQU8sdUJBQVAsS0FBbUMsUUFBbkMsRUFBNkM7QUFDL0Msc0JBQWMsdUJBQWQsQ0FEK0M7QUFFL0Msc0JBQWMsTUFBTSxXQUFOLEdBQW9CLElBQXBCLENBRmlDO0FBRy9DLGtCQUFVLFFBQVEsUUFBUixDQUFpQixXQUFqQixDQUFWLENBSCtDOztBQUsvQyxxQkFBYSxJQUFJLFVBQUosQ0FBZSxPQUFmLEVBQXdCLFVBQXhCLEVBQW9DLGdCQUFwQyxDQUFiLENBTCtDOztBQU8vQyxlQUFPLFVBQVAsQ0FQK0M7T0FBakQ7O0FBVUEsVUFBSSxhQUFhLHVCQUFiOztBQUNBLGVBQVMsV0FBVyxTQUFYLEVBQVQsQ0F2QmdGOztBQXlCcEYsVUFBSSxXQUFXLFNBQVgsRUFBc0I7QUFDeEIsWUFBSSxjQUFjLFdBQVcsY0FBWCxFQUFkLENBRG9COztBQUd4QixzQkFBYyxXQUFkO0FBSHdCLG1CQUl4QixHQUFjLE1BQU0sV0FBTixHQUFvQixJQUFwQixDQUpVO0FBS3hCLGtCQUFVLFFBQVEsUUFBUixDQUFpQixXQUFqQixDQUFWLENBTHdCOztBQU94QixxQkFBYSxJQUFJLFVBQUosQ0FBZSxPQUFmLEVBQXdCLFVBQXhCLEVBQW9DLGdCQUFwQyxDQUFiLENBUHdCOztBQVN4QixlQUFPLFVBQVAsQ0FUd0I7T0FBMUI7O0FBWUEsbUJBQWEsSUFBSSxrQkFBSixDQUF1QixVQUF2QixFQUFtQyxVQUFuQyxFQUErQyxnQkFBL0MsQ0FBYixDQXJDb0Y7O0FBdUNwRixhQUFPLFVBQVAsQ0F2Q29GOzs7O1NBSGxGOzs7QUE4Q04sU0FBUyxzQ0FBVCxHQUFrRDtBQUNoRCxNQUFJLGdCQUFKO01BQ0kscUJBQXFCLE1BQU0sU0FBTixDQUFnQixLQUFoQixDQUFzQixJQUF0QixDQUEyQixTQUEzQixDQUFyQjs7QUFDQSwyQkFBeUIsTUFBTSxrQkFBTixDQUF6QixDQUg0Qzs7QUFLaEQsTUFBSSxLQUFKLEVBQVcsRUFBWCxNQUVPLElBQUksMkJBQTJCLFNBQTNCLEVBQXNDO0FBQy9DLHVCQUFtQixFQUFuQixDQUQrQztHQUExQyxNQUVBLElBQUksa0NBQWtDLEtBQWxDLEVBQXlDO0FBQ2xELHVCQUFtQixzQkFBbkI7QUFEa0QsR0FBN0MsTUFFQTtBQUNMLHlCQUFtQixtQkFBbUIsR0FBbkIsQ0FBdUIsVUFBUyxpQkFBVCxFQUE0QjtBQUNwRSxZQUFJLE9BQU8saUJBQVAsS0FBNkIsUUFBN0IsRUFBdUM7QUFDekMsY0FBSSxPQUFPLGlCQUFQOztBQUNBLGdDQUFzQixJQUFJLGNBQUosQ0FBbUIsSUFBbkIsQ0FBdEIsQ0FGcUM7O0FBSXpDLGlCQUFPLG1CQUFQLENBSnlDO1NBQTNDLE1BS087QUFDTCxjQUFJLGtCQUFrQixpQkFBbEI7O0FBREMsaUJBR0UsZUFBUCxDQUhLO1NBTFA7T0FEd0MsQ0FBMUMsQ0FESztLQUZBOztBQWlCUCxTQUFPLGdCQUFQLENBMUJnRDtDQUFsRDs7QUE2QkEsU0FBUyxLQUFULENBQWUsS0FBZixFQUFzQjtBQUFFLFNBQU8sTUFBTSxDQUFOLENBQVAsQ0FBRjtDQUF0Qjs7QUFFQSxPQUFPLE9BQVAsR0FBaUIsS0FBakIiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBFbGVtZW50ID0gZWFzeXVpLkVsZW1lbnQ7XG5cbnZhciBSZWFjdENsYXNzID0gcmVxdWlyZSgnLi9yZWFjdENsYXNzJyksXG4gICAgSlNYRWxlbWVudCA9IHJlcXVpcmUoJy4vanN4RWxlbWVudCcpLFxuICAgIEpTWFRleHRFbGVtZW50ID0gcmVxdWlyZSgnLi9qc3hUZXh0RWxlbWVudCcpLFxuICAgIEpTWFJlbmRlcmVkRWxlbWVudCA9IHJlcXVpcmUoJy4vanN4UmVuZGVyZWRFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0IHtcbiAgc3RhdGljIGNyZWF0ZUNsYXNzKHByb3BlcnRpZXMpIHsgcmV0dXJuIFJlYWN0Q2xhc3MuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7IH1cblxuICBzdGF0aWMgY3JlYXRlRWxlbWVudChyZWFjdENsYXNzT3JFbGVtZW50TmFtZSwgcHJvcGVydGllcyA9IHt9LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAocmVhY3RDbGFzc09yRWxlbWVudE5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB2YXIganN4RWxlbWVudCA9IHVuZGVmaW5lZCxcbiAgICAgICAgY2hpbGRKU1hFbGVtZW50cyA9IGNoaWxkSlNYRWxlbWVudHNGcm9tUmVtYWluaW5nQXJndW1lbnRzLmFwcGx5KG51bGwsIHJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICB2YXIgZWxlbWVudE5hbWUsXG4gICAgICAgIGVsZW1lbnRIVE1MLFxuICAgICAgICBlbGVtZW50O1xuXG4gICAgaWYgKHR5cGVvZiByZWFjdENsYXNzT3JFbGVtZW50TmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVsZW1lbnROYW1lID0gcmVhY3RDbGFzc09yRWxlbWVudE5hbWU7XG4gICAgICBlbGVtZW50SFRNTCA9ICc8JyArIGVsZW1lbnROYW1lICsgJy8+JztcbiAgICAgIGVsZW1lbnQgPSBFbGVtZW50LmZyb21IVE1MKGVsZW1lbnRIVE1MKTtcblxuICAgICAganN4RWxlbWVudCA9IG5ldyBKU1hFbGVtZW50KGVsZW1lbnQsIHByb3BlcnRpZXMsIGNoaWxkSlNYRWxlbWVudHMpO1xuXG4gICAgICByZXR1cm4ganN4RWxlbWVudDtcbiAgICB9XG5cbiAgICB2YXIgcmVhY3RDbGFzcyA9IHJlYWN0Q2xhc3NPckVsZW1lbnROYW1lLCAvLy9cbiAgICAgICAgcmVuZGVyID0gcmVhY3RDbGFzcy5nZXRSZW5kZXIoKTtcblxuICAgIGlmIChyZW5kZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gcmVhY3RDbGFzcy5nZXREaXNwbGF5TmFtZSgpO1xuXG4gICAgICBlbGVtZW50TmFtZSA9IGRpc3BsYXlOYW1lOyAgLy8vXG4gICAgICBlbGVtZW50SFRNTCA9ICc8JyArIGVsZW1lbnROYW1lICsgJy8+JztcbiAgICAgIGVsZW1lbnQgPSBFbGVtZW50LmZyb21IVE1MKGVsZW1lbnRIVE1MKTtcblxuICAgICAganN4RWxlbWVudCA9IG5ldyBKU1hFbGVtZW50KGVsZW1lbnQsIHByb3BlcnRpZXMsIGNoaWxkSlNYRWxlbWVudHMpO1xuXG4gICAgICByZXR1cm4ganN4RWxlbWVudDtcbiAgICB9XG5cbiAgICBqc3hFbGVtZW50ID0gbmV3IEpTWFJlbmRlcmVkRWxlbWVudChyZWFjdENsYXNzLCBwcm9wZXJ0aWVzLCBjaGlsZEpTWEVsZW1lbnRzKTtcbiAgICBcbiAgICByZXR1cm4ganN4RWxlbWVudDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGlsZEpTWEVsZW1lbnRzRnJvbVJlbWFpbmluZ0FyZ3VtZW50cygpIHtcbiAgdmFyIGNoaWxkSlNYRWxlbWVudHMsXG4gICAgICByZW1haW5pbmdBcmd1bWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLCAvLy9cbiAgICAgIGZpcnN0UmVtYWluaW5nQXJndW1lbnQgPSBmaXJzdChyZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gIGlmIChmYWxzZSkge1xuICAgIFxuICB9IGVsc2UgaWYgKGZpcnN0UmVtYWluaW5nQXJndW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgIGNoaWxkSlNYRWxlbWVudHMgPSBbXTtcbiAgfSBlbHNlIGlmIChmaXJzdFJlbWFpbmluZ0FyZ3VtZW50IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICBjaGlsZEpTWEVsZW1lbnRzID0gZmlyc3RSZW1haW5pbmdBcmd1bWVudDsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNoaWxkSlNYRWxlbWVudHMgPSByZW1haW5pbmdBcmd1bWVudHMubWFwKGZ1bmN0aW9uKHJlbWFpbmluZ0FyZ3VtZW50KSB7XG4gICAgICBpZiAodHlwZW9mIHJlbWFpbmluZ0FyZ3VtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgdGV4dCA9IHJlbWFpbmluZ0FyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICBjaGlsZEpTWFRleHRFbGVtZW50ID0gbmV3IEpTWFRleHRFbGVtZW50KHRleHQpO1xuXG4gICAgICAgIHJldHVybiBjaGlsZEpTWFRleHRFbGVtZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGNoaWxkSlNYRWxlbWVudCA9IHJlbWFpbmluZ0FyZ3VtZW50OyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIGNoaWxkSlNYRWxlbWVudDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZEpTWEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcbiJdfQ==
