'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactClass = require('./reactClass'),
    JSXElement = require('./jsxElement'),
    JSXTextElement = require('./jsxTextElement'),
    JSXReactElement = require('./jsxReactElement'),
    JSXFunctionElement = require('./jsxFunctionElement');

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

      if (reactClassOrElementName instanceof ReactClass) {
        var reactClass = reactClassOrElementName; ///

        jsxElement = new JSXReactElement(reactClass, properties, childJSXElements);
      } else if (typeof reactClassOrElementName === 'function') {
        var reactFunction = reactClassOrElementName; ///

        jsxElement = new JSXFunctionElement(reactFunction, properties, childJSXElements);
      } else {
        var elementName = reactClassOrElementName; ///

        jsxElement = new JSXElement(elementName, properties, childJSXElements);
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
    childJSXElements = firstRemainingArgument; ///
  } else {
      childJSXElements = remainingArguments.map(function (remainingArgument) {
        if (remainingArgument instanceof JSXElement) {
          var childJSXElement = remainingArgument; ///

          return childJSXElement;
        } else {
          var text = '' + remainingArgument,
              ///
          childJSXTextElement = new JSXTextElement(text);

          return childJSXTextElement;
        }
      });
    }

  return childJSXElements;
}

function first(array) {
  return array[0];
}

