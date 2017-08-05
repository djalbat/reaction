'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    arrayUtilities = require('../utilities/array'),
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
          children = arrayUtilities.guarantee(this.render());

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

      this.children = arrayUtilities.guarantee(this.render());

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
      remainingChildren = arrayUtilities.remaining(child, children);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3JlYWN0LmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJpbmZlcmVuY2VNaXhpbiIsIlJlYWN0RWxlbWVudCIsInByb3BzIiwic3RhdGUiLCJ1bmRlZmluZWQiLCJjb250ZXh0IiwicGFyZW50IiwicmVmZXJlbmNlIiwiY2hpbGRDb250ZXh0IiwiZ2V0Q2hpbGRDb250ZXh0IiwiY2hpbGRyZW4iLCJndWFyYW50ZWUiLCJyZW5kZXIiLCJmb3JFYWNoIiwiY2hpbGQiLCJjaGlsZFBhcmVudCIsImNoaWxkUmVmZXJlbmNlIiwibW91bnQiLCJiaW5kIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldENoaWxkcmVuIiwidW5tb3VudCIsImdldENoaWxkUmVmZXJlbmNlIiwiaW5pdGlhbFN0YXRlIiwicmVtb3VudCIsInVwZGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsImdldFBhcmVudCIsInByb3RvdHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJmaW5kUmVmZXJlbmNlIiwicGFyZW50RE9NRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJyZW1haW5pbmdDaGlsZHJlbiIsInJlbWFpbmluZyIsInJlZHVjZSIsInJlbWFpbmluZ0NoaWxkIiwicmVtYWluaW5nQ2hpbGRET01FbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLG9CQUFSLENBRHZCO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLDBCQUFSLENBRnZCOztJQUlNRyxZOzs7QUFDSix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDRIQUNYQSxLQURXOztBQUdqQixVQUFLQyxLQUFMLEdBQWFDLFNBQWIsQ0FIaUIsQ0FHTzs7QUFFeEIsVUFBS0MsT0FBTCxHQUFlRCxTQUFmO0FB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QUFBLE1BQ0lvQixtQkFBbUI1QixPQUFPNkIsYUFBUCxFQUR2Qjs7QUFHQSxTQUFRNUIsY0FBYyxJQUFmLElBQXlCMkIscUJBQXFCLElBQXJELEVBQTREO0FBQzFEcEIsWUFBUVIsTUFBUjtBQUNBQSxhQUFTQSxPQUFPdUIsU0FBUCxFQUFUOztBQUVBdEIsZ0JBQVkwQixjQUFjM0IsTUFBZCxFQUFzQlEsS0FBdEIsQ0FBWjtBQUNBb0IsdUJBQW1CNUIsT0FBTzZCLGFBQVAsRUFBbkI7QUFDRDs7QUFFRCxTQUFPNUIsU0FBUDtBQUNEOztBQUVELFNBQVMwQixhQUFULENBQXVCM0IsTUFBdkIsRUFBK0JRLEtBQS9CLEVBQXNDO0FBQ3BDLE1BQU1KLFdBQVdKLE9BQU9lLFdBQVAsRUFBakI7QUFBQSxNQUNJZSxvQkFBb0JyQyxlQUFlc0MsU0FBZixDQUF5QnZCLEtBQXpCLEVBQWdDSixRQUFoQyxDQUR4Qjs7QUFHQSxTQUFPMEIsa0JBQWtCRSxNQUFsQixDQUF5QixVQUFTL0IsU0FBVCxFQUFvQmdDLGNBQXBCLEVBQW9DO0FBQ2xFLFFBQUloQyxjQUFjLElBQWxCLEVBQXdCO0FBQ3RCLFVBQU1pQywyQkFBMkJELGVBQWVKLGFBQWYsRUFBakM7O0FBRUEsVUFBSUssNkJBQTZCLElBQWpDLEVBQXVDO0FBQ3JDakMsb0JBQVlnQyxjQUFaO0FBQ0QsT0FGRCxNQUVPO0FBQ0x6QixnQkFBUSxJQUFSO0FBQ0FSLGlCQUFTaUMsY0FBVDs7QUFFQWhDLG9CQUFZMEIsY0FBYzNCLE1BQWQsRUFBc0JRLEtBQXRCLENBQVo7QUFDRDtBQUNGOztBQUVELFdBQU9QLFNBQVA7QUFDRCxHQWZNLEVBZUosSUFmSSxDQUFQO0FBZ0JEIiwiZmlsZSI6InJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIGluZmVyZW5jZU1peGluID0gcmVxdWlyZSgnLi4vbWl4aW4vcmVhY3QvaW5mZXJlbmNlJyk7XG5cbmNsYXNzIFJlYWN0RWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgICB0aGlzLnN0YXRlID0gdW5kZWZpbmVkOyAvLy9cblxuICAgIHRoaXMuY29udGV4dCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHx8IGNvbnRleHQsXG4gICAgICAgICAgY2hpbGRyZW4gPSBhcnJheVV0aWxpdGllcy5ndWFyYW50ZWUodGhpcy5yZW5kZXIoKSk7XG5cbiAgICBzdXBlci5tb3VudChwYXJlbnQsIGNoaWxkcmVuKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuXG4gICAgICBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgfVxuXG4gIHVubW91bnQoY29udGV4dCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG5cbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dChjb250ZXh0KSB8fCBjb250ZXh0LFxuICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgcmVtb3VudCgpIHtcbiAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSB0aGlzLmdldENoaWxkUmVmZXJlbmNlKCksXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQodGhpcy5jb250ZXh0KSB8fCB0aGlzLmNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBhcnJheVV0aWxpdGllcy5ndWFyYW50ZWUodGhpcy5yZW5kZXIoKSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7ICAvLy9cbiAgfVxuXG4gIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgdGhpcy5yZW1vdW50KCk7XG4gIH1cblxuICB1cGRhdGVTdGF0ZSh1cGRhdGUpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUsIHVwZGF0ZSk7XG5cbiAgICB0aGlzLnJlbW91bnQoKTtcbiAgfVxuXG4gIGZvcmNlVXBkYXRlKHVwZGF0ZSkge1xuICAgIGlmICh1cGRhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5yZW5kZXIodXBkYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdW50KCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2hpbGRSZWZlcmVuY2UoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnQoKSxcbiAgICAgICAgICBjaGlsZCA9IHRoaXM7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUmVhY3RFbGVtZW50LnByb3RvdHlwZSwgaW5mZXJlbmNlTWl4aW4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RWxlbWVudDtcblxuZnVuY3Rpb24gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpIHtcbiAgbGV0IHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCksXG4gICAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcblxuICB3aGlsZSAoKHJlZmVyZW5jZSA9PT0gbnVsbCkgJiYgKHBhcmVudERPTUVsZW1lbnQgPT09IG51bGwpKSB7XG4gICAgY2hpbGQgPSBwYXJlbnQ7XG4gICAgcGFyZW50ID0gcGFyZW50LmdldFBhcmVudCgpO1xuXG4gICAgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcbiAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmZ1bmN0aW9uIGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCkge1xuICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5nZXRDaGlsZHJlbigpLFxuICAgICAgcmVtYWluaW5nQ2hpbGRyZW4gPSBhcnJheVV0aWxpdGllcy5yZW1haW5pbmcoY2hpbGQsIGNoaWxkcmVuKTtcblxuICByZXR1cm4gcmVtYWluaW5nQ2hpbGRyZW4ucmVkdWNlKGZ1bmN0aW9uKHJlZmVyZW5jZSwgcmVtYWluaW5nQ2hpbGQpIHtcbiAgICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgICBjb25zdCByZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgPSByZW1haW5pbmdDaGlsZC5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGlmIChyZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gcmVtYWluaW5nQ2hpbGQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IG51bGw7XG4gICAgICAgIHBhcmVudCA9IHJlbWFpbmluZ0NoaWxkO1xuXG4gICAgICAgIHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfSwgbnVsbCk7XG59XG4iXX0=