'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Redux = require('redux');

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
      var Component = React.Component;
      var createStore = Redux.createStore;
      var combineReducers = Redux.combineReducers;


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
    }
  }]);

  return ReduxApp;
}();

module.exports = ReduxApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWR1eEFwcC5qcyJdLCJuYW1lcyI6WyJSZWR1eCIsInJlcXVpcmUiLCJyZWFjdGlvbiIsIlJlYWN0RE9NIiwiUmVhY3QiLCJSZWR1eEFwcCIsIkNvbXBvbmVudCIsImNyZWF0ZVN0b3JlIiwiY29tYmluZVJlZHVjZXJzIiwidG9kbyIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImlkIiwidGV4dCIsImNvbXBsZXRlZCIsIk9iamVjdCIsImFzc2lnbiIsInRvZG9zIiwidW5kZWZpbmVkIiwibWFwIiwidCIsInZpc2liaWxpdHlGaWx0ZXIiLCJmaWx0ZXIiLCJ0b2RvQXBwIiwiZ2V0VmlzaWJsZVRvZG9zIiwiVG9kbyIsIm9uQ2xpY2siLCJ0ZXh0RGVjb3JhdGlvbiIsIlRvZG9MaXN0Iiwib25Ub2RvQ2xpY2siLCJMaW5rIiwicHJvcHMiLCJhY3RpdmUiLCJjaGlsZHJlbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIkZpbHRlckxpbmsiLCJzdG9yZSIsImNvbnRleHQiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsImZvcmNlVXBkYXRlIiwiZ2V0U3RhdGUiLCJkaXNwYXRjaCIsIm5leHRUb2RvSWQiLCJBZGRUb2RvIiwiaW5wdXQiLCJkb21FbGVtZW50IiwidmFsdWUiLCJWaXNpYmxlVG9kb0xpc3QiLCJGb290ZXIiLCJUb2RvQXBwIiwiUHJvdmlkZXIiLCJyb290RE9NRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxPQUFSLENBQWQ7O0FBRUEsSUFBTUMsV0FBV0QsUUFBUSxhQUFSLENBQWpCO0FBQUEsSUFDTUUsV0FBV0QsU0FBU0MsUUFEMUI7QUFBQSxJQUVNQyxRQUFRRixTQUFTRSxLQUZ2Qjs7SUFJTUMsUTs7Ozs7OzswQkFDUztBQUFBLFVBQ0hDLFNBREcsR0FDV0YsS0FEWCxD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QVNzRCxNQUFULENBQ0U7QUFBQyxnQkFBRDtBQUFBLFVBQVUsT0FBT2xELFlBQVlpQixPQUFaLENBQWpCO0FBQ0UsNEJBQUMsT0FBRDtBQURGLE9BREYsRUFJRThCLGNBSkY7QUFNRDs7Ozs7O0FBR0hJLE9BQU9DLE9BQVAsR0FBaUJ0RCxRQUFqQiIsImZpbGUiOiJyZWR1eEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVkdXggPSByZXF1aXJlKCdyZWR1eCcpO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2luZGV4JyksXG4gICAgICBSZWFjdERPTSA9IHJlYWN0aW9uLlJlYWN0RE9NLFxuICAgICAgUmVhY3QgPSByZWFjdGlvbi5SZWFjdDtcblxuY2xhc3MgUmVkdXhBcHAge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcbiAgICBjb25zdCB7IGNyZWF0ZVN0b3JlIH0gPSBSZWR1eDtcbiAgICBjb25zdCB7IGNvbWJpbmVSZWR1Y2VycyB9ID0gUmVkdXg7XG4gICAgXG4gICAgY29uc3QgdG9kbyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0FERF9UT0RPJzpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGFjdGlvbi5pZCxcbiAgICAgICAgICAgIHRleHQ6IGFjdGlvbi50ZXh0LFxuICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgICAgICAgIH07XG4gICAgXG4gICAgICAgIGNhc2UgJ1RPR0dMRV9UT0RPJzpcbiAgICAgICAgICBpZiAoc3RhdGUuaWQgIT09IGFjdGlvbi5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgIGNvbXBsZXRlZDogIXN0YXRlLmNvbXBsZXRlZFxuICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IHRvZG9zID0gKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xuICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdBRERfVE9ETyc6XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgdG9kbyh1bmRlZmluZWQsIGFjdGlvbilcbiAgICAgICAgICBdO1xuICAgIFxuICAgICAgICBjYXNlICdUT0dHTEVfVE9ETyc6XG4gICAgICAgICAgcmV0dXJuIHN0YXRlLm1hcCh0ID0+IHRvZG8odCwgYWN0aW9uKSk7XG4gICAgXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgY29uc3QgdmlzaWJpbGl0eUZpbHRlciA9ICggc3RhdGUgPSAnU0hPV19BTEwnLCBhY3Rpb24pID0+IHtcbiAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnU0VUX1ZJU0lCSUxJVFlfRklMVEVSJzpcbiAgICAgICAgICByZXR1cm4gYWN0aW9uLmZpbHRlcjtcbiAgICBcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCB0b2RvQXBwID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICAgIHRvZG9zOiB0b2RvcyxcbiAgICAgIHZpc2liaWxpdHlGaWx0ZXI6IHZpc2liaWxpdHlGaWx0ZXJcbiAgICB9KTtcbiAgICBcbiAgICBjb25zdCBnZXRWaXNpYmxlVG9kb3MgPSAodG9kb3MsIGZpbHRlcikgPT4ge1xuICAgICAgc3dpdGNoIChmaWx0ZXIpIHtcbiAgICAgICAgY2FzZSAnU0hPV19BTEwnOlxuICAgICAgICAgIHJldHVybiB0b2RvcztcbiAgICBcbiAgICAgICAgY2FzZSAnU0hPV19DT01QTEVURUQnOlxuICAgICAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIoXG4gICAgICAgICAgICAgIHQgPT4gdC5jb21wbGV0ZWRcbiAgICAgICAgICApO1xuICAgIFxuICAgICAgICBjYXNlICdTSE9XX0FDVElWRSc6XG4gICAgICAgICAgcmV0dXJuIHRvZG9zLmZpbHRlcihcbiAgICAgICAgICAgICAgdCA9PiAhdC5jb21wbGV0ZWRcbiAgICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgY29uc3QgVG9kbyA9ICh7b25DbGljaywgY29tcGxldGVkLCB0ZXh0fSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICBcbiAgICAgICAgPGxpIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgICBzdHlsZT17e3RleHREZWNvcmF0aW9uOlxuICAgICAgICAgICAgICAgICAgY29tcGxldGVkID9cbiAgICAgICAgICAgICAgICAgICAgJ2xpbmUtdGhyb3VnaCcgOlxuICAgICAgICAgICAgICAgICAgICAgICdub25lJ319XG4gICAgICAgID5cbiAgICAgICAgICB7dGV4dH1cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBUb2RvTGlzdCA9ICh7dG9kb3MsIG9uVG9kb0NsaWNrfSkgPT4gIHtcbiAgICAgIHJldHVybiAoXG4gICAgXG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7dG9kb3MubWFwKHRvZG8gPT4gPFRvZG8gdGV4dD17dG9kby50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQ9e3RvZG8uY29tcGxldGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG9kb0NsaWNrKHRvZG8uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAvPil9XG4gICAgICAgIDwvdWw+XG4gICAgICApO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgTGluayA9IChwcm9wcykgPT4ge1xuICAgICAgY29uc3QgeyBhY3RpdmUsIG9uQ2xpY2sgfSA9IHByb3BzO1xuICAgIFxuICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gPHNwYW4+e3Byb3BzLmNoaWxkcmVufTwvc3Bhbj47XG4gICAgICB9XG4gICAgXG4gICAgICByZXR1cm4gKFxuICAgIFxuICAgICAgICA8YSBocmVmPScjJ1xuICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgb25DbGljaygpO1xuICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2E+XG4gICAgICApO1xuICAgIH07XG4gICAgXG4gICAgY2xhc3MgRmlsdGVyTGluayBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT5cbiAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgIFxuICAgICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICAgXG4gICAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICAgIFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxMaW5rIGFjdGl2ZT17XG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmZpbHRlciA9PT0gc3RhdGUudmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU0VUX1ZJU0lCSUxJVFlfRklMVEVSJyxcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB0aGlzLnByb3BzLmZpbHRlclxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBsZXQgbmV4dFRvZG9JZCA9IDA7XG4gICAgY29uc3QgQWRkVG9kbyA9IChwcm9wcywge3N0b3JlfSkgPT4ge1xuICAgICAgbGV0IGlucHV0O1xuICAgIFxuICAgICAgcmV0dXJuIChcbiAgICBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXQgcmVmPXtkb21FbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgIGlucHV0ID0gZG9tRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0FERF9UT0RPJyxcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBpbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBpZDogbmV4dFRvZG9JZCsrXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBZGQgdG9kb1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfTtcbiAgICBcbiAgICBjbGFzcyBWaXNpYmxlVG9kb0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcbiAgICBcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PlxuICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgXG4gICAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgIFxuICAgICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICBcbiAgICAgICAgICA8VG9kb0xpc3QgdG9kb3M9e1xuICAgICAgICAgICAgICAgICAgICBnZXRWaXNpYmxlVG9kb3MoXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGUudG9kb3MsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGUudmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9uVG9kb0NsaWNrPXtpZCA9PlxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1RPR0dMRV9UT0RPJyxcbiAgICAgICAgICAgICAgICAgICAgICBpZDogaWRcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgIFxuICAgICAgICA8cD5cbiAgICAgICAgICB7J1Nob3c6ICd9XG4gICAgICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPSdTSE9XX0FMTCc+XG4gICAgICAgICAgICBBbGxcbiAgICAgICAgICA8L0ZpbHRlckxpbms+XG4gICAgICAgICAgeycgLSAnfVxuICAgICAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19DT01QTEVURUQnPlxuICAgICAgICAgICAgQ29tcGxldGVkXG4gICAgICAgICAgPC9GaWx0ZXJMaW5rPlxuICAgICAgICAgIHsnIC0gJ31cbiAgICAgICAgICA8RmlsdGVyTGluayBmaWx0ZXI9J1NIT1dfQUNUSVZFJz5cbiAgICAgICAgICAgIEFjdGl2ZVxuICAgICAgICAgIDwvRmlsdGVyTGluaz5cbiAgICAgICAgPC9wPlxuICAgICAgKTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IFRvZG9BcHAgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgIFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxBZGRUb2RvIC8+XG4gICAgICAgICAgPFZpc2libGVUb2RvTGlzdCAvPlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH07XG4gICAgXG4gICAgY2xhc3MgUHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdG9yZTogdGhpcy5wcm9wcy5zdG9yZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCByb290RE9NRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5cbiAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e2NyZWF0ZVN0b3JlKHRvZG9BcHApfT5cbiAgICAgICAgPFRvZG9BcHAgLz5cbiAgICAgIDwvUHJvdmlkZXI+LFxuICAgICAgcm9vdERPTUVsZW1lbnRcbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVkdXhBcHA7XG4iXX0=