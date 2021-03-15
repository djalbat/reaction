"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _react = _interopRequireDefault(require("../react"));
var _reactDOM = _interopRequireDefault(require("../reactDOM"));
var _commentsList = _interopRequireDefault(require("./vanillaApp/commentsList"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function vanillaApp() {
    var commentsList = _react.default.createElement(_commentsList.default, null), rootDOMElement = document.getElementById("root");
    _reactDOM.default.render(commentsList, rootDOMElement);
    setTimeout(function() {
        var messages = [
            "Hello world yet again!!!"
        ], state = {
            messages: messages
        };
        commentsList.setState(state);
    }, 1000); ///
}
exports.default = vanillaApp;
;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZhbmlsbGFBcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwiLi4vcmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwiLi4vcmVhY3RET01cIjtcblxuaW1wb3J0IENvbW1lbnRzTGlzdCBmcm9tIFwiLi92YW5pbGxhQXBwL2NvbW1lbnRzTGlzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YW5pbGxhQXBwKCkge1xuICBjb25zdCBjb21tZW50c0xpc3QgPVxuXG4gICAgICAgICAgPENvbW1lbnRzTGlzdCAvPlxuXG4gICAgICAgICxcbiAgICAgICAgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG5cbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIGNvbW1lbnRzTGlzdCxcbiAgICByb290RE9NRWxlbWVudFxuICApO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gW1xuICAgICAgICAgICAgXCJIZWxsbyB3b3JsZCB5ZXQgYWdhaW4hISFcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICBtZXNzYWdlc1xuICAgICAgICAgIH07XG5cbiAgICBjb21tZW50c0xpc3Quc2V0U3RhdGUoc3RhdGUpO1xuICB9LCAxMDAwKTsgLy8vXG59O1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7SUFFQSxNQUFBO0lBQ0EsU0FBQTtJQUVBLGFBQUE7Ozs7OztTQUVBLFVBQUE7UUFDQSxZQUFBLEdBTkEsTUFBQSx1QkFHQSxhQUFBLGlCQVFBLGNBQUEsR0FBQSxRQUFBLENBQUEsY0FBQSxFQUFBLElBQUE7QUFWQSxhQUFBLFNBWUEsTUFBQSxDQUNBLFlBQUEsRUFDQSxjQUFBO0FBR0EsY0FBQTtZQUNBLFFBQUE7YUFDQSx3QkFBQTtXQUVBLEtBQUE7QUFDQSxvQkFBQSxFQUFBLFFBQUE7O0FBR0Esb0JBQUEsQ0FBQSxRQUFBLENBQUEsS0FBQTtPQUNBLElBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQTs7a0JBdEJBLFVBQUEifQ==