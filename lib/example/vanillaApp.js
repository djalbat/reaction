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
const _index = require("../index");
const _commentsList = /*#__PURE__*/ _interop_require_default(require("./vanillaApp/commentsList"));
const _constants = require("./vanillaApp/constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function vanillaApp() {
    const commentsList = /*#__PURE__*/ _index.React.createElement(_commentsList.default, null), rootDOMElement = document.getElementById(_constants.ROOT);
    _index.ReactDOM.render(commentsList, rootDOMElement);
    const delay = _constants.MESSAGES_DELAY;
    setTimeout(()=>{
        const messages = [
            "Hello world yet again!!!"
        ], state = {
            messages
        };
        commentsList.setState(state);
    }, delay);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZhbmlsbGFBcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0LCBSZWFjdERPTSB9IGZyb20gXCIuLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IENvbW1lbnRzTGlzdCBmcm9tIFwiLi92YW5pbGxhQXBwL2NvbW1lbnRzTGlzdFwiO1xuXG5pbXBvcnQgeyBST09ULCBNRVNTQUdFU19ERUxBWSB9IGZyb20gXCIuL3ZhbmlsbGFBcHAvY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbmlsbGFBcHAoKSB7XG4gIGNvbnN0IGNvbW1lbnRzTGlzdCA9XG5cbiAgICAgICAgICA8Q29tbWVudHNMaXN0Lz5cblxuICAgICAgICAsXG4gICAgICAgIHJvb3RET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoUk9PVCk7XG5cbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIGNvbW1lbnRzTGlzdCxcbiAgICByb290RE9NRWxlbWVudFxuICApO1xuXG4gIGNvbnN0IGRlbGF5ID0gTUVTU0FHRVNfREVMQVk7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBbXG4gICAgICAgICAgICBcIkhlbGxvIHdvcmxkIHlldCBhZ2FpbiEhIVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2VzXG4gICAgICAgICAgfTtcblxuICAgIGNvbW1lbnRzTGlzdC5zZXRTdGF0ZShzdGF0ZSk7XG4gIH0sIGRlbGF5KTtcbn07XG4iXSwibmFtZXMiOlsidmFuaWxsYUFwcCIsImNvbW1lbnRzTGlzdCIsIkNvbW1lbnRzTGlzdCIsInJvb3RET01FbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJPT1QiLCJSZWFjdERPTSIsInJlbmRlciIsImRlbGF5IiwiTUVTU0FHRVNfREVMQVkiLCJzZXRUaW1lb3V0IiwibWVzc2FnZXMiLCJzdGF0ZSIsInNldFN0YXRlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQXdCQTs7O3VCQU5RO3FFQUVQOzJCQUVZOzs7Ozs7QUFFdEIsU0FBU0E7SUFDdEIsTUFBTUMsNkJBRUUsMkJBQUNDLHFCQUFZLFNBR2ZDLGlCQUFpQkMsU0FBU0MsY0FBYyxDQUFDQyxlQUFJO0lBRW5EQyxlQUFRLENBQUNDLE1BQU0sQ0FDYlAsY0FDQUU7SUFHRixNQUFNTSxRQUFRQyx5QkFBYztJQUU1QkMsV0FBVztRQUNULE1BQU1DLFdBQVc7WUFDVDtTQUNELEVBQ0RDLFFBQVE7WUFDTkQ7UUFDRjtRQUVOWCxhQUFhYSxRQUFRLENBQUNEO0lBQ3hCLEdBQUdKO0FBQ0wifQ==