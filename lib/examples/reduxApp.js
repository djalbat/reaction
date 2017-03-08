'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Redux = require('./redux');
var React = require('../react');
var ReactDOM = require('../reactDOM');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9yZWR1eEFwcC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiQ29tcG9uZW50IiwiUmVhY3QiLCJDbGFzcyIsImNyZWF0ZVN0b3JlIiwiUmVkdXgiLCJjb21iaW5lUmVkdWNlcnMiLCJyZWR1eEFwcCIsInRvZG8iLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJpZCIsInRleHQiLCJjb21wbGV0ZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJ0b2RvcyIsInVuZGVmaW5lZCIsIm1hcCIsInQiLCJ2aXNpYmlsaXR5RmlsdGVyIiwiZmlsdGVyIiwidG9kb0FwcCIsImdldFZpc2libGVUb2RvcyIsIlRvZG8iLCJvbkNsaWNrIiwidGV4dERlY29yYXRpb24iLCJUb2RvTGlzdCIsIm9uVG9kb0NsaWNrIiwiTGluayIsInByb3BzIiwiYWN0aXZlIiwiY2hpbGRyZW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJGaWx0ZXJMaW5rIiwiY3JlYXRlQ2xhc3MiLCJjb21wb25lbnREaWRNb3VudCIsInN0b3JlIiwiY29udGV4dCIsInVuc3Vic2NyaWJlIiwic3Vic2NyaWJlIiwiZm9yY2VVcGRhdGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsImdldFN0YXRlIiwiZGlzcGF0Y2giLCJuZXh0VG9kb0lkIiwiQWRkVG9kbyIsImlucHV0IiwiZG9tRWxlbWVudCIsInZhbHVlIiwiVmlzaWJsZVRvZG9MaXN0IiwiRm9vdGVyIiwiVG9kb0FwcCIsIlByb3ZpZGVyIiwicm9vdERPTUVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUmVhY3RET00iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRU0sWUFBUUEsUUFBUSxTQUFSLENBQVI7QUFDQSxZQUFRQSxRQUFRLFVBQVIsQ0FBUjtBQUNBLGVBQVdBLFFBQVEsYUFBUixDQUFYO0lBQ0VDLFMsR0FBcUJDLEssQ0FBckJELFM7QUFB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QUFDLFlBQUQ7QUFBQSxNQUFVLE9BQU96QyxZQUFZbUIsT0FBWixDQUFqQjtBQUNFLHdCQUFDLE9BQUQ7QUFERixHQURGLEVBSUVrQyxjQUpGO0FBTUQsQ0FuUkQ7O0FBcVJBSSxPQUFPQyxPQUFQLEdBQWlCdkQsUUFBakIiLCJmaWxlIjoicmVkdXhBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlZHV4ID0gcmVxdWlyZSgnLi9yZWR1eCcpLFxuICAgICAgUmVhY3QgPSByZXF1aXJlKCcuLi9yZWFjdCcpLFxuICAgICAgUmVhY3RET00gPSByZXF1aXJlKCcuLi9yZWFjdERPTScpLFxuICAgICAgeyBDb21wb25lbnQsIENsYXNzIH0gPSBSZWFjdCxcbiAgICAgIHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9ID0gUmVkdXg7XG5cbmNvbnN0IHJlZHV4QXBwID0gKCkgPT4ge1xuICBjb25zdCB0b2RvID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdBRERfVE9ETyc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IGFjdGlvbi5pZCxcbiAgICAgICAgICB0ZXh0OiBhY3Rpb24udGV4dCxcbiAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgIGNhc2UgJ1RPR0dMRV9UT0RPJzpcbiAgICAgICAgaWYgKHN0YXRlLmlkICE9PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBjb21wbGV0ZWQ6ICFzdGF0ZS5jb21wbGV0ZWRcbiAgICAgICAgfSk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdG9kb3MgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSAnQUREX1RPRE8nOlxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIHRvZG8odW5kZWZpbmVkLCBhY3Rpb24pXG4gICAgICAgIF07XG5cbiAgICAgIGNhc2UgJ1RPR0dMRV9UT0RPJzpcbiAgICAgICAgcmV0dXJuIHN0YXRlLm1hcCh0ID0+IHRvZG8odCwgYWN0aW9uKSk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdmlzaWJpbGl0eUZpbHRlciA9ICggc3RhdGUgPSAnU0hPV19BTEwnLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdTRVRfVklTSUJJTElUWV9GSUxURVInOlxuICAgICAgICByZXR1cm4gYWN0aW9uLmZpbHRlcjtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB0b2RvQXBwID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICB0b2RvczogdG9kb3MsXG4gICAgdmlzaWJpbGl0eUZpbHRlcjogdmlzaWJpbGl0eUZpbHRlclxuICB9KTtcblxuICBjb25zdCBnZXRWaXNpYmxlVG9kb3MgPSAodG9kb3MsIGZpbHRlcikgPT4ge1xuICAgIHN3aXRjaCAoZmlsdGVyKSB7XG4gICAgICBjYXNlICdTSE9XX0FMTCc6XG4gICAgICAgIHJldHVybiB0b2RvcztcblxuICAgICAgY2FzZSAnU0hPV19DT01QTEVURUQnOlxuICAgICAgICByZXR1cm4gdG9kb3MuZmlsdGVyKFxuICAgICAgICAgICAgdCA9PiB0LmNvbXBsZXRlZFxuICAgICAgICApO1xuXG4gICAgICBjYXNlICdTSE9XX0FDVElWRSc6XG4gICAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIoXG4gICAgICAgICAgICB0ID0+ICF0LmNvbXBsZXRlZFxuICAgICAgICApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBUb2RvID0gKHtvbkNsaWNrLCBjb21wbGV0ZWQsIHRleHR9KSA9PiB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGxpIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjpjb21wbGV0ZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsaW5lLXRocm91Z2gnIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdub25lJ319XG4gICAgICA+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9saT5cblxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgVG9kb0xpc3QgPSAoe3RvZG9zLCBvblRvZG9DbGlja30pID0+ICB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPHVsPlxuICAgICAgICB7dG9kb3MubWFwKHRvZG8gPT4gPFRvZG8gdGV4dD17dG9kby50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkPXt0b2RvLmNvbXBsZXRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG9kb0NsaWNrKHRvZG8uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAvPil9XG4gICAgICA8L3VsPlxuXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBMaW5rID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBhY3RpdmUsIG9uQ2xpY2sgfSA9IHByb3BzO1xuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgcmV0dXJuIDxzcGFuPntwcm9wcy5jaGlsZHJlbn08L3NwYW4+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxhIGhyZWY9JyMnXG4gICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICBvbkNsaWNrKCk7XG4gICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2E+XG5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IEZpbHRlckxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT5cbiAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfSxcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcbiAgICAgIGNvbnN0IHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcblxuICAgICAgcmV0dXJuIChcblxuICAgICAgICA8TGluayBhY3RpdmU9e1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZmlsdGVyID09PSBzdGF0ZS52aXNpYmlsaXR5RmlsdGVyXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnU0VUX1ZJU0lCSUxJVFlfRklMVEVSJyxcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogdGhpcy5wcm9wcy5maWx0ZXJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG5cbiAgbGV0IG5leHRUb2RvSWQgPSAwO1xuICBjb25zdCBBZGRUb2RvID0gKHByb3BzLCB7c3RvcmV9KSA9PiB7XG4gICAgbGV0IGlucHV0O1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHJlZj17ZG9tRWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBkb21FbGVtZW50O1xuICAgICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdBRERfVE9ETycsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBpZDogbmV4dFRvZG9JZCsrXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEFkZCB0b2RvXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9O1xuXG4gIGNsYXNzIFZpc2libGVUb2RvTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT5cbiAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxUb2RvTGlzdCB0b2Rvcz17XG4gICAgICAgICAgICAgICAgICBnZXRWaXNpYmxlVG9kb3MoXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnRvZG9zLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS52aXNpYmlsaXR5RmlsdGVyXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgb25Ub2RvQ2xpY2s9e2lkID0+XG4gICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdUT0dHTEVfVE9ETycsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIC8+XG5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxwPlxuICAgICAgICB7J1Nob3c6ICd9XG4gICAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19BTEwnPlxuICAgICAgICAgIEFsbFxuICAgICAgICA8L0ZpbHRlckxpbms+XG4gICAgICAgIHsnIC0gJ31cbiAgICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPSdTSE9XX0NPTVBMRVRFRCc+XG4gICAgICAgICAgQ29tcGxldGVkXG4gICAgICAgIDwvRmlsdGVyTGluaz5cbiAgICAgICAgeycgLSAnfVxuICAgICAgICA8RmlsdGVyTGluayBmaWx0ZXI9J1NIT1dfQUNUSVZFJz5cbiAgICAgICAgICBBY3RpdmVcbiAgICAgICAgPC9GaWx0ZXJMaW5rPlxuICAgICAgPC9wPlxuXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBUb2RvQXBwID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxBZGRUb2RvIC8+XG4gICAgICAgIDxWaXNpYmxlVG9kb0xpc3QgLz5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9O1xuXG4gIGNsYXNzIFByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RvcmU6IHRoaXMucHJvcHMuc3RvcmVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICA8UHJvdmlkZXIgc3RvcmU9e2NyZWF0ZVN0b3JlKHRvZG9BcHApfT5cbiAgICAgIDxUb2RvQXBwIC8+XG4gICAgPC9Qcm92aWRlcj4sXG4gICAgcm9vdERPTUVsZW1lbnRcbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdXhBcHA7XG4iXX0=