"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return hooksApp;
    }
});
var _reactDOM = /*#__PURE__*/ _interop_require_default(require("../reactDOM"));
require("./hooksApp/preamble");
var _view = /*#__PURE__*/ _interop_require_default(require("./hooksApp/view"));
var _constants = require("./hooksApp/constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function hooksApp() {
    var rootDOMElement = document.getElementById(_constants.ROOT);
    _reactDOM.default.render(/*#__PURE__*/ React.createElement(_view.default, null), rootDOMElement);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcIi4uL3JlYWN0RE9NXCI7XG5cbmltcG9ydCBcIi4vaG9va3NBcHAvcHJlYW1ibGVcIjtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4vaG9va3NBcHAvdmlld1wiO1xuXG5pbXBvcnQgeyBST09UIH0gZnJvbSBcIi4vaG9va3NBcHAvY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvb2tzQXBwKCkge1xuICBjb25zdCByb290RE9NRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFJPT1QpO1xuXG4gIFJlYWN0RE9NLnJlbmRlcihcblxuICAgICAgPFZpZXcvPlxuXG4gICAgLFxuICAgIHJvb3RET01FbGVtZW50XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbImhvb2tzQXBwIiwicm9vdERPTUVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUk9PVCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiVmlldyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUF3QkE7OzsrREFSSDtRQUVkOzJEQUVVO3lCQUVJOzs7Ozs7QUFFTixTQUFTQTtJQUN0QixJQUFNQyxpQkFBaUJDLFNBQVNDLGNBQWMsQ0FBQ0MsZUFBSTtJQUVuREMsaUJBQVEsQ0FBQ0MsTUFBTSxlQUVYLG9CQUFDQyxhQUFJLFNBR1BOO0FBRUoifQ==