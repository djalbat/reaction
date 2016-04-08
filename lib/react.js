'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactClass = require('./reactClass'),
    Element = require('./element'),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSSxhQUFhLFFBQVEsY0FBUixDQUFiO0lBQ0EsVUFBVSxRQUFRLFdBQVIsQ0FBVjtJQUNBLGFBQWEsUUFBUSxjQUFSLENBQWI7SUFDQSxpQkFBaUIsUUFBUSxrQkFBUixDQUFqQjs7SUFFRTs7Ozs7OztnQ0FDZSxZQUFZO0FBQUUsYUFBTyxXQUFXLGNBQVgsQ0FBMEIsVUFBMUIsQ0FBUCxDQUFGOzs7O2tDQUVWLHlCQUF5QixZQUFtQztBQUMvRSxVQUFJLDRCQUE0QixTQUE1QixFQUF1QztBQUN6QyxlQUFPLFNBQVA7QUFEeUMsT0FBM0M7O3dDQUQyRDs7T0FBb0I7O0FBSy9FLFVBQUksT0FBSjtVQUNJLG1CQUFtQix1Q0FBdUMsS0FBdkMsQ0FBNkMsSUFBN0MsRUFBbUQsa0JBQW5ELENBQW5COztBQUNBLG1CQUFhLFNBQWI7O0FBUDJFLFVBUzNFLE9BQU8sdUJBQVAsS0FBbUMsUUFBbkMsRUFBNkM7QUFDL0MsWUFBSSxjQUFjLHVCQUFkO1lBQ0EsY0FBYyxNQUFNLFdBQU4sR0FBb0IsSUFBcEIsQ0FGNkI7QUFHM0Msa0JBQVUsUUFBUSxRQUFSLENBQWlCLFdBQWpCLENBQVYsQ0FIMkM7O0FBSy9DLGtDQUEwQixPQUExQixFQUFtQyxVQUFuQyxFQUwrQzs7QUFPL0MscUJBQWEsSUFBSSxVQUFKLENBQWUsT0FBZixFQUF3QixnQkFBeEIsQ0FBYixDQVArQztPQUFqRCxNQVFPO0FBQ0wsWUFBSSxhQUFhLHVCQUFiOztBQUNBLGlCQUFTLFdBQVcsU0FBWCxFQUFULENBRkM7O0FBSUwsWUFBSSxXQUFXLFNBQVgsRUFBc0I7QUFDeEIsY0FBSSxXQUFXLGdCQUFYOztBQUNBLHFCQUFXLFdBQVcsUUFBWCxDQUFvQixVQUFwQixFQUFnQyxRQUFoQyxDQUFYO2NBQ0Esb0JBQW9CLFdBQVcsb0JBQVgsRUFBcEIsQ0FIb0I7O0FBS3hCLHVCQUFhLE9BQU8sS0FBUCxDQUFhLFFBQWIsQ0FBYixDQUx3Qjs7QUFPeEIscUJBQVcsb0JBQVgsQ0FBZ0Msa0JBQWtCLElBQWxCLENBQXVCLFFBQXZCLENBQWhDO0FBUHdCLFNBQTFCO09BWkY7O0FBdUJBLGFBQU8sVUFBUCxDQWhDK0U7Ozs7U0FIN0U7OztBQXVDTixTQUFTLHNDQUFULEdBQWtEO0FBQ2hELE1BQUksbUJBQW1CLFNBQW5COztBQUNBLHVCQUFxQixNQUFNLFNBQU4sQ0FBZ0IsS0FBaEIsQ0FBc0IsSUFBdEIsQ0FBMkIsU0FBM0IsQ0FBckI7O0FBQ0EsMkJBQXlCLE1BQU0sa0JBQU4sQ0FBekIsQ0FINEM7O0FBS2hELE1BQUksMkJBQTJCLFNBQTNCLEVBQXNDO0FBQ3hDLHVCQUFtQixFQUFuQixDQUR3QztHQUExQyxNQUVPLElBQUksa0NBQWtDLEtBQWxDLEVBQXlDO0FBQ2xELHVCQUFtQixzQkFBbkI7QUFEa0QsR0FBN0MsTUFFQTtBQUNMLHlCQUFtQixtQkFBbUIsR0FBbkIsQ0FBdUIsVUFBUyxpQkFBVCxFQUE0QjtBQUNwRSxZQUFJLE9BQU8saUJBQVAsS0FBNkIsUUFBN0IsRUFBdUM7QUFDekMsY0FBSSxPQUFPLGlCQUFQOztBQUNBLGdDQUFzQixJQUFJLGNBQUosQ0FBbUIsSUFBbkIsQ0FBdEIsQ0FGcUM7O0FBSXpDLGlCQUFPLG1CQUFQLENBSnlDO1NBQTNDLE1BS087QUFDTCxjQUFJLGtCQUFrQixpQkFBbEI7O0FBREMsaUJBR0UsZUFBUCxDQUhLO1NBTFA7T0FEd0MsQ0FBMUMsQ0FESztLQUZBOztBQWlCUCxTQUFPLGdCQUFQLENBeEJnRDtDQUFsRDs7QUEyQkEsU0FBUyx5QkFBVCxDQUFtQyxPQUFuQyxFQUE0QyxVQUE1QyxFQUF3RDtBQUN0RCxNQUFJLFVBQUosRUFBZ0I7QUFDZCxRQUFJLGdCQUFnQixPQUFPLElBQVAsQ0FBWSxVQUFaLENBQWhCLENBRFU7O0FBR2Qsa0JBQWMsT0FBZCxDQUFzQixVQUFVLFlBQVYsRUFBd0I7QUFDNUMsVUFBSSxhQUFKO1VBQ0ksZ0JBQWdCLFdBQVcsWUFBWCxDQUFoQjtVQUNBLGlCQUFpQixhQUFqQixDQUh3Qzs7QUFLNUMsY0FBUSxZQUFSO0FBQ0UsYUFBSyxXQUFMO0FBQ0UsMEJBQWdCLE9BQWhCLENBREY7QUFFRSxnQkFGRjs7QUFERixhQUtPLFNBQUw7QUFDRSwwQkFBZ0IsS0FBaEIsQ0FERjtBQUVFLGdCQUZGOztBQUxGO0FBVUksMEJBQWdCLFlBQWhCLENBREY7QUFFRSxnQkFGRjtBQVRGLE9BTDRDOztBQW1CNUMsY0FBUSxZQUFSLENBQXFCLGFBQXJCLEVBQW9DLGNBQXBDLEVBbkI0QztLQUF4QixDQUF0QixDQUhjO0dBQWhCO0NBREY7O0FBNEJBLFNBQVMsS0FBVCxDQUFlLEtBQWYsRUFBc0I7QUFBRSxTQUFPLE1BQU0sQ0FBTixDQUFQLENBQUY7Q0FBdEI7O0FBRUEsT0FBTyxPQUFQLEdBQWlCLEtBQWpCIiwiZmlsZSI6InJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RDbGFzcyA9IHJlcXVpcmUoJy4vcmVhY3RDbGFzcycpLFxuICAgIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKSxcbiAgICBKU1hFbGVtZW50ID0gcmVxdWlyZSgnLi9qc3hFbGVtZW50JyksXG4gICAgSlNYVGV4dEVsZW1lbnQgPSByZXF1aXJlKCcuL2pzeFRleHRFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0IHtcbiAgc3RhdGljIGNyZWF0ZUNsYXNzKHByb3BlcnRpZXMpIHsgcmV0dXJuIFJlYWN0Q2xhc3MuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7IH1cblxuICBzdGF0aWMgY3JlYXRlRWxlbWVudChyZWFjdENsYXNzT3JFbGVtZW50TmFtZSwgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKHJlYWN0Q2xhc3NPckVsZW1lbnROYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7IC8vL1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50LFxuICAgICAgICBjaGlsZEpTWEVsZW1lbnRzID0gY2hpbGRKU1hFbGVtZW50c0Zyb21SZW1haW5pbmdBcmd1bWVudHMuYXBwbHkobnVsbCwgcmVtYWluaW5nQXJndW1lbnRzKSwgIC8vL1xuICAgICAgICBqc3hFbGVtZW50ID0gdW5kZWZpbmVkOyAvLy9cblxuICAgIGlmICh0eXBlb2YgcmVhY3RDbGFzc09yRWxlbWVudE5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgZWxlbWVudE5hbWUgPSByZWFjdENsYXNzT3JFbGVtZW50TmFtZSxcbiAgICAgICAgICBlbGVtZW50SFRNTCA9ICc8JyArIGVsZW1lbnROYW1lICsgJy8+JztcbiAgICAgICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tSFRNTChlbGVtZW50SFRNTCk7XG5cbiAgICAgIGFkZFByb3BlcnRpZXNBc0F0dHJpYnV0ZXMoZWxlbWVudCwgcHJvcGVydGllcyk7XG5cbiAgICAgIGpzeEVsZW1lbnQgPSBuZXcgSlNYRWxlbWVudChlbGVtZW50LCBjaGlsZEpTWEVsZW1lbnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJlYWN0Q2xhc3MgPSByZWFjdENsYXNzT3JFbGVtZW50TmFtZSwgLy8vXG4gICAgICAgICAgcmVuZGVyID0gcmVhY3RDbGFzcy5nZXRSZW5kZXIoKTtcblxuICAgICAgaWYgKHJlbmRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IGNoaWxkSlNYRWxlbWVudHMsICAvLy9cbiAgICAgICAgICAgIGluc3RhbmNlID0gcmVhY3RDbGFzcy5pbnN0YW5jZShwcm9wZXJ0aWVzLCBjaGlsZHJlbiksXG4gICAgICAgICAgICBjb21wb25lbnREaWRNb3VudCA9IHJlYWN0Q2xhc3MuZ2V0Q29tcG9uZW50RGlkTW91bnQoKTtcblxuICAgICAgICBqc3hFbGVtZW50ID0gcmVuZGVyLmFwcGx5KGluc3RhbmNlKTtcblxuICAgICAgICBqc3hFbGVtZW50LnNldENvbXBvbmVudERpZE1vdW50KGNvbXBvbmVudERpZE1vdW50LmJpbmQoaW5zdGFuY2UpKTsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBqc3hFbGVtZW50O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoaWxkSlNYRWxlbWVudHNGcm9tUmVtYWluaW5nQXJndW1lbnRzKCkge1xuICB2YXIgY2hpbGRKU1hFbGVtZW50cyA9IHVuZGVmaW5lZCwgLy8vXG4gICAgICByZW1haW5pbmdBcmd1bWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLCAvLy9cbiAgICAgIGZpcnN0UmVtYWluaW5nQXJndW1lbnQgPSBmaXJzdChyZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gIGlmIChmaXJzdFJlbWFpbmluZ0FyZ3VtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICBjaGlsZEpTWEVsZW1lbnRzID0gW107XG4gIH0gZWxzZSBpZiAoZmlyc3RSZW1haW5pbmdBcmd1bWVudCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgY2hpbGRKU1hFbGVtZW50cyA9IGZpcnN0UmVtYWluaW5nQXJndW1lbnQ7ICAvLy9cbiAgfSBlbHNlIHtcbiAgICBjaGlsZEpTWEVsZW1lbnRzID0gcmVtYWluaW5nQXJndW1lbnRzLm1hcChmdW5jdGlvbihyZW1haW5pbmdBcmd1bWVudCkge1xuICAgICAgaWYgKHR5cGVvZiByZW1haW5pbmdBcmd1bWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIHRleHQgPSByZW1haW5pbmdBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgY2hpbGRKU1hUZXh0RWxlbWVudCA9IG5ldyBKU1hUZXh0RWxlbWVudCh0ZXh0KTtcblxuICAgICAgICByZXR1cm4gY2hpbGRKU1hUZXh0RWxlbWVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjaGlsZEpTWEVsZW1lbnQgPSByZW1haW5pbmdBcmd1bWVudDsgIC8vL1xuXG4gICAgICAgIHJldHVybiBjaGlsZEpTWEVsZW1lbnQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gY2hpbGRKU1hFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gYWRkUHJvcGVydGllc0FzQXR0cmlidXRlcyhlbGVtZW50LCBwcm9wZXJ0aWVzKSB7XG4gIGlmIChwcm9wZXJ0aWVzKSB7XG4gICAgdmFyIHByb3BlcnR5TmFtZXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKTtcblxuICAgIHByb3BlcnR5TmFtZXMuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHlOYW1lKSB7XG4gICAgICB2YXIgYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gcHJvcGVydHlWYWx1ZTtcblxuICAgICAgc3dpdGNoIChwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgY2FzZSAnY2xhc3NOYW1lJzpcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gJ2NsYXNzJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdodG1sRm9yJzpcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gJ2Zvcic7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gcHJvcGVydHlOYW1lO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBlbGVtZW50LmFkZEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG4iXX0=
