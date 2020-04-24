"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("../../element/react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ReactClassElement = /*#__PURE__*/function (_ReactElement) {
  _inherits(ReactClassElement, _ReactElement);

  var _super = _createSuper(ReactClassElement);

  function ReactClassElement(reactClass, props) {
    var _this;

    _classCallCheck(this, ReactClassElement);

    _this = _super.call(this, props);
    _this.reactClass = reactClass;

    var initialState = _this.getInitialState();

    _this.setInitialState(initialState);

    return _this;
  }

  _createClass(ReactClassElement, [{
    key: "render",
    value: function render(update) {
      return this.reactClass.render.call(this, update);
    }
  }, {
    key: "getInitialState",
    value: function getInitialState() {
      return this.reactClass.getInitialState.call(this);
    }
  }, {
    key: "getChildContext",
    value: function getChildContext(context) {
      return this.reactClass.getChildContext.call(this, context);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.reactClass.componentDidMount.call(this);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.reactClass.componentWillUnmount.call(this);
    }
  }]);

  return ReactClassElement;
}(_react["default"]);

exports["default"] = ReactClassElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzLmpzIl0sIm5hbWVzIjpbIlJlYWN0Q2xhc3NFbGVtZW50IiwicmVhY3RDbGFzcyIsInByb3BzIiwiaW5pdGlhbFN0YXRlIiwiZ2V0SW5pdGlhbFN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwidXBkYXRlIiwicmVuZGVyIiwiY2FsbCIsImNvbnRleHQiLCJnZXRDaGlsZENvbnRleHQiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiUmVhY3RFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsaUI7Ozs7O0FBQ25CLDZCQUFZQyxVQUFaLEVBQXdCQyxLQUF4QixFQUErQjtBQUFBOztBQUFBOztBQUM3Qiw4QkFBTUEsS0FBTjtBQUVBLFVBQUtELFVBQUwsR0FBa0JBLFVBQWxCOztBQUVBLFFBQU1FLFlBQVksR0FBRyxNQUFLQyxlQUFMLEVBQXJCOztBQUVBLFVBQUtDLGVBQUwsQ0FBcUJGLFlBQXJCOztBQVA2QjtBQVE5Qjs7OzsyQkFFTUcsTSxFQUFRO0FBQ2IsYUFBTyxLQUFLTCxVQUFMLENBQWdCTSxNQUFoQixDQUF1QkMsSUFBdkIsQ0FBNEIsSUFBNUIsRUFBa0NGLE1BQWxDLENBQVA7QUFDRDs7O3NDQUVpQjtBQUNoQixhQUFPLEtBQUtMLFVBQUwsQ0FBZ0JHLGVBQWhCLENBQWdDSSxJQUFoQyxDQUFxQyxJQUFyQyxDQUFQO0FBQ0Q7OztvQ0FFZUMsTyxFQUFTO0FBQ3ZCLGFBQU8sS0FBS1IsVUFBTCxDQUFnQlMsZUFBaEIsQ0FBZ0NGLElBQWhDLENBQXFDLElBQXJDLEVBQTJDQyxPQUEzQyxDQUFQO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsV0FBS1IsVUFBTCxDQUFnQlUsaUJBQWhCLENBQWtDSCxJQUFsQyxDQUF1QyxJQUF2QztBQUNEOzs7MkNBRXNCO0FBQ3JCLFdBQUtQLFVBQUwsQ0FBZ0JXLG9CQUFoQixDQUFxQ0osSUFBckMsQ0FBMEMsSUFBMUM7QUFDRDs7OztFQTdCNENLLGlCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdEVsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnQvcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RDbGFzc0VsZW1lbnQgZXh0ZW5kcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdENsYXNzLCBwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMucmVhY3RDbGFzcyA9IHJlYWN0Q2xhc3M7XG5cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB0aGlzLmdldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoaW5pdGlhbFN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENsYXNzLnJlbmRlci5jYWxsKHRoaXMsIHVwZGF0ZSk7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDbGFzcy5nZXRJbml0aWFsU3RhdGUuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDbGFzcy5nZXRDaGlsZENvbnRleHQuY2FsbCh0aGlzLCBjb250ZXh0KTtcbiAgfVxuICBcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENsYXNzLmNvbXBvbmVudERpZE1vdW50LmNhbGwodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q2xhc3MuY29tcG9uZW50V2lsbFVubW91bnQuY2FsbCh0aGlzKTtcbiAgfVxufVxuIl19