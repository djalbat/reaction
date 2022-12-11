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
var _index = require("../../../index");
var _footer = /*#__PURE__*/ _interopRequireDefault(require("./footer"));
var _addTodo = /*#__PURE__*/ _interopRequireDefault(require("./addTodo"));
var _todoList = /*#__PURE__*/ _interopRequireDefault(require("./todoList"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var TodoApp = function(props, context) {
    return /*#__PURE__*/ _index.React.createElement("div", null, /*#__PURE__*/ _index.React.createElement(_addTodo.default, null), /*#__PURE__*/ _index.React.createElement(_todoList.default, null), /*#__PURE__*/ _index.React.createElement(_footer.default, null));
};
var _default = TodoApp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvQXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCBBZGRUb2RvIGZyb20gXCIuL2FkZFRvZG9cIjtcbmltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi90b2RvTGlzdFwiO1xuXG5jb25zdCBUb2RvQXBwID0gKHByb3BzLCBjb250ZXh0KSA9PlxuXG4gIDxkaXY+XG4gICAgPEFkZFRvZG8vPlxuICAgIDxUb2RvTGlzdC8+XG4gICAgPEZvb3Rlci8+XG4gIDwvZGl2PlxuXG47XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9BcHA7XG4iXSwibmFtZXMiOlsiVG9kb0FwcCIsInByb3BzIiwiY29udGV4dCIsImRpdiIsIkFkZFRvZG8iLCJUb2RvTGlzdCIsIkZvb3RlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0JBOzs7ZUFBQTs7O3FCQWhCc0I7MkRBRUg7NERBQ0M7NkRBQ0M7Ozs7OztBQUVyQixJQUFNQSxVQUFVLFNBQUNDLE9BQU9DO3lCQUV0QiwyQkFBQ0MsMkJBQ0MsMkJBQUNDLGdCQUFPLHVCQUNSLDJCQUFDQyxpQkFBUSx1QkFDVCwyQkFBQ0MsZUFBTTs7SUFLWCxXQUFlTiJ9