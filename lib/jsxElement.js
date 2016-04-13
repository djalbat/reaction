'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    Element = easyui.Element;

var JSXTextElement = require('./jsxTextElement');

var JSXElement = function () {
  function JSXElement(elementOrSelector, properties, childJSXElements) {
    _classCallCheck(this, JSXElement);

    var element = elementOrSelector instanceof Element ? elementOrSelector : ///
    new Element(elementOrSelector);

    this.element = element;

    this.addPropertiesAsElementAttributes(properties);

    this.appendChildJSXElements(childJSXElements);
  }

  _createClass(JSXElement, [{
    key: 'getElement',
    value: function getElement() {
      return this.element;
    }
  }, {
    key: 'append',
    value: function append(jsxElementOrString) {
      if (typeof jsxElementOrString === 'string') {
        var string = jsxElementOrString; ///

        this.element.append(string);
      } else {
        var jsxElement = jsxElementOrString,
            ///
        element = jsxElement.getElement();

        this.element.append(element);
      }
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.element.remove();
    }
  }, {
    key: 'addPropertiesAsElementAttributes',
    value: function addPropertiesAsElementAttributes(properties) {
      if (properties === null) {
        return;
      }

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

        this.element.addAttribute(attributeName, attributeValue);
      }.bind(this));
    }
  }, {
    key: 'appendChildJSXElements',
    value: function appendChildJSXElements(childJSXElements) {
      childJSXElements.forEach(function (childJSXElement) {
        if (childJSXElement instanceof Array) {
          var childJSXElements = childJSXElement; ///

          this.appendChildJSXElements(childJSXElements);
        } else if (childJSXElement instanceof JSXElement) {
          var element = childJSXElement.getElement();

          this.element.append(element);
        } else if (childJSXElement instanceof JSXTextElement) {
          var childJSXTextElement = childJSXElement,
              ///
          text = childJSXTextElement.getText();

          this.element.append(text);
        } else if (childJSXElement instanceof JSXElement) {
          this.append(childJSXElement);
        }
      }.bind(this));
    }
  }], [{
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement) {
      var element = Element.fromDOMElement(domElement),
          properties = null,
          childJSXElements = [];

      return new JSXElement(element, properties, childJSXElements);
    }
  }]);

  return JSXElement;
}();

