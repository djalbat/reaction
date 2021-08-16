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
        console.log("Comment mounted with message: '".concat(message, "'."));
    },
    componentWillUnmount: function componentWillUnmount() {
        var message = this.props.message;
        console.log("Comment unmounted with message: '".concat(message, "'."));
    },
    displayName: "Comment"
});
var _default = Comment1;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZhbmlsbGFBcHAvY29tbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCIuLi8uLi9yZWFjdFwiO1xuXG5jb25zdCBDb21tZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uKHVwZGF0ZSkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudFwiPlxuICAgICAgICA8cD5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5tZXNzYWdlfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLnByb3BzLm1lc3NhZ2U7XG5cbiAgICBjb25zb2xlLmxvZyhgQ29tbWVudCBtb3VudGVkIHdpdGggbWVzc2FnZTogJyR7bWVzc2FnZX0nLmApXG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLnByb3BzLm1lc3NhZ2U7XG5cbiAgICBjb25zb2xlLmxvZyhgQ29tbWVudCB1bm1vdW50ZWQgd2l0aCBtZXNzYWdlOiAnJHttZXNzYWdlfScuYClcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFTSxHQUFhLENBQWIsTUFBYTs7Ozs7O0FBRS9CLEdBQUssQ0FBQyxRQUFPLEdBRkssTUFBYSxTQUVULFdBQVc7SUFDL0IsTUFBTSxXQUFOLE1BQU0sQ0FBVyxNQUFNLEVBQUUsQ0FBQzs2QkFIVixNQUFhLHdCQU14QixHQUFHO1lBQUMsU0FBUyxHQUFDLE9BQVM7eUJBTlosTUFBYSx3QkFPdEIsQ0FBQyxjQUNNLEtBQUssQ0FBQyxPQUFPO0lBSzNCLENBQUM7SUFFRCxpQkFBaUIsV0FBakIsaUJBQWlCLEdBQWEsQ0FBQztRQUM3QixHQUFLLENBQUMsT0FBTyxRQUFRLEtBQUssQ0FBQyxPQUFPO1FBRWxDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsK0JBQStCLEVBQVUsTUFBRSxDQUFWLE9BQU8sR0FBQyxFQUFFO0lBQzFELENBQUM7SUFFRCxvQkFBb0IsV0FBcEIsb0JBQW9CLEdBQWEsQ0FBQztRQUNoQyxHQUFLLENBQUMsT0FBTyxRQUFRLEtBQUssQ0FBQyxPQUFPO1FBRWxDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsaUNBQWlDLEVBQVUsTUFBRSxDQUFWLE9BQU8sR0FBQyxFQUFFO0lBQzVELENBQUM7a0JBdkJHLE9BQU87O2VBMEJFLFFBQU8ifQ==