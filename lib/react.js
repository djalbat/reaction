'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    Element = easyui.Element;

var ReactClass = require('./reactClass'),
    JSXElement = require('./jsxElement'),
    JSXTextElement = require('./jsxTextElement');

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
        return undefined; ///
      }

      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var element,
          childJSXElements = childJSXElementsFromRemainingArguments.apply(null, remainingArguments),
          ///
      jsxElement = undefined; ///

      if (typeof reactClassOrElementName === 'string') {
        var elementName = reactClassOrElementName,
            elementHTML = '<' + elementName + '/>';
        element = Element.fromHTML(elementHTML);

        addPropertiesAsAttributes(element, properties);

        jsxElement = new JSXElement(element, childJSXElements);
      } else {
        var reactClass = reactClassOrElementName,
            ///
        render = reactClass.getRender();

        if (render !== undefined) {
          var children = childJSXElements,
              ///
          instance = reactClass.instance(properties, children),
              componentDidMount = reactClass.getComponentDidMount();

          jsxElement = render.apply(instance);

          jsxElement.setComponentDidMount(componentDidMount.bind(instance)); ///
        }
      }

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

function addPropertiesAsAttributes(element, properties) {
  if (properties) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSSxTQUFTLFFBQVEsUUFBUixDQUFUO0lBQ0EsVUFBVSxPQUFPLE9BQVA7O0FBRWQsSUFBSSxhQUFhLFFBQVEsY0FBUixDQUFiO0lBQ0EsYUFBYSxRQUFRLGNBQVIsQ0FBYjtJQUNBLGlCQUFpQixRQUFRLGtCQUFSLENBQWpCOztJQUVFOzs7Ozs7O2dDQUNlLFlBQVk7QUFBRSxhQUFPLFdBQVcsY0FBWCxDQUEwQixVQUExQixDQUFQLENBQUY7Ozs7a0NBRVYseUJBQXlCLFlBQW1DO0FBQy9FLFVBQUksNEJBQTRCLFNBQTVCLEVBQXVDO0FBQ3pDLGVBQU8sU0FBUDtBQUR5QyxPQUEzQzs7d0NBRDJEOztPQUFvQjs7QUFLL0UsVUFBSSxPQUFKO1VBQ0ksbUJBQW1CLHVDQUF1QyxLQUF2QyxDQUE2QyxJQUE3QyxFQUFtRCxrQkFBbkQsQ0FBbkI7O0FBQ0EsbUJBQWEsU0FBYjs7QUFQMkUsVUFTM0UsT0FBTyx1QkFBUCxLQUFtQyxRQUFuQyxFQUE2QztBQUMvQyxZQUFJLGNBQWMsdUJBQWQ7WUFDQSxjQUFjLE1BQU0sV0FBTixHQUFvQixJQUFwQixDQUY2QjtBQUczQyxrQkFBVSxRQUFRLFFBQVIsQ0FBaUIsV0FBakIsQ0FBVixDQUgyQzs7QUFLL0Msa0NBQTBCLE9BQTFCLEVBQW1DLFVBQW5DLEVBTCtDOztBQU8vQyxxQkFBYSxJQUFJLFVBQUosQ0FBZSxPQUFmLEVBQXdCLGdCQUF4QixDQUFiLENBUCtDO09BQWpELE1BUU87QUFDTCxZQUFJLGFBQWEsdUJBQWI7O0FBQ0EsaUJBQVMsV0FBVyxTQUFYLEVBQVQsQ0FGQzs7QUFJTCxZQUFJLFdBQVcsU0FBWCxFQUFzQjtBQUN4QixjQUFJLFdBQVcsZ0JBQVg7O0FBQ0EscUJBQVcsV0FBVyxRQUFYLENBQW9CLFVBQXBCLEVBQWdDLFFBQWhDLENBQVg7Y0FDQSxvQkFBb0IsV0FBVyxvQkFBWCxFQUFwQixDQUhvQjs7QUFLeEIsdUJBQWEsT0FBTyxLQUFQLENBQWEsUUFBYixDQUFiLENBTHdCOztBQU94QixxQkFBVyxvQkFBWCxDQUFnQyxrQkFBa0IsSUFBbEIsQ0FBdUIsUUFBdkIsQ0FBaEM7QUFQd0IsU0FBMUI7T0FaRjs7QUF1QkEsYUFBTyxVQUFQLENBaEMrRTs7OztTQUg3RTs7O0FBdUNOLFNBQVMsc0NBQVQsR0FBa0Q7QUFDaEQsTUFBSSxtQkFBbUIsU0FBbkI7O0FBQ0EsdUJBQXFCLE1BQU0sU0FBTixDQUFnQixLQUFoQixDQUFzQixJQUF0QixDQUEyQixTQUEzQixDQUFyQjs7QUFDQSwyQkFBeUIsTUFBTSxrQkFBTixDQUF6QixDQUg0Qzs7QUFLaEQsTUFBSSwyQkFBMkIsU0FBM0IsRUFBc0M7QUFDeEMsdUJBQW1CLEVBQW5CLENBRHdDO0dBQTFDLE1BRU8sSUFBSSxrQ0FBa0MsS0FBbEMsRUFBeUM7QUFDbEQsdUJBQW1CLHNCQUFuQjtBQURrRCxHQUE3QyxNQUVBO0FBQ0wseUJBQW1CLG1CQUFtQixHQUFuQixDQUF1QixVQUFTLGlCQUFULEVBQTRCO0FBQ3BFLFlBQUksT0FBTyxpQkFBUCxLQUE2QixRQUE3QixFQUF1QztBQUN6QyxjQUFJLE9BQU8saUJBQVA7O0FBQ0EsZ0NBQXNCLElBQUksY0FBSixDQUFtQixJQUFuQixDQUF0QixDQUZxQzs7QUFJekMsaUJBQU8sbUJBQVAsQ0FKeUM7U0FBM0MsTUFLTztBQUNMLGNBQUksa0JBQWtCLGlCQUFsQjs7QUFEQyxpQkFHRSxlQUFQLENBSEs7U0FMUDtPQUR3QyxDQUExQyxDQURLO0tBRkE7O0FBaUJQLFNBQU8sZ0JBQVAsQ0F4QmdEO0NBQWxEOztBQTJCQSxTQUFTLHlCQUFULENBQW1DLE9BQW5DLEVBQTRDLFVBQTVDLEVBQXdEO0FBQ3RELE1BQUksVUFBSixFQUFnQjtBQUNkLFFBQUksZ0JBQWdCLE9BQU8sSUFBUCxDQUFZLFVBQVosQ0FBaEIsQ0FEVTs7QUFHZCxrQkFBYyxPQUFkLENBQXNCLFVBQVUsWUFBVixFQUF3QjtBQUM1QyxVQUFJLGFBQUo7VUFDSSxnQkFBZ0IsV0FBVyxZQUFYLENBQWhCO1VBQ0EsaUJBQWlCLGFBQWpCLENBSHdDOztBQUs1QyxjQUFRLFlBQVI7QUFDRSxhQUFLLFdBQUw7QUFDRSwwQkFBZ0IsT0FBaEIsQ0FERjtBQUVFLGdCQUZGOztBQURGLGFBS08sU0FBTDtBQUNFLDBCQUFnQixLQUFoQixDQURGO0FBRUUsZ0JBRkY7O0FBTEY7QUFVSSwwQkFBZ0IsWUFBaEIsQ0FERjtBQUVFLGdCQUZGO0FBVEYsT0FMNEM7O0FBbUI1QyxjQUFRLFlBQVIsQ0FBcUIsYUFBckIsRUFBb0MsY0FBcEMsRUFuQjRDO0tBQXhCLENBQXRCLENBSGM7R0FBaEI7Q0FERjs7QUE0QkEsU0FBUyxLQUFULENBQWUsS0FBZixFQUFzQjtBQUFFLFNBQU8sTUFBTSxDQUFOLENBQVAsQ0FBRjtDQUF0Qjs7QUFFQSxPQUFPLE9BQVAsR0FBaUIsS0FBakIiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBFbGVtZW50ID0gZWFzeXVpLkVsZW1lbnQ7XG5cbnZhciBSZWFjdENsYXNzID0gcmVxdWlyZSgnLi9yZWFjdENsYXNzJyksXG4gICAgSlNYRWxlbWVudCA9IHJlcXVpcmUoJy4vanN4RWxlbWVudCcpLFxuICAgIEpTWFRleHRFbGVtZW50ID0gcmVxdWlyZSgnLi9qc3hUZXh0RWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdCB7XG4gIHN0YXRpYyBjcmVhdGVDbGFzcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBSZWFjdENsYXNzLmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpOyB9XG5cbiAgc3RhdGljIGNyZWF0ZUVsZW1lbnQocmVhY3RDbGFzc09yRWxlbWVudE5hbWUsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChyZWFjdENsYXNzT3JFbGVtZW50TmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkOyAvLy9cbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCxcbiAgICAgICAgY2hpbGRKU1hFbGVtZW50cyA9IGNoaWxkSlNYRWxlbWVudHNGcm9tUmVtYWluaW5nQXJndW1lbnRzLmFwcGx5KG51bGwsIHJlbWFpbmluZ0FyZ3VtZW50cyksICAvLy9cbiAgICAgICAganN4RWxlbWVudCA9IHVuZGVmaW5lZDsgLy8vXG5cbiAgICBpZiAodHlwZW9mIHJlYWN0Q2xhc3NPckVsZW1lbnROYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIGVsZW1lbnROYW1lID0gcmVhY3RDbGFzc09yRWxlbWVudE5hbWUsXG4gICAgICAgICAgZWxlbWVudEhUTUwgPSAnPCcgKyBlbGVtZW50TmFtZSArICcvPic7XG4gICAgICAgICAgZWxlbWVudCA9IEVsZW1lbnQuZnJvbUhUTUwoZWxlbWVudEhUTUwpO1xuXG4gICAgICBhZGRQcm9wZXJ0aWVzQXNBdHRyaWJ1dGVzKGVsZW1lbnQsIHByb3BlcnRpZXMpO1xuXG4gICAgICBqc3hFbGVtZW50ID0gbmV3IEpTWEVsZW1lbnQoZWxlbWVudCwgY2hpbGRKU1hFbGVtZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByZWFjdENsYXNzID0gcmVhY3RDbGFzc09yRWxlbWVudE5hbWUsIC8vL1xuICAgICAgICAgIHJlbmRlciA9IHJlYWN0Q2xhc3MuZ2V0UmVuZGVyKCk7XG5cbiAgICAgIGlmIChyZW5kZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBjaGlsZEpTWEVsZW1lbnRzLCAgLy8vXG4gICAgICAgICAgICBpbnN0YW5jZSA9IHJlYWN0Q2xhc3MuaW5zdGFuY2UocHJvcGVydGllcywgY2hpbGRyZW4pLFxuICAgICAgICAgICAgY29tcG9uZW50RGlkTW91bnQgPSByZWFjdENsYXNzLmdldENvbXBvbmVudERpZE1vdW50KCk7XG5cbiAgICAgICAganN4RWxlbWVudCA9IHJlbmRlci5hcHBseShpbnN0YW5jZSk7XG5cbiAgICAgICAganN4RWxlbWVudC5zZXRDb21wb25lbnREaWRNb3VudChjb21wb25lbnREaWRNb3VudC5iaW5kKGluc3RhbmNlKSk7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ganN4RWxlbWVudDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGlsZEpTWEVsZW1lbnRzRnJvbVJlbWFpbmluZ0FyZ3VtZW50cygpIHtcbiAgdmFyIGNoaWxkSlNYRWxlbWVudHMgPSB1bmRlZmluZWQsIC8vL1xuICAgICAgcmVtYWluaW5nQXJndW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSwgLy8vXG4gICAgICBmaXJzdFJlbWFpbmluZ0FyZ3VtZW50ID0gZmlyc3QocmVtYWluaW5nQXJndW1lbnRzKTtcblxuICBpZiAoZmlyc3RSZW1haW5pbmdBcmd1bWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2hpbGRKU1hFbGVtZW50cyA9IFtdO1xuICB9IGVsc2UgaWYgKGZpcnN0UmVtYWluaW5nQXJndW1lbnQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIGNoaWxkSlNYRWxlbWVudHMgPSBmaXJzdFJlbWFpbmluZ0FyZ3VtZW50OyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY2hpbGRKU1hFbGVtZW50cyA9IHJlbWFpbmluZ0FyZ3VtZW50cy5tYXAoZnVuY3Rpb24ocmVtYWluaW5nQXJndW1lbnQpIHtcbiAgICAgIGlmICh0eXBlb2YgcmVtYWluaW5nQXJndW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciB0ZXh0ID0gcmVtYWluaW5nQXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIGNoaWxkSlNYVGV4dEVsZW1lbnQgPSBuZXcgSlNYVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkSlNYVGV4dEVsZW1lbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY2hpbGRKU1hFbGVtZW50ID0gcmVtYWluaW5nQXJndW1lbnQ7ICAvLy9cblxuICAgICAgICByZXR1cm4gY2hpbGRKU1hFbGVtZW50O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkSlNYRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGFkZFByb3BlcnRpZXNBc0F0dHJpYnV0ZXMoZWxlbWVudCwgcHJvcGVydGllcykge1xuICBpZiAocHJvcGVydGllcykge1xuICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyk7XG5cbiAgICBwcm9wZXJ0eU5hbWVzLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5TmFtZSkge1xuICAgICAgdmFyIGF0dHJpYnV0ZU5hbWUsXG4gICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHByb3BlcnR5VmFsdWU7XG5cbiAgICAgIHN3aXRjaCAocHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGNhc2UgJ2NsYXNzTmFtZSc6XG4gICAgICAgICAgYXR0cmlidXRlTmFtZSA9ICdjbGFzcyc7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnaHRtbEZvcic6XG4gICAgICAgICAgYXR0cmlidXRlTmFtZSA9ICdmb3InO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYXR0cmlidXRlTmFtZSA9IHByb3BlcnR5TmFtZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuIl19
