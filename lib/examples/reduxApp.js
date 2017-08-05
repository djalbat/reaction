'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Redux = require('./redux'),
    React = require('../react'),
    ReactDOM = require('../reactDOM');

var Component = React.Component;
var Class = React.Class;
var createStore = Redux.createStore;
var combineReducers = Redux.combineReducers;


var reduxApp = function reduxApp() {
  var todo = function todo(state, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          id: action.id,
          text: action.text,
          completed: false
        };

      case 'TOGGLE_TODO':
        if (state.id !== action.id) {
          return state;
        }

        return Object.assign({}, state, {
          completed: !state.completed
        });

      default:
        return state;
    }
  };

  var todos = function todos() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

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
    var action = arguments[1];

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
    var onClick = _ref.onClick;
    var completed = _ref.completed;
    var text = _ref.text;

    return React.createElement(
      'li',
      { onClick: onClick,
        style: { textDecoration: completed ? 'line-through' : 'none' }
      },
      text
    );
  };

  var TodoList = function TodoList(_ref2) {
    var todos = _ref2.todos;
    var onTodoClick = _ref2.onTodoClick;

    return React.createElement(
      'ul',
      null,
      todos.map(function (todo) {
        return React.createElement(Todo, { text: todo.text,
          completed: todo.completed,
          onClick: function onClick() {
            return onTodoClick(todo.id);
          }
        });
      })
    );
  };

  var Link = function Link(props) {
    var active = props.active;
    var _onClick = props.onClick;


    if (active) {
      return React.createElement(
        'span',
        null,
        props.children
      );
    }

    return React.createElement(
      'a',
      { href: '#',
        onClick: function onClick(e) {
          e.preventDefault();
          _onClick();
        }
      },
      props.children
    );
  };

  var FilterLink = React.createClass({
    displayName: 'FilterLink',
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

      var store = this.context.store;

      var state = store.getState();

      return React.createElement(
        Link,
        { active: this.props.filter === state.visibilityFilter,
          onClick: function onClick() {
            return store.dispatch({
              type: 'SET_VISIBILITY_FILTER',
              filter: _this2.props.filter
            });
          }
        },
        this.props.children
      );
    }
  });

  var nextTodoId = 0;
  var AddTodo = function AddTodo(props, _ref3) {
    var store = _ref3.store;

    var input = void 0;

    return React.createElement(
      'div',
      null,
      React.createElement('input', { ref: function ref(domElement) {
          input = domElement;
        }
      }),
      React.createElement(
        'button',
        { onClick: function onClick() {
            store.dispatch({
              type: 'ADD_TODO',
              text: input.value,
              id: nextTodoId++
            });
            input.value = '';
          }
        },
        'Add todo'
      )
    );
  };

  var VisibleTodoList = function (_Component) {
    _inherits(VisibleTodoList, _Component);

    function VisibleTodoList() {
      _classCallCheck(this, VisibleTodoList);

      return _possibleConstructorReturn(this, (VisibleTodoList.__proto__ || Object.getPrototypeOf(VisibleTodoList)).apply(this, arguments));
    }

    _createClass(VisibleTodoList, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this4 = this;

        var store = this.context.store;


        this.unsubscribe = store.subscribe(function () {
          return _this4.forceUpdate();
        });
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.unsubscribe();
      }
    }, {
      key: 'render',
      value: function render() {
        var store = this.context.store;

        var state = store.getState();

        return React.createElement(TodoList, { todos: getVisibleTodos(state.todos, state.visibilityFilter),
          onTodoClick: function onTodoClick(id) {
            return store.dispatch({
              type: 'TOGGLE_TODO',
              id: id
            });
          }
        });
      }
    }]);

    return VisibleTodoList;
  }(Component);

  var Footer = function Footer() {
    return React.createElement(
      'p',
      null,
      'Show: ',
      React.createElement(
        FilterLink,
        { filter: 'SHOW_ALL' },
        'All'
      ),
      ' - ',
      React.createElement(
        FilterLink,
        { filter: 'SHOW_COMPLETED' },
        'Completed'
      ),
      ' - ',
      React.createElement(
        FilterLink,
        { filter: 'SHOW_ACTIVE' },
        'Active'
      )
    );
  };

  var TodoApp = function TodoApp() {
    return React.createElement(
      'div',
      null,
      React.createElement(AddTodo, null),
      React.createElement(VisibleTodoList, null),
      React.createElement(Footer, null)
    );
  };

  var Provider = function (_Component2) {
    _inherits(Provider, _Component2);

    function Provider() {
      _classCallCheck(this, Provider);

      return _possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).apply(this, arguments));
    }

    _createClass(Provider, [{
      key: 'getChildContext',
      value: function getChildContext(context) {
        return {
          store: this.props.store
        };
      }
    }, {
      key: 'render',
      value: function render() {
        return this.props.children;
      }
    }]);

    return Provider;
  }(Component);

  var rootDOMElement = document.getElementById('root');

  ReactDOM.render(React.createElement(
    Provider,
    { store: createStore(todoApp) },
    React.createElement(TodoApp, null)
  ), rootDOMElement);
};

