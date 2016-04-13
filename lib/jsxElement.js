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
  }

  _createClass(JSXElement, [{
    key: 'getElement',
    value: function getElement() {
      return this.element;
    }
  }, {
    key: 'mount',
    value: function mount(parentJSXElement) {
      this.addPropertiesToElementAsAttributes();

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hFbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJLFNBQVMsUUFBUSxRQUFSLENBQVQ7SUFDQSxVQUFVLE9BQU8sT0FBUDs7SUFFUjtBQUNKLFdBREksVUFDSixDQUFZLG9CQUFaLEVBQWtDLFVBQWxDLEVBQThDLGdCQUE5QyxFQUFnRTswQkFENUQsWUFDNEQ7O0FBQzlELFFBQUksT0FBSixDQUQ4RDs7QUFHOUQsUUFBSSxnQ0FBZ0MsT0FBaEMsRUFBeUM7QUFDM0MsZ0JBQVUsb0JBQVY7QUFEMkMsS0FBN0MsTUFFTztBQUNMLFlBQUksY0FBYyxvQkFBZDs7QUFDQSxzQkFBYyxNQUFNLFdBQU4sR0FBb0IsSUFBcEIsQ0FGYjs7QUFJTCxrQkFBVSxRQUFRLFFBQVIsQ0FBaUIsV0FBakIsQ0FBVixDQUpLO09BRlA7O0FBU0EsU0FBSyxPQUFMLEdBQWUsT0FBZixDQVo4RDs7QUFjOUQsU0FBSyxVQUFMLEdBQWtCLFVBQWxCLENBZDhEOztBQWdCOUQsU0FBSyxnQkFBTCxHQUF3QixnQkFBeEIsQ0FoQjhEO0dBQWhFOztlQURJOztpQ0FvQlM7QUFDWCxhQUFPLEtBQUssT0FBTCxDQURJOzs7OzBCQUlQLGtCQUFrQjtBQUN0QixXQUFLLGtDQUFMLEdBRHNCOztBQUd0QixXQUFLLGdCQUFMLENBQXNCLE9BQXRCLENBQThCLFVBQVMsZUFBVCxFQUEwQjtBQUN0RCx3QkFBZ0IsS0FBaEIsQ0FBc0IsSUFBdEIsRUFEc0Q7T0FBMUIsQ0FFNUIsSUFGNEIsQ0FFdkIsSUFGdUIsQ0FBOUIsRUFIc0I7O0FBT3RCLHVCQUFpQixNQUFqQixDQUF3QixJQUF4QixFQVBzQjs7OzsyQkFVakIsb0JBQW9CO0FBQ3pCLFVBQUksT0FBTyxrQkFBUCxLQUE4QixRQUE5QixFQUF3QztBQUMxQyxZQUFJLFNBQVMsa0JBQVQ7O0FBRHNDLFlBRzFDLENBQUssT0FBTCxDQUFhLE1BQWIsQ0FBb0IsTUFBcEIsRUFIMEM7T0FBNUMsTUFJTztBQUNMLFlBQUksYUFBYSxrQkFBYjs7QUFDQSxrQkFBVSxXQUFXLFVBQVgsRUFBVixDQUZDOztBQUlMLGFBQUssT0FBTCxDQUFhLE1BQWIsQ0FBb0IsT0FBcEIsRUFKSztPQUpQOzs7OzZCQVlPO0FBQUUsV0FBSyxPQUFMLENBQWEsTUFBYixHQUFGOzs7O3lEQUU0QjtBQUNuQyxVQUFJLEtBQUssVUFBTCxLQUFvQixJQUFwQixFQUEwQjtBQUM1QixlQUQ0QjtPQUE5Qjs7QUFJQSxVQUFJLGdCQUFnQixPQUFPLElBQVAsQ0FBWSxLQUFLLFVBQUwsQ0FBNUIsQ0FMK0I7O0FBT25DLG9CQUFjLE9BQWQsQ0FBc0IsVUFBVSxZQUFWLEVBQXdCO0FBQzVDLFlBQUksYUFBSjtZQUNJLGdCQUFnQixLQUFLLFVBQUwsQ0FBZ0IsWUFBaEIsQ0FBaEI7WUFDQSxpQkFBaUIsYUFBakIsQ0FId0M7O0FBSzVDLGdCQUFRLFlBQVI7QUFDRSxlQUFLLFdBQUw7QUFDRSw0QkFBZ0IsT0FBaEIsQ0FERjtBQUVFLGtCQUZGOztBQURGLGVBS08sU0FBTDtBQUNFLDRCQUFnQixLQUFoQixDQURGO0FBRUUsa0JBRkY7O0FBTEY7QUFVSSw0QkFBZ0IsWUFBaEIsQ0FERjtBQUVFLGtCQUZGO0FBVEYsU0FMNEM7O0FBbUI1QyxhQUFLLE9BQUwsQ0FBYSxZQUFiLENBQTBCLGFBQTFCLEVBQXlDLGNBQXpDLEVBbkI0QztPQUF4QixDQW9CcEIsSUFwQm9CLENBb0JmLElBcEJlLENBQXRCLEVBUG1DOzs7O21DQThCZixZQUFZO0FBQ2hDLFVBQUksVUFBVSxRQUFRLGNBQVIsQ0FBdUIsVUFBdkIsQ0FBVjtVQUNBLGFBQWEsSUFBYjtVQUNBLG1CQUFtQixFQUFuQixDQUg0Qjs7QUFLaEMsYUFBTyxJQUFJLFVBQUosQ0FBZSxPQUFmLEVBQXdCLFVBQXhCLEVBQW9DLGdCQUFwQyxDQUFQLENBTGdDOzs7O1NBL0U5Qjs7O0FBd0ZOLE9BQU8sT0FBUCxHQUFpQixVQUFqQiIsImZpbGUiOiJqc3hFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgRWxlbWVudCA9IGVhc3l1aS5FbGVtZW50O1xuXG5jbGFzcyBKU1hFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudE9yRWxlbWVudE5hbWUsIHByb3BlcnRpZXMsIGNoaWxkSlNYRWxlbWVudHMpIHtcbiAgICB2YXIgZWxlbWVudDtcblxuICAgIGlmIChlbGVtZW50T3JFbGVtZW50TmFtZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50T3JFbGVtZW50TmFtZTsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBlbGVtZW50TmFtZSA9IGVsZW1lbnRPckVsZW1lbnROYW1lLCAvLy9cbiAgICAgICAgICBlbGVtZW50SFRNTCA9ICc8JyArIGVsZW1lbnROYW1lICsgJy8+JztcblxuICAgICAgZWxlbWVudCA9IEVsZW1lbnQuZnJvbUhUTUwoZWxlbWVudEhUTUwpO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICAgIFxuICAgIHRoaXMuY2hpbGRKU1hFbGVtZW50cyA9IGNoaWxkSlNYRWxlbWVudHM7XG4gIH1cbiAgXG4gIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudEpTWEVsZW1lbnQpIHtcbiAgICB0aGlzLmFkZFByb3BlcnRpZXNUb0VsZW1lbnRBc0F0dHJpYnV0ZXMoKTtcblxuICAgIHRoaXMuY2hpbGRKU1hFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkSlNYRWxlbWVudCkge1xuICAgICAgY2hpbGRKU1hFbGVtZW50Lm1vdW50KHRoaXMpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICBwYXJlbnRKU1hFbGVtZW50LmFwcGVuZCh0aGlzKTtcbiAgfVxuXG4gIGFwcGVuZChqc3hFbGVtZW50T3JTdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIGpzeEVsZW1lbnRPclN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBqc3hFbGVtZW50T3JTdHJpbmc7ICAvLy9cblxuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZChzdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIganN4RWxlbWVudCA9IGpzeEVsZW1lbnRPclN0cmluZywgIC8vL1xuICAgICAgICAgIGVsZW1lbnQgPSBqc3hFbGVtZW50LmdldEVsZW1lbnQoKTtcblxuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZChlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZW1vdmUoKSB7IHRoaXMuZWxlbWVudC5yZW1vdmUoKTsgfVxuXG4gIGFkZFByb3BlcnRpZXNUb0VsZW1lbnRBc0F0dHJpYnV0ZXMoKSB7XG4gICAgaWYgKHRoaXMucHJvcGVydGllcyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmtleXModGhpcy5wcm9wZXJ0aWVzKTtcblxuICAgIHByb3BlcnR5TmFtZXMuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHlOYW1lKSB7XG4gICAgICB2YXIgYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gdGhpcy5wcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV0sXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBwcm9wZXJ0eVZhbHVlO1xuXG4gICAgICBzd2l0Y2ggKHByb3BlcnR5TmFtZSkge1xuICAgICAgICBjYXNlICdjbGFzc05hbWUnOlxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSAnY2xhc3MnO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2h0bWxGb3InOlxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSAnZm9yJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSBwcm9wZXJ0eU5hbWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWxlbWVudC5hZGRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIHZhciBlbGVtZW50ID0gRWxlbWVudC5mcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSxcbiAgICAgICAgcHJvcGVydGllcyA9IG51bGwsXG4gICAgICAgIGNoaWxkSlNYRWxlbWVudHMgPSBbXTtcbiAgICBcbiAgICByZXR1cm4gbmV3IEpTWEVsZW1lbnQoZWxlbWVudCwgcHJvcGVydGllcywgY2hpbGRKU1hFbGVtZW50cyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBKU1hFbGVtZW50O1xuIl19
