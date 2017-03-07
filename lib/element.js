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
    key: 'getTagName',
    value: function getTagName() {
      var tagName = void 0;

      if (this.domElement !== null) {
        tagName = this.domElement.tagName;
      }

      return tagName;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJkb21FbGVtZW50IiwicHJvcHMiLCJwYXJlbnQiLCJ1bmRlZmluZWQiLCJjaGlsZHJlbiIsInRhZ05hbWUiLCJyZWZlcmVuY2UiLCJwYXJlbnRET01FbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwicmVmZXJlbmNlRE9NRWxlbWVudCIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsIm5hbWUiLCJ2YWx1ZSIsImtleXMiLCJPYmplY3QiLCJmb3JFYWNoIiwia2V5IiwiYmluZCIsInNldEF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInRvZ2dsZSIsImNvbnRhaW5zIiwiZXZlbnRUeXBlIiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbGVtZW50IiwibW9kdWxlIiwiZXhwb3J0cyIsImdldERPTUVsZW1lbnQiLCJnZXRQYXJlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztJQUVNQSxPO0FBQ0osbUJBQVlDLFVBQVosRUFBd0JDLEtBQXhCLEVBQStCO0FBQUE7O0FBQzdCLFNBQUtELFVBQUwsR0FBa0JBLFVBQWxCOztBQUVBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjs7QUFFQSxTQUFLQyxNQUFMLEdBQWNDLFNBQWQ7O0FBRUEsU0FBS0MsUUFBTCxHQUFnQkgsTUFBTUcsUUFBdEIsQ0FQNkIsQ0FPSTtBQUNsQzs7OztvQ0FFZTtBQUNkLGFBQU8sS0FBS0osVUFBWjtBQUNEOzs7aUNBRVk7QUFDWCxVQUFJSyxnQkFBSjs7QUFFQSxVQUFJLEtBQUtMLFVBQUwsS0FBb0IsSUFBeEIsRUFBOEI7QUFDNUJLLGtCQUFVLEtBQUtMLFVBQUwsQ0FBZ0JLLE9BQTFCO0FBQ0Q7O0FBRUQsYUFBT0EsT0FBUDtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtILE1BQVo7QUFDRDs7O2tD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RDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJsQyxPQUFqQjs7QUFFQSxTQUFTUSxnQkFBVCxDQUEwQkwsTUFBMUIsRUFBa0M7QUFDaEMsTUFBSUssbUJBQW1CTCxPQUFPZ0MsYUFBUCxFQUF2Qjs7QUFFQSxTQUFPM0IscUJBQXFCLElBQTVCLEVBQWtDO0FBQ2hDTCxhQUFTQSxPQUFPaUMsU0FBUCxFQUFUOztBQUVBNUIsdUJBQW1CTCxPQUFPZ0MsYUFBUCxFQUFuQjtBQUNEOztBQUVELFNBQU8zQixnQkFBUDtBQUNEOztBQUVELFNBQVNFLG1CQUFULENBQTZCSCxTQUE3QixFQUF3QztBQUN0QyxNQUFNRyxzQkFBc0JILGNBQWMsSUFBZCxHQUNFQSxVQUFVNEIsYUFBVixFQURGLEdBRUksSUFGaEM7O0FBSUEsU0FBT3pCLG1CQUFQO0FBQ0QiLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQsIHByb3BzKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcblxuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcblxuICAgIHRoaXMucGFyZW50ID0gdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuOyAgLy8vXG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRUYWdOYW1lKCkge1xuICAgIGxldCB0YWdOYW1lO1xuXG4gICAgaWYgKHRoaXMuZG9tRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgdGFnTmFtZSA9IHRoaXMuZG9tRWxlbWVudC50YWdOYW1lXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhZ05hbWU7XG4gIH07XG5cbiAgZ2V0UGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudDtcbiAgfVxuXG4gIGdldENoaWxkcmVuKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuO1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UpIHtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcblxuICAgIGlmICh0aGlzLmRvbUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHBhcmVudERPTUVsZW1lbnQocGFyZW50KS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCByZWZlcmVuY2VET01FbGVtZW50KHJlZmVyZW5jZSkpO1xuICAgIH1cbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuZG9tRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAobmFtZSA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICAgIG5hbWUgPSAnY2xhc3MnO1xuICAgIH1cbiAgICBpZiAobmFtZSA9PT0gJ2h0bWxGb3InKSB7XG4gICAgICBuYW1lID0gJ2Zvcic7XG4gICAgfVxuXG4gICAgaWYgKGZhbHNlKSB7XG5cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG5cbiAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFtuYW1lXVtrZXldID0gdmFsdWVba2V5XTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gbmFtZTsgLy8vXG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gIH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIH1cblxuICBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB9XG5cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7XG4gIH1cblxuICBoYXNDbGFzcyhjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICB9XG5cbiAgY2xlYXJDbGFzc2VzKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSAnJztcbiAgfVxuXG4gIHNldEV2ZW50SGFuZGxlcihldmVudFR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsICBoYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXSxcbiAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgICAgIH0sXG4gICAgICAgICAgZWxlbWVudCA9IG5ldyBFbGVtZW50KGRvbUVsZW1lbnQsIHByb3BzKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcblxuZnVuY3Rpb24gcGFyZW50RE9NRWxlbWVudChwYXJlbnQpIHtcbiAgbGV0IHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIHdoaWxlIChwYXJlbnRET01FbGVtZW50ID09PSBudWxsKSB7XG4gICAgcGFyZW50ID0gcGFyZW50LmdldFBhcmVudCgpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG4gIH1cblxuICByZXR1cm4gcGFyZW50RE9NRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gcmVmZXJlbmNlRE9NRWxlbWVudChyZWZlcmVuY2UpIHtcbiAgY29uc3QgcmVmZXJlbmNlRE9NRWxlbWVudCA9IHJlZmVyZW5jZSAhPT0gbnVsbCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZS5nZXRET01FbGVtZW50KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZURPTUVsZW1lbnQ7XG59XG4iXX0=