module.exports = React;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSSxhQUFhLFFBQVEsY0FBUixDQUFiO0lBQ0EsYUFBYSxRQUFRLGNBQVIsQ0FBYjtJQUNBLGlCQUFpQixRQUFRLGtCQUFSLENBQWpCO0lBQ0Esa0JBQWtCLFFBQVEsbUJBQVIsQ0FBbEI7SUFDQSxxQkFBcUIsUUFBUSxzQkFBUixDQUFyQjs7SUFFRTs7Ozs7OztnQ0FDZSxZQUFZO0FBQzdCLFVBQUksYUFBYSxXQUFXLGNBQVgsQ0FBMEIsVUFBMUIsQ0FBYixDQUR5Qjs7QUFHN0IsYUFBTyxVQUFQLENBSDZCOzs7O2tDQU1WLHlCQUF5QixZQUFtQztBQUMvRSxVQUFJLDRCQUE0QixTQUE1QixFQUF1QztBQUN6QyxlQUFPLFNBQVAsQ0FEeUM7T0FBM0M7O3dDQUQyRDs7T0FBb0I7O0FBSy9FLFVBQUksYUFBYSxTQUFiO1VBQ0EsbUJBQW1CLHVDQUF1QyxLQUF2QyxDQUE2QyxJQUE3QyxFQUFtRCxrQkFBbkQsQ0FBbkIsQ0FOMkU7O0FBUS9FLFVBQUksbUNBQW1DLFVBQW5DLEVBQStDO0FBQ2pELFlBQUksYUFBYSx1QkFBYjs7QUFENkMsa0JBR2pELEdBQWEsSUFBSSxlQUFKLENBQW9CLFVBQXBCLEVBQWdDLFVBQWhDLEVBQTRDLGdCQUE1QyxDQUFiLENBSGlEO09BQW5ELE1BSU8sSUFBSSxPQUFPLHVCQUFQLEtBQW1DLFVBQW5DLEVBQStDO0FBQ3hELFlBQUksZ0JBQWdCLHVCQUFoQjs7QUFEb0Qsa0JBR3hELEdBQWEsSUFBSSxrQkFBSixDQUF1QixhQUF2QixFQUFzQyxVQUF0QyxFQUFrRCxnQkFBbEQsQ0FBYixDQUh3RDtPQUFuRCxNQUlBO0FBQ0wsWUFBSSxjQUFjLHVCQUFkOztBQURDLGtCQUdMLEdBQWEsSUFBSSxVQUFKLENBQWUsV0FBZixFQUE0QixVQUE1QixFQUF3QyxnQkFBeEMsQ0FBYixDQUhLO09BSkE7O0FBVVAsYUFBTyxVQUFQLENBdEIrRTs7OztTQVA3RTs7O0FBaUNOLFNBQVMsc0NBQVQsR0FBa0Q7QUFDaEQsTUFBSSxnQkFBSjtNQUNJLHFCQUFxQixNQUFNLFNBQU4sQ0FBZ0IsS0FBaEIsQ0FBc0IsSUFBdEIsQ0FBMkIsU0FBM0IsQ0FBckI7TUFDQSx5QkFBeUIsTUFBTSxrQkFBTixDQUF6QixDQUg0Qzs7QUFLaEQsTUFBSSxLQUFKLEVBQVcsRUFBWCxNQUVPLElBQUksMkJBQTJCLFNBQTNCLEVBQXNDO0FBQy9DLHVCQUFtQixFQUFuQixDQUQrQztHQUExQyxNQUVBLElBQUksa0NBQWtDLEtBQWxDLEVBQXlDO0FBQ2xELHVCQUFtQixzQkFBbkI7QUFEa0QsR0FBN0MsTUFFQTtBQUNMLHlCQUFtQixtQkFBbUIsR0FBbkIsQ0FBdUIsVUFBUyxpQkFBVCxFQUE0QjtBQUNwRSxZQUFJLDZCQUE2QixVQUE3QixFQUF5QztBQUMzQyxjQUFJLGtCQUFrQixpQkFBbEI7O0FBRHVDLGlCQUdwQyxlQUFQLENBSDJDO1NBQTdDLE1BSU87QUFDTCxjQUFJLE9BQU8sS0FBSyxpQkFBTDs7QUFDUCxnQ0FBc0IsSUFBSSxjQUFKLENBQW1CLElBQW5CLENBQXRCLENBRkM7O0FBSUwsaUJBQU8sbUJBQVAsQ0FKSztTQUpQO09BRHdDLENBQTFDLENBREs7S0FGQTs7QUFpQlAsU0FBTyxnQkFBUCxDQTFCZ0Q7Q0FBbEQ7O0FBNkJBLFNBQVMsS0FBVCxDQUFlLEtBQWYsRUFBc0I7QUFBRSxTQUFPLE1BQU0sQ0FBTixDQUFQLENBQUY7Q0FBdEI7O0FBRUEsT0FBTyxPQUFQLEdBQWlCLEtBQWpCIiwiZmlsZSI6InJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RDbGFzcyA9IHJlcXVpcmUoJy4vcmVhY3RDbGFzcycpLFxuICAgIEpTWEVsZW1lbnQgPSByZXF1aXJlKCcuL2pzeEVsZW1lbnQnKSxcbiAgICBKU1hUZXh0RWxlbWVudCA9IHJlcXVpcmUoJy4vanN4VGV4dEVsZW1lbnQnKSxcbiAgICBKU1hSZWFjdEVsZW1lbnQgPSByZXF1aXJlKCcuL2pzeFJlYWN0RWxlbWVudCcpLFxuICAgIEpTWEZ1bmN0aW9uRWxlbWVudCA9IHJlcXVpcmUoJy4vanN4RnVuY3Rpb25FbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0IHtcbiAgc3RhdGljIGNyZWF0ZUNsYXNzKHByb3BlcnRpZXMpIHtcbiAgICB2YXIgcmVhY3RDbGFzcyA9IFJlYWN0Q2xhc3MuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gcmVhY3RDbGFzcztcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVFbGVtZW50KHJlYWN0Q2xhc3NPckVsZW1lbnROYW1lLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAocmVhY3RDbGFzc09yRWxlbWVudE5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB2YXIganN4RWxlbWVudCA9IHVuZGVmaW5lZCxcbiAgICAgICAgY2hpbGRKU1hFbGVtZW50cyA9IGNoaWxkSlNYRWxlbWVudHNGcm9tUmVtYWluaW5nQXJndW1lbnRzLmFwcGx5KG51bGwsIHJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBpZiAocmVhY3RDbGFzc09yRWxlbWVudE5hbWUgaW5zdGFuY2VvZiBSZWFjdENsYXNzKSB7XG4gICAgICB2YXIgcmVhY3RDbGFzcyA9IHJlYWN0Q2xhc3NPckVsZW1lbnROYW1lOyAvLy9cblxuICAgICAganN4RWxlbWVudCA9IG5ldyBKU1hSZWFjdEVsZW1lbnQocmVhY3RDbGFzcywgcHJvcGVydGllcywgY2hpbGRKU1hFbGVtZW50cyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVhY3RDbGFzc09yRWxlbWVudE5hbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciByZWFjdEZ1bmN0aW9uID0gcmVhY3RDbGFzc09yRWxlbWVudE5hbWU7ICAvLy9cblxuICAgICAganN4RWxlbWVudCA9IG5ldyBKU1hGdW5jdGlvbkVsZW1lbnQocmVhY3RGdW5jdGlvbiwgcHJvcGVydGllcywgY2hpbGRKU1hFbGVtZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBlbGVtZW50TmFtZSA9IHJlYWN0Q2xhc3NPckVsZW1lbnROYW1lOyAgLy8vXG5cbiAgICAgIGpzeEVsZW1lbnQgPSBuZXcgSlNYRWxlbWVudChlbGVtZW50TmFtZSwgcHJvcGVydGllcywgY2hpbGRKU1hFbGVtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGpzeEVsZW1lbnQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hpbGRKU1hFbGVtZW50c0Zyb21SZW1haW5pbmdBcmd1bWVudHMoKSB7XG4gIHZhciBjaGlsZEpTWEVsZW1lbnRzLFxuICAgICAgcmVtYWluaW5nQXJndW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxcbiAgICAgIGZpcnN0UmVtYWluaW5nQXJndW1lbnQgPSBmaXJzdChyZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gIGlmIChmYWxzZSkge1xuICAgIFxuICB9IGVsc2UgaWYgKGZpcnN0UmVtYWluaW5nQXJndW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgIGNoaWxkSlNYRWxlbWVudHMgPSBbXTtcbiAgfSBlbHNlIGlmIChmaXJzdFJlbWFpbmluZ0FyZ3VtZW50IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICBjaGlsZEpTWEVsZW1lbnRzID0gZmlyc3RSZW1haW5pbmdBcmd1bWVudDsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNoaWxkSlNYRWxlbWVudHMgPSByZW1haW5pbmdBcmd1bWVudHMubWFwKGZ1bmN0aW9uKHJlbWFpbmluZ0FyZ3VtZW50KSB7XG4gICAgICBpZiAocmVtYWluaW5nQXJndW1lbnQgaW5zdGFuY2VvZiBKU1hFbGVtZW50KSB7XG4gICAgICAgIHZhciBjaGlsZEpTWEVsZW1lbnQgPSByZW1haW5pbmdBcmd1bWVudDsgIC8vL1xuXG4gICAgICAgIHJldHVybiBjaGlsZEpTWEVsZW1lbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgdGV4dCA9ICcnICsgcmVtYWluaW5nQXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIGNoaWxkSlNYVGV4dEVsZW1lbnQgPSBuZXcgSlNYVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkSlNYVGV4dEVsZW1lbnQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gY2hpbGRKU1hFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG4iXX0=