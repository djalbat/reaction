"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reaction = require("reaction");

var _todoListItem = _interopRequireDefault(require("./todoListItem"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Component = _reaction.React.Component;

var TodoListItems = /*#__PURE__*/function (_Component) {
  _inherits(TodoListItems, _Component);

  var _super = _createSuper(TodoListItems);

  function TodoListItems() {
    _classCallCheck(this, TodoListItems);

    return _super.apply(this, arguments);
  }

  _createClass(TodoListItems, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      var store = this.context.store;
      this.unsubscribe = store.subscribe(function () {
        return _this.forceUpdate();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: "render",
    value: function render() {
      var store = this.context.store,
          state = store.getState(),
          todos = state.todos,
          visibilityFilter = state.visibilityFilter,
          visibleTodos = getVisibleTodos(todos, visibilityFilter),
          items = visibleTodos.map(function (visibleTodo) {
        var id = visibleTodo.id,
            text = visibleTodo.text,
            completed = visibleTodo.completed;
        return /*#__PURE__*/_reaction.React.createElement(_todoListItem["default"], {
          text: text,
          completed: completed,
          clickHandler: function clickHandler() {
            var type = _constants.TOGGLE_TODO,
                action = {
              type: type,
              id: id
            };
            store.dispatch(action);
          }
        });
      });
      return items;
    }
  }]);

  return TodoListItems;
}(Component);

exports["default"] = TodoListItems;

var getVisibleTodos = function getVisibleTodos(todos, visibilityFilter) {
  var visibleTodos;

  switch (visibilityFilter) {
    case _constants.SHOW_ALL:
      visibleTodos = todos;
      break;

    case _constants.SHOW_ACTIVE:
      visibleTodos = todos.filter(function (todo) {
        var completed = todo.completed,
            active = !completed;
        return active;
      });
      break;

    case _constants.SHOW_COMPLETED:
      visibleTodos = todos.filter(function (todo) {
        var completed = todo.completed;
        return completed;
      });
      break;
  }

  return visibleTodos;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9MaXN0SXRlbXMuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiUmVhY3QiLCJUb2RvTGlzdEl0ZW1zIiwic3RvcmUiLCJjb250ZXh0IiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJmb3JjZVVwZGF0ZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ0b2RvcyIsInZpc2liaWxpdHlGaWx0ZXIiLCJ2aXNpYmxlVG9kb3MiLCJnZXRWaXNpYmxlVG9kb3MiLCJpdGVtcyIsIm1hcCIsInZpc2libGVUb2RvIiwiaWQiLCJ0ZXh0IiwiY29tcGxldGVkIiwidHlwZSIsIlRPR0dMRV9UT0RPIiwiYWN0aW9uIiwiZGlzcGF0Y2giLCJTSE9XX0FMTCIsIlNIT1dfQUNUSVZFIiwiZmlsdGVyIiwidG9kbyIsImFjdGl2ZSIsIlNIT1dfQ09NUExFVEVEIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxTLEdBQWNDLGUsQ0FBZEQsUzs7SUFFYUUsYTs7Ozs7Ozs7Ozs7Ozt3Q0FDQztBQUFBOztBQUFBLFVBQ1ZDLEtBRFUsR0FDQSxLQUFLQyxPQURMLENBQ1ZELEtBRFU7QUFHbEIsV0FBS0UsV0FBTCxHQUFtQkYsS0FBSyxDQUFDRyxTQUFOLENBQWdCO0FBQUEsZUFBTSxLQUFJLENBQUNDLFdBQUwsRUFBTjtBQUFBLE9BQWhCLENBQW5CO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsV0FBS0YsV0FBTDtBQUNEOzs7NkJBRVE7QUFDRCxVQUFFRixLQUFGLEdBQVksS0FBS0MsT0FBakIsQ0FBRUQsS0FBRjtBQUFBLFVBQ0FLLEtBREEsR0FDUUwsS0FBSyxDQUFDTSxRQUFOLEVBRFI7QUFBQSxVQUVFQyxLQUZGLEdBRThCRixLQUY5QixDQUVFRSxLQUZGO0FBQUEsVUFFU0MsZ0JBRlQsR0FFOEJILEtBRjlCLENBRVNHLGdCQUZUO0FBQUEsVUFHQUMsWUFIQSxHQUdlQyxlQUFlLENBQUNILEtBQUQsRUFBUUMsZ0JBQVIsQ0FIOUI7QUFBQSxVQUlBRyxLQUpBLEdBSVFGLFlBQVksQ0FBQ0csR0FBYixDQUFpQixVQUFDQyxXQUFELEVBQWlCO0FBQUEsWUFDaENDLEVBRGdDLEdBQ1JELFdBRFEsQ0FDaENDLEVBRGdDO0FBQUEsWUFDNUJDLElBRDRCLEdBQ1JGLFdBRFEsQ0FDNUJFLElBRDRCO0FBQUEsWUFDdEJDLFNBRHNCLEdBQ1JILFdBRFEsQ0FDdEJHLFNBRHNCO0FBR3hDLDRCQUVFLDhCQUFDLHdCQUFEO0FBQWMsVUFBQSxJQUFJLEVBQUVELElBQXBCO0FBQ2MsVUFBQSxTQUFTLEVBQUVDLFNBRHpCO0FBRWMsVUFBQSxZQUFZLEVBQUUsd0JBQU07QUFFbEIsZ0JBQU1DLElBQUksR0FBR0Msc0JBQWI7QUFBQSxnQkFDTUMsTUFBTSxHQUFHO0FBQ1BGLGNBQUFBLElBQUksRUFBSkEsSUFETztBQUVQSCxjQUFBQSxFQUFFLEVBQUZBO0FBRk8sYUFEZjtBQU1BZCxZQUFBQSxLQUFLLENBQUNvQixRQUFOLENBQWVELE1BQWY7QUFFRDtBQVpmLFVBRkY7QUFrQkQsT0FyQk8sQ0FKUjtBQTJCTixhQUFPUixLQUFQO0FBQ0Q7Ozs7RUF4Q3dDZCxTOzs7O0FBMkMzQyxJQUFNYSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNILEtBQUQsRUFBUUMsZ0JBQVIsRUFBNkI7QUFDbkQsTUFBSUMsWUFBSjs7QUFFQSxVQUFRRCxnQkFBUjtBQUNFLFNBQUthLG1CQUFMO0FBQ0VaLE1BQUFBLFlBQVksR0FBR0YsS0FBZjtBQUNBOztBQUVGLFNBQUtlLHNCQUFMO0FBQ0ViLE1BQUFBLFlBQVksR0FBR0YsS0FBSyxDQUFDZ0IsTUFBTixDQUFhLFVBQUNDLElBQUQsRUFBVTtBQUM5QixZQUFFUixTQUFGLEdBQWdCUSxJQUFoQixDQUFFUixTQUFGO0FBQUEsWUFDRlMsTUFERSxHQUNPLENBQUNULFNBRFI7QUFHTixlQUFPUyxNQUFQO0FBQ0QsT0FMYyxDQUFmO0FBTUE7O0FBRUYsU0FBS0MseUJBQUw7QUFDRWpCLE1BQUFBLFlBQVksR0FBR0YsS0FBSyxDQUFDZ0IsTUFBTixDQUFhLFVBQUNDLElBQUQsRUFBVTtBQUFBLFlBQzVCUixTQUQ0QixHQUNkUSxJQURjLENBQzVCUixTQUQ0QjtBQUdwQyxlQUFPQSxTQUFQO0FBQ0QsT0FKYyxDQUFmO0FBS0E7QUFwQko7O0FBdUJBLFNBQU9QLFlBQVA7QUFDRCxDQTNCRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgVG9kb0xpc3RJdGVtIGZyb20gXCIuL3RvZG9MaXN0SXRlbVwiO1xuXG5pbXBvcnQgeyBTSE9XX0FMTCwgU0hPV19BQ1RJVkUsIFNIT1dfQ09NUExFVEVELCBUT0dHTEVfVE9ETyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdEl0ZW1zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PiB0aGlzLmZvcmNlVXBkYXRlKCkpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCksXG4gICAgICAgICAgeyB0b2RvcywgdmlzaWJpbGl0eUZpbHRlciB9ID0gc3RhdGUsXG4gICAgICAgICAgdmlzaWJsZVRvZG9zID0gZ2V0VmlzaWJsZVRvZG9zKHRvZG9zLCB2aXNpYmlsaXR5RmlsdGVyKSxcbiAgICAgICAgICBpdGVtcyA9IHZpc2libGVUb2Rvcy5tYXAoKHZpc2libGVUb2RvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGlkLCB0ZXh0LCBjb21wbGV0ZWQgfSA9IHZpc2libGVUb2RvO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgIDxUb2RvTGlzdEl0ZW0gdGV4dD17dGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQ9e2NvbXBsZXRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja0hhbmRsZXI9eygpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IFRPR0dMRV9UT0RPLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cbn1cblxuY29uc3QgZ2V0VmlzaWJsZVRvZG9zID0gKHRvZG9zLCB2aXNpYmlsaXR5RmlsdGVyKSA9PiB7XG4gIGxldCB2aXNpYmxlVG9kb3M7XG5cbiAgc3dpdGNoICh2aXNpYmlsaXR5RmlsdGVyKSB7XG4gICAgY2FzZSBTSE9XX0FMTDpcbiAgICAgIHZpc2libGVUb2RvcyA9IHRvZG9zO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNIT1dfQUNUSVZFOlxuICAgICAgdmlzaWJsZVRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY29tcGxldGVkIH0gPSB0b2RvLFxuICAgICAgICAgICAgYWN0aXZlID0gIWNvbXBsZXRlZDtcblxuICAgICAgICByZXR1cm4gYWN0aXZlO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgU0hPV19DT01QTEVURUQ6XG4gICAgICB2aXNpYmxlVG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgeyBjb21wbGV0ZWQgfSA9IHRvZG87XG5cbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlZDtcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gdmlzaWJsZVRvZG9zO1xufTtcbiJdfQ==