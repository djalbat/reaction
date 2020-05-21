"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("../../react"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Comment = _react["default"].createClass({
  render: function render() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "comment"
    }, /*#__PURE__*/_react["default"].createElement("p", null, _this.props.message));
  },
  componentDidMount: function componentDidMount() {
    var message = _this.props.message;
    console.log("Comment mounted with message: " + message);
  },
  componentWillUnmount: function componentWillUnmount() {
    var message = _this.props.message;
    console.log("Comment unmounted with message: " + message);
  }
});

var _default = Comment;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnQuanMiXSwibmFtZXMiOlsiQ29tbWVudCIsIlJlYWN0IiwiY3JlYXRlQ2xhc3MiLCJyZW5kZXIiLCJwcm9wcyIsIm1lc3NhZ2UiLCJjb21wb25lbnREaWRNb3VudCIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnRXaWxsVW5tb3VudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHQyxrQkFBTUMsV0FBTixDQUFrQjtBQUNoQ0MsRUFBQUEsTUFBTSxFQUFFLGtCQUFNO0FBQ1osd0JBRUU7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLG9CQUNFLDJDQUNHLEtBQUksQ0FBQ0MsS0FBTCxDQUFXQyxPQURkLENBREYsQ0FGRjtBQVNELEdBWCtCO0FBYWhDQyxFQUFBQSxpQkFBaUIsRUFBRSw2QkFBTTtBQUN2QixRQUFNRCxPQUFPLEdBQUcsS0FBSSxDQUFDRCxLQUFMLENBQVdDLE9BQTNCO0FBRUFFLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1DQUFtQ0gsT0FBL0M7QUFDRCxHQWpCK0I7QUFtQmhDSSxFQUFBQSxvQkFBb0IsRUFBRSxnQ0FBTTtBQUMxQixRQUFNSixPQUFPLEdBQUcsS0FBSSxDQUFDRCxLQUFMLENBQVdDLE9BQTNCO0FBRUFFLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHFDQUFxQ0gsT0FBakQ7QUFDRDtBQXZCK0IsQ0FBbEIsQ0FBaEI7O2VBMEJlTCxPIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwiLi4vLi4vcmVhY3RcIjtcblxuY29uc3QgQ29tbWVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiAoKSA9PiB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIHt0aGlzLnByb3BzLm1lc3NhZ2V9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogKCkgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLnByb3BzLm1lc3NhZ2U7XG5cbiAgICBjb25zb2xlLmxvZyhcIkNvbW1lbnQgbW91bnRlZCB3aXRoIG1lc3NhZ2U6IFwiICsgbWVzc2FnZSlcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogKCkgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLnByb3BzLm1lc3NhZ2U7XG5cbiAgICBjb25zb2xlLmxvZyhcIkNvbW1lbnQgdW5tb3VudGVkIHdpdGggbWVzc2FnZTogXCIgKyBtZXNzYWdlKVxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudDtcbiJdfQ==