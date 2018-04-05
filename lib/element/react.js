'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    arrayUtilities = require('../utilities/array'),
    inferenceMixins = require('../mixins/react/inference');

var guarantee = arrayUtilities.guarantee;
var remaining = arrayUtilities.remaining;

var ReactElement = function (_Element) {
  _inherits(ReactElement, _Element);

  function ReactElement(props) {
    _classCallCheck(this, ReactElement);

    var _this = _possibleConstructorReturn(this, (ReactElement.__proto__ || Object.getPrototypeOf(ReactElement)).call(this, props));

    _this.state = undefined; ///

    _this.context = undefined;
    return _this;
  }

  _createClass(ReactElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      this.context = context;

      var childContext = this.getChildContext(context) || context,
          children = guarantee(this.render());

      _get(ReactElement.prototype.__proto__ || Object.getPrototypeOf(ReactElement.prototype), 'mount', this).call(this, parent, children);

      children.forEach(function (child) {
        var childParent = this,
            childReference = reference;

        child.mount(childParent, childReference, childContext);
      }.bind(this));

      this.componentDidMount();
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      this.context = context;

      this.componentWillUnmount();

      var childContext = this.getChildContext(context) || context,
          children = this.getChildren();

      children.forEach(function (child) {
        child.unmount(childContext);
      });

      _get(ReactElement.prototype.__proto__ || Object.getPrototypeOf(ReactElement.prototype), 'unmount', this).call(this);
    }
  }, {
    key: 'remount',
    value: function remount(update) {
      var childParent = this,
          childReference = this.getChildReference(),
          childContext = this.getChildContext(this.context) || this.context;

      this.children.forEach(function (child) {
        child.unmount(childContext);
      });

      this.children = guarantee(this.render(update));

      this.children.forEach(function (child) {
        child.mount(childParent, childReference, childContext);
      }.bind(this));
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
          child = this;

      return reference(parent, child);
    }
  }]);

  return ReactElement;
}(Element);

Object.assign(ReactElement.prototype, inferenceMixins);

module.exports = ReactElement;

