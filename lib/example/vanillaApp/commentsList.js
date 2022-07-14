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
        var state = this.getState(), messages = state.messages, comments = messages.map(function(message) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZhbmlsbGFBcHAvY29tbWVudHNMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcIi4uLy4uL3JlYWN0XCI7XG5cbmltcG9ydCBDb21tZW50IGZyb20gXCIuL2NvbW1lbnRcIjtcblxuY29uc3QgQ29tbWVudHNMaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBbXG4gICAgICAgICAgICBcIkhlbGxvLCB3b3JsZCFcIixcbiAgICAgICAgICAgIFwiSGVsbG8gd29ybGQgYWdhaW4uLi5cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICBtZXNzYWdlc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKFwiQ29tbWVudHMgbGlzdCBtb3VudGVkLlwiKVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24odXBkYXRlKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBtZXNzYWdlcyB9ID0gc3RhdGUsXG4gICAgICAgICAgY29tbWVudHMgPSBtZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+XG5cbiAgICAgICAgICAgIDxDb21tZW50IG1lc3NhZ2U9e21lc3NhZ2V9IC8+XG5cbiAgICAgICAgICApO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50cy1saXN0XCI+XG4gICAgICAgIHtjb21tZW50c31cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRzTGlzdDtcbiJdLCJuYW1lcyI6WyJDb21tZW50c0xpc3QiLCJSZWFjdCIsImNyZWF0ZUNsYXNzIiwiZ2V0SW5pdGlhbFN0YXRlIiwibWVzc2FnZXMiLCJzdGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwiY29uc29sZSIsImxvZyIsInJlbmRlciIsInVwZGF0ZSIsImdldFN0YXRlIiwiY29tbWVudHMiLCJtYXAiLCJtZXNzYWdlIiwiQ29tbWVudCIsImRpdiIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQTBDYixTQUE0Qjs7O2VBQTVCLFFBQTRCOzs7MERBeENWLGFBQWE7NERBRVgsV0FBVzs7Ozs7O0FBRS9CLElBQU1BLFlBQVksR0FBR0MsTUFBSyxRQUFBLENBQUNDLFdBQVcsQ0FBQztJQUNyQ0MsZUFBZSxFQUFmQSxTQUFBQSxlQUFlLEdBQUc7UUFDaEIsSUFBTUMsUUFBUSxHQUFHO1lBQ1QsZUFBZTtZQUNmLHNCQUFzQjtTQUN2QixFQUNEQyxLQUFLLEdBQUc7WUFDTkQsUUFBUSxFQUFSQSxRQUFRO1NBQ1QsQUFBQztRQUVSLE9BQU9DLEtBQUssQ0FBQztLQUNkO0lBRURDLGlCQUFpQixFQUFFLFNBQW5CQSxpQkFBaUIsR0FBYTtRQUM1QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsd0JBQXdCLENBQUM7S0FDdEM7SUFFREMsTUFBTSxFQUFFLFNBQVJBLE1BQU0sQ0FBV0MsTUFBTSxFQUFFO1FBQ3ZCLElBQU1MLEtBQUssR0FBRyxJQUFJLENBQUNNLFFBQVEsRUFBRSxFQUN2QixBQUFFUCxRQUFRLEdBQUtDLEtBQUssQ0FBbEJELFFBQVEsQUFBVSxFQUNwQlEsUUFBUSxHQUFHUixRQUFRLENBQUNTLEdBQUcsQ0FBQyxTQUFDQyxPQUFPO2lDQUU5Qiw2QkFBQ0MsUUFBTyxRQUFBO2dCQUFDRCxPQUFPLEVBQUVBLE9BQU87Y0FBSTtTQUFBLENBRTlCLEFBQUM7UUFFUixxQkFFRSw2QkFBQ0UsS0FBRztZQUFDQyxTQUFTLEVBQUMsZUFBZTtXQUMzQkwsUUFBUSxDQUNMLENBRU47S0FDSDtpQkFqQ0daLGNBQVk7Q0FrQ2pCLENBQUMsQUFBQztJQUVILFFBQTRCLEdBQWJBLFlBQVkifQ==