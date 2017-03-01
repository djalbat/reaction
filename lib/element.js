'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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
    key: 'clearClasses',
    value: function clearClasses() {
      this.domElement.className = '';
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
//# sourceMappingURL=data:application/json;base64,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T0FBN0IsQ0FENkI7Ozs7bUNBSVQsWUFBWTtBQUNoQyxVQUFNLFdBQVcsRUFBWDtVQUNBLFFBQVE7QUFDTixrQkFBVSxRQUFWO09BREY7VUFHQSxVQUFVLElBQUksT0FBSixDQUFZLFVBQVosRUFBd0IsS0FBeEIsQ0FBVixDQUwwQjs7QUFPaEMsYUFBTyxPQUFQLENBUGdDOzs7O1NBaEc5Qjs7O0FBMkdOLE9BQU8sT0FBUCxHQUFpQixPQUFqQjs7QUFFQSxTQUFTLGdCQUFULENBQTBCLE1BQTFCLEVBQWtDO0FBQ2hDLE1BQUksbUJBQW1CLE9BQU8sYUFBUCxFQUFuQixDQUQ0Qjs7QUFHaEMsU0FBTyxxQkFBcUIsSUFBckIsRUFBMkI7QUFDaEMsYUFBUyxPQUFPLFNBQVAsRUFBVCxDQURnQzs7QUFHaEMsdUJBQW1CLE9BQU8sYUFBUCxFQUFuQixDQUhnQztHQUFsQzs7QUFNQSxTQUFPLGdCQUFQLENBVGdDO0NBQWxDOztBQVlBLFNBQVMsbUJBQVQsQ0FBNkIsU0FBN0IsRUFBd0M7QUFDdEMsTUFBTSxzQkFBc0IsY0FBYyxJQUFkLEdBQ0UsVUFBVSxhQUFWLEVBREYsR0FFSSxJQUZKLENBRFU7O0FBS3RDLFNBQU8sbUJBQVAsQ0FMc0M7Q0FBeEMiLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQsIHByb3BzKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcblxuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcblxuICAgIHRoaXMucGFyZW50ID0gdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuOyAgLy8vXG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50O1xuICB9XG5cbiAgZ2V0Q2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW47XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSkge1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuXG4gICAgaWYgKHRoaXMuZG9tRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgcGFyZW50RE9NRWxlbWVudChwYXJlbnQpLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHJlZmVyZW5jZURPTUVsZW1lbnQocmVmZXJlbmNlKSk7XG4gICAgfVxuICB9XG5cbiAgdW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5kb21FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICAgIGlmIChuYW1lID09PSAnY2xhc3NOYW1lJykge1xuICAgICAgbmFtZSA9ICdjbGFzcyc7XG4gICAgfVxuICAgIGlmIChuYW1lID09PSAnaHRtbEZvcicpIHtcbiAgICAgIG5hbWUgPSAnZm9yJztcbiAgICB9XG5cbiAgICBpZiAoZmFsc2UpIHtcblxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblxuICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50W25hbWVdW2tleV0gPSB2YWx1ZVtrZXldO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSBuYW1lOyAvLy9cblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgfVxuXG4gIGNsZWFyQXR0cmlidXRlKG5hbWUpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICB9XG5cbiAgc2V0Q2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgfVxuXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICB9XG5cbiAgdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIGNsZWFyQ2xhc3NlcygpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gJyc7XG4gIH1cblxuICBzZXRIYW5kbGVyKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgIHRoaXMuZG9tRWxlbWVudFtldmVudE5hbWVdID0gaGFuZGxlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXSxcbiAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgICAgIH0sXG4gICAgICAgICAgZWxlbWVudCA9IG5ldyBFbGVtZW50KGRvbUVsZW1lbnQsIHByb3BzKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcblxuZnVuY3Rpb24gcGFyZW50RE9NRWxlbWVudChwYXJlbnQpIHtcbiAgbGV0IHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIHdoaWxlIChwYXJlbnRET01FbGVtZW50ID09PSBudWxsKSB7XG4gICAgcGFyZW50ID0gcGFyZW50LmdldFBhcmVudCgpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG4gIH1cblxuICByZXR1cm4gcGFyZW50RE9NRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gcmVmZXJlbmNlRE9NRWxlbWVudChyZWZlcmVuY2UpIHtcbiAgY29uc3QgcmVmZXJlbmNlRE9NRWxlbWVudCA9IHJlZmVyZW5jZSAhPT0gbnVsbCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZS5nZXRET01FbGVtZW50KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZURPTUVsZW1lbnQ7XG59XG4iXX0=