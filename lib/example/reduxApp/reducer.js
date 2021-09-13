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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHVjZXIuanMiXSwibmFtZXMiOlsiY29tYmluZVJlZHVjZXJzIiwidG9kb3MiLCJ2aXNpYmlsaXR5RmlsdGVyIiwicmVkdWNlciJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFb0IsR0FBUyxDQUFULE1BQVM7QUFFdkIsR0FBaUIsQ0FBakIsTUFBaUI7QUFDTixHQUE0QixDQUE1QixpQkFBNEI7Ozs7OztBQUV6RCxHQUFLLENBQUMsT0FBTyxPQUxtQixNQUFTLGtCQUtULENBQUM7SUFDL0IsS0FBSyxFQUpXLE1BQWlCO0lBS2pDLGdCQUFnQixFQUpXLGlCQUE0QjtBQUt6RCxDQUFDO2VBRWMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwiLi9yZWR1eFwiO1xuXG5pbXBvcnQgdG9kb3MgZnJvbSBcIi4vcmVkdWNlci90b2Rvc1wiO1xuaW1wb3J0IHZpc2liaWxpdHlGaWx0ZXIgZnJvbSBcIi4vcmVkdWNlci92aXNpYmlsaXR5RmlsdGVyXCI7XG5cbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICB0b2RvcyxcbiAgdmlzaWJpbGl0eUZpbHRlclxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iXX0=