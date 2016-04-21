'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    Element = easyui.Element;

var JSXDOMElement = function () {
  function JSXDOMElement(elementOrDisplayName, properties, children) {
    _classCallCheck(this, JSXDOMElement);

    this.element = elementOrDisplayName instanceof Element ? elementOrDisplayName : ///
    fromDisplayName(elementOrDisplayName); ///

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
    key: 'update',
    value: function update(oldJSXElement) {
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

function fromDisplayName(displayName) {
  var elementHTML = '<' + displayName + '/>',
      element = Element.fromHTML(elementHTML);

  return element;
}

function beginsWith(string, beginningString) {
  var regExp = new RegExp('^' + beginningString),
      matches = string.match(regExp);

  return !!matches; ///
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hET01FbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQUksU0FBUyxRQUFRLFFBQVIsQ0FBVDtJQUNBLFVBQVUsT0FBTyxPQUFQOztJQUVSO0FBQ0osV0FESSxhQUNKLENBQVksb0JBQVosRUFBa0MsVUFBbEMsRUFBOEMsUUFBOUMsRUFBd0Q7MEJBRHBELGVBQ29EOztBQUN0RCxTQUFLLE9BQUwsR0FBZSxvQkFBQyxZQUFnQyxPQUFoQyxHQUNDLG9CQURGO0FBRUksb0JBQWdCLG9CQUFoQixDQUZKOztBQUR1QyxRQUt0RCxDQUFLLHNCQUFMLENBQTRCLFVBQTVCLEVBTHNEOztBQU90RCxhQUFTLE9BQVQsQ0FBaUIsVUFBUyxLQUFULEVBQWdCO0FBQy9CLFlBQU0sS0FBTixDQUFZLElBQVo7QUFEK0IsS0FBaEIsQ0FFZixJQUZlLENBRVYsSUFGVSxDQUFqQixFQVBzRDtHQUF4RDs7ZUFESTs7aUNBYVM7QUFDWCxhQUFPLEtBQUssT0FBTCxDQURJOzs7OzBCQUlQLGtCQUFrQjtBQUN0Qix1QkFBaUIsTUFBakIsQ0FBd0IsSUFBeEIsRUFEc0I7Ozs7MkJBSWpCLGVBQWU7QUFDcEIsb0JBQWMsV0FBZCxDQUEwQixJQUExQixFQURvQjs7QUFHcEIsb0JBQWMsTUFBZCxHQUhvQjs7Ozs4QkFNWjtBQUNSLFdBQUssTUFBTCxHQURROzs7OzJCQUlILFlBQVk7QUFDakIsVUFBSSxVQUFVLFdBQVcsVUFBWCxFQUFWLENBRGE7O0FBR2pCLFdBQUssT0FBTCxDQUFhLE1BQWIsQ0FBb0IsT0FBcEIsRUFIaUI7Ozs7Z0NBTVAsWUFBWTtBQUN0QixVQUFJLFVBQVUsV0FBVyxVQUFYLEVBQVYsQ0FEa0I7O0FBR3RCLFdBQUssT0FBTCxDQUFhLFdBQWIsQ0FBeUIsT0FBekIsRUFIc0I7Ozs7NkJBTWY7QUFBRSxXQUFLLE9BQUwsQ0FBYSxNQUFiLEdBQUY7Ozs7NEJBRUQ7QUFBRSxXQUFLLE9BQUwsQ0FB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bGUiOiJqc3hET01FbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgRWxlbWVudCA9IGVhc3l1aS5FbGVtZW50O1xuXG5jbGFzcyBKU1hET01FbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudE9yRGlzcGxheU5hbWUsIHByb3BlcnRpZXMsIGNoaWxkcmVuKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gKGVsZW1lbnRPckRpc3BsYXlOYW1lIGluc3RhbmNlb2YgRWxlbWVudCkgP1xuICAgICAgICAgICAgICAgICAgICAgZWxlbWVudE9yRGlzcGxheU5hbWUgOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgZnJvbURpc3BsYXlOYW1lKGVsZW1lbnRPckRpc3BsYXlOYW1lKTsgLy8vXG5cbiAgICB0aGlzLmFkZFByb3BlcnRpZXNUb0VsZW1lbnQocHJvcGVydGllcyk7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5tb3VudCh0aGlzKTsgIC8vL1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cbiAgXG4gIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudEpTWEVsZW1lbnQpIHtcbiAgICBwYXJlbnRKU1hFbGVtZW50LmFwcGVuZCh0aGlzKTtcbiAgfVxuXG4gIHVwZGF0ZShvbGRKU1hFbGVtZW50KSB7XG4gICAgb2xkSlNYRWxlbWVudC5hcHBlbmRBZnRlcih0aGlzKTtcblxuICAgIG9sZEpTWEVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cblxuICB1bm1vdW50KCkge1xuICAgIHRoaXMucmVtb3ZlKCk7XG4gIH1cblxuICBhcHBlbmQoanN4RWxlbWVudCkge1xuICAgIHZhciBlbGVtZW50ID0ganN4RWxlbWVudC5nZXRFbGVtZW50KCk7XG5cbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpO1xuICB9XG5cbiAgYXBwZW5kQWZ0ZXIoanN4RWxlbWVudCkge1xuICAgIHZhciBlbGVtZW50ID0ganN4RWxlbWVudC5nZXRFbGVtZW50KCk7XG5cbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQWZ0ZXIoZWxlbWVudCk7XG4gIH1cblxuICByZW1vdmUoKSB7IHRoaXMuZWxlbWVudC5yZW1vdmUoKTsgfVxuXG4gIGVtcHR5KCkgeyB0aGlzLmVsZW1lbnQuZW1wdHkoKTsgfVxuXG4gIGFkZFByb3BlcnRpZXNUb0VsZW1lbnQocHJvcGVydGllcykge1xuICAgIGlmIChwcm9wZXJ0aWVzID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BlcnR5TmFtZXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKTtcblxuICAgIHByb3BlcnR5TmFtZXMuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHlOYW1lKSB7XG4gICAgICB2YXIgcHJvcGVydHlWYWx1ZSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblxuICAgICAgaWYgKHByb3BlcnR5TmFtZSA9PT0gJ3JlZicpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gcHJvcGVydHlWYWx1ZSwgLy8vXG4gICAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5lbGVtZW50LiRlbGVtZW50WzBdLCAgLy8vXG4gICAgICAgICAgICByZWYgPSBkb21FbGVtZW50OyAvLy9cblxuICAgICAgICBjYWxsYmFjayhyZWYpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mIHByb3BlcnR5VmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBpZiAoYmVnaW5zV2l0aChwcm9wZXJ0eU5hbWUsICdvbicpKSB7XG4gICAgICAgICAgICB2YXIgZXZlbnRzID0gcHJvcGVydHlOYW1lLnN1YnN0cmluZygyKS50b0xvd2VyQ2FzZSgpLCAvLy9cbiAgICAgICAgICAgICAgICBoYW5kbGVyID0gcHJvcGVydHlWYWx1ZTsgIC8vL1xuXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQub24oZXZlbnRzLCBoYW5kbGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGF0dHJpYnV0ZU5hbWUsXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gcHJvcGVydHlWYWx1ZTtcblxuICAgICAgICAgIHN3aXRjaCAocHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdjbGFzc05hbWUnOlxuICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gJ2NsYXNzJztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2h0bWxGb3InOlxuICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gJ2Zvcic7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gcHJvcGVydHlOYW1lO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZVZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGhpcy5hZGRPYmplY3RBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgYWRkT2JqZWN0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKSB7XG4gICAgdmFyIGRvbUVsZW1lbnQgPSB0aGlzLmVsZW1lbnQuJGVsZW1lbnRbMF0sICAvLy9cbiAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzKGF0dHJpYnV0ZVZhbHVlKTtcblxuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZVZhbHVlW2tleV07XG5cbiAgICAgIGRvbUVsZW1lbnRbYXR0cmlidXRlTmFtZV1ba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICB2YXIgZWxlbWVudCA9IEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCksXG4gICAgICAgIHByb3BlcnRpZXMgPSBudWxsLFxuICAgICAgICBjaGlsZHJlbiA9IFtdO1xuICAgIFxuICAgIHJldHVybiBuZXcgSlNYRE9NRWxlbWVudChlbGVtZW50LCBwcm9wZXJ0aWVzLCBjaGlsZHJlbik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBKU1hET01FbGVtZW50O1xuXG5mdW5jdGlvbiBmcm9tRGlzcGxheU5hbWUoZGlzcGxheU5hbWUpIHtcbiAgdmFyIGVsZW1lbnRIVE1MID0gJzwnICsgZGlzcGxheU5hbWUgKyAnLz4nLFxuICAgICAgZWxlbWVudCA9IEVsZW1lbnQuZnJvbUhUTUwoZWxlbWVudEhUTUwpO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBiZWdpbnNXaXRoKHN0cmluZywgYmVnaW5uaW5nU3RyaW5nKSB7XG4gIHZhciByZWdFeHAgPSBuZXcgUmVnRXhwKCdeJyArIGJlZ2lubmluZ1N0cmluZyksXG4gICAgICBtYXRjaGVzID0gc3RyaW5nLm1hdGNoKHJlZ0V4cCk7XG5cbiAgcmV0dXJuICEhbWF0Y2hlczsgLy8vXG59XG4iXX0=