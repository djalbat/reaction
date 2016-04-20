'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    Element = easyui.Element;

var JSXDOMElement = function () {
  function JSXDOMElement(elementOrElementName, properties, children) {
    _classCallCheck(this, JSXDOMElement);

    this.element = elementOrElementName instanceof Element ? elementOrElementName : ///
    fromElementName(elementOrElementName); ///

    this.addPropertiesToElement(properties);

    children.forEach(function (child) {
      child.mount(this); ///
    }.bind(this));
  }

  _createClass(JSXDOMElement, [{
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
    key: 'unmount',
    value: function unmount() {
      this.remove();
    }
  }, {
    key: 'append',
    value: function append(jsxElement) {
      var element = jsxElement.getElement();

      this.element.append(element);
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
    value: function addPropertiesToElement(properties) {
      if (properties === null) {
        return;
      }

      var propertyNames = Object.keys(properties);

      propertyNames.forEach(function (propertyName) {
        var propertyValue = properties[propertyName];

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
          children = [];

      return new JSXDOMElement(element, properties, children);
    }
  }]);

  return JSXDOMElement;
}();

module.exports = JSXDOMElement;

function fromElementName(elementName) {
  var elementHTML = '<' + elementName + '/>',
      element = Element.fromHTML(elementHTML);

  return element;
}

function beginsWith(string, beginningString) {
  var regExp = new RegExp('^' + beginningString),
      matches = string.match(regExp);

  return !!matches; ///
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hET01FbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQUksU0FBUyxRQUFRLFFBQVIsQ0FBVDtJQUNBLFVBQVUsT0FBTyxPQUFQOztJQUVSO0FBQ0osV0FESSxhQUNKLENBQVksb0JBQVosRUFBa0MsVUFBbEMsRUFBOEMsUUFBOUMsRUFBd0Q7MEJBRHBELGVBQ29EOztBQUN0RCxTQUFLLE9BQUwsR0FBZSxvQkFBQyxZQUFnQyxPQUFoQyxHQUNDLG9CQURGO0FBRUksb0JBQWdCLG9CQUFoQixDQUZKOztBQUR1QyxRQUt0RCxDQUFLLHNCQUFMLENBQTRCLFVBQTVCLEVBTHNEOztBQU90RCxhQUFTLE9BQVQsQ0FBaUIsVUFBUyxLQUFULEVBQWdCO0FBQy9CLFlBQU0sS0FBTixDQUFZLElBQVo7QUFEK0IsS0FBaEIsQ0FFZixJQUZlLENBRVYsSUFGVSxDQUFqQixFQVBzRDtHQUF4RDs7ZUFESTs7aUNBYVM7QUFDWCxhQUFPLEtBQUssT0FBTCxDQURJOzs7OzBCQUlQLGtCQUFrQjtBQUN0Qix1QkFBaUIsTUFBakIsQ0FBd0IsSUFBeEIsRUFEc0I7Ozs7NEJBSWhCLGVBQWU7QUFDckIsb0JBQWMsV0FBZCxDQUEwQixJQUExQixFQURxQjs7QUFHckIsb0JBQWMsTUFBZCxHQUhxQjs7Ozs4QkFNYjtBQUNSLFdBQUssTUFBTCxHQURROzs7OzJCQUlILFlBQVk7QUFDakIsVUFBSSxVQUFVLFdBQVcsVUFBWCxFQUFWLENBRGE7O0FBR2pCLFdBQUssT0FBTCxDQUFhLE1BQWIsQ0FBb0IsT0FBcEIsRUFIaUI7Ozs7Z0NBTVAsWUFBWTtBQUN0QixVQUFJLFVBQVUsV0FBVyxVQUFYLEVBQVYsQ0FEa0I7O0FBR3RCLFdBQUssT0FBTCxDQUFhLFdBQWIsQ0FBeUIsT0FBekIsRUFIc0I7Ozs7NkJBTWY7QUFBRSxXQUFLLE9BQUwsQ0FBYSxNQUFiLEdBQUY7Ozs7NEJBRUQ7QUFBRSxXQUFLLE9BQUwsQ0FB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bGUiOiJqc3hET01FbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgRWxlbWVudCA9IGVhc3l1aS5FbGVtZW50O1xuXG5jbGFzcyBKU1hET01FbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudE9yRWxlbWVudE5hbWUsIHByb3BlcnRpZXMsIGNoaWxkcmVuKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gKGVsZW1lbnRPckVsZW1lbnROYW1lIGluc3RhbmNlb2YgRWxlbWVudCkgP1xuICAgICAgICAgICAgICAgICAgICAgZWxlbWVudE9yRWxlbWVudE5hbWUgOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgZnJvbUVsZW1lbnROYW1lKGVsZW1lbnRPckVsZW1lbnROYW1lKTsgLy8vXG5cbiAgICB0aGlzLmFkZFByb3BlcnRpZXNUb0VsZW1lbnQocHJvcGVydGllcyk7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5tb3VudCh0aGlzKTsgIC8vL1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cbiAgXG4gIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudEpTWEVsZW1lbnQpIHtcbiAgICBwYXJlbnRKU1hFbGVtZW50LmFwcGVuZCh0aGlzKTtcbiAgfVxuXG4gIHJlbW91bnQob2xkSlNYRWxlbWVudCkge1xuICAgIG9sZEpTWEVsZW1lbnQuYXBwZW5kQWZ0ZXIodGhpcyk7XG5cbiAgICBvbGRKU1hFbGVtZW50LnJlbW92ZSgpO1xuICB9XG5cbiAgdW5tb3VudCgpIHtcbiAgICB0aGlzLnJlbW92ZSgpO1xuICB9XG5cbiAgYXBwZW5kKGpzeEVsZW1lbnQpIHtcbiAgICB2YXIgZWxlbWVudCA9IGpzeEVsZW1lbnQuZ2V0RWxlbWVudCgpO1xuXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZChlbGVtZW50KTtcbiAgfVxuXG4gIGFwcGVuZEFmdGVyKGpzeEVsZW1lbnQpIHtcbiAgICB2YXIgZWxlbWVudCA9IGpzeEVsZW1lbnQuZ2V0RWxlbWVudCgpO1xuXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZEFmdGVyKGVsZW1lbnQpO1xuICB9XG5cbiAgcmVtb3ZlKCkgeyB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7IH1cblxuICBlbXB0eSgpIHsgdGhpcy5lbGVtZW50LmVtcHR5KCk7IH1cblxuICBhZGRQcm9wZXJ0aWVzVG9FbGVtZW50KHByb3BlcnRpZXMpIHtcbiAgICBpZiAocHJvcGVydGllcyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyk7XG5cbiAgICBwcm9wZXJ0eU5hbWVzLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5TmFtZSkge1xuICAgICAgdmFyIHByb3BlcnR5VmFsdWUgPSBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG5cbiAgICAgIGlmIChwcm9wZXJ0eU5hbWUgPT09ICdyZWYnKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHByb3BlcnR5VmFsdWUsIC8vL1xuICAgICAgICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZWxlbWVudC4kZWxlbWVudFswXSwgIC8vL1xuICAgICAgICAgICAgcmVmID0gZG9tRWxlbWVudDsgLy8vXG5cbiAgICAgICAgY2FsbGJhY2socmVmKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0eVZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaWYgKGJlZ2luc1dpdGgocHJvcGVydHlOYW1lLCAnb24nKSkge1xuICAgICAgICAgICAgdmFyIGV2ZW50cyA9IHByb3BlcnR5TmFtZS5zdWJzdHJpbmcoMikudG9Mb3dlckNhc2UoKSwgLy8vXG4gICAgICAgICAgICAgICAgaGFuZGxlciA9IHByb3BlcnR5VmFsdWU7ICAvLy9cblxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm9uKGV2ZW50cywgaGFuZGxlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBhdHRyaWJ1dGVOYW1lLFxuICAgICAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHByb3BlcnR5VmFsdWU7XG5cbiAgICAgICAgICBzd2l0Y2ggKHByb3BlcnR5TmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnY2xhc3NOYW1lJzpcbiAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZSA9ICdjbGFzcyc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdodG1sRm9yJzpcbiAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZSA9ICdmb3InO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZSA9IHByb3BlcnR5TmFtZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVWYWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkT2JqZWN0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFkZEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFkZE9iamVjdEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSkge1xuICAgIHZhciBkb21FbGVtZW50ID0gdGhpcy5lbGVtZW50LiRlbGVtZW50WzBdLCAgLy8vXG4gICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyhhdHRyaWJ1dGVWYWx1ZSk7XG5cbiAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGVWYWx1ZVtrZXldO1xuXG4gICAgICBkb21FbGVtZW50W2F0dHJpYnV0ZU5hbWVdW2tleV0gPSB2YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgdmFyIGVsZW1lbnQgPSBFbGVtZW50LmZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpLFxuICAgICAgICBwcm9wZXJ0aWVzID0gbnVsbCxcbiAgICAgICAgY2hpbGRyZW4gPSBbXTtcbiAgICBcbiAgICByZXR1cm4gbmV3IEpTWERPTUVsZW1lbnQoZWxlbWVudCwgcHJvcGVydGllcywgY2hpbGRyZW4pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSlNYRE9NRWxlbWVudDtcblxuZnVuY3Rpb24gZnJvbUVsZW1lbnROYW1lKGVsZW1lbnROYW1lKSB7XG4gIHZhciBlbGVtZW50SFRNTCA9ICc8JyArIGVsZW1lbnROYW1lICsgJy8+JyxcbiAgICAgIGVsZW1lbnQgPSBFbGVtZW50LmZyb21IVE1MKGVsZW1lbnRIVE1MKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYmVnaW5zV2l0aChzdHJpbmcsIGJlZ2lubmluZ1N0cmluZykge1xuICB2YXIgcmVnRXhwID0gbmV3IFJlZ0V4cCgnXicgKyBiZWdpbm5pbmdTdHJpbmcpLFxuICAgICAgbWF0Y2hlcyA9IHN0cmluZy5tYXRjaChyZWdFeHApO1xuXG4gIHJldHVybiAhIW1hdGNoZXM7IC8vL1xufVxuIl19