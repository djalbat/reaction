'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    Element = easyui.Element;

var JSXElement = function () {
  function JSXElement(elementOrElementName, properties, childJSXElements) {
    _classCallCheck(this, JSXElement);

    var element;

    if (elementOrElementName instanceof Element) {
      element = elementOrElementName; ///
    } else {
        var elementName = elementOrElementName,
            ///
        elementHTML = '<' + elementName + '/>';

        element = Element.fromHTML(elementHTML);
      }

    this.element = element;

    this.properties = properties;

    this.childJSXElements = childJSXElements;

    this.addPropertiesToElementAsAttributes();
  }

  _createClass(JSXElement, [{
    key: 'getElement',
    value: function getElement() {
      return this.element;
    }
  }, {
    key: 'mount',
    value: function mount(parentJSXElement) {
      this.childJSXElements.forEach(function (childJSXElement) {
        childJSXElement.mount(this);
      }.bind(this));

      parentJSXElement.append(this);
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
    key: 'empty',
    value: function empty() {
      this.element.empty();
    }
  }, {
    key: 'addPropertiesToElementAsAttributes',
    value: function addPropertiesToElementAsAttributes() {
      if (this.properties === null) {
        return;
      }

      var propertyNames = Object.keys(this.properties);

      propertyNames.forEach(function (propertyName) {
        var attributeName,
            propertyValue = this.properties[propertyName];

        if (typeof propertyValue === 'function') {
          if (beginsWith(propertyName, 'on')) {
            var events = propertyName.substring(2).toLowerCase(),
                ///
            handler = propertyValue; ///

            this.element.on(events, handler);
          }
        } else {
          var attributeValue = propertyValue;

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

function beginsWith(string, beginningString) {
  var regExp = new RegExp('^' + beginningString),
      matches = string.match(regExp);

  return !!matches; ///
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hFbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJLFNBQVMsUUFBUSxRQUFSLENBQVQ7SUFDQSxVQUFVLE9BQU8sT0FBUDs7SUFFUjtBQUNKLFdBREksVUFDSixDQUFZLG9CQUFaLEVBQWtDLFVBQWxDLEVBQThDLGdCQUE5QyxFQUFnRTswQkFENUQsWUFDNEQ7O0FBQzlELFFBQUksT0FBSixDQUQ4RDs7QUFHOUQsUUFBSSxnQ0FBZ0MsT0FBaEMsRUFBeUM7QUFDM0MsZ0JBQVUsb0JBQVY7QUFEMkMsS0FBN0MsTUFFTztBQUNMLFlBQUksY0FBYyxvQkFBZDs7QUFDQSxzQkFBYyxNQUFNLFdBQU4sR0FBb0IsSUFBcEIsQ0FGYjs7QUFJTCxrQkFBVSxRQUFRLFFBQVIsQ0FBaUIsV0FBakIsQ0FBVixDQUpLO09BRlA7O0FBU0EsU0FBSyxPQUFMLEdBQWUsT0FBZixDQVo4RDs7QUFjOUQsU0FBSyxVQUFMLEdBQWtCLFVBQWxCLENBZDhEOztBQWdCOUQsU0FBSyxnQkFBTCxHQUF3QixnQkFBeEIsQ0FoQjhEOztBQWtCOUQsU0FBSyxrQ0FBTCxHQWxCOEQ7R0FBaEU7O2VBREk7O2lDQXNCUztBQUNYLGFBQU8sS0FBSyxPQUFMLENBREk7Ozs7MEJBSVAsa0JBQWtCO0FBQ3RCLFdBQUssZ0JBQUwsQ0FBc0IsT0FBdEIsQ0FBOEIsVUFBUyxlQUFULEVBQTBCO0FBQ3RELHdCQUFnQixLQUFoQixDQUFzQixJQUF0QixFQURzRDtPQUExQixDQUU1QixJQUY0QixDQUV2QixJQUZ1QixDQUE5QixFQURzQjs7QUFLdEIsdUJBQWlCLE1BQWpCLENBQXdCLElBQXhCLEVBTHNCOzs7OzJCQVFqQixvQkFBb0I7QUFDekIsVUFBSSxPQUFPLGtCQUFQLEtBQThCLFFBQTlCLEVBQXdDO0FBQzFDLFlBQUksU0FBUyxrQkFBVDs7QUFEc0MsWUFHMUMsQ0FBSyxPQUFMLENBQWEsTUFBYixDQUFvQixNQUFwQixFQUgwQztPQUE1QyxNQUlPO0FBQ0wsWUFBSSxhQUFhLGtCQUFiOztBQUNBLGtCQUFVLFdBQVcsVUFBWCxFQUFWLENBRkM7O0FBSUwsYUFBSyxPQUFMLENBQWEsTUFBYixDQUFvQixPQUFwQixFQUpLO09BSlA7Ozs7NkJBWU87QUFBRSxXQUFLLE9BQUwsQ0FBYSxNQUFiLEdBQUY7Ozs7NEJBRUQ7QUFBRSxXQUFLLE9BQUwsQ0FBYSxLQUFiLEdBQUY7Ozs7eURBRTZCO0FBQ25DLFVBQUksS0FBSyxVQUFMLEtBQW9CLElBQXBCLEVBQTBCO0FBQzVCLGVBRDRCO09BQTlCOztBQUlBLFVBQUksZ0JBQWdCLE9BQU8sSUFBUCxDQUFZLEtBQUssVUFBTCxDQUE1QixDQUwrQjs7QUFPbkMsb0JBQWMsT0FBZCxDQUFzQixVQUFVLFlBQVYsRUFBd0I7QUFDNUMsWUFBSSxhQUFKO1lBQ0ksZ0JBQWdCLEtBQUssVUFBTCxDQUFnQixZQUFoQixDQUFoQixDQUZ3Qzs7QUFJNUMsWUFBSSxPQUFPLGFBQVAsS0FBeUIsVUFBekIsRUFBcUM7QUFDdkMsY0FBSSxXQUFXLFlBQVgsRUFBeUIsSUFBekIsQ0FBSixFQUFvQztBQUNsQyxnQkFBSSxTQUFTLGFBQWEsU0FBYixDQUF1QixDQUF2QixFQUEwQixXQUExQixFQUFUOztBQUNBLHNCQUFVLGFBQVY7O0FBRjhCLGdCQUlsQyxDQUFLLE9BQUwsQ0FBYSxFQUFiLENBQWdCLE1BQWhCLEVBQXdCLE9BQXhCLEVBSmtDO1dBQXBDO1NBREYsTUFPTztBQUNMLGNBQUksaUJBQWlCLGFBQWpCLENBREM7O0FBR0wsa0JBQVEsWUFBUjtBQUNFLGlCQUFLLFdBQUw7QUFDRSw4QkFBZ0IsT0FBaEIsQ0FERjtBQUVFLG9CQUZGOztBQURGLGlCQUtPLFNBQUw7QUFDRSw4QkFBZ0IsS0FBaEIsQ0FERjtBQUVFLG9CQUZGOztBQUxGO0FBVUksOEJBQWdCLFlBQWhCLENBREY7QUFFRSxvQkFGRjtBQVRGLFdBSEs7O0FBaUJMLGVBQUssT0FBTCxDQUFhLFlBQWIsQ0FBMEIsYUFBMUIsRUFBeUMsY0FBekMsRUFqQks7U0FQUDtPQUpvQixDQThCcEIsSUE5Qm9CLENBOEJmLElBOUJlLENBQXRCLEVBUG1DOzs7O21DQXdDZixZQUFZO0FBQ2hDLFVBQUksVUFBVSxRQUFRLGNBQVIsQ0FBdUIsVUFBdkIsQ0FBVjtVQUNBLGFBQWEsSUFBYjtVQUNBLG1CQUFtQixFQUFuQixDQUg0Qjs7QUFLaEMsYUFBTyxJQUFJLFVBQUosQ0FBZSxPQUFmLEVBQXdCLFVBQXhCLEVBQW9DLGdCQUFwQyxDQUFQLENBTGdDOzs7O1NBM0Y5Qjs7O0FBb0dOLE9BQU8sT0FBUCxHQUFpQixVQUFqQjs7QUFFQSxTQUFTLFVBQVQsQ0FBb0IsTUFBcEIsRUFBNEIsZUFBNUIsRUFBNkM7QUFDM0MsTUFBSSxTQUFTLElBQUksTUFBSixDQUFXLE1BQU0sZUFBTixDQUFwQjtNQUNBLFVBQVUsT0FBTyxLQUFQLENBQWEsTUFBYixDQUFWLENBRnVDOztBQUkzQyxTQUFPLENBQUMsQ0FBQyxPQUFEO0FBSm1DLENBQTdDIiwiZmlsZSI6ImpzeEVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBFbGVtZW50ID0gZWFzeXVpLkVsZW1lbnQ7XG5cbmNsYXNzIEpTWEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50T3JFbGVtZW50TmFtZSwgcHJvcGVydGllcywgY2hpbGRKU1hFbGVtZW50cykge1xuICAgIHZhciBlbGVtZW50O1xuXG4gICAgaWYgKGVsZW1lbnRPckVsZW1lbnROYW1lIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgZWxlbWVudCA9IGVsZW1lbnRPckVsZW1lbnROYW1lOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGVsZW1lbnROYW1lID0gZWxlbWVudE9yRWxlbWVudE5hbWUsIC8vL1xuICAgICAgICAgIGVsZW1lbnRIVE1MID0gJzwnICsgZWxlbWVudE5hbWUgKyAnLz4nO1xuXG4gICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tSFRNTChlbGVtZW50SFRNTCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgXG4gICAgdGhpcy5jaGlsZEpTWEVsZW1lbnRzID0gY2hpbGRKU1hFbGVtZW50cztcblxuICAgIHRoaXMuYWRkUHJvcGVydGllc1RvRWxlbWVudEFzQXR0cmlidXRlcygpO1xuICB9XG4gIFxuICBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gIH1cblxuICBtb3VudChwYXJlbnRKU1hFbGVtZW50KSB7XG4gICAgdGhpcy5jaGlsZEpTWEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRKU1hFbGVtZW50KSB7XG4gICAgICBjaGlsZEpTWEVsZW1lbnQubW91bnQodGhpcyk7XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIHBhcmVudEpTWEVsZW1lbnQuYXBwZW5kKHRoaXMpO1xuICB9XG5cbiAgYXBwZW5kKGpzeEVsZW1lbnRPclN0cmluZykge1xuICAgIGlmICh0eXBlb2YganN4RWxlbWVudE9yU3RyaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIHN0cmluZyA9IGpzeEVsZW1lbnRPclN0cmluZzsgIC8vL1xuXG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKHN0cmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBqc3hFbGVtZW50ID0ganN4RWxlbWVudE9yU3RyaW5nLCAgLy8vXG4gICAgICAgICAgZWxlbWVudCA9IGpzeEVsZW1lbnQuZ2V0RWxlbWVudCgpO1xuXG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZSgpIHsgdGhpcy5lbGVtZW50LnJlbW92ZSgpOyB9XG5cbiAgZW1wdHkoKSB7IHRoaXMuZWxlbWVudC5lbXB0eSgpOyB9XG5cbiAgYWRkUHJvcGVydGllc1RvRWxlbWVudEFzQXR0cmlidXRlcygpIHtcbiAgICBpZiAodGhpcy5wcm9wZXJ0aWVzID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BlcnR5TmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BlcnRpZXMpO1xuXG4gICAgcHJvcGVydHlOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eU5hbWUpIHtcbiAgICAgIHZhciBhdHRyaWJ1dGVOYW1lLFxuICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSB0aGlzLnByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblxuICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0eVZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlmIChiZWdpbnNXaXRoKHByb3BlcnR5TmFtZSwgJ29uJykpIHtcbiAgICAgICAgICB2YXIgZXZlbnRzID0gcHJvcGVydHlOYW1lLnN1YnN0cmluZygyKS50b0xvd2VyQ2FzZSgpLCAvLy9cbiAgICAgICAgICAgICAgaGFuZGxlciA9IHByb3BlcnR5VmFsdWU7ICAvLy9cbiAgICAgICAgICBcbiAgICAgICAgICB0aGlzLmVsZW1lbnQub24oZXZlbnRzLCBoYW5kbGVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZVZhbHVlID0gcHJvcGVydHlWYWx1ZTtcblxuICAgICAgICBzd2l0Y2ggKHByb3BlcnR5TmFtZSkge1xuICAgICAgICAgIGNhc2UgJ2NsYXNzTmFtZSc6XG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gJ2NsYXNzJztcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnaHRtbEZvcic6XG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gJ2Zvcic7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gcHJvcGVydHlOYW1lO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICB2YXIgZWxlbWVudCA9IEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCksXG4gICAgICAgIHByb3BlcnRpZXMgPSBudWxsLFxuICAgICAgICBjaGlsZEpTWEVsZW1lbnRzID0gW107XG4gICAgXG4gICAgcmV0dXJuIG5ldyBKU1hFbGVtZW50KGVsZW1lbnQsIHByb3BlcnRpZXMsIGNoaWxkSlNYRWxlbWVudHMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSlNYRWxlbWVudDtcblxuZnVuY3Rpb24gYmVnaW5zV2l0aChzdHJpbmcsIGJlZ2lubmluZ1N0cmluZykge1xuICB2YXIgcmVnRXhwID0gbmV3IFJlZ0V4cCgnXicgKyBiZWdpbm5pbmdTdHJpbmcpLFxuICAgICAgbWF0Y2hlcyA9IHN0cmluZy5tYXRjaChyZWdFeHApO1xuXG4gIHJldHVybiAhIW1hdGNoZXM7IC8vL1xufVxuIl19