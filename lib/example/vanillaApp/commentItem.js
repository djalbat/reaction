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
        }, this.props.message);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZhbmlsbGFBcHAvY29tbWVudEl0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuY29uc3QgeyBjcmVhdGVDbGFzcyB9ID0gUmVhY3Q7XG5cbmNvbnN0IENvbW1lbnRJdGVtID0gY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uKHVwZGF0ZSkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJjb21tZW50XCI+XG4gICAgICAgIHt0aGlzLnByb3BzLm1lc3NhZ2V9XG4gICAgICA8L2xpPlxuXG4gICAgKTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHRoaXMucHJvcHMubWVzc2FnZTtcblxuICAgIGNvbnNvbGUubG9nKGBDb21tZW50IGl0ZW0gbW91bnRlZCB3aXRoIG1lc3NhZ2U6ICcke21lc3NhZ2V9Jy5gKVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5wcm9wcy5tZXNzYWdlO1xuXG4gICAgY29uc29sZS5sb2coYENvbW1lbnQgaXRlbSB1bm1vdW50ZWQgd2l0aCBtZXNzYWdlOiAnJHttZXNzYWdlfScuYClcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRJdGVtO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNsYXNzIiwiUmVhY3QiLCJDb21tZW50SXRlbSIsInJlbmRlciIsInVwZGF0ZSIsImxpIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJtZXNzYWdlIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50V2lsbFVubW91bnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThCQTs7O2VBQUE7OztxQkE1QnNCO0FBRXRCLElBQU0sQUFBRUEsY0FBZ0JDLFlBQUssQ0FBckJEO0FBRVIsSUFBTUUsY0FBY0YsWUFBWTtJQUM5QkcsUUFBUSxTQUFSQSxPQUFpQkMsTUFBTTtRQUNyQixxQkFFRSwyQkFBQ0M7WUFBR0MsV0FBVTtXQUNYLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPO0lBSXpCO0lBRUFDLG1CQUFtQixTQUFuQkE7UUFDRSxJQUFNRCxVQUFVLElBQUksQ0FBQ0QsS0FBSyxDQUFDQyxPQUFPO1FBRWxDRSxRQUFRQyxHQUFHLENBQUMsQUFBQyx1Q0FBOEMsT0FBUkgsU0FBUTtJQUM3RDtJQUVBSSxzQkFBc0IsU0FBdEJBO1FBQ0UsSUFBTUosVUFBVSxJQUFJLENBQUNELEtBQUssQ0FBQ0MsT0FBTztRQUVsQ0UsUUFBUUMsR0FBRyxDQUFDLEFBQUMseUNBQWdELE9BQVJILFNBQVE7SUFDL0Q7QUFDRjtJQUVBLFdBQWVOIn0=