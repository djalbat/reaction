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

        addPropertiesToElementAsAttributes(element, properties);

        jsxElement = new JSXElement(element, childJSXElements);

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

        addPropertiesToElementAsAttributes(element, properties);

        jsxElement = new JSXElement(element, childJSXElements);

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

function addPropertiesToElementAsAttributes(element, properties) {
  if (properties !== null) {
    var propertyNames = Object.keys(properties);

    propertyNames.forEach(function (propertyName) {
      var attributeName,
          propertyValue = properties[propertyName],
          attributeValue = propertyValue;

      switch (propertyName) {
        case 'className':
          attributeName = 'class';
          break;

        case 'htmlFor':
          attributeName = 'for';
          break;

        default:
          attributeName = propertyName;
          break;
      }

      element.addAttribute(attributeName, attributeValue);
    });
  }
}

function first(array) {
  return array[0];
}

module.exports = React;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSSxTQUFTLFFBQVEsUUFBUixDQUFUO0lBQ0EsVUFBVSxPQUFPLE9BQVA7O0FBRWQsSUFBSSxhQUFhLFFBQVEsY0FBUixDQUFiO0lBQ0EsYUFBYSxRQUFRLGNBQVIsQ0FBYjtJQUNBLGlCQUFpQixRQUFRLGtCQUFSLENBQWpCO0lBQ0EscUJBQXFCLFFBQVEsc0JBQVIsQ0FBckI7O0lBRUU7Ozs7Ozs7Z0NBQ2UsWUFBWTtBQUFFLGFBQU8sV0FBVyxjQUFYLENBQTBCLFVBQTFCLENBQVAsQ0FBRjs7OztrQ0FFVix5QkFBaUU7VUFBeEMsbUVBQWEsa0JBQTJCOztBQUNwRixVQUFJLDRCQUE0QixTQUE1QixFQUF1QztBQUN6QyxlQUFPLFNBQVAsQ0FEeUM7T0FBM0M7O3dDQURnRTs7T0FBb0I7O0FBS3BGLFVBQUksYUFBYSxTQUFiO1VBQ0EsbUJBQW1CLHVDQUF1QyxLQUF2QyxDQUE2QyxJQUE3QyxFQUFtRCxrQkFBbkQsQ0FBbkIsQ0FOZ0Y7O0FBUXBGLFVBQUksV0FBSixFQUNJLFdBREosRUFFSSxPQUZKLENBUm9GOztBQVlwRixVQUFJLE9BQU8sdUJBQVAsS0FBbUMsUUFBbkMsRUFBNkM7QUFDL0Msc0JBQWMsdUJBQWQsQ0FEK0M7QUFFL0Msc0JBQWMsTUFBTSxXQUFOLEdBQW9CLElBQXBCLENBRmlDO0FBRy9DLGtCQUFVLFFBQVEsUUFBUixDQUFpQixXQUFqQixDQUFWLENBSCtDOztBQUsvQywyQ0FBbUMsT0FBbkMsRUFBNEMsVUFBNUMsRUFMK0M7O0FBTy9DLHFCQUFhLElBQUksVUFBSixDQUFlLE9BQWYsRUFBd0IsZ0JBQXhCLENBQWIsQ0FQK0M7O0FBUy9DLGVBQU8sVUFBUCxDQVQrQztPQUFqRDs7QUFZQSxVQUFJLGFBQWEsdUJBQWI7O0FBQ0EsZUFBUyxXQUFXLFNBQVgsRUFBVCxDQXpCZ0Y7O0FBMkJwRixVQUFJLFdBQVcsU0FBWCxFQUFzQjtBQUN4QixZQUFJLGNBQWMsV0FBVyxjQUFYLEVBQWQsQ0FEb0I7O0FBR3hCLHNCQUFjLFdBQWQ7QUFId0IsbUJBSXhCLEdBQWMsTUFBTSxXQUFOLEdBQW9CLElBQXBCLENBSlU7QUFLeEIsa0JBQVUsUUFBUSxRQUFSLENBQWlCLFdBQWpCLENBQVYsQ0FMd0I7O0FBT3hCLDJDQUFtQyxPQUFuQyxFQUE0QyxVQUE1QyxFQVB3Qjs7QUFTeEIscUJBQWEsSUFBSSxVQUFKLENBQWUsT0FBZixFQUF3QixnQkFBeEIsQ0FBYixDQVR3Qjs7QUFXeEIsZUFBTyxVQUFQLENBWHdCO09BQTFCOztBQWNBLG1CQUFhLElBQUksa0JBQUosQ0FBdUIsVUFBdkIsRUFBbUMsVUFBbkMsRUFBK0MsZ0JBQS9DLENBQWIsQ0F6Q29GOztBQTJDcEYsYUFBTyxVQUFQLENBM0NvRjs7OztTQUhsRjs7O0FBa0ROLFNBQVMsc0NBQVQsR0FBa0Q7QUFDaEQsTUFBSSxnQkFBSjtNQUNJLHFCQUFxQixNQUFNLFNBQU4sQ0FBZ0IsS0FBaEIsQ0FBc0IsSUFBdEIsQ0FBMkIsU0FBM0IsQ0FBckI7O0FBQ0EsMkJBQXlCLE1BQU0sa0JBQU4sQ0FBekIsQ0FINEM7O0FBS2hELE1BQUksS0FBSixFQUFXLEVBQVgsTUFFTyxJQUFJLDJCQUEyQixTQUEzQixFQUFzQztBQUMvQyx1QkFBbUIsRUFBbkIsQ0FEK0M7R0FBMUMsTUFFQSxJQUFJLGtDQUFrQyxLQUFsQyxFQUF5QztBQUNsRCx1QkFBbUIsc0JBQW5CO0FBRGtELEdBQTdDLE1BRUE7QUFDTCx5QkFBbUIsbUJBQW1CLEdBQW5CLENBQXVCLFVBQVMsaUJBQVQsRUFBNEI7QUFDcEUsWUFBSSxPQUFPLGlCQUFQLEtBQTZCLFFBQTdCLEVBQXVDO0FBQ3pDLGNBQUksT0FBTyxpQkFBUDs7QUFDQSxnQ0FBc0IsSUFBSSxjQUFKLENBQW1CLElBQW5CLENBQXRCLENBRnFDOztBQUl6QyxpQkFBTyxtQkFBUCxDQUp5QztTQUEzQyxNQUtPO0FBQ0wsY0FBSSxrQkFBa0IsaUJBQWxCOztBQURDLGlCQUdFLGVBQVAsQ0FISztTQUxQO09BRHdDLENBQTFDLENBREs7S0FGQTs7QUFpQlAsU0FBTyxnQkFBUCxDQTFCZ0Q7Q0FBbEQ7O0FBNkJBLFNBQVMsa0NBQVQsQ0FBNEMsT0FBNUMsRUFBcUQsVUFBckQsRUFBaUU7QUFDL0QsTUFBSSxlQUFlLElBQWYsRUFBcUI7QUFDdkIsUUFBSSxnQkFBZ0IsT0FBTyxJQUFQLENBQVksVUFBWixDQUFoQixDQURtQjs7QUFHdkIsa0JBQWMsT0FBZCxDQUFzQixVQUFVLFlBQVYsRUFBd0I7QUFDNUMsVUFBSSxhQUFKO1VBQ0ksZ0JBQWdCLFdBQVcsWUFBWCxDQUFoQjtVQUNBLGlCQUFpQixhQUFqQixDQUh3Qzs7QUFLNUMsY0FBUSxZQUFSO0FBQ0UsYUFBSyxXQUFMO0FBQ0UsMEJBQWdCLE9BQWhCLENBREY7QUFFRSxnQkFGRjs7QUFERixhQUtPLFNBQUw7QUFDRSwwQkFBZ0IsS0FBaEIsQ0FERjtBQUVFLGdCQUZGOztBQUxGO0FBVUksMEJBQWdCLFlBQWhCLENBREY7QUFFRSxnQkFGRjtBQVRGLE9BTDRDOztBQW1CNUMsY0FBUSxZQUFSLENBQXFCLGFBQXJCLEVBQW9DLGNBQXBDLEVBbkI0QztLQUF4QixDQUF0QixDQUh1QjtHQUF6QjtDQURGOztBQTRCQSxTQUFTLEtBQVQsQ0FBZSxLQUFmLEVBQXNCO0FBQUUsU0FBTyxNQUFNLENBQU4sQ0FBUCxDQUFGO0NBQXRCOztBQUVBLE9BQU8sT0FBUCxHQUFpQixLQUFqQiIsImZpbGUiOiJyZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgIEVsZW1lbnQgPSBlYXN5dWkuRWxlbWVudDtcblxudmFyIFJlYWN0Q2xhc3MgPSByZXF1aXJlKCcuL3JlYWN0Q2xhc3MnKSxcbiAgICBKU1hFbGVtZW50ID0gcmVxdWlyZSgnLi9qc3hFbGVtZW50JyksXG4gICAgSlNYVGV4dEVsZW1lbnQgPSByZXF1aXJlKCcuL2pzeFRleHRFbGVtZW50JyksXG4gICAgSlNYUmVuZGVyZWRFbGVtZW50ID0gcmVxdWlyZSgnLi9qc3hSZW5kZXJlZEVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3Qge1xuICBzdGF0aWMgY3JlYXRlQ2xhc3MocHJvcGVydGllcykgeyByZXR1cm4gUmVhY3RDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTsgfVxuXG4gIHN0YXRpYyBjcmVhdGVFbGVtZW50KHJlYWN0Q2xhc3NPckVsZW1lbnROYW1lLCBwcm9wZXJ0aWVzID0ge30sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChyZWFjdENsYXNzT3JFbGVtZW50TmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHZhciBqc3hFbGVtZW50ID0gdW5kZWZpbmVkLFxuICAgICAgICBjaGlsZEpTWEVsZW1lbnRzID0gY2hpbGRKU1hFbGVtZW50c0Zyb21SZW1haW5pbmdBcmd1bWVudHMuYXBwbHkobnVsbCwgcmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHZhciBlbGVtZW50TmFtZSxcbiAgICAgICAgZWxlbWVudEhUTUwsXG4gICAgICAgIGVsZW1lbnQ7XG5cbiAgICBpZiAodHlwZW9mIHJlYWN0Q2xhc3NPckVsZW1lbnROYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgZWxlbWVudE5hbWUgPSByZWFjdENsYXNzT3JFbGVtZW50TmFtZTtcbiAgICAgIGVsZW1lbnRIVE1MID0gJzwnICsgZWxlbWVudE5hbWUgKyAnLz4nO1xuICAgICAgZWxlbWVudCA9IEVsZW1lbnQuZnJvbUhUTUwoZWxlbWVudEhUTUwpO1xuXG4gICAgICBhZGRQcm9wZXJ0aWVzVG9FbGVtZW50QXNBdHRyaWJ1dGVzKGVsZW1lbnQsIHByb3BlcnRpZXMpO1xuXG4gICAgICBqc3hFbGVtZW50ID0gbmV3IEpTWEVsZW1lbnQoZWxlbWVudCwgY2hpbGRKU1hFbGVtZW50cyk7XG5cbiAgICAgIHJldHVybiBqc3hFbGVtZW50O1xuICAgIH1cblxuICAgIHZhciByZWFjdENsYXNzID0gcmVhY3RDbGFzc09yRWxlbWVudE5hbWUsIC8vL1xuICAgICAgICByZW5kZXIgPSByZWFjdENsYXNzLmdldFJlbmRlcigpO1xuXG4gICAgaWYgKHJlbmRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSByZWFjdENsYXNzLmdldERpc3BsYXlOYW1lKCk7XG5cbiAgICAgIGVsZW1lbnROYW1lID0gZGlzcGxheU5hbWU7ICAvLy9cbiAgICAgIGVsZW1lbnRIVE1MID0gJzwnICsgZWxlbWVudE5hbWUgKyAnLz4nO1xuICAgICAgZWxlbWVudCA9IEVsZW1lbnQuZnJvbUhUTUwoZWxlbWVudEhUTUwpO1xuXG4gICAgICBhZGRQcm9wZXJ0aWVzVG9FbGVtZW50QXNBdHRyaWJ1dGVzKGVsZW1lbnQsIHByb3BlcnRpZXMpO1xuXG4gICAgICBqc3hFbGVtZW50ID0gbmV3IEpTWEVsZW1lbnQoZWxlbWVudCwgY2hpbGRKU1hFbGVtZW50cyk7XG5cbiAgICAgIHJldHVybiBqc3hFbGVtZW50O1xuICAgIH1cblxuICAgIGpzeEVsZW1lbnQgPSBuZXcgSlNYUmVuZGVyZWRFbGVtZW50KHJlYWN0Q2xhc3MsIHByb3BlcnRpZXMsIGNoaWxkSlNYRWxlbWVudHMpO1xuICAgIFxuICAgIHJldHVybiBqc3hFbGVtZW50O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoaWxkSlNYRWxlbWVudHNGcm9tUmVtYWluaW5nQXJndW1lbnRzKCkge1xuICB2YXIgY2hpbGRKU1hFbGVtZW50cyxcbiAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksIC8vL1xuICAgICAgZmlyc3RSZW1haW5pbmdBcmd1bWVudCA9IGZpcnN0KHJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgaWYgKGZhbHNlKSB7XG4gICAgXG4gIH0gZWxzZSBpZiAoZmlyc3RSZW1haW5pbmdBcmd1bWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2hpbGRKU1hFbGVtZW50cyA9IFtdO1xuICB9IGVsc2UgaWYgKGZpcnN0UmVtYWluaW5nQXJndW1lbnQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIGNoaWxkSlNYRWxlbWVudHMgPSBmaXJzdFJlbWFpbmluZ0FyZ3VtZW50OyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY2hpbGRKU1hFbGVtZW50cyA9IHJlbWFpbmluZ0FyZ3VtZW50cy5tYXAoZnVuY3Rpb24ocmVtYWluaW5nQXJndW1lbnQpIHtcbiAgICAgIGlmICh0eXBlb2YgcmVtYWluaW5nQXJndW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciB0ZXh0ID0gcmVtYWluaW5nQXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIGNoaWxkSlNYVGV4dEVsZW1lbnQgPSBuZXcgSlNYVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkSlNYVGV4dEVsZW1lbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY2hpbGRKU1hFbGVtZW50ID0gcmVtYWluaW5nQXJndW1lbnQ7ICAvLy9cblxuICAgICAgICByZXR1cm4gY2hpbGRKU1hFbGVtZW50O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkSlNYRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGFkZFByb3BlcnRpZXNUb0VsZW1lbnRBc0F0dHJpYnV0ZXMoZWxlbWVudCwgcHJvcGVydGllcykge1xuICBpZiAocHJvcGVydGllcyAhPT0gbnVsbCkge1xuICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyk7XG5cbiAgICBwcm9wZXJ0eU5hbWVzLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5TmFtZSkge1xuICAgICAgdmFyIGF0dHJpYnV0ZU5hbWUsXG4gICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHByb3BlcnR5VmFsdWU7XG5cbiAgICAgIHN3aXRjaCAocHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGNhc2UgJ2NsYXNzTmFtZSc6XG4gICAgICAgICAgYXR0cmlidXRlTmFtZSA9ICdjbGFzcyc7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnaHRtbEZvcic6XG4gICAgICAgICAgYXR0cmlidXRlTmFtZSA9ICdmb3InO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYXR0cmlidXRlTmFtZSA9IHByb3BlcnR5TmFtZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuIl19
