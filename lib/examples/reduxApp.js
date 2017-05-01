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
    var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
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
    var state = arguments.length <= 0 || arguments[0] === undefined ? 'SHOW_ALL' : arguments[0];
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

      return _possibleConstructorReturn(this, Object.getPrototypeOf(VisibleTodoList).apply(this, arguments));
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

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Provider).apply(this, arguments));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9yZWR1eEFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxRQUFRLFFBQVEsU0FBUixDQUFSO0lBQ0EsUUFBUSxRQUFRLFVBQVIsQ0FBUjtJQUNBLFdBQVcsUUFBUSxhQUFSLENBQVg7O0lBRUUsWUFBcUIsTUFBckI7QUFBRixJQUFhLFFBQVUsTUFBVixLQUFiO0lBQ0UsY0FBaUMsTUFBakM7SUFBYSxrQkFBb0IsTUFBcEI7OztBQUVyQixJQUFNLFdBQVcsU0FBWCxRQUFXLEdBQU07QUFDckIsTUFBTSxPQUFPLFNBQVAsSUFBTyxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQW1CO0FBQzlCLFlBQVEsT0FBTyxJQUFQO0FBQ04sV0FBSyxVQUFMO0FBQ0UsZUFBTztBQUNMLGNBQUksT0FBTyxFQUFQO0FBQ0osZ0JBQU0sT0FBTyxJQUFQO0FBQ04scUJBQVcsS0FBWDtTQUhGLENBREY7O0FBREYsV0FRTyxhQUFMO0FBQ0UsWUFBSSxNQUFNLEVBQU4sS0FBYSxPQUFPLEVBQVAsRUFBVztBQUMxQixpQkFBTyxLQUFQLENBRDBCO1NBQTVCOztBQUlBLGVBQU8sT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFsQixFQUF5QjtBQUM5QixxQkFBVyxDQUFDLE1BQU0sU0FBTjtTQURQLENBQVAsQ0FMRjs7QUFSRjtBQWtCSSxlQUFPLEtBQVAsQ0FERjtBQWpCRixLQUQ4QjtHQUFuQixDQURROztBQXdCckIsTUFBTSxRQUFRLFNBQVIsS0FBUSxHQUF3QjtRQUF2Qiw4REFBUSxrQkFBZTtRQUFYLHNCQUFXOztBQUNwQyxZQUFRLE9BQU8sSUFBUDtBQUNOLFdBQUssVUFBTDtBQUNFLDRDQUNLLFNBQ0gsS0FBSyxTQUFMLEVBQWdCLE1BQWhCLEdBRkYsQ0FERjs7QUFERixXQU9PLGFBQUw7QUFDRSxlQUFPLE1BQU0sR0FBTixDQUFVO2lCQUFLLEtBQUssQ0FBTCxFQUFRLE1BQVI7U0FBTCxD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O09BTkY7TUFTRyxLQVRIO01BVUU7QUFBQyxrQkFBRDtVQUFZLFFBQU8sYUFBUCxFQUFaOztPQVZGO0tBRkYsQ0FEbUI7R0FBTixDQTlOTTs7QUFtUHJCLE1BQU0sVUFBVSxTQUFWLE9BQVUsR0FBTTtBQUNwQixXQUVFOzs7TUFDRSxvQkFBQyxPQUFELE9BREY7TUFFRSxvQkFBQyxlQUFELE9BRkY7TUFHRSxvQkFBQyxNQUFELE9BSEY7S0FGRixDQURvQjtHQUFOLENBblBLOztNQStQZjs7Ozs7Ozs7Ozs7c0NBQ1ksU0FBUztBQUN2QixlQUFPO0FBQ0wsaUJBQU8sS0FBSyxLQUFMLENBQVcsS0FBWDtTQURULENBRHVCOzs7OytCQU1oQjtBQUNQLGVBQU8sS0FBSyxLQUFMLENBQVcsUUFBWCxDQURBOzs7O1dBUEw7SUFBaUIsV0EvUEY7O0FBMlFyQixNQUFNLGlCQUFpQixTQUFTLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBakIsQ0EzUWU7O0FBNlFyQixXQUFTLE1BQVQsQ0FDRTtBQUFDLFlBQUQ7TUFBVSxPQUFPLFlBQVksT0FBWixDQUFQLEVBQVY7SUFDRSxvQkFBQyxPQUFELE9BREY7R0FERixFQUlFLGNBSkYsRUE3UXFCO0NBQU47O0FBcVJqQixPQUFPLE9BQVAsR0FBaUIsUUFBakIiLCJmaWxlIjoicmVkdXhBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlZHV4ID0gcmVxdWlyZSgnLi9yZWR1eCcpLFxuICAgICAgUmVhY3QgPSByZXF1aXJlKCcuLi9yZWFjdCcpLFxuICAgICAgUmVhY3RET00gPSByZXF1aXJlKCcuLi9yZWFjdERPTScpO1xuXG5jb25zdCB7IENvbXBvbmVudCwgQ2xhc3MgfSA9IFJlYWN0LFxuICAgICAgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH0gPSBSZWR1eDtcblxuY29uc3QgcmVkdXhBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IHRvZG8gPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ0FERF9UT0RPJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDogYWN0aW9uLmlkLFxuICAgICAgICAgIHRleHQ6IGFjdGlvbi50ZXh0LFxuICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgY2FzZSAnVE9HR0xFX1RPRE8nOlxuICAgICAgICBpZiAoc3RhdGUuaWQgIT09IGFjdGlvbi5pZCkge1xuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGNvbXBsZXRlZDogIXN0YXRlLmNvbXBsZXRlZFxuICAgICAgICB9KTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB0b2RvcyA9IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdBRERfVE9ETyc6XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgdG9kbyh1bmRlZmluZWQsIGFjdGlvbilcbiAgICAgICAgXTtcblxuICAgICAgY2FzZSAnVE9HR0xFX1RPRE8nOlxuICAgICAgICByZXR1cm4gc3RhdGUubWFwKHQgPT4gdG9kbyh0LCBhY3Rpb24pKTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB2aXNpYmlsaXR5RmlsdGVyID0gKCBzdGF0ZSA9ICdTSE9XX0FMTCcsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ1NFVF9WSVNJQklMSVRZX0ZJTFRFUic6XG4gICAgICAgIHJldHVybiBhY3Rpb24uZmlsdGVyO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHRvZG9BcHAgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIHRvZG9zOiB0b2RvcyxcbiAgICB2aXNpYmlsaXR5RmlsdGVyOiB2aXNpYmlsaXR5RmlsdGVyXG4gIH0pO1xuXG4gIGNvbnN0IGdldFZpc2libGVUb2RvcyA9ICh0b2RvcywgZmlsdGVyKSA9PiB7XG4gICAgc3dpdGNoIChmaWx0ZXIpIHtcbiAgICAgIGNhc2UgJ1NIT1dfQUxMJzpcbiAgICAgICAgcmV0dXJuIHRvZG9zO1xuXG4gICAgICBjYXNlICdTSE9XX0NPTVBMRVRFRCc6XG4gICAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIoXG4gICAgICAgICAgICB0ID0+IHQuY29tcGxldGVkXG4gICAgICAgICk7XG5cbiAgICAgIGNhc2UgJ1NIT1dfQUNUSVZFJzpcbiAgICAgICAgcmV0dXJuIHRvZG9zLmZpbHRlcihcbiAgICAgICAgICAgIHQgPT4gIXQuY29tcGxldGVkXG4gICAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFRvZG8gPSAoe29uQ2xpY2ssIGNvbXBsZXRlZCwgdGV4dH0pID0+IHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8bGkgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICBzdHlsZT17e3RleHREZWNvcmF0aW9uOmNvbXBsZXRlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xpbmUtdGhyb3VnaCcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25vbmUnfX1cbiAgICAgID5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2xpPlxuXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBUb2RvTGlzdCA9ICh7dG9kb3MsIG9uVG9kb0NsaWNrfSkgPT4gIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8dWw+XG4gICAgICAgIHt0b2Rvcy5tYXAodG9kbyA9PiA8VG9kbyB0ZXh0PXt0b2RvLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQ9e3RvZG8uY29tcGxldGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub2RvQ2xpY2sodG9kby5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KX1cbiAgICAgIDwvdWw+XG5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IExpbmsgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGFjdGl2ZSwgb25DbGljayB9ID0gcHJvcHM7XG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICByZXR1cm4gPHNwYW4+e3Byb3BzLmNoaWxkcmVufTwvc3Bhbj47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGEgaHJlZj0nIydcbiAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgIG9uQ2xpY2soKTtcbiAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvYT5cblxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgRmlsdGVyTGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PlxuICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgICApO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxMaW5rIGFjdGl2ZT17XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5maWx0ZXIgPT09IHN0YXRlLnZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdTRVRfVklTSUJJTElUWV9GSUxURVInLFxuICAgICAgICAgICAgICAgICAgZmlsdGVyOiB0aGlzLnByb3BzLmZpbHRlclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICk7XG4gICAgfVxuICB9KTtcblxuICBsZXQgbmV4dFRvZG9JZCA9IDA7XG4gIGNvbnN0IEFkZFRvZG8gPSAocHJvcHMsIHtzdG9yZX0pID0+IHtcbiAgICBsZXQgaW5wdXQ7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgcmVmPXtkb21FbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpbnB1dCA9IGRvbUVsZW1lbnQ7XG4gICAgICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0FERF9UT0RPJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogaW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBuZXh0VG9kb0lkKytcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgQWRkIHRvZG9cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH07XG5cbiAgY2xhc3MgVmlzaWJsZVRvZG9MaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PlxuICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICBjb25zdCBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG5cbiAgICAgIHJldHVybiAoXG5cbiAgICAgICAgPFRvZG9MaXN0IHRvZG9zPXtcbiAgICAgICAgICAgICAgICAgIGdldFZpc2libGVUb2RvcyhcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUudG9kb3MsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBvblRvZG9DbGljaz17aWQgPT5cbiAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1RPR0dMRV9UT0RPJyxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgLz5cblxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPHA+XG4gICAgICAgIHsnU2hvdzogJ31cbiAgICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPSdTSE9XX0FMTCc+XG4gICAgICAgICAgQWxsXG4gICAgICAgIDwvRmlsdGVyTGluaz5cbiAgICAgICAgeycgLSAnfVxuICAgICAgICA8RmlsdGVyTGluayBmaWx0ZXI9J1NIT1dfQ09NUExFVEVEJz5cbiAgICAgICAgICBDb21wbGV0ZWRcbiAgICAgICAgPC9GaWx0ZXJMaW5rPlxuICAgICAgICB7JyAtICd9XG4gICAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19BQ1RJVkUnPlxuICAgICAgICAgIEFjdGl2ZVxuICAgICAgICA8L0ZpbHRlckxpbms+XG4gICAgICA8L3A+XG5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IFRvZG9BcHAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdj5cbiAgICAgICAgPEFkZFRvZG8gLz5cbiAgICAgICAgPFZpc2libGVUb2RvTGlzdCAvPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH07XG5cbiAgY2xhc3MgUHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdG9yZTogdGhpcy5wcm9wcy5zdG9yZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB9XG4gIH1cblxuICBjb25zdCByb290RE9NRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5cbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxQcm92aWRlciBzdG9yZT17Y3JlYXRlU3RvcmUodG9kb0FwcCl9PlxuICAgICAgPFRvZG9BcHAgLz5cbiAgICA8L1Byb3ZpZGVyPixcbiAgICByb290RE9NRWxlbWVudFxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSByZWR1eEFwcDtcbiJdfQ==