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

      if (false) {} else if ((typeof attributeValue === 'undefined' ? 'undefined' : _typeof(attributeValue)) === 'object') {
        var keys = Object.keys(attributeValue);

        keys.forEach(function (key) {
          var value = attributeValue[key];

          this.domElement[attributeName][key] = value;
        }.bind(this));
      } else if (typeof attributeValue === 'boolean') {
        if (attributeValue) {
          attributeValue = attributeName; ///

          this.domElement.setAttribute(attributeName, attributeValue);
        }
      } else {
        this.domElement.setAttribute(attributeName, attributeValue);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJkb21FbGVtZW50IiwicHJvcHMiLCJwYXJlbnQiLCJ1bmRlZmluZWQiLCJjaGlsZHJlbiIsInJlZmVyZW5jZSIsInBhcmVudERPTUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJyZWZlcmVuY2VET01FbGVtZW50IiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwiYXR0cmlidXRlTmFtZSIsImF0dHJpYnV0ZVZhbHVlIiwia2V5cyIsIk9iamVjdCIsImZvckVhY2giLCJrZXkiLCJ2YWx1ZSIsImJpbmQiLCJzZXRBdHRyaWJ1dGUiLCJldmVudE5hbWUiLCJoYW5kbGVyIiwiZWxlbWVudCIsIm1vZHVsZSIsImV4cG9ydHMiLCJnZXRET01FbGVtZW50IiwiZ2V0UGFyZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7SUFFTUEsTztBQUNKLG1CQUFZQyxVQUFaLEVBQXdCQyxLQUF4QixFQUErQjtBQUFBOztBQUM3QixTQUFLRCxVQUFMLEdBQWtCQSxVQUFsQjs7QUFFQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7O0FBRUEsU0FBS0MsTUFBTCxHQUFjQyxTQUFkOztBQUVBLFNBQUtDLFFBQUwsR0FBZ0JILE1BQU1HLFFBQXRCLENBUDZCLENBT0k7QUFDbEM7Ozs7b0NBRWU7QUFDZCxhQUFPLEtBQUtKLFVBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLRSxNQUFaO0FBQ0Q7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0UsUUFBWjtBQUNEOzs7MEJBRUtGLE0sRUFBUUcsUyxFQUFXO0FBQ3ZCLFdBQUtILE1BQUwsR0FBY0EsTUFBZDs7QUFFQSxVQUFJLEtBQUtGLFVBQUwsS0FBb0IsSUFBeEIsRUFBOEI7QUFDNUJNLHlCQUFpQkosTUFBakIsRUFBeUJLLFlBQXpCLENBQXNDLEtBQUtQLFVBQTNDLEVBQXVEUSxvQkFBb0JILFNBQXBCLENBQXZEO0FBQ0Q7QUFDRjs7OzhCQUVTO0FBQ1IsVUFBSSxLQUFLTCxVQUFMLEtBQW9CLElBQXhCLEVBQThCO0FBQzVCLGFBQUtBLFVBQUwsQ0FBZ0JTLGFBQWhCLENBQThCQyxXQUE5QixDQUEwQyxLQUFLVixVQUEvQztBQUNEO0FBQ0Y7OztpQ0FFWVcsYSxFQUFlQyxjLEVBQWdCO0FBQzFDLFVBQUlELGtCQUFrQixXQUF0QixFQUFtQztBQUNqQ0Esd0JBQWdCLE9BQWhCO0FBQ0Q7QUFDRCxVQUFJQSxrQkFBa0IsU0FBdEIsRUFBaUM7QUFDL0JBLHdCQUFnQixLQUFoQjtBQUNEOztBQUVELFVBQUksS0FBSixFQUFXLENBRVYsQ0FGRCxNQUVPLElBQUksUUFBT0MsY0FBUCx5Q0FBT0EsY0FBUCxPQUEwQixRQUE5QixFQUF3QztBQUM3QyxZQUFNQyxPQUFPQyxPQUFPRCxJQUFQLENBQVlELGNBQVosQ0FBYjs7QUFFQUMsYUFBS0UsT0FBTCxDQUFhLFVBQVVDLEdBQVYsRUFBZTtBQUMxQixjQUFNQyxRQUFRTCxlQUFlSSxHQUFmLENBQWQ7O0FBRUEsZUFBS2hCLFVBQUwsQ0FBZ0JXLGFBQWhCLEVBQStCSyxHQUEvQixJQUFzQ0MsS0FBdEM7QUFDRCxTQUpZLENBSVhDLElBSlcsQ0FJTixJQUpNLENBQWI7QUFLRCxPQVJNLE1BUUEsSUFBSSxPQUFPTixjQUFQLEtBQTBCLFNBQTlCLEVBQXlDO0FBQzlDLFlBQUlBLGNBQUosRUFBb0I7QUFDbEJBLDJCQUFpQkQsYUFBakIsQ0FEa0IsQ0FDYzs7QUFFaEMsZUFBS1gsVUFBTCxDQUFnQm1CLFlBQWhCLENBQTZCUixhQUE3QixFQUE0Q0MsY0FBNUM7QUFDRDtBQUNGLE9BTk0sTUFNQTtBQUNMLGFBQUtaLFVBQUwsQ0FBZ0JtQixZQUFoQixDQUE2QlIsYUFBN0IsRUFBNENDLGNBQTVDO0FBQ0Q7QUFDRjs7OytCQUVVUSxTLEVBQVdDLE8sRUFBUztBQUM3QixXQUFLckIsVUFBTCxDQUFnQm9CLFNBQWhCLElBQTZCQyxPQUE3QjtBQUNEOzs7bUNBRXFCckIsVSxFQUFZO0FBQ2hDLFVBQU1JLFdBQVcsRUFBakI7QUFBQSxVQUNNSCxRQUFRO0FBQ05HLGtCQUFVQTtBQURKLE9BRGQ7QUFBQSxVQUlNa0IsVUFBVSxJQUFJdkIsT0FBSixDQUFZQyxVQUFaLEVBQXdCQyxLQUF4QixDQUpoQjs7QUFNQSxhQUFPcUIsT0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnpCLE9BQWpCOztBQUVBLFNBQVNPLGdCQUFULENBQTBCSixNQUExQixFQUFrQztBQUNoQyxNQUFJSSxtQkFBbUJKLE9BQU91QixhQUFQLEVBQXZCOztBQUVBLFNBQU9uQixxQkFBcUIsSUFBNUIsRUFBa0M7QUFDaENKLGFBQVNBLE9BQU93QixTQUFQLEVBQVQ7O0FBRUFwQix1QkFBbUJKLE9BQU91QixhQUFQLEVBQW5CO0FBQ0Q7O0FBRUQsU0FBT25CLGdCQUFQO0FBQ0Q7O0FBRUQsU0FBU0UsbUJBQVQsQ0FBNkJILFNBQTdCLEVBQXdDO0FBQ3RDLE1BQU1HLHNCQUFzQkgsY0FBYyxJQUFkLEdBQ0VBLFVBQVVvQixhQUFWLEVBREYsR0FFSSxJQUZoQzs7QUFJQSxTQUFPakIsbUJBQVA7QUFDRCIsImZpbGUiOiJlbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZG9tRWxlbWVudCwgcHJvcHMpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuXG4gICAgdGhpcy5wYXJlbnQgPSB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47ICAvLy9cbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gIH1cblxuICBnZXRDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbjtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlKSB7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICBpZiAodGhpcy5kb21FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBwYXJlbnRET01FbGVtZW50KHBhcmVudCkuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgcmVmZXJlbmNlRE9NRWxlbWVudChyZWZlcmVuY2UpKTtcbiAgICB9XG4gIH1cblxuICB1bm1vdW50KCkge1xuICAgIGlmICh0aGlzLmRvbUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKSB7XG4gICAgaWYgKGF0dHJpYnV0ZU5hbWUgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICBhdHRyaWJ1dGVOYW1lID0gJ2NsYXNzJztcbiAgICB9XG4gICAgaWYgKGF0dHJpYnV0ZU5hbWUgPT09ICdodG1sRm9yJykge1xuICAgICAgYXR0cmlidXRlTmFtZSA9ICdmb3InO1xuICAgIH1cblxuICAgIGlmIChmYWxzZSkge1xuXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYXR0cmlidXRlVmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoYXR0cmlidXRlVmFsdWUpO1xuXG4gICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZVZhbHVlW2tleV07XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50W2F0dHJpYnV0ZU5hbWVdW2tleV0gPSB2YWx1ZTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYXR0cmlidXRlVmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgaWYgKGF0dHJpYnV0ZVZhbHVlKSB7XG4gICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gYXR0cmlidXRlTmFtZTsgLy8vXG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHNldEhhbmRsZXIoZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgdGhpcy5kb21FbGVtZW50W2V2ZW50TmFtZV0gPSBoYW5kbGVyO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IFtdLFxuICAgICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlbGVtZW50ID0gbmV3IEVsZW1lbnQoZG9tRWxlbWVudCwgcHJvcHMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuXG5mdW5jdGlvbiBwYXJlbnRET01FbGVtZW50KHBhcmVudCkge1xuICBsZXQgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG5cbiAgd2hpbGUgKHBhcmVudERPTUVsZW1lbnQgPT09IG51bGwpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIHJldHVybiBwYXJlbnRET01FbGVtZW50O1xufVxuXG5mdW5jdGlvbiByZWZlcmVuY2VET01FbGVtZW50KHJlZmVyZW5jZSkge1xuICBjb25zdCByZWZlcmVuY2VET01FbGVtZW50ID0gcmVmZXJlbmNlICE9PSBudWxsID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlLmdldERPTUVsZW1lbnQoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gcmVmZXJlbmNlRE9NRWxlbWVudDtcbn1cbiJdfQ==