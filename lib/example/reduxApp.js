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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCwgUmVhY3RET00gfSBmcm9tIFwiLi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSBcIi4vcmVkdXhBcHAvcmVkdXhcIjtcblxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4vcmVkdXhBcHAvcmVkdWNlclwiO1xuaW1wb3J0IFRvZG9BcHAgZnJvbSBcIi4vcmVkdXhBcHAvY29tcG9uZW50L3RvZG9BcHBcIjtcbmltcG9ydCBQcm92aWRlciBmcm9tIFwiLi9yZWR1eEFwcC9jb21wb25lbnQvcHJvdmlkZXJcIjtcblxuaW1wb3J0IHsgUk9PVCB9IGZyb20gXCIuL3JlZHV4QXBwL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1eEFwcCgpIHtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyKSxcbiAgICAgICAgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChST09UKTtcblxuICBSZWFjdERPTS5yZW5kZXIoXG5cbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8VG9kb0FwcC8+XG4gICAgICA8L1Byb3ZpZGVyPlxuXG4gICAgLFxuICAgIHJvb3RET01FbGVtZW50XG4gICk7XG59XG4iXSwibmFtZXMiOlsicmVkdXhBcHAiLCJzdG9yZSIsInJvb3RET01FbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7OztrQkFZWUEsUUFBUTtBQVZBLEdBQVUsQ0FBVixNQUFVO0FBRWQsR0FBa0IsQ0FBbEIsTUFBa0I7QUFFMUIsR0FBb0IsQ0FBcEIsUUFBb0I7QUFDcEIsR0FBOEIsQ0FBOUIsUUFBOEI7QUFDN0IsR0FBK0IsQ0FBL0IsU0FBK0I7QUFFL0IsR0FBc0IsQ0FBdEIsVUFBc0I7Ozs7OztTQUVuQkEsUUFBUSxHQUFHLENBQUM7SUFDbEMsR0FBSyxDQUFDQyxLQUFLLE9BVGUsTUFBa0IsY0FFMUIsUUFBb0IsV0FRaENDLGNBQWMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBSjNCLFVBQXNCO0lBUlgsTUFBVSxVQWMvQkMsTUFBTSxlQWRlLE1BQVUscUJBTXJCLFNBQStCO1FBVXBDSixLQUFLLEVBQUVBLEtBQUs7cUJBaEJJLE1BQVUscUJBS3RCLFFBQThCLGtCQWdCOUNDLGNBQWM7QUFFbEIsQ0FBQyJ9