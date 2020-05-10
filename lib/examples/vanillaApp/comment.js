"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("../../react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Comment = _react["default"].createClass({
  render: function render() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "comment"
    }, /*#__PURE__*/_react["default"].createElement("p", null, this.props.message));
  },
  componentDidMount: function componentDidMount() {
    var message = this.props.message;
    console.log("Comment mounted with message: " + message);
  },
  componentWillUnmount: function componentWillUnmount() {
    var message = this.props.message;
    console.log("Comment unmounted with message: " + message);
  }
});

var _default = Comment;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnQuanMiXSwibmFtZXMiOlsiQ29tbWVudCIsIlJlYWN0IiwiY3JlYXRlQ2xhc3MiLCJyZW5kZXIiLCJwcm9wcyIsIm1lc3NhZ2UiLCJjb21wb25lbnREaWRNb3VudCIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnRXaWxsVW5tb3VudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7OztBQUVBLElBQU1BLE9BQU8sR0FBR0Msa0JBQU1DLFdBQU4sQ0FBa0I7QUFDaENDLEVBQUFBLE1BQU0sRUFBRSxrQkFBVztBQUNqQix3QkFFRTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsb0JBQ0UsMkNBQ0csS0FBS0MsS0FBTCxDQUFXQyxPQURkLENBREYsQ0FGRjtBQVNELEdBWCtCO0FBYWhDQyxFQUFBQSxpQkFBaUIsRUFBRSw2QkFBVztBQUM1QixRQUFNRCxPQUFPLEdBQUcsS0FBS0QsS0FBTCxDQUFXQyxPQUEzQjtBQUVBRSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQ0FBbUNILE9BQS9DO0FBQ0QsR0FqQitCO0FBbUJoQ0ksRUFBQUEsb0JBQW9CLEVBQUUsZ0NBQVc7QUFDL0IsUUFBTUosT0FBTyxHQUFHLEtBQUtELEtBQUwsQ0FBV0MsT0FBM0I7QUFFQUUsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkscUNBQXFDSCxPQUFqRDtBQUNEO0FBdkIrQixDQUFsQixDQUFoQjs7ZUEwQmVMLE8iLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCIuLi8uLi9yZWFjdFwiO1xuXG5jb25zdCBDb21tZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudFwiPlxuICAgICAgICA8cD5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5tZXNzYWdlfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLnByb3BzLm1lc3NhZ2U7XG5cbiAgICBjb25zb2xlLmxvZyhcIkNvbW1lbnQgbW91bnRlZCB3aXRoIG1lc3NhZ2U6IFwiICsgbWVzc2FnZSlcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHRoaXMucHJvcHMubWVzc2FnZTtcblxuICAgIGNvbnNvbGUubG9nKFwiQ29tbWVudCB1bm1vdW50ZWQgd2l0aCBtZXNzYWdlOiBcIiArIG1lc3NhZ2UpXG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50O1xuIl19