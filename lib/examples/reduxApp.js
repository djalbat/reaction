"use strict";

var _redux = _interopRequireDefault(require("./redux"));

var _react = _interopRequireDefault(require("../react"));

var _reactDOM = _interopRequireDefault(require("../reactDOM"));

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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Component = _react["default"].Component,
    createStore = _redux["default"].createStore,
    combineReducers = _redux["default"].combineReducers;

var todo = function todo(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      {
        var id = action.id,
            text = action.text,
            completed = false;
        return {
          id: id,
          text: text,
          completed: completed
        };
      }

    case "TOGGLE_TODO":
      {
        if (state.id !== action.id) {
          return state;
        }

        var _completed = !state.completed; ///


        return Object.assign({}, state, {
          completed: _completed
        });
      }

    default:
      return state;
  }
};

var todos = function todos() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "ADD_TODO":
      return [].concat(_toConsumableArray(state), [todo(undefined, action)]);

    case "TOGGLE_TODO":
      return state.map(function (t) {
        return todo(t, action);
      });

    default:
      return state;
  }
};

var visibilityFilter = function visibilityFilter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "SHOW_ALL";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;

    default:
      return state;
  }
};

var todoApp = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
});

var getVisibleTodos = function getVisibleTodos(todos, filter) {
  switch (filter) {
    case "SHOW_ALL":
      return todos;

    case "SHOW_COMPLETED":
      return todos.filter(function (t) {
        return t.completed;
      });

    case "SHOW_ACTIVE":
      return todos.filter(function (t) {
        return !t.completed;
      });
  }
};

var Todo = function Todo(_ref) {
  var onClick = _ref.onClick,
      completed = _ref.completed,
      text = _ref.text;
  return /*#__PURE__*/_react["default"].createElement("li", {
    onClick: onClick,
    style: {
      textDecoration: completed ? "line-through" : "none"
    }
  }, text);
};

var TodoList = function TodoList(_ref2) {
  var todos = _ref2.todos,
      onTodoClick = _ref2.onTodoClick;
  return /*#__PURE__*/_react["default"].createElement("ul", null, todos.map(function (todo) {
    return /*#__PURE__*/_react["default"].createElement(Todo, {
      text: todo.text,
      completed: todo.completed,
      onClick: function onClick() {
        return onTodoClick(todo.id);
      }
    });
  }));
};

var Link = function Link(props) {
  var active = props.active,
      _onClick = props.onClick;

  if (active) {
    return /*#__PURE__*/_react["default"].createElement("span", null, props.children);
  }

  return /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();

      _onClick();
    }
  }, props.children);
};

var FilterLink = _react["default"].createClass({
  componentDidMount: function componentDidMount() {
    var _this = this;

    var store = this.context.store;
    this.unsubscribe = store.subscribe(function () {
      return _this.forceUpdate();
    });
  },
  componentWillUnmount: function componentWillUnmount() {
    this.unsubscribe();
  },
  render: function render() {
    var _this2 = this;

    var store = this.context.store,
        state = store.getState();
    return /*#__PURE__*/_react["default"].createElement(Link, {
      active: this.props.filter === state.visibilityFilter,
      onClick: function onClick() {
        var type = "SET_VISIBILITY_FILTER",
            filter = _this2.props.filter;
        store.dispatch({
          type: type,
          filter: filter
        });
      }
    }, this.props.children);
  }
});

var nextTodoId = 0;

var AddTodo = function AddTodo(props, _ref3) {
  var store = _ref3.store;
  var input;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
    ref: function ref(domElement) {
      input = domElement;
    }
  }), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      var type = "ADD_TODO",
          _input = input,
          value = _input.value,
          text = value,
          id = nextTodoId++;
      store.dispatch({
        type: type,
        text: text,
        id: id
      });
      input.value = "";
    }
  }, "Add todo"));
};

var VisibleTodoList = /*#__PURE__*/function (_Component) {
  _inherits(VisibleTodoList, _Component);

  var _super = _createSuper(VisibleTodoList);

  function VisibleTodoList() {
    _classCallCheck(this, VisibleTodoList);

    return _super.apply(this, arguments);
  }

  _createClass(VisibleTodoList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      var store = this.context.store;
      this.unsubscribe = store.subscribe(function () {
        return _this3.forceUpdate();
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
          state = store.getState();
      return /*#__PURE__*/_react["default"].createElement(TodoList, {
        todos: getVisibleTodos(state.todos, state.visibilityFilter),
        onTodoClick: function onTodoClick(id) {
          var type = "TOGGLE_TODO";
          store.dispatch({
            type: type,
            id: id
          });
        }
      });
    }
  }]);

  return VisibleTodoList;
}(Component);

var Footer = function Footer() {
  return /*#__PURE__*/_react["default"].createElement("p", null, "Show: ", /*#__PURE__*/_react["default"].createElement(FilterLink, {
    filter: "SHOW_ALL"
  }, "All"), " - ", /*#__PURE__*/_react["default"].createElement(FilterLink, {
    filter: "SHOW_COMPLETED"
  }, "Completed"), " - ", /*#__PURE__*/_react["default"].createElement(FilterLink, {
    filter: "SHOW_ACTIVE"
  }, "Active"));
};

var TodoApp = function TodoApp() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(AddTodo, null), /*#__PURE__*/_react["default"].createElement(VisibleTodoList, null), /*#__PURE__*/_react["default"].createElement(Footer, null));
};

var Provider = /*#__PURE__*/function (_Component2) {
  _inherits(Provider, _Component2);

  var _super2 = _createSuper(Provider);

  function Provider() {
    _classCallCheck(this, Provider);

    return _super2.apply(this, arguments);
  }

  _createClass(Provider, [{
    key: "getChildContext",
    value: function getChildContext(context) {
      var store = this.props.store;
      return {
        store: store
      };
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return Provider;
}(Component);

var reduxApp = function reduxApp() {
  var store = createStore(todoApp),
      rootDOMElement = document.getElementById("root");

  _reactDOM["default"].render( /*#__PURE__*/_react["default"].createElement(Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(TodoApp, null)), rootDOMElement);
};

module.exports = reduxApp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHV4QXBwLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlJlYWN0IiwiY3JlYXRlU3RvcmUiLCJSZWR1eCIsImNvbWJpbmVSZWR1Y2VycyIsInRvZG8iLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJpZCIsInRleHQiLCJjb21wbGV0ZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJ0b2RvcyIsInVuZGVmaW5lZCIsIm1hcCIsInQiLCJ2aXNpYmlsaXR5RmlsdGVyIiwiZmlsdGVyIiwidG9kb0FwcCIsImdldFZpc2libGVUb2RvcyIsIlRvZG8iLCJvbkNsaWNrIiwidGV4dERlY29yYXRpb24iLCJUb2RvTGlzdCIsIm9uVG9kb0NsaWNrIiwiTGluayIsInByb3BzIiwiYWN0aXZlIiwiY2hpbGRyZW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJGaWx0ZXJMaW5rIiwiY3JlYXRlQ2xhc3MiLCJjb21wb25lbnREaWRNb3VudCIsInN0b3JlIiwiY29udGV4dCIsInVuc3Vic2NyaWJlIiwic3Vic2NyaWJlIiwiZm9yY2VVcGRhdGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsImdldFN0YXRlIiwiZGlzcGF0Y2giLCJuZXh0VG9kb0lkIiwiQWRkVG9kbyIsImlucHV0IiwiZG9tRWxlbWVudCIsInZhbHVlIiwiVmlzaWJsZVRvZG9MaXN0IiwiRm9vdGVyIiwiVG9kb0FwcCIsIlByb3ZpZGVyIiwicmVkdXhBcHAiLCJyb290RE9NRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdERPTSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUVBLFNBQUYsR0FBZ0JDLGlCQUFoQixDQUFFRCxTQUFGO0FBQUEsSUFDRUUsV0FERixHQUNtQ0MsaUJBRG5DLENBQ0VELFdBREY7QUFBQSxJQUNlRSxlQURmLEdB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QWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWR1eCBmcm9tIFwiLi9yZWR1eFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCIuLi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCIuLi9yZWFjdERPTVwiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3QsXG4gICAgICB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfSA9IFJlZHV4O1xuXG5jb25zdCB0b2RvID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJBRERfVE9ET1wiIDoge1xuICAgICAgY29uc3QgeyBpZCwgdGV4dCB9ID0gYWN0aW9uLFxuICAgICAgICBjb21wbGV0ZWQgPSBmYWxzZTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQsXG4gICAgICAgIHRleHQsXG4gICAgICAgIGNvbXBsZXRlZFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIFwiVE9HR0xFX1RPRE9cIiA6IHtcbiAgICAgIGlmIChzdGF0ZS5pZCAhPT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29tcGxldGVkID0gIXN0YXRlLmNvbXBsZXRlZDsgLy8vXG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBjb21wbGV0ZWRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IHRvZG9zID0gKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIkFERF9UT0RPXCIgOlxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHRvZG8odW5kZWZpbmVkLCBhY3Rpb24pXG4gICAgICBdO1xuXG4gICAgY2FzZSBcIlRPR0dMRV9UT0RPXCIgOlxuICAgICAgcmV0dXJuIHN0YXRlLm1hcCh0ID0+IHRvZG8odCwgYWN0aW9uKSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCB2aXNpYmlsaXR5RmlsdGVyID0gKCBzdGF0ZSA9IFwiU0hPV19BTExcIiwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiU0VUX1ZJU0lCSUxJVFlfRklMVEVSXCIgOlxuICAgICAgcmV0dXJuIGFjdGlvbi5maWx0ZXI7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCB0b2RvQXBwID0gY29tYmluZVJlZHVjZXJzKHtcbiAgdG9kb3MsXG4gIHZpc2liaWxpdHlGaWx0ZXJcbn0pO1xuXG5jb25zdCBnZXRWaXNpYmxlVG9kb3MgPSAodG9kb3MsIGZpbHRlcikgPT4ge1xuICBzd2l0Y2ggKGZpbHRlcikge1xuICAgIGNhc2UgXCJTSE9XX0FMTFwiIDpcbiAgICAgIHJldHVybiB0b2RvcztcblxuICAgIGNhc2UgXCJTSE9XX0NPTVBMRVRFRFwiIDpcbiAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIoXG4gICAgICAgIHQgPT4gdC5jb21wbGV0ZWRcbiAgICAgICk7XG5cbiAgICBjYXNlIFwiU0hPV19BQ1RJVkVcIiA6XG4gICAgICByZXR1cm4gdG9kb3MuZmlsdGVyKFxuICAgICAgICB0ID0+ICF0LmNvbXBsZXRlZFxuICAgICAgKTtcbiAgfVxufTtcblxuY29uc3QgVG9kbyA9ICh7b25DbGljaywgY29tcGxldGVkLCB0ZXh0fSkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPGxpIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgIHN0eWxlPXt7dGV4dERlY29yYXRpb246Y29tcGxldGVkID9cbiAgICAgICAgICAgIFwibGluZS10aHJvdWdoXCIgOlxuICAgICAgICAgICAgXCJub25lXCJ9fVxuICAgID5cbiAgICAgIHt0ZXh0fVxuICAgIDwvbGk+XG5cbiAgKTtcbn07XG5cbmNvbnN0IFRvZG9MaXN0ID0gKHt0b2Rvcywgb25Ub2RvQ2xpY2t9KSA9PiAge1xuICByZXR1cm4gKFxuXG4gICAgPHVsPlxuICAgICAge3RvZG9zLm1hcCh0b2RvID0+IDxUb2RvIHRleHQ9e3RvZG8udGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQ9e3RvZG8uY29tcGxldGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvZG9DbGljayh0b2RvLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgIC8+KX1cbiAgICA8L3VsPlxuXG4gICk7XG59O1xuXG5jb25zdCBMaW5rID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgYWN0aXZlLCBvbkNsaWNrIH0gPSBwcm9wcztcblxuICBpZiAoYWN0aXZlKSB7XG4gICAgcmV0dXJuIDxzcGFuPntwcm9wcy5jaGlsZHJlbn08L3NwYW4+O1xuICB9XG5cbiAgcmV0dXJuIChcblxuICAgIDxhIGhyZWY9XCIjXCJcbiAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgIG9uQ2xpY2soKTtcbiAgICAgICB9fVxuICAgID5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2E+XG5cbiAgKTtcbn07XG5cbmNvbnN0IEZpbHRlckxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT5cbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgICk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8TGluayBhY3RpdmU9e1xuICAgICAgICB0aGlzLnByb3BzLmZpbHRlciA9PT0gc3RhdGUudmlzaWJpbGl0eUZpbHRlclxuICAgICAgfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB0eXBlID0gXCJTRVRfVklTSUJJTElUWV9GSUxURVJcIixcbiAgICAgICAgICAgICAgICB7IGZpbHRlciB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICBmaWx0ZXJcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvTGluaz5cblxuICAgICk7XG4gIH1cbn0pO1xuXG5sZXQgbmV4dFRvZG9JZCA9IDA7XG5jb25zdCBBZGRUb2RvID0gKHByb3BzLCB7c3RvcmV9KSA9PiB7XG4gIGxldCBpbnB1dDtcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dCByZWY9e2RvbUVsZW1lbnQgPT4ge1xuICAgICAgICBpbnB1dCA9IGRvbUVsZW1lbnQ7XG4gICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICBjb25zdCB0eXBlID0gXCJBRERfVE9ET1wiLFxuICAgICAgICAgIHsgdmFsdWUgfSA9IGlucHV0LFxuICAgICAgICAgIHRleHQgPSB2YWx1ZSwgLy8vXG4gICAgICAgICAgaWQgPSBuZXh0VG9kb0lkKys7XG5cbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgdGV4dCxcbiAgICAgICAgICBpZFxuICAgICAgICB9KTtcblxuICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICB9fVxuICAgICAgPlxuICAgICAgICBBZGQgdG9kb1xuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmNsYXNzIFZpc2libGVUb2RvTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT5cbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgICk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPFRvZG9MaXN0IHRvZG9zPXtcbiAgICAgICAgZ2V0VmlzaWJsZVRvZG9zKFxuICAgICAgICAgIHN0YXRlLnRvZG9zLFxuICAgICAgICAgIHN0YXRlLnZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgICAgICAgICAgIG9uVG9kb0NsaWNrPXsoaWQpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBcIlRPR0dMRV9UT0RPXCI7XG5cbiAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8cD5cbiAgICAgIHtcIlNob3c6IFwifVxuICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPVwiU0hPV19BTExcIj5cbiAgICAgICAgQWxsXG4gICAgICA8L0ZpbHRlckxpbms+XG4gICAgICB7XCIgLSBcIn1cbiAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj1cIlNIT1dfQ09NUExFVEVEXCI+XG4gICAgICAgIENvbXBsZXRlZFxuICAgICAgPC9GaWx0ZXJMaW5rPlxuICAgICAge1wiIC0gXCJ9XG4gICAgICA8RmlsdGVyTGluayBmaWx0ZXI9XCJTSE9XX0FDVElWRVwiPlxuICAgICAgICBBY3RpdmVcbiAgICAgIDwvRmlsdGVyTGluaz5cbiAgICA8L3A+XG5cbiAgKTtcbn07XG5cbmNvbnN0IFRvZG9BcHAgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8ZGl2PlxuICAgICAgPEFkZFRvZG8gLz5cbiAgICAgIDxWaXNpYmxlVG9kb0xpc3QgLz5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxuY2xhc3MgUHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3RvcmVcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICB9XG59XG5cbmNvbnN0IHJlZHV4QXBwID0gKCkgPT4ge1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHRvZG9BcHApLFxuICAgICAgICByb290RE9NRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKTtcblxuICBSZWFjdERPTS5yZW5kZXIoXG5cbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8VG9kb0FwcCAvPlxuICAgICAgPC9Qcm92aWRlcj5cblxuICAgICxcbiAgICByb290RE9NRWxlbWVudFxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSByZWR1eEFwcDtcbiJdfQ==