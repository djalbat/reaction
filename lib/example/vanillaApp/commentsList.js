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
    getInitialState: function() {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZhbmlsbGFBcHAvY29tbWVudHNMaXN0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tbWVudCIsIkNvbW1lbnRzTGlzdCIsImNyZWF0ZUNsYXNzIiwiZ2V0SW5pdGlhbFN0YXRlIiwibWVzc2FnZXMiLCJzdGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwiY29uc29sZSIsImxvZyIsInJlbmRlciIsInVwZGF0ZSIsImdldFN0YXRlIiwiY29tbWVudHMiLCJtYXAiLCJtZXNzYWdlIiwiZGl2IiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVNLEdBQWEsQ0FBYixNQUFhO0FBRVgsR0FBVyxDQUFYLFFBQVc7Ozs7OztBQUUvQixHQUFLLENBQUMsWUFBWSxHQUpBLE1BQWEsU0FJSixXQUFXLENBQUMsQ0FBQztJQUN0QyxlQUFlLEVBQWYsUUFBUSxHQUFVLENBQUM7UUFDakIsR0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDO2FBQ1YsYUFBZTthQUNmLG9CQUFzQjtRQUN4QixDQUFDLEVBQ0QsS0FBSyxHQUFHLENBQUM7WUFDUCxRQUFRLEVBQVIsUUFBUTtRQUNWLENBQUM7UUFFUCxNQUFNLENBQUMsS0FBSztJQUNkLENBQUM7SUFFRCxpQkFBaUIsRUFBRSxRQUFRLENBQTNCLGlCQUFpQixHQUFhLENBQUM7UUFDN0IsT0FBTyxDQUFDLEdBQUcsRUFBQyxzQkFBd0I7SUFDdEMsQ0FBQztJQUVELE1BQU0sRUFBRSxRQUFRLENBQWhCLE1BQU0sQ0FBVyxNQUFNLEVBQUUsQ0FBQztRQUN4QixHQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLElBQ25CLFFBQVEsR0FBSyxLQUFLLENBQWxCLFFBQVEsRUFDVixRQUFRLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQVAsT0FBTzswQkFFOUIsTUFBTSxDQTFCQSxNQUFhLHVCQUVYLFFBQVc7Z0JBd0JWLE9BQU8sRUFBRSxPQUFPOzs7UUFJakMsTUFBTSxlQTlCUSxNQUFhLHdCQWdDeEIsR0FBRztZQUFDLFNBQVMsR0FBQyxhQUFlO1dBQzNCLFFBQVE7SUFJZixDQUFDO2tCQWpDRyxZQUFZO0FBa0NsQixDQUFDO2VBRWMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcIi4uLy4uL3JlYWN0XCI7XG5cbmltcG9ydCBDb21tZW50IGZyb20gXCIuL2NvbW1lbnRcIjtcblxuY29uc3QgQ29tbWVudHNMaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBbXG4gICAgICAgICAgICBcIkhlbGxvLCB3b3JsZCFcIixcbiAgICAgICAgICAgIFwiSGVsbG8gd29ybGQgYWdhaW4uLi5cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICBtZXNzYWdlc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKFwiQ29tbWVudHMgbGlzdCBtb3VudGVkLlwiKVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24odXBkYXRlKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBtZXNzYWdlcyB9ID0gc3RhdGUsXG4gICAgICAgICAgY29tbWVudHMgPSBtZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+XG5cbiAgICAgICAgICAgIDxDb21tZW50IG1lc3NhZ2U9e21lc3NhZ2V9IC8+XG5cbiAgICAgICAgICApO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50cy1saXN0XCI+XG4gICAgICAgIHtjb21tZW50c31cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRzTGlzdDtcbiJdfQ==