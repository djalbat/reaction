'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Redux = require('redux');

var React = require('../react'),
    ReactDOM = require('../reactDOM');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9yZWR1eEFwcC5qcyJdLCJuYW1lcyI6WyJSZWR1eCIsInJlcXVpcmUiLCJSZWFjdCIsIlJlYWN0RE9NIiwiUmVkdXhBcHAiLCJDb21wb25lbnQiLCJjcmVhdGVTdG9yZSIsImNvbWJpbmVSZWR1Y2VycyIsInRvZG8iLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJpZCIsInRleHQiLCJjb21wbGV0ZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJ0b2RvcyIsInVuZGVmaW5lZCIsIm1hcCIsInQiLCJ2aXNpYmlsaXR5RmlsdGVyIiwiZmlsdGVyIiwidG9kb0FwcCIsImdldFZpc2libGVUb2RvcyIsIlRvZG8iLCJvbkNsaWNrIiwidGV4dERlY29yYXRpb24iLCJUb2RvTGlzdCIsIm9uVG9kb0NsaWNrIiwiTGluayIsInByb3BzIiwiYWN0aXZlIiwiY2hpbGRyZW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJGaWx0ZXJMaW5rIiwic3RvcmUiLCJjb250ZXh0IiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJmb3JjZVVwZGF0ZSIsImdldFN0YXRlIiwiZGlzcGF0Y2giLCJuZXh0VG9kb0lkIiwiQWRkVG9kbyIsImlucHV0IiwiZG9tRWxlbWVudCIsInZhbHVlIiwiVmlzaWJsZVRvZG9MaXN0IiwiRm9vdGVyIiwiVG9kb0FwcCIsIlByb3ZpZGVyIiwicm9vdERPTUVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsT0FBUixDQUFkOztBQUVBLElBQU1DLFFBQVFELFFBQVEsVUFBUixDQUFkO0FBQUEsSUFDTUUsV0FBV0YsUUFBUSxhQUFSLENBRGpCOztJQUdNRyxROzs7Ozs7OzBCQUNTO0FBQUEsVUFDSEMsU0FERyxHQUNXSCxLQURYLENBQ0hHLFNBREc7QUFBQSxVQUVIQyxXQUZH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O0FBQUEsVUFBVSxPQUFPbEQsWUFBWWlCLE9BQVosQ0FBakI7QUFDRSw0QkFBQyxPQUFEO0FBREYsT0FERixFQUlFOEIsY0FKRjtBQU1EOzs7Ozs7QUFHSEksT0FBT0MsT0FBUCxHQUFpQnRELFFBQWpCIiwiZmlsZSI6InJlZHV4QXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZWR1eCA9IHJlcXVpcmUoJ3JlZHV4Jyk7XG5cbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgnLi4vcmVhY3QnKSxcbiAgICAgIFJlYWN0RE9NID0gcmVxdWlyZSgnLi4vcmVhY3RET00nKTtcblxuY2xhc3MgUmVkdXhBcHAge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcbiAgICBjb25zdCB7IGNyZWF0ZVN0b3JlIH0gPSBSZWR1eDtcbiAgICBjb25zdCB7IGNvbWJpbmVSZWR1Y2VycyB9ID0gUmVkdXg7XG4gICAgXG4gICAgY29uc3QgdG9kbyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0FERF9UT0RPJzpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGFjdGlvbi5pZCxcbiAgICAgICAgICAgIHRleHQ6IGFjdGlvbi50ZXh0LFxuICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgICAgICAgIH07XG4gICAgXG4gICAgICAgIGNhc2UgJ1RPR0dMRV9UT0RPJzpcbiAgICAgICAgICBpZiAoc3RhdGUuaWQgIT09IGFjdGlvbi5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgIGNvbXBsZXRlZDogIXN0YXRlLmNvbXBsZXRlZFxuICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IHRvZG9zID0gKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xuICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdBRERfVE9ETyc6XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgdG9kbyh1bmRlZmluZWQsIGFjdGlvbilcbiAgICAgICAgICBdO1xuICAgIFxuICAgICAgICBjYXNlICdUT0dHTEVfVE9ETyc6XG4gICAgICAgICAgcmV0dXJuIHN0YXRlLm1hcCh0ID0+IHRvZG8odCwgYWN0aW9uKSk7XG4gICAgXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgY29uc3QgdmlzaWJpbGl0eUZpbHRlciA9ICggc3RhdGUgPSAnU0hPV19BTEwnLCBhY3Rpb24pID0+IHtcbiAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnU0VUX1ZJU0lCSUxJVFlfRklMVEVSJzpcbiAgICAgICAgICByZXR1cm4gYWN0aW9uLmZpbHRlcjtcbiAgICBcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCB0b2RvQXBwID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICAgIHRvZG9zOiB0b2RvcyxcbiAgICAgIHZpc2liaWxpdHlGaWx0ZXI6IHZpc2liaWxpdHlGaWx0ZXJcbiAgICB9KTtcbiAgICBcbiAgICBjb25zdCBnZXRWaXNpYmxlVG9kb3MgPSAodG9kb3MsIGZpbHRlcikgPT4ge1xuICAgICAgc3dpdGNoIChmaWx0ZXIpIHtcbiAgICAgICAgY2FzZSAnU0hPV19BTEwnOlxuICAgICAgICAgIHJldHVybiB0b2RvcztcbiAgICBcbiAgICAgICAgY2FzZSAnU0hPV19DT01QTEVURUQnOlxuICAgICAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIoXG4gICAgICAgICAgICAgIHQgPT4gdC5jb21wbGV0ZWRcbiAgICAgICAgICApO1xuICAgIFxuICAgICAgICBjYXNlICdTSE9XX0FDVElWRSc6XG4gICAgICAgICAgcmV0dXJuIHRvZG9zLmZpbHRlcihcbiAgICAgICAgICAgICAgdCA9PiAhdC5jb21wbGV0ZWRcbiAgICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgY29uc3QgVG9kbyA9ICh7b25DbGljaywgY29tcGxldGVkLCB0ZXh0fSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICBcbiAgICAgICAgPGxpIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgICBzdHlsZT17e3RleHREZWNvcmF0aW9uOlxuICAgICAgICAgICAgICAgICAgY29tcGxldGVkID9cbiAgICAgICAgICAgICAgICAgICAgJ2xpbmUtdGhyb3VnaCcgOlxuICAgICAgICAgICAgICAgICAgICAgICdub25lJ319XG4gICAgICAgID5cbiAgICAgICAgICB7dGV4dH1cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBUb2RvTGlzdCA9ICh7dG9kb3MsIG9uVG9kb0NsaWNrfSkgPT4gIHtcbiAgICAgIHJldHVybiAoXG4gICAgXG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7dG9kb3MubWFwKHRvZG8gPT4gPFRvZG8gdGV4dD17dG9kby50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQ9e3RvZG8uY29tcGxldGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG9kb0NsaWNrKHRvZG8uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAvPil9XG4gICAgICAgIDwvdWw+XG4gICAgICApO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgTGluayA9IChwcm9wcykgPT4ge1xuICAgICAgY29uc3QgeyBhY3RpdmUsIG9uQ2xpY2sgfSA9IHByb3BzO1xuICAgIFxuICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gPHNwYW4+e3Byb3BzLmNoaWxkcmVufTwvc3Bhbj47XG4gICAgICB9XG4gICAgXG4gICAgICByZXR1cm4gKFxuICAgIFxuICAgICAgICA8YSBocmVmPScjJ1xuICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgb25DbGljaygpO1xuICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2E+XG4gICAgICApO1xuICAgIH07XG4gICAgXG4gICAgY2xhc3MgRmlsdGVyTGluayBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT5cbiAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgIFxuICAgICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICAgXG4gICAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICAgIFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxMaW5rIGFjdGl2ZT17XG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmZpbHRlciA9PT0gc3RhdGUudmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU0VUX1ZJU0lCSUxJVFlfRklMVEVSJyxcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB0aGlzLnByb3BzLmZpbHRlclxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBsZXQgbmV4dFRvZG9JZCA9IDA7XG4gICAgY29uc3QgQWRkVG9kbyA9IChwcm9wcywge3N0b3JlfSkgPT4ge1xuICAgICAgbGV0IGlucHV0O1xuICAgIFxuICAgICAgcmV0dXJuIChcbiAgICBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXQgcmVmPXtkb21FbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgIGlucHV0ID0gZG9tRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0FERF9UT0RPJyxcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBpbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBpZDogbmV4dFRvZG9JZCsrXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBZGQgdG9kb1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfTtcbiAgICBcbiAgICBjbGFzcyBWaXNpYmxlVG9kb0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcbiAgICBcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PlxuICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgXG4gICAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgIFxuICAgICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICBcbiAgICAgICAgICA8VG9kb0xpc3QgdG9kb3M9e1xuICAgICAgICAgICAgICAgICAgICBnZXRWaXNpYmxlVG9kb3MoXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGUudG9kb3MsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGUudmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9uVG9kb0NsaWNrPXtpZCA9PlxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1RPR0dMRV9UT0RPJyxcbiAgICAgICAgICAgICAgICAgICAgICBpZDogaWRcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgIFxuICAgICAgICA8cD5cbiAgICAgICAgICB7J1Nob3c6ICd9XG4gICAgICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPSdTSE9XX0FMTCc+XG4gICAgICAgICAgICBBbGxcbiAgICAgICAgICA8L0ZpbHRlckxpbms+XG4gICAgICAgICAgeycgLSAnfVxuICAgICAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19DT01QTEVURUQnPlxuICAgICAgICAgICAgQ29tcGxldGVkXG4gICAgICAgICAgPC9GaWx0ZXJMaW5rPlxuICAgICAgICAgIHsnIC0gJ31cbiAgICAgICAgICA8RmlsdGVyTGluayBmaWx0ZXI9J1NIT1dfQUNUSVZFJz5cbiAgICAgICAgICAgIEFjdGl2ZVxuICAgICAgICAgIDwvRmlsdGVyTGluaz5cbiAgICAgICAgPC9wPlxuICAgICAgKTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IFRvZG9BcHAgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgIFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxBZGRUb2RvIC8+XG4gICAgICAgICAgPFZpc2libGVUb2RvTGlzdCAvPlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH07XG4gICAgXG4gICAgY2xhc3MgUHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdG9yZTogdGhpcy5wcm9wcy5zdG9yZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCByb290RE9NRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5cbiAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e2NyZWF0ZVN0b3JlKHRvZG9BcHApfT5cbiAgICAgICAgPFRvZG9BcHAgLz5cbiAgICAgIDwvUHJvdmlkZXI+LFxuICAgICAgcm9vdERPTUVsZW1lbnRcbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVkdXhBcHA7XG4iXX0=