"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("../../react"));

var _comment = _interopRequireDefault(require("./comment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CommentsList = _react["default"].createClass({
  getInitialState: function getInitialState() {
    var messages = ["Hello, world!", "Hello world again..."],
        state = {
      messages: messages
    };
    return state;
  },
  componentDidMount: function componentDidMount() {
    console.log("Comments list mounted.");
  },
  render: function render() {
    var state = this.getState(),
        messages = state.messages,
        comments = messages.map(function (message) {
      return /*#__PURE__*/_react["default"].createElement(_comment["default"], {
        message: message
      });
    });
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "comments-list"
    }, comments);
  }
});

var _default = CommentsList;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzTGlzdC5qcyJdLCJuYW1lcyI6WyJDb21tZW50c0xpc3QiLCJSZWFjdCIsImNyZWF0ZUNsYXNzIiwiZ2V0SW5pdGlhbFN0YXRlIiwibWVzc2FnZXMiLCJzdGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwiY29uc29sZSIsImxvZyIsInJlbmRlciIsImdldFN0YXRlIiwiY29tbWVudHMiLCJtYXAiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHQyxrQkFBTUMsV0FBTixDQUFrQjtBQUNyQ0MsRUFBQUEsZUFEcUMsNkJBQ25CO0FBQ2hCLFFBQU1DLFFBQVEsR0FBRyxDQUNULGVBRFMsRUFFVCxzQkFGUyxDQUFqQjtBQUFBLFFBSU1DLEtBQUssR0FBRztBQUNORCxNQUFBQSxRQUFRLEVBQVJBO0FBRE0sS0FKZDtBQVFBLFdBQU9DLEtBQVA7QUFDRCxHQVhvQztBQWFyQ0MsRUFBQUEsaUJBQWlCLEVBQUUsNkJBQVc7QUFDNUJDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaO0FBQ0QsR0Fmb0M7QUFpQnJDQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVc7QUFDWCxRQUFBSixLQUFLLEdBQUcsS0FBS0ssUUFBTCxFQUFSO0FBQUEsUUFDRU4sUUFERixHQUNlQyxLQURmLENBQ0VELFFBREY7QUFBQSxRQUVBTyxRQUZBLEdBRVdQLFFBQVEsQ0FBQ1EsR0FBVCxDQUFhLFVBQUNDLE9BQUQ7QUFBQSwwQkFFdEIsZ0NBQUMsbUJBQUQ7QUFBUyxRQUFBLE9BQU8sRUFBRUE7QUFBbEIsUUFGc0I7QUFBQSxLQUFiLENBRlg7QUFRTix3QkFFRTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsT0FDR0YsUUFESCxDQUZGO0FBT0Q7QUFqQ29DLENBQWxCLENBQXJCOztlQW9DZVgsWSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcIi4uLy4uL3JlYWN0XCI7XG5cbmltcG9ydCBDb21tZW50IGZyb20gXCIuL2NvbW1lbnRcIjtcblxuY29uc3QgQ29tbWVudHNMaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBbXG4gICAgICAgICAgICBcIkhlbGxvLCB3b3JsZCFcIixcbiAgICAgICAgICAgIFwiSGVsbG8gd29ybGQgYWdhaW4uLi5cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICBtZXNzYWdlc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKFwiQ29tbWVudHMgbGlzdCBtb3VudGVkLlwiKVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBtZXNzYWdlcyB9ID0gc3RhdGUsXG4gICAgICAgICAgY29tbWVudHMgPSBtZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+XG5cbiAgICAgICAgICAgIDxDb21tZW50IG1lc3NhZ2U9e21lc3NhZ2V9IC8+XG5cbiAgICAgICAgICApO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50cy1saXN0XCI+XG4gICAgICAgIHtjb21tZW50c31cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRzTGlzdDtcbiJdfQ==