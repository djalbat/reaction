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
        var reactFunction = reactClassOrElementName,
            ///
        _ref = properties; ///

        jsxElement = new JSXFunctionElement(reactFunction, _ref);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSSxhQUFhLFFBQVEsY0FBUixDQUFiO0lBQ0EsYUFBYSxRQUFRLGNBQVIsQ0FBYjtJQUNBLGlCQUFpQixRQUFRLGtCQUFSLENBQWpCO0lBQ0Esa0JBQWtCLFFBQVEsbUJBQVIsQ0FBbEI7SUFDQSxxQkFBcUIsUUFBUSxzQkFBUixDQUFyQjs7SUFFRTs7Ozs7OztnQ0FDZSxZQUFZO0FBQzdCLFVBQUksYUFBYSxXQUFXLGNBQVgsQ0FBMEIsVUFBMUIsQ0FBYixDQUR5Qjs7QUFHN0IsYUFBTyxVQUFQLENBSDZCOzs7O2tDQU1WLHlCQUF5QixZQUFtQztBQUMvRSxVQUFJLDRCQUE0QixTQUE1QixFQUF1QztBQUN6QyxlQUFPLFNBQVAsQ0FEeUM7T0FBM0M7O3dDQUQyRDs7T0FBb0I7O0FBSy9FLFVBQUksYUFBYSxTQUFiO1VBQ0EsbUJBQW1CLHVDQUF1QyxLQUF2QyxDQUE2QyxJQUE3QyxFQUFtRCxrQkFBbkQsQ0FBbkIsQ0FOMkU7O0FBUS9FLFVBQUksbUNBQW1DLFVBQW5DLEVBQStDO0FBQ2pELFlBQUksYUFBYSx1QkFBYjs7QUFENkMsa0JBR2pELEdBQWEsSUFBSSxlQUFKLENBQW9CLFVBQXBCLEVBQWdDLFVBQWhDLEVBQTRDLGdCQUE1QyxDQUFiLENBSGlEO09BQW5ELE1BSU8sSUFBSSxPQUFPLHVCQUFQLEtBQW1DLFVBQW5DLEVBQStDO0FBQ3hELFlBQUksZ0JBQWdCLHVCQUFoQjs7QUFDQSxlQUFPLFVBQVA7O0FBRm9ELGtCQUl4RCxHQUFhLElBQUksa0JBQUosQ0FBdUIsYUFBdkIsRUFBc0MsSUFBdEMsQ0FBYixDQUp3RDtPQUFuRCxNQUtBO0FBQ0wsWUFBSSxjQUFjLHVCQUFkOztBQURDLGtCQUdMLEdBQWEsSUFBSSxVQUFKLENBQWUsV0FBZixFQUE0QixVQUE1QixFQUF3QyxnQkFBeEMsQ0FBYixDQUhLO09BTEE7O0FBV1AsYUFBTyxVQUFQLENBdkIrRTs7OztTQVA3RTs7O0FBa0NOLFNBQVMsc0NBQVQsR0FBa0Q7QUFDaEQsTUFBSSxnQkFBSjtNQUNJLHFCQUFxQixNQUFNLFNBQU4sQ0FBZ0IsS0FBaEIsQ0FBc0IsSUFBdEIsQ0FBMkIsU0FBM0IsQ0FBckI7TUFDQSx5QkFBeUIsTUFBTSxrQkFBTixDQUF6QixDQUg0Qzs7QUFLaEQsTUFBSSxLQUFKLEVBQVcsRUFBWCxNQUVPLElBQUksMkJBQTJCLFNBQTNCLEVBQXNDO0FBQy9DLHVCQUFtQixFQUFuQixDQUQrQztHQUExQyxNQUVBLElBQUksa0NBQWtDLEtBQWxDLEVBQXlDO0FBQ2xELHVCQUFtQixzQkFBbkI7QUFEa0QsR0FBN0MsTUFFQTtBQUNMLHlCQUFtQixtQkFBbUIsR0FBbkIsQ0FBdUIsVUFBUyxpQkFBVCxFQUE0QjtBQUNwRSxZQUFJLDZCQUE2QixVQUE3QixFQUF5QztBQUMzQyxjQUFJLGtCQUFrQixpQkFBbEI7O0FBRHVDLGlCQUdwQyxlQUFQLENBSDJDO1NBQTdDLE1BSU87QUFDTCxjQUFJLE9BQU8sS0FBSyxpQkFBTDs7QUFDUCxnQ0FBc0IsSUFBSSxjQUFKLENBQW1CLElBQW5CLENBQXRCLENBRkM7O0FBSUwsaUJBQU8sbUJBQVAsQ0FKSztTQUpQO09BRHdDLENBQTFDLENBREs7S0FGQTs7QUFpQlAsU0FBTyxnQkFBUCxDQTFCZ0Q7Q0FBbEQ7O0FBNkJBLFNBQVMsS0FBVCxDQUFlLEtBQWYsRUFBc0I7QUFBRSxTQUFPLE1BQU0sQ0FBTixDQUFQLENBQUY7Q0FBdEI7O0FBRUEsT0FBTyxPQUFQLEdBQWlCLEtBQWpCIiwiZmlsZSI6InJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RDbGFzcyA9IHJlcXVpcmUoJy4vcmVhY3RDbGFzcycpLFxuICAgIEpTWEVsZW1lbnQgPSByZXF1aXJlKCcuL2pzeEVsZW1lbnQnKSxcbiAgICBKU1hUZXh0RWxlbWVudCA9IHJlcXVpcmUoJy4vanN4VGV4dEVsZW1lbnQnKSxcbiAgICBKU1hSZWFjdEVsZW1lbnQgPSByZXF1aXJlKCcuL2pzeFJlYWN0RWxlbWVudCcpLFxuICAgIEpTWEZ1bmN0aW9uRWxlbWVudCA9IHJlcXVpcmUoJy4vanN4RnVuY3Rpb25FbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0IHtcbiAgc3RhdGljIGNyZWF0ZUNsYXNzKHByb3BlcnRpZXMpIHtcbiAgICB2YXIgcmVhY3RDbGFzcyA9IFJlYWN0Q2xhc3MuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gcmVhY3RDbGFzcztcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVFbGVtZW50KHJlYWN0Q2xhc3NPckVsZW1lbnROYW1lLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAocmVhY3RDbGFzc09yRWxlbWVudE5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB2YXIganN4RWxlbWVudCA9IHVuZGVmaW5lZCxcbiAgICAgICAgY2hpbGRKU1hFbGVtZW50cyA9IGNoaWxkSlNYRWxlbWVudHNGcm9tUmVtYWluaW5nQXJndW1lbnRzLmFwcGx5KG51bGwsIHJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBpZiAocmVhY3RDbGFzc09yRWxlbWVudE5hbWUgaW5zdGFuY2VvZiBSZWFjdENsYXNzKSB7XG4gICAgICB2YXIgcmVhY3RDbGFzcyA9IHJlYWN0Q2xhc3NPckVsZW1lbnROYW1lOyAvLy9cblxuICAgICAganN4RWxlbWVudCA9IG5ldyBKU1hSZWFjdEVsZW1lbnQocmVhY3RDbGFzcywgcHJvcGVydGllcywgY2hpbGRKU1hFbGVtZW50cyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVhY3RDbGFzc09yRWxlbWVudE5hbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciByZWFjdEZ1bmN0aW9uID0gcmVhY3RDbGFzc09yRWxlbWVudE5hbWUsICAvLy9cbiAgICAgICAgICBfcmVmID0gcHJvcGVydGllczsgIC8vL1xuXG4gICAgICBqc3hFbGVtZW50ID0gbmV3IEpTWEZ1bmN0aW9uRWxlbWVudChyZWFjdEZ1bmN0aW9uLCBfcmVmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGVsZW1lbnROYW1lID0gcmVhY3RDbGFzc09yRWxlbWVudE5hbWU7ICAvLy9cblxuICAgICAganN4RWxlbWVudCA9IG5ldyBKU1hFbGVtZW50KGVsZW1lbnROYW1lLCBwcm9wZXJ0aWVzLCBjaGlsZEpTWEVsZW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4ganN4RWxlbWVudDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGlsZEpTWEVsZW1lbnRzRnJvbVJlbWFpbmluZ0FyZ3VtZW50cygpIHtcbiAgdmFyIGNoaWxkSlNYRWxlbWVudHMsXG4gICAgICByZW1haW5pbmdBcmd1bWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLFxuICAgICAgZmlyc3RSZW1haW5pbmdBcmd1bWVudCA9IGZpcnN0KHJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgaWYgKGZhbHNlKSB7XG4gICAgXG4gIH0gZWxzZSBpZiAoZmlyc3RSZW1haW5pbmdBcmd1bWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2hpbGRKU1hFbGVtZW50cyA9IFtdO1xuICB9IGVsc2UgaWYgKGZpcnN0UmVtYWluaW5nQXJndW1lbnQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIGNoaWxkSlNYRWxlbWVudHMgPSBmaXJzdFJlbWFpbmluZ0FyZ3VtZW50OyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY2hpbGRKU1hFbGVtZW50cyA9IHJlbWFpbmluZ0FyZ3VtZW50cy5tYXAoZnVuY3Rpb24ocmVtYWluaW5nQXJndW1lbnQpIHtcbiAgICAgIGlmIChyZW1haW5pbmdBcmd1bWVudCBpbnN0YW5jZW9mIEpTWEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGNoaWxkSlNYRWxlbWVudCA9IHJlbWFpbmluZ0FyZ3VtZW50OyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIGNoaWxkSlNYRWxlbWVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB0ZXh0ID0gJycgKyByZW1haW5pbmdBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgY2hpbGRKU1hUZXh0RWxlbWVudCA9IG5ldyBKU1hUZXh0RWxlbWVudCh0ZXh0KTtcblxuICAgICAgICByZXR1cm4gY2hpbGRKU1hUZXh0RWxlbWVudDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZEpTWEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcbiJdfQ==