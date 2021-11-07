"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = require("../../../index");
var _todoListItem = _interopRequireDefault(require("./todoListItem"));
var _constants = require("../constants");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var Component1 = _index.React.Component;
var TodoListItems = /*#__PURE__*/ function(Component) {
    _inherits(TodoListItems, Component);
    function TodoListItems() {
        _classCallCheck(this, TodoListItems);
        return _possibleConstructorReturn(this, _getPrototypeOf(TodoListItems).apply(this, arguments));
    }
    _createClass(TodoListItems, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this = this;
                var store = this.context.store;
                this.unsubscribe = store.subscribe(function() {
                    return _this.forceUpdate();
                });
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.unsubscribe();
            }
        },
        {
            key: "render",
            value: function render() {
                var store = this.context.store, state = store.getState(), todos = state.todos, visibilityFilter = state.visibilityFilter, visibleTodos = getVisibleTodos(todos, visibilityFilter), items = visibleTodos.map(function(visibleTodo) {
                    var id = visibleTodo.id, text = visibleTodo.text, completed = visibleTodo.completed;
                    return(/*#__PURE__*/ _index.React.createElement(_todoListItem.default, {
                        text: text,
                        completed: completed,
                        clickHandler: function() {
                            var type = _constants.TOGGLE_TODO, action = {
                                type: type,
                                id: id
                            };
                            store.dispatch(action);
                        }
                    }));
                });
                return items;
            }
        }
    ]);
    return TodoListItems;
}(Component1);
exports.default = TodoListItems;
var getVisibleTodos = function(todos, visibilityFilter) {
    var visibleTodos;
    switch(visibilityFilter){
        case _constants.SHOW_ALL:
            visibleTodos = todos;
            break;
        case _constants.SHOW_ACTIVE:
            visibleTodos = todos.filter(function(todo) {
                var completed = todo.completed, active = !completed;
                return active;
            });
            break;
        case _constants.SHOW_COMPLETED:
            visibleTodos = todos.filter(function(todo) {
                var completed = todo.completed;
                return completed;
            });
            break;
    }
    return visibleTodos;
};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvTGlzdEl0ZW1zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IFRvZG9MaXN0SXRlbSBmcm9tIFwiLi90b2RvTGlzdEl0ZW1cIjtcblxuaW1wb3J0IHsgU0hPV19BTEwsIFNIT1dfQUNUSVZFLCBTSE9XX0NPTVBMRVRFRCwgVE9HR0xFX1RPRE8gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3RJdGVtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5mb3JjZVVwZGF0ZSgpKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgdG9kb3MsIHZpc2liaWxpdHlGaWx0ZXIgfSA9IHN0YXRlLFxuICAgICAgICAgIHZpc2libGVUb2RvcyA9IGdldFZpc2libGVUb2Rvcyh0b2RvcywgdmlzaWJpbGl0eUZpbHRlciksXG4gICAgICAgICAgaXRlbXMgPSB2aXNpYmxlVG9kb3MubWFwKCh2aXNpYmxlVG9kbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBpZCwgdGV4dCwgY29tcGxldGVkIH0gPSB2aXNpYmxlVG9kbztcblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICA8VG9kb0xpc3RJdGVtIHRleHQ9e3RleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkPXtjb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tIYW5kbGVyPXsoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBUT0dHTEVfVE9ETyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG59XG5cbmNvbnN0IGdldFZpc2libGVUb2RvcyA9ICh0b2RvcywgdmlzaWJpbGl0eUZpbHRlcikgPT4ge1xuICBsZXQgdmlzaWJsZVRvZG9zO1xuXG4gIHN3aXRjaCAodmlzaWJpbGl0eUZpbHRlcikge1xuICAgIGNhc2UgU0hPV19BTEw6XG4gICAgICB2aXNpYmxlVG9kb3MgPSB0b2RvcztcblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNIT1dfQUNUSVZFOlxuICAgICAgdmlzaWJsZVRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY29tcGxldGVkIH0gPSB0b2RvLFxuICAgICAgICAgICAgICBhY3RpdmUgPSAhY29tcGxldGVkO1xuXG4gICAgICAgIHJldHVybiBhY3RpdmU7XG4gICAgICB9KTtcblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNIT1dfQ09NUExFVEVEOlxuICAgICAgdmlzaWJsZVRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY29tcGxldGVkIH0gPSB0b2RvO1xuXG4gICAgICAgIHJldHVybiBjb21wbGV0ZWQ7XG4gICAgICB9KTtcblxuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gdmlzaWJsZVRvZG9zO1xufTtcbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJUb2RvTGlzdEl0ZW1zIiwiY29tcG9uZW50RGlkTW91bnQiLCJzdG9yZSIsImNvbnRleHQiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsImZvcmNlVXBkYXRlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW5kZXIiLCJzdGF0ZSIsImdldFN0YXRlIiwidG9kb3MiLCJ2aXNpYmlsaXR5RmlsdGVyIiwidmlzaWJsZVRvZG9zIiwiZ2V0VmlzaWJsZVRvZG9zIiwiaXRlbXMiLCJtYXAiLCJ2aXNpYmxlVG9kbyIsImlkIiwidGV4dCIsImNvbXBsZXRlZCIsImNsaWNrSGFuZGxlciIsInR5cGUiLCJhY3Rpb24iLCJkaXNwYXRjaCIsImZpbHRlciIsInRvZG8iLCJhY3RpdmUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBZ0IsQ0FBaEIsTUFBZ0I7QUFFYixHQUFnQixDQUFoQixhQUFnQjtBQUUwQixHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpGLEdBQUssQ0FBR0EsVUFBUyxHQU5LLE1BQWdCLE9BTTlCQSxTQUFTO0lBRUlDLGFBQWEsaUJBQW5CLFFBQVE7Y0FBRkEsYUFBYTthQUFiQSxhQUFhOzhCQUFiQSxhQUFhO2dFQUFiQSxhQUFhOztpQkFBYkEsYUFBYTs7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