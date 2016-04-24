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
    this.sibling = undefined;

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
    key: 'getSibling',
    value: function getSibling() {
      return this.sibling;
    }
  }, {
    key: 'getChildren',
    value: function getChildren() {
      return this.children;
    }
  }, {
    key: 'mount',
    value: function mount(parent, sibling) {
      this.parent = parent;
      this.sibling = sibling;

      _mount(this, parent, sibling);
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      this.remove();
    }
  }, {
    key: 'remove',
    value: function remove() {
      _remove(this);
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
  }]);

  return Element;
}();

module.exports = Element;

function _remove(element) {
  element.domElement.parentElement.removeChild(element.domElement);
}

function _mount(element, parent, sibling) {
  var lastSibling = sibling;

  if (!appendAfterSiblings(element, lastSibling) && !prependToParent(element, parent)) {
    sibling = parent.getSibling();
    parent = parent.getParent();

    _mount(element, parent, sibling);
  }
}

function prependToParent(element, parent) {
  if (!parent) {
    return false;
  }

  var parentDOMElement = parent.getDOMElement();

  if (parentDOMElement !== null) {
    prependTo(element.domElement, parentDOMElement);

    return true;
  } else {
    return false;
  }
}

function appendAfterSiblings(element, lastSibling) {
  if (!lastSibling) {
    return false;
  }

  var sibling = lastSibling;

  while (sibling !== null) {
    var siblingDOMElement = sibling.getDOMElement();

    if (siblingDOMElement !== null) {
      appendAfter(element.domElement, siblingDOMElement);

      return true;
    } else {
      var siblingChildren = sibling.getChildren();

      lastSibling = last(siblingChildren);

      if (appendAfterSiblings(element, lastSibling)) {
        return true;
      }
    }

    sibling = sibling.getSibling();
  }

  return false;
}

function prependTo(domElement, existingDOMElement) {
  existingDOMElement.insertBefore(domElement, existingDOMElement.firstChild);
}

function appendAfter(domElement, existingDOMElement) {
  existingDOMElement.parentElement.insertBefore(domElement, existingDOMElement.nextSibling);
}

