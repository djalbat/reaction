"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("../../react"));
var _comment = _interopRequireDefault(require("./comment"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var CommentsList = _react.default.createClass({
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
        var state = this.getState(), messages = state.messages, comments = messages.map(function(message) {
            /*#__PURE__*/ return _react.default.createElement(_comment.default, {
                message: message
            });
        });
        return(/*#__PURE__*/ _react.default.createElement("div", {
            className: "comments-list"
        }, comments));
    },
    displayName: "CommentsList"
});
var _default = CommentsList;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZhbmlsbGFBcHAvY29tbWVudHNMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcIi4uLy4uL3JlYWN0XCI7XG5cbmltcG9ydCBDb21tZW50IGZyb20gXCIuL2NvbW1lbnRcIjtcblxuY29uc3QgQ29tbWVudHNMaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBbXG4gICAgICAgICAgICBcIkhlbGxvLCB3b3JsZCFcIixcbiAgICAgICAgICAgIFwiSGVsbG8gd29ybGQgYWdhaW4uLi5cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICBtZXNzYWdlc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKFwiQ29tbWVudHMgbGlzdCBtb3VudGVkLlwiKVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24odXBkYXRlKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBtZXNzYWdlcyB9ID0gc3RhdGUsXG4gICAgICAgICAgY29tbWVudHMgPSBtZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+XG5cbiAgICAgICAgICAgIDxDb21tZW50IG1lc3NhZ2U9e21lc3NhZ2V9IC8+XG5cbiAgICAgICAgICApO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50cy1saXN0XCI+XG4gICAgICAgIHtjb21tZW50c31cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRzTGlzdDtcbiJdLCJuYW1lcyI6WyJDb21tZW50c0xpc3QiLCJjcmVhdGVDbGFzcyIsImdldEluaXRpYWxTdGF0ZSIsIm1lc3NhZ2VzIiwic3RhdGUiLCJjb21wb25lbnREaWRNb3VudCIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXIiLCJ1cGRhdGUiLCJnZXRTdGF0ZSIsImNvbW1lbnRzIiwibWFwIiwibWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFTSxHQUFhLENBQWIsTUFBYTtBQUVYLEdBQVcsQ0FBWCxRQUFXOzs7Ozs7QUFFL0IsR0FBSyxDQUFDQSxZQUFZLEdBSkEsTUFBYSxTQUlKQyxXQUFXLENBQUMsQ0FBQztJQUN0Q0MsZUFBZSxFQUFmQSxRQUFRLENBQVJBLGVBQWUsR0FBRyxDQUFDO1FBQ2pCLEdBQUssQ0FBQ0MsUUFBUSxHQUFHLENBQUM7WUFDVixDQUFlO1lBQ2YsQ0FBc0I7UUFDeEIsQ0FBQyxFQUNEQyxLQUFLLEdBQUcsQ0FBQztZQUNQRCxRQUFRLEVBQVJBLFFBQVE7UUFDVixDQUFDO1FBRVAsTUFBTSxDQUFDQyxLQUFLO0lBQ2QsQ0FBQztJQUVEQyxpQkFBaUIsRUFBRSxRQUFRLENBQTNCQSxpQkFBaUIsR0FBYSxDQUFDO1FBQzdCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUF3QjtJQUN0QyxDQUFDO0lBRURDLE1BQU0sRUFBRSxRQUFRLENBQWhCQSxNQUFNLENBQVdDLE1BQU0sRUFBRSxDQUFDO1FBQ3hCLEdBQUssQ0FBQ0wsS0FBSyxHQUFHLElBQUksQ0FBQ00sUUFBUSxJQUNuQlAsUUFBUSxHQUFLQyxLQUFLLENBQWxCRCxRQUFRLEVBQ1ZRLFFBQVEsR0FBR1IsUUFBUSxDQUFDUyxHQUFHLENBQUMsUUFBUSxDQUFQQyxPQUFPOzBCQUU5QixNQUFNLENBMUJBLE1BQWEsdUJBRVgsUUFBVztnQkF3QlZBLE9BQU8sRUFBRUEsT0FBTzs7O1FBSWpDLE1BQU0sZUE5QlEsTUFBYSx1QkFnQ3hCQyxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFlO1dBQzNCSixRQUFRO0lBSWYsQ0FBQztpQkFqQ0dYLENBQVk7QUFrQ2xCLENBQUM7ZUFFY0EsWUFBWSJ9