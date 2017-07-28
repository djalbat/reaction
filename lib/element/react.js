'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var helpers = require('../helpers'),
    Element = require('../element'),
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
          children = helpers.guaranteeArray(this.render());

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

      this.children = helpers.guaranteeArray(this.render());

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3JlYWN0LmpzIl0sIm5hbWVzIjpbImhlbHBlcnMiLCJyZXF1aXJlIiwiRWxlbWVudCIsImluZmVyZW5jZU1peGluIiwiUmVhY3RFbGVtZW50IiwicHJvcHMiLCJzdGF0ZSIsInVuZGVmaW5lZCIsImNvbnRleHQiLCJwYXJlbnQiLCJyZWZlcmVuY2UiLCJjaGlsZENvbnRleHQiLCJnZXRDaGlsZENvbnRleHQiLCJjaGlsZHJlbiIsImd1YXJhbnRlZUFycmF5IiwicmVuZGVyIiwiZm9yRWFjaCIsImNoaWxkIiwiY2hpbGRQYXJlbnQiLCJjaGlsZFJlZmVyZW5jZSIsIm1vdW50IiwiYmluZCIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRDaGlsZHJlbiIsInVubW91bnQiLCJnZXRDaGlsZFJlZmVyZW5jZSIsImluaXRpYWxTdGF0ZSIsInJlbW91bnQiLCJ1cGRhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXRQYXJlbnQiLCJwcm90b3R5cGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZmluZFJlZmVyZW5jZSIsInBhcmVudERPTUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwicmVtYWluaW5nQ2hpbGRyZW4iLCJyZW1haW5pbmciLCJyZWR1Y2UiLCJyZW1haW5pbmdDaGlsZCIsInJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjtBQUFBLElBQ01DLFVBQVVELFFBQVEsWUFBUixDQURoQjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSwwQkFBUixDQUZ2Qjs7SUFJTUcsWTs7O0FBQ0osd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0SEFDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhQyxTQUFiLENBSGlCLENBR087O0FBRXhCLFVBQUtDLE9BQUwsR0FBZUQsU0FBZjtBQUxpQjtB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Q0lvQixtQkFBbUI1QixPQUFPNkIsYUFBUCxFQUR2Qjs7QUFHQSxTQUFRNUIsY0FBYyxJQUFmLElBQXlCMkIscUJBQXFCLElBQXJELEVBQTREO0FBQzFEcEIsWUFBUVIsTUFBUjtBQUNBQSxhQUFTQSxPQUFPdUIsU0FBUCxFQUFUOztBQUVBdEIsZ0JBQVkwQixjQUFjM0IsTUFBZCxFQUFzQlEsS0FBdEIsQ0FBWjtBQUNBb0IsdUJBQW1CNUIsT0FBTzZCLGFBQVAsRUFBbkI7QUFDRDs7QUFFRCxTQUFPNUIsU0FBUDtBQUNEOztBQUVELFNBQVMwQixhQUFULENBQXVCM0IsTUFBdkIsRUFBK0JRLEtBQS9CLEVBQXNDO0FBQ3BDLE1BQU1KLFdBQVdKLE9BQU9lLFdBQVAsRUFBakI7QUFBQSxNQUNJZSxvQkFBb0J2QyxRQUFRd0MsU0FBUixDQUFrQnZCLEtBQWxCLEVBQXlCSixRQUF6QixDQUR4Qjs7QUFHQSxTQUFPMEIsa0JBQWtCRSxNQUFsQixDQUF5QixVQUFTL0IsU0FBVCxFQUFvQmdDLGNBQXBCLEVBQW9DO0FBQ2xFLFFBQUloQyxjQUFjLElBQWxCLEVBQXdCO0FBQ3RCLFVBQU1pQywyQkFBMkJELGVBQWVKLGFBQWYsRUFBakM7O0FBRUEsVUFBSUssNkJBQTZCLElBQWpDLEVBQXVDO0FBQ3JDakMsb0JBQVlnQyxjQUFaO0FBQ0QsT0FGRCxNQUVPO0FBQ0x6QixnQkFBUSxJQUFSO0FBQ0FSLGlCQUFTaUMsY0FBVDs7QUFFQWhDLG9CQUFZMEIsY0FBYzNCLE1BQWQsRUFBc0JRLEtBQXRCLENBQVo7QUFDRDtBQUNGOztBQUVELFdBQU9QLFNBQVA7QUFDRCxHQWZNLEVBZUosSUFmSSxDQUFQO0FBZ0JEIiwiZmlsZSI6InJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBoZWxwZXJzID0gcmVxdWlyZSgnLi4vaGVscGVycycpLFxuICAgICAgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIGluZmVyZW5jZU1peGluID0gcmVxdWlyZSgnLi4vbWl4aW4vcmVhY3QvaW5mZXJlbmNlJyk7XG5cbmNsYXNzIFJlYWN0RWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgICB0aGlzLnN0YXRlID0gdW5kZWZpbmVkOyAvLy9cblxuICAgIHRoaXMuY29udGV4dCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHx8IGNvbnRleHQsXG4gICAgICAgICAgY2hpbGRyZW4gPSBoZWxwZXJzLmd1YXJhbnRlZUFycmF5KHRoaXMucmVuZGVyKCkpO1xuXG4gICAgc3VwZXIubW91bnQocGFyZW50LCBjaGlsZHJlbik7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcblxuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCkgfHwgY29udGV4dCxcbiAgICAgICAgICBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIHJlbW91bnQoKSB7XG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gdGhpcy5nZXRDaGlsZFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KHRoaXMuY29udGV4dCkgfHwgdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gaGVscGVycy5ndWFyYW50ZWVBcnJheSh0aGlzLnJlbmRlcigpKTtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0U3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTsgIC8vL1xuICB9XG5cbiAgc2V0U3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICB0aGlzLnJlbW91bnQoKTtcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlKHVwZGF0ZSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSwgdXBkYXRlKTtcblxuICAgIHRoaXMucmVtb3VudCgpO1xuICB9XG5cbiAgZm9yY2VVcGRhdGUodXBkYXRlKSB7XG4gICAgaWYgKHVwZGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnJlbmRlcih1cGRhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW91bnQoKTtcbiAgICB9XG4gIH1cblxuICBnZXRDaGlsZFJlZmVyZW5jZSgpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudCgpLFxuICAgICAgICAgIGNoaWxkID0gdGhpcztcblxuICAgIHJldHVybiByZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihSZWFjdEVsZW1lbnQucHJvdG90eXBlLCBpbmZlcmVuY2VNaXhpbik7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RFbGVtZW50O1xuXG5mdW5jdGlvbiByZWZlcmVuY2UocGFyZW50LCBjaGlsZCkge1xuICBsZXQgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSxcbiAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIHdoaWxlICgocmVmZXJlbmNlID09PSBudWxsKSAmJiAocGFyZW50RE9NRWxlbWVudCA9PT0gbnVsbCkpIHtcbiAgICBjaGlsZCA9IHBhcmVudDtcbiAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmdldENoaWxkcmVuKCksXG4gICAgICByZW1haW5pbmdDaGlsZHJlbiA9IGhlbHBlcnMucmVtYWluaW5nKGNoaWxkLCBjaGlsZHJlbik7XG5cbiAgcmV0dXJuIHJlbWFpbmluZ0NoaWxkcmVuLnJlZHVjZShmdW5jdGlvbihyZWZlcmVuY2UsIHJlbWFpbmluZ0NoaWxkKSB7XG4gICAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgcmVtYWluaW5nQ2hpbGRET01FbGVtZW50ID0gcmVtYWluaW5nQ2hpbGQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgICBpZiAocmVtYWluaW5nQ2hpbGRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJlZmVyZW5jZSA9IHJlbWFpbmluZ0NoaWxkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBudWxsO1xuICAgICAgICBwYXJlbnQgPSByZW1haW5pbmdDaGlsZDtcblxuICAgICAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH0sIG51bGwpO1xufVxuIl19