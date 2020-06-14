"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = vanillaApp;

var _react = _interopRequireDefault(require("../react"));

var _reactDOM = _interopRequireDefault(require("../reactDOM"));

var _commentsList = _interopRequireDefault(require("./vanillaApp/commentsList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function vanillaApp() {
  var commentsList = /*#__PURE__*/_react["default"].createElement(_commentsList["default"], null),
      rootDOMElement = document.getElementById("root");

  _reactDOM["default"].render(commentsList, rootDOMElement);

  setTimeout(function () {
    var messages = ["Hello world yet again!!!"],
        state = {
      messages: messages
    };
    commentsList.setState(state);
  }, 1000); ///
}

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbmlsbGFBcHAuanMiXSwibmFtZXMiOlsidmFuaWxsYUFwcCIsImNvbW1lbnRzTGlzdCIsInJvb3RET01FbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJlYWN0RE9NIiwicmVuZGVyIiwic2V0VGltZW91dCIsIm1lc3NhZ2VzIiwic3RhdGUiLCJzZXRTdGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7OztBQUVlLFNBQVNBLFVBQVQsR0FBc0I7QUFDbkMsTUFBTUMsWUFBWSxnQkFFVixnQ0FBQyx3QkFBRCxPQUZSO0FBQUEsTUFLTUMsY0FBYyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FMdkI7O0FBT0FDLHVCQUFTQyxNQUFULENBQ0VMLFlBREYsRUFFRUMsY0FGRjs7QUFLQUssRUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZixRQUFNQyxRQUFRLEdBQUcsQ0FDVCwwQkFEUyxDQUFqQjtBQUFBLFFBR01DLEtBQUssR0FBRztBQUNORCxNQUFBQSxRQUFRLEVBQVJBO0FBRE0sS0FIZDtBQU9BUCxJQUFBQSxZQUFZLENBQUNTLFFBQWIsQ0FBc0JELEtBQXRCO0FBQ0QsR0FUUyxFQVNQLElBVE8sQ0FBVixDQWJtQyxDQXNCekI7QUFDWDs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcIi4uL3JlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcIi4uL3JlYWN0RE9NXCI7XG5cbmltcG9ydCBDb21tZW50c0xpc3QgZnJvbSBcIi4vdmFuaWxsYUFwcC9jb21tZW50c0xpc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFuaWxsYUFwcCgpIHtcbiAgY29uc3QgY29tbWVudHNMaXN0ID1cblxuICAgICAgICAgIDxDb21tZW50c0xpc3QgLz5cblxuICAgICAgICAsXG4gICAgICAgIHJvb3RET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuXG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICBjb21tZW50c0xpc3QsXG4gICAgcm9vdERPTUVsZW1lbnRcbiAgKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IFtcbiAgICAgICAgICAgIFwiSGVsbG8gd29ybGQgeWV0IGFnYWluISEhXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgbWVzc2FnZXNcbiAgICAgICAgICB9O1xuXG4gICAgY29tbWVudHNMaXN0LnNldFN0YXRlKHN0YXRlKTtcbiAgfSwgMTAwMCk7IC8vL1xufTtcbiJdfQ==