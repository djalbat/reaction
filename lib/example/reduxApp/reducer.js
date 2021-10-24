"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _redux = require("./redux");
var _todos = _interopRequireDefault(require("./reducer/todos"));
var _visibilityFilter = _interopRequireDefault(require("./reducer/visibilityFilter"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var reducer = (0, _redux).combineReducers({
    todos: _todos.default,
    visibilityFilter: _visibilityFilter.default
});
var _default = reducer;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHVjZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCIuL3JlZHV4XCI7XG5cbmltcG9ydCB0b2RvcyBmcm9tIFwiLi9yZWR1Y2VyL3RvZG9zXCI7XG5pbXBvcnQgdmlzaWJpbGl0eUZpbHRlciBmcm9tIFwiLi9yZWR1Y2VyL3Zpc2liaWxpdHlGaWx0ZXJcIjtcblxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIHRvZG9zLFxuICB2aXNpYmlsaXR5RmlsdGVyXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwidG9kb3MiLCJ2aXNpYmlsaXR5RmlsdGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVvQixHQUFTLENBQVQsTUFBUztBQUV2QixHQUFpQixDQUFqQixNQUFpQjtBQUNOLEdBQTRCLENBQTVCLGlCQUE0Qjs7Ozs7O0FBRXpELEdBQUssQ0FBQ0EsT0FBTyxPQUxtQixNQUFTLGtCQUtULENBQUM7SUFDL0JDLEtBQUssRUFKVyxNQUFpQjtJQUtqQ0MsZ0JBQWdCLEVBSlcsaUJBQTRCO0FBS3pELENBQUM7ZUFFY0YsT0FBTyJ9