'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VirtualDOMNode = require('../virtualDOMNode');

var VirtualDOMElement = function (_VirtualDOMNode) {
  _inherits(VirtualDOMElement, _VirtualDOMNode);

  function VirtualDOMElement(tagName, props) {
    _classCallCheck(this, VirtualDOMElement);

    var domElement = document.createElement(tagName);

    return _possibleConstructorReturn(this, (VirtualDOMElement.__proto__ || Object.getPrototypeOf(VirtualDOMElement)).call(this, props, domElement));
  }

  _createClass(VirtualDOMElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      _get(VirtualDOMElement.prototype.__proto__ || Object.getPrototypeOf(VirtualDOMElement.prototype), 'mount', this).call(this, parent, reference);

      var childParent = this,
          childReference = null,
          childContext = context;

      this.children.forEach(function (child) {
        child.mount(childParent, childReference, childContext);
      });

      this.applyProps();
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      var childContext = context;

      this.children.forEach(function (child) {
        child.unmount(childContext);
      });

      _get(VirtualDOMElement.prototype.__proto__ || Object.getPrototypeOf(VirtualDOMElement.prototype), 'unmount', this).call(this);
    }
  }, {
    key: 'getTagName',
    value: function getTagName() {
      var domElement = this.getDOMElement(),
          tagName = domElement.tagName;

      return tagName;
    }
  }, {
    key: 'spliceChildren',
    value: function spliceChildren(start, removedChildrenCount, addedChildren, context) {
      var childParent = this,
          childReference = null,
          childContext = context;

      addedChildren.forEach(function (addedChild) {
        addedChild.mount(childParent, childReference, childContext);
      });

      var args = [start, removedChildrenCount].concat(addedChildren),
          removedChildren = Array.prototype.splice.apply(this.children, args);

      removedChildren.forEach(function (removedChild) {
        removedChild.unmount(childContext);
      });
    }
  }, {
    key: 'addChild',
    value: function addChild(child, context) {
      var start = Infinity,
          removedChildrenCount = 0,
          addedChildren = [child];

      this.spliceChildren(start, removedChildrenCount, addedChildren, context);
    }
  }, {
    key: 'removeChild',
    value: function removeChild(child, context) {
      var index = this.children.indexOf(child);

      if (index > -1) {
        var start = index,
            removedChildrenCount = 1,
            addedChildren = [];

        this.spliceChildren(start, removedChildrenCount, addedChildren, context);
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
    key: 'applyProps',
    value: function applyProps() {
      var names = Object.keys(this.props);

      names.forEach(function (name) {
        var value = this.props[name];

        if (isHandlerName(name)) {
          var domElement = this.getDOMElement(),
              eventType = eventTypeFromName(name),
              handler = value; ///

          domElement.addEventListener(eventType, handler);
        } else if (name === 'ref') {
          var callback = value,
              ///
          _domElement = this.getDOMElement();

          callback(_domElement);
        } else {
          this.setAttribute(name, value);
        }
      }.bind(this));
    }
  }]);

  return VirtualDOMElement;
}(VirtualDOMNode);

module.exports = VirtualDOMElement;

function isHandlerName(name) {
  return name.match(/^on/);
}

