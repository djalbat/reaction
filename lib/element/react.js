"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

Object.assign(ReactElement, _reactElement["default"]);
var _default = ReactElement;
exports["default"] = _default;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0LmpzIl0sIm5hbWVzIjpbIlJlYWN0RWxlbWVudCIsInByb3BzIiwic3RhdGUiLCJ1bmRlZmluZWQiLCJjb250ZXh0IiwicGFyZW50IiwicmVmZXJlbmNlIiwiY2hpbGRDb250ZXh0IiwiZ2V0Q2hpbGRDb250ZXh0IiwiY2hpbGRyZW4iLCJyZW5kZXIiLCJmb3JFYWNoIiwiY2hpbGQiLCJjaGlsZFBhcmVudCIsImNoaWxkUmVmZXJlbmNlIiwibW91bnQiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0Q2hpbGRyZW4iLCJ1bm1vdW50IiwidXBkYXRlIiwiZ2V0Q2hpbGRSZWZlcmVuY2UiLCJpbml0aWFsU3RhdGUiLCJyZW1vdW50IiwibmV3U3RhdGUiLCJvbGRTdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsImdldFBhcmVudCIsIkVsZW1lbnQiLCJyZWFjdEVsZW1lbnRNaXhpbnMiLCJmaW5kUmVmZXJlbmNlIiwicGFyZW50RE9NRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJyZW1haW5pbmdDaGlsZHJlbiIsInJlZHVjZSIsInJlbWFpbmluZ0NoaWxkIiwicmVtYWluaW5nQ2hpbGRET01FbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsWTs7Ozs7QUFDSix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUVBLFVBQUtDLEtBQUwsR0FBYUMsU0FBYixDQUhpQixDQUdPOztBQUV4QixVQUFLQyxPQUFMLEdBQWVELFNBQWYsQ0FMaUIsQ0FLUzs7QUFMVDtBQU1sQjs7OzswQkFFS0UsTSxFQUFRQyxTLEVBQVdGLE8sRUFBUztBQUFBOztBQUNoQyxXQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFFQSxVQUFNRyxZQUFZLEdBQUcsS0FBS0MsZUFBTCxDQUFxQkosT0FBckIsQ0FBckI7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LElBQUFBLEtBQUssR0FBR1AsTUFBUixDQUQwRCxDQUMxQzs7QUFFaEJBLElBQUFBLE1BQU0sR0FBR0EsTUFBTSxDQUFDdUIsU0FBUCxFQUFUO0FBRUF0QixJQUFBQSxTQUFTLEdBQUd5QixhQUFhLENBQUMxQixNQUFELEVBQVNPLEtBQVQsQ0FBekI7QUFFQW9CLElBQUFBLGdCQUFnQixHQUFHM0IsTUFBTSxDQUFDNEIsYUFBUCxFQUFuQjtBQUNEOztBQUVELFNBQU8zQixTQUFQO0FBQ0Q7O0FBRUQsU0FBU3lCLGFBQVQsQ0FBdUIxQixNQUF2QixFQUErQk8sS0FBL0IsRUFBc0M7QUFDcEMsTUFBTUgsUUFBUSxHQUFHSixNQUFNLENBQUNhLFdBQVAsRUFBakI7QUFBQSxNQUNNZ0IsaUJBQWlCLEdBQUcsc0JBQVV0QixLQUFWLEVBQWlCSCxRQUFqQixDQUQxQjtBQUdBLFNBQU95QixpQkFBaUIsQ0FBQ0MsTUFBbEIsQ0FBeUIsVUFBQzdCLFNBQUQsRUFBWThCLGNBQVosRUFBK0I7QUFDN0QsUUFBSTlCLFNBQVMsS0FBSyxJQUFsQixFQUF3QjtBQUN0QixVQUFNK0Isd0JBQXdCLEdBQUdELGNBQWMsQ0FBQ0gsYUFBZixFQUFqQzs7QUFFQSxVQUFJSSx3QkFBd0IsS0FBSyxJQUFqQyxFQUF1QztBQUNyQy9CLFFBQUFBLFNBQVMsR0FBRzhCLGNBQVosQ0FEcUMsQ0FDVDtBQUM3QixPQUZELE1BRU87QUFDTHhCLFFBQUFBLEtBQUssR0FBRyxJQUFSO0FBRUFQLFFBQUFBLE1BQU0sR0FBRytCLGNBQVQsQ0FISyxDQUdxQjs7QUFFMUI5QixRQUFBQSxTQUFTLEdBQUd5QixhQUFhLENBQUMxQixNQUFELEVBQVNPLEtBQVQsQ0FBekI7QUFDRDtBQUNGOztBQUVELFdBQU9OLFNBQVA7QUFDRCxHQWhCTSxFQWdCSixJQWhCSSxDQUFQO0FBaUJEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmltcG9ydCByZWFjdEVsZW1lbnRNaXhpbnMgZnJvbSBcIi4uL21peGlucy9yZWFjdEVsZW1lbnRcIjtcblxuaW1wb3J0IHsgZ3VhcmFudGVlLCByZW1haW5pbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNsYXNzIFJlYWN0RWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgICB0aGlzLnN0YXRlID0gdW5kZWZpbmVkOyAvLy9cblxuICAgIHRoaXMuY29udGV4dCA9IHVuZGVmaW5lZDsgLy8vXG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dChjb250ZXh0KSxcbiAgICAgICAgICBjaGlsZHJlbiA9IGd1YXJhbnRlZSh0aGlzLnJlbmRlcigpKTtcblxuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgY2hpbGRyZW4pO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuXG4gICAgICBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCksXG4gICAgICAgICAgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpKTtcblxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIHJlbW91bnQodXBkYXRlKSB7XG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gdGhpcy5nZXRDaGlsZFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KHRoaXMuY29udGV4dCk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCkpO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IGd1YXJhbnRlZSh0aGlzLnJlbmRlcih1cGRhdGUpKTtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KSk7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0U3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTsgIC8vL1xuICB9XG5cbiAgc2V0U3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICB0aGlzLnJlbW91bnQoKTtcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlKG5ld1N0YXRlKSB7XG4gICAgY29uc3Qgb2xkU3RhdGUgPSB0aGlzLnN0YXRlOyAgLy8vXG5cbiAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbihvbGRTdGF0ZSwgbmV3U3RhdGUpO1xuXG4gICAgdGhpcy5yZW1vdW50KCk7XG4gIH1cblxuICBmb3JjZVVwZGF0ZSh1cGRhdGUpIHtcbiAgICB0aGlzLnJlbW91bnQodXBkYXRlKTtcbiAgfVxuXG4gIGdldENoaWxkUmVmZXJlbmNlKCkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZ2V0UGFyZW50KCksXG4gICAgICAgICAgY2hpbGQgPSB0aGlzOyAvLy9cblxuICAgIHJldHVybiByZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihSZWFjdEVsZW1lbnQsIHJlYWN0RWxlbWVudE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0RWxlbWVudDtcblxuZnVuY3Rpb24gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpIHtcbiAgbGV0IHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCksXG4gICAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcblxuICB3aGlsZSAoKHJlZmVyZW5jZSA9PT0gbnVsbCkgJiYgKHBhcmVudERPTUVsZW1lbnQgPT09IG51bGwpKSB7XG4gICAgY2hpbGQgPSBwYXJlbnQ7IC8vL1xuXG4gICAgcGFyZW50ID0gcGFyZW50LmdldFBhcmVudCgpO1xuXG4gICAgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmdldENoaWxkcmVuKCksXG4gICAgICAgIHJlbWFpbmluZ0NoaWxkcmVuID0gcmVtYWluaW5nKGNoaWxkLCBjaGlsZHJlbik7XG5cbiAgcmV0dXJuIHJlbWFpbmluZ0NoaWxkcmVuLnJlZHVjZSgocmVmZXJlbmNlLCByZW1haW5pbmdDaGlsZCkgPT4ge1xuICAgIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCA9IHJlbWFpbmluZ0NoaWxkLmdldERPTUVsZW1lbnQoKTtcblxuICAgICAgaWYgKHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2UgPSByZW1haW5pbmdDaGlsZDsgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IG51bGw7XG5cbiAgICAgICAgcGFyZW50ID0gcmVtYWluaW5nQ2hpbGQ7ICAvLy9cblxuICAgICAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH0sIG51bGwpO1xufVxuIl19