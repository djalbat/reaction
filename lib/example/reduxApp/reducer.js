"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _redux = require("./redux");
var _todos = /*#__PURE__*/ _interopRequireDefault(require("./reducer/todos"));
var _visibilityFilter = /*#__PURE__*/ _interopRequireDefault(require("./reducer/visibilityFilter"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var reducer = (0, _redux.combineReducers)({
    todos: _todos.default,
    visibilityFilter: _visibilityFilter.default
});
var _default = reducer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHVjZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCIuL3JlZHV4XCI7XG5cbmltcG9ydCB0b2RvcyBmcm9tIFwiLi9yZWR1Y2VyL3RvZG9zXCI7XG5pbXBvcnQgdmlzaWJpbGl0eUZpbHRlciBmcm9tIFwiLi9yZWR1Y2VyL3Zpc2liaWxpdHlGaWx0ZXJcIjtcblxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIHRvZG9zLFxuICB2aXNpYmlsaXR5RmlsdGVyXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwidG9kb3MiLCJ2aXNpYmlsaXR5RmlsdGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBWWIsU0FBdUI7OztlQUF2QixRQUF1Qjs7O3FCQVZTLFNBQVM7MERBRXZCLGlCQUFpQjtxRUFDTiw0QkFBNEI7Ozs7OztBQUV6RCxJQUFNQSxPQUFPLEdBQUdDLElBQUFBLE1BQWUsZ0JBQUEsRUFBQztJQUM5QkMsS0FBSyxFQUFMQSxNQUFLLFFBQUE7SUFDTEMsZ0JBQWdCLEVBQWhCQSxpQkFBZ0IsUUFBQTtDQUNqQixDQUFDLEFBQUM7SUFFSCxRQUF1QixHQUFSSCxPQUFPIn0=