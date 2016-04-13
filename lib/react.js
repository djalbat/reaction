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
    value: function createElement(reactClassOrElementName, properties) {
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

      var getInitialState = reactClass.getGetInitialState(),
          ///
      componentDidMount = reactClass.getComponentDidMount();

      jsxElement = new JSXRenderedElement(reactClass, childJSXElements, properties);

      return jsxElement;
    }
  }]);

  return React;
}();

function childJSXElementsFromRemainingArguments() {
  var childJSXElements = undefined,
      ///
  remainingArguments = Array.prototype.slice.call(arguments),
      ///
  firstRemainingArgument = first(remainingArguments);

  if (firstRemainingArgument === undefined) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSSxTQUFTLFFBQVEsUUFBUixDQUFUO0lBQ0EsVUFBVSxPQUFPLE9BQVA7O0FBRWQsSUFBSSxhQUFhLFFBQVEsY0FBUixDQUFiO0lBQ0EsYUFBYSxRQUFRLGNBQVIsQ0FBYjtJQUNBLGlCQUFpQixRQUFRLGtCQUFSLENBQWpCO0lBQ0EscUJBQXFCLFFBQVEsc0JBQVIsQ0FBckI7O0lBRUU7Ozs7Ozs7Z0NBQ2UsWUFBWTtBQUFFLGFBQU8sV0FBVyxjQUFYLENBQTBCLFVBQTFCLENBQVAsQ0FBRjs7OztrQ0FFVix5QkFBeUIsWUFBbUM7QUFDL0UsVUFBSSw0QkFBNEIsU0FBNUIsRUFBdUM7QUFDekMsZUFBTyxTQUFQLENBRHlDO09BQTNDOzt3Q0FEMkQ7O09BQW9COztBQUsvRSxVQUFJLGFBQWEsU0FBYjtVQUNBLG1CQUFtQix1Q0FBdUMsS0FBdkMsQ0FBNkMsSUFBN0MsRUFBbUQsa0JBQW5ELENBQW5CLENBTjJFOztBQVEvRSxVQUFJLFdBQUosRUFDSSxXQURKLEVBRUksT0FGSixDQVIrRTs7QUFZL0UsVUFBSSxPQUFPLHVCQUFQLEtBQW1DLFFBQW5DLEVBQTZDO0FBQy9DLHNCQUFjLHVCQUFkLENBRCtDO0FBRS9DLHNCQUFjLE1BQU0sV0FBTixHQUFvQixJQUFwQixDQUZpQztBQUcvQyxrQkFBVSxRQUFRLFFBQVIsQ0FBaUIsV0FBakIsQ0FBVixDQUgrQzs7QUFLL0MsMkNBQW1DLE9BQW5DLEVBQTRDLFVBQTVDLEVBTCtDOztBQU8vQyxxQkFBYSxJQUFJLFVBQUosQ0FBZSxPQUFmLEVBQXdCLGdCQUF4QixDQUFiLENBUCtDOztBQVMvQyxlQUFPLFVBQVAsQ0FUK0M7T0FBakQ7O0FBWUEsVUFBSSxhQUFhLHVCQUFiOztBQUNBLGVBQVMsV0FBVyxTQUFYLEVBQVQsQ0F6QjJFOztBQTJCL0UsVUFBSSxXQUFXLFNBQVgsRUFBc0I7QUFDeEIsWUFBSSxjQUFjLFdBQVcsY0FBWCxFQUFkLENBRG9COztBQUd4QixzQkFBYyxXQUFkO0FBSHdCLG1CQUl4QixHQUFjLE1BQU0sV0FBTixHQUFvQixJQUFwQixDQUpVO0FBS3hCLGtCQUFVLFFBQVEsUUFBUixDQUFpQixXQUFqQixDQUFWLENBTHdCOztBQU94QiwyQ0FBbUMsT0FBbkMsRUFBNEMsVUFBNUMsRUFQd0I7O0FBU3hCLHFCQUFhLElBQUksVUFBSixDQUFlLE9BQWYsRUFBd0IsZ0JBQXhCLENBQWIsQ0FUd0I7O0FBV3hCLGVBQU8sVUFBUCxDQVh3QjtPQUExQjs7QUFjQSxVQUFJLGtCQUFrQixXQUFXLGtCQUFYLEVBQWxCOztBQUNBLDBCQUFvQixXQUFXLG9CQUFYLEVBQXBCLENBMUMyRTs7QUE0Qy9FLG1CQUFhLElBQUksa0JBQUosQ0FBdUIsVUFBdkIsRUFBbUMsZ0JBQW5DLEVBQXFELFVBQXJELENBQWIsQ0E1QytFOztBQThDL0UsYUFBTyxVQUFQLENBOUMrRTs7OztTQUg3RTs7O0FBcUROLFNBQVMsc0NBQVQsR0FBa0Q7QUFDaEQsTUFBSSxtQkFBbUIsU0FBbkI7O0FBQ0EsdUJBQXFCLE1BQU0sU0FBTixDQUFnQixLQUFoQixDQUFzQixJQUF0QixDQUEyQixTQUEzQixDQUFyQjs7QUFDQSwyQkFBeUIsTUFBTSxrQkFBTixDQUF6QixDQUg0Qzs7QUFLaEQsTUFBSSwyQkFBMkIsU0FBM0IsRUFBc0M7QUFDeEMsdUJBQW1CLEVBQW5CLENBRHdDO0dBQTFDLE1BRU8sSUFBSSxrQ0FBa0MsS0FBbEMsRUFBeUM7QUFDbEQsdUJBQW1CLHNCQUFuQjtBQURrRCxHQUE3QyxNQUVBO0FBQ0wseUJBQW1CLG1CQUFtQixHQUFuQixDQUF1QixVQUFTLGlCQUFULEVBQTRCO0FBQ3BFLFlBQUksT0FBTyxpQkFBUCxLQUE2QixRQUE3QixFQUF1QztBQUN6QyxjQUFJLE9BQU8saUJBQVA7O0FBQ0EsZ0NBQXNCLElBQUksY0FBSixDQUFtQixJQUFuQixDQUF0QixDQUZxQzs7QUFJekMsaUJBQU8sbUJBQVAsQ0FKeUM7U0FBM0MsTUFLTztBQUNMLGNBQUksa0JBQWtCLGlCQUFsQjs7QUFEQyxpQkFHRSxlQUFQLENBSEs7U0FMUDtPQUR3QyxDQUExQyxDQURLO0tBRkE7O0FBaUJQLFNBQU8sZ0JBQVAsQ0F4QmdEO0NBQWxEOztBQTJCQSxTQUFTLGtDQUFULENBQTRDLE9BQTVDLEVBQXFELFVBQXJELEVBQWlFO0FBQy9ELE1BQUksZUFBZSxJQUFmLEVBQXFCO0FBQ3ZCLFFBQUksZ0JBQWdCLE9BQU8sSUFBUCxDQUFZLFVBQVosQ0FBaEIsQ0FEbUI7O0FBR3ZCLGtCQUFjLE9BQWQsQ0FBc0IsVUFBVSxZQUFWLEVBQXdCO0FBQzVDLFVBQUksYUFBSjtVQUNJLGdCQUFnQixXQUFXLFlBQVgsQ0FBaEI7VUFDQSxpQkFBaUIsYUFBakIsQ0FId0M7O0FBSzVDLGNBQVEsWUFBUjtBQUNFLGFBQUssV0FBTDtBQUNFLDBCQUFnQixPQUFoQixDQURGO0FBRUUsZ0JBRkY7O0FBREYsYUFLTyxTQUFMO0FBQ0UsMEJBQWdCLEtBQWhCLENBREY7QUFFRSxnQkFGRjs7QUFMRjtBQVVJLDBCQUFnQixZQUFoQixDQURGO0FBRUUsZ0JBRkY7QUFURixPQUw0Qzs7QUFtQjVDLGNBQVEsWUFBUixDQUFxQixhQUFyQixFQUFvQyxjQUFwQyxFQW5CNEM7S0FBeEIsQ0FBdEIsQ0FIdUI7R0FBekI7Q0FERjs7QUE0QkEsU0FBUyxLQUFULENBQWUsS0FBZixFQUFzQjtBQUFFLFNBQU8sTUFBTSxDQUFOLENBQVAsQ0FBRjtDQUF0Qjs7QUFFQSxPQUFPLE9BQVAsR0FBaUIsS0FBakIiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBFbGVtZW50ID0gZWFzeXVpLkVsZW1lbnQ7XG5cbnZhciBSZWFjdENsYXNzID0gcmVxdWlyZSgnLi9yZWFjdENsYXNzJyksXG4gICAgSlNYRWxlbWVudCA9IHJlcXVpcmUoJy4vanN4RWxlbWVudCcpLFxuICAgIEpTWFRleHRFbGVtZW50ID0gcmVxdWlyZSgnLi9qc3hUZXh0RWxlbWVudCcpLFxuICAgIEpTWFJlbmRlcmVkRWxlbWVudCA9IHJlcXVpcmUoJy4vanN4UmVuZGVyZWRFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0IHtcbiAgc3RhdGljIGNyZWF0ZUNsYXNzKHByb3BlcnRpZXMpIHsgcmV0dXJuIFJlYWN0Q2xhc3MuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7IH1cblxuICBzdGF0aWMgY3JlYXRlRWxlbWVudChyZWFjdENsYXNzT3JFbGVtZW50TmFtZSwgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKHJlYWN0Q2xhc3NPckVsZW1lbnROYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdmFyIGpzeEVsZW1lbnQgPSB1bmRlZmluZWQsXG4gICAgICAgIGNoaWxkSlNYRWxlbWVudHMgPSBjaGlsZEpTWEVsZW1lbnRzRnJvbVJlbWFpbmluZ0FyZ3VtZW50cy5hcHBseShudWxsLCByZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgdmFyIGVsZW1lbnROYW1lLFxuICAgICAgICBlbGVtZW50SFRNTCxcbiAgICAgICAgZWxlbWVudDtcblxuICAgIGlmICh0eXBlb2YgcmVhY3RDbGFzc09yRWxlbWVudE5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbGVtZW50TmFtZSA9IHJlYWN0Q2xhc3NPckVsZW1lbnROYW1lO1xuICAgICAgZWxlbWVudEhUTUwgPSAnPCcgKyBlbGVtZW50TmFtZSArICcvPic7XG4gICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tSFRNTChlbGVtZW50SFRNTCk7XG5cbiAgICAgIGFkZFByb3BlcnRpZXNUb0VsZW1lbnRBc0F0dHJpYnV0ZXMoZWxlbWVudCwgcHJvcGVydGllcyk7XG5cbiAgICAgIGpzeEVsZW1lbnQgPSBuZXcgSlNYRWxlbWVudChlbGVtZW50LCBjaGlsZEpTWEVsZW1lbnRzKTtcblxuICAgICAgcmV0dXJuIGpzeEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgdmFyIHJlYWN0Q2xhc3MgPSByZWFjdENsYXNzT3JFbGVtZW50TmFtZSwgLy8vXG4gICAgICAgIHJlbmRlciA9IHJlYWN0Q2xhc3MuZ2V0UmVuZGVyKCk7XG5cbiAgICBpZiAocmVuZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHJlYWN0Q2xhc3MuZ2V0RGlzcGxheU5hbWUoKTtcblxuICAgICAgZWxlbWVudE5hbWUgPSBkaXNwbGF5TmFtZTsgIC8vL1xuICAgICAgZWxlbWVudEhUTUwgPSAnPCcgKyBlbGVtZW50TmFtZSArICcvPic7XG4gICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tSFRNTChlbGVtZW50SFRNTCk7XG5cbiAgICAgIGFkZFByb3BlcnRpZXNUb0VsZW1lbnRBc0F0dHJpYnV0ZXMoZWxlbWVudCwgcHJvcGVydGllcyk7XG5cbiAgICAgIGpzeEVsZW1lbnQgPSBuZXcgSlNYRWxlbWVudChlbGVtZW50LCBjaGlsZEpTWEVsZW1lbnRzKTtcblxuICAgICAgcmV0dXJuIGpzeEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgdmFyIGdldEluaXRpYWxTdGF0ZSA9IHJlYWN0Q2xhc3MuZ2V0R2V0SW5pdGlhbFN0YXRlKCksIC8vL1xuICAgICAgICBjb21wb25lbnREaWRNb3VudCA9IHJlYWN0Q2xhc3MuZ2V0Q29tcG9uZW50RGlkTW91bnQoKTtcbiAgICBcbiAgICBqc3hFbGVtZW50ID0gbmV3IEpTWFJlbmRlcmVkRWxlbWVudChyZWFjdENsYXNzLCBjaGlsZEpTWEVsZW1lbnRzLCBwcm9wZXJ0aWVzKTtcbiAgICBcbiAgICByZXR1cm4ganN4RWxlbWVudDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGlsZEpTWEVsZW1lbnRzRnJvbVJlbWFpbmluZ0FyZ3VtZW50cygpIHtcbiAgdmFyIGNoaWxkSlNYRWxlbWVudHMgPSB1bmRlZmluZWQsIC8vL1xuICAgICAgcmVtYWluaW5nQXJndW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSwgLy8vXG4gICAgICBmaXJzdFJlbWFpbmluZ0FyZ3VtZW50ID0gZmlyc3QocmVtYWluaW5nQXJndW1lbnRzKTtcblxuICBpZiAoZmlyc3RSZW1haW5pbmdBcmd1bWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2hpbGRKU1hFbGVtZW50cyA9IFtdO1xuICB9IGVsc2UgaWYgKGZpcnN0UmVtYWluaW5nQXJndW1lbnQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIGNoaWxkSlNYRWxlbWVudHMgPSBmaXJzdFJlbWFpbmluZ0FyZ3VtZW50OyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY2hpbGRKU1hFbGVtZW50cyA9IHJlbWFpbmluZ0FyZ3VtZW50cy5tYXAoZnVuY3Rpb24ocmVtYWluaW5nQXJndW1lbnQpIHtcbiAgICAgIGlmICh0eXBlb2YgcmVtYWluaW5nQXJndW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciB0ZXh0ID0gcmVtYWluaW5nQXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIGNoaWxkSlNYVGV4dEVsZW1lbnQgPSBuZXcgSlNYVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkSlNYVGV4dEVsZW1lbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY2hpbGRKU1hFbGVtZW50ID0gcmVtYWluaW5nQXJndW1lbnQ7ICAvLy9cblxuICAgICAgICByZXR1cm4gY2hpbGRKU1hFbGVtZW50O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkSlNYRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGFkZFByb3BlcnRpZXNUb0VsZW1lbnRBc0F0dHJpYnV0ZXMoZWxlbWVudCwgcHJvcGVydGllcykge1xuICBpZiAocHJvcGVydGllcyAhPT0gbnVsbCkge1xuICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyk7XG5cbiAgICBwcm9wZXJ0eU5hbWVzLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5TmFtZSkge1xuICAgICAgdmFyIGF0dHJpYnV0ZU5hbWUsXG4gICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHByb3BlcnR5VmFsdWU7XG5cbiAgICAgIHN3aXRjaCAocHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGNhc2UgJ2NsYXNzTmFtZSc6XG4gICAgICAgICAgYXR0cmlidXRlTmFtZSA9ICdjbGFzcyc7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnaHRtbEZvcic6XG4gICAgICAgICAgYXR0cmlidXRlTmFtZSA9ICdmb3InO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYXR0cmlidXRlTmFtZSA9IHByb3BlcnR5TmFtZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuIl19
