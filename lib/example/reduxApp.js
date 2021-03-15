"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _index = require("../index");
var _redux = require("./reduxApp/redux");
var _reducer = _interopRequireDefault(require("./reduxApp/reducer"));
var _todoApp = _interopRequireDefault(require("./reduxApp/component/todoApp"));
var _provider = _interopRequireDefault(require("./reduxApp/component/provider"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function reduxApp() {
    var store = _redux.createStore(_reducer.default), rootDOMElement = document.getElementById("root");
    _index.ReactDOM.render(_index.React.createElement(_provider.default, {
        store: store
    }, _index.React.createElement(_todoApp.default, null)), rootDOMElement);
}
exports.default = reduxApp;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCwgUmVhY3RET00gfSBmcm9tIFwiLi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSBcIi4vcmVkdXhBcHAvcmVkdXhcIjtcblxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4vcmVkdXhBcHAvcmVkdWNlclwiO1xuaW1wb3J0IFRvZG9BcHAgZnJvbSBcIi4vcmVkdXhBcHAvY29tcG9uZW50L3RvZG9BcHBcIjtcbmltcG9ydCBQcm92aWRlciBmcm9tIFwiLi9yZWR1eEFwcC9jb21wb25lbnQvcHJvdmlkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdXhBcHAoKSB7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciksXG4gICAgICAgIHJvb3RET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuXG4gIFJlYWN0RE9NLnJlbmRlcihcblxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxUb2RvQXBwIC8+XG4gICAgICA8L1Byb3ZpZGVyPlxuXG4gICAgLFxuICAgIHJvb3RET01FbGVtZW50XG5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7O0lBRUEsTUFBQTtJQUVBLE1BQUE7SUFFQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7Ozs7OztTQUVBLFFBQUE7UUFDQSxLQUFBLEdBUEEsTUFBQSxhQUVBLFFBQUEsV0FNQSxjQUFBLEdBQUEsUUFBQSxDQUFBLGNBQUEsRUFBQSxJQUFBO0FBVkEsVUFBQSxVQVlBLE1BQUEsQ0FaQSxNQUFBLHFCQU1BLFNBQUE7QUFRQSxhQUFBLEVBQUEsS0FBQTtPQWRBLE1BQUEscUJBS0EsUUFBQSxrQkFjQSxjQUFBOztrQkFYQSxRQUFBIn0=