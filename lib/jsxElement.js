'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    Element = easyui.Element;

var JSXTextElement = require('./jsxTextElement');

var JSXElement = function () {
  function JSXElement(elementOrElementName, properties, childJSXElements) {
    _classCallCheck(this, JSXElement);

    var element;

    if (elementOrElementName instanceof Element) {
      element = elementOrElementName; ///
    } else {
        var elementName = elementOrElementName,
            elementHTML = '<' + elementName + '/>';

        element = Element.fromHTML(elementHTML);
      }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hFbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJLFNBQVMsUUFBUSxRQUFSLENBQVQ7SUFDQSxVQUFVLE9BQU8sT0FBUDs7QUFFZCxJQUFJLGlCQUFpQixRQUFRLGtCQUFSLENBQWpCOztJQUVFO0FBQ0osV0FESSxVQUNKLENBQVksb0JBQVosRUFBa0MsVUFBbEMsRUFBOEMsZ0JBQTlDLEVBQWdFOzBCQUQ1RCxZQUM0RDs7QUFDOUQsUUFBSSxPQUFKLENBRDhEOztBQUc5RCxRQUFJLGdDQUFnQyxPQUFoQyxFQUF5QztBQUMzQyxnQkFBVSxvQkFBVjtBQUQyQyxLQUE3QyxNQUVPO0FBQ0wsWUFBSSxjQUFjLG9CQUFkO1lBQ0EsY0FBYyxNQUFNLFdBQU4sR0FBb0IsSUFBcEIsQ0FGYjs7QUFJTCxrQkFBVSxRQUFRLFFBQVIsQ0FBaUIsV0FBakIsQ0FBVixDQUpLO09BRlA7O0FBU0EsU0FBSyxPQUFMLEdBQWUsT0FBZixDQVo4RDs7QUFjOUQsU0FBSyxnQ0FBTCxDQUFzQyxVQUF0QyxFQWQ4RDs7QUFnQjlELFNBQUssc0JBQUwsQ0FBNEIsZ0JBQTVCLEVBaEI4RDtHQUFoRTs7ZUFESTs7aUNBb0JTO0FBQ1gsYUFBTyxLQUFLLE9BQUwsQ0FESTs7OzsyQkFJTixvQkFBb0I7QUFDekIsVUFBSSxPQUFPLGtCQUFQLEtBQThCLFFBQTlCLEVBQXdDO0FBQzFDLFlBQUksU0FBUyxrQkFBVDs7QUFEc0MsWUFHMUMsQ0FBSyxPQUFMLENBQWEsTUFBYixDQUFvQixNQUFwQixFQUgwQztPQUE1QyxNQUlPO0FBQ0wsWUFBSSxhQUFhLGtCQUFiOztBQUNBLGtCQUFVLFdBQVcsVUFBWCxFQUFWLENBRkM7O0FBSUwsYUFBSyxPQUFMLENBQWEsTUFBYixDQUFvQixPQUFwQixFQUpLO09BSlA7Ozs7NkJBWU87QUFDUCxXQUFLLE9BQUwsQ0FBYSxNQUFiLEdBRE87Ozs7cURBSXdCLFlBQVk7QUFDM0MsVUFBSSxlQUFlLElBQWYsRUFBcUI7QUFDdkIsZUFEdUI7T0FBekI7O0FBSUEsVUFBSSxnQkFBZ0IsT0FBTyxJQUFQLENBQVksVUFBWixDQUFoQixDQUx1Qzs7QUFPM0Msb0JBQWMsT0FBZCxDQUFzQixVQUFVLFlBQVYsRUFBd0I7QUFDNUMsWUFBSSxhQUFKO1lBQ0ksZ0JBQWdCLFdBQVcsWUFBWCxDQUFoQjtZQUNBLGlCQUFpQixhQUFqQixDQUh3Qzs7QUFLNUMsZ0JBQVEsWUFBUjtBQUNFLGVBQUssV0FBTDtBQUNFLDRCQUFnQixPQUFoQixDQURGO0FBRUUsa0JBRkY7O0FBREYsZUFLTyxTQUFMO0FBQ0UsNEJBQWdCLEtBQWhCLENBREY7QUFFRSxrQkFGRjs7QUFMRjtBQVVJLDRCQUFnQixZQUFoQixDQURGO0FBRUUsa0JBRkY7QUFURixTQUw0Qzs7QUFtQjVDLGFBQUssT0FBTCxDQUFhLFlBQWIsQ0FBMEIsYUFBMUIsRUFBeUMsY0FBekMsRUFuQjRDO09BQXhCLENBb0JwQixJQXBCb0IsQ0FvQmYsSUFwQmUsQ0FBdEIsRUFQMkM7Ozs7MkNBOEJ0QixrQkFBa0I7QUFDdkMsdUJBQWlCLE9BQWpCLENBQXlCLFVBQVMsZUFBVCxFQUEwQjtBQUNqRCxZQUFJLDJCQUEyQixLQUEzQixFQUFrQztBQUNwQyxjQUFJLG1CQUFtQixlQUFuQjs7QUFEZ0MsY0FHcEMsQ0FBSyxzQkFBTCxDQUE0QixnQkFBNUIsRUFIb0M7U0FBdEMsTUFJTyxJQUFJLDJCQUEyQixVQUEzQixFQUF1QztBQUNoRCxjQUFJLFVBQVUsZ0JBQWdCLFVBQWhCLEVBQVYsQ0FENEM7O0FBR2hELGVBQUssT0FBTCxDQUFhLE1BQWIsQ0FBb0IsT0FBcEIsRUFIZ0Q7U0FBM0MsTUFJQSxJQUFJLDJCQUEyQixjQUEzQixFQUEyQztBQUNwRCxjQUFJLHNCQUFzQixlQUF0Qjs7QUFDQSxpQkFBTyxvQkFBb0IsT0FBcEIsRUFBUCxDQUZnRDs7QUFJcEQsZUFBSyxPQUFMLENBQWEsTUFBYixDQUFvQixJQUFwQixFQUpvRDtTQUEvQyxNQUtBLElBQUksMkJBQTJCLFVBQTNCLEVBQXVDO0FBQ2hELGVBQUssTUFBTCxDQUFZLGVBQVosRUFEZ0Q7U0FBM0M7T0FkZ0IsQ0FpQnZCLElBakJ1QixDQWlCbEIsSUFqQmtCLENBQXpCLEVBRHVDOzs7O21DQXFCbkIsWUFBWTtBQUNoQyxVQUFJLFVBQVUsUUFBUSxjQUFSLENBQXVCLFVBQXZCLENBQVY7VUFDQSxhQUFhLElBQWI7VUFDQSxtQkFBbUIsRUFBbkIsQ0FINEI7O0FBS2hDLGFBQU8sSUFBSSxVQUFKLENBQWUsT0FBZixFQUF3QixVQUF4QixFQUFvQyxnQkFBcEMsQ0FBUCxDQUxnQzs7OztTQTVGOUI7OztBQXFHTixPQUFPLE9BQVAsR0FBaUIsVUFBakIiLCJmaWxlIjoianN4RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgIEVsZW1lbnQgPSBlYXN5dWkuRWxlbWVudDtcblxudmFyIEpTWFRleHRFbGVtZW50ID0gcmVxdWlyZSgnLi9qc3hUZXh0RWxlbWVudCcpO1xuXG5jbGFzcyBKU1hFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudE9yRWxlbWVudE5hbWUsIHByb3BlcnRpZXMsIGNoaWxkSlNYRWxlbWVudHMpIHtcbiAgICB2YXIgZWxlbWVudDtcblxuICAgIGlmIChlbGVtZW50T3JFbGVtZW50TmFtZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50T3JFbGVtZW50TmFtZTsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBlbGVtZW50TmFtZSA9IGVsZW1lbnRPckVsZW1lbnROYW1lLFxuICAgICAgICAgIGVsZW1lbnRIVE1MID0gJzwnICsgZWxlbWVudE5hbWUgKyAnLz4nO1xuXG4gICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tSFRNTChlbGVtZW50SFRNTCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgIHRoaXMuYWRkUHJvcGVydGllc0FzRWxlbWVudEF0dHJpYnV0ZXMocHJvcGVydGllcyk7XG5cbiAgICB0aGlzLmFwcGVuZENoaWxkSlNYRWxlbWVudHMoY2hpbGRKU1hFbGVtZW50cyk7XG4gIH1cbiAgXG4gIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgfVxuXG4gIGFwcGVuZChqc3hFbGVtZW50T3JTdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIGpzeEVsZW1lbnRPclN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBqc3hFbGVtZW50T3JTdHJpbmc7ICAvLy9cblxuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZChzdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIganN4RWxlbWVudCA9IGpzeEVsZW1lbnRPclN0cmluZywgIC8vL1xuICAgICAgICAgIGVsZW1lbnQgPSBqc3hFbGVtZW50LmdldEVsZW1lbnQoKTtcblxuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZChlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICB9XG5cbiAgYWRkUHJvcGVydGllc0FzRWxlbWVudEF0dHJpYnV0ZXMocHJvcGVydGllcykge1xuICAgIGlmIChwcm9wZXJ0aWVzID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BlcnR5TmFtZXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKTtcblxuICAgIHByb3BlcnR5TmFtZXMuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHlOYW1lKSB7XG4gICAgICB2YXIgYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gcHJvcGVydHlWYWx1ZTtcblxuICAgICAgc3dpdGNoIChwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgY2FzZSAnY2xhc3NOYW1lJzpcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gJ2NsYXNzJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdodG1sRm9yJzpcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gJ2Zvcic7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gcHJvcGVydHlOYW1lO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVsZW1lbnQuYWRkQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgYXBwZW5kQ2hpbGRKU1hFbGVtZW50cyhjaGlsZEpTWEVsZW1lbnRzKSB7XG4gICAgY2hpbGRKU1hFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkSlNYRWxlbWVudCkge1xuICAgICAgaWYgKGNoaWxkSlNYRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHZhciBjaGlsZEpTWEVsZW1lbnRzID0gY2hpbGRKU1hFbGVtZW50OyAvLy9cblxuICAgICAgICB0aGlzLmFwcGVuZENoaWxkSlNYRWxlbWVudHMoY2hpbGRKU1hFbGVtZW50cyk7XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkSlNYRWxlbWVudCBpbnN0YW5jZW9mIEpTWEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBjaGlsZEpTWEVsZW1lbnQuZ2V0RWxlbWVudCgpO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoZWxlbWVudCk7XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkSlNYRWxlbWVudCBpbnN0YW5jZW9mIEpTWFRleHRFbGVtZW50KSB7XG4gICAgICAgIHZhciBjaGlsZEpTWFRleHRFbGVtZW50ID0gY2hpbGRKU1hFbGVtZW50LCAgLy8vXG4gICAgICAgICAgICB0ZXh0ID0gY2hpbGRKU1hUZXh0RWxlbWVudC5nZXRUZXh0KCk7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZCh0ZXh0KTtcbiAgICAgIH0gZWxzZSBpZiAoY2hpbGRKU1hFbGVtZW50IGluc3RhbmNlb2YgSlNYRWxlbWVudCkge1xuICAgICAgICB0aGlzLmFwcGVuZChjaGlsZEpTWEVsZW1lbnQpXG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgdmFyIGVsZW1lbnQgPSBFbGVtZW50LmZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpLFxuICAgICAgICBwcm9wZXJ0aWVzID0gbnVsbCxcbiAgICAgICAgY2hpbGRKU1hFbGVtZW50cyA9IFtdO1xuICAgIFxuICAgIHJldHVybiBuZXcgSlNYRWxlbWVudChlbGVtZW50LCBwcm9wZXJ0aWVzLCBjaGlsZEpTWEVsZW1lbnRzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEpTWEVsZW1lbnQ7XG5cbiJdfQ==
