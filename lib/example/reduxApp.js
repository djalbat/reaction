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
const _index = require("../index");
const _redux = require("./reduxApp/redux");
const _reducer = /*#__PURE__*/ _interop_require_default(require("./reduxApp/reducer"));
const _todoApp = /*#__PURE__*/ _interop_require_default(require("./reduxApp/component/todoApp"));
const _provider = /*#__PURE__*/ _interop_require_default(require("./reduxApp/component/provider"));
const _constants = require("./reduxApp/constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function reduxApp() {
    const store = (0, _redux.createStore)(_reducer.default), rootDOMElement = document.getElementById(_constants.ROOT);
    _index.ReactDOM.render(/*#__PURE__*/ _index.React.createElement(_provider.default, {
        store: store
    }, /*#__PURE__*/ _index.React.createElement(_todoApp.default, null)), rootDOMElement);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCwgUmVhY3RET00gfSBmcm9tIFwiLi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSBcIi4vcmVkdXhBcHAvcmVkdXhcIjtcblxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4vcmVkdXhBcHAvcmVkdWNlclwiO1xuaW1wb3J0IFRvZG9BcHAgZnJvbSBcIi4vcmVkdXhBcHAvY29tcG9uZW50L3RvZG9BcHBcIjtcbmltcG9ydCBQcm92aWRlciBmcm9tIFwiLi9yZWR1eEFwcC9jb21wb25lbnQvcHJvdmlkZXJcIjtcblxuaW1wb3J0IHsgUk9PVCB9IGZyb20gXCIuL3JlZHV4QXBwL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1eEFwcCgpIHtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyKSxcbiAgICAgICAgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChST09UKTtcblxuICBSZWFjdERPTS5yZW5kZXIoXG5cbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8VG9kb0FwcC8+XG4gICAgICA8L1Byb3ZpZGVyPlxuXG4gICAgLFxuICAgIHJvb3RET01FbGVtZW50XG4gICk7XG59XG4iXSwibmFtZXMiOlsicmVkdXhBcHAiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsInJvb3RET01FbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJPT1QiLCJSZWFjdERPTSIsInJlbmRlciIsIlByb3ZpZGVyIiwiVG9kb0FwcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUF3QkE7Ozt1QkFWUTt1QkFFSjtnRUFFUjtnRUFDQTtpRUFDQzsyQkFFQTs7Ozs7O0FBRU4sU0FBU0E7SUFDdEIsTUFBTUMsUUFBUUMsSUFBQUEsa0JBQVcsRUFBQ0MsZ0JBQU8sR0FDM0JDLGlCQUFpQkMsU0FBU0MsY0FBYyxDQUFDQyxlQUFJO0lBRW5EQyxlQUFRLENBQUNDLE1BQU0sZUFFWCwyQkFBQ0MsaUJBQVE7UUFBQ1QsT0FBT0E7cUJBQ2YsMkJBQUNVLGdCQUFPLFVBSVpQO0FBRUoifQ==