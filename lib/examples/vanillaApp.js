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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbmlsbGFBcHAuanMiXSwibmFtZXMiOlsidmFuaWxsYUFwcCIsImNvbW1lbnRzTGlzdCIsInJvb3RET01FbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJlYWN0RE9NIiwicmVuZGVyIiwic2V0VGltZW91dCIsIm1lc3NhZ2VzIiwic3RhdGUiLCJzZXRTdGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7OztBQUVlLFNBQVNBLFVBQVQsR0FBc0I7QUFDbkMsTUFBTUMsWUFBWSxnQkFFVixnQ0FBQyx3QkFBRCxPQUZSO0FBQUEsTUFLTUMsY0FBYyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FMdkI7O0FBUUFDLHVCQUFTQyxNQUFULENBQ0VMLFlBREYsRUFFRUMsY0FGRjs7QUFLQUssRUFBQUEsVUFBVSxDQUFDLFlBQVc7QUFDcEIsUUFBTUMsUUFBUSxHQUFHLENBQ1QsMEJBRFMsQ0FBakI7QUFBQSxRQUdNQyxLQUFLLEdBQUc7QUFDTkQsTUFBQUEsUUFBUSxFQUFSQTtBQURNLEtBSGQ7QUFPQVAsSUFBQUEsWUFBWSxDQUFDUyxRQUFiLENBQXNCRCxLQUF0QjtBQUNELEdBVFMsRUFTUCxJQVRPLENBQVYsQ0FkbUMsQ0F1QnpCO0FBQ1g7O0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCIuLi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCIuLi9yZWFjdERPTVwiO1xuXG5pbXBvcnQgQ29tbWVudHNMaXN0IGZyb20gXCIuL3ZhbmlsbGFBcHAvY29tbWVudHNMaXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbmlsbGFBcHAoKSB7XG4gIGNvbnN0IGNvbW1lbnRzTGlzdCA9XG5cbiAgICAgICAgICA8Q29tbWVudHNMaXN0IC8+XG5cbiAgICAgICAgLFxuICAgICAgICByb290RE9NRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKTtcblxuXG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICBjb21tZW50c0xpc3QsXG4gICAgcm9vdERPTUVsZW1lbnRcbiAgKTtcblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gW1xuICAgICAgICAgICAgXCJIZWxsbyB3b3JsZCB5ZXQgYWdhaW4hISFcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICBtZXNzYWdlc1xuICAgICAgICAgIH07XG5cbiAgICBjb21tZW50c0xpc3Quc2V0U3RhdGUoc3RhdGUpO1xuICB9LCAxMDAwKTsgLy8vXG59O1xuIl19