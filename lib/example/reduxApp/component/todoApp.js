"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = require("../../../index");
var _footer = _interopRequireDefault(require("./footer"));
var _addTodo = _interopRequireDefault(require("./addTodo"));
var _todoList = _interopRequireDefault(require("./todoList"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var TodoApp = function(props, context) {
    /*#__PURE__*/ return _index.React.createElement("div", null, /*#__PURE__*/ _index.React.createElement(_addTodo.default, null), /*#__PURE__*/ _index.React.createElement(_todoList.default, null), /*#__PURE__*/ _index.React.createElement(_footer.default, null));
};
var _default = TodoApp;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvQXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCBBZGRUb2RvIGZyb20gXCIuL2FkZFRvZG9cIjtcbmltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi90b2RvTGlzdFwiO1xuXG5jb25zdCBUb2RvQXBwID0gKHByb3BzLCBjb250ZXh0KSA9PlxuXG4gIDxkaXY+XG4gICAgPEFkZFRvZG8vPlxuICAgIDxUb2RvTGlzdC8+XG4gICAgPEZvb3Rlci8+XG4gIDwvZGl2PlxuXG47XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9BcHA7XG4iXSwibmFtZXMiOlsiVG9kb0FwcCIsImNvbnRleHQiLCJwcm9wcyIsImRpdiJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFnQixDQUFoQixNQUFnQjtBQUVuQixHQUFVLENBQVYsT0FBVTtBQUNULEdBQVcsQ0FBWCxRQUFXO0FBQ1YsR0FBWSxDQUFaLFNBQVk7Ozs7OztBQUVqQyxHQUFLLENBQUNBLE9BQU8sR0FBRyxRQUFRQyxDQUFQQyxLQUFLLEVBQUVELE9BQU87a0JBRTdCLE1BQ0YsQ0FUc0IsTUFBZ0IscUJBUW5DRSxDQUFHLDBCQVJnQixNQUFnQixxQkFHbEIsUUFBVywrQkFIVCxNQUFnQixxQkFJakIsU0FBWSwrQkFKWCxNQUFnQixxQkFFbkIsT0FBVTs7ZUFjZEgsT0FBTyJ9