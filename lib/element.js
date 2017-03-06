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
    value: function setAttribute(name, value) {
      if (name === 'className') {
        name = 'class';
      }
      if (name === 'htmlFor') {
        name = 'for';
      }

      if (false) {} else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
        var keys = Object.keys(value);

        keys.forEach(function (key) {
          this.domElement[name][key] = value[key];
        }.bind(this));
      } else if (typeof value === 'boolean') {
        if (value) {
          value = name; ///

          this.domElement.setAttribute(name, value);
        }
      } else {
        this.domElement.setAttribute(name, value);
      }
    }
  }, {
    key: 'getAttribute',
    value: function getAttribute(name) {
      return this.domElement.getAttribute(name);
    }
  }, {
    key: 'clearAttribute',
    value: function clearAttribute(name) {
      this.domElement.removeAttribute(name);
    }
  }, {
    key: 'setClass',
    value: function setClass(className) {
      this.domElement.className = className;
    }
  }, {
    key: 'addClass',
    value: function addClass(className) {
      this.domElement.classList.add(className);
    }
  }, {
    key: 'removeClass',
    value: function removeClass(className) {
      this.domElement.classList.remove(className);
    }
  }, {
    key: 'toggleClass',
    value: function toggleClass(className) {
      this.domElement.classList.toggle(className);
    }
  }, {
    key: 'hasClass',
    value: function hasClass(className) {
      return this.domElement.classList.contains(className);
    }
  }, {
    key: 'clearClasses',
    value: function clearClasses() {
      this.domElement.className = '';
    }
  }, {
    key: 'setEventHandler',
    value: function setEventHandler(eventType, handler) {
      this.domElement.addEventListener(eventType, handler);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJkb21FbGVtZW50IiwicHJvcHMiLCJwYXJlbnQiLCJ1bmRlZmluZWQiLCJjaGlsZHJlbiIsInJlZmVyZW5jZSIsInBhcmVudERPTUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJyZWZlcmVuY2VET01FbGVtZW50IiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwibmFtZSIsInZhbHVlIiwia2V5cyIsIk9iamVjdCIsImZvckVhY2giLCJrZXkiLCJiaW5kIiwic2V0QXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwidG9nZ2xlIiwiY29udGFpbnMiLCJldmVudFR5cGUiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImVsZW1lbnQiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2V0RE9NRWxlbWVudCIsImdldFBhcmVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0lBRU1BLE87QUFDSixtQkFBWUMsVUFBWixFQUF3QkMsS0FBeEIsRUFBK0I7QUFBQTs7QUFDN0IsU0FBS0QsVUFBTCxHQUFrQkEsVUFBbEI7O0FBRUEsU0FBS0MsS0FBTCxHQUFhQSxLQUFiOztBQUVBLFNBQUtDLE1BQUwsR0FBY0MsU0FBZDs7QUFFQSxTQUFLQyxRQUFMLEdBQWdCSCxNQUFNRyxRQUF0QixDQVA2QixDQU9JO0FBQ2xDOzs7O29DQUVlO0FBQ2QsYUFBTyxLQUFLSixVQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0UsTUFBWjtBQUNEOzs7a0NBRWE7QUFDWixhQUFPLEtBQUtFLFFBQVo7QUFDRDs7OzBCQUVLRixNLEVBQVFHLFMsRUFBVztBQUN2QixXQUFLSCxNQUFMLEdBQWNBLE1BQWQ7O0FBRUEsVUFBSSxLQUFLRixVQUFMLEtBQW9CLElBQXhCLEVBQThCO0FBQzVCTSx5QkFBaUJKLE1B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RUFBa0M7QUFDaENKLGFBQVNBLE9BQU9nQyxTQUFQLEVBQVQ7O0FBRUE1Qix1QkFBbUJKLE9BQU8rQixhQUFQLEVBQW5CO0FBQ0Q7O0FBRUQsU0FBTzNCLGdCQUFQO0FBQ0Q7O0FBRUQsU0FBU0UsbUJBQVQsQ0FBNkJILFNBQTdCLEVBQXdDO0FBQ3RDLE1BQU1HLHNCQUFzQkgsY0FBYyxJQUFkLEdBQ0VBLFVBQVU0QixhQUFWLEVBREYsR0FFSSxJQUZoQzs7QUFJQSxTQUFPekIsbUJBQVA7QUFDRCIsImZpbGUiOiJlbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZG9tRWxlbWVudCwgcHJvcHMpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuXG4gICAgdGhpcy5wYXJlbnQgPSB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47ICAvLy9cbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gIH1cblxuICBnZXRDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbjtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlKSB7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICBpZiAodGhpcy5kb21FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBwYXJlbnRET01FbGVtZW50KHBhcmVudCkuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgcmVmZXJlbmNlRE9NRWxlbWVudChyZWZlcmVuY2UpKTtcbiAgICB9XG4gIH1cblxuICB1bm1vdW50KCkge1xuICAgIGlmICh0aGlzLmRvbUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKG5hbWUgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICBuYW1lID0gJ2NsYXNzJztcbiAgICB9XG4gICAgaWYgKG5hbWUgPT09ICdodG1sRm9yJykge1xuICAgICAgbmFtZSA9ICdmb3InO1xuICAgIH1cblxuICAgIGlmIChmYWxzZSkge1xuXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRbbmFtZV1ba2V5XSA9IHZhbHVlW2tleV07XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IG5hbWU7IC8vL1xuXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBnZXRBdHRyaWJ1dGUobmFtZSkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICB9XG5cbiAgY2xlYXJBdHRyaWJ1dGUobmFtZSkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gIH1cblxuICBzZXRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gIH1cblxuICB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xuICB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIGNsZWFyQ2xhc3NlcygpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gJyc7XG4gIH1cblxuICBzZXRFdmVudEhhbmRsZXIoZXZlbnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCAgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW10sXG4gICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgICAgICB9LFxuICAgICAgICAgIGVsZW1lbnQgPSBuZXcgRWxlbWVudChkb21FbGVtZW50LCBwcm9wcyk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIHBhcmVudERPTUVsZW1lbnQocGFyZW50KSB7XG4gIGxldCBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcblxuICB3aGlsZSAocGFyZW50RE9NRWxlbWVudCA9PT0gbnVsbCkge1xuICAgIHBhcmVudCA9IHBhcmVudC5nZXRQYXJlbnQoKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudERPTUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJlZmVyZW5jZURPTUVsZW1lbnQocmVmZXJlbmNlKSB7XG4gIGNvbnN0IHJlZmVyZW5jZURPTUVsZW1lbnQgPSByZWZlcmVuY2UgIT09IG51bGwgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2UuZ2V0RE9NRWxlbWVudCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiByZWZlcmVuY2VET01FbGVtZW50O1xufVxuIl19