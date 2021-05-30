"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("../../react"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Comment1 = _react.default.createClass({
    render: function render(update) {
        return(/*#__PURE__*/ _react.default.createElement("div", {
            className: "comment"
        }, /*#__PURE__*/ _react.default.createElement("p", null, this.props.message)));
    },
    componentDidMount: function componentDidMount() {
        var message = this.props.message;
        console.log("Comment mounted with message: " + message);
    },
    componentWillUnmount: function componentWillUnmount() {
        var message = this.props.message;
        console.log("Comment unmounted with message: " + message);
    },
    displayName: "Comment"
});
var _default = Comment1;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZhbmlsbGFBcHAvY29tbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCIuLi8uLi9yZWFjdFwiO1xuXG5jb25zdCBDb21tZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uKHVwZGF0ZSkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudFwiPlxuICAgICAgICA8cD5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5tZXNzYWdlfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLnByb3BzLm1lc3NhZ2U7XG5cbiAgICBjb25zb2xlLmxvZyhcIkNvbW1lbnQgbW91bnRlZCB3aXRoIG1lc3NhZ2U6IFwiICsgbWVzc2FnZSlcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHRoaXMucHJvcHMubWVzc2FnZTtcblxuICAgIGNvbnNvbGUubG9nKFwiQ29tbWVudCB1bm1vdW50ZWQgd2l0aCBtZXNzYWdlOiBcIiArIG1lc3NhZ2UpXG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50O1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRU0sTUFBYTs7Ozs7O0lBRXpCLFFBQU8sR0FGSyxNQUFhLFNBRVQsV0FBVztJQUMvQixNQUFNLFdBQU4sTUFBTSxDQUFXLE1BQU07NkJBSFAsTUFBYSx3QkFNeEIsR0FBRztZQUFDLFNBQVMsR0FBQyxPQUFTO3lCQU5aLE1BQWEsd0JBT3RCLENBQUMsY0FDTSxLQUFLLENBQUMsT0FBTzs7SUFPM0IsaUJBQWlCLFdBQWpCLGlCQUFpQjtZQUNULE9BQU8sUUFBUSxLQUFLLENBQUMsT0FBTztRQUVsQyxPQUFPLENBQUMsR0FBRyxFQUFDLDhCQUFnQyxJQUFHLE9BQU87O0lBR3hELG9CQUFvQixXQUFwQixvQkFBb0I7WUFDWixPQUFPLFFBQVEsS0FBSyxDQUFDLE9BQU87UUFFbEMsT0FBTyxDQUFDLEdBQUcsRUFBQyxnQ0FBa0MsSUFBRyxPQUFPOztrQkF0QnRELE9BQU87O2VBMEJFLFFBQU8ifQ==