"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _react = /*#__PURE__*/ _interop_require_default(require("../../react"));
var _comment = /*#__PURE__*/ _interop_require_default(require("./comment"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var createClass = _react.default.createClass;
var CommentsList = createClass({
    getInitialState: function getInitialState() {
        var messages = [
            "Hello, world!",
            "Hello world again..."
        ], state = {
            messages: messages
        };
        return state;
    },
    componentDidMount: function componentDidMount() {
        console.log("Comments list mounted.");
    },
    render: function render(update) {
        var messages = this.getState().messages, comments = messages.map(function(message) {
            return /*#__PURE__*/ _react.default.createElement(_comment.default, {
                message: message
            });
        });
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "comments-list"
        }, comments);
    }
});
var _default = CommentsList;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZhbmlsbGFBcHAvY29tbWVudHNMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcIi4uLy4uL3JlYWN0XCI7XG5cbmltcG9ydCBDb21tZW50IGZyb20gXCIuL2NvbW1lbnRcIjtcblxuY29uc3QgeyBjcmVhdGVDbGFzcyB9ID0gUmVhY3Q7XG5cbmNvbnN0IENvbW1lbnRzTGlzdCA9IGNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gW1xuICAgICAgICAgICAgXCJIZWxsbywgd29ybGQhXCIsXG4gICAgICAgICAgICBcIkhlbGxvIHdvcmxkIGFnYWluLi4uXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgbWVzc2FnZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhcIkNvbW1lbnRzIGxpc3QgbW91bnRlZC5cIilcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKHVwZGF0ZSkge1xuICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICBjb21tZW50cyA9IG1lc3NhZ2VzLm1hcCgobWVzc2FnZSkgPT5cblxuICAgICAgICAgICAgPENvbW1lbnQgbWVzc2FnZT17bWVzc2FnZX0gLz5cblxuICAgICAgICAgICk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRzLWxpc3RcIj5cbiAgICAgICAge2NvbW1lbnRzfVxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudHNMaXN0O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNsYXNzIiwiUmVhY3QiLCJDb21tZW50c0xpc3QiLCJnZXRJbml0aWFsU3RhdGUiLCJtZXNzYWdlcyIsInN0YXRlIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwidXBkYXRlIiwiZ2V0U3RhdGUiLCJjb21tZW50cyIsIm1hcCIsIm1lc3NhZ2UiLCJDb21tZW50IiwiZGl2IiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEyQ0E7OztlQUFBOzs7NERBekNrQjs4REFFRTs7Ozs7O0FBRXBCLElBQU0sQUFBRUEsY0FBZ0JDLGNBQUssQ0FBckJEO0FBRVIsSUFBTUUsZUFBZUYsWUFBWTtJQUMvQkcsaUJBQUFBLFNBQUFBO1FBQ0UsSUFBTUMsV0FBVztZQUNUO1lBQ0E7U0FDRCxFQUNEQyxRQUFRO1lBQ05ELFVBQUFBO1FBQ0Y7UUFFTixPQUFPQztJQUNUO0lBRUFDLG1CQUFtQixTQUFuQkE7UUFDRUMsUUFBUUMsR0FBRyxDQUFDO0lBQ2Q7SUFFQUMsUUFBUSxTQUFSQSxPQUFpQkMsTUFBTTtRQUNyQixJQUFNLEFBQUVOLFdBQWEsSUFBSSxDQUFDTyxRQUFRLEdBQTFCUCxVQUNGUSxXQUFXUixTQUFTUyxHQUFHLENBQUMsU0FBQ0M7aUNBRXZCLDZCQUFDQyxnQkFBTztnQkFBQ0QsU0FBU0E7OztRQUkxQixxQkFFRSw2QkFBQ0U7WUFBSUMsV0FBVTtXQUNaTDtJQUlQO0FBQ0Y7SUFFQSxXQUFlViJ9