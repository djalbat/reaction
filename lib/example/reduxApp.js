"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = reduxApp;
var _index = require("../index");
var _redux = require("./reduxApp/redux");
var _reducer = _interopRequireDefault(require("./reduxApp/reducer"));
var _todoApp = _interopRequireDefault(require("./reduxApp/component/todoApp"));
var _provider = _interopRequireDefault(require("./reduxApp/component/provider"));
var _constants = require("./reduxApp/constants");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function reduxApp() {
    var store = (0, _redux).createStore(_reducer.default), rootDOMElement = document.getElementById(_constants.ROOT);
    _index.ReactDOM.render(/*#__PURE__*/ _index.React.createElement(_provider.default, {
        store: store
    }, /*#__PURE__*/ _index.React.createElement(_todoApp.default, null)), rootDOMElement);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJUb2RvQXBwIiwiUHJvdmlkZXIiLCJST09UIiwicmVkdXhBcHAiLCJzdG9yZSIsInJvb3RET01FbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztrQkFZWSxRQUFRO0FBVkEsR0FBVSxDQUFWLE1BQVU7QUFFZCxHQUFrQixDQUFsQixNQUFrQjtBQUUxQixHQUFvQixDQUFwQixRQUFvQjtBQUNwQixHQUE4QixDQUE5QixRQUE4QjtBQUM3QixHQUErQixDQUEvQixTQUErQjtBQUUvQixHQUFzQixDQUF0QixVQUFzQjs7Ozs7O1NBRW5CLFFBQVEsR0FBRyxDQUFDO0lBQ2xDLEdBQUssQ0FBQyxLQUFLLE9BVGUsTUFBa0IsY0FFMUIsUUFBb0IsV0FRaEMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBSjNCLFVBQXNCO0lBUlgsTUFBVSxVQWMvQixNQUFNLGVBZGUsTUFBVSxxQkFNckIsU0FBK0I7UUFVcEMsS0FBSyxFQUFFLEtBQUs7cUJBaEJJLE1BQVUscUJBS3RCLFFBQThCLGtCQWdCOUMsY0FBYztBQUVsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0LCBSZWFjdERPTSB9IGZyb20gXCIuLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwiLi9yZWR1eEFwcC9yZWR1eFwiO1xuXG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi9yZWR1eEFwcC9yZWR1Y2VyXCI7XG5pbXBvcnQgVG9kb0FwcCBmcm9tIFwiLi9yZWR1eEFwcC9jb21wb25lbnQvdG9kb0FwcFwiO1xuaW1wb3J0IFByb3ZpZGVyIGZyb20gXCIuL3JlZHV4QXBwL2NvbXBvbmVudC9wcm92aWRlclwiO1xuXG5pbXBvcnQgeyBST09UIH0gZnJvbSBcIi4vcmVkdXhBcHAvY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHV4QXBwKCkge1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpLFxuICAgICAgICByb290RE9NRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFJPT1QpO1xuXG4gIFJlYWN0RE9NLnJlbmRlcihcblxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxUb2RvQXBwLz5cbiAgICAgIDwvUHJvdmlkZXI+XG5cbiAgICAsXG4gICAgcm9vdERPTUVsZW1lbnRcbiAgKTtcbn1cbiJdfQ==