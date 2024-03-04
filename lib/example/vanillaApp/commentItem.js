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
var _index = require("../../index");
var createClass = _index.React.createClass;
var CommentItem = createClass({
    render: function render(update) {
        return /*#__PURE__*/ _index.React.createElement("li", {
            className: "comment"
        }, /*#__PURE__*/ _index.React.createElement("p", null, this.props.message));
    },
    componentDidMount: function componentDidMount() {
        var message = this.props.message;
        console.log("Comment item mounted with message: '".concat(message, "'."));
    },
    componentWillUnmount: function componentWillUnmount() {
        var message = this.props.message;
        console.log("Comment item unmounted with message: '".concat(message, "'."));
    }
});
var _default = CommentItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZhbmlsbGFBcHAvY29tbWVudEl0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuY29uc3QgeyBjcmVhdGVDbGFzcyB9ID0gUmVhY3Q7XG5cbmNvbnN0IENvbW1lbnRJdGVtID0gY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uKHVwZGF0ZSkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJjb21tZW50XCI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIHt0aGlzLnByb3BzLm1lc3NhZ2V9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG5cbiAgICApO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5wcm9wcy5tZXNzYWdlO1xuXG4gICAgY29uc29sZS5sb2coYENvbW1lbnQgaXRlbSBtb3VudGVkIHdpdGggbWVzc2FnZTogJyR7bWVzc2FnZX0nLmApXG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLnByb3BzLm1lc3NhZ2U7XG5cbiAgICBjb25zb2xlLmxvZyhgQ29tbWVudCBpdGVtIHVubW91bnRlZCB3aXRoIG1lc3NhZ2U6ICcke21lc3NhZ2V9Jy5gKVxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEl0ZW07XG4iXSwibmFtZXMiOlsiY3JlYXRlQ2xhc3MiLCJSZWFjdCIsIkNvbW1lbnRJdGVtIiwicmVuZGVyIiwidXBkYXRlIiwibGkiLCJjbGFzc05hbWUiLCJwIiwicHJvcHMiLCJtZXNzYWdlIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50V2lsbFVubW91bnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdDQTs7O2VBQUE7OztxQkE5QnNCO0FBRXRCLElBQU0sQUFBRUEsY0FBZ0JDLFlBQUssQ0FBckJEO0FBRVIsSUFBTUUsY0FBY0YsWUFBWTtJQUM5QkcsUUFBUSxTQUFSQSxPQUFpQkMsTUFBTTtRQUNyQixxQkFFRSwyQkFBQ0M7WUFBR0MsV0FBVTt5QkFDWiwyQkFBQ0MsV0FDRSxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsT0FBTztJQUszQjtJQUVBQyxtQkFBbUIsU0FBbkJBO1FBQ0UsSUFBTUQsVUFBVSxJQUFJLENBQUNELEtBQUssQ0FBQ0MsT0FBTztRQUVsQ0UsUUFBUUMsR0FBRyxDQUFDLEFBQUMsdUNBQThDLE9BQVJILFNBQVE7SUFDN0Q7SUFFQUksc0JBQXNCLFNBQXRCQTtRQUNFLElBQU1KLFVBQVUsSUFBSSxDQUFDRCxLQUFLLENBQUNDLE9BQU87UUFFbENFLFFBQVFDLEdBQUcsQ0FBQyxBQUFDLHlDQUFnRCxPQUFSSCxTQUFRO0lBQy9EO0FBQ0Y7SUFFQSxXQUFlUCJ9