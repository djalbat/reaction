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
      return _react["default"].createElement(_comment["default"], {
        message: message
      });
    });
    return _react["default"].createElement("div", {
      className: "comments-list"
    }, comments);
  }
});

var _default = CommentsList;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzTGlzdC5qcyJdLCJuYW1lcyI6WyJDb21tZW50c0xpc3QiLCJSZWFjdCIsImNyZWF0ZUNsYXNzIiwiZ2V0SW5pdGlhbFN0YXRlIiwibWVzc2FnZXMiLCJzdGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwiY29uc29sZSIsImxvZyIsInJlbmRlciIsInVwZGF0ZSIsImdldFN0YXRlIiwiY29tbWVudHMiLCJtYXAiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHQyxrQkFBTUMsV0FBTixDQUFrQjtBQUNyQ0MsRUFBQUEsZUFEcUMsNkJBQ25CO0FBQ2hCLFFBQU1DLFFBQVEsR0FBRyxDQUNULGVBRFMsRUFFVCxzQkFGUyxDQUFqQjtBQUFBLFFBSU1DLEtBQUssR0FBRztBQUNORCxNQUFBQSxRQUFRLEVBQVJBO0FBRE0sS0FKZDtBQVFBLFdBQU9DLEtBQVA7QUFDRCxHQVhvQztBQWFyQ0MsRUFBQUEsaUJBQWlCLEVBQUUsNkJBQVc7QUFDNUJDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaO0FBQ0QsR0Fmb0M7QUFpQnJDQyxFQUFBQSxNQUFNLEVBQUUsZ0JBQVNDLE1BQVQsRUFBaUI7QUFDakIsUUFBQUwsS0FBSyxHQUFHLEtBQUtNLFFBQUwsRUFBUjtBQUFBLFFBQ0VQLFFBREYsR0FDZUMsS0FEZixDQUNFRCxRQURGO0FBQUEsUUFFQVEsUUFGQSxHQUVXUixRQUFRLENBQUNTLEdBQVQsQ0FBYSxVQUFDQyxPQUFEO0FBQUEsYUFFdEIsZ0NBQUMsbUJBQUQ7QUFBUyxRQUFBLE9BQU8sRUFBRUE7QUFBbEIsUUFGc0I7QUFBQSxLQUFiLENBRlg7QUFRTixXQUVFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixPQUNHRixRQURILENBRkY7QUFPRDtBQWpDb0MsQ0FBbEIsQ0FBckI7O2VBb0NlWixZIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwiLi4vLi4vcmVhY3RcIjtcblxuaW1wb3J0IENvbW1lbnQgZnJvbSBcIi4vY29tbWVudFwiO1xuXG5jb25zdCBDb21tZW50c0xpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IFtcbiAgICAgICAgICAgIFwiSGVsbG8sIHdvcmxkIVwiLFxuICAgICAgICAgICAgXCJIZWxsbyB3b3JsZCBhZ2Fpbi4uLlwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2VzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBzdGF0ZTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coXCJDb21tZW50cyBsaXN0IG1vdW50ZWQuXCIpXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbih1cGRhdGUpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IG1lc3NhZ2VzIH0gPSBzdGF0ZSxcbiAgICAgICAgICBjb21tZW50cyA9IG1lc3NhZ2VzLm1hcCgobWVzc2FnZSkgPT5cblxuICAgICAgICAgICAgPENvbW1lbnQgbWVzc2FnZT17bWVzc2FnZX0gLz5cblxuICAgICAgICAgICk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRzLWxpc3RcIj5cbiAgICAgICAge2NvbW1lbnRzfVxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudHNMaXN0O1xuIl19