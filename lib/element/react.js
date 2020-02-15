'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    arrayUtilities = require('../utilities/array'),
    reactElementMixins = require('../mixins/reactElement');

var guarantee = arrayUtilities.guarantee,
    remaining = arrayUtilities.remaining;

var ReactElement = function (_Element) {
  _inherits(ReactElement, _Element);

  function ReactElement(props) {
    _classCallCheck(this, ReactElement);

    var _this = _possibleConstructorReturn(this, (ReactElement.__proto__ || Object.getPrototypeOf(ReactElement)).call(this, props));

    _this.state = undefined; ///

    _this.context = undefined; ///
    return _this;
  }

  _createClass(ReactElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      var _this2 = this;

      this.context = context;

      var childContext = this.getChildContext(context),
          children = guarantee(this.render()),
          domElement = _get(ReactElement.prototype.__proto__ || Object.getPrototypeOf(ReactElement.prototype), 'mount', this).call(this, parent, children);

      children.forEach(function (child) {
        var childParent = _this2,
            childReference = reference;

        child.mount(childParent, childReference, childContext);
      });

      this.componentDidMount(domElement);

      return domElement;
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      this.context = context;

      this.componentWillUnmount();

      var childContext = this.getChildContext(context),
          children = this.getChildren();

      children.forEach(function (child) {
        return child.unmount(childContext);
      });

      _get(ReactElement.prototype.__proto__ || Object.getPrototypeOf(ReactElement.prototype), 'unmount', this).call(this);
    }
  }, {
    key: 'remount',
    value: function remount(update) {
      var childParent = this,
          childReference = this.getChildReference(),
          childContext = this.getChildContext(this.context);

      this.children.forEach(function (child) {
        return child.unmount(childContext);
      });

      this.children = guarantee(this.render(update));

      this.children.forEach(function (child) {
        return child.mount(childParent, childReference, childContext);
      });
    }
  }, {
    key: 'getDOMElement',
    value: function getDOMElement() {
      return null;
    }
  }, {
    key: 'getState',
    value: function getState() {
      return this.state;
    }
  }, {
    key: 'setInitialState',
    value: function setInitialState(initialState) {
      this.state = initialState; ///
    }
  }, {
    key: 'setState',
    value: function setState(state) {
      this.state = state;

      this.remount();
    }
  }, {
    key: 'updateState',
    value: function updateState(newState) {
      var oldState = this.state; ///

      this.state = Object.assign(oldState, newState);

      this.remount();
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate(update) {
      this.remount(update);
    }
  }, {
    key: 'getChildReference',
    value: function getChildReference() {
      var parent = this.getParent(),
          child = this; ///

      return reference(parent, child);
    }
  }]);

  return ReactElement;
}(Element);

Object.assign(ReactElement.prototype, reactElementMixins);

module.exports = ReactElement;

function reference(parent, child) {
  var reference = findReference(parent, child),
      parentDOMElement = parent.getDOMElement();

  while (reference === null && parentDOMElement === null) {
    child = parent; ///

    parent = parent.getParent();

    reference = findReference(parent, child);

    parentDOMElement = parent.getDOMElement();
  }

  return reference;
}

