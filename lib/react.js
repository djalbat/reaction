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
        var reactClass = reactClassOrElementName; ///

        jsxElement = new JSXReactElement(reactClass, properties, childJSXElements);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSSxhQUFhLFFBQVEsY0FBUixDQUFiO0lBQ0EsYUFBYSxRQUFRLGNBQVIsQ0FBYjtJQUNBLGlCQUFpQixRQUFRLGtCQUFSLENBQWpCO0lBQ0Esa0JBQWtCLFFBQVEsbUJBQVIsQ0FBbEI7O0lBRUU7Ozs7Ozs7Z0NBQ2UsWUFBWTtBQUM3QixVQUFJLGFBQWEsV0FBVyxjQUFYLENBQTBCLFVBQTFCLENBQWIsQ0FEeUI7O0FBRzdCLGFBQU8sVUFBUCxDQUg2Qjs7OztrQ0FNVix5QkFBeUIsWUFBbUM7QUFDL0UsVUFBSSw0QkFBNEIsU0FBNUIsRUFBdUM7QUFDekMsZUFBTyxTQUFQLENBRHlDO09BQTNDOzt3Q0FEMkQ7O09BQW9COztBQUsvRSxVQUFJLGFBQWEsU0FBYjtVQUNBLG1CQUFtQix1Q0FBdUMsS0FBdkMsQ0FBNkMsSUFBN0MsRUFBbUQsa0JBQW5ELENBQW5CLENBTjJFOztBQVEvRSxVQUFJLE9BQU8sdUJBQVAsS0FBbUMsUUFBbkMsRUFBNkM7QUFDL0MsWUFBSSxjQUFjLHVCQUFkOztBQUQyQyxrQkFHL0MsR0FBYSxJQUFJLFVBQUosQ0FBZSxXQUFmLEVBQTRCLFVBQTVCLEVBQXdDLGdCQUF4QyxDQUFiLENBSCtDO09BQWpELE1BSU87QUFDTCxZQUFJLGFBQWEsdUJBQWI7O0FBREMsa0JBR0wsR0FBYSxJQUFJLGVBQUosQ0FBb0IsVUFBcEIsRUFBZ0MsVUFBaEMsRUFBNEMsZ0JBQTVDLENBQWIsQ0FISztPQUpQOztBQVVBLGFBQU8sVUFBUCxDQWxCK0U7Ozs7U0FQN0U7OztBQTZCTixTQUFTLHNDQUFULEdBQWtEO0FBQ2hELE1BQUksZ0JBQUo7TUFDSSxxQkFBcUIsTUFBTSxTQUFOLENBQWdCLEtBQWhCLENBQXNCLElBQXRCLENBQTJCLFNBQTNCLENBQXJCO01BQ0EseUJBQXlCLE1BQU0sa0JBQU4sQ0FBekIsQ0FINEM7O0FBS2hELE1BQUksS0FBSixFQUFXLEVBQVgsTUFFTyxJQUFJLDJCQUEyQixTQUEzQixFQUFzQztBQUMvQyx1QkFBbUIsRUFBbkIsQ0FEK0M7R0FBMUMsTUFFQSxJQUFJLGtDQUFrQyxLQUFsQyxFQUF5QztBQUNsRCx1QkFBbUIsc0JBQW5CO0FBRGtELEdBQTdDLE1BRUE7QUFDTCx5QkFBbUIsbUJBQW1CLEdBQW5CLENBQXVCLFVBQVMsaUJBQVQsRUFBNEI7QUFDcEUsWUFBSSxPQUFPLGlCQUFQLEtBQTZCLFFBQTdCLEVBQXVDO0FBQ3pDLGNBQUksT0FBTyxpQkFBUDs7QUFDQSxnQ0FBc0IsSUFBSSxjQUFKLENBQW1CLElBQW5CLENBQXRCLENBRnFDOztBQUl6QyxpQkFBTyxtQkFBUCxDQUp5QztTQUEzQyxNQUtPO0FBQ0wsY0FBSSxrQkFBa0IsaUJBQWxCOztBQURDLGlCQUdFLGVBQVAsQ0FISztTQUxQO09BRHdDLENBQTFDLENBREs7S0FGQTs7QUFpQlAsU0FBTyxnQkFBUCxDQTFCZ0Q7Q0FBbEQ7O0FBNkJBLFNBQVMsS0FBVCxDQUFlLEtBQWYsRUFBc0I7QUFBRSxTQUFPLE1BQU0sQ0FBTixDQUFQLENBQUY7Q0FBdEI7O0FBRUEsT0FBTyxPQUFQLEdBQWlCLEtBQWpCIiwiZmlsZSI6InJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RDbGFzcyA9IHJlcXVpcmUoJy4vcmVhY3RDbGFzcycpLFxuICAgIEpTWEVsZW1lbnQgPSByZXF1aXJlKCcuL2pzeEVsZW1lbnQnKSxcbiAgICBKU1hUZXh0RWxlbWVudCA9IHJlcXVpcmUoJy4vanN4VGV4dEVsZW1lbnQnKSxcbiAgICBKU1hSZWFjdEVsZW1lbnQgPSByZXF1aXJlKCcuL2pzeFJlYWN0RWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdCB7XG4gIHN0YXRpYyBjcmVhdGVDbGFzcyhwcm9wZXJ0aWVzKSB7XG4gICAgdmFyIHJlYWN0Q2xhc3MgPSBSZWFjdENsYXNzLmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIHJlYWN0Q2xhc3M7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlRWxlbWVudChyZWFjdENsYXNzT3JFbGVtZW50TmFtZSwgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKHJlYWN0Q2xhc3NPckVsZW1lbnROYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdmFyIGpzeEVsZW1lbnQgPSB1bmRlZmluZWQsXG4gICAgICAgIGNoaWxkSlNYRWxlbWVudHMgPSBjaGlsZEpTWEVsZW1lbnRzRnJvbVJlbWFpbmluZ0FyZ3VtZW50cy5hcHBseShudWxsLCByZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgaWYgKHR5cGVvZiByZWFjdENsYXNzT3JFbGVtZW50TmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBlbGVtZW50TmFtZSA9IHJlYWN0Q2xhc3NPckVsZW1lbnROYW1lOyAgLy8vXG5cbiAgICAgIGpzeEVsZW1lbnQgPSBuZXcgSlNYRWxlbWVudChlbGVtZW50TmFtZSwgcHJvcGVydGllcywgY2hpbGRKU1hFbGVtZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByZWFjdENsYXNzID0gcmVhY3RDbGFzc09yRWxlbWVudE5hbWU7IC8vL1xuXG4gICAgICBqc3hFbGVtZW50ID0gbmV3IEpTWFJlYWN0RWxlbWVudChyZWFjdENsYXNzLCBwcm9wZXJ0aWVzLCBjaGlsZEpTWEVsZW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGpzeEVsZW1lbnQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hpbGRKU1hFbGVtZW50c0Zyb21SZW1haW5pbmdBcmd1bWVudHMoKSB7XG4gIHZhciBjaGlsZEpTWEVsZW1lbnRzLFxuICAgICAgcmVtYWluaW5nQXJndW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxcbiAgICAgIGZpcnN0UmVtYWluaW5nQXJndW1lbnQgPSBmaXJzdChyZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gIGlmIChmYWxzZSkge1xuICAgIFxuICB9IGVsc2UgaWYgKGZpcnN0UmVtYWluaW5nQXJndW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgIGNoaWxkSlNYRWxlbWVudHMgPSBbXTtcbiAgfSBlbHNlIGlmIChmaXJzdFJlbWFpbmluZ0FyZ3VtZW50IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICBjaGlsZEpTWEVsZW1lbnRzID0gZmlyc3RSZW1haW5pbmdBcmd1bWVudDsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNoaWxkSlNYRWxlbWVudHMgPSByZW1haW5pbmdBcmd1bWVudHMubWFwKGZ1bmN0aW9uKHJlbWFpbmluZ0FyZ3VtZW50KSB7XG4gICAgICBpZiAodHlwZW9mIHJlbWFpbmluZ0FyZ3VtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgdGV4dCA9IHJlbWFpbmluZ0FyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICBjaGlsZEpTWFRleHRFbGVtZW50ID0gbmV3IEpTWFRleHRFbGVtZW50KHRleHQpO1xuXG4gICAgICAgIHJldHVybiBjaGlsZEpTWFRleHRFbGVtZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGNoaWxkSlNYRWxlbWVudCA9IHJlbWFpbmluZ0FyZ3VtZW50OyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIGNoaWxkSlNYRWxlbWVudDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZEpTWEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcbiJdfQ==