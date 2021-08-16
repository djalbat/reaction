"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = todos;
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
function todos(param, param1) {
    var state = param === void 0 ? [] : param, action = param1 === void 0 ? {
    } : param1;
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
function addTodoToTodos(todos1, action) {
    var id = action.id, text = action.text, completed = false, todo = {
        id: id,
        text: text,
        completed: completed
    };
    todos1 = _toConsumableArray(todos1).concat([
        todo
    ]);
    return todos1;
}
function toggleTodos(todos1, action) {
    var id = action.id;
    todos1 = todos1.map(function(todo) {
        if (todo.id === id) {
            var completed = todo.completed;
            completed = !completed;
            todo.completed = completed;
        }
        return todo;
    });
    return todos1;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHVjZXIvdG9kb3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFERF9UT0RPLCBUT0dHTEVfVE9ETyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb3Moc3RhdGUgPSBbXSwgYWN0aW9uID0ge30pIHtcbiAgY29uc3QgeyB0eXBlIH0gPSBhY3Rpb247XG5cbiAgbGV0IHRvZG9zID0gc3RhdGU7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBBRERfVE9ETyA6XG4gICAgICB0b2RvcyA9IGFkZFRvZG9Ub1RvZG9zKHRvZG9zLCBhY3Rpb24pO1xuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgVE9HR0xFX1RPRE8gOlxuICAgICAgdG9kb3MgPSB0b2dnbGVUb2Rvcyh0b2RvcywgYWN0aW9uKTtcblxuICAgICAgYnJlYWs7XG4gIH1cblxuICBzdGF0ZSA9IHRvZG9zO1xuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gYWRkVG9kb1RvVG9kb3ModG9kb3MsIGFjdGlvbikge1xuICBjb25zdCB7IGlkLCB0ZXh0IH0gPSBhY3Rpb24sXG4gICAgICAgIGNvbXBsZXRlZCA9IGZhbHNlLFxuICAgICAgICB0b2RvID0ge1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIHRleHQsXG4gICAgICAgICAgY29tcGxldGVkXG4gICAgICAgIH07XG5cbiAgdG9kb3MgPSBbXG4gICAgLi4udG9kb3MsXG4gICAgdG9kb1xuICBdO1xuXG4gIHJldHVybiB0b2Rvcztcbn1cblxuZnVuY3Rpb24gdG9nZ2xlVG9kb3ModG9kb3MsIGFjdGlvbikge1xuICBjb25zdCB7IGlkIH0gPSBhY3Rpb247XG5cbiAgdG9kb3MgPSB0b2Rvcy5tYXAoKHRvZG8pID0+IHtcbiAgICBpZiAodG9kby5pZCA9PT0gaWQpIHtcbiAgICAgIGxldCB7IGNvbXBsZXRlZCB9ID0gdG9kbztcblxuICAgICAgY29tcGxldGVkID0gIWNvbXBsZXRlZDtcblxuICAgICAgdG9kby5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvZG87XG4gIH0pO1xuXG4gIHJldHVybiB0b2Rvcztcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O2tCQUlZLEtBQUs7QUFGUyxHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBRTVCLEtBQUssQ0FBQyxLQUFVLEVBQUUsTUFBVyxFQUFFLENBQUM7UUFBMUIsS0FBSyxHQUFMLEtBQVUsbUJBQVYsS0FBVSxFQUFFLE1BQU0sR0FBTixNQUFXO1FBQVgsTUFBVztJQUNuRCxHQUFLLENBQUcsSUFBSSxHQUFLLE1BQU0sQ0FBZixJQUFJO0lBRVosR0FBRyxDQUFDLE1BQUssR0FBRyxLQUFLO1dBRVQsSUFBSTthQVB3QixVQUFjO1lBUzlDLE1BQUssR0FBRyxjQUFjLENBQUMsTUFBSyxFQUFFLE1BQU07O2FBVEosVUFBYztZQWM5QyxNQUFLLEdBQUcsV0FBVyxDQUFDLE1BQUssRUFBRSxNQUFNOzs7SUFLckMsS0FBSyxHQUFHLE1BQUs7V0FFTixLQUFLO0FBQ2QsQ0FBQztTQUVRLGNBQWMsQ0FBQyxNQUFLLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFDdEMsR0FBSyxDQUFHLEVBQUUsR0FBVyxNQUFNLENBQW5CLEVBQUUsRUFBRSxJQUFJLEdBQUssTUFBTSxDQUFmLElBQUksRUFDVixTQUFTLEdBQUcsS0FBSyxFQUNqQixJQUFJO1FBQ0YsRUFBRSxFQUFGLEVBQUU7UUFDRixJQUFJLEVBQUosSUFBSTtRQUNKLFNBQVMsRUFBVCxTQUFTOztJQUdqQixNQUFLLHNCQUNBLE1BQUs7UUFDUixJQUFJOztXQUdDLE1BQUs7QUFDZCxDQUFDO1NBRVEsV0FBVyxDQUFDLE1BQUssRUFBRSxNQUFNLEVBQUUsQ0FBQztJQUNuQyxHQUFLLENBQUcsRUFBRSxHQUFLLE1BQU0sQ0FBYixFQUFFO0lBRVYsTUFBSyxHQUFHLE1BQUssQ0FBQyxHQUFHLFVBQUUsSUFBSSxFQUFLLENBQUM7UUFDM0IsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7WUFDbkIsR0FBRyxDQUFHLFNBQVMsR0FBSyxJQUFJLENBQWxCLFNBQVM7WUFFZixTQUFTLElBQUksU0FBUztZQUV0QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVM7UUFDNUIsQ0FBQztlQUVNLElBQUk7SUFDYixDQUFDO1dBRU0sTUFBSztBQUNkLENBQUMifQ==