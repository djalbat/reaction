"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return reduxApp;
    }
});
var _index = require("../index");
var _redux = require("./reduxApp/redux");
var _reducer = /*#__PURE__*/ _interopRequireDefault(require("./reduxApp/reducer"));
var _todoApp = /*#__PURE__*/ _interopRequireDefault(require("./reduxApp/component/todoApp"));
var _provider = /*#__PURE__*/ _interopRequireDefault(require("./reduxApp/component/provider"));
var _constants = require("./reduxApp/constants");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function reduxApp() {
    var store = (0, _redux.createStore)(_reducer.default), rootDOMElement = document.getElementById(_constants.ROOT);
    _index.ReactDOM.render(/*#__PURE__*/ _index.React.createElement(_provider.default, {
        store: store
    }, /*#__PURE__*/ _index.React.createElement(_todoApp.default, null)), rootDOMElement);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCwgUmVhY3RET00gfSBmcm9tIFwiLi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSBcIi4vcmVkdXhBcHAvcmVkdXhcIjtcblxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4vcmVkdXhBcHAvcmVkdWNlclwiO1xuaW1wb3J0IFRvZG9BcHAgZnJvbSBcIi4vcmVkdXhBcHAvY29tcG9uZW50L3RvZG9BcHBcIjtcbmltcG9ydCBQcm92aWRlciBmcm9tIFwiLi9yZWR1eEFwcC9jb21wb25lbnQvcHJvdmlkZXJcIjtcblxuaW1wb3J0IHsgUk9PVCB9IGZyb20gXCIuL3JlZHV4QXBwL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1eEFwcCgpIHtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyKSxcbiAgICAgICAgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChST09UKTtcblxuICBSZWFjdERPTS5yZW5kZXIoXG5cbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8VG9kb0FwcC8+XG4gICAgICA8L1Byb3ZpZGVyPlxuXG4gICAgLFxuICAgIHJvb3RET01FbGVtZW50XG4gICk7XG59XG4iXSwibmFtZXMiOlsicmVkdXhBcHAiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsInJvb3RET01FbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJPT1QiLCJSZWFjdERPTSIsInJlbmRlciIsIlByb3ZpZGVyIiwiVG9kb0FwcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUF3QkE7OztxQkFWUTtxQkFFSjs0REFFUjs0REFDQTs2REFDQzt5QkFFQTs7Ozs7O0FBRU4sU0FBU0EsV0FBVztJQUNqQyxJQUFNQyxRQUFRQyxJQUFBQSxrQkFBVyxFQUFDQyxnQkFBTyxHQUMzQkMsaUJBQWlCQyxTQUFTQyxjQUFjLENBQUNDLGVBQUk7SUFFbkRDLGVBQVEsQ0FBQ0MsTUFBTSxlQUVYLDJCQUFDQyxpQkFBUTtRQUFDVCxPQUFPQTtxQkFDZiwyQkFBQ1UsZ0JBQU8sVUFJWlA7QUFFSiJ9