module.exports = JSXElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hFbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJLFNBQVMsUUFBUSxRQUFSLENBQVQ7SUFDQSxVQUFVLE9BQU8sT0FBUDs7QUFFZCxJQUFJLGlCQUFpQixRQUFRLGtCQUFSLENBQWpCOztJQUVFO0FBQ0osV0FESSxVQUNKLENBQVksaUJBQVosRUFBK0IsVUFBL0IsRUFBMkMsZ0JBQTNDLEVBQTZEOzBCQUR6RCxZQUN5RDs7QUFDM0QsUUFBSSxVQUFVLGlCQUFDLFlBQTZCLE9BQTdCLEdBQ2IsaUJBRFk7QUFFVixRQUFJLE9BQUosQ0FBWSxpQkFBWixDQUZVLENBRDZDOztBQUszRCxTQUFLLE9BQUwsR0FBZSxPQUFmLENBTDJEOztBQU8zRCxTQUFLLGdDQUFMLENBQXNDLFVBQXRDLEVBUDJEOztBQVMzRCxTQUFLLHNCQUFMLENBQTRCLGdCQUE1QixFQVQyRDtHQUE3RDs7ZUFESTs7aUNBYVM7QUFDWCxhQUFPLEtBQUssT0FBTCxDQURJOzs7OzJCQUlOLG9CQUFvQjtBQUN6QixVQUFJLE9BQU8sa0JBQVAsS0FBOEIsUUFBOUIsRUFBd0M7QUFDMUMsWUFBSSxTQUFTLGtCQUFUOztBQURzQyxZQUcxQyxDQUFLLE9BQUwsQ0FBYSxNQUFiLENBQW9CLE1BQXBCLEVBSDBDO09BQTVDLE1BSU87QUFDTCxZQUFJLGFBQWEsa0JBQWI7O0FBQ0Esa0JBQVUsV0FBVyxVQUFYLEVBQVYsQ0FGQzs7QUFJTCxhQUFLLE9BQUwsQ0FBYSxNQUFiLENBQW9CLE9BQXBCLEVBSks7T0FKUDs7Ozs2QkFZTztBQUNQLFdBQUssT0FBTCxDQUFhLE1BQWIsR0FETzs7OztxREFJd0IsWUFBWTtBQUMzQyxVQUFJLGVBQWUsSUFBZixFQUFxQjtBQUN2QixlQUR1QjtPQUF6Qjs7QUFJQSxVQUFJLGdCQUFnQixPQUFPLElBQVAsQ0FBWSxVQUFaLENBQWhCLENBTHVDOztBQU8zQyxvQkFBYyxPQUFkLENBQXNCLFVBQVUsWUFBVixFQUF3QjtBQUM1QyxZQUFJLGFBQUo7WUFDSSxnQkFBZ0IsV0FBVyxZQUFYLENBQWhCO1lBQ0EsaUJBQWlCLGFBQWpCLENBSHdDOztBQUs1QyxnQkFBUSxZQUFSO0FBQ0UsZUFBSyxXQUFMO0FBQ0UsNEJBQWdCLE9BQWhCLENBREY7QUFFRSxrQkFGRjs7QUFERixlQUtPLFNBQUw7QUFDRSw0QkFBZ0IsS0FBaEIsQ0FERjtBQUVFLGtCQUZGOztBQUxGO0FBVUksNEJBQWdCLFlBQWhCLENBREY7QUFFRSxrQkFGRjtBQVRGLFNBTDRDOztBQW1CNUMsYUFBSyxPQUFMLENBQWEsWUFBYixDQUEwQixhQUExQixFQUF5QyxjQUF6QyxFQW5CNEM7T0FBeEIsQ0FvQnBCLElBcEJvQixDQW9CZixJQXBCZSxDQUF0QixFQVAyQzs7OzsyQ0E4QnRCLGtCQUFrQjtBQUN2Qyx1QkFBaUIsT0FBakIsQ0FBeUIsVUFBUyxlQUFULEVBQTBCO0FBQ2pELFlBQUksMkJBQTJCLEtBQTNCLEVBQWtDO0FBQ3BDLGNBQUksbUJBQW1CLGVBQW5COztBQURnQyxjQUdwQyxDQUFLLHNCQUFMLENBQTRCLGdCQUE1QixFQUhvQztTQUF0QyxNQUlPLElBQUksMkJBQTJCLFVBQTNCLEVBQXVDO0FBQ2hELGNBQUksVUFBVSxnQkFBZ0IsVUFBaEIsRUFBVixDQUQ0Qzs7QUFHaEQsZUFBSyxPQUFMLENBQWEsTUFBYixDQUFvQixPQUFwQixFQUhnRDtTQUEzQyxNQUlBLElBQUksMkJBQTJCLGNBQTNCLEVBQTJDO0FBQ3BELGNBQUksc0JBQXNCLGVBQXRCOztBQUNBLGlCQUFPLG9CQUFvQixPQUFwQixFQUFQLENBRmdEOztBQUlwRCxlQUFLLE9BQUwsQ0FBYSxNQUFiLENBQW9CLElBQXBCLEVBSm9EO1NBQS9DLE1BS0EsSUFBSSwyQkFBMkIsVUFBM0IsRUFBdUM7QUFDaEQsZUFBSyxNQUFMLENBQVksZUFBWixFQURnRDtTQUEzQztPQWRnQixDQWlCdkIsSUFqQnVCLENBaUJsQixJQWpCa0IsQ0FBekIsRUFEdUM7Ozs7bUNBcUJuQixZQUFZO0FBQ2hDLFVBQUksVUFBVSxRQUFRLGNBQVIsQ0FBdUIsVUFBdkIsQ0FBVjtVQUNBLGFBQWEsSUFBYjtVQUNBLG1CQUFtQixFQUFuQixDQUg0Qjs7QUFLaEMsYUFBTyxJQUFJLFVBQUosQ0FBZSxPQUFmLEVBQXdCLFVBQXhCLEVBQW9DLGdCQUFwQyxDQUFQLENBTGdDOzs7O1NBckY5Qjs7O0FBOEZOLE9BQU8sT0FBUCxHQUFpQixVQUFqQiIsImZpbGUiOiJqc3hFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgRWxlbWVudCA9IGVhc3l1aS5FbGVtZW50O1xuXG52YXIgSlNYVGV4dEVsZW1lbnQgPSByZXF1aXJlKCcuL2pzeFRleHRFbGVtZW50Jyk7XG5cbmNsYXNzIEpTWEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50T3JTZWxlY3RvciwgcHJvcGVydGllcywgY2hpbGRKU1hFbGVtZW50cykge1xuICAgIHZhciBlbGVtZW50ID0gKGVsZW1lbnRPclNlbGVjdG9yIGluc3RhbmNlb2YgRWxlbWVudCkgP1xuICAgICAgZWxlbWVudE9yU2VsZWN0b3IgOiAgLy8vXG4gICAgICAgIG5ldyBFbGVtZW50KGVsZW1lbnRPclNlbGVjdG9yKTtcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICB0aGlzLmFkZFByb3BlcnRpZXNBc0VsZW1lbnRBdHRyaWJ1dGVzKHByb3BlcnRpZXMpO1xuXG4gICAgdGhpcy5hcHBlbmRDaGlsZEpTWEVsZW1lbnRzKGNoaWxkSlNYRWxlbWVudHMpO1xuICB9XG4gIFxuICBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gIH1cblxuICBhcHBlbmQoanN4RWxlbWVudE9yU3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBqc3hFbGVtZW50T3JTdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgc3RyaW5nID0ganN4RWxlbWVudE9yU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGpzeEVsZW1lbnQgPSBqc3hFbGVtZW50T3JTdHJpbmcsICAvLy9cbiAgICAgICAgICBlbGVtZW50ID0ganN4RWxlbWVudC5nZXRFbGVtZW50KCk7XG5cbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuXG4gIGFkZFByb3BlcnRpZXNBc0VsZW1lbnRBdHRyaWJ1dGVzKHByb3BlcnRpZXMpIHtcbiAgICBpZiAocHJvcGVydGllcyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICB2YXIgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpO1xuXG4gICAgcHJvcGVydHlOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eU5hbWUpIHtcbiAgICAgIHZhciBhdHRyaWJ1dGVOYW1lLFxuICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV0sXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBwcm9wZXJ0eVZhbHVlO1xuXG4gICAgICBzd2l0Y2ggKHByb3BlcnR5TmFtZSkge1xuICAgICAgICBjYXNlICdjbGFzc05hbWUnOlxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSAnY2xhc3MnO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2h0bWxGb3InOlxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSAnZm9yJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSBwcm9wZXJ0eU5hbWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWxlbWVudC5hZGRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBhcHBlbmRDaGlsZEpTWEVsZW1lbnRzKGNoaWxkSlNYRWxlbWVudHMpIHtcbiAgICBjaGlsZEpTWEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRKU1hFbGVtZW50KSB7XG4gICAgICBpZiAoY2hpbGRKU1hFbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgdmFyIGNoaWxkSlNYRWxlbWVudHMgPSBjaGlsZEpTWEVsZW1lbnQ7IC8vL1xuXG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGRKU1hFbGVtZW50cyhjaGlsZEpTWEVsZW1lbnRzKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hpbGRKU1hFbGVtZW50IGluc3RhbmNlb2YgSlNYRWxlbWVudCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGNoaWxkSlNYRWxlbWVudC5nZXRFbGVtZW50KCk7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZChlbGVtZW50KTtcbiAgICAgIH0gZWxzZSBpZiAoY2hpbGRKU1hFbGVtZW50IGluc3RhbmNlb2YgSlNYVGV4dEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGNoaWxkSlNYVGV4dEVsZW1lbnQgPSBjaGlsZEpTWEVsZW1lbnQsICAvLy9cbiAgICAgICAgICAgIHRleHQgPSBjaGlsZEpTWFRleHRFbGVtZW50LmdldFRleHQoKTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKHRleHQpO1xuICAgICAgfSBlbHNlIGlmIChjaGlsZEpTWEVsZW1lbnQgaW5zdGFuY2VvZiBKU1hFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKGNoaWxkSlNYRWxlbWVudClcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICB2YXIgZWxlbWVudCA9IEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCksXG4gICAgICAgIHByb3BlcnRpZXMgPSBudWxsLFxuICAgICAgICBjaGlsZEpTWEVsZW1lbnRzID0gW107XG4gICAgXG4gICAgcmV0dXJuIG5ldyBKU1hFbGVtZW50KGVsZW1lbnQsIHByb3BlcnRpZXMsIGNoaWxkSlNYRWxlbWVudHMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSlNYRWxlbWVudDtcblxuIl19
