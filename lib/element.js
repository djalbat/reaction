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
    key: 'clearClasses',
    value: function clearClasses() {
      this.domElement.className = '';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJkb21FbGVtZW50IiwicHJvcHMiLCJwYXJlbnQiLCJ1bmRlZmluZWQiLCJjaGlsZHJlbiIsInJlZmVyZW5jZSIsInBhcmVudERPTUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJyZWZlcmVuY2VET01FbGVtZW50IiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwibmFtZSIsInZhbHVlIiwia2V5cyIsIk9iamVjdCIsImZvckVhY2giLCJrZXkiLCJiaW5kIiwic2V0QXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwidG9nZ2xlIiwiZXZlbnROYW1lIiwiaGFuZGxlciIsImVsZW1lbnQiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2V0RE9NRWxlbWVudCIsImdldFBhcmVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0lBRU1BLE87QUFDSixtQkFBWUMsVUFBWixFQUF3QkMsS0FBeEIsRUFBK0I7QUFBQTs7QUFDN0IsU0FBS0QsVUFBTCxHQUFrQkEsVUFBbEI7O0FBRUEsU0FBS0MsS0FBTCxHQUFhQSxLQUFiOztBQUVBLFNBQUtDLE1BQUwsR0FBY0MsU0FBZDs7QUFFQSxTQUFLQyxRQUFMLEdBQWdCSCxNQUFNRyxRQUF0QixDQVA2QixDQU9JO0FBQ2xDOzs7O29DQUVlO0FBQ2QsYUFBTyxLQUFLSixVQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0UsTUFBWjtBQUNEOzs7a0NBRWE7QUFDWixhQUFPLEtBQUtFLFFBQVo7QUFDRDs7OzBCQUVLRixNLEVBQVFHLFMsRUFBVztBQUN2QixXQUFLSCxNQUFMLEdBQWNBLE1BQWQ7O0FBRUEsVUFBSSxLQUFLRixVQUFMLEtBQW9CLElBQXhCLEVBQThCO0FBQzVCTSx5QkFBaUJKLE1BQWpCLEVBQXlCSyxZQUF6QixDQUFzQyxLQUFLUCxV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d0M7QUFDdEMsTUFBTUcsc0JBQXNCSCxjQUFjLElBQWQsR0FDRUEsVUFBVTBCLGFBQVYsRUFERixHQUVJLElBRmhDOztBQUlBLFNBQU92QixtQkFBUDtBQUNEIiwiZmlsZSI6ImVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50LCBwcm9wcykge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG5cbiAgICB0aGlzLnBhcmVudCA9IHVuZGVmaW5lZDtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjsgIC8vL1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0UGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudDtcbiAgfVxuXG4gIGdldENoaWxkcmVuKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuO1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UpIHtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcblxuICAgIGlmICh0aGlzLmRvbUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHBhcmVudERPTUVsZW1lbnQocGFyZW50KS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCByZWZlcmVuY2VET01FbGVtZW50KHJlZmVyZW5jZSkpO1xuICAgIH1cbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuZG9tRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAobmFtZSA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICAgIG5hbWUgPSAnY2xhc3MnO1xuICAgIH1cbiAgICBpZiAobmFtZSA9PT0gJ2h0bWxGb3InKSB7XG4gICAgICBuYW1lID0gJ2Zvcic7XG4gICAgfVxuXG4gICAgaWYgKGZhbHNlKSB7XG5cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG5cbiAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFtuYW1lXVtrZXldID0gdmFsdWVba2V5XTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gbmFtZTsgLy8vXG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gIH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIH1cblxuICBjbGVhckNsYXNzZXMoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9ICcnO1xuICB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gIH1cblxuICB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xuICB9XG5cbiAgc2V0SGFuZGxlcihldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnRbZXZlbnROYW1lXSA9IGhhbmRsZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW10sXG4gICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgICAgICB9LFxuICAgICAgICAgIGVsZW1lbnQgPSBuZXcgRWxlbWVudChkb21FbGVtZW50LCBwcm9wcyk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIHBhcmVudERPTUVsZW1lbnQocGFyZW50KSB7XG4gIGxldCBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcblxuICB3aGlsZSAocGFyZW50RE9NRWxlbWVudCA9PT0gbnVsbCkge1xuICAgIHBhcmVudCA9IHBhcmVudC5nZXRQYXJlbnQoKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudERPTUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJlZmVyZW5jZURPTUVsZW1lbnQocmVmZXJlbmNlKSB7XG4gIGNvbnN0IHJlZmVyZW5jZURPTUVsZW1lbnQgPSByZWZlcmVuY2UgIT09IG51bGwgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2UuZ2V0RE9NRWxlbWVudCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiByZWZlcmVuY2VET01FbGVtZW50O1xufVxuIl19