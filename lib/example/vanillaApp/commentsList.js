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
const _index = require("../../index");
const _commentItem = /*#__PURE__*/ _interop_require_default(require("./commentItem"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { createClass } = _index.React;
const CommentsList = createClass({
    getInitialState () {
        const messages = [
            "Hello, world!",
            "Hello world again..."
        ], state = {
            messages
        };
        return state;
    },
    componentDidMount: function() {
        console.log("Comments list mounted.");
    },
    render: function(update) {
        const { messages } = this.getState(), commentItems = messages.map((message)=>/*#__PURE__*/ _index.React.createElement(_commentItem.default, {
                message: message
            }));
        return /*#__PURE__*/ _index.React.createElement("ul", {
            className: "comments"
        }, commentItems);
    }
});
const _default = CommentsList;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZhbmlsbGFBcHAvY29tbWVudHNMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDb21tZW50SXRlbSBmcm9tIFwiLi9jb21tZW50SXRlbVwiO1xuXG5jb25zdCB7IGNyZWF0ZUNsYXNzIH0gPSBSZWFjdDtcblxuY29uc3QgQ29tbWVudHNMaXN0ID0gY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBbXG4gICAgICAgICAgICBcIkhlbGxvLCB3b3JsZCFcIixcbiAgICAgICAgICAgIFwiSGVsbG8gd29ybGQgYWdhaW4uLi5cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICBtZXNzYWdlc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKFwiQ29tbWVudHMgbGlzdCBtb3VudGVkLlwiKVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24odXBkYXRlKSB7XG4gICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIGNvbW1lbnRJdGVtcyA9IG1lc3NhZ2VzLm1hcCgobWVzc2FnZSkgPT5cblxuICAgICAgICAgICAgPENvbW1lbnRJdGVtIG1lc3NhZ2U9e21lc3NhZ2V9IC8+XG5cbiAgICAgICAgICApO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPHVsIGNsYXNzTmFtZT1cImNvbW1lbnRzXCI+XG4gICAgICAgIHtjb21tZW50SXRlbXN9XG4gICAgICA8L3VsPlxuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRzTGlzdDtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGFzcyIsIlJlYWN0IiwiQ29tbWVudHNMaXN0IiwiZ2V0SW5pdGlhbFN0YXRlIiwibWVzc2FnZXMiLCJzdGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwiY29uc29sZSIsImxvZyIsInJlbmRlciIsInVwZGF0ZSIsImdldFN0YXRlIiwiY29tbWVudEl0ZW1zIiwibWFwIiwibWVzc2FnZSIsIkNvbW1lbnRJdGVtIiwidWwiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTJDQTs7O2VBQUE7Ozt1QkF6Q3NCO29FQUVFOzs7Ozs7QUFFeEIsTUFBTSxFQUFFQSxXQUFXLEVBQUUsR0FBR0MsWUFBSztBQUU3QixNQUFNQyxlQUFlRixZQUFZO0lBQy9CRztRQUNFLE1BQU1DLFdBQVc7WUFDVDtZQUNBO1NBQ0QsRUFDREMsUUFBUTtZQUNORDtRQUNGO1FBRU4sT0FBT0M7SUFDVDtJQUVBQyxtQkFBbUI7UUFDakJDLFFBQVFDLEdBQUcsQ0FBQztJQUNkO0lBRUFDLFFBQVEsU0FBU0MsTUFBTTtRQUNyQixNQUFNLEVBQUVOLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQ08sUUFBUSxJQUM1QkMsZUFBZVIsU0FBU1MsR0FBRyxDQUFDLENBQUNDLHdCQUUzQiwyQkFBQ0Msb0JBQVc7Z0JBQUNELFNBQVNBOztRQUk5QixxQkFFRSwyQkFBQ0U7WUFBR0MsV0FBVTtXQUNYTDtJQUlQO0FBQ0Y7TUFFQSxXQUFlViJ9