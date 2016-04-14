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
    key: 'addPropertiesToElementAsAttributes',
    value: function addPropertiesToElementAsAttributes() {
      if (this.properties === null) {
        return;
      }

      var propertyNames = Object.keys(this.properties);

      propertyNames.forEach(function (propertyName) {
        var attributeName,
            propertyValue = this.properties[propertyName],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hFbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJLFNBQVMsUUFBUSxRQUFSLENBQVQ7SUFDQSxVQUFVLE9BQU8sT0FBUDs7SUFFUjtBQUNKLFdBREksVUFDSixDQUFZLG9CQUFaLEVBQWtDLFVBQWxDLEVBQThDLGdCQUE5QyxFQUFnRTswQkFENUQsWUFDNEQ7O0FBQzlELFFBQUksT0FBSixDQUQ4RDs7QUFHOUQsUUFBSSxnQ0FBZ0MsT0FBaEMsRUFBeUM7QUFDM0MsZ0JBQVUsb0JBQVY7QUFEMkMsS0FBN0MsTUFFTztBQUNMLFlBQUksY0FBYyxvQkFBZDs7QUFDQSxzQkFBYyxNQUFNLFdBQU4sR0FBb0IsSUFBcEIsQ0FGYjs7QUFJTCxrQkFBVSxRQUFRLFFBQVIsQ0FBaUIsV0FBakIsQ0FBVixDQUpLO09BRlA7O0FBU0EsU0FBSyxPQUFMLEdBQWUsT0FBZixDQVo4RDs7QUFjOUQsU0FBSyxVQUFMLEdBQWtCLFVBQWxCLENBZDhEOztBQWdCOUQsU0FBSyxnQkFBTCxHQUF3QixnQkFBeEIsQ0FoQjhEOztBQWtCOUQsU0FBSyxrQ0FBTCxHQWxCOEQ7R0FBaEU7O2VBREk7O2lDQXNCUztBQUNYLGFBQU8sS0FBSyxPQUFMLENBREk7Ozs7MEJBSVAsa0JBQWtCO0FBQ3RCLFdBQUssZ0JBQUwsQ0FBc0IsT0FBdEIsQ0FBOEIsVUFBUyxlQUFULEVBQTBCO0FBQ3RELHdCQUFnQixLQUFoQixDQUFzQixJQUF0QixFQURzRDtPQUExQixDQUU1QixJQUY0QixDQUV2QixJQUZ1QixDQUE5QixFQURzQjs7QUFLdEIsdUJBQWlCLE1BQWpCLENBQXdCLElBQXhCLEVBTHNCOzs7OzJCQVFqQixvQkFBb0I7QUFDekIsVUFBSSxPQUFPLGtCQUFQLEtBQThCLFFBQTlCLEVBQXdDO0FBQzFDLFlBQUksU0FBUyxrQkFBVDs7QUFEc0MsWUFHMUMsQ0FBSyxPQUFMLENBQWEsTUFBYixDQUFvQixNQUFwQixFQUgwQztPQUE1QyxNQUlPO0FBQ0wsWUFBSSxhQUFhLGtCQUFiOztBQUNBLGtCQUFVLFdBQVcsVUFBWCxFQUFWLENBRkM7O0FBSUwsYUFBSyxPQUFMLENBQWEsTUFBYixDQUFvQixPQUFwQixFQUpLO09BSlA7Ozs7NkJBWU87QUFBRSxXQUFLLE9BQUwsQ0FBYSxNQUFiLEdBQUY7Ozs7eURBRTRCO0FBQ25DLFVBQUksS0FBSyxVQUFMLEtBQW9CLElBQXBCLEVBQTBCO0FBQzVCLGVBRDRCO09BQTlCOztBQUlBLFVBQUksZ0JBQWdCLE9BQU8sSUFBUCxDQUFZLEtBQUssVUFBTCxDQUE1QixDQUwrQjs7QUFPbkMsb0JBQWMsT0FBZCxDQUFzQixVQUFVLFlBQVYsRUFBd0I7QUFDNUMsWUFBSSxhQUFKO1lBQ0ksZ0JBQWdCLEtBQUssVUFBTCxDQUFnQixZQUFoQixDQUFoQjtZQUNBLGlCQUFpQixhQUFqQixDQUh3Qzs7QUFLNUMsZ0JBQVEsWUFBUjtBQUNFLGVBQUssV0FBTDtBQUNFLDRCQUFnQixPQUFoQixDQURGO0FBRUUsa0JBRkY7O0FBREYsZUFLTyxTQUFMO0FBQ0UsNEJBQWdCLEtBQWhCLENBREY7QUFFRSxrQkFGRjs7QUFMRjtBQVVJLDRCQUFnQixZQUFoQixDQURGO0FBRUUsa0JBRkY7QUFURixTQUw0Qzs7QUFtQjVDLGFBQUssT0FBTCxDQUFhLFlBQWIsQ0FBMEIsYUFBMUIsRUFBeUMsY0FBekMsRUFuQjRDO09BQXhCLENBb0JwQixJQXBCb0IsQ0FvQmYsSUFwQmUsQ0FBdEIsRUFQbUM7Ozs7bUNBOEJmLFlBQVk7QUFDaEMsVUFBSSxVQUFVLFFBQVEsY0FBUixDQUF1QixVQUF2QixDQUFWO1VBQ0EsYUFBYSxJQUFiO1VBQ0EsbUJBQW1CLEVBQW5CLENBSDRCOztBQUtoQyxhQUFPLElBQUksVUFBSixDQUFlLE9BQWYsRUFBd0IsVUFBeEIsRUFBb0MsZ0JBQXBDLENBQVAsQ0FMZ0M7Ozs7U0EvRTlCOzs7QUF3Rk4sT0FBTyxPQUFQLEdBQWlCLFVBQWpCIiwiZmlsZSI6ImpzeEVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBFbGVtZW50ID0gZWFzeXVpLkVsZW1lbnQ7XG5cbmNsYXNzIEpTWEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50T3JFbGVtZW50TmFtZSwgcHJvcGVydGllcywgY2hpbGRKU1hFbGVtZW50cykge1xuICAgIHZhciBlbGVtZW50O1xuXG4gICAgaWYgKGVsZW1lbnRPckVsZW1lbnROYW1lIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgZWxlbWVudCA9IGVsZW1lbnRPckVsZW1lbnROYW1lOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGVsZW1lbnROYW1lID0gZWxlbWVudE9yRWxlbWVudE5hbWUsIC8vL1xuICAgICAgICAgIGVsZW1lbnRIVE1MID0gJzwnICsgZWxlbWVudE5hbWUgKyAnLz4nO1xuXG4gICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tSFRNTChlbGVtZW50SFRNTCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgXG4gICAgdGhpcy5jaGlsZEpTWEVsZW1lbnRzID0gY2hpbGRKU1hFbGVtZW50cztcblxuICAgIHRoaXMuYWRkUHJvcGVydGllc1RvRWxlbWVudEFzQXR0cmlidXRlcygpO1xuICB9XG4gIFxuICBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gIH1cblxuICBtb3VudChwYXJlbnRKU1hFbGVtZW50KSB7XG4gICAgdGhpcy5jaGlsZEpTWEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRKU1hFbGVtZW50KSB7XG4gICAgICBjaGlsZEpTWEVsZW1lbnQubW91bnQodGhpcyk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICBcbiAgICBwYXJlbnRKU1hFbGVtZW50LmFwcGVuZCh0aGlzKTtcbiAgfVxuXG4gIGFwcGVuZChqc3hFbGVtZW50T3JTdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIGpzeEVsZW1lbnRPclN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBqc3hFbGVtZW50T3JTdHJpbmc7ICAvLy9cblxuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZChzdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIganN4RWxlbWVudCA9IGpzeEVsZW1lbnRPclN0cmluZywgIC8vL1xuICAgICAgICAgIGVsZW1lbnQgPSBqc3hFbGVtZW50LmdldEVsZW1lbnQoKTtcblxuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZChlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZW1vdmUoKSB7IHRoaXMuZWxlbWVudC5yZW1vdmUoKTsgfVxuXG4gIGFkZFByb3BlcnRpZXNUb0VsZW1lbnRBc0F0dHJpYnV0ZXMoKSB7XG4gICAgaWYgKHRoaXMucHJvcGVydGllcyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmtleXModGhpcy5wcm9wZXJ0aWVzKTtcblxuICAgIHByb3BlcnR5TmFtZXMuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHlOYW1lKSB7XG4gICAgICB2YXIgYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gdGhpcy5wcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV0sXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBwcm9wZXJ0eVZhbHVlO1xuXG4gICAgICBzd2l0Y2ggKHByb3BlcnR5TmFtZSkge1xuICAgICAgICBjYXNlICdjbGFzc05hbWUnOlxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSAnY2xhc3MnO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2h0bWxGb3InOlxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSAnZm9yJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSBwcm9wZXJ0eU5hbWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWxlbWVudC5hZGRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIHZhciBlbGVtZW50ID0gRWxlbWVudC5mcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSxcbiAgICAgICAgcHJvcGVydGllcyA9IG51bGwsXG4gICAgICAgIGNoaWxkSlNYRWxlbWVudHMgPSBbXTtcbiAgICBcbiAgICByZXR1cm4gbmV3IEpTWEVsZW1lbnQoZWxlbWVudCwgcHJvcGVydGllcywgY2hpbGRKU1hFbGVtZW50cyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBKU1hFbGVtZW50O1xuIl19
