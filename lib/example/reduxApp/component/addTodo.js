"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = require("../../../index");
var _constants = require("../constants");
var id = 0, inputDOMElement;
var AddTodo = function(props, context) {
    var store = context.store;
    return(/*#__PURE__*/ _index.React.createElement("div", null, /*#__PURE__*/ _index.React.createElement("input", {
        ref: function(domElement) {
            inputDOMElement = domElement;
        }
    }), /*#__PURE__*/ _index.React.createElement("button", {
        onClick: function() {
            var type = _constants.ADD_TODO, text = inputDOMElement.value, action = {
                type: type,
                text: text,
                id: id
            };
            id++;
            store.dispatch(action);
            inputDOMElement.value = "";
        }
    }, "Add todo")));
};
var _default = AddTodo;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC9hZGRUb2RvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IHsgQUREX1RPRE8gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmxldCBpZCA9IDAsXG4gICAgaW5wdXRET01FbGVtZW50O1xuXG5jb25zdCBBZGRUb2RvID0gKHByb3BzLCBjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgc3RvcmUgfSA9IGNvbnRleHQ7XG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXY+XG4gICAgICA8aW5wdXQgcmVmPXsoZG9tRWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICBpbnB1dERPTUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gICAgICAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBBRERfVE9ETyxcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gaW5wdXRET01FbGVtZW50LnZhbHVlLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZCsrO1xuXG4gICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcblxuICAgICAgICAgICAgICAgIGlucHV0RE9NRWxlbWVudC52YWx1ZSA9IFwiXCI7XG5cbiAgICAgICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgQWRkIHRvZG9cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRUb2RvO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsTUFBZ0I7SUFFYixVQUFjO0lBRW5DLEVBQUUsR0FBRyxDQUFDLEVBQ04sZUFBZTtJQUViLE9BQU8sWUFBSSxLQUFLLEVBQUUsT0FBTztRQUNyQixLQUFLLEdBQUssT0FBTyxDQUFqQixLQUFLO3lCQVJPLE1BQWdCLHNCQVlqQyxHQUFHLHVCQVpjLE1BQWdCLHNCQWEvQixLQUFLO1FBQUMsR0FBRyxXQUFHLFVBQVU7WUFFZCxlQUFlLEdBQUcsVUFBVTs7c0JBZnJCLE1BQWdCLHNCQW1CL0IsTUFBTTtRQUFDLE9BQU87Z0JBRUMsSUFBSSxHQW5CRCxVQUFjLFdBb0JqQixJQUFJLEdBQUcsZUFBZSxDQUFDLEtBQUssRUFDNUIsTUFBTTtnQkFDSixJQUFJLEVBQUosSUFBSTtnQkFDSixJQUFJLEVBQUosSUFBSTtnQkFDSixFQUFFLEVBQUYsRUFBRTs7WUFHVixFQUFFO1lBRUYsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNO1lBRXJCLGVBQWUsQ0FBQyxLQUFLOztRQUc5QixRQUVEOztlQU1TLE9BQU8ifQ==