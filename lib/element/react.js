"use strict";

var _element = _interopRequireDefault(require("../element"));

var _reactElement = _interopRequireDefault(require("../mixins/reactElement"));

var _array = require("../utilities/array");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ReactElement = /*#__PURE__*/function (_Element) {
  _inherits(ReactElement, _Element);

  var _super = _createSuper(ReactElement);

  function ReactElement(props) {
    var _this;

    _classCallCheck(this, ReactElement);

    _this = _super.call(this, props);
    _this.state = undefined; ///

    _this.context = undefined; ///

    return _this;
  }

  _createClass(ReactElement, [{
    key: "mount",
    value: function mount(parent, reference, context) {
      var _this2 = this;

      this.context = context;
      var childContext = this.getChildContext(context),
          children = (0, _array.guarantee)(this.render());

      _get(_getPrototypeOf(ReactElement.prototype), "mount", this).call(this, parent, children);

      children.forEach(function (child) {
        var childParent = _this2,
            childReference = reference;
        child.mount(childParent, childReference, childContext);
      });
      this.componentDidMount();
    }
  }, {
    key: "unmount",
    value: function unmount(context) {
      this.context = context;
      this.componentWillUnmount();
      var childContext = this.getChildContext(context),
          children = this.getChildren();
      children.forEach(function (child) {
        return child.unmount(childContext);
      });

      _get(_getPrototypeOf(ReactElement.prototype), "unmount", this).call(this);
    }
  }, {
    key: "remount",
    value: function remount(update) {
      var childParent = this,
          childReference = this.getChildReference(),
          childContext = this.getChildContext(this.context);
      this.children.forEach(function (child) {
        return child.unmount(childContext);
      });
      this.children = (0, _array.guarantee)(this.render(update));
      this.children.forEach(function (child) {
        return child.mount(childParent, childReference, childContext);
      });
    }
  }, {
    key: "getDOMElement",
    value: function getDOMElement() {
      return null;
    }
  }, {
    key: "getState",
    value: function getState() {
      return this.state;
    }
  }, {
    key: "setInitialState",
    value: function setInitialState(initialState) {
      this.state = initialState; ///
    }
  }, {
    key: "setState",
    value: function setState(state) {
      this.state = state;
      this.remount();
    }
  }, {
    key: "updateState",
    value: function updateState(newState) {
      var oldState = this.state; ///

      this.state = Object.assign(oldState, newState);
      this.remount();
    }
  }, {
    key: "forceUpdate",
    value: function forceUpdate(update) {
      this.remount(update);
    }
  }, {
    key: "getChildReference",
    value: function getChildReference() {
      var parent = this.getParent(),
          child = this; ///

      return reference(parent, child);
    }
  }]);

  return ReactElement;
}(_element["default"]);

