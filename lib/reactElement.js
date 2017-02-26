'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var helpers = require('./helpers'),
    Element = require('./element');

var ReactElement = function (_Element) {
  _inherits(ReactElement, _Element);

  function ReactElement(props) {
    _classCallCheck(this, ReactElement);

    var domElement = null;

    var _this = _possibleConstructorReturn(this, (ReactElement.__proto__ || Object.getPrototypeOf(ReactElement)).call(this, domElement, props));

    _this.state = undefined;

    _this.context = undefined;
    return _this;
  }

  _createClass(ReactElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      _get(ReactElement.prototype.__proto__ || Object.getPrototypeOf(ReactElement.prototype), 'mount', this).call(this, parent, reference);

      this.context = context;

      this.children = helpers.guaranteeArray(this.render());

      var childParent = this,
          childReference = reference,
          childContext = this.getChildContext(context) || context;

      this.children.forEach(function (child) {
        child.mount(childParent, childReference, childContext);
      });

      this.componentDidMount();
    }
  }, {
    key: 'remount',
    value: function remount() {
      var childParent = this,
          childReference = this.getChildReference(),
          childContext = this.getChildContext(this.context) || this.context;

      this.children.forEach(function (child) {
        child.unmount(childContext);
      });

      this.children = helpers.guaranteeArray(this.render());

      this.children.forEach(function (child) {
        child.mount(childParent, childReference, childContext);
      }.bind(this));
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      this.context = context;

      this.componentWillUnmount();

      var childContext = this.getChildContext(context) || context;

      this.children.forEach(function (child) {
        child.unmount(childContext);
      });

      _get(ReactElement.prototype.__proto__ || Object.getPrototypeOf(ReactElement.prototype), 'unmount', this).call(this);
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate() {
      this.remount();
    }
  }, {
    key: 'setState',
    value: function setState(state) {
      this.state = state;

      this.remount();
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
      remainingChildren = helpers.remaining(child, children);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdEVsZW1lbnQuanMiXSwibmFtZXMiOlsiaGVscGVycyIsInJlcXVpcmUiLCJFbGVtZW50IiwiUmVhY3RFbGVtZW50IiwicHJvcHMiLCJkb21FbGVtZW50Iiwic3RhdGUiLCJ1bmRlZmluZWQiLCJjb250ZXh0IiwicGFyZW50IiwicmVmZXJlbmNlIiwiY2hpbGRyZW4iLCJndWFyYW50ZWVBcnJheSIsInJlbmRlciIsImNoaWxkUGFyZW50IiwiY2hpbGRSZWZlcmVuY2UiLCJjaGlsZENvbnRleHQiLCJnZXRDaGlsZENvbnRleHQiLCJmb3JFYWNoIiwiY2hpbGQiLCJtb3VudCIsImNvbXBvbmVudERpZE1vdW50IiwiZ2V0Q2hpbGRSZWZlcmVuY2UiLCJ1bm1vdW50IiwiYmluZCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3VudCIsImdldFBhcmVudCIsIm1vZHVsZSIsImV4cG9ydHMiLCJmaW5kUmVmZXJlbmNlIiwicGFyZW50RE9NRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJnZXRDaGlsZHJlbiIsInJlbWFpbmluZ0NoaWxkcmVuIiwicmVtYWluaW5nIiwicmVkdWNlIiwicmVtYWluaW5nQ2hpbGQiLCJyZW1haW5pbmdDaGlsZERPTUVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNQyxVQUFVRCxRQUFRLFdBQVIsQ0FEaEI7O0lBR01FLFk7OztBQUNKLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFFBQU1DLGFBQWEsSUFBbkI7O0FBRGlCLDRIQUdYQSxVQUhXLEVBR0NELEtBSEQ7O0FBS2pCLFVBQUtFLEtBQUwsR0FBYUMsU0FBYjs7QUFFQSxVQUFLQyxPQUFMLEdBQWVELFNBQWY7QUFQaUI7QUFRbEI7Ozs7MEJBRUtFLE0sRUFBUUMsUyxFQUFXRixPLEVBQVM7QUFDaEMsd0hBQVlDLE1BQVosRUFBb0JDLFNBQXBCOztBQUVB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QUFJM0IsY0FBYyxJQUFsQixFQUF3QjtBQUN0QixVQUFNNEIsMkJBQTJCRCxlQUFlTCxhQUFmLEVBQWpDOztBQUVBLFVBQUlNLDZCQUE2QixJQUFqQyxFQUF1QztBQUNyQzVCLG9CQUFZMkIsY0FBWjtBQUNELE9BRkQsTUFFTztBQUNMbEIsZ0JBQVEsSUFBUjtBQUNBVixpQkFBUzRCLGNBQVQ7O0FBRUEzQixvQkFBWW9CLGNBQWNyQixNQUFkLEVBQXNCVSxLQUF0QixDQUFaO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPVCxTQUFQO0FBQ0QsR0FmTSxFQWVKLElBZkksQ0FBUDtBQWdCRCIsImZpbGUiOiJyZWFjdEVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGhlbHBlcnMgPSByZXF1aXJlKCcuL2hlbHBlcnMnKSxcbiAgICAgIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3RFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IG51bGw7XG5cbiAgICBzdXBlcihkb21FbGVtZW50LCBwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0gdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5jb250ZXh0ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICBzdXBlci5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSk7XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IGhlbHBlcnMuZ3VhcmFudGVlQXJyYXkodGhpcy5yZW5kZXIoKSk7XG5cbiAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSByZWZlcmVuY2UsXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCkgfHwgY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudCgpOyBcbiAgfVxuXG4gIHJlbW91bnQoKSB7XG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gdGhpcy5nZXRDaGlsZFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KHRoaXMuY29udGV4dCkgfHwgdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gaGVscGVycy5ndWFyYW50ZWVBcnJheSh0aGlzLnJlbmRlcigpKTtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCkgfHwgY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuICAgIFxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIGZvcmNlVXBkYXRlKCkge1xuICAgIHRoaXMucmVtb3VudCgpO1xuICB9XG5cbiAgc2V0U3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICB0aGlzLnJlbW91bnQoKTtcbiAgfVxuXG4gIGdldENoaWxkUmVmZXJlbmNlKCkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZ2V0UGFyZW50KCksXG4gICAgICAgICAgY2hpbGQgPSB0aGlzO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RWxlbWVudDtcblxuZnVuY3Rpb24gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpIHtcbiAgbGV0IHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCksXG4gICAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcblxuICB3aGlsZSAoKHJlZmVyZW5jZSA9PT0gbnVsbCkgJiYgKHBhcmVudERPTUVsZW1lbnQgPT09IG51bGwpKSB7XG4gICAgY2hpbGQgPSBwYXJlbnQ7XG4gICAgcGFyZW50ID0gcGFyZW50LmdldFBhcmVudCgpO1xuXG4gICAgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcbiAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmZ1bmN0aW9uIGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCkge1xuICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5nZXRDaGlsZHJlbigpLFxuICAgICAgICByZW1haW5pbmdDaGlsZHJlbiA9IGhlbHBlcnMucmVtYWluaW5nKGNoaWxkLCBjaGlsZHJlbik7XG5cbiAgcmV0dXJuIHJlbWFpbmluZ0NoaWxkcmVuLnJlZHVjZShmdW5jdGlvbihyZWZlcmVuY2UsIHJlbWFpbmluZ0NoaWxkKSB7XG4gICAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgcmVtYWluaW5nQ2hpbGRET01FbGVtZW50ID0gcmVtYWluaW5nQ2hpbGQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgICBpZiAocmVtYWluaW5nQ2hpbGRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJlZmVyZW5jZSA9IHJlbWFpbmluZ0NoaWxkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBudWxsO1xuICAgICAgICBwYXJlbnQgPSByZW1haW5pbmdDaGlsZDtcblxuICAgICAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH0sIG51bGwpO1xufVxuIl19