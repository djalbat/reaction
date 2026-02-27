"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return todos;
    }
});
const _constants = require("../constants");
function todos(state = [], action = {}) {
    const { type } = action;
    let todos1 = state;
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
function addTodoToTodos(todos, action) {
    const { id, text } = action, completed = false, todo = {
        id,
        text,
        completed
    };
    todos = [
        ...todos,
        todo
    ];
    return todos;
}
function toggleTodos(todos, action) {
    const { id } = action;
    todos = todos.map((todo)=>{
        if (todo.id === id) {
            let { completed } = todo;
            completed = !completed;
            todo.completed = completed;
        }
        return todo;
    });
    return todos;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHVjZXIvdG9kb3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFERF9UT0RPLCBUT0dHTEVfVE9ETyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb3Moc3RhdGUgPSBbXSwgYWN0aW9uID0ge30pIHtcbiAgY29uc3QgeyB0eXBlIH0gPSBhY3Rpb247XG5cbiAgbGV0IHRvZG9zID0gc3RhdGU7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBBRERfVE9ETyA6XG4gICAgICB0b2RvcyA9IGFkZFRvZG9Ub1RvZG9zKHRvZG9zLCBhY3Rpb24pO1xuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgVE9HR0xFX1RPRE8gOlxuICAgICAgdG9kb3MgPSB0b2dnbGVUb2Rvcyh0b2RvcywgYWN0aW9uKTtcblxuICAgICAgYnJlYWs7XG4gIH1cblxuICBzdGF0ZSA9IHRvZG9zO1xuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gYWRkVG9kb1RvVG9kb3ModG9kb3MsIGFjdGlvbikge1xuICBjb25zdCB7IGlkLCB0ZXh0IH0gPSBhY3Rpb24sXG4gICAgICAgIGNvbXBsZXRlZCA9IGZhbHNlLFxuICAgICAgICB0b2RvID0ge1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIHRleHQsXG4gICAgICAgICAgY29tcGxldGVkXG4gICAgICAgIH07XG5cbiAgdG9kb3MgPSBbXG4gICAgLi4udG9kb3MsXG4gICAgdG9kb1xuICBdO1xuXG4gIHJldHVybiB0b2Rvcztcbn1cblxuZnVuY3Rpb24gdG9nZ2xlVG9kb3ModG9kb3MsIGFjdGlvbikge1xuICBjb25zdCB7IGlkIH0gPSBhY3Rpb247XG5cbiAgdG9kb3MgPSB0b2Rvcy5tYXAoKHRvZG8pID0+IHtcbiAgICBpZiAodG9kby5pZCA9PT0gaWQpIHtcbiAgICAgIGxldCB7IGNvbXBsZXRlZCB9ID0gdG9kbztcblxuICAgICAgY29tcGxldGVkID0gIWNvbXBsZXRlZDtcblxuICAgICAgdG9kby5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvZG87XG4gIH0pO1xuXG4gIHJldHVybiB0b2Rvcztcbn1cbiJdLCJuYW1lcyI6WyJ0b2RvcyIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkFERF9UT0RPIiwiYWRkVG9kb1RvVG9kb3MiLCJUT0dHTEVfVE9ETyIsInRvZ2dsZVRvZG9zIiwiaWQiLCJ0ZXh0IiwiY29tcGxldGVkIiwidG9kbyIsIm1hcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUF3QkE7OzsyQkFGYztBQUV2QixTQUFTQSxNQUFNQyxRQUFRLEVBQUUsRUFBRUMsU0FBUyxDQUFDLENBQUM7SUFDbkQsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0Q7SUFFakIsSUFBSUYsU0FBUUM7SUFFWixPQUFRRTtRQUNOLEtBQUtDLG1CQUFRO1lBQ1hKLFNBQVFLLGVBQWVMLFFBQU9FO1lBRTlCO1FBRUYsS0FBS0ksc0JBQVc7WUFDZE4sU0FBUU8sWUFBWVAsUUFBT0U7WUFFM0I7SUFDSjtJQUVBRCxRQUFRRDtJQUVSLE9BQU9DO0FBQ1Q7QUFFQSxTQUFTSSxlQUFlTCxLQUFLLEVBQUVFLE1BQU07SUFDbkMsTUFBTSxFQUFFTSxFQUFFLEVBQUVDLElBQUksRUFBRSxHQUFHUCxRQUNmUSxZQUFZLE9BQ1pDLE9BQU87UUFDTEg7UUFDQUM7UUFDQUM7SUFDRjtJQUVOVixRQUFRO1dBQ0hBO1FBQ0hXO0tBQ0Q7SUFFRCxPQUFPWDtBQUNUO0FBRUEsU0FBU08sWUFBWVAsS0FBSyxFQUFFRSxNQUFNO0lBQ2hDLE1BQU0sRUFBRU0sRUFBRSxFQUFFLEdBQUdOO0lBRWZGLFFBQVFBLE1BQU1ZLEdBQUcsQ0FBQyxDQUFDRDtRQUNqQixJQUFJQSxLQUFLSCxFQUFFLEtBQUtBLElBQUk7WUFDbEIsSUFBSSxFQUFFRSxTQUFTLEVBQUUsR0FBR0M7WUFFcEJELFlBQVksQ0FBQ0E7WUFFYkMsS0FBS0QsU0FBUyxHQUFHQTtRQUNuQjtRQUVBLE9BQU9DO0lBQ1Q7SUFFQSxPQUFPWDtBQUNUIn0=