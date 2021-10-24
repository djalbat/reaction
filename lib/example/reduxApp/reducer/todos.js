"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = todos1;
var _constants = require("../constants");
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
}
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
function todos1(param, param1) {
    var state = param === void 0 ? [] : param, action = param1 === void 0 ? {
    } : param1;
    var type = action.type;
    var todos = state;
    switch(type){
        case _constants.ADD_TODO:
            todos = addTodoToTodos(todos, action);
            break;
        case _constants.TOGGLE_TODO:
            todos = toggleTodos(todos, action);
            break;
    }
    state = todos;
    return state;
}
function addTodoToTodos(todos, action) {
    var id = action.id, text = action.text, completed = false, todo = {
        id: id,
        text: text,
        completed: completed
    };
    todos = _toConsumableArray(todos).concat([
        todo
    ]);
    return todos;
}
function toggleTodos(todos, action) {
    var id = action.id;
    todos = todos.map(function(todo) {
        if (todo.id === id) {
            var completed = todo.completed;
            completed = !completed;
            todo.completed = completed;
        }
        return todo;
    });
    return todos;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHVjZXIvdG9kb3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFERF9UT0RPLCBUT0dHTEVfVE9ETyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb3Moc3RhdGUgPSBbXSwgYWN0aW9uID0ge30pIHtcbiAgY29uc3QgeyB0eXBlIH0gPSBhY3Rpb247XG5cbiAgbGV0IHRvZG9zID0gc3RhdGU7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBBRERfVE9ETyA6XG4gICAgICB0b2RvcyA9IGFkZFRvZG9Ub1RvZG9zKHRvZG9zLCBhY3Rpb24pO1xuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgVE9HR0xFX1RPRE8gOlxuICAgICAgdG9kb3MgPSB0b2dnbGVUb2Rvcyh0b2RvcywgYWN0aW9uKTtcblxuICAgICAgYnJlYWs7XG4gIH1cblxuICBzdGF0ZSA9IHRvZG9zO1xuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gYWRkVG9kb1RvVG9kb3ModG9kb3MsIGFjdGlvbikge1xuICBjb25zdCB7IGlkLCB0ZXh0IH0gPSBhY3Rpb24sXG4gICAgICAgIGNvbXBsZXRlZCA9IGZhbHNlLFxuICAgICAgICB0b2RvID0ge1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIHRleHQsXG4gICAgICAgICAgY29tcGxldGVkXG4gICAgICAgIH07XG5cbiAgdG9kb3MgPSBbXG4gICAgLi4udG9kb3MsXG4gICAgdG9kb1xuICBdO1xuXG4gIHJldHVybiB0b2Rvcztcbn1cblxuZnVuY3Rpb24gdG9nZ2xlVG9kb3ModG9kb3MsIGFjdGlvbikge1xuICBjb25zdCB7IGlkIH0gPSBhY3Rpb247XG5cbiAgdG9kb3MgPSB0b2Rvcy5tYXAoKHRvZG8pID0+IHtcbiAgICBpZiAodG9kby5pZCA9PT0gaWQpIHtcbiAgICAgIGxldCB7IGNvbXBsZXRlZCB9ID0gdG9kbztcblxuICAgICAgY29tcGxldGVkID0gIWNvbXBsZXRlZDtcblxuICAgICAgdG9kby5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvZG87XG4gIH0pO1xuXG4gIHJldHVybiB0b2Rvcztcbn1cbiJdLCJuYW1lcyI6WyJ0b2RvcyIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImFkZFRvZG9Ub1RvZG9zIiwidG9nZ2xlVG9kb3MiLCJpZCIsInRleHQiLCJjb21wbGV0ZWQiLCJ0b2RvIiwibWFwIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7O2tCQUlZQSxNQUFLO0FBRlMsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUU1QkEsTUFBSyxDQUFDQyxLQUFVLEVBQUVDLE1BQVcsRUFBRSxDQUFDO1FBQTFCRCxLQUFLLEdBQUxBLEtBQVUsY0FBRixDQUFDLENBQUMsR0FBVkEsS0FBVSxFQUFFQyxNQUFNLEdBQU5BLE1BQVcsY0FBRixDQUFDO0lBQUEsQ0FBQyxHQUFYQSxNQUFXO0lBQ25ELEdBQUssQ0FBR0MsSUFBSSxHQUFLRCxNQUFNLENBQWZDLElBQUk7SUFFWixHQUFHLENBQUNILEtBQUssR0FBR0MsS0FBSztJQUVqQixNQUFNLENBQUVFLElBQUk7UUFDVixJQUFJLENBUjhCLFVBQWM7WUFTOUNILEtBQUssR0FBR0ksY0FBYyxDQUFDSixLQUFLLEVBQUVFLE1BQU07WUFFcEMsS0FBSztRQUVQLElBQUksQ0FiOEIsVUFBYztZQWM5Q0YsS0FBSyxHQUFHSyxXQUFXLENBQUNMLEtBQUssRUFBRUUsTUFBTTtZQUVqQyxLQUFLOztJQUdURCxLQUFLLEdBQUdELEtBQUs7SUFFYixNQUFNLENBQUNDLEtBQUs7QUFDZCxDQUFDO1NBRVFHLGNBQWMsQ0FBQ0osS0FBSyxFQUFFRSxNQUFNLEVBQUUsQ0FBQztJQUN0QyxHQUFLLENBQUdJLEVBQUUsR0FBV0osTUFBTSxDQUFuQkksRUFBRSxFQUFFQyxJQUFJLEdBQUtMLE1BQU0sQ0FBZkssSUFBSSxFQUNWQyxTQUFTLEdBQUcsS0FBSyxFQUNqQkMsSUFBSSxHQUFHLENBQUM7UUFDTkgsRUFBRSxFQUFGQSxFQUFFO1FBQ0ZDLElBQUksRUFBSkEsSUFBSTtRQUNKQyxTQUFTLEVBQVRBLFNBQVM7SUFDWCxDQUFDO0lBRVBSLEtBQUssc0JBQ0FBLEtBQUssU0FERixDQUFDO1FBRVBTLElBQUk7SUFDTixDQUFDO0lBRUQsTUFBTSxDQUFDVCxLQUFLO0FBQ2QsQ0FBQztTQUVRSyxXQUFXLENBQUNMLEtBQUssRUFBRUUsTUFBTSxFQUFFLENBQUM7SUFDbkMsR0FBSyxDQUFHSSxFQUFFLEdBQUtKLE1BQU0sQ0FBYkksRUFBRTtJQUVWTixLQUFLLEdBQUdBLEtBQUssQ0FBQ1UsR0FBRyxDQUFDLFFBQVEsQ0FBUEQsSUFBSSxFQUFLLENBQUM7UUFDM0IsRUFBRSxFQUFFQSxJQUFJLENBQUNILEVBQUUsS0FBS0EsRUFBRSxFQUFFLENBQUM7WUFDbkIsR0FBRyxDQUFHRSxTQUFTLEdBQUtDLElBQUksQ0FBbEJELFNBQVM7WUFFZkEsU0FBUyxJQUFJQSxTQUFTO1lBRXRCQyxJQUFJLENBQUNELFNBQVMsR0FBR0EsU0FBUztRQUM1QixDQUFDO1FBRUQsTUFBTSxDQUFDQyxJQUFJO0lBQ2IsQ0FBQztJQUVELE1BQU0sQ0FBQ1QsS0FBSztBQUNkLENBQUMifQ==