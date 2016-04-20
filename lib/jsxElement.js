'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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

    this.addPropertiesToElement();

    childJSXElements.forEach(function (childJSXElement) {
      childJSXElement.mount(this); ///
    }.bind(this));
  }

  _createClass(JSXElement, [{
    key: 'getElement',
    value: function getElement() {
      return this.element;
    }
  }, {
    key: 'mount',
    value: function mount(parentJSXElement) {
      parentJSXElement.append(this);
    }
  }, {
    key: 'remount',
    value: function remount(oldJSXElement) {
      oldJSXElement.appendAfter(this);

      oldJSXElement.remove();
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
    key: 'appendAfter',
    value: function appendAfter(jsxElement) {
      var element = jsxElement.getElement();

      this.element.appendAfter(element);
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
    key: 'addPropertiesToElement',
    value: function addPropertiesToElement() {
      if (this.properties === null) {
        return;
      }

      var propertyNames = Object.keys(this.properties);

      propertyNames.forEach(function (propertyName) {
        var propertyValue = this.properties[propertyName];

        if (propertyName === 'ref') {
          var callback = propertyValue,
              ///
          domElement = this.element.$element[0],
              ///
          ref = domElement; ///

          callback(ref);
        } else {
          if (typeof propertyValue === 'function') {
            if (beginsWith(propertyName, 'on')) {
              var events = propertyName.substring(2).toLowerCase(),
                  ///
              handler = propertyValue; ///

              this.element.on(events, handler);
            }
          } else {
            var attributeName,
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

            if ((typeof attributeValue === 'undefined' ? 'undefined' : _typeof(attributeValue)) === 'object') {
              this.addObjectAttribute(attributeName, attributeValue);
            } else {
              this.element.addAttribute(attributeName, attributeValue);
            }
          }
        }
      }.bind(this));
    }
  }, {
    key: 'addObjectAttribute',
    value: function addObjectAttribute(attributeName, attributeValue) {
      var domElement = this.element.$element[0],
          ///
      keys = Object.keys(attributeValue);

      keys.forEach(function (key) {
        var value = attributeValue[key];

        domElement[attributeName][key] = value;
      });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hFbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQUksU0FBUyxRQUFRLFFBQVIsQ0FBVDtJQUNBLFVBQVUsT0FBTyxPQUFQOztJQUVSO0FBQ0osV0FESSxVQUNKLENBQVksb0JBQVosRUFBa0MsVUFBbEMsRUFBOEMsZ0JBQTlDLEVBQWdFOzBCQUQ1RCxZQUM0RDs7QUFDOUQsUUFBSSxPQUFKLENBRDhEOztBQUc5RCxRQUFJLGdDQUFnQyxPQUFoQyxFQUF5QztBQUMzQyxnQkFBVSxvQkFBVjtBQUQyQyxLQUE3QyxNQUVPO0FBQ0wsWUFBSSxjQUFjLG9CQUFkOztBQUNBLHNCQUFjLE1BQU0sV0FBTixHQUFvQixJQUFwQixDQUZiOztBQUlMLGtCQUFVLFFBQVEsUUFBUixDQUFpQixXQUFqQixDQUFWLENBSks7T0FGUDs7QUFTQSxTQUFLLE9BQUwsR0FBZSxPQUFmLENBWjhEOztBQWM5RCxTQUFLLFVBQUwsR0FBa0IsVUFBbEIsQ0FkOEQ7O0FBZ0I5RCxTQUFLLHNCQUFMLEdBaEI4RDs7QUFrQjlELHFCQUFpQixPQUFqQixDQUF5QixVQUFTLGVBQVQsRUFBMEI7QUFDakQsc0JBQWdCLEtBQWhCLENBQXNCLElBQXRCO0FBRGlELEtBQTFCLENBRXZCLElBRnVCLENBRWxCLElBRmtCLENBQXpCLEVBbEI4RDtHQUFoRTs7ZUFESTs7aUNBd0JTO0FBQ1gsYUFBTyxLQUFLLE9BQUwsQ0FESTs7OzswQkFJUCxrQkFBa0I7QUFDdEIsdUJBQWlCLE1BQWpCLENBQXdCLElBQXhCLEVBRHNCOzs7OzRCQUloQixlQUFlO0FBQ3JCLG9CQUFjLFdBQWQsQ0FBMEIsSUFBMUIsRUFEcUI7O0FBR3JCLG9CQUFjLE1BQWQsR0FIcUI7Ozs7MkJBTWhCLG9CQUFvQjtBQUN6QixVQUFJLE9BQU8sa0JBQVAsS0FBOEIsUUFBOUIsRUFBd0M7QUFDMUMsWUFBSSxTQUFTLGtCQUFUOztBQURzQyxZQUcxQyxDQUFLLE9B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QWlCLFVBQWpCOztBQUVBLFNBQVMsVUFBVCxDQUFvQixNQUFwQixFQUE0QixlQUE1QixFQUE2QztBQUMzQyxNQUFJLFNBQVMsSUFBSSxNQUFKLENBQVcsTUFBTSxlQUFOLENBQXBCO01BQ0EsVUFBVSxPQUFPLEtBQVAsQ0FBYSxNQUFiLENBQVYsQ0FGdUM7O0FBSTNDLFNBQU8sQ0FBQyxDQUFDLE9BQUQ7QUFKbUMsQ0FBN0MiLCJmaWxlIjoianN4RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgIEVsZW1lbnQgPSBlYXN5dWkuRWxlbWVudDtcblxuY2xhc3MgSlNYRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRPckVsZW1lbnROYW1lLCBwcm9wZXJ0aWVzLCBjaGlsZEpTWEVsZW1lbnRzKSB7XG4gICAgdmFyIGVsZW1lbnQ7XG5cbiAgICBpZiAoZWxlbWVudE9yRWxlbWVudE5hbWUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICBlbGVtZW50ID0gZWxlbWVudE9yRWxlbWVudE5hbWU7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZWxlbWVudE5hbWUgPSBlbGVtZW50T3JFbGVtZW50TmFtZSwgLy8vXG4gICAgICAgICAgZWxlbWVudEhUTUwgPSAnPCcgKyBlbGVtZW50TmFtZSArICcvPic7XG5cbiAgICAgIGVsZW1lbnQgPSBFbGVtZW50LmZyb21IVE1MKGVsZW1lbnRIVE1MKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcblxuICAgIHRoaXMuYWRkUHJvcGVydGllc1RvRWxlbWVudCgpO1xuXG4gICAgY2hpbGRKU1hFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkSlNYRWxlbWVudCkge1xuICAgICAgY2hpbGRKU1hFbGVtZW50Lm1vdW50KHRoaXMpOyAgLy8vXG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuICBcbiAgZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICB9XG5cbiAgbW91bnQocGFyZW50SlNYRWxlbWVudCkge1xuICAgIHBhcmVudEpTWEVsZW1lbnQuYXBwZW5kKHRoaXMpO1xuICB9XG5cbiAgcmVtb3VudChvbGRKU1hFbGVtZW50KSB7XG4gICAgb2xkSlNYRWxlbWVudC5hcHBlbmRBZnRlcih0aGlzKTtcblxuICAgIG9sZEpTWEVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cblxuICBhcHBlbmQoanN4RWxlbWVudE9yU3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBqc3hFbGVtZW50T3JTdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgc3RyaW5nID0ganN4RWxlbWVudE9yU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGpzeEVsZW1lbnQgPSBqc3hFbGVtZW50T3JTdHJpbmcsICAvLy9cbiAgICAgICAgICBlbGVtZW50ID0ganN4RWxlbWVudC5nZXRFbGVtZW50KCk7XG5cbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgYXBwZW5kQWZ0ZXIoanN4RWxlbWVudCkge1xuICAgIHZhciBlbGVtZW50ID0ganN4RWxlbWVudC5nZXRFbGVtZW50KCk7XG5cbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQWZ0ZXIoZWxlbWVudCk7XG4gIH1cblxuICByZW1vdmUoKSB7IHRoaXMuZWxlbWVudC5yZW1vdmUoKTsgfVxuXG4gIGVtcHR5KCkgeyB0aGlzLmVsZW1lbnQuZW1wdHkoKTsgfVxuXG4gIGFkZFByb3BlcnRpZXNUb0VsZW1lbnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcGVydGllcyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmtleXModGhpcy5wcm9wZXJ0aWVzKTtcblxuICAgIHByb3BlcnR5TmFtZXMuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHlOYW1lKSB7XG4gICAgICB2YXIgcHJvcGVydHlWYWx1ZSA9IHRoaXMucHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuXG4gICAgICBpZiAocHJvcGVydHlOYW1lID09PSAncmVmJykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBwcm9wZXJ0eVZhbHVlLCAvLy9cbiAgICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmVsZW1lbnQuJGVsZW1lbnRbMF0sICAvLy9cbiAgICAgICAgICAgIHJlZiA9IGRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgICAgIGNhbGxiYWNrKHJlZilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvcGVydHlWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGlmIChiZWdpbnNXaXRoKHByb3BlcnR5TmFtZSwgJ29uJykpIHtcbiAgICAgICAgICAgIHZhciBldmVudHMgPSBwcm9wZXJ0eU5hbWUuc3Vic3RyaW5nKDIpLnRvTG93ZXJDYXNlKCksIC8vL1xuICAgICAgICAgICAgICAgIGhhbmRsZXIgPSBwcm9wZXJ0eVZhbHVlOyAgLy8vXG5cbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5vbihldmVudHMsIGhhbmRsZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBwcm9wZXJ0eVZhbHVlO1xuXG4gICAgICAgICAgc3dpdGNoIChwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2NsYXNzTmFtZSc6XG4gICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSAnY2xhc3MnO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnaHRtbEZvcic6XG4gICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSAnZm9yJztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSBwcm9wZXJ0eU5hbWU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgYXR0cmlidXRlVmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0aGlzLmFkZE9iamVjdEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBhZGRPYmplY3RBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpIHtcbiAgICB2YXIgZG9tRWxlbWVudCA9IHRoaXMuZWxlbWVudC4kZWxlbWVudFswXSwgIC8vL1xuICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMoYXR0cmlidXRlVmFsdWUpO1xuXG4gICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgdmFyIHZhbHVlID0gYXR0cmlidXRlVmFsdWVba2V5XTtcblxuICAgICAgZG9tRWxlbWVudFthdHRyaWJ1dGVOYW1lXVtrZXldID0gdmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIHZhciBlbGVtZW50ID0gRWxlbWVudC5mcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSxcbiAgICAgICAgcHJvcGVydGllcyA9IG51bGwsXG4gICAgICAgIGNoaWxkSlNYRWxlbWVudHMgPSBbXTtcbiAgICBcbiAgICByZXR1cm4gbmV3IEpTWEVsZW1lbnQoZWxlbWVudCwgcHJvcGVydGllcywgY2hpbGRKU1hFbGVtZW50cyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBKU1hFbGVtZW50O1xuXG5mdW5jdGlvbiBiZWdpbnNXaXRoKHN0cmluZywgYmVnaW5uaW5nU3RyaW5nKSB7XG4gIHZhciByZWdFeHAgPSBuZXcgUmVnRXhwKCdeJyArIGJlZ2lubmluZ1N0cmluZyksXG4gICAgICBtYXRjaGVzID0gc3RyaW5nLm1hdGNoKHJlZ0V4cCk7XG5cbiAgcmV0dXJuICEhbWF0Y2hlczsgLy8vXG59XG4iXX0=