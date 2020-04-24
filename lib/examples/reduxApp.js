"use strict";

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

var Redux = require("./redux"),
    React = require("../react"),
    ReactDOM = require("../reactDOM");

var Component = React.Component,
    createStore = Redux.createStore,
    combineReducers = Redux.combineReducers;

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
  return /*#__PURE__*/React.createElement("li", {
    onClick: onClick,
    style: {
      textDecoration: completed ? "line-through" : "none"
    }
  }, text);
};

var TodoList = function TodoList(_ref2) {
  var todos = _ref2.todos,
      onTodoClick = _ref2.onTodoClick;
  return /*#__PURE__*/React.createElement("ul", null, todos.map(function (todo) {
    return /*#__PURE__*/React.createElement(Todo, {
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
    return /*#__PURE__*/React.createElement("span", null, props.children);
  }

  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();

      _onClick();
    }
  }, props.children);
};

var FilterLink = React.createClass({
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
    return /*#__PURE__*/React.createElement(Link, {
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
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    ref: function ref(domElement) {
      input = domElement;
    }
  }), /*#__PURE__*/React.createElement("button", {
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
      return /*#__PURE__*/React.createElement(TodoList, {
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
  return /*#__PURE__*/React.createElement("p", null, "Show: ", /*#__PURE__*/React.createElement(FilterLink, {
    filter: "SHOW_ALL"
  }, "All"), " - ", /*#__PURE__*/React.createElement(FilterLink, {
    filter: "SHOW_COMPLETED"
  }, "Completed"), " - ", /*#__PURE__*/React.createElement(FilterLink, {
    filter: "SHOW_ACTIVE"
  }, "Active"));
};

var TodoApp = function TodoApp() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AddTodo, null), /*#__PURE__*/React.createElement(VisibleTodoList, null), /*#__PURE__*/React.createElement(Footer, null));
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
  ReactDOM.render( /*#__PURE__*/React.createElement(Provider, {
    store: store
  }, /*#__PURE__*/React.createElement(TodoApp, null)), rootDOMElement);
};

module.exports = reduxApp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHV4QXBwLmpzIl0sIm5hbWVzIjpbIlJlZHV4IiwicmVxdWlyZSIsIlJlYWN0IiwiUmVhY3RET00iLCJDb21wb25lbnQiLCJjcmVhdGVTdG9yZSIsImNvbWJpbmVSZWR1Y2VycyIsInRvZG8iLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJpZCIsInRleHQiLCJjb21wbGV0ZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJ0b2RvcyIsInVuZGVmaW5lZCIsIm1hcCIsInQiLCJ2aXNpYmlsaXR5RmlsdGVyIiwiZmlsdGVyIiwidG9kb0FwcCIsImdldFZpc2libGVUb2RvcyIsIlRvZG8iLCJvbkNsaWNrIiwidGV4dERlY29yYXRpb24iLCJUb2RvTGlzdCIsIm9uVG9kb0NsaWNrIiwiTGluayIsInByb3BzIiwiYWN0aXZlIiwiY2hpbGRyZW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJGaWx0ZXJMaW5rIiwiY3JlYXRlQ2xhc3MiLCJjb21wb25lbnREaWRNb3VudCIsInN0b3JlIiwiY29udGV4dCIsInVuc3Vic2NyaWJlIiwic3Vic2NyaWJlIiwiZm9yY2VVcGRhdGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsImdldFN0YXRlIiwiZGlzcGF0Y2giLCJuZXh0VG9kb0lkIiwiQWRkVG9kbyIsImlucHV0IiwiZG9tRWxlbWVudCIsInZhbHVlIiwiVmlzaWJsZVRvZG9MaXN0IiwiRm9vdGVyIiwiVG9kb0FwcCIsIlByb3ZpZGVyIiwicmVkdXhBcHAiLCJyb290RE9NRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsS0FBSyxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUFyQjtBQUFBLElBQ01DLEtBQUssR0FBR0QsT0FBTyxDQUFDLFVBQUQsQ0FEckI7QUFBQSxJQUVNRSxRQUFRLEdBQUdGLE9B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LE1BQVQsZUFFSSxvQkFBQyxRQUFEO0FBQVUsSUFBQSxLQUFLLEVBQUVOO0FBQWpCLGtCQUNFLG9CQUFDLE9BQUQsT0FERixDQUZKLEVBT0VtQixjQVBGO0FBU0QsQ0FiRDs7QUFlQUcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTCxRQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBSZWR1eCA9IHJlcXVpcmUoXCIuL3JlZHV4XCIpLFxuICAgICAgUmVhY3QgPSByZXF1aXJlKFwiLi4vcmVhY3RcIiksXG4gICAgICBSZWFjdERPTSA9IHJlcXVpcmUoXCIuLi9yZWFjdERPTVwiKTtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0LFxuICAgICAgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH0gPSBSZWR1eDtcblxuY29uc3QgdG9kbyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiQUREX1RPRE9cIiA6IHtcbiAgICAgIGNvbnN0IHsgaWQsIHRleHQgfSA9IGFjdGlvbixcbiAgICAgICAgY29tcGxldGVkID0gZmFsc2U7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkLFxuICAgICAgICB0ZXh0LFxuICAgICAgICBjb21wbGV0ZWRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBcIlRPR0dMRV9UT0RPXCIgOiB7XG4gICAgICBpZiAoc3RhdGUuaWQgIT09IGFjdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlZCA9ICFzdGF0ZS5jb21wbGV0ZWQ7IC8vL1xuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgY29tcGxldGVkXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCB0b2RvcyA9IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJBRERfVE9ET1wiIDpcbiAgICAgIHJldHVybiBbXG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB0b2RvKHVuZGVmaW5lZCwgYWN0aW9uKVxuICAgICAgXTtcblxuICAgIGNhc2UgXCJUT0dHTEVfVE9ET1wiIDpcbiAgICAgIHJldHVybiBzdGF0ZS5tYXAodCA9PiB0b2RvKHQsIGFjdGlvbikpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuY29uc3QgdmlzaWJpbGl0eUZpbHRlciA9ICggc3RhdGUgPSBcIlNIT1dfQUxMXCIsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIlNFVF9WSVNJQklMSVRZX0ZJTFRFUlwiIDpcbiAgICAgIHJldHVybiBhY3Rpb24uZmlsdGVyO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuY29uc3QgdG9kb0FwcCA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIHRvZG9zLFxuICB2aXNpYmlsaXR5RmlsdGVyXG59KTtcblxuY29uc3QgZ2V0VmlzaWJsZVRvZG9zID0gKHRvZG9zLCBmaWx0ZXIpID0+IHtcbiAgc3dpdGNoIChmaWx0ZXIpIHtcbiAgICBjYXNlIFwiU0hPV19BTExcIiA6XG4gICAgICByZXR1cm4gdG9kb3M7XG5cbiAgICBjYXNlIFwiU0hPV19DT01QTEVURURcIiA6XG4gICAgICByZXR1cm4gdG9kb3MuZmlsdGVyKFxuICAgICAgICB0ID0+IHQuY29tcGxldGVkXG4gICAgICApO1xuXG4gICAgY2FzZSBcIlNIT1dfQUNUSVZFXCIgOlxuICAgICAgcmV0dXJuIHRvZG9zLmZpbHRlcihcbiAgICAgICAgdCA9PiAhdC5jb21wbGV0ZWRcbiAgICAgICk7XG4gIH1cbn07XG5cbmNvbnN0IFRvZG8gPSAoe29uQ2xpY2ssIGNvbXBsZXRlZCwgdGV4dH0pID0+IHtcbiAgcmV0dXJuIChcblxuICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICBzdHlsZT17e3RleHREZWNvcmF0aW9uOmNvbXBsZXRlZCA/XG4gICAgICAgICAgICBcImxpbmUtdGhyb3VnaFwiIDpcbiAgICAgICAgICAgIFwibm9uZVwifX1cbiAgICA+XG4gICAgICB7dGV4dH1cbiAgICA8L2xpPlxuXG4gICk7XG59O1xuXG5jb25zdCBUb2RvTGlzdCA9ICh7dG9kb3MsIG9uVG9kb0NsaWNrfSkgPT4gIHtcbiAgcmV0dXJuIChcblxuICAgIDx1bD5cbiAgICAgIHt0b2Rvcy5tYXAodG9kbyA9PiA8VG9kbyB0ZXh0PXt0b2RvLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkPXt0b2RvLmNvbXBsZXRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub2RvQ2xpY2sodG9kby5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAvPil9XG4gICAgPC91bD5cblxuICApO1xufTtcblxuY29uc3QgTGluayA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGFjdGl2ZSwgb25DbGljayB9ID0gcHJvcHM7XG5cbiAgaWYgKGFjdGl2ZSkge1xuICAgIHJldHVybiA8c3Bhbj57cHJvcHMuY2hpbGRyZW59PC9zcGFuPjtcbiAgfVxuXG4gIHJldHVybiAoXG5cbiAgICA8YSBocmVmPVwiI1wiXG4gICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICBvbkNsaWNrKCk7XG4gICAgICAgfX1cbiAgICA+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9hPlxuXG4gICk7XG59O1xuXG5jb25zdCBGaWx0ZXJMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICApO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPExpbmsgYWN0aXZlPXtcbiAgICAgICAgdGhpcy5wcm9wcy5maWx0ZXIgPT09IHN0YXRlLnZpc2liaWxpdHlGaWx0ZXJcbiAgICAgIH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IFwiU0VUX1ZJU0lCSUxJVFlfRklMVEVSXCIsXG4gICAgICAgICAgICAgICAgeyBmaWx0ZXIgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgZmlsdGVyXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L0xpbms+XG5cbiAgICApO1xuICB9XG59KTtcblxubGV0IG5leHRUb2RvSWQgPSAwO1xuY29uc3QgQWRkVG9kbyA9IChwcm9wcywge3N0b3JlfSkgPT4ge1xuICBsZXQgaW5wdXQ7XG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXY+XG4gICAgICA8aW5wdXQgcmVmPXtkb21FbGVtZW50ID0+IHtcbiAgICAgICAgaW5wdXQgPSBkb21FbGVtZW50O1xuICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgY29uc3QgdHlwZSA9IFwiQUREX1RPRE9cIixcbiAgICAgICAgICB7IHZhbHVlIH0gPSBpbnB1dCxcbiAgICAgICAgICB0ZXh0ID0gdmFsdWUsIC8vL1xuICAgICAgICAgIGlkID0gbmV4dFRvZG9JZCsrO1xuXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIHRleHQsXG4gICAgICAgICAgaWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgQWRkIHRvZG9cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5jbGFzcyBWaXNpYmxlVG9kb0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICApO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgIHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxUb2RvTGlzdCB0b2Rvcz17XG4gICAgICAgIGdldFZpc2libGVUb2RvcyhcbiAgICAgICAgICBzdGF0ZS50b2RvcyxcbiAgICAgICAgICBzdGF0ZS52aXNpYmlsaXR5RmlsdGVyXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgICAgICAgICAgICBvblRvZG9DbGljaz17KGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gXCJUT0dHTEVfVE9ET1wiO1xuXG4gICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgLz5cblxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPHA+XG4gICAgICB7XCJTaG93OiBcIn1cbiAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj1cIlNIT1dfQUxMXCI+XG4gICAgICAgIEFsbFxuICAgICAgPC9GaWx0ZXJMaW5rPlxuICAgICAge1wiIC0gXCJ9XG4gICAgICA8RmlsdGVyTGluayBmaWx0ZXI9XCJTSE9XX0NPTVBMRVRFRFwiPlxuICAgICAgICBDb21wbGV0ZWRcbiAgICAgIDwvRmlsdGVyTGluaz5cbiAgICAgIHtcIiAtIFwifVxuICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPVwiU0hPV19BQ1RJVkVcIj5cbiAgICAgICAgQWN0aXZlXG4gICAgICA8L0ZpbHRlckxpbms+XG4gICAgPC9wPlxuXG4gICk7XG59O1xuXG5jb25zdCBUb2RvQXBwID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cbiAgICAgIDxBZGRUb2RvIC8+XG4gICAgICA8VmlzaWJsZVRvZG9MaXN0IC8+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmNsYXNzIFByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0b3JlXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgfVxufVxuXG5jb25zdCByZWR1eEFwcCA9ICgpID0+IHtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZSh0b2RvQXBwKSxcbiAgICAgICAgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG5cbiAgUmVhY3RET00ucmVuZGVyKFxuXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPFRvZG9BcHAgLz5cbiAgICAgIDwvUHJvdmlkZXI+XG5cbiAgICAsXG4gICAgcm9vdERPTUVsZW1lbnRcbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdXhBcHA7XG4iXX0=