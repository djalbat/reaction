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
var _comment = /*#__PURE__*/ _interopRequireDefault(require("./comment"));
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
        var messages = this.getState().messages, comments = messages.map(function(message) {
            return /*#__PURE__*/ _react.default.createElement(_comment.default, {
                message: message
            });
        });
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "comments-list"
        }, comments);
    },
    displayName: "CommentsList"
});
var _default = CommentsList;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZhbmlsbGFBcHAvY29tbWVudHNMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcIi4uLy4uL3JlYWN0XCI7XG5cbmltcG9ydCBDb21tZW50IGZyb20gXCIuL2NvbW1lbnRcIjtcblxuY29uc3QgQ29tbWVudHNMaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBbXG4gICAgICAgICAgICBcIkhlbGxvLCB3b3JsZCFcIixcbiAgICAgICAgICAgIFwiSGVsbG8gd29ybGQgYWdhaW4uLi5cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICBtZXNzYWdlc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKFwiQ29tbWVudHMgbGlzdCBtb3VudGVkLlwiKVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24odXBkYXRlKSB7XG4gICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIGNvbW1lbnRzID0gbWVzc2FnZXMubWFwKChtZXNzYWdlKSA9PlxuXG4gICAgICAgICAgICA8Q29tbWVudCBtZXNzYWdlPXttZXNzYWdlfSAvPlxuXG4gICAgICAgICAgKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudHMtbGlzdFwiPlxuICAgICAgICB7Y29tbWVudHN9XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50c0xpc3Q7XG4iXSwibmFtZXMiOlsiQ29tbWVudHNMaXN0IiwiUmVhY3QiLCJjcmVhdGVDbGFzcyIsImdldEluaXRpYWxTdGF0ZSIsIm1lc3NhZ2VzIiwic3RhdGUiLCJjb21wb25lbnREaWRNb3VudCIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXIiLCJ1cGRhdGUiLCJnZXRTdGF0ZSIsImNvbW1lbnRzIiwibWFwIiwibWVzc2FnZSIsIkNvbW1lbnQiLCJkaXYiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXlDQTs7O2VBQUE7OzswREF2Q2tCOzREQUVFOzs7Ozs7QUFFcEIsSUFBTUEsZUFBZUMsY0FBSyxDQUFDQyxXQUFXLENBQUM7SUFDckNDLGlCQUFBQSxTQUFBQSxrQkFBa0I7UUFDaEIsSUFBTUMsV0FBVztZQUNUO1lBQ0E7U0FDRCxFQUNEQyxRQUFRO1lBQ05ELFVBQUFBO1FBQ0Y7UUFFTixPQUFPQztJQUNUO0lBRUFDLG1CQUFtQixTQUFuQkEsb0JBQThCO1FBQzVCQyxRQUFRQyxHQUFHLENBQUM7SUFDZDtJQUVBQyxRQUFRLFNBQVJBLE9BQWlCQyxNQUFNLEVBQUU7UUFDdkIsSUFBTSxBQUFFTixXQUFhLElBQUksQ0FBQ08sUUFBUSxHQUExQlAsVUFDRlEsV0FBV1IsU0FBU1MsR0FBRyxDQUFDLFNBQUNDO2lDQUV2Qiw2QkFBQ0MsZ0JBQU87Z0JBQUNELFNBQVNBOzs7UUFJMUIscUJBRUUsNkJBQUNFO1lBQUlDLFdBQVU7V0FDWkw7SUFJUDtpQkFoQ0laO0FBaUNOO0lBRUEsV0FBZUEifQ==