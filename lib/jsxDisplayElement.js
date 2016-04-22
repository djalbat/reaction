'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    Element = easyui.Element;

var JSXDisplayElement = function () {
  function JSXDisplayElement(elementOrDisplayName, properties, children) {
    _classCallCheck(this, JSXDisplayElement);

    this.element = elementOrDisplayName instanceof Element ? elementOrDisplayName : ///
    fromDisplayName(elementOrDisplayName); ///

    this.addPropertiesToElement(properties);

    children.forEach(function (child) {
      child.mount(this); ///
    }.bind(this));
  }

  _createClass(JSXDisplayElement, [{
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

      return new JSXDisplayElement(element, properties, children);
    }
  }]);

  return JSXDisplayElement;
}();

module.exports = JSXDisplayElement;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hEaXNwbGF5RWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFJLFNBQVMsUUFBUSxRQUFSLENBQVQ7SUFDQSxVQUFVLE9BQU8sT0FBUDs7SUFFUjtBQUNKLFdBREksaUJBQ0osQ0FBWSxvQkFBWixFQUFrQyxVQUFsQyxFQUE4QyxRQUE5QyxFQUF3RDswQkFEcEQsbUJBQ29EOztBQUN0RCxTQUFLLE9BQUwsR0FBZSxvQkFBQyxZQUFnQyxPQUFoQyxHQUNDLG9CQURGO0FBRUksb0JBQWdCLG9CQUFoQixDQUZKOztBQUR1QyxRQUt0RCxDQUFLLHNCQUFMLENBQTRCLFVBQTVCLEVBTHNEOztBQU90RCxhQUFTLE9BQVQsQ0FBaUIsVUFBUyxLQUFULEVBQWdCO0FBQy9CLFlBQU0sS0FBTixDQUFZLElBQVo7QUFEK0IsS0FBaEIsQ0FFZixJQUZlLENBRVYsSUFGVSxDQUFqQixFQVBzRDtHQUF4RDs7ZUFESTs7aUNBYVM7QUFDWCxhQUFPLEtBQUssT0FBTCxDQURJOzs7OzBCQUlQLGtCQUFrQjtBQUN0Qix1QkFBaUIsTUFBakIsQ0FBd0IsSUFBeEIsRUFEc0I7Ozs7MkJBSWpCLGVBQWU7QUFDcEIsb0JBQWMsV0FBZCxDQUEwQixJQUExQixFQURvQjs7QUFHcEIsb0JBQWMsTUFBZCxHQUhvQjs7Ozs4QkFNWjtBQUNSLFdBQUssTUFBTCxHQURROzs7OzJCQUlILFlBQVk7QUFDakIsVUFBSSxVQUFVLFdBQVcsVUFBWCxFQUFWLENBRGE7O0FBR2pCLFdBQUssT0FBTCxDQUFhLE1BQWIsQ0FBb0IsT0FBcEIsRUFIaUI7Ozs7Z0NBTVAsWUFBWTtBQUN0QixVQUFJLFVBQVUsV0FBVyxVQUFYLEVBQVYsQ0FEa0I7O0FBR3RCLFdBQUssT0FBTCxDQUFhLFdBQWIsQ0FBeUIsT0FBekIsRUFIc0I7Ozs7NkJBTWY7QUFBRSxXQUFLLE9BQUwsQ0FBYSxNQUFiLEdBQUY7Ozs7NEJBRUQ7QUFBRSxXQUFLLE9B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QTdDIiwiZmlsZSI6ImpzeERpc3BsYXlFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgRWxlbWVudCA9IGVhc3l1aS5FbGVtZW50O1xuXG5jbGFzcyBKU1hEaXNwbGF5RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRPckRpc3BsYXlOYW1lLCBwcm9wZXJ0aWVzLCBjaGlsZHJlbikge1xuICAgIHRoaXMuZWxlbWVudCA9IChlbGVtZW50T3JEaXNwbGF5TmFtZSBpbnN0YW5jZW9mIEVsZW1lbnQpID9cbiAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRPckRpc3BsYXlOYW1lIDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgIGZyb21EaXNwbGF5TmFtZShlbGVtZW50T3JEaXNwbGF5TmFtZSk7IC8vL1xuXG4gICAgdGhpcy5hZGRQcm9wZXJ0aWVzVG9FbGVtZW50KHByb3BlcnRpZXMpO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQubW91bnQodGhpcyk7ICAvLy9cbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG4gIFxuICBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gIH1cblxuICBtb3VudChwYXJlbnRKU1hFbGVtZW50KSB7XG4gICAgcGFyZW50SlNYRWxlbWVudC5hcHBlbmQodGhpcyk7XG4gIH1cblxuICB1cGRhdGUob2xkSlNYRWxlbWVudCkge1xuICAgIG9sZEpTWEVsZW1lbnQuYXBwZW5kQWZ0ZXIodGhpcyk7XG5cbiAgICBvbGRKU1hFbGVtZW50LnJlbW92ZSgpO1xuICB9XG5cbiAgdW5tb3VudCgpIHtcbiAgICB0aGlzLnJlbW92ZSgpO1xuICB9XG5cbiAgYXBwZW5kKGpzeEVsZW1lbnQpIHtcbiAgICB2YXIgZWxlbWVudCA9IGpzeEVsZW1lbnQuZ2V0RWxlbWVudCgpO1xuXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZChlbGVtZW50KTtcbiAgfVxuXG4gIGFwcGVuZEFmdGVyKGpzeEVsZW1lbnQpIHtcbiAgICB2YXIgZWxlbWVudCA9IGpzeEVsZW1lbnQuZ2V0RWxlbWVudCgpO1xuXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZEFmdGVyKGVsZW1lbnQpO1xuICB9XG5cbiAgcmVtb3ZlKCkgeyB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7IH1cblxuICBlbXB0eSgpIHsgdGhpcy5lbGVtZW50LmVtcHR5KCk7IH1cblxuICBhZGRQcm9wZXJ0aWVzVG9FbGVtZW50KHByb3BlcnRpZXMpIHtcbiAgICBpZiAocHJvcGVydGllcyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyk7XG5cbiAgICBwcm9wZXJ0eU5hbWVzLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5TmFtZSkge1xuICAgICAgdmFyIHByb3BlcnR5VmFsdWUgPSBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG5cbiAgICAgIGlmIChwcm9wZXJ0eU5hbWUgPT09ICdyZWYnKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHByb3BlcnR5VmFsdWUsIC8vL1xuICAgICAgICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZWxlbWVudC4kZWxlbWVudFswXSwgIC8vL1xuICAgICAgICAgICAgcmVmID0gZG9tRWxlbWVudDsgLy8vXG5cbiAgICAgICAgY2FsbGJhY2socmVmKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0eVZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaWYgKGJlZ2luc1dpdGgocHJvcGVydHlOYW1lLCAnb24nKSkge1xuICAgICAgICAgICAgdmFyIGV2ZW50cyA9IHByb3BlcnR5TmFtZS5zdWJzdHJpbmcoMikudG9Mb3dlckNhc2UoKSwgLy8vXG4gICAgICAgICAgICAgICAgaGFuZGxlciA9IHByb3BlcnR5VmFsdWU7ICAvLy9cblxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm9uKGV2ZW50cywgaGFuZGxlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBhdHRyaWJ1dGVOYW1lLFxuICAgICAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHByb3BlcnR5VmFsdWU7XG5cbiAgICAgICAgICBzd2l0Y2ggKHByb3BlcnR5TmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnY2xhc3NOYW1lJzpcbiAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZSA9ICdjbGFzcyc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdodG1sRm9yJzpcbiAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZSA9ICdmb3InO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZSA9IHByb3BlcnR5TmFtZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVWYWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkT2JqZWN0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFkZEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFkZE9iamVjdEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSkge1xuICAgIHZhciBkb21FbGVtZW50ID0gdGhpcy5lbGVtZW50LiRlbGVtZW50WzBdLCAgLy8vXG4gICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyhhdHRyaWJ1dGVWYWx1ZSk7XG5cbiAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGVWYWx1ZVtrZXldO1xuXG4gICAgICBkb21FbGVtZW50W2F0dHJpYnV0ZU5hbWVdW2tleV0gPSB2YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgdmFyIGVsZW1lbnQgPSBFbGVtZW50LmZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpLFxuICAgICAgICBwcm9wZXJ0aWVzID0gbnVsbCxcbiAgICAgICAgY2hpbGRyZW4gPSBbXTtcbiAgICBcbiAgICByZXR1cm4gbmV3IEpTWERpc3BsYXlFbGVtZW50KGVsZW1lbnQsIHByb3BlcnRpZXMsIGNoaWxkcmVuKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEpTWERpc3BsYXlFbGVtZW50O1xuXG5mdW5jdGlvbiBmcm9tRGlzcGxheU5hbWUoZGlzcGxheU5hbWUpIHtcbiAgdmFyIGVsZW1lbnRIVE1MID0gJzwnICsgZGlzcGxheU5hbWUgKyAnLz4nLFxuICAgICAgZWxlbWVudCA9IEVsZW1lbnQuZnJvbUhUTUwoZWxlbWVudEhUTUwpO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBiZWdpbnNXaXRoKHN0cmluZywgYmVnaW5uaW5nU3RyaW5nKSB7XG4gIHZhciByZWdFeHAgPSBuZXcgUmVnRXhwKCdeJyArIGJlZ2lubmluZ1N0cmluZyksXG4gICAgICBtYXRjaGVzID0gc3RyaW5nLm1hdGNoKHJlZ0V4cCk7XG5cbiAgcmV0dXJuICEhbWF0Y2hlczsgLy8vXG59XG4iXX0=