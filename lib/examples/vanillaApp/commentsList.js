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
  render: function render(update) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzTGlzdC5qcyJdLCJuYW1lcyI6WyJDb21tZW50c0xpc3QiLCJSZWFjdCIsImNyZWF0ZUNsYXNzIiwiZ2V0SW5pdGlhbFN0YXRlIiwibWVzc2FnZXMiLCJzdGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwiY29uc29sZSIsImxvZyIsInJlbmRlciIsInVwZGF0ZSIsImdldFN0YXRlIiwiY29tbWVudHMiLCJtYXAiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHQyxrQkFBTUMsV0FBTixDQUFrQjtBQUNyQ0MsRUFBQUEsZUFEcUMsNkJBQ25CO0FBQ2hCLFFBQU1DLFFBQVEsR0FBRyxDQUNULGVBRFMsRUFFVCxzQkFGUyxDQUFqQjtBQUFBLFFBSU1DLEtBQUssR0FBRztBQUNORCxNQUFBQSxRQUFRLEVBQVJBO0FBRE0sS0FKZDtBQVFBLFdBQU9DLEtBQVA7QUFDRCxHQVhvQztBQWFyQ0MsRUFBQUEsaUJBQWlCLEVBQUUsNkJBQVc7QUFDNUJDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaO0FBQ0QsR0Fmb0M7QUFpQnJDQyxFQUFBQSxNQUFNLEVBQUUsZ0JBQVNDLE1BQVQsRUFBaUI7QUFDakIsUUFBQUwsS0FBSyxHQUFHLEtBQUtNLFFBQUwsRUFBUjtBQUFBLFFBQ0VQLFFBREYsR0FDZUMsS0FEZixDQUNFRCxRQURGO0FBQUEsUUFFQVEsUUFGQSxHQUVXUixRQUFRLENBQUNTLEdBQVQsQ0FBYSxVQUFDQyxPQUFEO0FBQUEsMEJBRXRCLGdDQUFDLG1CQUFEO0FBQVMsUUFBQSxPQUFPLEVBQUVBO0FBQWxCLFFBRnNCO0FBQUEsS0FBYixDQUZYO0FBUU4sd0JBRUU7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLE9BQ0dGLFFBREgsQ0FGRjtBQU9EO0FBakNvQyxDQUFsQixDQUFyQjs7ZUFvQ2VaLFkiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCIuLi8uLi9yZWFjdFwiO1xuXG5pbXBvcnQgQ29tbWVudCBmcm9tIFwiLi9jb21tZW50XCI7XG5cbmNvbnN0IENvbW1lbnRzTGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gW1xuICAgICAgICAgICAgXCJIZWxsbywgd29ybGQhXCIsXG4gICAgICAgICAgICBcIkhlbGxvIHdvcmxkIGFnYWluLi4uXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgbWVzc2FnZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhcIkNvbW1lbnRzIGxpc3QgbW91bnRlZC5cIilcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKHVwZGF0ZSkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgbWVzc2FnZXMgfSA9IHN0YXRlLFxuICAgICAgICAgIGNvbW1lbnRzID0gbWVzc2FnZXMubWFwKChtZXNzYWdlKSA9PlxuXG4gICAgICAgICAgICA8Q29tbWVudCBtZXNzYWdlPXttZXNzYWdlfSAvPlxuXG4gICAgICAgICAgKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudHMtbGlzdFwiPlxuICAgICAgICB7Y29tbWVudHN9XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50c0xpc3Q7XG4iXX0=