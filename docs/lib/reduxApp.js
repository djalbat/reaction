'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Redux = require('redux'),
    expect = require('expect'),
    deepFreeze = require('deep-freeze');

var reaction = require('../../index'),
    ReactDOM = reaction.ReactDOM,
    React = reaction.React;

var ReduxApp = function () {
  function ReduxApp() {
    _classCallCheck(this, ReduxApp);
  }

  _createClass(ReduxApp, null, [{
    key: 'run',
    value: function run() {
      var rootDOMElement = document.getElementById('root');

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

      var combineReducers = Redux.combineReducers;


      var todoApp = combineReducers({
        todos: todos,
        visibilityFilter: visibilityFilter
      });

      var Component = React.Component;


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

      var Link = function Link(_ref3) {
        var active = _ref3.active;
        var _onClick = _ref3.onClick;
        var children = _ref3.children;

        if (active) {
          return React.createElement(
            'span',
            null,
            children
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
          children
        );
      };

      var FilterLink = function (_Component) {
        _inherits(FilterLink, _Component);

        function FilterLink() {
          _classCallCheck(this, FilterLink);

          return _possibleConstructorReturn(this, Object.getPrototypeOf(FilterLink).apply(this, arguments));
        }

        _createClass(FilterLink, [{
          key: 'componentDidMount',
          value: function componentDidMount() {
            var _this2 = this;

            var store = this.props.store;


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
            var store = this.props.store;

            var props = this.props;
            var state = store.getState();

            return React.createElement(
              Link,
              { active: props.filter === state.visibilityFilter,
                onClick: function onClick() {
                  return store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter: props.filter
                  });
                }
              },
              props.children
            );
          }
        }]);

        return FilterLink;
      }(Component);

      var nextTodoId = 0;
      var AddTodo = function AddTodo(_ref4) {
        var store = _ref4.store;

        var input = void 0;

        return React.createElement(
          'div',
          null,
          React.createElement('input', { ref: function ref(node) {
              input = node;
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

          return _possibleConstructorReturn(this, Object.getPrototypeOf(VisibleTodoList).apply(this, arguments));
        }

        _createClass(VisibleTodoList, [{
          key: 'componentDidMount',
          value: function componentDidMount() {
            var _this4 = this;

            var store = this.props.store;


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
            var store = this.props.store;

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

      var Footer = function Footer(_ref5) {
        var store = _ref5.store;
        return React.createElement(
          'p',
          null,
          'Show:',
          ' ',
          React.createElement(
            FilterLink,
            { filter: 'SHOW_ALL', store: store },
            'All'
          ),
          ' ',
          React.createElement(
            FilterLink,
            { filter: 'SHOW_ACTIVE', store: store },
            'Active'
          ),
          ' ',
          React.createElement(
            FilterLink,
            { filter: 'SHOW_COMPLETED', store: store },
            'Completed'
          )
        );
      };

      var TodoApp = function TodoApp(_ref6) {
        var store = _ref6.store;
        return React.createElement(
          'div',
          null,
          React.createElement(AddTodo, { store: store }),
          React.createElement(VisibleTodoList, { store: store }),
          React.createElement(Footer, { store: store })
        );
      };

      var createStore = Redux.createStore;


      ReactDOM.render(React.createElement(TodoApp, { store: createStore(todoApp) }), rootDOMElement);
    }
  }]);

  return ReduxApp;
}();

module.exports = ReduxApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWR1eEFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSSxRQUFRLFFBQVEsT0FBUixDQUFSO0lBQ0EsU0FBVSxRQUFRLFFBQVIsQ0FBVjtJQUNBLGFBQWEsUUFBUSxhQUFSLENBQWI7O0FBRUosSUFBSSxXQUFXLFFBQVEsYUFBUixDQUFYO0lBQ0EsV0FBVyxTQUFTLFFBQVQ7SUFDWCxRQUFRLFNBQVMsS0FBVDs7SUFFTjtBQUNKLFdBREksUUFDSixHQUFjOzBCQURWLFVBQ1U7R0FBZDs7ZUFESTs7MEJBS1M7QUFDWCxVQUFNLGlCQUFpQixTQUFTLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBakIsQ0FESzs7QUFHWCxVQUFNLE9BQU8sU0FBUCxJQUFPLENBQUMsS0FBRCxFQUFRLE1BQVIsRUFBbUI7QUFDOUIsZ0JBQVEsT0FBTyxJQUFQO0FBQ04sZUFBSyxVQUFMO0FBQ0UsbUJBQU87QUFDTCxrQkFBSSxPQUFPLEVBQVA7QUFDSixvQkFBTSxPQUFPLElBQVA7QUFDTix5QkFBVyxLQUFYO2FBSEYsQ0FERjs7QUFERixlQVFPLGFBQUw7QUFDRSxnQkFBSSxNQUFNLEVBQU4sS0FBYSxPQUFPLEVBQVAsRUFBVztBQUMxQixxQkFBTyxLQUFQLENBRDBCO2FBQTVCOztBQUlBLG1CQUFPLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBbEIsRUFBeUI7QUFDOUIseUJBQVcsQ0FBQyxNQUFNLFNBQU47YUFEUCxDQUFQLENBTEY7O0FBUkY7QUFrQkksbUJBQU8sS0FBUCxDQURGO0FBakJGLFNBRDhCO09BQW5CLENBSEY7O0FBMEJYLFVBQU0sUUFBUSxTQUFSLEtBQVEsR0FBd0I7WUFBdkIsOERBQVEsa0JBQWU7WUFBWCxzQkFBVzs7QUFDcEMsZ0JBQVEsT0FBTyxJQUFQO0FBQ04sZUFBSyxVQUFMO0FBQ0UsZ0RBQ0ssU0FDSCxLQUFLLFNBQUwsRUFBZ0IsTUFBaEIsR0FGRixDQURGOztBQURGLGVB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QVZIO1VBV0U7QUFBQyxzQkFBRDtjQUFZLFFBQU8sZ0JBQVAsRUFBd0IsT0FBTyxLQUFQLEVBQXBDOztXQVhGOztPQUphLENBeE9KOztBQTZQWCxVQUFNLFVBQVUsU0FBVixPQUFVO1lBQ2Q7ZUFHQTs7O1VBQ0Usb0JBQUMsT0FBRCxJQUFTLE9BQU8sS0FBUCxFQUFULENBREY7VUFFRSxvQkFBQyxlQUFELElBQWlCLE9BQU8sS0FBUCxFQUFqQixDQUZGO1VBR0Usb0JBQUMsTUFBRCxJQUFRLE9BQU8sS0FBUCxFQUFSLENBSEY7O09BSmMsQ0E3UEw7O1VBd1FILGNBQWdCLE1BQWhCLFlBeFFHOzs7QUEwUVgsZUFBUyxNQUFULENBQ0Usb0JBQUMsT0FBRCxJQUFTLE9BQU8sWUFBWSxPQUFaLENBQVAsRUFBVCxDQURGLEVBRUUsY0FGRixFQTFRVzs7OztTQUxUOzs7QUFzUk4sT0FBTyxPQUFQLEdBQWlCLFFBQWpCIiwiZmlsZSI6InJlZHV4QXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVkdXggPSByZXF1aXJlKCdyZWR1eCcpLFxuICAgIGV4cGVjdCAgPSByZXF1aXJlKCdleHBlY3QnKSxcbiAgICBkZWVwRnJlZXplID0gcmVxdWlyZSgnZGVlcC1mcmVlemUnKTtcblxudmFyIHJlYWN0aW9uID0gcmVxdWlyZSgnLi4vLi4vaW5kZXgnKSxcbiAgICBSZWFjdERPTSA9IHJlYWN0aW9uLlJlYWN0RE9NLFxuICAgIFJlYWN0ID0gcmVhY3Rpb24uUmVhY3Q7XG5cbmNsYXNzIFJlZHV4QXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIHN0YXRpYyBydW4oKSB7XG4gICAgY29uc3Qgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXG4gICAgY29uc3QgdG9kbyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0FERF9UT0RPJzpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGFjdGlvbi5pZCxcbiAgICAgICAgICAgIHRleHQ6IGFjdGlvbi50ZXh0LFxuICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgY2FzZSAnVE9HR0xFX1RPRE8nOlxuICAgICAgICAgIGlmIChzdGF0ZS5pZCAhPT0gYWN0aW9uLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICBjb21wbGV0ZWQ6ICFzdGF0ZS5jb21wbGV0ZWRcbiAgICAgICAgICB9KTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdG9kb3MgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0FERF9UT0RPJzpcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICB0b2RvKHVuZGVmaW5lZCwgYWN0aW9uKVxuICAgICAgICAgIF07XG5cbiAgICAgICAgY2FzZSAnVE9HR0xFX1RPRE8nOlxuICAgICAgICAgIHJldHVybiBzdGF0ZS5tYXAodCA9PiB0b2RvKHQsIGFjdGlvbikpO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB2aXNpYmlsaXR5RmlsdGVyID0gKCBzdGF0ZSA9ICdTSE9XX0FMTCcsIGFjdGlvbikgPT4ge1xuICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdTRVRfVklTSUJJTElUWV9GSUxURVInOlxuICAgICAgICAgIHJldHVybiBhY3Rpb24uZmlsdGVyO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB7IGNvbWJpbmVSZWR1Y2VycyB9ID0gUmVkdXg7XG5cbiAgICBjb25zdCB0b2RvQXBwID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICAgIHRvZG9zOiB0b2RvcyxcbiAgICAgIHZpc2liaWxpdHlGaWx0ZXI6IHZpc2liaWxpdHlGaWx0ZXJcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuICAgIGNvbnN0IGdldFZpc2libGVUb2RvcyA9IChcbiAgICAgICAgdG9kb3MsXG4gICAgICAgIGZpbHRlclxuICAgICkgPT4ge1xuICAgICAgc3dpdGNoIChmaWx0ZXIpIHtcbiAgICAgICAgY2FzZSAnU0hPV19BTEwnOlxuICAgICAgICAgIHJldHVybiB0b2RvcztcblxuICAgICAgICBjYXNlICdTSE9XX0NPTVBMRVRFRCc6XG4gICAgICAgICAgcmV0dXJuIHRvZG9zLmZpbHRlcihcbiAgICAgICAgICAgICAgdCA9PiB0LmNvbXBsZXRlZFxuICAgICAgICAgICk7XG5cbiAgICAgICAgY2FzZSAnU0hPV19BQ1RJVkUnOlxuICAgICAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIoXG4gICAgICAgICAgICAgIHQgPT4gIXQuY29tcGxldGVkXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgVG9kbyA9ICh7XG4gICAgICBvbkNsaWNrLFxuICAgICAgY29tcGxldGVkLFxuICAgICAgdGV4dFxuICAgIH0pID0+IChcblxuICAgICAgPGxpIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkID9cbiAgICAgICAgICAgICAgICAgICAgICAnbGluZS10aHJvdWdoJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAnbm9uZSd9fVxuICAgICAgPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvbGk+XG4gICAgKTtcblxuICAgIGNvbnN0IFRvZG9MaXN0ID0gKHtcbiAgICAgIHRvZG9zLFxuICAgICAgb25Ub2RvQ2xpY2tcbiAgICB9KSA9PiAoXG5cbiAgICAgIDx1bD5cbiAgICAgICAge3RvZG9zLm1hcCh0b2RvID0+IDxUb2RvIHRleHQ9e3RvZG8udGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZD17dG9kby5jb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvZG9DbGljayh0b2RvLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4pfVxuICAgICAgPC91bD5cbiAgICApO1xuXG4gICAgY29uc3QgTGluayA9ICh7XG4gICAgICBhY3RpdmUsXG4gICAgICBvbkNsaWNrLFxuICAgICAgY2hpbGRyZW5cbiAgICB9KSA9PiB7XG4gICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiA8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8YSBocmVmPScjJ1xuICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgb25DbGljaygpO1xuICAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvYT5cbiAgICAgICk7XG4gICAgfTtcblxuICAgIGNsYXNzIEZpbHRlckxpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PlxuICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgXG4gICAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgICAgXG4gICAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPExpbmsgYWN0aXZlPXtcbiAgICAgICAgICAgICAgICAgIHByb3BzLmZpbHRlciA9PT0gc3RhdGUudmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU0VUX1ZJU0lCSUxJVFlfRklMVEVSJyxcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBwcm9wcy5maWx0ZXJcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IG5leHRUb2RvSWQgPSAwO1xuICAgIGNvbnN0IEFkZFRvZG8gPSAoe1xuICAgICAgc3RvcmVcbiAgICB9KSA9PiB7XG4gICAgICBsZXQgaW5wdXQ7XG5cbiAgICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXQgcmVmPXtub2RlID0+IHtcbiAgICAgICAgICAgICAgICAgIGlucHV0ID0gbm9kZTtcbiAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0FERF9UT0RPJyxcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBpbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBpZDogbmV4dFRvZG9JZCsrXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBZGQgdG9kb1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfTtcblxuICAgIGNsYXNzIFZpc2libGVUb2RvTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+XG4gICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG5cbiAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICA8VG9kb0xpc3QgdG9kb3M9e1xuICAgICAgICAgICAgICAgICAgICAgIGdldFZpc2libGVUb2RvcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnRvZG9zLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUudmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvblRvZG9DbGljaz17aWQgPT5cbiAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnVE9HR0xFX1RPRE8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgRm9vdGVyID0gKHtcbiAgICAgIHN0b3JlXG4gICAgfSkgPT4gKFxuXG4gICAgICA8cD5cbiAgICAgICAgU2hvdzpcbiAgICAgICAgeycgJ31cbiAgICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPSdTSE9XX0FMTCcgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICBBbGxcbiAgICAgICAgPC9GaWx0ZXJMaW5rPlxuICAgICAgICB7JyAnfVxuICAgICAgICA8RmlsdGVyTGluayBmaWx0ZXI9J1NIT1dfQUNUSVZFJyBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgIEFjdGl2ZVxuICAgICAgICA8L0ZpbHRlckxpbms+XG4gICAgICAgIHsnICd9XG4gICAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19DT01QTEVURUQnIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgQ29tcGxldGVkXG4gICAgICAgIDwvRmlsdGVyTGluaz5cbiAgICAgIDwvcD5cbiAgICApO1xuXG4gICAgY29uc3QgVG9kb0FwcCA9ICh7XG4gICAgICBzdG9yZVxuICAgIH0pID0+IChcblxuICAgICAgPGRpdj5cbiAgICAgICAgPEFkZFRvZG8gc3RvcmU9e3N0b3JlfS8+XG4gICAgICAgIDxWaXNpYmxlVG9kb0xpc3Qgc3RvcmU9e3N0b3JlfS8+XG4gICAgICAgIDxGb290ZXIgc3RvcmU9e3N0b3JlfS8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgY29uc3QgeyBjcmVhdGVTdG9yZSB9ID0gUmVkdXg7XG5cbiAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICA8VG9kb0FwcCBzdG9yZT17Y3JlYXRlU3RvcmUodG9kb0FwcCl9IC8+LFxuICAgICAgcm9vdERPTUVsZW1lbnRcbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVkdXhBcHA7XG4iXX0=