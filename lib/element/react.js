'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    arrayUtil = require('../util/array'),
    inferenceMixin = require('../mixin/react/inference');

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
          children = arrayUtil.guarantee(this.render());

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
    value: function remount() {
      var childParent = this,
          childReference = this.getChildReference(),
          childContext = this.getChildContext(this.context) || this.context;

      this.children.forEach(function (child) {
        child.unmount(childContext);
      });

      this.children = arrayUtil.guarantee(this.render());

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
    value: function updateState(update) {
      Object.assign(this.state, update);

      this.remount();
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate(update) {
      if (update !== undefined) {
        this.render(update);
      } else {
        this.remount();
      }
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

Object.assign(ReactElement.prototype, inferenceMixin);

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
      remainingChildren = arrayUtil.remaining(child, children);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3JlYWN0LmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJyZXF1aXJlIiwiYXJyYXlVdGlsIiwiaW5mZXJlbmNlTWl4aW4iLCJSZWFjdEVsZW1lbnQiLCJwcm9wcyIsInN0YXRlIiwidW5kZWZpbmVkIiwiY29udGV4dCIsInBhcmVudCIsInJlZmVyZW5jZSIsImNoaWxkQ29udGV4dCIsImdldENoaWxkQ29udGV4dCIsImNoaWxkcmVuIiwiZ3VhcmFudGVlIiwicmVuZGVyIiwiZm9yRWFjaCIsImNoaWxkIiwiY2hpbGRQYXJlbnQiLCJjaGlsZFJlZmVyZW5jZSIsIm1vdW50IiwiYmluZCIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRDaGlsZHJlbiIsInVubW91bnQiLCJnZXRDaGlsZFJlZmVyZW5jZSIsImluaXRpYWxTdGF0ZSIsInJlbW91bnQiLCJ1cGRhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXRQYXJlbnQiLCJwcm90b3R5cGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZmluZFJlZmVyZW5jZSIsInBhcmVudERPTUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwicmVtYWluaW5nQ2hpbGRyZW4iLCJyZW1haW5pbmciLCJyZWR1Y2UiLCJyZW1haW5pbmdDaGlsZCIsInJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjtBQUFBLElBQ01DLFlBQVlELFFBQVEsZUFBUixDQURsQjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSwwQkFBUixDQUZ2Qjs7SUFJTUcsWTs7O0FBQ0osd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0SEFDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhQyxTQUFiLENBSGlCLENBR087O0FBRXhCLFVBQUtDLE9BQUwsR0FBZUQsU0FBZjtBQUxpQjtBQU1s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b0IsbUJBQW1CNUIsT0FBTzZCLGFBQVAsRUFEdkI7O0FBR0EsU0FBUTVCLGNBQWMsSUFBZixJQUF5QjJCLHFCQUFxQixJQUFyRCxFQUE0RDtBQUMxRHBCLFlBQVFSLE1BQVI7QUFDQUEsYUFBU0EsT0FBT3VCLFNBQVAsRUFBVDs7QUFFQXRCLGdCQUFZMEIsY0FBYzNCLE1BQWQsRUFBc0JRLEtBQXRCLENBQVo7QUFDQW9CLHVCQUFtQjVCLE9BQU82QixhQUFQLEVBQW5CO0FBQ0Q7O0FBRUQsU0FBTzVCLFNBQVA7QUFDRDs7QUFFRCxTQUFTMEIsYUFBVCxDQUF1QjNCLE1BQXZCLEVBQStCUSxLQUEvQixFQUFzQztBQUNwQyxNQUFNSixXQUFXSixPQUFPZSxXQUFQLEVBQWpCO0FBQUEsTUFDSWUsb0JBQW9CckMsVUFBVXNDLFNBQVYsQ0FBb0J2QixLQUFwQixFQUEyQkosUUFBM0IsQ0FEeEI7O0FBR0EsU0FBTzBCLGtCQUFrQkUsTUFBbEIsQ0FBeUIsVUFBUy9CLFNBQVQsRUFBb0JnQyxjQUFwQixFQUFvQztBQUNsRSxRQUFJaEMsY0FBYyxJQUFsQixFQUF3QjtBQUN0QixVQUFNaUMsMkJBQTJCRCxlQUFlSixhQUFmLEVBQWpDOztBQUVBLFVBQUlLLDZCQUE2QixJQUFqQyxFQUF1QztBQUNyQ2pDLG9CQUFZZ0MsY0FBWjtBQUNELE9BRkQsTUFFTztBQUNMekIsZ0JBQVEsSUFBUjtBQUNBUixpQkFBU2lDLGNBQVQ7O0FBRUFoQyxvQkFBWTBCLGNBQWMzQixNQUFkLEVBQXNCUSxLQUF0QixDQUFaO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPUCxTQUFQO0FBQ0QsR0FmTSxFQWVKLElBZkksQ0FBUDtBQWdCRCIsImZpbGUiOiJyZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIGluZmVyZW5jZU1peGluID0gcmVxdWlyZSgnLi4vbWl4aW4vcmVhY3QvaW5mZXJlbmNlJyk7XG5cbmNsYXNzIFJlYWN0RWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgICB0aGlzLnN0YXRlID0gdW5kZWZpbmVkOyAvLy9cblxuICAgIHRoaXMuY29udGV4dCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHx8IGNvbnRleHQsXG4gICAgICAgICAgY2hpbGRyZW4gPSBhcnJheVV0aWwuZ3VhcmFudGVlKHRoaXMucmVuZGVyKCkpO1xuXG4gICAgc3VwZXIubW91bnQocGFyZW50LCBjaGlsZHJlbik7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcblxuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCkgfHwgY29udGV4dCxcbiAgICAgICAgICBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIHJlbW91bnQoKSB7XG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gdGhpcy5nZXRDaGlsZFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KHRoaXMuY29udGV4dCkgfHwgdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gYXJyYXlVdGlsLmd1YXJhbnRlZSh0aGlzLnJlbmRlcigpKTtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0U3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTsgIC8vL1xuICB9XG5cbiAgc2V0U3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICB0aGlzLnJlbW91bnQoKTtcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlKHVwZGF0ZSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSwgdXBkYXRlKTtcblxuICAgIHRoaXMucmVtb3VudCgpO1xuICB9XG5cbiAgZm9yY2VVcGRhdGUodXBkYXRlKSB7XG4gICAgaWYgKHVwZGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnJlbmRlcih1cGRhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW91bnQoKTtcbiAgICB9XG4gIH1cblxuICBnZXRDaGlsZFJlZmVyZW5jZSgpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudCgpLFxuICAgICAgICAgIGNoaWxkID0gdGhpcztcblxuICAgIHJldHVybiByZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihSZWFjdEVsZW1lbnQucHJvdG90eXBlLCBpbmZlcmVuY2VNaXhpbik7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RFbGVtZW50O1xuXG5mdW5jdGlvbiByZWZlcmVuY2UocGFyZW50LCBjaGlsZCkge1xuICBsZXQgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSxcbiAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIHdoaWxlICgocmVmZXJlbmNlID09PSBudWxsKSAmJiAocGFyZW50RE9NRWxlbWVudCA9PT0gbnVsbCkpIHtcbiAgICBjaGlsZCA9IHBhcmVudDtcbiAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmdldENoaWxkcmVuKCksXG4gICAgICByZW1haW5pbmdDaGlsZHJlbiA9IGFycmF5VXRpbC5yZW1haW5pbmcoY2hpbGQsIGNoaWxkcmVuKTtcblxuICByZXR1cm4gcmVtYWluaW5nQ2hpbGRyZW4ucmVkdWNlKGZ1bmN0aW9uKHJlZmVyZW5jZSwgcmVtYWluaW5nQ2hpbGQpIHtcbiAgICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgICBjb25zdCByZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgPSByZW1haW5pbmdDaGlsZC5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGlmIChyZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gcmVtYWluaW5nQ2hpbGQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IG51bGw7XG4gICAgICAgIHBhcmVudCA9IHJlbWFpbmluZ0NoaWxkO1xuXG4gICAgICAgIHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfSwgbnVsbCk7XG59XG4iXX0=