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
var _react = /*#__PURE__*/ _interopRequireDefault(require("../../react"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Comment = _react.default.createClass({
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
    },
    displayName: "Comment"
});
var _default = Comment;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZhbmlsbGFBcHAvY29tbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCIuLi8uLi9yZWFjdFwiO1xuXG5jb25zdCBDb21tZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uKHVwZGF0ZSkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudFwiPlxuICAgICAgICA8cD5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5tZXNzYWdlfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLnByb3BzLm1lc3NhZ2U7XG5cbiAgICBjb25zb2xlLmxvZyhgQ29tbWVudCBtb3VudGVkIHdpdGggbWVzc2FnZTogJyR7bWVzc2FnZX0nLmApXG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLnByb3BzLm1lc3NhZ2U7XG5cbiAgICBjb25zb2xlLmxvZyhgQ29tbWVudCB1bm1vdW50ZWQgd2l0aCBtZXNzYWdlOiAnJHttZXNzYWdlfScuYClcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7XG4iXSwibmFtZXMiOlsiQ29tbWVudCIsIlJlYWN0IiwiY3JlYXRlQ2xhc3MiLCJyZW5kZXIiLCJ1cGRhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwicHJvcHMiLCJtZXNzYWdlIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50V2lsbFVubW91bnQiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkE4QmIsU0FBdUI7OztlQUF2QixRQUF1Qjs7OzBEQTVCTCxhQUFhOzs7Ozs7QUFFL0IsSUFBTUEsT0FBTyxHQUFHQyxNQUFLLFFBQUEsQ0FBQ0MsV0FBVyxDQUFDO0lBQ2hDQyxNQUFNLEVBQUUsU0FBUkEsTUFBTSxDQUFXQyxNQUFNLEVBQUU7UUFDdkIscUJBRUUsNkJBQUNDLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLFNBQVM7eUJBQ3RCLDZCQUFDQyxHQUFDLFFBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLE9BQU8sQ0FDakIsQ0FDQSxDQUVOO0tBQ0g7SUFFREMsaUJBQWlCLEVBQUUsU0FBbkJBLGlCQUFpQixHQUFhO1FBQzVCLElBQU1ELE9BQU8sR0FBRyxJQUFJLENBQUNELEtBQUssQ0FBQ0MsT0FBTyxBQUFDO1FBRW5DRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxBQUFDLGlDQUErQixDQUFVLE1BQUUsQ0FBVkgsT0FBTyxFQUFDLElBQUUsQ0FBQyxDQUFDO0tBQzNEO0lBRURJLG9CQUFvQixFQUFFLFNBQXRCQSxvQkFBb0IsR0FBYTtRQUMvQixJQUFNSixPQUFPLEdBQUcsSUFBSSxDQUFDRCxLQUFLLENBQUNDLE9BQU8sQUFBQztRQUVuQ0UsT0FBTyxDQUFDQyxHQUFHLENBQUMsQUFBQyxtQ0FBaUMsQ0FBVSxNQUFFLENBQVZILE9BQU8sRUFBQyxJQUFFLENBQUMsQ0FBQztLQUM3RDtpQkF2QkdULFNBQU87Q0F3QlosQ0FBQyxBQUFDO0lBRUgsUUFBdUIsR0FBUkEsT0FBTyJ9