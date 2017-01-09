'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function () {
  function Element(domElement, props) {
    _classCallCheck(this, Element);

    this.domElement = domElement;

    this.props = props;

    this.parent = undefined;

    this.children = props.children; ///
  }

  _createClass(Element, [{
    key: 'getDOMElement',
    value: function getDOMElement() {
      return this.domElement;
    }
  }, {
    key: 'getParent',
    value: function getParent() {
      return this.parent;
    }
  }, {
    key: 'getChildren',
    value: function getChildren() {
      return this.children;
    }
  }, {
    key: 'mount',
    value: function mount(parent, reference) {
      this.parent = parent;

      if (this.domElement !== null) {
        parentDOMElement(parent).insertBefore(this.domElement, referenceDOMElement(reference));
      }
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      if (this.domElement !== null) {
        this.domElement.parentElement.removeChild(this.domElement);
      }
    }
  }, {
    key: 'setAttribute',
    value: function setAttribute(attributeName, attributeValue) {
      if (attributeName === 'className') {
        attributeName = 'class';
      }
      if (attributeName === 'htmlFor') {
        attributeName = 'for';
      }

      if (false) {} else if (typeof attributeValue === 'string') {
        this.domElement.setAttribute(attributeName, attributeValue);
      } else if ((typeof attributeValue === 'undefined' ? 'undefined' : _typeof(attributeValue)) === 'object') {
        var keys = Object.keys(attributeValue);

        keys.forEach(function (key) {
          var value = attributeValue[key];

          this.domElement[attributeName][key] = value;
        }.bind(this));
      } else {
        ///
      }
    }
  }, {
    key: 'setHandler',
    value: function setHandler(eventName, handler) {
      this.domElement[eventName] = handler;
    }
  }], [{
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement) {
      var children = [],
          props = {
        children: children
      };

      return new Element(domElement, props);
    }
  }]);

  return Element;
}();

module.exports = Element;

function parentDOMElement(parent) {
  var parentDOMElement = parent.getDOMElement();

  while (parentDOMElement === null) {
    parent = parent.getParent();

    parentDOMElement = parent.getDOMElement();
  }

  return parentDOMElement;
}

