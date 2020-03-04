'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var Redux = require('./redux'),
    React = require('../react'),
    ReactDOM = require('../reactDOM');

var Component = React.Component,
    createStore = Redux.createStore,
    combineReducers = Redux.combineReducers;

var todo = function todo(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
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

    case 'TOGGLE_TODO':
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
    case 'ADD_TODO':
      return [].concat(_toConsumableArray(state), [todo(undefined, action)]);

    case 'TOGGLE_TODO':
      return state.map(function (t) {
        return todo(t, action);
      });

    default:
      return state;
  }
};

var visibilityFilter = function visibilityFilter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'SHOW_ALL';
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
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
    case 'SHOW_ALL':
      return todos;

    case 'SHOW_COMPLETED':
      return todos.filter(function (t) {
        return t.completed;
      });

    case 'SHOW_ACTIVE':
      return todos.filter(function (t) {
        return !t.completed;
      });
  }
};

var Todo = function Todo(_ref) {
  var onClick = _ref.onClick,
      completed = _ref.completed,
      text = _ref.text;
  return React.createElement("li", {
    onClick: onClick,
    style: {
      textDecoration: completed ? 'line-through' : 'none'
    }
  }, text);
};

var TodoList = function TodoList(_ref2) {
  var todos = _ref2.todos,
      onTodoClick = _ref2.onTodoClick;
  return React.createElement("ul", null, todos.map(function (todo) {
    return React.createElement(Todo, {
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
    return React.createElement("span", null, props.children);
  }

  return React.createElement("a", {
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
    return React.createElement(Link, {
      active: this.props.filter === state.visibilityFilter,
      onClick: function onClick() {
        var type = 'SET_VISIBILITY_FILTER',
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
  return React.createElement("div", null, React.createElement("input", {
    ref: function ref(domElement) {
      input = domElement;
    }
  }), React.createElement("button", {
    onClick: function onClick() {
      var type = 'ADD_TODO',
          _input = input,
          value = _input.value,
          text = value,
          id = nextTodoId++;
      store.dispatch({
        type: type,
        text: text,
        id: id
      });
      input.value = '';
    }
  }, "Add todo"));
};

var VisibleTodoList = /*#__PURE__*/function (_Component) {
  _inherits(VisibleTodoList, _Component);

  function VisibleTodoList() {
    _classCallCheck(this, VisibleTodoList);

    return _possibleConstructorReturn(this, _getPrototypeOf(VisibleTodoList).apply(this, arguments));
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
      return React.createElement(TodoList, {
        todos: getVisibleTodos(state.todos, state.visibilityFilter),
        onTodoClick: function onTodoClick(id) {
          var type = 'TOGGLE_TODO';
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
  return React.createElement("p", null, 'Show: ', React.createElement(FilterLink, {
    filter: "SHOW_ALL"
  }, "All"), ' - ', React.createElement(FilterLink, {
    filter: "SHOW_COMPLETED"
  }, "Completed"), ' - ', React.createElement(FilterLink, {
    filter: "SHOW_ACTIVE"
  }, "Active"));
};

var TodoApp = function TodoApp() {
  return React.createElement("div", null, React.createElement(AddTodo, null), React.createElement(VisibleTodoList, null), React.createElement(Footer, null));
};

var Provider = /*#__PURE__*/function (_Component2) {
  _inherits(Provider, _Component2);

  function Provider() {
    _classCallCheck(this, Provider);

    return _possibleConstructorReturn(this, _getPrototypeOf(Provider).apply(this, arguments));
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
      rootDOMElement = document.getElementById('root');
  ReactDOM.render(React.createElement(Provider, {
    store: store
  }, React.createElement(TodoApp, null)), rootDOMElement);
};

module.exports = reduxApp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHV4QXBwLmpzIl0sIm5hbWVzIjpbIlJlZHV4IiwicmVxdWlyZSIsIlJlYWN0IiwiUmVhY3RET00iLCJDb21wb25lbnQiLCJjcmVhdGVTdG9yZSIsImNvbWJpbmVSZWR1Y2VycyIsInRvZG8iLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJpZCIsInRleHQiLCJjb21wbGV0ZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJ0b2RvcyIsInVuZGVmaW5lZCIsIm1hcCIsInQiLCJ2aXNpYmlsaXR5RmlsdGVyIiwiZmlsdGVyIiwidG9kb0FwcCIsImdldFZpc2libGVUb2RvcyIsIlRvZG8iLCJvbkNsaWNrIiwidGV4dERlY29yYXRpb24iLCJUb2RvTGlzdCIsIm9uVG9kb0NsaWNrIiwiTGluayIsInByb3BzIiwiYWN0aXZlIiwiY2hpbGRyZW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJGaWx0ZXJMaW5rIiwiY3JlYXRlQ2xhc3MiLCJjb21wb25lbnREaWRNb3VudCIsInN0b3JlIiwiY29udGV4dCIsInVuc3Vic2NyaWJlIiwic3Vic2NyaWJlIiwiZm9yY2VVcGRhdGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsImdldFN0YXRlIiwiZGlzcGF0Y2giLCJuZXh0VG9kb0lkIiwiQWRkVG9kbyIsImlucHV0IiwiZG9tRWxlbWVudCIsInZhbHVlIiwiVmlzaWJsZVRvZG9MaXN0IiwiRm9vdGVyIiwiVG9kb0FwcCIsIlByb3ZpZGVyIiwicmVkdXhBcHAiLCJyb290RE9NRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLEtBQUssR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBckI7QUFBQSxJQUNNQyxLQUFLLEdBQUdELE9BQU8sQ0FBQyxVQUFELENBRHJCO0FBQUEsSUFFTUUsUUFBUSxHQUFHRixPQUFPLENBQUMs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QUFBVSxJQUFBLEtBQUssRUFBRU47QUFBakIsS0FDRSxvQkFBQyxPQUFELE9BREYsQ0FGSixFQU9FbUIsY0FQRjtBQVNELENBYkQ7O0FBZUFHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkwsUUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlZHV4ID0gcmVxdWlyZSgnLi9yZWR1eCcpLFxuICAgICAgUmVhY3QgPSByZXF1aXJlKCcuLi9yZWFjdCcpLFxuICAgICAgUmVhY3RET00gPSByZXF1aXJlKCcuLi9yZWFjdERPTScpO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3QsXG4gICAgICB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfSA9IFJlZHV4O1xuXG5jb25zdCB0b2RvID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0FERF9UT0RPJyA6IHtcbiAgICAgIGNvbnN0IHsgaWQsIHRleHQgfSA9IGFjdGlvbixcbiAgICAgICAgY29tcGxldGVkID0gZmFsc2U7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkLFxuICAgICAgICB0ZXh0LFxuICAgICAgICBjb21wbGV0ZWRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSAnVE9HR0xFX1RPRE8nIDoge1xuICAgICAgaWYgKHN0YXRlLmlkICE9PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjb21wbGV0ZWQgPSAhc3RhdGUuY29tcGxldGVkOyAvLy9cblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGNvbXBsZXRlZFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuY29uc3QgdG9kb3MgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdBRERfVE9ETycgOlxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHRvZG8odW5kZWZpbmVkLCBhY3Rpb24pXG4gICAgICBdO1xuXG4gICAgY2FzZSAnVE9HR0xFX1RPRE8nIDpcbiAgICAgIHJldHVybiBzdGF0ZS5tYXAodCA9PiB0b2RvKHQsIGFjdGlvbikpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuY29uc3QgdmlzaWJpbGl0eUZpbHRlciA9ICggc3RhdGUgPSAnU0hPV19BTEwnLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1NFVF9WSVNJQklMSVRZX0ZJTFRFUicgOlxuICAgICAgcmV0dXJuIGFjdGlvbi5maWx0ZXI7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCB0b2RvQXBwID0gY29tYmluZVJlZHVjZXJzKHtcbiAgdG9kb3MsXG4gIHZpc2liaWxpdHlGaWx0ZXJcbn0pO1xuXG5jb25zdCBnZXRWaXNpYmxlVG9kb3MgPSAodG9kb3MsIGZpbHRlcikgPT4ge1xuICBzd2l0Y2ggKGZpbHRlcikge1xuICAgIGNhc2UgJ1NIT1dfQUxMJyA6XG4gICAgICByZXR1cm4gdG9kb3M7XG5cbiAgICBjYXNlICdTSE9XX0NPTVBMRVRFRCcgOlxuICAgICAgcmV0dXJuIHRvZG9zLmZpbHRlcihcbiAgICAgICAgdCA9PiB0LmNvbXBsZXRlZFxuICAgICAgKTtcblxuICAgIGNhc2UgJ1NIT1dfQUNUSVZFJyA6XG4gICAgICByZXR1cm4gdG9kb3MuZmlsdGVyKFxuICAgICAgICB0ID0+ICF0LmNvbXBsZXRlZFxuICAgICAgKTtcbiAgfVxufTtcblxuY29uc3QgVG9kbyA9ICh7b25DbGljaywgY29tcGxldGVkLCB0ZXh0fSkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPGxpIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgIHN0eWxlPXt7dGV4dERlY29yYXRpb246Y29tcGxldGVkID9cbiAgICAgICAgICAgICdsaW5lLXRocm91Z2gnIDpcbiAgICAgICAgICAgICdub25lJ319XG4gICAgPlxuICAgICAge3RleHR9XG4gICAgPC9saT5cblxuICApO1xufTtcblxuY29uc3QgVG9kb0xpc3QgPSAoe3RvZG9zLCBvblRvZG9DbGlja30pID0+ICB7XG4gIHJldHVybiAoXG5cbiAgICA8dWw+XG4gICAgICB7dG9kb3MubWFwKHRvZG8gPT4gPFRvZG8gdGV4dD17dG9kby50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZD17dG9kby5jb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG9kb0NsaWNrKHRvZG8uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgLz4pfVxuICAgIDwvdWw+XG5cbiAgKTtcbn07XG5cbmNvbnN0IExpbmsgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBhY3RpdmUsIG9uQ2xpY2sgfSA9IHByb3BzO1xuXG4gIGlmIChhY3RpdmUpIHtcbiAgICByZXR1cm4gPHNwYW4+e3Byb3BzLmNoaWxkcmVufTwvc3Bhbj47XG4gIH1cblxuICByZXR1cm4gKFxuXG4gICAgPGEgaHJlZj0nIydcbiAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgIG9uQ2xpY2soKTtcbiAgICAgICB9fVxuICAgID5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2E+XG5cbiAgKTtcbn07XG5cbmNvbnN0IEZpbHRlckxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT5cbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgICk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8TGluayBhY3RpdmU9e1xuICAgICAgICB0aGlzLnByb3BzLmZpbHRlciA9PT0gc3RhdGUudmlzaWJpbGl0eUZpbHRlclxuICAgICAgfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB0eXBlID0gJ1NFVF9WSVNJQklMSVRZX0ZJTFRFUicsXG4gICAgICAgICAgICAgICAgeyBmaWx0ZXIgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgZmlsdGVyXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L0xpbms+XG5cbiAgICApO1xuICB9XG59KTtcblxubGV0IG5leHRUb2RvSWQgPSAwO1xuY29uc3QgQWRkVG9kbyA9IChwcm9wcywge3N0b3JlfSkgPT4ge1xuICBsZXQgaW5wdXQ7XG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXY+XG4gICAgICA8aW5wdXQgcmVmPXtkb21FbGVtZW50ID0+IHtcbiAgICAgICAgaW5wdXQgPSBkb21FbGVtZW50O1xuICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgY29uc3QgdHlwZSA9ICdBRERfVE9ETycsXG4gICAgICAgICAgeyB2YWx1ZSB9ID0gaW5wdXQsXG4gICAgICAgICAgdGV4dCA9IHZhbHVlLCAvLy9cbiAgICAgICAgICBpZCA9IG5leHRUb2RvSWQrKztcblxuICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICB0ZXh0LFxuICAgICAgICAgIGlkXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICB9fVxuICAgICAgPlxuICAgICAgICBBZGQgdG9kb1xuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmNsYXNzIFZpc2libGVUb2RvTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT5cbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgICk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPFRvZG9MaXN0IHRvZG9zPXtcbiAgICAgICAgZ2V0VmlzaWJsZVRvZG9zKFxuICAgICAgICAgIHN0YXRlLnRvZG9zLFxuICAgICAgICAgIHN0YXRlLnZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgICAgICAgICAgIG9uVG9kb0NsaWNrPXsoaWQpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSAnVE9HR0xFX1RPRE8nO1xuXG4gICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgLz5cblxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPHA+XG4gICAgICB7J1Nob3c6ICd9XG4gICAgICA8RmlsdGVyTGluayBmaWx0ZXI9J1NIT1dfQUxMJz5cbiAgICAgICAgQWxsXG4gICAgICA8L0ZpbHRlckxpbms+XG4gICAgICB7JyAtICd9XG4gICAgICA8RmlsdGVyTGluayBmaWx0ZXI9J1NIT1dfQ09NUExFVEVEJz5cbiAgICAgICAgQ29tcGxldGVkXG4gICAgICA8L0ZpbHRlckxpbms+XG4gICAgICB7JyAtICd9XG4gICAgICA8RmlsdGVyTGluayBmaWx0ZXI9J1NIT1dfQUNUSVZFJz5cbiAgICAgICAgQWN0aXZlXG4gICAgICA8L0ZpbHRlckxpbms+XG4gICAgPC9wPlxuXG4gICk7XG59O1xuXG5jb25zdCBUb2RvQXBwID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cbiAgICAgIDxBZGRUb2RvIC8+XG4gICAgICA8VmlzaWJsZVRvZG9MaXN0IC8+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmNsYXNzIFByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0b3JlXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgfVxufVxuXG5jb25zdCByZWR1eEFwcCA9ICgpID0+IHtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZSh0b2RvQXBwKSxcbiAgICAgICAgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXG4gIFJlYWN0RE9NLnJlbmRlcihcblxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxUb2RvQXBwIC8+XG4gICAgICA8L1Byb3ZpZGVyPlxuXG4gICAgLFxuICAgIHJvb3RET01FbGVtZW50XG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHV4QXBwO1xuIl19