"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = vanillaApp;
var _react = _interopRequireDefault(require("../react"));
var _reactDOM = _interopRequireDefault(require("../reactDOM"));
var _commentsList = _interopRequireDefault(require("./vanillaApp/commentsList"));
var _constants = require("./vanillaApp/constants");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function vanillaApp() {
    var commentsList = /*#__PURE__*/ _react.default.createElement(_commentsList.default, null), rootDOMElement = document.getElementById(_constants.ROOT);
    _reactDOM.default.render(commentsList, rootDOMElement);
    setTimeout(function() {
        var messages = [
            "Hello world yet again!!!"
        ], state = {
            messages: messages
        };
        commentsList.setState(state);
    }, _constants.TIMEOUT);
}
;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZhbmlsbGFBcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwiLi4vcmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwiLi4vcmVhY3RET01cIjtcblxuaW1wb3J0IENvbW1lbnRzTGlzdCBmcm9tIFwiLi92YW5pbGxhQXBwL2NvbW1lbnRzTGlzdFwiO1xuXG5pbXBvcnQgeyBST09ULCBUSU1FT1VUIH0gZnJvbSBcIi4vdmFuaWxsYUFwcC9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFuaWxsYUFwcCgpIHtcbiAgY29uc3QgY29tbWVudHNMaXN0ID1cblxuICAgICAgICAgIDxDb21tZW50c0xpc3QvPlxuXG4gICAgICAgICxcbiAgICAgICAgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChST09UKTtcblxuICBSZWFjdERPTS5yZW5kZXIoXG4gICAgY29tbWVudHNMaXN0LFxuICAgIHJvb3RET01FbGVtZW50XG4gICk7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBbXG4gICAgICAgICAgICBcIkhlbGxvIHdvcmxkIHlldCBhZ2FpbiEhIVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2VzXG4gICAgICAgICAgfTtcblxuICAgIGNvbW1lbnRzTGlzdC5zZXRTdGF0ZShzdGF0ZSk7XG4gIH0sIFRJTUVPVVQpO1xufTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O2tCQVNZLFVBQVU7QUFQaEIsR0FBVSxDQUFWLE1BQVU7QUFDUCxHQUFhLENBQWIsU0FBYTtBQUVULEdBQTJCLENBQTNCLGFBQTJCO0FBRXRCLEdBQXdCLENBQXhCLFVBQXdCOzs7Ozs7U0FFOUIsVUFBVSxHQUFHLENBQUM7SUFDcEMsR0FBSyxDQUFDLFlBQVksaUJBUkYsTUFBVSx1QkFHSCxhQUEyQixpQkFVNUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBUmxCLFVBQXdCO0lBSmpDLFNBQWEsU0FjdkIsTUFBTSxDQUNiLFlBQVksRUFDWixjQUFjO0lBR2hCLFVBQVUsWUFBTyxDQUFDO1FBQ2hCLEdBQUssQ0FBQyxRQUFRO2FBQ04sd0JBQTBCO1dBRTVCLEtBQUs7WUFDSCxRQUFRLEVBQVIsUUFBUTs7UUFHaEIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLO0lBQzdCLENBQUMsRUF4QjJCLFVBQXdCO0FBeUJ0RCxDQUFDIn0=