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
    onClick: function onClick(e) {
      e.preventDefault();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHV4QXBwLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlJlYWN0IiwiY3JlYXRlU3RvcmUiLCJSZWR1eCIsImNvbWJpbmVSZWR1Y2VycyIsInRvZG8iLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJpZCIsInRleHQiLCJjb21wbGV0ZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJ0b2RvcyIsInVuZGVmaW5lZCIsIm1hcCIsInQiLCJ2aXNpYmlsaXR5RmlsdGVyIiwiZmlsdGVyIiwidG9kb0FwcCIsImdldFZpc2libGVUb2RvcyIsIlRvZG8iLCJvbkNsaWNrIiwidGV4dERlY29yYXRpb24iLCJUb2RvTGlzdCIsIm9uVG9kb0NsaWNrIiwiTGluayIsInByb3BzIiwiYWN0aXZlIiwiY2hpbGRyZW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJGaWx0ZXJMaW5rIiwiY3JlYXRlQ2xhc3MiLCJjb21wb25lbnREaWRNb3VudCIsInN0b3JlIiwiY29udGV4dCIsInVuc3Vic2NyaWJlIiwic3Vic2NyaWJlIiwiZm9yY2VVcGRhdGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsImdldFN0YXRlIiwiZGlzcGF0Y2giLCJuZXh0VG9kb0lkIiwiQWRkVG9kbyIsImlucHV0IiwiZG9tRWxlbWVudCIsInZhbHVlIiwiVmlzaWJsZVRvZG9MaXN0IiwiRm9vdGVyIiwiVG9kb0FwcCIsIlByb3ZpZGVyIiwicmVkdXhBcHAiLCJyb290RE9NRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdERPTSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFFdEMsSUFBRUEsU0FBRixHQUFnQkMsWUFBaEIsQ0FBRUQsU0FBRjtBQUFBLElBQ0VFLFdBREYsR0FDbUNDLGlCQURuQyxDQUNFRCxXQURGO0FBQUEsSUFDZUUsZUFEZixHQUNtQ0QsaUJBRG5DLENB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ZWR1eFwiO1xuXG5pbXBvcnQgeyBSZWFjdCwgUmVhY3RET00gfSBmcm9tIFwiLi4vaW5kZXhcIjsgLy8vXG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdCxcbiAgICAgIHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9ID0gUmVkdXg7XG5cbmNvbnN0IHRvZG8gPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIkFERF9UT0RPXCIgOiB7XG4gICAgICBjb25zdCB7IGlkLCB0ZXh0IH0gPSBhY3Rpb24sXG4gICAgICAgIGNvbXBsZXRlZCA9IGZhbHNlO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgdGV4dCxcbiAgICAgICAgY29tcGxldGVkXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgXCJUT0dHTEVfVE9ET1wiIDoge1xuICAgICAgaWYgKHN0YXRlLmlkICE9PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjb21wbGV0ZWQgPSAhc3RhdGUuY29tcGxldGVkOyAvLy9cblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGNvbXBsZXRlZFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuY29uc3QgdG9kb3MgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiQUREX1RPRE9cIiA6XG4gICAgICByZXR1cm4gW1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdG9kbyh1bmRlZmluZWQsIGFjdGlvbilcbiAgICAgIF07XG5cbiAgICBjYXNlIFwiVE9HR0xFX1RPRE9cIiA6XG4gICAgICByZXR1cm4gc3RhdGUubWFwKHQgPT4gdG9kbyh0LCBhY3Rpb24pKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IHZpc2liaWxpdHlGaWx0ZXIgPSAoIHN0YXRlID0gXCJTSE9XX0FMTFwiLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJTRVRfVklTSUJJTElUWV9GSUxURVJcIiA6XG4gICAgICByZXR1cm4gYWN0aW9uLmZpbHRlcjtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IHRvZG9BcHAgPSBjb21iaW5lUmVkdWNlcnMoe1xuICB0b2RvcyxcbiAgdmlzaWJpbGl0eUZpbHRlclxufSk7XG5cbmNvbnN0IGdldFZpc2libGVUb2RvcyA9ICh0b2RvcywgZmlsdGVyKSA9PiB7XG4gIHN3aXRjaCAoZmlsdGVyKSB7XG4gICAgY2FzZSBcIlNIT1dfQUxMXCIgOlxuICAgICAgcmV0dXJuIHRvZG9zO1xuXG4gICAgY2FzZSBcIlNIT1dfQ09NUExFVEVEXCIgOlxuICAgICAgcmV0dXJuIHRvZG9zLmZpbHRlcihcbiAgICAgICAgdCA9PiB0LmNvbXBsZXRlZFxuICAgICAgKTtcblxuICAgIGNhc2UgXCJTSE9XX0FDVElWRVwiIDpcbiAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIoXG4gICAgICAgIHQgPT4gIXQuY29tcGxldGVkXG4gICAgICApO1xuICB9XG59O1xuXG5jb25zdCBUb2RvID0gKHtvbkNsaWNrLCBjb21wbGV0ZWQsIHRleHR9KSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8bGkgb25DbGljaz17b25DbGlja31cbiAgICAgICAgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjpjb21wbGV0ZWQgP1xuICAgICAgICAgICAgXCJsaW5lLXRocm91Z2hcIiA6XG4gICAgICAgICAgICBcIm5vbmVcIn19XG4gICAgPlxuICAgICAge3RleHR9XG4gICAgPC9saT5cblxuICApO1xufTtcblxuY29uc3QgVG9kb0xpc3QgPSAoe3RvZG9zLCBvblRvZG9DbGlja30pID0+ICB7XG4gIHJldHVybiAoXG5cbiAgICA8dWw+XG4gICAgICB7dG9kb3MubWFwKHRvZG8gPT4gPFRvZG8gdGV4dD17dG9kby50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZD17dG9kby5jb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG9kb0NsaWNrKHRvZG8uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgLz4pfVxuICAgIDwvdWw+XG5cbiAgKTtcbn07XG5cbmNvbnN0IExpbmsgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBhY3RpdmUsIG9uQ2xpY2sgfSA9IHByb3BzO1xuXG4gIGlmIChhY3RpdmUpIHtcbiAgICByZXR1cm4gPHNwYW4+e3Byb3BzLmNoaWxkcmVufTwvc3Bhbj47XG4gIH1cblxuICByZXR1cm4gKFxuXG4gICAgPGEgaHJlZj1cIiNcIlxuICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgb25DbGljaygpO1xuICAgICAgIH19XG4gICAgPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvYT5cblxuICApO1xufTtcblxuY29uc3QgRmlsdGVyTGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PlxuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgIHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxMaW5rIGFjdGl2ZT17XG4gICAgICAgIHRoaXMucHJvcHMuZmlsdGVyID09PSBzdGF0ZS52aXNpYmlsaXR5RmlsdGVyXG4gICAgICB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBcIlNFVF9WSVNJQklMSVRZX0ZJTFRFUlwiLFxuICAgICAgICAgICAgICAgIHsgZmlsdGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgIGZpbHRlclxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9MaW5rPlxuXG4gICAgKTtcbiAgfVxufSk7XG5cbmxldCBuZXh0VG9kb0lkID0gMDtcbmNvbnN0IEFkZFRvZG8gPSAocHJvcHMsIHtzdG9yZX0pID0+IHtcbiAgbGV0IGlucHV0O1xuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2PlxuICAgICAgPGlucHV0IHJlZj17ZG9tRWxlbWVudCA9PiB7XG4gICAgICAgIGlucHV0ID0gZG9tRWxlbWVudDtcbiAgICAgIH19XG4gICAgICAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBcIkFERF9UT0RPXCIsXG4gICAgICAgICAgeyB2YWx1ZSB9ID0gaW5wdXQsXG4gICAgICAgICAgdGV4dCA9IHZhbHVlLCAvLy9cbiAgICAgICAgICBpZCA9IG5leHRUb2RvSWQrKztcblxuICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICB0ZXh0LFxuICAgICAgICAgIGlkXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgIH19XG4gICAgICA+XG4gICAgICAgIEFkZCB0b2RvXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxuY2xhc3MgVmlzaWJsZVRvZG9MaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PlxuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8VG9kb0xpc3QgdG9kb3M9e1xuICAgICAgICBnZXRWaXNpYmxlVG9kb3MoXG4gICAgICAgICAgc3RhdGUudG9kb3MsXG4gICAgICAgICAgc3RhdGUudmlzaWJpbGl0eUZpbHRlclxuICAgICAgICApXG4gICAgICB9XG4gICAgICAgICAgICAgICAgb25Ub2RvQ2xpY2s9eyhpZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IFwiVE9HR0xFX1RPRE9cIjtcblxuICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgIC8+XG5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcblxuICAgIDxwPlxuICAgICAge1wiU2hvdzogXCJ9XG4gICAgICA8RmlsdGVyTGluayBmaWx0ZXI9XCJTSE9XX0FMTFwiPlxuICAgICAgICBBbGxcbiAgICAgIDwvRmlsdGVyTGluaz5cbiAgICAgIHtcIiAtIFwifVxuICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPVwiU0hPV19DT01QTEVURURcIj5cbiAgICAgICAgQ29tcGxldGVkXG4gICAgICA8L0ZpbHRlckxpbms+XG4gICAgICB7XCIgLSBcIn1cbiAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj1cIlNIT1dfQUNUSVZFXCI+XG4gICAgICAgIEFjdGl2ZVxuICAgICAgPC9GaWx0ZXJMaW5rPlxuICAgIDwvcD5cblxuICApO1xufTtcblxuY29uc3QgVG9kb0FwcCA9ICgpID0+IHtcbiAgcmV0dXJuIChcblxuICAgIDxkaXY+XG4gICAgICA8QWRkVG9kbyAvPlxuICAgICAgPFZpc2libGVUb2RvTGlzdCAvPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5jbGFzcyBQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiB7XG4gICAgICBzdG9yZVxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdXhBcHAoKSB7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUodG9kb0FwcCksXG4gICAgICAgIHJvb3RET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuXG4gIFJlYWN0RE9NLnJlbmRlcihcblxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxUb2RvQXBwIC8+XG4gICAgICA8L1Byb3ZpZGVyPlxuXG4gICAgLFxuICAgIHJvb3RET01FbGVtZW50XG4gICk7XG59O1xuIl19