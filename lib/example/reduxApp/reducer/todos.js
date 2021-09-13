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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHVjZXIvdG9kb3MuanMiXSwibmFtZXMiOlsiQUREX1RPRE8iLCJUT0dHTEVfVE9ETyIsInRvZG9zIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiYWRkVG9kb1RvVG9kb3MiLCJ0b2dnbGVUb2RvcyIsImlkIiwidGV4dCIsImNvbXBsZXRlZCIsInRvZG8iLCJtYXAiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7a0JBSVksS0FBSztBQUZTLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFNUIsS0FBSyxDQUFDLEtBQVUsRUFBRSxNQUFXLEVBQUUsQ0FBQztRQUExQixLQUFLLEdBQUwsS0FBVSxjQUFGLENBQUMsQ0FBQyxHQUFWLEtBQVUsRUFBRSxNQUFNLEdBQU4sTUFBVyxjQUFGLENBQUM7SUFBQSxDQUFDLEdBQVgsTUFBVztJQUNuRCxHQUFLLENBQUcsSUFBSSxHQUFLLE1BQU0sQ0FBZixJQUFJO0lBRVosR0FBRyxDQUFDLEtBQUssR0FBRyxLQUFLO0lBRWpCLE1BQU0sQ0FBRSxJQUFJO1FBQ1YsSUFBSSxDQVI4QixVQUFjO1lBUzlDLEtBQUssR0FBRyxjQUFjLENBQUMsS0FBSyxFQUFFLE1BQU07WUFFcEMsS0FBSztRQUVQLElBQUksQ0FiOEIsVUFBYztZQWM5QyxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssRUFBRSxNQUFNO1lBRWpDLEtBQUs7O0lBR1QsS0FBSyxHQUFHLEtBQUs7SUFFYixNQUFNLENBQUMsS0FBSztBQUNkLENBQUM7U0FFUSxjQUFjLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBQ3RDLEdBQUssQ0FBRyxFQUFFLEdBQVcsTUFBTSxDQUFuQixFQUFFLEVBQUUsSUFBSSxHQUFLLE1BQU0sQ0FBZixJQUFJLEVBQ1YsU0FBUyxHQUFHLEtBQUssRUFDakIsSUFBSSxHQUFHLENBQUM7UUFDTixFQUFFLEVBQUYsRUFBRTtRQUNGLElBQUksRUFBSixJQUFJO1FBQ0osU0FBUyxFQUFULFNBQVM7SUFDWCxDQUFDO0lBRVAsS0FBSyxzQkFDQSxLQUFLLFNBREYsQ0FBQztRQUVQLElBQUk7SUFDTixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQUs7QUFDZCxDQUFDO1NBRVEsV0FBVyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQztJQUNuQyxHQUFLLENBQUcsRUFBRSxHQUFLLE1BQU0sQ0FBYixFQUFFO0lBRVYsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFQLElBQUksRUFBSyxDQUFDO1FBQzNCLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQ25CLEdBQUcsQ0FBRyxTQUFTLEdBQUssSUFBSSxDQUFsQixTQUFTO1lBRWYsU0FBUyxJQUFJLFNBQVM7WUFFdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTO1FBQzVCLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSTtJQUNiLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBSztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQUREX1RPRE8sIFRPR0dMRV9UT0RPIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2RvcyhzdGF0ZSA9IFtdLCBhY3Rpb24gPSB7fSkge1xuICBjb25zdCB7IHR5cGUgfSA9IGFjdGlvbjtcblxuICBsZXQgdG9kb3MgPSBzdGF0ZTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEFERF9UT0RPIDpcbiAgICAgIHRvZG9zID0gYWRkVG9kb1RvVG9kb3ModG9kb3MsIGFjdGlvbik7XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBUT0dHTEVfVE9ETyA6XG4gICAgICB0b2RvcyA9IHRvZ2dsZVRvZG9zKHRvZG9zLCBhY3Rpb24pO1xuXG4gICAgICBicmVhaztcbiAgfVxuXG4gIHN0YXRlID0gdG9kb3M7XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBhZGRUb2RvVG9Ub2Rvcyh0b2RvcywgYWN0aW9uKSB7XG4gIGNvbnN0IHsgaWQsIHRleHQgfSA9IGFjdGlvbixcbiAgICAgICAgY29tcGxldGVkID0gZmFsc2UsXG4gICAgICAgIHRvZG8gPSB7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgdGV4dCxcbiAgICAgICAgICBjb21wbGV0ZWRcbiAgICAgICAgfTtcblxuICB0b2RvcyA9IFtcbiAgICAuLi50b2RvcyxcbiAgICB0b2RvXG4gIF07XG5cbiAgcmV0dXJuIHRvZG9zO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVUb2Rvcyh0b2RvcywgYWN0aW9uKSB7XG4gIGNvbnN0IHsgaWQgfSA9IGFjdGlvbjtcblxuICB0b2RvcyA9IHRvZG9zLm1hcCgodG9kbykgPT4ge1xuICAgIGlmICh0b2RvLmlkID09PSBpZCkge1xuICAgICAgbGV0IHsgY29tcGxldGVkIH0gPSB0b2RvO1xuXG4gICAgICBjb21wbGV0ZWQgPSAhY29tcGxldGVkO1xuXG4gICAgICB0b2RvLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9kbztcbiAgfSk7XG5cbiAgcmV0dXJuIHRvZG9zO1xufVxuIl19