function last(array) {
  return array[array.length - 1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9lbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztJQUVNO0FBQ0osV0FESSxPQUNKLENBQVksVUFBWixFQUF3QixLQUF4QixFQUErQjswQkFEM0IsU0FDMkI7O0FBQzdCLFNBQUssVUFBTCxHQUFrQixVQUFsQixDQUQ2QjtBQUU3QixTQUFLLEtBQUwsR0FBYSxLQUFiLENBRjZCOztBQUk3QixTQUFLLE1BQUwsR0FBYyxTQUFkLENBSjZCO0FBSzdCLFNBQUssT0FBTCxHQUFlLFNBQWYsQ0FMNkI7O0FBTzdCLFNBQUssUUFBTCxHQUFnQixNQUFNLFFBQU47QUFQYSxHQUEvQjs7ZUFESTs7b0NBV1k7QUFDZCxhQUFPLEtBQUssVUFBTCxDQURPOzs7O2dDQUlKO0FBQ1YsYUFBTyxLQUFLLE1BQUwsQ0FERzs7OztpQ0FJQztBQUNYLGFBQU8sS0FBSyxPQUFMLENBREk7Ozs7a0NBSUM7QUFDWixhQUFPLEtBQUssUUFBTCxDQURLOzs7OzBCQUlSLFFBQVEsU0FBUztBQUNyQixXQUFLLE1BQUwsR0FBYyxNQUFkLENBRHFCO0FBRXJCLFdBQUssT0FBTCxHQUFlLE9BQWYsQ0FGcUI7O0FBSXJCLGFBQU0sSUFBTixFQUFZLE1BQVosRUFBb0IsT0FBcEIsRUFKcUI7Ozs7OEJBT2I7QUFDUixXQUFLLE1BQUwsR0FEUTs7Ozs2QkFJRDtBQUNQLGNBQU8sSUFBUCxFQURPOzs7O2lDQUlJLGVBQWUsZ0JBQWdCO0FBQzFDLFVBQUksa0JBQWtCLFdBQWxCLEVBQStCO0FBQUUsd0JBQWdCLE9BQWhCLENBQUY7T0FBbkM7QUFDQSxVQUFJLGtCQUFrQixTQUFsQixFQUE2QjtBQUFFLHdCQUFnQixLQUFoQixDQUFGO09BQWpDOztBQUVBLFVBQUksS0FBSixFQUFZLEVBQVosTUFFTyxJQUFJLE9BQU8sY0FBUCxLQUEwQixRQUExQixFQUFvQztBQUM3QyxhQUFLLFVBQUwsQ0FBZ0IsWUFBaEIsQ0FBNkIsYUFBN0IsRUFBNEMsY0FB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MEQsbUJBQW1CLFdBQW5CLENBQTFELENBRG1EO0NBQXJEOztBQUlBLFNBQVMsSUFBVCxDQUFjLEtBQWQsRUFBcUI7QUFBRSxTQUFPLE1BQU0sTUFBTSxNQUFOLEdBQWUsQ0FBZixDQUFiLENBQUY7Q0FBckIiLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQsIHByb3BzKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG5cbiAgICB0aGlzLnBhcmVudCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNpYmxpbmcgPSB1bmRlZmluZWQ7XG4gICAgXG4gICAgdGhpcy5jaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuOyAgLy8vXG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50O1xuICB9XG5cbiAgZ2V0U2libGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zaWJsaW5nO1xuICB9XG5cbiAgZ2V0Q2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW47XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHNpYmxpbmcpIHtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLnNpYmxpbmcgPSBzaWJsaW5nO1xuXG4gICAgbW91bnQodGhpcywgcGFyZW50LCBzaWJsaW5nKTtcbiAgfVxuICBcbiAgdW5tb3VudCgpIHtcbiAgICB0aGlzLnJlbW92ZSgpO1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHJlbW92ZSh0aGlzKTtcbiAgfVxuXG4gIHNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSkge1xuICAgIGlmIChhdHRyaWJ1dGVOYW1lID09PSAnY2xhc3NOYW1lJykgeyBhdHRyaWJ1dGVOYW1lID0gJ2NsYXNzJzsgfVxuICAgIGlmIChhdHRyaWJ1dGVOYW1lID09PSAnaHRtbEZvcicpIHsgYXR0cmlidXRlTmFtZSA9ICdmb3InOyB9XG5cbiAgICBpZiAoZmFsc2UgKSB7XG4gICAgICBcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBhdHRyaWJ1dGVWYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGF0dHJpYnV0ZVZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhdHRyaWJ1dGVWYWx1ZSk7XG5cbiAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZVZhbHVlW2tleV07XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50W2F0dHJpYnV0ZU5hbWVdW2tleV0gPSB2YWx1ZTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vL1xuICAgIH1cbiAgfVxuICBcbiAgc2V0SGFuZGxlcihldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnRbZXZlbnROYW1lXSA9IGhhbmRsZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuXG5mdW5jdGlvbiByZW1vdmUoZWxlbWVudCkge1xuICBlbGVtZW50LmRvbUVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmRvbUVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBtb3VudChlbGVtZW50LCBwYXJlbnQsIHNpYmxpbmcpIHtcbiAgdmFyIGxhc3RTaWJsaW5nID0gc2libGluZztcblxuICBpZiAoIWFwcGVuZEFmdGVyU2libGluZ3MoZWxlbWVudCwgbGFzdFNpYmxpbmcpICYmICFwcmVwZW5kVG9QYXJlbnQoZWxlbWVudCwgcGFyZW50KSkge1xuICAgIHNpYmxpbmcgPSBwYXJlbnQuZ2V0U2libGluZygpO1xuICAgIHBhcmVudCA9IHBhcmVudC5nZXRQYXJlbnQoKTtcblxuICAgIG1vdW50KGVsZW1lbnQsIHBhcmVudCwgc2libGluZyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlcGVuZFRvUGFyZW50KGVsZW1lbnQsIHBhcmVudCkge1xuICBpZiAoIXBhcmVudCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcblxuICBpZiAocGFyZW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgIHByZXBlbmRUbyhlbGVtZW50LmRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEFmdGVyU2libGluZ3MoZWxlbWVudCwgbGFzdFNpYmxpbmcpIHtcbiAgaWYgKCFsYXN0U2libGluZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBzaWJsaW5nID0gbGFzdFNpYmxpbmc7XG5cbiAgd2hpbGUgKHNpYmxpbmcgIT09IG51bGwpIHtcbiAgICB2YXIgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nLmdldERPTUVsZW1lbnQoKTtcblxuICAgIGlmIChzaWJsaW5nRE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgYXBwZW5kQWZ0ZXIoZWxlbWVudC5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc2libGluZ0NoaWxkcmVuID0gc2libGluZy5nZXRDaGlsZHJlbigpO1xuXG4gICAgICBsYXN0U2libGluZyA9IGxhc3Qoc2libGluZ0NoaWxkcmVuKTtcblxuICAgICAgaWYgKGFwcGVuZEFmdGVyU2libGluZ3MoZWxlbWVudCwgbGFzdFNpYmxpbmcpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNpYmxpbmcgPSBzaWJsaW5nLmdldFNpYmxpbmcoKTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcHJlcGVuZFRvKGRvbUVsZW1lbnQsIGV4aXN0aW5nRE9NRWxlbWVudCkge1xuICBleGlzdGluZ0RPTUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIGV4aXN0aW5nRE9NRWxlbWVudC5maXJzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kQWZ0ZXIoZG9tRWxlbWVudCwgZXhpc3RpbmdET01FbGVtZW50KSB7XG4gIGV4aXN0aW5nRE9NRWxlbWVudC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBleGlzdGluZ0RPTUVsZW1lbnQubmV4dFNpYmxpbmcpO1xufVxuXG5mdW5jdGlvbiBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuIl19