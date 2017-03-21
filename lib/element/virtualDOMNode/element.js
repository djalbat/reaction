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

      if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
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
    key: 'addAttribute',
    value: function addAttribute(name, value) {
      this.setAttribute(name, value);
    }
  }, {
    key: 'removeAttribute',
    value: function removeAttribute(name) {
      this.clearAttribute(name);
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

        if (false) {} else if (isHandlerName(name)) {
          this.setHandler(name, value);
        } else if (isAttributeName(name)) {
          this.setAttribute(name, value);
        } else if (name === 'ref') {
          var callback = value; ///

          callback(this.domElement);
        }
      }.bind(this));
    }
  }, {
    key: 'setHandler',
    value: function setHandler(name, value) {
      var eventType = name.substr(2).toLowerCase(),
          ///
      handler = value; ///

      this.domElement.addEventListener(eventType, handler);
    }
  }]);

  return VirtualDOMElement;
}(VirtualDOMNode);

module.exports = VirtualDOMElement;

function isHandlerName(name) {
  return name.match(/^on/);
}

function isAttributeName(name) {
  return attributeNames.includes(name);
}

var attributeNames = ['accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency', 'alt', 'async', 'autoComplete', 'autoFocus', 'autoPlay', 'capture', 'cellPadding', 'cellSpacing', 'challenge', 'charSet', 'checked', 'cite', 'classID', 'className', 'colSpan', 'cols', 'content', 'contentEditable', 'contextMenu', 'controls', 'coords', 'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download', 'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang', 'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType', 'kind', 'label', 'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted', 'name', 'noValidate', 'nonce', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'profile', 'radioGroup', 'readOnly', 'rel', 'required', 'reversed', 'role', 'rowSpan', 'rows', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start', 'step', 'style', 'summary', 'tabIndex', 'target', 'title', 'type', 'useMap', 'value', 'width', 'wmode', 'wrap'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL2VsZW1lbnQuanMiXSwibmFtZXMiOlsiVmlydHVhbERPTU5vZGUiLCJyZXF1aXJlIiwiVmlydHVhbERPTUVsZW1lbnQiLCJ0YWdOYW1lIiwicHJvcHMiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicGFyZW50IiwicmVmZXJlbmNlIiwiY29udGV4dCIsImNoaWxkUGFyZW50IiwiY2hpbGRSZWZlcmVuY2UiLCJjaGlsZENvbnRleHQiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZCIsIm1vdW50IiwiYXBwbHlQcm9wcyIsInVubW91bnQiLCJnZXRET01FbGVtZW50Iiwic3RhcnQiLCJyZW1vdmVkQ2hpbGRyZW5Db3VudCIsImFkZGVkQ2hpbGRyZW4iLCJhZGRlZENoaWxkIiwiYXJncyIsImNvbmNhdCIsInJlbW92ZWRDaGlsZHJlbiIsIkFycmF5IiwicHJvdG90eXBlIiwic3BsaWNlIiwiYXBwbHkiLCJyZW1vdmVkQ2hpbGQiLCJJbmZpbml0eSIsInNwbGljZUNoaWxkcmVuIiwiaW5kZXgiLCJpbmRleE9mIiwibmFtZSIsInZhbHVlIiwia2V5cyIsIk9iamVjdCIsImtleSIsImJpbmQiLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjbGVhckF0dHJpYnV0ZSIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInRvZ2dsZSIsImNvbnRhaW5zIiwibmFtZXMiLCJpc0hhbmRsZXJOYW1lIiwic2V0SGFuZGxlciIsImlzQXR0cmlidXRlTmFtZSIsImNhbGxiYWNrIiwiZXZlbnRUeXBlIiwic3Vic3RyIiwidG9Mb3dlckNhc2UiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vZHVsZSIsImV4cG9ydHMiLCJtYXRjaCIsImF0dHJpYnV0ZU5hbWVzIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiJB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TUFQcUIsRUFPYixJQVBhLEVBT1AsV0FQTyxFQU9NLFdBUE4sRUFPbUIsSUFQbkIsRUFRckIsV0FScUIsRUFRUixTQVJRLEVBUUcsTUFSSCxFQVNyQixPQVRxQixFQVNaLE1BVFksRUFTSixNQVRJLEVBU0ksTUFUSixFQVNZLEtBVFosRUFVckIsVUFWcUIsRUFVVCxjQVZTLEVBVU8sYUFWUCxFQVVzQixLQVZ0QixFQVU2QixXQVY3QixFQVUwQyxPQVYxQyxFQVVtRCxZQVZuRCxFQVVpRSxRQVZqRSxFQVUyRSxLQVYzRSxFQVVrRixXQVZsRixFQVUrRixVQVYvRixFQVUyRyxPQVYzRyxFQVdyQixNQVhxQixFQVdiLFlBWGEsRUFXQyxPQVhELEVBWXJCLE1BWnFCLEVBWWIsU0FaYSxFQWFyQixTQWJxQixFQWFWLGFBYlUsRUFhSyxRQWJMLEVBYWUsU0FiZixFQWEwQixTQWIxQixFQWNyQixZQWRxQixFQWNQLFVBZE8sRUFjSyxLQWRMLEVBY1ksVUFkWixFQWN3QixVQWR4QixFQWNvQyxNQWRwQyxFQWM0QyxTQWQ1QyxFQWN1RCxNQWR2RCxFQWVyQixTQWZxQixFQWVWLE9BZlUsRUFlRCxRQWZDLEVBZVMsV0FmVCxFQWVzQixVQWZ0QixFQWVrQyxVQWZsQyxFQWU4QyxPQWY5QyxFQWV1RCxNQWZ2RCxFQWUrRCxPQWYvRCxFQWV3RSxNQWZ4RSxFQWVnRixZQWZoRixFQWU4RixLQWY5RixFQWVxRyxRQWZyRyxFQWUrRyxTQWYvRyxFQWUwSCxRQWYxSCxFQWVvSSxPQWZwSSxFQWU2SSxNQWY3SSxFQWVxSixPQWZySixFQWU4SixTQWY5SixFQWdCckIsVUFoQnFCLEVBZ0JULFFBaEJTLEVBZ0JDLE9BaEJELEVBZ0JVLE1BaEJWLEVBaUJyQixRQWpCcUIsRUFrQnJCLE9BbEJxQixFQW1CckIsT0FuQnFCLEVBb0JyQixPQXBCcUIsRUFxQnJCLE1BckJxQixDQUF2QiIsImZpbGUiOiJlbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBWaXJ0dWFsRE9NTm9kZSA9IHJlcXVpcmUoJy4uL3ZpcnR1YWxET01Ob2RlJyk7XG5cbmNsYXNzIFZpcnR1YWxET01FbGVtZW50IGV4dGVuZHMgVmlydHVhbERPTU5vZGUge1xuICBjb25zdHJ1Y3Rvcih0YWdOYW1lLCBwcm9wcykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgc3VwZXIocHJvcHMsIGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICBzdXBlci5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSk7XG5cbiAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXBwbHlQcm9wcygpO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgZ2V0VGFnTmFtZSgpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgdGFnTmFtZSA9IGRvbUVsZW1lbnQudGFnTmFtZTsgXG5cbiAgICByZXR1cm4gdGFnTmFtZTtcbiAgfVxuXG4gIHNwbGljZUNoaWxkcmVuKHN0YXJ0LCByZW1vdmVkQ2hpbGRyZW5Db3VudCwgYWRkZWRDaGlsZHJlbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gY29udGV4dDtcblxuICAgIGFkZGVkQ2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihhZGRlZENoaWxkKSB7XG4gICAgICBhZGRlZENoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFyZ3MgPSBbc3RhcnQsIHJlbW92ZWRDaGlsZHJlbkNvdW50XS5jb25jYXQoYWRkZWRDaGlsZHJlbiksXG4gICAgICAgICAgcmVtb3ZlZENoaWxkcmVuID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseSh0aGlzLmNoaWxkcmVuLCBhcmdzKTtcblxuICAgIHJlbW92ZWRDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKHJlbW92ZWRDaGlsZCkge1xuICAgICAgcmVtb3ZlZENoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZENoaWxkKGNoaWxkLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhcnQgPSBJbmZpbml0eSxcbiAgICAgICAgICByZW1vdmVkQ2hpbGRyZW5Db3VudCA9IDAsXG4gICAgICAgICAgYWRkZWRDaGlsZHJlbiA9IFtjaGlsZF07XG5cbiAgICB0aGlzLnNwbGljZUNoaWxkcmVuKHN0YXJ0LCByZW1vdmVkQ2hpbGRyZW5Db3VudCwgYWRkZWRDaGlsZHJlbiwgY29udGV4dCk7XG4gIH1cblxuICByZW1vdmVDaGlsZChjaGlsZCwgY29udGV4dCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jaGlsZHJlbi5pbmRleE9mKGNoaWxkKTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LFxuICAgICAgICAgICAgcmVtb3ZlZENoaWxkcmVuQ291bnQgPSAxLFxuICAgICAgICAgICAgYWRkZWRDaGlsZHJlbiA9IFtdO1xuXG4gICAgICB0aGlzLnNwbGljZUNoaWxkcmVuKHN0YXJ0LCByZW1vdmVkQ2hpbGRyZW5Db3VudCwgYWRkZWRDaGlsZHJlbiwgY29udGV4dCk7XG4gICAgfVxuICB9XG4gIFxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAobmFtZSA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICAgIG5hbWUgPSAnY2xhc3MnO1xuICAgIH1cbiAgICBcbiAgICBpZiAobmFtZSA9PT0gJ2h0bWxGb3InKSB7XG4gICAgICBuYW1lID0gJ2Zvcic7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG5cbiAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFtuYW1lXVtrZXldID0gdmFsdWVba2V5XTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gbmFtZTsgLy8vXG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgY2xlYXJBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuICBcbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuICBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSAnJzsgfVxuXG4gIGFwcGx5UHJvcHMoKSB7XG4gICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzKTtcblxuICAgIG5hbWVzLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnByb3BzW25hbWVdO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcblxuICAgICAgfSBlbHNlIGlmIChpc0hhbmRsZXJOYW1lKG5hbWUpKSB7XG4gICAgICAgIHRoaXMuc2V0SGFuZGxlcihuYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGlzQXR0cmlidXRlTmFtZShuYW1lKSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdyZWYnKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gdmFsdWU7IC8vL1xuICAgICAgICBcbiAgICAgICAgY2FsbGJhY2sodGhpcy5kb21FbGVtZW50KTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgc2V0SGFuZGxlcihuYW1lLCB2YWx1ZSkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IG5hbWUuc3Vic3RyKDIpLnRvTG93ZXJDYXNlKCksIC8vL1xuICAgICAgICAgIGhhbmRsZXIgPSB2YWx1ZTsgIC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCAgaGFuZGxlcik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWaXJ0dWFsRE9NRWxlbWVudDtcblxuXG5mdW5jdGlvbiBpc0hhbmRsZXJOYW1lKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUubWF0Y2goL15vbi8pO1xufVxuXG5mdW5jdGlvbiBpc0F0dHJpYnV0ZU5hbWUobmFtZSkge1xuICByZXR1cm4gYXR0cmlidXRlTmFtZXMuaW5jbHVkZXMobmFtZSk7XG59XG5cbmNvbnN0IGF0dHJpYnV0ZU5hbWVzID0gW1xuICAnYWNjZXB0JywgJ2FjY2VwdENoYXJzZXQnLCAnYWNjZXNzS2V5JywgJ2FjdGlvbicsICdhbGxvd0Z1bGxTY3JlZW4nLCAnYWxsb3dUcmFuc3BhcmVuY3knLCAnYWx0JywgJ2FzeW5jJywgJ2F1dG9Db21wbGV0ZScsICdhdXRvRm9jdXMnLCAnYXV0b1BsYXknLFxuICAnY2FwdHVyZScsICdjZWxsUGFkZGluZycsICdjZWxsU3BhY2luZycsICdjaGFsbGVuZ2UnLCAnY2hhclNldCcsICdjaGVja2VkJywgJ2NpdGUnLCAnY2xhc3NJRCcsICdjbGFzc05hbWUnLCAnY29sU3BhbicsICdjb2xzJywgJ2NvbnRlbnQnLCAnY29udGVudEVkaXRhYmxlJywgJ2NvbnRleHRNZW51JywgJ2NvbnRyb2xzJywgJ2Nvb3JkcycsICdjcm9zc09yaWdpbicsXG4gICdkYXRhJywgJ2RhdGVUaW1lJywgJ2RlZmF1bHQnLCAnZGVmZXInLCAnZGlyJywgJ2Rpc2FibGVkJywgJ2Rvd25sb2FkJywgJ2RyYWdnYWJsZScsXG4gICdlbmNUeXBlJyxcbiAgJ2Zvcm0nLCAnZm9ybUFjdGlvbicsICdmb3JtRW5jVHlwZScsICdmb3JtTWV0aG9kJywgJ2Zvcm1Ob1ZhbGlkYXRlJywgJ2Zvcm1UYXJnZXQnLCAnZnJhbWVCb3JkZXInLFxuICAnaGVhZGVycycsICdoZWlnaHQnLCAnaGlkZGVuJywgJ2hpZ2gnLCAnaHJlZicsICdocmVmTGFuZycsICdodG1sRm9yJywgJ2h0dHBFcXVpdicsXG4gICdpY29uJywgJ2lkJywgJ2lucHV0TW9kZScsICdpbnRlZ3JpdHknLCAnaXMnLFxuICAna2V5UGFyYW1zJywgJ2tleVR5cGUnLCAna2luZCcsXG4gICdsYWJlbCcsICdsYW5nJywgJ2xpc3QnLCAnbG9vcCcsICdsb3cnLFxuICAnbWFuaWZlc3QnLCAnbWFyZ2luSGVpZ2h0JywgJ21hcmdpbldpZHRoJywgJ21heCcsICdtYXhMZW5ndGgnLCAnbWVkaWEnLCAnbWVkaWFHcm91cCcsICdtZXRob2QnLCAnbWluJywgJ21pbkxlbmd0aCcsICdtdWx0aXBsZScsICdtdXRlZCcsXG4gICduYW1lJywgJ25vVmFsaWRhdGUnLCAnbm9uY2UnLFxuICAnb3BlbicsICdvcHRpbXVtJyxcbiAgJ3BhdHRlcm4nLCAncGxhY2Vob2xkZXInLCAncG9zdGVyJywgJ3ByZWxvYWQnLCAncHJvZmlsZScsXG4gICdyYWRpb0dyb3VwJywgJ3JlYWRPbmx5JywgJ3JlbCcsICdyZXF1aXJlZCcsICdyZXZlcnNlZCcsICdyb2xlJywgJ3Jvd1NwYW4nLCAncm93cycsXG4gICdzYW5kYm94JywgJ3Njb3BlJywgJ3Njb3BlZCcsICdzY3JvbGxpbmcnLCAnc2VhbWxlc3MnLCAnc2VsZWN0ZWQnLCAnc2hhcGUnLCAnc2l6ZScsICdzaXplcycsICdzcGFuJywgJ3NwZWxsQ2hlY2snLCAnc3JjJywgJ3NyY0RvYycsICdzcmNMYW5nJywgJ3NyY1NldCcsICdzdGFydCcsICdzdGVwJywgJ3N0eWxlJywgJ3N1bW1hcnknLFxuICAndGFiSW5kZXgnLCAndGFyZ2V0JywgJ3RpdGxlJywgJ3R5cGUnLFxuICAndXNlTWFwJyxcbiAgJ3ZhbHVlJyxcbiAgJ3dpZHRoJyxcbiAgJ3dtb2RlJyxcbiAgJ3dyYXAnXG5dO1xuIl19