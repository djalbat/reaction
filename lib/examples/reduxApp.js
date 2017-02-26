'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Redux = require('redux');

var React = require('../react'),
    ReactDOM = require('../reactDOM'),
    Component = React.Component,
    createStore = Redux.createStore,
    combineReducers = Redux.combineReducers;


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
    var onClick = _ref.onClick,
        completed = _ref.completed,
        text = _ref.text;

    return React.createElement(
      'li',
      { onClick: onClick,
        style: { textDecoration: completed ? 'line-through' : 'none' }
      },
      text
    );
  };

  var TodoList = function TodoList(_ref2) {
    var todos = _ref2.todos,
        onTodoClick = _ref2.onTodoClick;

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
    var active = props.active,
        _onClick = props.onClick;


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

  var FilterLink = function (_Component) {
    _inherits(FilterLink, _Component);

    function FilterLink() {
      _classCallCheck(this, FilterLink);

      return _possibleConstructorReturn(this, (FilterLink.__proto__ || Object.getPrototypeOf(FilterLink)).apply(this, arguments));
    }

    _createClass(FilterLink, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        var store = this.context.store;


        this.unsubscribe = store.subscribe(function () {
          return _this2.forceUpdate();
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
        var _this3 = this;

        var store = this.context.store;

        var state = store.getState();

        return React.createElement(
          Link,
          { active: this.props.filter === state.visibilityFilter,
            onClick: function onClick() {
              return store.dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter: _this3.props.filter
              });
            }
          },
          this.props.children
        );
      }
    }]);

    return FilterLink;
  }(Component);

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

  var VisibleTodoList = function (_Component2) {
    _inherits(VisibleTodoList, _Component2);

    function VisibleTodoList() {
      _classCallCheck(this, VisibleTodoList);

      return _possibleConstructorReturn(this, (VisibleTodoList.__proto__ || Object.getPrototypeOf(VisibleTodoList)).apply(this, arguments));
    }

    _createClass(VisibleTodoList, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this5 = this;

        var store = this.context.store;


        this.unsubscribe = store.subscribe(function () {
          return _this5.forceUpdate();
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

  var Provider = function (_Component3) {
    _inherits(Provider, _Component3);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9yZWR1eEFwcC5qcyJdLCJuYW1lcyI6WyJSZWR1eCIsInJlcXVpcmUiLCJSZWFjdERPTSIsIkNvbXBvbmVudCIsIlJlYWN0IiwiY3JlYXRlU3RvcmUiLCJjb21iaW5lUmVkdWNlcnMiLCJyZWR1eEFwcCIsInRvZG8iLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJpZCIsInRleHQiLCJjb21wbGV0ZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJ0b2RvcyIsInVuZGVmaW5lZCIsIm1hcCIsInQiLCJ2aXNpYmlsaXR5RmlsdGVyIiwiZmlsdGVyIiwidG9kb0FwcCIsImdldFZpc2libGVUb2RvcyIsIlRvZG8iLCJvbkNsaWNrIiwidGV4dERlY29yYXRpb24iLCJUb2RvTGlzdCIsIm9uVG9kb0NsaWNrIiwiTGluayIsInByb3BzIiwiYWN0aXZlIiwiY2hpbGRyZW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJGaWx0ZXJMaW5rIiwic3RvcmUiLCJjb250ZXh0IiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJmb3JjZVVwZGF0ZSIsImdldFN0YXRlIiwiZGlzcGF0Y2giLCJuZXh0VG9kb0lkIiwiQWRkVG9kbyIsImlucHV0IiwiZG9tRWxlbWVudCIsInZhbHVlIiwiVmlzaWJsZVRvZG9MaXN0IiwiRm9vdGVyIiwiVG9kb0FwcCIsIlByb3ZpZGVyIiwicm9vdERPTUVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsT0FBUixDQUFkOztBQUVNLFlBQVFBLFFBQVEsVUFBUixDQUFSO0FBQUEsSUFDQUMsUUFEQSxHQUNXRCxRQUFRLGFBQVIsQ0FEWDtBQUFBLElBRUVFLFNBRkYsR0FFZ0JDLEtBRmhCLENBRUVELFNBRkY7QUFBQSxJQUdFRSxXQUhGLEdBR21DTCxLQUhuQyxDQUdFSyxXQUhGO0FBQUEsSUFHZUMsZUFIZixHQUdtQ04sS0FIbkMsQ0FHZU0sZUFIZjs7O0FBS04sSUFBTUMsV0FBVyxTQUFYQSxRQUFXLEdBQU07QUFDckIsTUFBTUMsT0FBTyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUM5QixZQUFRQSxPQUFPQyxJQUFmO0FBQ0UsV0FBSyxVQUFMO0FBQ0UsZUFBTztBQUNMQyxjQUFJRixPQUFPRSxFQUROO0FBRUxDLGdCQUFNSCxPQUFPRyxJQUZSO0FBR0xDLHFCQUFXO0FBSE4sU0FBUDs7QUFNRixXQUFLLGFBQUw7QUFDRSxZQUFJTCxNQUFNRyxFQUFOLEtBQWFGLE9BQU9FLEVBQXhCLEVBQTRCO0FBQzFCLGlCQUFPSCxLQUFQO0FBQ0Q7O0FBRUQsZUFBT00sT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JQLEtBQWxCLEVBQXlCO0FBQzlCSyxxQkFBVyxDQUFDTCxNQUFNSztBQURZLFNBQXpCLENBQVA7O0FBSUY7QUFDRSxlQUFPTCxLQUFQO0FBbEJKO0FBb0JELEdBckJEOztBQXVCQSxNQUFNUSxRQUFRLFNBQVJBLEtBQVEsR0FBd0I7QUFBQSxRQUF2QlIsS0FBdUIsdUVBQWYsRUFBZTtBQUFBLFFBQVhDLE1BQVc7O0FBQ3BDLFlBQVFBLE9BQU9DLElBQWY7QUFDRSxXQUFLLFVBQUw7QUFDRSw0Q0FDS0YsS0FETCxJQUVFRCxLQUFLVSxTQUFMLEVBQWdCUixNQUFoQixDQUZGOztBQUtGLFdBQUssYUFBTDtBQUNFLGVBQU9ELE1BQU1VLEdBQU4sQ0FBVTtBQUFBLGlCQUFLWCxLQUFLWSxDQUFMLEVBQVFWLE1BQVIsQ0FBTDtBQUFBLFNBQVYsQ0FBUDs7QUFFRjtBQUNFLGVBQU9ELEtBQVA7QUFYSjtBQWFELEdBZEQ7O0FBZ0JBLE1BQU1ZLG1CQUFtQixTQUFuQkEsZ0JBQW1CLEdBQWlDO0FBQUEsUUFBL0JaLEtBQStCLHVFQUF2QixVQUF1QjtBQUFBLFFBQVhDLE1BQVc7O0FBQ3hELFlBQVFBLE9BQU9DLElBQWY7QUFDRSxXQUFLLHVCQUFMO0FBQ0UsZUFBT0QsT0FBT1ksTUFBZDs7QUFFRjtBQUNFLGVBQU9iLEtBQVA7QUFMSjtBQU9ELEdBUkQ7O0FBVUEsTUFBTWMsVUFBVWpCLGdCQUFnQjtBQUM5QlcsV0FBT0EsS0FEdUI7QUFFOUJJLHNCQUFrQkE7QUFGWSxHQUFoQixDQUFoQjs7QUFLQSxNQUFNRyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNQLEtBQUQsRUFBUUssTUFBUixFQUFtQjtBQUN6QyxZQUFRQSxNQUFSO0FBQ0UsV0FBSyxVQUFMO0FBQ0UsZUFBT0wsS0FBUDs7QUFFRixXQUFLLGdCQUFMO0FBQ0UsZUFBT0EsTUFBTUssTUFBTixDQUNIO0FBQUEsaUJBQUtGLEVBQUVOLFNBQVA7QUFBQSxTQURHLENBQVA7O0FBSUYsV0FBSyxhQUFMO0FBQ0UsZUFBT0csTUFBTUssTUFBTixDQUNIO0FBQUEsaUJBQUssQ0FBQ0YsRUFBRU4sU0FBUjtBQUFBLFNBREcsQ0FBUDtBQVZKO0FBY0QsR0FmRDs7QUFpQkEsTUFBTVcsT0FBTyxTQUFQQSxJQUFPLE9BQWdDO0FBQUEsUUFBOUJDLE9BQThCLFFBQTlCQSxPQUE4QjtBQUFBLFFBQXJCWixTQUFxQixRQUFyQkEsU0FBcUI7QUFBQSxRQUFWRCxJQUFVLFFBQVZBLElBQVU7O0FBQzNDLFdBRUU7QUFBQTtBQUFBLFFBQUksU0FBU2EsT0FBYjtBQUNJLGVBQU8sRUFBQ0MsZ0JBQ0ZiLFlBQ0UsY0FERixHQUVJLE1BSEg7QUFEWDtBQU1HRDtBQU5ILEtBRkY7QUFXRCxHQVpEOztBQWNBLE1BQU1lLFdBQVcsU0FBWEEsUUFBVyxRQUEyQjtBQUFBLFFBQXpCWCxLQUF5QixTQUF6QkEsS0FBeUI7QUFBQSxRQUFsQlksV0FBa0IsU0FBbEJBLFdBQWtCOztBQUMxQyxXQUVFO0FBQUE7QUFBQTtBQUNHWixZQUFNRSxHQUFOLENBQVU7QUFBQSxlQUFRLG9CQUFDLElBQUQsSUFBTSxNQUFNWCxLQUFLSyxJQUFqQjtBQUNNLHFCQUFXTCxLQUFLTSxTQUR0QjtBQUVNLG1CQUFTO0FBQUEsbUJBQ2JlLFlBQVlyQixLQUFLSSxFQUFqQixDQURhO0FBQUE7QUFGZixVQUFSO0FBQUEsT0FBVjtBQURILEtBRkY7QUFXRCxHQVpEOztBQWNBLE1BQU1rQixPQUFPLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsUUFDZEMsTUFEYyxHQUNNRCxLQUROLENBQ2RDLE1BRGM7QUFBQSxRQUNOTixRQURNLEdBQ01LLEtBRE4sQ0FDTkwsT0FETTs7O0FBR3RCLFFBQUlNLE1BQUosRUFBWTtBQUNWLGFBQU87QUFBQTtBQUFBO0FBQU9ELGNBQU1FO0FBQWIsT0FBUDtBQUNEOztBQUVELFdBRUU7QUFBQTtBQUFBLFFBQUcsTUFBSyxHQUFSO0FBQ0csaUJBQVMsb0JBQUs7QUFDWkMsWUFBRUMsY0FBRjtBQUNBVDtBQUNEO0FBSko7QUFNR0ssWUFBTUU7QUFOVCxLQUZGO0FBV0QsR0FsQkQ7O0FBcEdxQixNQXdIZkcsVUF4SGU7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDBDQXlIQztBQUFBOztBQUFBLFlBQ1ZDLEtBRFUsR0FDQSxLQUFLQyxPQURMLENBQ1ZELEtBRFU7OztBQUdsQixhQUFLRSxXQUFMLEdBQW1CRixNQUFNRyxTQUFOLENBQWdCO0FBQUEsaUJBQ2hDLE9BQUtDLFdBQUwsRUFEZ0M7QUFBQSxTQUFoQixDQUFuQjtBQUdEO0FBL0hrQjtBQUFBO0FBQUEsNkNBaUlJO0FBQ3JCLGFBQUtGLFdBQUw7QUFDRDtBQW5Ja0I7QUFBQTtBQUFBLCtCQXFJVjtBQUFBOztBQUFBLFlBQ0NGLEtBREQsR0FDVyxLQUFLQyxPQURoQixDQUNDRCxLQUREOztBQUVQLFlBQU01QixRQUFRNEIsTUFBTUssUUFBTixFQUFkOztBQUVBLGVBQ0U7QUFBQyxjQUFEO0FBQUEsWUFBTSxRQUNFLEtBQUtYLEtBQUwsQ0FBV1QsTUFBWCxLQUFzQmIsTUFBTVksZ0JBRHBDO0FBR00scUJBQVM7QUFBQSxxQkFDUGdCLE1BQU1NLFFBQU4sQ0FBZTtBQUNiaEMsc0JBQU0sdUJBRE87QUFFYlcsd0JBQVEsT0FBS1MsS0FBTCxDQUFXVDtBQUZOLGVBQWYsQ0FETztBQUFBO0FBSGY7QUFVRyxlQUFLUyxLQUFMLENBQVdFO0FBVmQsU0FERjtBQWNEO0FBdkprQjs7QUFBQTtBQUFBLElBd0hJOUIsU0F4SEo7O0FBMEpyQixNQUFJeUMsYUFBYSxDQUFqQjtBQUNBLE1BQU1DLFVBQVUsU0FBVkEsT0FBVSxDQUFDZCxLQUFELFNBQW9CO0FBQUEsUUFBWE0sS0FBVyxTQUFYQSxLQUFXOztBQUNsQyxRQUFJUyxjQUFKOztBQUVBLFdBRUU7QUFBQTtBQUFBO0FBQ0UscUNBQU8sS0FBSyx5QkFBYztBQUNsQkEsa0JBQVFDLFVBQVI7QUFDQTtBQUZSLFFBREY7QUFLRTtBQUFBO0FBQUEsVUFBUSxTQUFTLG1CQUFNO0FBQ2JWLGtCQUFNTSxRQUFOLENBQWU7QUFDYmhDLG9CQUFNLFVBRE87QUFFYkUsb0JBQU1pQyxNQUFNRSxLQUZDO0FBR2JwQyxrQkFBSWdDO0FBSFMsYUFBZjtBQUtBRSxrQkFBTUUsS0FBTixHQUFjLEVBQWQ7QUFDRDtBQVBUO0FBQUE7QUFBQTtBQUxGLEtBRkY7QUFvQkQsR0F2QkQ7O0FBM0pxQixNQW9MZkMsZUFwTGU7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDBDQXFMQztBQUFBOztBQUFBLFlBQ1ZaLEtBRFUsR0FDQSxLQUFLQyxPQURMLENBQ1ZELEtBRFU7OztBQUdsQixhQUFLRSxXQUFMLEdBQW1CRixNQUFNRyxTQUFOLENBQWdCO0FBQUEsaUJBQy9CLE9BQUtDLFdBQUwsRUFEK0I7QUFBQSxTQUFoQixDQUFuQjtBQUdEO0FBM0xrQjtBQUFBO0FBQUEsNkNBNkxJO0FBQ3JCLGFBQUtGLFdBQUw7QUFDRDtBQS9Ma0I7QUFBQTtBQUFBLCtCQWlNVjtBQUFBLFlBQ0NGLEtBREQsR0FDVyxLQUFLQyxPQURoQixDQUNDRCxLQUREOztBQUVQLFlBQU01QixRQUFRNEIsTUFBTUssUUFBTixFQUFkOztBQUVBLGVBRUUsb0JBQUMsUUFBRCxJQUFVLE9BQ0FsQixnQkFDRWYsTUFBTVEsS0FEUixFQUVFUixNQUFNWSxnQkFGUixDQURWO0FBTVUsdUJBQWE7QUFBQSxtQkFDYmdCLE1BQU1NLFFBQU4sQ0FBZTtBQUNiaEMsb0JBQU0sYUFETztBQUViQyxrQkFBSUE7QUFGUyxhQUFmLENBRGE7QUFBQTtBQU52QixVQUZGO0FBZ0JEO0FBck5rQjs7QUFBQTtBQUFBLElBb0xTVCxTQXBMVDs7QUF3TnJCLE1BQU0rQyxTQUFTLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixXQUVFO0FBQUE7QUFBQTtBQUNHLGNBREg7QUFFRTtBQUFDLGtCQUFEO0FBQUEsVUFBWSxRQUFPLFVBQW5CO0FBQUE7QUFBQSxPQUZGO0FBS0csV0FMSDtBQU1FO0FBQUMsa0JBQUQ7QUFBQSxVQUFZLFFBQU8sZ0JBQW5CO0FBQUE7QUFBQSxPQU5GO0FBU0csV0FUSDtBQVVFO0FBQUMsa0JBQUQ7QUFBQSxVQUFZLFFBQU8sYUFBbkI7QUFBQTtBQUFBO0FBVkYsS0FGRjtBQWlCRCxHQWxCRDs7QUFvQkEsTUFBTUMsVUFBVSxTQUFWQSxPQUFVLEdBQU07QUFDcEIsV0FFRTtBQUFBO0FBQUE7QUFDRSwwQkFBQyxPQUFELE9BREY7QUFFRSwwQkFBQyxlQUFELE9BRkY7QUFHRSwwQkFBQyxNQUFEO0FBSEYsS0FGRjtBQVFELEdBVEQ7O0FBNU9xQixNQXVQZkMsUUF2UGU7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHNDQXdQSGQsT0F4UEcsRUF3UE07QUFDdkIsZUFBTztBQUNMRCxpQkFBTyxLQUFLTixLQUFMLENBQVdNO0FBRGIsU0FBUDtBQUdEO0FBNVBrQjtBQUFBO0FBQUEsK0JBOFBWO0FBQ1AsZUFBTyxLQUFLTixLQUFMLENBQVdFLFFBQWxCO0FBQ0Q7QUFoUWtCOztBQUFBO0FBQUEsSUF1UEU5QixTQXZQRjs7QUFtUXJCLE1BQU1rRCxpQkFBaUJDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBdkI7O0FBRUFyRCxXQUFTc0QsTUFBVCxDQUNFO0FBQUMsWUFBRDtBQUFBLE1BQVUsT0FBT25ELFlBQVlrQixPQUFaLENBQWpCO0FBQ0Usd0JBQUMsT0FBRDtBQURGLEdBREYsRUFJRThCLGNBSkY7QUFNRCxDQTNRRDs7QUE2UUFJLE9BQU9DLE9BQVAsR0FBaUJuRCxRQUFqQiIsImZpbGUiOiJyZWR1eEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVkdXggPSByZXF1aXJlKCdyZWR1eCcpO1xuXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJy4uL3JlYWN0JyksXG4gICAgICBSZWFjdERPTSA9IHJlcXVpcmUoJy4uL3JlYWN0RE9NJyksXG4gICAgICB7IENvbXBvbmVudCB9ID0gUmVhY3QsXG4gICAgICB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfSA9IFJlZHV4O1xuXG5jb25zdCByZWR1eEFwcCA9ICgpID0+IHtcbiAgY29uc3QgdG9kbyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSAnQUREX1RPRE8nOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiBhY3Rpb24uaWQsXG4gICAgICAgICAgdGV4dDogYWN0aW9uLnRleHQsXG4gICAgICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICBjYXNlICdUT0dHTEVfVE9ETyc6XG4gICAgICAgIGlmIChzdGF0ZS5pZCAhPT0gYWN0aW9uLmlkKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgY29tcGxldGVkOiAhc3RhdGUuY29tcGxldGVkXG4gICAgICAgIH0pO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHRvZG9zID0gKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ0FERF9UT0RPJzpcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICB0b2RvKHVuZGVmaW5lZCwgYWN0aW9uKVxuICAgICAgICBdO1xuXG4gICAgICBjYXNlICdUT0dHTEVfVE9ETyc6XG4gICAgICAgIHJldHVybiBzdGF0ZS5tYXAodCA9PiB0b2RvKHQsIGFjdGlvbikpO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHZpc2liaWxpdHlGaWx0ZXIgPSAoIHN0YXRlID0gJ1NIT1dfQUxMJywgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSAnU0VUX1ZJU0lCSUxJVFlfRklMVEVSJzpcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5maWx0ZXI7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdG9kb0FwcCA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgdG9kb3M6IHRvZG9zLFxuICAgIHZpc2liaWxpdHlGaWx0ZXI6IHZpc2liaWxpdHlGaWx0ZXJcbiAgfSk7XG5cbiAgY29uc3QgZ2V0VmlzaWJsZVRvZG9zID0gKHRvZG9zLCBmaWx0ZXIpID0+IHtcbiAgICBzd2l0Y2ggKGZpbHRlcikge1xuICAgICAgY2FzZSAnU0hPV19BTEwnOlxuICAgICAgICByZXR1cm4gdG9kb3M7XG5cbiAgICAgIGNhc2UgJ1NIT1dfQ09NUExFVEVEJzpcbiAgICAgICAgcmV0dXJuIHRvZG9zLmZpbHRlcihcbiAgICAgICAgICAgIHQgPT4gdC5jb21wbGV0ZWRcbiAgICAgICAgKTtcblxuICAgICAgY2FzZSAnU0hPV19BQ1RJVkUnOlxuICAgICAgICByZXR1cm4gdG9kb3MuZmlsdGVyKFxuICAgICAgICAgICAgdCA9PiAhdC5jb21wbGV0ZWRcbiAgICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgVG9kbyA9ICh7b25DbGljaywgY29tcGxldGVkLCB0ZXh0fSkgPT4ge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgIHN0eWxlPXt7dGV4dERlY29yYXRpb246XG4gICAgICAgICAgICAgICAgY29tcGxldGVkID9cbiAgICAgICAgICAgICAgICAgICdsaW5lLXRocm91Z2gnIDpcbiAgICAgICAgICAgICAgICAgICAgJ25vbmUnfX1cbiAgICAgID5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgVG9kb0xpc3QgPSAoe3RvZG9zLCBvblRvZG9DbGlja30pID0+ICB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPHVsPlxuICAgICAgICB7dG9kb3MubWFwKHRvZG8gPT4gPFRvZG8gdGV4dD17dG9kby50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkPXt0b2RvLmNvbXBsZXRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG9kb0NsaWNrKHRvZG8uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIC8+KX1cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBMaW5rID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBhY3RpdmUsIG9uQ2xpY2sgfSA9IHByb3BzO1xuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgcmV0dXJuIDxzcGFuPntwcm9wcy5jaGlsZHJlbn08L3NwYW4+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxhIGhyZWY9JyMnXG4gICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICBvbkNsaWNrKCk7XG4gICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfTtcblxuICBjbGFzcyBGaWx0ZXJMaW5rIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PlxuICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcbiAgICAgIGNvbnN0IHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPExpbmsgYWN0aXZlPXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmZpbHRlciA9PT0gc3RhdGUudmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ1NFVF9WSVNJQklMSVRZX0ZJTFRFUicsXG4gICAgICAgICAgICAgICAgICBmaWx0ZXI6IHRoaXMucHJvcHMuZmlsdGVyXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvTGluaz5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgbGV0IG5leHRUb2RvSWQgPSAwO1xuICBjb25zdCBBZGRUb2RvID0gKHByb3BzLCB7c3RvcmV9KSA9PiB7XG4gICAgbGV0IGlucHV0O1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHJlZj17ZG9tRWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBkb21FbGVtZW50O1xuICAgICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdBRERfVE9ETycsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBpZDogbmV4dFRvZG9JZCsrXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEFkZCB0b2RvXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBjbGFzcyBWaXNpYmxlVG9kb0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+XG4gICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcbiAgICAgIGNvbnN0IHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcblxuICAgICAgcmV0dXJuIChcblxuICAgICAgICA8VG9kb0xpc3QgdG9kb3M9e1xuICAgICAgICAgICAgICAgICAgZ2V0VmlzaWJsZVRvZG9zKFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS50b2RvcyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUudmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIG9uVG9kb0NsaWNrPXtpZCA9PlxuICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnVE9HR0xFX1RPRE8nLFxuICAgICAgICAgICAgICAgICAgICBpZDogaWRcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPHA+XG4gICAgICAgIHsnU2hvdzogJ31cbiAgICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPSdTSE9XX0FMTCc+XG4gICAgICAgICAgQWxsXG4gICAgICAgIDwvRmlsdGVyTGluaz5cbiAgICAgICAgeycgLSAnfVxuICAgICAgICA8RmlsdGVyTGluayBmaWx0ZXI9J1NIT1dfQ09NUExFVEVEJz5cbiAgICAgICAgICBDb21wbGV0ZWRcbiAgICAgICAgPC9GaWx0ZXJMaW5rPlxuICAgICAgICB7JyAtICd9XG4gICAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19BQ1RJVkUnPlxuICAgICAgICAgIEFjdGl2ZVxuICAgICAgICA8L0ZpbHRlckxpbms+XG4gICAgICA8L3A+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBUb2RvQXBwID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxBZGRUb2RvIC8+XG4gICAgICAgIDxWaXNpYmxlVG9kb0xpc3QgLz5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBjbGFzcyBQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0b3JlOiB0aGlzLnByb3BzLnN0b3JlXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJvb3RET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblxuICBSZWFjdERPTS5yZW5kZXIoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtjcmVhdGVTdG9yZSh0b2RvQXBwKX0+XG4gICAgICA8VG9kb0FwcCAvPlxuICAgIDwvUHJvdmlkZXI+LFxuICAgIHJvb3RET01FbGVtZW50XG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHV4QXBwO1xuIl19