module.exports = reduxApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9yZWR1eEFwcC5qcyJdLCJuYW1lcyI6WyJSZWR1eCIsInJlcXVpcmUiLCJSZWFjdCIsIlJlYWN0RE9NIiwiQ29tcG9uZW50IiwiQ2xhc3MiLCJjcmVhdGVTdG9yZSIsImNvbWJpbmVSZWR1Y2VycyIsInJlZHV4QXBwIiwidG9kbyIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImlkIiwidGV4dCIsImNvbXBsZXRlZCIsIk9iamVjdCIsImFzc2lnbiIsInRvZG9zIiwidW5kZWZpbmVkIiwibWFwIiwidCIsInZpc2liaWxpdHlGaWx0ZXIiLCJmaWx0ZXIiLCJ0b2RvQXBwIiwiZ2V0VmlzaWJsZVRvZG9zIiwiVG9kbyIsIm9uQ2xpY2siLCJ0ZXh0RGVjb3JhdGlvbiIsIlRvZG9MaXN0Iiwib25Ub2RvQ2xpY2siLCJMaW5rIiwicHJvcHMiLCJhY3RpdmUiLCJjaGlsZHJlbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIkZpbHRlckxpbmsiLCJjcmVhdGVDbGFzcyIsImNvbXBvbmVudERpZE1vdW50Iiwic3RvcmUiLCJjb250ZXh0IiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJmb3JjZVVwZGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVuZGVyIiwiZ2V0U3RhdGUiLCJkaXNwYXRjaCIsIm5leHRUb2RvSWQiLCJBZGRUb2RvIiwiaW5wdXQiLCJkb21FbGVtZW50IiwidmFsdWUiLCJWaXNpYmxlVG9kb0xpc3QiLCJGb290ZXIiLCJUb2RvQXBwIiwiUHJvdmlkZXIiLCJyb290RE9NRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxTQUFSLENBQWQ7QUFBQSxJQUNNQyxRQUFRRCxRQUFRLFVBQVIsQ0FEZDtBQUFBLElBRU1FLFdBQVdGLFFBQVEsYUFBUixDQUZqQjs7SUFJUUcsUyxH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QXpELFdBQVMyQyxNQUFULENBQ0U7QUFBQyxZQUFEO0FBQUEsTUFBVSxPQUFPeEMsWUFBWWtCLE9BQVosQ0FBakI7QUFDRSx3QkFBQyxPQUFEO0FBREYsR0FERixFQUlFa0MsY0FKRjtBQU1ELENBblJEOztBQXFSQUcsT0FBT0MsT0FBUCxHQUFpQnRELFFBQWpCIiwiZmlsZSI6InJlZHV4QXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZWR1eCA9IHJlcXVpcmUoJy4vcmVkdXgnKSxcbiAgICAgIFJlYWN0ID0gcmVxdWlyZSgnLi4vcmVhY3QnKSxcbiAgICAgIFJlYWN0RE9NID0gcmVxdWlyZSgnLi4vcmVhY3RET00nKTtcblxuY29uc3QgeyBDb21wb25lbnQsIENsYXNzIH0gPSBSZWFjdCxcbiAgICAgIHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9ID0gUmVkdXg7XG5cbmNvbnN0IHJlZHV4QXBwID0gKCkgPT4ge1xuICBjb25zdCB0b2RvID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdBRERfVE9ETyc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IGFjdGlvbi5pZCxcbiAgICAgICAgICB0ZXh0OiBhY3Rpb24udGV4dCxcbiAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgIGNhc2UgJ1RPR0dMRV9UT0RPJzpcbiAgICAgICAgaWYgKHN0YXRlLmlkICE9PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBjb21wbGV0ZWQ6ICFzdGF0ZS5jb21wbGV0ZWRcbiAgICAgICAgfSk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdG9kb3MgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSAnQUREX1RPRE8nOlxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIHRvZG8odW5kZWZpbmVkLCBhY3Rpb24pXG4gICAgICAgIF07XG5cbiAgICAgIGNhc2UgJ1RPR0dMRV9UT0RPJzpcbiAgICAgICAgcmV0dXJuIHN0YXRlLm1hcCh0ID0+IHRvZG8odCwgYWN0aW9uKSk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdmlzaWJpbGl0eUZpbHRlciA9ICggc3RhdGUgPSAnU0hPV19BTEwnLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdTRVRfVklTSUJJTElUWV9GSUxURVInOlxuICAgICAgICByZXR1cm4gYWN0aW9uLmZpbHRlcjtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB0b2RvQXBwID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICB0b2RvczogdG9kb3MsXG4gICAgdmlzaWJpbGl0eUZpbHRlcjogdmlzaWJpbGl0eUZpbHRlclxuICB9KTtcblxuICBjb25zdCBnZXRWaXNpYmxlVG9kb3MgPSAodG9kb3MsIGZpbHRlcikgPT4ge1xuICAgIHN3aXRjaCAoZmlsdGVyKSB7XG4gICAgICBjYXNlICdTSE9XX0FMTCc6XG4gICAgICAgIHJldHVybiB0b2RvcztcblxuICAgICAgY2FzZSAnU0hPV19DT01QTEVURUQnOlxuICAgICAgICByZXR1cm4gdG9kb3MuZmlsdGVyKFxuICAgICAgICAgICAgdCA9PiB0LmNvbXBsZXRlZFxuICAgICAgICApO1xuXG4gICAgICBjYXNlICdTSE9XX0FDVElWRSc6XG4gICAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIoXG4gICAgICAgICAgICB0ID0+ICF0LmNvbXBsZXRlZFxuICAgICAgICApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBUb2RvID0gKHtvbkNsaWNrLCBjb21wbGV0ZWQsIHRleHR9KSA9PiB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGxpIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjpjb21wbGV0ZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsaW5lLXRocm91Z2gnIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdub25lJ319XG4gICAgICA+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9saT5cblxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgVG9kb0xpc3QgPSAoe3RvZG9zLCBvblRvZG9DbGlja30pID0+ICB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPHVsPlxuICAgICAgICB7dG9kb3MubWFwKHRvZG8gPT4gPFRvZG8gdGV4dD17dG9kby50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkPXt0b2RvLmNvbXBsZXRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG9kb0NsaWNrKHRvZG8uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAvPil9XG4gICAgICA8L3VsPlxuXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBMaW5rID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBhY3RpdmUsIG9uQ2xpY2sgfSA9IHByb3BzO1xuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgcmV0dXJuIDxzcGFuPntwcm9wcy5jaGlsZHJlbn08L3NwYW4+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxhIGhyZWY9JyMnXG4gICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICBvbkNsaWNrKCk7XG4gICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2E+XG5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IEZpbHRlckxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT5cbiAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfSxcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcbiAgICAgIGNvbnN0IHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcblxuICAgICAgcmV0dXJuIChcblxuICAgICAgICA8TGluayBhY3RpdmU9e1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZmlsdGVyID09PSBzdGF0ZS52aXNpYmlsaXR5RmlsdGVyXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnU0VUX1ZJU0lCSUxJVFlfRklMVEVSJyxcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogdGhpcy5wcm9wcy5maWx0ZXJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG5cbiAgbGV0IG5leHRUb2RvSWQgPSAwO1xuICBjb25zdCBBZGRUb2RvID0gKHByb3BzLCB7c3RvcmV9KSA9PiB7XG4gICAgbGV0IGlucHV0O1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHJlZj17ZG9tRWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBkb21FbGVtZW50O1xuICAgICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdBRERfVE9ETycsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBpZDogbmV4dFRvZG9JZCsrXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEFkZCB0b2RvXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9O1xuXG4gIGNsYXNzIFZpc2libGVUb2RvTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT5cbiAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxUb2RvTGlzdCB0b2Rvcz17XG4gICAgICAgICAgICAgICAgICBnZXRWaXNpYmxlVG9kb3MoXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnRvZG9zLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS52aXNpYmlsaXR5RmlsdGVyXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgb25Ub2RvQ2xpY2s9e2lkID0+XG4gICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdUT0dHTEVfVE9ETycsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIC8+XG5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxwPlxuICAgICAgICB7J1Nob3c6ICd9XG4gICAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19BTEwnPlxuICAgICAgICAgIEFsbFxuICAgICAgICA8L0ZpbHRlckxpbms+XG4gICAgICAgIHsnIC0gJ31cbiAgICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPSdTSE9XX0NPTVBMRVRFRCc+XG4gICAgICAgICAgQ29tcGxldGVkXG4gICAgICAgIDwvRmlsdGVyTGluaz5cbiAgICAgICAgeycgLSAnfVxuICAgICAgICA8RmlsdGVyTGluayBmaWx0ZXI9J1NIT1dfQUNUSVZFJz5cbiAgICAgICAgICBBY3RpdmVcbiAgICAgICAgPC9GaWx0ZXJMaW5rPlxuICAgICAgPC9wPlxuXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBUb2RvQXBwID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxBZGRUb2RvIC8+XG4gICAgICAgIDxWaXNpYmxlVG9kb0xpc3QgLz5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9O1xuXG4gIGNsYXNzIFByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RvcmU6IHRoaXMucHJvcHMuc3RvcmVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICA8UHJvdmlkZXIgc3RvcmU9e2NyZWF0ZVN0b3JlKHRvZG9BcHApfT5cbiAgICAgIDxUb2RvQXBwIC8+XG4gICAgPC9Qcm92aWRlcj4sXG4gICAgcm9vdERPTUVsZW1lbnRcbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdXhBcHA7XG4iXX0=