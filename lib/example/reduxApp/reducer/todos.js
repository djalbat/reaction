"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = todos;
var _constants = require("../constants");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function todos() {
    var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], action = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var type = action.type;
    var todos1 = state;
    switch(type){
        case _constants.ADD_TODO:
            todos1 = addTodoToTodos(todos1, action);
            break;
        case _constants.TOGGLE_TODO:
            todos1 = toggleTodos(todos1, action);
            break;
    }
    state = todos1;
    return state;
}
function addTodoToTodos(todos2, action) {
    var id = action.id, text = action.text, completed = false, todo = {
        id: id,
        text: text,
        completed: completed
    };
    todos2 = _toConsumableArray(todos2).concat([
        todo
    ]);
    return todos2;
}
function toggleTodos(todos3, action) {
    var id = action.id;
    todos3 = todos3.map(function(todo) {
        if (todo.id === id) {
            var completed = todo.completed;
            completed = !completed;
            todo.completed = completed;
        }
        return todo;
    });
    return todos3;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHVjZXIvdG9kb3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFERF9UT0RPLCBUT0dHTEVfVE9ETyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb3Moc3RhdGUgPSBbXSwgYWN0aW9uID0ge30pIHtcbiAgY29uc3QgeyB0eXBlIH0gPSBhY3Rpb247XG5cbiAgbGV0IHRvZG9zID0gc3RhdGU7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBBRERfVE9ETyA6XG4gICAgICB0b2RvcyA9IGFkZFRvZG9Ub1RvZG9zKHRvZG9zLCBhY3Rpb24pO1xuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgVE9HR0xFX1RPRE8gOlxuICAgICAgdG9kb3MgPSB0b2dnbGVUb2Rvcyh0b2RvcywgYWN0aW9uKTtcblxuICAgICAgYnJlYWs7XG4gIH1cblxuICBzdGF0ZSA9IHRvZG9zO1xuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gYWRkVG9kb1RvVG9kb3ModG9kb3MsIGFjdGlvbikge1xuICBjb25zdCB7IGlkLCB0ZXh0IH0gPSBhY3Rpb24sXG4gICAgICAgIGNvbXBsZXRlZCA9IGZhbHNlLFxuICAgICAgICB0b2RvID0ge1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIHRleHQsXG4gICAgICAgICAgY29tcGxldGVkXG4gICAgICAgIH07XG5cbiAgdG9kb3MgPSBbXG4gICAgLi4udG9kb3MsXG4gICAgdG9kb1xuICBdO1xuXG4gIHJldHVybiB0b2Rvcztcbn1cblxuZnVuY3Rpb24gdG9nZ2xlVG9kb3ModG9kb3MsIGFjdGlvbikge1xuICBjb25zdCB7IGlkIH0gPSBhY3Rpb247XG5cbiAgdG9kb3MgPSB0b2Rvcy5tYXAoKHRvZG8pID0+IHtcbiAgICBpZiAodG9kby5pZCA9PT0gaWQpIHtcbiAgICAgIGxldCB7IGNvbXBsZXRlZCB9ID0gdG9kbztcblxuICAgICAgY29tcGxldGVkID0gIWNvbXBsZXRlZDtcblxuICAgICAgdG9kby5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvZG87XG4gIH0pO1xuXG4gIHJldHVybiB0b2Rvcztcbn1cbiJdLCJuYW1lcyI6WyJ0b2RvcyIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImFkZFRvZG9Ub1RvZG9zIiwidG9nZ2xlVG9kb3MiLCJpZCIsInRleHQiLCJjb21wbGV0ZWQiLCJ0b2RvIiwibWFwIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7O2tCQUlZQSxLQUFLO0FBRlMsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBRTVCQSxLQUFLLEdBQTBCLENBQUM7UUFBMUJDLEtBQUssb0VBQUcsQ0FBQyxDQUFDLEVBQUVDLE1BQU0sb0VBQUcsQ0FBQyxDQUFDO0lBQ25ELEdBQUssQ0FBR0MsSUFBSSxHQUFLRCxNQUFNLENBQWZDLElBQUk7SUFFWixHQUFHLENBQUNILE1BQUssR0FBR0MsS0FBSztJQUVqQixNQUFNLENBQUVFLElBQUk7UUFDVixJQUFJLENBUjhCLFVBQWM7WUFTOUNILE1BQUssR0FBR0ksY0FBYyxDQUFDSixNQUFLLEVBQUVFLE1BQU07WUFFcEMsS0FBSztRQUVQLElBQUksQ0FiOEIsVUFBYztZQWM5Q0YsTUFBSyxHQUFHSyxXQUFXLENBQUNMLE1BQUssRUFBRUUsTUFBTTtZQUVqQyxLQUFLOztJQUdURCxLQUFLLEdBQUdELE1BQUs7SUFFYixNQUFNLENBQUNDLEtBQUs7QUFDZCxDQUFDO1NBRVFHLGNBQWMsQ0FBQ0osTUFBSyxFQUFFRSxNQUFNLEVBQUUsQ0FBQztJQUN0QyxHQUFLLENBQUdJLEVBQUUsR0FBV0osTUFBTSxDQUFuQkksRUFBRSxFQUFFQyxJQUFJLEdBQUtMLE1BQU0sQ0FBZkssSUFBSSxFQUNWQyxTQUFTLEdBQUcsS0FBSyxFQUNqQkMsSUFBSSxHQUFHLENBQUM7UUFDTkgsRUFBRSxFQUFGQSxFQUFFO1FBQ0ZDLElBQUksRUFBSkEsSUFBSTtRQUNKQyxTQUFTLEVBQVRBLFNBQVM7SUFDWCxDQUFDO0lBRVBSLE1BQUssc0JBQ0FBLE1BQUssU0FERixDQUFDO1FBRVBTLElBQUk7SUFDTixDQUFDO0lBRUQsTUFBTSxDQUFDVCxNQUFLO0FBQ2QsQ0FBQztTQUVRSyxXQUFXLENBQUNMLE1BQUssRUFBRUUsTUFBTSxFQUFFLENBQUM7SUFDbkMsR0FBSyxDQUFHSSxFQUFFLEdBQUtKLE1BQU0sQ0FBYkksRUFBRTtJQUVWTixNQUFLLEdBQUdBLE1BQUssQ0FBQ1UsR0FBRyxDQUFDLFFBQVEsQ0FBUEQsSUFBSSxFQUFLLENBQUM7UUFDM0IsRUFBRSxFQUFFQSxJQUFJLENBQUNILEVBQUUsS0FBS0EsRUFBRSxFQUFFLENBQUM7WUFDbkIsR0FBRyxDQUFHRSxTQUFTLEdBQUtDLElBQUksQ0FBbEJELFNBQVM7WUFFZkEsU0FBUyxJQUFJQSxTQUFTO1lBRXRCQyxJQUFJLENBQUNELFNBQVMsR0FBR0EsU0FBUztRQUM1QixDQUFDO1FBRUQsTUFBTSxDQUFDQyxJQUFJO0lBQ2IsQ0FBQztJQUVELE1BQU0sQ0FBQ1QsTUFBSztBQUNkLENBQUMifQ==