function findReference(parent, child) {
  var children = parent.getChildren(),
      remainingChildren = remaining(child, children);

  return remainingChildren.reduce(function (reference, remainingChild) {
    if (reference === null) {
      var remainingChildDOMElement = remainingChild.getDOMElement();

      if (remainingChildDOMElement !== null) {
        reference = remainingChild; ///
      } else {
        child = null;

        parent = remainingChild; ///

        reference = findReference(parent, child);
      }
    }

    return reference;
  }, null);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3JlYWN0LmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJyZWFjdEVsZW1lbnRNaXhpbnMiLCJndWFyYW50ZWUiLCJyZW1haW5pbmciLCJSZWFjdEVsZW1lbnQiLCJwcm9wcyIsInN0YXRlIiwidW5kZWZpbmVkIiwiY29udGV4dCIsInBhcmVudCIsInJlZmVyZW5jZSIsImNoaWxkQ29udGV4dCIsImdldENoaWxkQ29udGV4dCIsImNoaWxkcmVuIiwicmVuZGVyIiwiZG9tRWxlbWVudCIsImZvckVhY2giLCJjaGlsZCIsImNoaWxkUGFyZW50IiwiY2hpbGRSZWZlcmVuY2UiLCJtb3VudCIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRDaGlsZHJlbiIsInVubW91bnQiLCJ1cGRhdGUiLCJnZXRDaGlsZFJlZmVyZW5jZSIsImluaXRpYWxTdGF0ZSIsInJlbW91bnQiLCJuZXdTdGF0ZSIsIm9sZFN0YXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0UGFyZW50IiwicHJvdG90eXBlIiwibW9kdWxlIiwiZXhwb3J0cyIsImZpbmRSZWZlcmVuY2UiLCJwYXJlbnRET01FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInJlbWFpbmluZ0NoaWxkcmVuIiwicmVkdWNlIiwicmVtYWluaW5nQ2hpbGQiLCJyZW1haW5pbmdDaGlsZERPTUVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNRSxxQkFBcUJGLFFBQVEsd0JBQVIsQ0FGM0I7O0lBSVFHLFMsR0FBeUJGLGMsQ0FBekJFLFM7SUFBV0MsUyxHQUFjSCxjLENBQWRHLFM7O0lBRWJDLFk7OztBQUNKLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEs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ZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgcmVhY3RFbGVtZW50TWl4aW5zID0gcmVxdWlyZSgnLi4vbWl4aW5zL3JlYWN0RWxlbWVudCcpO1xuXG5jb25zdCB7IGd1YXJhbnRlZSwgcmVtYWluaW5nIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgUmVhY3RFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIFxuICAgIHRoaXMuc3RhdGUgPSB1bmRlZmluZWQ7IC8vL1xuXG4gICAgdGhpcy5jb250ZXh0ID0gdW5kZWZpbmVkOyAvLy9cbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpLFxuICAgICAgICAgIGNoaWxkcmVuID0gZ3VhcmFudGVlKHRoaXMucmVuZGVyKCkpLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSBzdXBlci5tb3VudChwYXJlbnQsIGNoaWxkcmVuKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcblxuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudChkb21FbGVtZW50KTtcblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQoKTtcblxuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpLFxuICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KSk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICByZW1vdW50KHVwZGF0ZSkge1xuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHRoaXMuZ2V0Q2hpbGRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dCh0aGlzLmNvbnRleHQpO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpKTtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBndWFyYW50ZWUodGhpcy5yZW5kZXIodXBkYXRlKSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCkpO1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7ICAvLy9cbiAgfVxuXG4gIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgdGhpcy5yZW1vdW50KCk7XG4gIH1cblxuICB1cGRhdGVTdGF0ZShuZXdTdGF0ZSkge1xuICAgIGNvbnN0IG9sZFN0YXRlID0gdGhpcy5zdGF0ZTsgIC8vL1xuXG4gICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24ob2xkU3RhdGUsIG5ld1N0YXRlKTtcblxuICAgIHRoaXMucmVtb3VudCgpO1xuICB9XG5cbiAgZm9yY2VVcGRhdGUodXBkYXRlKSB7XG4gICAgdGhpcy5yZW1vdW50KHVwZGF0ZSk7XG4gIH1cblxuICBnZXRDaGlsZFJlZmVyZW5jZSgpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudCgpLFxuICAgICAgICAgIGNoaWxkID0gdGhpczsgLy8vXG5cbiAgICByZXR1cm4gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUmVhY3RFbGVtZW50LnByb3RvdHlwZSwgcmVhY3RFbGVtZW50TWl4aW5zKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIHJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSB7XG4gIGxldCByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpLFxuICAgICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG5cbiAgd2hpbGUgKChyZWZlcmVuY2UgPT09IG51bGwpICYmIChwYXJlbnRET01FbGVtZW50ID09PSBudWxsKSkge1xuICAgIGNoaWxkID0gcGFyZW50OyAvLy9cblxuICAgIHBhcmVudCA9IHBhcmVudC5nZXRQYXJlbnQoKTtcblxuICAgIHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmZ1bmN0aW9uIGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCkge1xuICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5nZXRDaGlsZHJlbigpLFxuICAgICAgICByZW1haW5pbmdDaGlsZHJlbiA9IHJlbWFpbmluZyhjaGlsZCwgY2hpbGRyZW4pO1xuXG4gIHJldHVybiByZW1haW5pbmdDaGlsZHJlbi5yZWR1Y2UoKHJlZmVyZW5jZSwgcmVtYWluaW5nQ2hpbGQpID0+IHtcbiAgICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgICBjb25zdCByZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgPSByZW1haW5pbmdDaGlsZC5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGlmIChyZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gcmVtYWluaW5nQ2hpbGQ7IC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBudWxsO1xuXG4gICAgICAgIHBhcmVudCA9IHJlbWFpbmluZ0NoaWxkOyAgLy8vXG5cbiAgICAgICAgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9LCBudWxsKTtcbn1cbiJdfQ==