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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var createClass = _react.default.createClass;
var Comment = createClass({
    render: function render(update) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "comment"
        }, /*#__PURE__*/ _react.default.createElement("p", null, this.props.message));
    },
    componentDidMount: function componentDidMount() {
        var message = this.props.message;
        console.log("Comment mounted with message: '".concat(message, "'."));
    },
    componentWillUnmount: function componentWillUnmount() {
        var message = this.props.message;
        console.log("Comment unmounted with message: '".concat(message, "'."));
    }
});
var _default = Comment;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZhbmlsbGFBcHAvY29tbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCIuLi8uLi9yZWFjdFwiO1xuXG5jb25zdCB7IGNyZWF0ZUNsYXNzIH0gPSBSZWFjdDtcblxuY29uc3QgQ29tbWVudCA9IGNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbih1cGRhdGUpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAge3RoaXMucHJvcHMubWVzc2FnZX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5wcm9wcy5tZXNzYWdlO1xuXG4gICAgY29uc29sZS5sb2coYENvbW1lbnQgbW91bnRlZCB3aXRoIG1lc3NhZ2U6ICcke21lc3NhZ2V9Jy5gKVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5wcm9wcy5tZXNzYWdlO1xuXG4gICAgY29uc29sZS5sb2coYENvbW1lbnQgdW5tb3VudGVkIHdpdGggbWVzc2FnZTogJyR7bWVzc2FnZX0nLmApXG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNsYXNzIiwiUmVhY3QiLCJDb21tZW50IiwicmVuZGVyIiwidXBkYXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInByb3BzIiwibWVzc2FnZSIsImNvbXBvbmVudERpZE1vdW50IiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudFdpbGxVbm1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnQ0E7OztlQUFBOzs7NERBOUJrQjs7Ozs7O0FBRWxCLElBQU0sQUFBRUEsY0FBZ0JDLGNBQUssQ0FBckJEO0FBRVIsSUFBTUUsVUFBVUYsWUFBWTtJQUMxQkcsUUFBUSxTQUFSQSxPQUFpQkMsTUFBTTtRQUNyQixxQkFFRSw2QkFBQ0M7WUFBSUMsV0FBVTt5QkFDYiw2QkFBQ0MsV0FDRSxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsT0FBTztJQUszQjtJQUVBQyxtQkFBbUIsU0FBbkJBO1FBQ0UsSUFBTUQsVUFBVSxJQUFJLENBQUNELEtBQUssQ0FBQ0MsT0FBTztRQUVsQ0UsUUFBUUMsR0FBRyxDQUFDLEFBQUMsa0NBQXlDLE9BQVJILFNBQVE7SUFDeEQ7SUFFQUksc0JBQXNCLFNBQXRCQTtRQUNFLElBQU1KLFVBQVUsSUFBSSxDQUFDRCxLQUFLLENBQUNDLE9BQU87UUFFbENFLFFBQVFDLEdBQUcsQ0FBQyxBQUFDLG9DQUEyQyxPQUFSSCxTQUFRO0lBQzFEO0FBQ0Y7SUFFQSxXQUFlUCJ9