"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TodoListItems;
    }
});
var _index = require("../../../index");
var _todoListItem = /*#__PURE__*/ _interopRequireDefault(require("./todoListItem"));
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
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var Component = _index.React.Component;
var TodoListItems = /*#__PURE__*/ function(Component) {
    _inherits(TodoListItems, Component);
    var _super = _createSuper(TodoListItems);
    function TodoListItems() {
        _classCallCheck(this, TodoListItems);
        return _super.apply(this, arguments);
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
                    return /*#__PURE__*/ _index.React.createElement(_todoListItem.default, {
                        text: text,
                        completed: completed,
                        clickHandler: function() {
                            var type = _constants.TOGGLE_TODO, action = {
                                type: type,
                                id: id
                            };
                            store.dispatch(action);
                        }
                    });
                });
                return items;
            }
        }
    ]);
    return TodoListItems;
}(Component);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvTGlzdEl0ZW1zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IFRvZG9MaXN0SXRlbSBmcm9tIFwiLi90b2RvTGlzdEl0ZW1cIjtcblxuaW1wb3J0IHsgU0hPV19BTEwsIFNIT1dfQUNUSVZFLCBTSE9XX0NPTVBMRVRFRCwgVE9HR0xFX1RPRE8gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3RJdGVtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5mb3JjZVVwZGF0ZSgpKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgdG9kb3MsIHZpc2liaWxpdHlGaWx0ZXIgfSA9IHN0YXRlLFxuICAgICAgICAgIHZpc2libGVUb2RvcyA9IGdldFZpc2libGVUb2Rvcyh0b2RvcywgdmlzaWJpbGl0eUZpbHRlciksXG4gICAgICAgICAgaXRlbXMgPSB2aXNpYmxlVG9kb3MubWFwKCh2aXNpYmxlVG9kbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBpZCwgdGV4dCwgY29tcGxldGVkIH0gPSB2aXNpYmxlVG9kbztcblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICA8VG9kb0xpc3RJdGVtIHRleHQ9e3RleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkPXtjb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tIYW5kbGVyPXsoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBUT0dHTEVfVE9ETyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG59XG5cbmNvbnN0IGdldFZpc2libGVUb2RvcyA9ICh0b2RvcywgdmlzaWJpbGl0eUZpbHRlcikgPT4ge1xuICBsZXQgdmlzaWJsZVRvZG9zO1xuXG4gIHN3aXRjaCAodmlzaWJpbGl0eUZpbHRlcikge1xuICAgIGNhc2UgU0hPV19BTEw6XG4gICAgICB2aXNpYmxlVG9kb3MgPSB0b2RvcztcblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNIT1dfQUNUSVZFOlxuICAgICAgdmlzaWJsZVRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY29tcGxldGVkIH0gPSB0b2RvLFxuICAgICAgICAgICAgICBhY3RpdmUgPSAhY29tcGxldGVkO1xuXG4gICAgICAgIHJldHVybiBhY3RpdmU7XG4gICAgICB9KTtcblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNIT1dfQ09NUExFVEVEOlxuICAgICAgdmlzaWJsZVRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY29tcGxldGVkIH0gPSB0b2RvO1xuXG4gICAgICAgIHJldHVybiBjb21wbGV0ZWQ7XG4gICAgICB9KTtcblxuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gdmlzaWJsZVRvZG9zO1xufTtcbiJdLCJuYW1lcyI6WyJUb2RvTGlzdEl0ZW1zIiwiQ29tcG9uZW50IiwiUmVhY3QiLCJjb21wb25lbnREaWRNb3VudCIsInN0b3JlIiwiY29udGV4dCIsInVuc3Vic2NyaWJlIiwic3Vic2NyaWJlIiwiZm9yY2VVcGRhdGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ0b2RvcyIsInZpc2liaWxpdHlGaWx0ZXIiLCJ2aXNpYmxlVG9kb3MiLCJnZXRWaXNpYmxlVG9kb3MiLCJpdGVtcyIsIm1hcCIsInZpc2libGVUb2RvIiwiaWQiLCJ0ZXh0IiwiY29tcGxldGVkIiwiVG9kb0xpc3RJdGVtIiwiY2xpY2tIYW5kbGVyIiwidHlwZSIsIlRPR0dMRV9UT0RPIiwiYWN0aW9uIiwiZGlzcGF0Y2giLCJTSE9XX0FMTCIsIlNIT1dfQUNUSVZFIiwiZmlsdGVyIiwidG9kbyIsImFjdGl2ZSIsIlNIT1dfQ09NUExFVEVEIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OztxQkFSQztpRUFFRzt5QkFFMEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkUsSUFBTSxBQUFFQyxZQUFjQyxZQUFLLENBQW5CRDtBQUVPLElBQUEsQUFBTUQsOEJBMkNsQixBQTNDWTtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7aUJBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQjs7Z0JBQ2xCLElBQU0sQUFBRUMsUUFBVSxJQUFJLENBQUNDLE9BQU8sQ0FBdEJEO2dCQUVSLElBQUksQ0FBQ0UsV0FBVyxHQUFHRixNQUFNRyxTQUFTLENBQUM7MkJBQU0sTUFBS0MsV0FBVzs7WUFDM0Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCO2dCQUNyQixJQUFJLENBQUNILFdBQVc7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBUztnQkFDUCxJQUFNLEFBQUVOLFFBQVUsSUFBSSxDQUFDQyxPQUFPLENBQXRCRCxPQUNGTyxRQUFRUCxNQUFNUSxRQUFRLElBQ3BCQyxRQUE0QkYsTUFBNUJFLE9BQU9DLG1CQUFxQkgsTUFBckJHLGtCQUNUQyxlQUFlQyxnQkFBZ0JILE9BQU9DLG1CQUN0Q0csUUFBUUYsYUFBYUcsR0FBRyxDQUFDLFNBQUNDLGFBQWdCO29CQUN4QyxJQUFRQyxLQUF3QkQsWUFBeEJDLElBQUlDLE9BQW9CRixZQUFwQkUsTUFBTUMsWUFBY0gsWUFBZEc7b0JBRWxCLHFCQUVFLDJCQUFDQyxxQkFBWTt3QkFBQ0YsTUFBTUE7d0JBQ05DLFdBQVdBO3dCQUNYRSxjQUFjLFdBQU07NEJBRWxCLElBQU1DLE9BQU9DLHNCQUFXLEVBQ2xCQyxTQUFTO2dDQUNQRixNQUFBQTtnQ0FDQUwsSUFBQUE7NEJBQ0Y7NEJBRU5oQixNQUFNd0IsUUFBUSxDQUFDRDt3QkFFakI7O2dCQUlsQjtnQkFFTixPQUFPVjtZQUNUOzs7V0F4Q21CakI7RUFBc0JDO0FBMkMzQyxJQUFNZSxrQkFBa0IsU0FBQ0gsT0FBT0Msa0JBQXFCO0lBQ25ELElBQUlDO0lBRUosT0FBUUQ7UUFDTixLQUFLZSxtQkFBUTtZQUNYZCxlQUFlRjtZQUVmLEtBQU07UUFFUixLQUFLaUIsc0JBQVc7WUFDZGYsZUFBZUYsTUFBTWtCLE1BQU0sQ0FBQyxTQUFDQyxNQUFTO2dCQUNwQyxJQUFNLEFBQUVWLFlBQWNVLEtBQWRWLFdBQ0ZXLFNBQVMsQ0FBQ1g7Z0JBRWhCLE9BQU9XO1lBQ1Q7WUFFQSxLQUFNO1FBRVIsS0FBS0MseUJBQWM7WUFDakJuQixlQUFlRixNQUFNa0IsTUFBTSxDQUFDLFNBQUNDLE1BQVM7Z0JBQ3BDLElBQU0sQUFBRVYsWUFBY1UsS0FBZFY7Z0JBRVIsT0FBT0E7WUFDVDtZQUVBLEtBQU07SUFDVjtJQUVBLE9BQU9QO0FBQ1QifQ==