function eventTypeFromName(name) {
  return name.substr(2).toLowerCase();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL2VsZW1lbnQuanMiXSwibmFtZXMiOlsiVmlydHVhbERPTU5vZGUiLCJyZXF1aXJlIiwiVmlydHVhbERPTUVsZW1lbnQiLCJ0YWdOYW1lIiwicHJvcHMiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicGFyZW50IiwicmVmZXJlbmNlIiwiY29udGV4dCIsImNoaWxkUGFyZW50IiwiY2hpbGRSZWZlcmVuY2UiLCJjaGlsZENvbnRleHQiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZCIsIm1vdW50IiwiYXBwbHlQcm9wcyIsInVubW91bnQiLCJnZXRET01FbGVtZW50Iiwic3RhcnQiLCJyZW1vdmVkQ2hpbGRyZW5Db3VudCIsImFkZGVkQ2hpbGRyZW4iLCJhZGRlZENoaWxkIiwiYXJncyIsImNvbmNhdCIsInJlbW92ZWRDaGlsZHJlbiIsIkFycmF5IiwicHJvdG90eXBlIiwic3BsaWNlIiwiYXBwbHkiLCJyZW1vdmVkQ2hpbGQiLCJJbmZpbml0eSIsInNwbGljZUNoaWxkcmVuIiwiaW5kZXgiLCJpbmRleE9mIiwibmFtZSIsInZhbHVlIiwia2V5cyIsIk9iamVjdCIsImtleSIsImJpbmQiLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ0b2dnbGUiLCJjb250YWlucyIsIm5hbWVzIiwiaXNIYW5kbGVyTmFtZSIsImV2ZW50VHlwZSIsImV2ZW50VHlwZUZyb21OYW1lIiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYWxsYmFjayIsIm1vZHVsZSIsImV4cG9ydHMiLCJtYXRjaCIsInN1YnN0ciIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUJDLFFBQVEsbUJBQVIsQ0FBdkI7O0lB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QUFQO0FBQ0QiLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVmlydHVhbERPTU5vZGUgPSByZXF1aXJlKCcuLi92aXJ0dWFsRE9NTm9kZScpO1xuXG5jbGFzcyBWaXJ0dWFsRE9NRWxlbWVudCBleHRlbmRzIFZpcnR1YWxET01Ob2RlIHtcbiAgY29uc3RydWN0b3IodGFnTmFtZSwgcHJvcHMpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgIHN1cGVyKHByb3BzLCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50LCByZWZlcmVuY2UpO1xuXG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFwcGx5UHJvcHMoKTtcbiAgfVxuXG4gIHVubW91bnQoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIGdldFRhZ05hbWUoKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICB0YWdOYW1lID0gZG9tRWxlbWVudC50YWdOYW1lO1xuXG4gICAgcmV0dXJuIHRhZ05hbWU7XG4gIH1cblxuICBzcGxpY2VDaGlsZHJlbihzdGFydCwgcmVtb3ZlZENoaWxkcmVuQ291bnQsIGFkZGVkQ2hpbGRyZW4sIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICBhZGRlZENoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oYWRkZWRDaGlsZCkge1xuICAgICAgYWRkZWRDaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhcmdzID0gW3N0YXJ0LCByZW1vdmVkQ2hpbGRyZW5Db3VudF0uY29uY2F0KGFkZGVkQ2hpbGRyZW4pLFxuICAgICAgICAgIHJlbW92ZWRDaGlsZHJlbiA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkodGhpcy5jaGlsZHJlbiwgYXJncyk7XG5cbiAgICByZW1vdmVkQ2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihyZW1vdmVkQ2hpbGQpIHtcbiAgICAgIHJlbW92ZWRDaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRDaGlsZChjaGlsZCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gSW5maW5pdHksXG4gICAgICAgICAgcmVtb3ZlZENoaWxkcmVuQ291bnQgPSAwLFxuICAgICAgICAgIGFkZGVkQ2hpbGRyZW4gPSBbY2hpbGRdO1xuXG4gICAgdGhpcy5zcGxpY2VDaGlsZHJlbihzdGFydCwgcmVtb3ZlZENoaWxkcmVuQ291bnQsIGFkZGVkQ2hpbGRyZW4sIGNvbnRleHQpO1xuICB9XG5cbiAgcmVtb3ZlQ2hpbGQoY2hpbGQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuY2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCxcbiAgICAgICAgICAgIHJlbW92ZWRDaGlsZHJlbkNvdW50ID0gMSxcbiAgICAgICAgICAgIGFkZGVkQ2hpbGRyZW4gPSBbXTtcblxuICAgICAgdGhpcy5zcGxpY2VDaGlsZHJlbihzdGFydCwgcmVtb3ZlZENoaWxkcmVuQ291bnQsIGFkZGVkQ2hpbGRyZW4sIGNvbnRleHQpO1xuICAgIH1cbiAgfVxuICBcbiAgc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKG5hbWUgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICBuYW1lID0gJ2NsYXNzJztcbiAgICB9XG4gICAgXG4gICAgaWYgKG5hbWUgPT09ICdodG1sRm9yJykge1xuICAgICAgbmFtZSA9ICdmb3InO1xuICAgIH1cblxuICAgIGlmIChmYWxzZSkge1xuXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRbbmFtZV1ba2V5XSA9IHZhbHVlW2tleV07XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IG5hbWU7IC8vL1xuXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBnZXRBdHRyaWJ1dGUobmFtZSkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICB9XG5cbiAgY2xlYXJBdHRyaWJ1dGUobmFtZSkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gIH1cblxuICBzZXRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gIH1cblxuICB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xuICB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIGNsZWFyQ2xhc3NlcygpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gJyc7XG4gIH1cblxuICBhcHBseVByb3BzKCkge1xuICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcyk7XG5cbiAgICBuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wcm9wc1tuYW1lXTtcblxuICAgICAgaWYgKGlzSGFuZGxlck5hbWUobmFtZSkpIHtcbiAgICAgICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgICAgICBldmVudFR5cGUgPSBldmVudFR5cGVGcm9tTmFtZShuYW1lKSxcbiAgICAgICAgICAgICAgaGFuZGxlciA9IHZhbHVlOyAgLy8vXG5cbiAgICAgICAgZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgIGhhbmRsZXIpO1xuICAgICAgfSBlbHNlIGlmIChuYW1lID09PSAncmVmJykge1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IHZhbHVlLCAvLy9cbiAgICAgICAgICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgICAgIGNhbGxiYWNrKGRvbUVsZW1lbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZpcnR1YWxET01FbGVtZW50O1xuXG5mdW5jdGlvbiBpc0hhbmRsZXJOYW1lKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUubWF0Y2goL15vbi8pO1xufVxuXG5mdW5jdGlvbiBldmVudFR5cGVGcm9tTmFtZShuYW1lKSB7XG4gIHJldHVybiBuYW1lLnN1YnN0cigyKS50b0xvd2VyQ2FzZSgpO1xufVxuIl19