function referenceDOMElement(reference) {
  var referenceDOMElement = reference !== null ? reference.getDOMElement() : null;

  return referenceDOMElement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJkb21FbGVtZW50IiwicHJvcHMiLCJwYXJlbnQiLCJ1bmRlZmluZWQiLCJjaGlsZHJlbiIsInJlZmVyZW5jZSIsInBhcmVudERPTUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJyZWZlcmVuY2VET01FbGVtZW50IiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwiYXR0cmlidXRlTmFtZSIsImF0dHJpYnV0ZVZhbHVlIiwic2V0QXR0cmlidXRlIiwia2V5cyIsIk9iamVjdCIsImZvckVhY2giLCJrZXkiLCJ2YWx1ZSIsImJpbmQiLCJldmVudE5hbWUiLCJoYW5kbGVyIiwibW9kdWxlIiwiZXhwb3J0cyIsImdldERPTUVsZW1lbnQiLCJnZXRQYXJlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztJQUVNQSxPO0FBQ0osbUJBQVlDLFVBQVosRUFBd0JDLEtBQXhCLEVBQStCO0FBQUE7O0FBQzdCLFNBQUtELFVBQUwsR0FBa0JBLFVBQWxCOztBQUVBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjs7QUFFQSxTQUFLQyxNQUFMLEdBQWNDLFNBQWQ7O0FBRUEsU0FBS0MsUUFBTCxHQUFnQkgsTUFBTUcsUUFBdEIsQ0FQNkIsQ0FPSTtBQUNsQzs7OztvQ0FFZTtBQUNkLGFBQU8sS0FBS0osVUFBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtFLE1BQVo7QUFDRDs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLRSxRQUFaO0FBQ0Q7OzswQkFFS0YsTSxFQUFRRyxTLEVBQVc7QUFDdkIsV0FBS0gsTUFBTCxHQUFjQSxNQUFkOztBQUVBLFVBQUksS0FBS0YsVUFBTCxLQUFvQixJQUF4QixFQUE4QjtBQUM1Qk0seUJBQWlCSixNQUFqQixFQUF5QkssWUFBekIsQ0FBc0MsS0FBS1AsVUFBM0MsRUFBdURRLG9CQUFvQkgsU0FBcEIsQ0FBdkQ7QUFDRDtBQUNGOzs7OEJBRVM7QUFDUixVQUFJLEtBQUtMLFVBQUwsS0FBb0IsSUFBeEIsRUFBOEI7QUFDNUIsYUFBS0EsVUFBTCxDQUFnQlMsYUFBaEIsQ0FBOEJDLFdBQTlCLENBQTBDLEtBQUtWLFVBQS9DO0FBQ0Q7QUFDRjs7O2lDQUVZVyxhLEVBQWVDLGMsRUFBZ0I7QUFDMUMsVUFBSUQsa0JBQWtCLFdBQXRCLEVBQW1DO0FBQ2pDQSx3QkFBZ0IsT0FBaEI7QUFDRDtBQUNELFVBQUlBLGtCQUFrQixTQUF0QixFQUFpQztBQUMvQkEsd0JBQWdCLEtBQWhCO0FBQ0Q7O0FBRUQsVUFBSSxLQUFKLEVBQVcsQ0FFVixDQUZELE1BRU8sSUFBSSxPQUFPQyxjQUFQLEtBQTBCLFFBQTlCLEVBQXdDO0FBQzdDLGFBQUtaLFVBQUwsQ0FBZ0JhLFlBQWhCLENBQTZCRixhQUE3QixFQUE0Q0MsY0FBNUM7QUFDRCxPQUZNLE1BRUEsSUFBSSxRQUFPQSxjQUFQLHlDQUFPQSxjQUFQLE9BQTBCLFFBQTlCLEVBQXdDO0FBQzdDLFlBQUlFLE9BQU9DLE9BQU9ELElBQVAsQ0FBWUYsY0FBWixDQUFYOztBQUVBRSxhQUFLRSxPQUFMLENBQWEsVUFBVUMsR0FBVixFQUFlO0FBQzFCLGNBQUlDLFFBQVFOLGVBQWVLLEdBQWYsQ0FBWjs7QUFFQSxlQUFLakIsVUFBTCxDQUFnQlcsYUFBaEIsRUFBK0JNLEdBQS9CLElBQXNDQyxLQUF0QztBQUNELFNBSlksQ0FJWEMsSUFKVyxDQUlOLElBSk0sQ0FBYjtBQUtELE9BUk0sTUFRQTtBQUNMO0FBQ0Q7QUFDRjs7OytCQUVVQyxTLEVBQVdDLE8sRUFBUztBQUM3QixXQUFLckIsVUFBTCxDQUFnQm9CLFNBQWhCLElBQTZCQyxPQUE3QjtBQUNEOzs7bUNBRXFCckIsVSxFQUFZO0FBQ2hDLFVBQUlJLFdBQVcsRUFBZjtBQUFBLFVBQ0lILFFBQVE7QUFDTkcsa0JBQVVBO0FBREosT0FEWjs7QUFLQSxhQUFPLElBQUlMLE9BQUosQ0FBWUMsVUFBWixFQUF3QkMsS0FBeEIsQ0FBUDtBQUNEOzs7Ozs7QUFHSHFCLE9BQU9DLE9BQVAsR0FBaUJ4QixPQUFqQjs7QUFFQSxTQUFTTyxnQkFBVCxDQUEwQkosTUFBMUIsRUFBa0M7QUFDaEMsTUFBSUksbUJBQW1CSixPQUFPc0IsYUFBUCxFQUF2Qjs7QUFFQSxTQUFPbEIscUJBQXFCLElBQTVCLEVBQWtDO0FBQ2hDSixhQUFTQSxPQUFPdUIsU0FBUCxFQUFUOztBQUVBbkIsdUJBQW1CSixPQUFPc0IsYUFBUCxFQUFuQjtBQUNEOztBQUVELFNBQU9sQixnQkFBUDtBQUNEOztBQUVELFNBQVNFLG1CQUFULENBQTZCSCxTQUE3QixFQUF3QztBQUN0QyxNQUFJRyxzQkFBc0JILGNBQWMsSUFBZCxHQUNFQSxVQUFVbUIsYUFBVixFQURGLEdBRUksSUFGOUI7O0FBSUEsU0FBT2hCLG1CQUFQO0FBQ0QiLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQsIHByb3BzKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcblxuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcblxuICAgIHRoaXMucGFyZW50ID0gdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuOyAgLy8vXG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50O1xuICB9XG5cbiAgZ2V0Q2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW47XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSkge1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuXG4gICAgaWYgKHRoaXMuZG9tRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgcGFyZW50RE9NRWxlbWVudChwYXJlbnQpLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHJlZmVyZW5jZURPTUVsZW1lbnQocmVmZXJlbmNlKSk7XG4gICAgfVxuICB9XG5cbiAgdW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5kb21FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSkge1xuICAgIGlmIChhdHRyaWJ1dGVOYW1lID09PSAnY2xhc3NOYW1lJykge1xuICAgICAgYXR0cmlidXRlTmFtZSA9ICdjbGFzcyc7XG4gICAgfVxuICAgIGlmIChhdHRyaWJ1dGVOYW1lID09PSAnaHRtbEZvcicpIHtcbiAgICAgIGF0dHJpYnV0ZU5hbWUgPSAnZm9yJztcbiAgICB9XG5cbiAgICBpZiAoZmFsc2UpIHtcblxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGF0dHJpYnV0ZVZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYXR0cmlidXRlVmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGF0dHJpYnV0ZVZhbHVlKTtcblxuICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gYXR0cmlidXRlVmFsdWVba2V5XTtcblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnRbYXR0cmlidXRlTmFtZV1ba2V5XSA9IHZhbHVlO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8vXG4gICAgfVxuICB9XG5cbiAgc2V0SGFuZGxlcihldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnRbZXZlbnROYW1lXSA9IGhhbmRsZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIHZhciBjaGlsZHJlbiA9IFtdLFxuICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgICAgfTtcblxuICAgIHJldHVybiBuZXcgRWxlbWVudChkb21FbGVtZW50LCBwcm9wcyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuXG5mdW5jdGlvbiBwYXJlbnRET01FbGVtZW50KHBhcmVudCkge1xuICB2YXIgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG5cbiAgd2hpbGUgKHBhcmVudERPTUVsZW1lbnQgPT09IG51bGwpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIHJldHVybiBwYXJlbnRET01FbGVtZW50O1xufVxuXG5mdW5jdGlvbiByZWZlcmVuY2VET01FbGVtZW50KHJlZmVyZW5jZSkge1xuICB2YXIgcmVmZXJlbmNlRE9NRWxlbWVudCA9IHJlZmVyZW5jZSAhPT0gbnVsbCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2UuZ2V0RE9NRWxlbWVudCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gcmVmZXJlbmNlRE9NRWxlbWVudDtcbn1cbiJdfQ==