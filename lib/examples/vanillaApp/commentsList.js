"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("../../react"));

var _comment = _interopRequireDefault(require("./comment"));

var _this = void 0;

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
    var state = _this.getState(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzTGlzdC5qcyJdLCJuYW1lcyI6WyJDb21tZW50c0xpc3QiLCJSZWFjdCIsImNyZWF0ZUNsYXNzIiwiZ2V0SW5pdGlhbFN0YXRlIiwibWVzc2FnZXMiLCJzdGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwiY29uc29sZSIsImxvZyIsInJlbmRlciIsImdldFN0YXRlIiwiY29tbWVudHMiLCJtYXAiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLGtCQUFNQyxXQUFOLENBQWtCO0FBQ3JDQyxFQUFBQSxlQURxQyw2QkFDbkI7QUFDaEIsUUFBTUMsUUFBUSxHQUFHLENBQ1QsZUFEUyxFQUVULHNCQUZTLENBQWpCO0FBQUEsUUFJTUMsS0FBSyxHQUFHO0FBQ05ELE1BQUFBLFFBQVEsRUFBUkE7QUFETSxLQUpkO0FBUUEsV0FBT0MsS0FBUDtBQUNELEdBWG9DO0FBYXJDQyxFQUFBQSxpQkFBaUIsRUFBRSw2QkFBTTtBQUN2QkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksd0JBQVo7QUFDRCxHQWZvQztBQWlCckNDLEVBQUFBLE1BQU0sRUFBRSxrQkFBTTtBQUNOLFFBQUFKLEtBQUssR0FBRyxLQUFJLENBQUNLLFFBQUwsRUFBUjtBQUFBLFFBQ0VOLFFBREYsR0FDZUMsS0FEZixDQUNFRCxRQURGO0FBQUEsUUFFQU8sUUFGQSxHQUVXUCxRQUFRLENBQUNRLEdBQVQsQ0FBYSxVQUFDQyxPQUFEO0FBQUEsMEJBRXRCLGdDQUFDLG1CQUFEO0FBQVMsUUFBQSxPQUFPLEVBQUVBO0FBQWxCLFFBRnNCO0FBQUEsS0FBYixDQUZYOztBQVFOLHdCQUVFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixPQUNHRixRQURILENBRkY7QUFPRDtBQWpDb0MsQ0FBbEIsQ0FBckI7O2VBb0NlWCxZIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwiLi4vLi4vcmVhY3RcIjtcblxuaW1wb3J0IENvbW1lbnQgZnJvbSBcIi4vY29tbWVudFwiO1xuXG5jb25zdCBDb21tZW50c0xpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IFtcbiAgICAgICAgICAgIFwiSGVsbG8sIHdvcmxkIVwiLFxuICAgICAgICAgICAgXCJIZWxsbyB3b3JsZCBhZ2Fpbi4uLlwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2VzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBzdGF0ZTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiQ29tbWVudHMgbGlzdCBtb3VudGVkLlwiKVxuICB9LFxuXG4gIHJlbmRlcjogKCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgbWVzc2FnZXMgfSA9IHN0YXRlLFxuICAgICAgICAgIGNvbW1lbnRzID0gbWVzc2FnZXMubWFwKChtZXNzYWdlKSA9PlxuXG4gICAgICAgICAgICA8Q29tbWVudCBtZXNzYWdlPXttZXNzYWdlfSAvPlxuXG4gICAgICAgICAgKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudHMtbGlzdFwiPlxuICAgICAgICB7Y29tbWVudHN9XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50c0xpc3Q7XG4iXX0=