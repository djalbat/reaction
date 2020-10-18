"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("../../react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Comment = _react["default"].createClass({
  render: function render(update) {
    return _react["default"].createElement("div", {
      className: "comment"
    }, _react["default"].createElement("p", null, this.props.message));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnQuanMiXSwibmFtZXMiOlsiQ29tbWVudCIsIlJlYWN0IiwiY3JlYXRlQ2xhc3MiLCJyZW5kZXIiLCJ1cGRhdGUiLCJwcm9wcyIsIm1lc3NhZ2UiLCJjb21wb25lbnREaWRNb3VudCIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnRXaWxsVW5tb3VudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7OztBQUVBLElBQU1BLE9BQU8sR0FBR0Msa0JBQU1DLFdBQU4sQ0FBa0I7QUFDaENDLEVBQUFBLE1BQU0sRUFBRSxnQkFBU0MsTUFBVCxFQUFpQjtBQUN2QixXQUVFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixPQUNFLDJDQUNHLEtBQUtDLEtBQUwsQ0FBV0MsT0FEZCxDQURGLENBRkY7QUFTRCxHQVgrQjtBQWFoQ0MsRUFBQUEsaUJBQWlCLEVBQUUsNkJBQVc7QUFDNUIsUUFBTUQsT0FBTyxHQUFHLEtBQUtELEtBQUwsQ0FBV0MsT0FBM0I7QUFFQUUsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksbUNBQW1DSCxPQUEvQztBQUNELEdBakIrQjtBQW1CaENJLEVBQUFBLG9CQUFvQixFQUFFLGdDQUFXO0FBQy9CLFFBQU1KLE9BQU8sR0FBRyxLQUFLRCxLQUFMLENBQVdDLE9BQTNCO0FBRUFFLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHFDQUFxQ0gsT0FBakQ7QUFDRDtBQXZCK0IsQ0FBbEIsQ0FBaEI7O2VBMEJlTixPIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwiLi4vLi4vcmVhY3RcIjtcblxuY29uc3QgQ29tbWVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbih1cGRhdGUpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAge3RoaXMucHJvcHMubWVzc2FnZX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5wcm9wcy5tZXNzYWdlO1xuXG4gICAgY29uc29sZS5sb2coXCJDb21tZW50IG1vdW50ZWQgd2l0aCBtZXNzYWdlOiBcIiArIG1lc3NhZ2UpXG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLnByb3BzLm1lc3NhZ2U7XG5cbiAgICBjb25zb2xlLmxvZyhcIkNvbW1lbnQgdW5tb3VudGVkIHdpdGggbWVzc2FnZTogXCIgKyBtZXNzYWdlKVxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudDtcbiJdfQ==