"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = reduxApp;

var _redux = _interopRequireDefault(require("./redux"));

var _index = require("../index");

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

///
var Component = _index.React.Component,
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
  return /*#__PURE__*/_index.React.createElement("li", {
    onClick: onClick,
    style: {
      textDecoration: completed ? "line-through" : "none"
    }
  }, text);
};

var TodoList = function TodoList(_ref2) {
  var todos = _ref2.todos,
      onTodoClick = _ref2.onTodoClick;
  return /*#__PURE__*/_index.React.createElement("ul", null, todos.map(function (todo) {
    return /*#__PURE__*/_index.React.createElement(Todo, {
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
    return /*#__PURE__*/_index.React.createElement("span", null, props.children);
  }

  return /*#__PURE__*/_index.React.createElement("a", {
    href: "#",
    onClick: function onClick(event) {
      event.preventDefault();

      _onClick();
    }
  }, props.children);
};

var FilterLink = _index.React.createClass({
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
    return /*#__PURE__*/_index.React.createElement(Link, {
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
  return /*#__PURE__*/_index.React.createElement("div", null, /*#__PURE__*/_index.React.createElement("input", {
    ref: function ref(domElement) {
      input = domElement;
    }
  }), /*#__PURE__*/_index.React.createElement("button", {
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
      return /*#__PURE__*/_index.React.createElement(TodoList, {
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
  return /*#__PURE__*/_index.React.createElement("p", null, "Show: ", /*#__PURE__*/_index.React.createElement(FilterLink, {
    filter: "SHOW_ALL"
  }, "All"), " - ", /*#__PURE__*/_index.React.createElement(FilterLink, {
    filter: "SHOW_COMPLETED"
  }, "Completed"), " - ", /*#__PURE__*/_index.React.createElement(FilterLink, {
    filter: "SHOW_ACTIVE"
  }, "Active"));
};

var TodoApp = function TodoApp() {
  return /*#__PURE__*/_index.React.createElement("div", null, /*#__PURE__*/_index.React.createElement(AddTodo, null), /*#__PURE__*/_index.React.createElement(VisibleTodoList, null), /*#__PURE__*/_index.React.createElement(Footer, null));
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

function reduxApp() {
  var store = createStore(todoApp),
      rootDOMElement = document.getElementById("root");

  _index.ReactDOM.render( /*#__PURE__*/_index.React.createElement(Provider, {
    store: store
  }, /*#__PURE__*/_index.React.createElement(TodoApp, null)), rootDOMElement);
}

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHV4QXBwLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlJlYWN0IiwiY3JlYXRlU3RvcmUiLCJSZWR1eCIsImNvbWJpbmVSZWR1Y2VycyIsInRvZG8iLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJpZCIsInRleHQiLCJjb21wbGV0ZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJ0b2RvcyIsInVuZGVmaW5lZCIsIm1hcCIsInQiLCJ2aXNpYmlsaXR5RmlsdGVyIiwiZmlsdGVyIiwidG9kb0FwcCIsImdldFZpc2libGVUb2RvcyIsIlRvZG8iLCJvbkNsaWNrIiwidGV4dERlY29yYXRpb24iLCJUb2RvTGlzdCIsIm9uVG9kb0NsaWNrIiwiTGluayIsInByb3BzIiwiYWN0aXZlIiwiY2hpbGRyZW4iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiRmlsdGVyTGluayIsImNyZWF0ZUNsYXNzIiwiY29tcG9uZW50RGlkTW91bnQiLCJzdG9yZSIsImNvbnRleHQiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsImZvcmNlVXBkYXRlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW5kZXIiLCJnZXRTdGF0ZSIsImRpc3BhdGNoIiwibmV4dFRvZG9JZCIsIkFkZFRvZG8iLCJpbnB1dCIsImRvbUVsZW1lbnQiLCJ2YWx1ZSIsIlZpc2libGVUb2RvTGlzdCIsIkZvb3RlciIsIlRvZG9BcHAiLCJQcm92aWRlciIsInJlZHV4QXBwIiwicm9vdERPTUVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUmVhY3RET00iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBRXRDLElBQUVBLFNBQUYsR0FBZ0JDLFlBQWhCLENBQUVELFNBQUY7QUFBQSxJQUNFRSxXQURGLEdBQ21DQyxpQkFEbkMsQ0FDRUQsV0FERjtBQUFBLElBQ2VFLGVBRGYsR0FDbUNELGlCQURu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cm9tIFwiLi9yZWR1eFwiO1xuXG5pbXBvcnQgeyBSZWFjdCwgUmVhY3RET00gfSBmcm9tIFwiLi4vaW5kZXhcIjsgLy8vXG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdCxcbiAgICAgIHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9ID0gUmVkdXg7XG5cbmNvbnN0IHRvZG8gPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIkFERF9UT0RPXCIgOiB7XG4gICAgICBjb25zdCB7IGlkLCB0ZXh0IH0gPSBhY3Rpb24sXG4gICAgICAgIGNvbXBsZXRlZCA9IGZhbHNlO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgdGV4dCxcbiAgICAgICAgY29tcGxldGVkXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgXCJUT0dHTEVfVE9ET1wiIDoge1xuICAgICAgaWYgKHN0YXRlLmlkICE9PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjb21wbGV0ZWQgPSAhc3RhdGUuY29tcGxldGVkOyAvLy9cblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGNvbXBsZXRlZFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuY29uc3QgdG9kb3MgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiQUREX1RPRE9cIiA6XG4gICAgICByZXR1cm4gW1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdG9kbyh1bmRlZmluZWQsIGFjdGlvbilcbiAgICAgIF07XG5cbiAgICBjYXNlIFwiVE9HR0xFX1RPRE9cIiA6XG4gICAgICByZXR1cm4gc3RhdGUubWFwKHQgPT4gdG9kbyh0LCBhY3Rpb24pKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IHZpc2liaWxpdHlGaWx0ZXIgPSAoIHN0YXRlID0gXCJTSE9XX0FMTFwiLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJTRVRfVklTSUJJTElUWV9GSUxURVJcIiA6XG4gICAgICByZXR1cm4gYWN0aW9uLmZpbHRlcjtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IHRvZG9BcHAgPSBjb21iaW5lUmVkdWNlcnMoe1xuICB0b2RvcyxcbiAgdmlzaWJpbGl0eUZpbHRlclxufSk7XG5cbmNvbnN0IGdldFZpc2libGVUb2RvcyA9ICh0b2RvcywgZmlsdGVyKSA9PiB7XG4gIHN3aXRjaCAoZmlsdGVyKSB7XG4gICAgY2FzZSBcIlNIT1dfQUxMXCIgOlxuICAgICAgcmV0dXJuIHRvZG9zO1xuXG4gICAgY2FzZSBcIlNIT1dfQ09NUExFVEVEXCIgOlxuICAgICAgcmV0dXJuIHRvZG9zLmZpbHRlcihcbiAgICAgICAgdCA9PiB0LmNvbXBsZXRlZFxuICAgICAgKTtcblxuICAgIGNhc2UgXCJTSE9XX0FDVElWRVwiIDpcbiAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIoXG4gICAgICAgIHQgPT4gIXQuY29tcGxldGVkXG4gICAgICApO1xuICB9XG59O1xuXG5jb25zdCBUb2RvID0gKHtvbkNsaWNrLCBjb21wbGV0ZWQsIHRleHR9KSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8bGkgb25DbGljaz17b25DbGlja31cbiAgICAgICAgc3R5bGU9e3tcblxuICAgICAgICAgIHRleHREZWNvcmF0aW9uOmNvbXBsZXRlZCA/IFwibGluZS10aHJvdWdoXCIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJub25lXCJcblxuICAgICAgICB9fVxuICAgID5cbiAgICAgIHt0ZXh0fVxuICAgIDwvbGk+XG5cbiAgKTtcbn07XG5cbmNvbnN0IFRvZG9MaXN0ID0gKHt0b2Rvcywgb25Ub2RvQ2xpY2t9KSA9PiAge1xuICByZXR1cm4gKFxuXG4gICAgPHVsPlxuICAgICAge3RvZG9zLm1hcCgodG9kbykgPT5cblxuICAgICAgICA8VG9kbyB0ZXh0PXt0b2RvLnRleHR9XG4gICAgICAgICAgICAgIGNvbXBsZXRlZD17dG9kby5jb21wbGV0ZWR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG5cbiAgICAgICAgICAgICAgICBvblRvZG9DbGljayh0b2RvLmlkKVxuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgLz5cblxuICAgICAgKX1cbiAgICA8L3VsPlxuXG4gICk7XG59O1xuXG5jb25zdCBMaW5rID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgYWN0aXZlLCBvbkNsaWNrIH0gPSBwcm9wcztcblxuICBpZiAoYWN0aXZlKSB7XG4gICAgcmV0dXJuIDxzcGFuPntwcm9wcy5jaGlsZHJlbn08L3NwYW4+O1xuICB9XG5cbiAgcmV0dXJuIChcblxuICAgIDxhIGhyZWY9XCIjXCJcbiAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcblxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgb25DbGljaygpO1xuXG4gICAgICAgfX1cbiAgICA+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9hPlxuXG4gICk7XG59O1xuXG5jb25zdCBGaWx0ZXJMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICApO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPExpbmsgYWN0aXZlPXsgdGhpcy5wcm9wcy5maWx0ZXIgPT09IHN0YXRlLnZpc2liaWxpdHlGaWx0ZXIgfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuXG4gICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBcIlNFVF9WSVNJQklMSVRZX0ZJTFRFUlwiLFxuICAgICAgICAgICAgICAgICAgICB7IGZpbHRlciB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICBmaWx0ZXJcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9MaW5rPlxuXG4gICAgKTtcbiAgfVxufSk7XG5cbmxldCBuZXh0VG9kb0lkID0gMDtcbmNvbnN0IEFkZFRvZG8gPSAocHJvcHMsIHtzdG9yZX0pID0+IHtcbiAgbGV0IGlucHV0O1xuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2PlxuICAgICAgPGlucHV0IHJlZj17KGRvbUVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgaW5wdXQgPSBkb21FbGVtZW50O1xuXG4gICAgICAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBcIkFERF9UT0RPXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZSB9ID0gaW5wdXQsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IHZhbHVlLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgICBpZCA9IG5leHRUb2RvSWQrKztcblxuICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcblxuICAgICAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBBZGQgdG9kb1xuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmNsYXNzIFZpc2libGVUb2RvTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT5cbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgICk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPFRvZG9MaXN0IHRvZG9zPXtcbiAgICAgICAgICAgICAgICAgIGdldFZpc2libGVUb2RvcyhcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUudG9kb3MsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25Ub2RvQ2xpY2s9eyhpZCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gXCJUT0dHTEVfVE9ET1wiO1xuXG4gICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8cD5cbiAgICAgIHtcIlNob3c6IFwifVxuICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPVwiU0hPV19BTExcIj5cbiAgICAgICAgQWxsXG4gICAgICA8L0ZpbHRlckxpbms+XG4gICAgICB7XCIgLSBcIn1cbiAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj1cIlNIT1dfQ09NUExFVEVEXCI+XG4gICAgICAgIENvbXBsZXRlZFxuICAgICAgPC9GaWx0ZXJMaW5rPlxuICAgICAge1wiIC0gXCJ9XG4gICAgICA8RmlsdGVyTGluayBmaWx0ZXI9XCJTSE9XX0FDVElWRVwiPlxuICAgICAgICBBY3RpdmVcbiAgICAgIDwvRmlsdGVyTGluaz5cbiAgICA8L3A+XG5cbiAgKTtcbn07XG5cbmNvbnN0IFRvZG9BcHAgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8ZGl2PlxuICAgICAgPEFkZFRvZG8gLz5cbiAgICAgIDxWaXNpYmxlVG9kb0xpc3QgLz5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxuY2xhc3MgUHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3RvcmVcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHV4QXBwKCkge1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHRvZG9BcHApLFxuICAgICAgICByb290RE9NRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKTtcblxuICBSZWFjdERPTS5yZW5kZXIoXG5cbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8VG9kb0FwcCAvPlxuICAgICAgPC9Qcm92aWRlcj5cblxuICAgICxcbiAgICByb290RE9NRWxlbWVudFxuICApO1xufTtcbiJdfQ==