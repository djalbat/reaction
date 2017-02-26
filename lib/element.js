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
      },
          element = new Element(domElement, props);

      return element;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJkb21FbGVtZW50IiwicHJvcHMiLCJwYXJlbnQiLCJ1bmRlZmluZWQiLCJjaGlsZHJlbiIsInJlZmVyZW5jZSIsInBhcmVudERPTUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJyZWZlcmVuY2VET01FbGVtZW50IiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwiYXR0cmlidXRlTmFtZSIsImF0dHJpYnV0ZVZhbHVlIiwic2V0QXR0cmlidXRlIiwia2V5cyIsIk9iamVjdCIsImZvckVhY2giLCJrZXkiLCJ2YWx1ZSIsImJpbmQiLCJldmVudE5hbWUiLCJoYW5kbGVyIiwiZWxlbWVudCIsIm1vZHVsZSIsImV4cG9ydHMiLCJnZXRET01FbGVtZW50IiwiZ2V0UGFyZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7SUFFTUEsTztBQUNKLG1CQUFZQyxVQUFaLEVBQXdCQyxLQUF4QixFQUErQjtBQUFBOztBQUM3QixTQUFLRCxVQUFMLEdBQWtCQSxVQUFsQjs7QUFFQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7O0FBRUEsU0FBS0MsTUFBTCxHQUFjQyxTQUFkOztBQUVBLFNBQUtDLFFBQUwsR0FBZ0JILE1BQU1HLFFBQXRCLENBUDZCLENBT0k7QUFDbEM7Ozs7b0NBRWU7QUFDZCxhQUFPLEtBQUtKLFVBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLRSxNQUFaO0FBQ0Q7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0UsUUFBWjtBQUNEOzs7MEJBRUtGLE0sRUFBUUcsUyxFQUFXO0FBQ3ZCLFdBQUtILE1BQUwsR0FBY0EsTUFBZDs7QUFFQSxVQUFJLEtBQUtGLFVBQUwsS0FBb0IsSUFBeEIsRUFBOEI7QUFDNUJNLHlCQUFpQkosTUFBakIsRUFBeUJLLFlBQXpCLENBQXNDLEtBQUtQLFVBQTNDLEVBQXVEUSxvQkFBb0JILFNBQXBCLENBQXZEO0FBQ0Q7QUFDRjs7OzhCQUVTO0FBQ1IsVUFBSSxLQUFLTCxVQUFMLEtBQW9CLElBQXhCLEVBQThCO0FBQzVCLGFBQUtBLFVBQUwsQ0FBZ0JTLGFBQWhCLENBQThCQyxXQUE5QixDQUEwQyxLQUFLVixVQUEvQztBQUNEO0FBQ0Y7OztpQ0FFWVcsYSxFQUFlQyxjLEVBQWdCO0FBQzFDLFVBQUlELGtCQUFrQixXQUF0QixFQUFtQztBQUNqQ0Esd0JBQWdCLE9BQWhCO0FBQ0Q7QUFDRCxVQUFJQSxrQkFBa0IsU0FBdEIsRUFBaUM7QUFDL0JBLHdCQUFnQixLQUFoQjtBQUNEOztBQUVELFVBQUksS0FBSixFQUFXLENBRVYsQ0FGRCxNQUVPLElBQUksT0FBT0MsY0FBUCxLQUEwQixRQUE5QixFQUF3QztBQUM3QyxhQUFLWixVQUFMLENBQWdCYSxZQUFoQixDQUE2QkYsYUFBN0IsRUFBNENDLGNBQTVDO0FBQ0QsT0FGTSxNQUVBLElBQUksUUFBT0EsY0FBUCx5Q0FBT0EsY0FBUCxPQUEwQixRQUE5QixFQUF3QztBQUM3QyxZQUFNRSxPQUFPQyxPQUFPRCxJQUFQLENBQVlGLGNBQVosQ0FBYjs7QUFFQUUsYUFBS0UsT0FBTCxDQUFhLFVBQVVDLEdBQVYsRUFBZTtBQUMxQixjQUFNQyxRQUFRTixlQUFlSyxHQUFmLENBQWQ7O0FBRUEsZUFBS2pCLFVBQUwsQ0FBZ0JXLGFBQWhCLEVBQStCTSxHQUEvQixJQUFzQ0MsS0FBdEM7QUFDRCxTQUpZLENBSVhDLElBSlcsQ0FJTixJQUpNLENBQWI7QUFLRCxPQVJNLE1BUUE7QUFDTDtBQUNEO0FBQ0Y7OzsrQkFFVUMsUyxFQUFXQyxPLEVBQVM7QUFDN0IsV0FBS3JCLFVBQUwsQ0FBZ0JvQixTQUFoQixJQUE2QkMsT0FBN0I7QUFDRDs7O21DQUVxQnJCLFUsRUFBWTtBQUNoQyxVQUFNSSxXQUFXLEVBQWpCO0FBQUEsVUFDTUgsUUFBUTtBQUNORyxrQkFBVUE7QUFESixPQURkO0FBQUEsVUFJTWtCLFVBQVUsSUFBSXZCLE9BQUosQ0FBWUMsVUFBWixFQUF3QkMsS0FBeEIsQ0FKaEI7O0FBTUEsYUFBT3FCLE9BQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJ6QixPQUFqQjs7QUFFQSxTQUFTTyxnQkFBVCxDQUEwQkosTUFBMUIsRUFBa0M7QUFDaEMsTUFBSUksbUJBQW1CSixPQUFPdUIsYUFBUCxFQUF2Qjs7QUFFQSxTQUFPbkIscUJBQXFCLElBQTVCLEVBQWtDO0FBQ2hDSixhQUFTQSxPQUFPd0IsU0FBUCxFQUFUOztBQUVBcEIsdUJBQW1CSixPQUFPdUIsYUFBUCxFQUFuQjtBQUNEOztBQUVELFNBQU9uQixnQkFBUDtBQUNEOztBQUVELFNBQVNFLG1CQUFULENBQTZCSCxTQUE3QixFQUF3QztBQUN0QyxNQUFNRyxzQkFBc0JILGNBQWMsSUFBZCxHQUNFQSxVQUFVb0IsYUFBVixFQURGLEdBRUksSUFGaEM7O0FBSUEsU0FBT2pCLG1CQUFQO0FBQ0QiLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQsIHByb3BzKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcblxuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcblxuICAgIHRoaXMucGFyZW50ID0gdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuOyAgLy8vXG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50O1xuICB9XG5cbiAgZ2V0Q2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW47XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSkge1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuXG4gICAgaWYgKHRoaXMuZG9tRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgcGFyZW50RE9NRWxlbWVudChwYXJlbnQpLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHJlZmVyZW5jZURPTUVsZW1lbnQocmVmZXJlbmNlKSk7XG4gICAgfVxuICB9XG5cbiAgdW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5kb21FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSkge1xuICAgIGlmIChhdHRyaWJ1dGVOYW1lID09PSAnY2xhc3NOYW1lJykge1xuICAgICAgYXR0cmlidXRlTmFtZSA9ICdjbGFzcyc7XG4gICAgfVxuICAgIGlmIChhdHRyaWJ1dGVOYW1lID09PSAnaHRtbEZvcicpIHtcbiAgICAgIGF0dHJpYnV0ZU5hbWUgPSAnZm9yJztcbiAgICB9XG5cbiAgICBpZiAoZmFsc2UpIHtcblxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGF0dHJpYnV0ZVZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYXR0cmlidXRlVmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoYXR0cmlidXRlVmFsdWUpO1xuXG4gICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZVZhbHVlW2tleV07XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50W2F0dHJpYnV0ZU5hbWVdW2tleV0gPSB2YWx1ZTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vL1xuICAgIH1cbiAgfVxuXG4gIHNldEhhbmRsZXIoZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgdGhpcy5kb21FbGVtZW50W2V2ZW50TmFtZV0gPSBoYW5kbGVyO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IFtdLFxuICAgICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlbGVtZW50ID0gbmV3IEVsZW1lbnQoZG9tRWxlbWVudCwgcHJvcHMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuXG5mdW5jdGlvbiBwYXJlbnRET01FbGVtZW50KHBhcmVudCkge1xuICBsZXQgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG5cbiAgd2hpbGUgKHBhcmVudERPTUVsZW1lbnQgPT09IG51bGwpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIHJldHVybiBwYXJlbnRET01FbGVtZW50O1xufVxuXG5mdW5jdGlvbiByZWZlcmVuY2VET01FbGVtZW50KHJlZmVyZW5jZSkge1xuICBjb25zdCByZWZlcmVuY2VET01FbGVtZW50ID0gcmVmZXJlbmNlICE9PSBudWxsID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlLmdldERPTUVsZW1lbnQoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gcmVmZXJlbmNlRE9NRWxlbWVudDtcbn1cbiJdfQ==