Object.assign(ReactElement.prototype, _reactElement["default"]);
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
      remainingChildren = (0, _array.remaining)(child, children);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0LmpzIl0sIm5hbWVzIjpbIlJlYWN0RWxlbWVudCIsInByb3BzIiwic3RhdGUiLCJ1bmRlZmluZWQiLCJjb250ZXh0IiwicGFyZW50IiwicmVmZXJlbmNlIiwiY2hpbGRDb250ZXh0IiwiZ2V0Q2hpbGRDb250ZXh0IiwiY2hpbGRyZW4iLCJyZW5kZXIiLCJmb3JFYWNoIiwiY2hpbGQiLCJjaGlsZFBhcmVudCIsImNoaWxkUmVmZXJlbmNlIiwibW91bnQiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0Q2hpbGRyZW4iLCJ1bm1vdW50IiwidXBkYXRlIiwiZ2V0Q2hpbGRSZWZlcmVuY2UiLCJpbml0aWFsU3RhdGUiLCJyZW1vdW50IiwibmV3U3RhdGUiLCJvbGRTdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsImdldFBhcmVudCIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJyZWFjdEVsZW1lbnRNaXhpbnMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZmluZFJlZmVyZW5jZSIsInBhcmVudERPTUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwicmVtYWluaW5nQ2hpbGRyZW4iLCJyZWR1Y2UiLCJyZW1haW5pbmdDaGlsZCIsInJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxZOzs7OztBQUNKLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhQyxTQUFiLENBSGlCLENBR087O0FBRXhCLFVBQUtDLE9BQUwsR0FBZUQsU0FBZixDQUxpQixDQUtTOztBQUxUO0FBTWxCOzs7OzBCQUVLRSxNLEVBQVFDLFMsRUFBV0YsTyxFQUFTO0FBQUE7O0FBQ2hDLFdBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUVBLFVBQU1HLFlBQVksR0FBRyxLQUFL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dFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IHJlYWN0RWxlbWVudE1peGlucyBmcm9tIFwiLi4vbWl4aW5zL3JlYWN0RWxlbWVudFwiO1xuXG5pbXBvcnQgeyBndWFyYW50ZWUsIHJlbWFpbmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY2xhc3MgUmVhY3RFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIFxuICAgIHRoaXMuc3RhdGUgPSB1bmRlZmluZWQ7IC8vL1xuXG4gICAgdGhpcy5jb250ZXh0ID0gdW5kZWZpbmVkOyAvLy9cbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpLFxuICAgICAgICAgIGNoaWxkcmVuID0gZ3VhcmFudGVlKHRoaXMucmVuZGVyKCkpO1xuXG4gICAgc3VwZXIubW91bnQocGFyZW50LCBjaGlsZHJlbik7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSByZWZlcmVuY2U7XG5cbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgfVxuXG4gIHVubW91bnQoY29udGV4dCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG5cbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dChjb250ZXh0KSxcbiAgICAgICAgICBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCkpO1xuXG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgcmVtb3VudCh1cGRhdGUpIHtcbiAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSB0aGlzLmdldENoaWxkUmVmZXJlbmNlKCksXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQodGhpcy5jb250ZXh0KTtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gZ3VhcmFudGVlKHRoaXMucmVuZGVyKHVwZGF0ZSkpO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpKTtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlOyAgLy8vXG4gIH1cblxuICBzZXRTdGF0ZShzdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxuICAgIHRoaXMucmVtb3VudCgpO1xuICB9XG5cbiAgdXBkYXRlU3RhdGUobmV3U3RhdGUpIHtcbiAgICBjb25zdCBvbGRTdGF0ZSA9IHRoaXMuc3RhdGU7ICAvLy9cblxuICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKG9sZFN0YXRlLCBuZXdTdGF0ZSk7XG5cbiAgICB0aGlzLnJlbW91bnQoKTtcbiAgfVxuXG4gIGZvcmNlVXBkYXRlKHVwZGF0ZSkge1xuICAgIHRoaXMucmVtb3VudCh1cGRhdGUpO1xuICB9XG5cbiAgZ2V0Q2hpbGRSZWZlcmVuY2UoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnQoKSxcbiAgICAgICAgICBjaGlsZCA9IHRoaXM7IC8vL1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFJlYWN0RWxlbWVudC5wcm90b3R5cGUsIHJlYWN0RWxlbWVudE1peGlucyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RFbGVtZW50O1xuXG5mdW5jdGlvbiByZWZlcmVuY2UocGFyZW50LCBjaGlsZCkge1xuICBsZXQgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSxcbiAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIHdoaWxlICgocmVmZXJlbmNlID09PSBudWxsKSAmJiAocGFyZW50RE9NRWxlbWVudCA9PT0gbnVsbCkpIHtcbiAgICBjaGlsZCA9IHBhcmVudDsgLy8vXG5cbiAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5mdW5jdGlvbiBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpIHtcbiAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuZ2V0Q2hpbGRyZW4oKSxcbiAgICAgICAgcmVtYWluaW5nQ2hpbGRyZW4gPSByZW1haW5pbmcoY2hpbGQsIGNoaWxkcmVuKTtcblxuICByZXR1cm4gcmVtYWluaW5nQ2hpbGRyZW4ucmVkdWNlKChyZWZlcmVuY2UsIHJlbWFpbmluZ0NoaWxkKSA9PiB7XG4gICAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgcmVtYWluaW5nQ2hpbGRET01FbGVtZW50ID0gcmVtYWluaW5nQ2hpbGQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgICBpZiAocmVtYWluaW5nQ2hpbGRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJlZmVyZW5jZSA9IHJlbWFpbmluZ0NoaWxkOyAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gbnVsbDtcblxuICAgICAgICBwYXJlbnQgPSByZW1haW5pbmdDaGlsZDsgIC8vL1xuXG4gICAgICAgIHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfSwgbnVsbCk7XG59XG4iXX0=