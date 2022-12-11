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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZhbmlsbGFBcHAvY29tbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCIuLi8uLi9yZWFjdFwiO1xuXG5jb25zdCBDb21tZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uKHVwZGF0ZSkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudFwiPlxuICAgICAgICA8cD5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5tZXNzYWdlfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLnByb3BzLm1lc3NhZ2U7XG5cbiAgICBjb25zb2xlLmxvZyhgQ29tbWVudCBtb3VudGVkIHdpdGggbWVzc2FnZTogJyR7bWVzc2FnZX0nLmApXG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLnByb3BzLm1lc3NhZ2U7XG5cbiAgICBjb25zb2xlLmxvZyhgQ29tbWVudCB1bm1vdW50ZWQgd2l0aCBtZXNzYWdlOiAnJHttZXNzYWdlfScuYClcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7XG4iXSwibmFtZXMiOlsiQ29tbWVudCIsIlJlYWN0IiwiY3JlYXRlQ2xhc3MiLCJyZW5kZXIiLCJ1cGRhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwicHJvcHMiLCJtZXNzYWdlIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50V2lsbFVubW91bnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThCQTs7O2VBQUE7OzswREE1QmtCOzs7Ozs7QUFFbEIsSUFBTUEsVUFBVUMsY0FBSyxDQUFDQyxXQUFXLENBQUM7SUFDaENDLFFBQVEsU0FBUkEsT0FBaUJDLE1BQU0sRUFBRTtRQUN2QixxQkFFRSw2QkFBQ0M7WUFBSUMsV0FBVTt5QkFDYiw2QkFBQ0MsV0FDRSxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsT0FBTztJQUszQjtJQUVBQyxtQkFBbUIsU0FBbkJBLG9CQUE4QjtRQUM1QixJQUFNRCxVQUFVLElBQUksQ0FBQ0QsS0FBSyxDQUFDQyxPQUFPO1FBRWxDRSxRQUFRQyxHQUFHLENBQUMsQUFBQyxrQ0FBeUMsT0FBUkgsU0FBUTtJQUN4RDtJQUVBSSxzQkFBc0IsU0FBdEJBLHVCQUFpQztRQUMvQixJQUFNSixVQUFVLElBQUksQ0FBQ0QsS0FBSyxDQUFDQyxPQUFPO1FBRWxDRSxRQUFRQyxHQUFHLENBQUMsQUFBQyxvQ0FBMkMsT0FBUkgsU0FBUTtJQUMxRDtpQkF2QklUO0FBd0JOO0lBRUEsV0FBZUEifQ==