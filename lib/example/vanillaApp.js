"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return vanillaApp;
    }
});
var _index = require("../index");
var _commentsList = /*#__PURE__*/ _interop_require_default(require("./vanillaApp/commentsList"));
var _constants = require("./vanillaApp/constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function vanillaApp() {
    var commentsList = /*#__PURE__*/ _index.React.createElement(_commentsList.default, null), rootDOMElement = document.getElementById(_constants.ROOT);
    _index.ReactDOM.render(commentsList, rootDOMElement);
    setTimeout(function() {
        var messages = [
            "Hello world yet again!!!"
        ], state = {
            messages: messages
        };
        commentsList.setState(state);
    }, _constants.DELAY);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZhbmlsbGFBcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0LCBSZWFjdERPTSB9IGZyb20gXCIuLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IENvbW1lbnRzTGlzdCBmcm9tIFwiLi92YW5pbGxhQXBwL2NvbW1lbnRzTGlzdFwiO1xuXG5pbXBvcnQgeyBST09ULCBERUxBWSB9IGZyb20gXCIuL3ZhbmlsbGFBcHAvY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbmlsbGFBcHAoKSB7XG4gIGNvbnN0IGNvbW1lbnRzTGlzdCA9XG5cbiAgICAgICAgICA8Q29tbWVudHNMaXN0Lz5cblxuICAgICAgICAsXG4gICAgICAgIHJvb3RET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoUk9PVCk7XG5cbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIGNvbW1lbnRzTGlzdCxcbiAgICByb290RE9NRWxlbWVudFxuICApO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gW1xuICAgICAgICAgICAgXCJIZWxsbyB3b3JsZCB5ZXQgYWdhaW4hISFcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICBtZXNzYWdlc1xuICAgICAgICAgIH07XG5cbiAgICBjb21tZW50c0xpc3Quc2V0U3RhdGUoc3RhdGUpO1xuICB9LCBERUxBWSk7XG59O1xuIl0sIm5hbWVzIjpbInZhbmlsbGFBcHAiLCJjb21tZW50c0xpc3QiLCJDb21tZW50c0xpc3QiLCJyb290RE9NRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJST09UIiwiUmVhY3RET00iLCJyZW5kZXIiLCJzZXRUaW1lb3V0IiwibWVzc2FnZXMiLCJzdGF0ZSIsInNldFN0YXRlIiwiREVMQVkiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBd0JBOzs7cUJBTlE7bUVBRVA7eUJBRUc7Ozs7OztBQUViLFNBQVNBO0lBQ3RCLElBQU1DLDZCQUVFLDJCQUFDQyxxQkFBWSxTQUdmQyxpQkFBaUJDLFNBQVNDLGNBQWMsQ0FBQ0MsZUFBSTtJQUVuREMsZUFBUSxDQUFDQyxNQUFNLENBQ2JQLGNBQ0FFO0lBR0ZNLFdBQVc7UUFDVCxJQUFNQyxXQUFXO1lBQ1Q7U0FDRCxFQUNEQyxRQUFRO1lBQ05ELFVBQUFBO1FBQ0Y7UUFFTlQsYUFBYVcsUUFBUSxDQUFDRDtJQUN4QixHQUFHRSxnQkFBSztBQUNWIn0=