function reference(parent, child) {
  var reference = findReference(parent, child),
      parentDOMElement = parent.getDOMElement();

  while (reference === null && parentDOMElement === null) {
    child = parent;
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
        reference = remainingChild;
      } else {
        child = null;
        parent = remainingChild;

        reference = findReference(parent, child);
      }
    }

    return reference;
  }, null);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3JlYWN0LmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJpbmZlcmVuY2VNaXhpbnMiLCJndWFyYW50ZWUiLCJyZW1haW5pbmciLCJSZWFjdEVsZW1lbnQiLCJwcm9wcyIsInN0YXRlIiwidW5kZWZpbmVkIiwiY29udGV4dCIsInBhcmVudCIsInJlZmVyZW5jZSIsImNoaWxkQ29udGV4dCIsImdldENoaWxkQ29udGV4dCIsImNoaWxkcmVuIiwicmVuZGVyIiwiZm9yRWFjaCIsImNoaWxkIiwiY2hpbGRQYXJlbnQiLCJjaGlsZFJlZmVyZW5jZSIsIm1vdW50IiwiYmluZCIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRDaGlsZHJlbiIsInVubW91bnQiLCJ1cGRhdGUiLCJnZXRDaGlsZFJlZmVyZW5jZSIsImluaXRpYWxTdGF0ZSIsInJlbW91bnQiLCJuZXdTdGF0ZSIsIm9sZFN0YXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0UGFyZW50IiwicHJvdG90eXBlIiwibW9kdWxlIiwiZXhwb3J0cyIsImZpbmRSZWZlcmVuY2UiLCJwYXJlbnRET01FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInJlbWFpbmluZ0NoaWxkcmVuIiwicmVkdWNlIiwicmVtYWluaW5nQ2hpbGQiLCJyZW1haW5pbmdDaGlsZERPTUVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEsMkJBQVIsQ0FGeEI7O0lBSVFHLFMsR0FBeUJGLGMsQ0FBekJFLFM7SUFBV0MsUyxHQUFjSCxjLENBQWRHLFM7O0lBRWJDLFk7OztBQUNKLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEhBQ1hBLEtB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LEVBQWtDO0FBQ2hDLE1BQUlOLFlBQVkyQixjQUFjNUIsTUFBZCxFQUFzQk8sS0FBdEIsQ0FBaEI7QUFBQSxNQUNJc0IsbUJBQW1CN0IsT0FBTzhCLGFBQVAsRUFEdkI7O0FBR0EsU0FBUTdCLGNBQWMsSUFBZixJQUF5QjRCLHFCQUFxQixJQUFyRCxFQUE0RDtBQUMxRHRCLFlBQVFQLE1BQVI7QUFDQUEsYUFBU0EsT0FBT3dCLFNBQVAsRUFBVDs7QUFFQXZCLGdCQUFZMkIsY0FBYzVCLE1BQWQsRUFBc0JPLEtBQXRCLENBQVo7QUFDQXNCLHVCQUFtQjdCLE9BQU84QixhQUFQLEVBQW5CO0FBQ0Q7O0FBRUQsU0FBTzdCLFNBQVA7QUFDRDs7QUFFRCxTQUFTMkIsYUFBVCxDQUF1QjVCLE1BQXZCLEVBQStCTyxLQUEvQixFQUFzQztBQUNwQyxNQUFNSCxXQUFXSixPQUFPYyxXQUFQLEVBQWpCO0FBQUEsTUFDSWlCLG9CQUFvQnJDLFVBQVVhLEtBQVYsRUFBaUJILFFBQWpCLENBRHhCOztBQUdBLFNBQU8yQixrQkFBa0JDLE1BQWxCLENBQXlCLFVBQVMvQixTQUFULEVBQW9CZ0MsY0FBcEIsRUFBb0M7QUFDbEUsUUFBSWhDLGNBQWMsSUFBbEIsRUFBd0I7QUFDdEIsVUFBTWlDLDJCQUEyQkQsZUFBZUgsYUFBZixFQUFqQzs7QUFFQSxVQUFJSSw2QkFBNkIsSUFBakMsRUFBdUM7QUFDckNqQyxvQkFBWWdDLGNBQVo7QUFDRCxPQUZELE1BRU87QUFDTDFCLGdCQUFRLElBQVI7QUFDQVAsaUJBQVNpQyxjQUFUOztBQUVBaEMsb0JBQVkyQixjQUFjNUIsTUFBZCxFQUFzQk8sS0FBdEIsQ0FBWjtBQUNEO0FBQ0Y7O0FBRUQsV0FBT04sU0FBUDtBQUNELEdBZk0sRUFlSixJQWZJLENBQVA7QUFnQkQiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgaW5mZXJlbmNlTWl4aW5zID0gcmVxdWlyZSgnLi4vbWl4aW5zL3JlYWN0L2luZmVyZW5jZScpO1xuXG5jb25zdCB7IGd1YXJhbnRlZSwgcmVtYWluaW5nIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgUmVhY3RFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIFxuICAgIHRoaXMuc3RhdGUgPSB1bmRlZmluZWQ7IC8vL1xuXG4gICAgdGhpcy5jb250ZXh0ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCkgfHwgY29udGV4dCxcbiAgICAgICAgICBjaGlsZHJlbiA9IGd1YXJhbnRlZSh0aGlzLnJlbmRlcigpKTtcblxuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgY2hpbGRyZW4pO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSByZWZlcmVuY2U7XG5cbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudCgpO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQoKTtcblxuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHx8IGNvbnRleHQsXG4gICAgICAgICAgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICByZW1vdW50KHVwZGF0ZSkge1xuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHRoaXMuZ2V0Q2hpbGRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dCh0aGlzLmNvbnRleHQpIHx8IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IGd1YXJhbnRlZSh0aGlzLnJlbmRlcih1cGRhdGUpKTtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0U3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTsgIC8vL1xuICB9XG5cbiAgc2V0U3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICB0aGlzLnJlbW91bnQoKTtcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlKG5ld1N0YXRlKSB7XG4gICAgY29uc3Qgb2xkU3RhdGUgPSB0aGlzLnN0YXRlOyAgLy8vXG5cbiAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbihvbGRTdGF0ZSwgbmV3U3RhdGUpO1xuXG4gICAgdGhpcy5yZW1vdW50KCk7XG4gIH1cblxuICBmb3JjZVVwZGF0ZSh1cGRhdGUpIHtcbiAgICB0aGlzLnJlbW91bnQodXBkYXRlKTtcbiAgfVxuXG4gIGdldENoaWxkUmVmZXJlbmNlKCkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZ2V0UGFyZW50KCksXG4gICAgICAgICAgY2hpbGQgPSB0aGlzO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFJlYWN0RWxlbWVudC5wcm90b3R5cGUsIGluZmVyZW5jZU1peGlucyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RFbGVtZW50O1xuXG5mdW5jdGlvbiByZWZlcmVuY2UocGFyZW50LCBjaGlsZCkge1xuICBsZXQgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSxcbiAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIHdoaWxlICgocmVmZXJlbmNlID09PSBudWxsKSAmJiAocGFyZW50RE9NRWxlbWVudCA9PT0gbnVsbCkpIHtcbiAgICBjaGlsZCA9IHBhcmVudDtcbiAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmdldENoaWxkcmVuKCksXG4gICAgICByZW1haW5pbmdDaGlsZHJlbiA9IHJlbWFpbmluZyhjaGlsZCwgY2hpbGRyZW4pO1xuXG4gIHJldHVybiByZW1haW5pbmdDaGlsZHJlbi5yZWR1Y2UoZnVuY3Rpb24ocmVmZXJlbmNlLCByZW1haW5pbmdDaGlsZCkge1xuICAgIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCA9IHJlbWFpbmluZ0NoaWxkLmdldERPTUVsZW1lbnQoKTtcblxuICAgICAgaWYgKHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2UgPSByZW1haW5pbmdDaGlsZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gbnVsbDtcbiAgICAgICAgcGFyZW50ID0gcmVtYWluaW5nQ2hpbGQ7XG5cbiAgICAgICAgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9LCBudWxsKTtcbn1cbiJdfQ==