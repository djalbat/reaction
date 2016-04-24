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

          return _possibleConstructorReturn(this, Object.getPrototypeOf(VisibleTodoList).apply(this, arguments));
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
            { filter: 'SHOW_ACTIVE' },
            'Active'
          ),
          ' - ',
          React.createElement(
            FilterLink,
            { filter: 'SHOW_COMPLETED' },
            'Completed'
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

          return _possibleConstructorReturn(this, Object.getPrototypeOf(Provider).apply(this, arguments));
        }

        _createClass(Provider, [{
          key: 'getChildContext',
          value: function getChildContext() {
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

      var createStore = Redux.createStore;


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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWR1eEFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSSxRQUFRLFFBQVEsT0FBUixDQUFSOztBQUVKLElBQUksV0FBVyxRQUFRLGFBQVIsQ0FBWDtJQUNBLFdBQVcsU0FBUyxRQUFUO0lBQ1gsUUFBUSxTQUFTLEtBQVQ7O0lBRU47QUFDSixXQURJLFFBQ0osR0FBYzswQkFEVixVQUNVO0dBQWQ7O2VBREk7OzBCQUtTO0FBQ1gsVUFBTSxpQkFBaUIsU0FBUyxjQUFULENBQXdCLE1BQXhCLENBQWpCLENBREs7O0FBR1gsVUFBTSxPQUFPLFNBQVAsSUFBTyxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQW1CO0FBQzlCLGdCQUFRLE9BQU8sSUFBUDtBQUNOLGVBQUssVUFBTDtBQUNFLG1CQUFPO0FBQ0wsa0JBQUksT0FBTyxFQUFQO0FBQ0osb0JBQU0sT0FBTyxJQUFQO0FBQ04seUJBQVcsS0FBWDthQUhGLENBREY7O0FBREYsZUFRTyxhQUFMO0FBQ0UsZ0JBQUksTUFBTSxFQUFOLEtBQWEsT0FBTyxFQUFQLEVBQVc7QUFDMUIscUJBQU8sS0FBUCxDQUQwQjthQUE1Qjs7QUFJQSxtQkFBTyxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQWxCLEVBQXlCO0FBQzlCLHlCQUFXLENBQUMsTUFBTSxTQUFOO2FBRFAsQ0FBUCxDQUxGOztBQVJGO0FBa0JJLG1CQUFPLEtBQVAsQ0FERjtBQWpCRixTQUQ4QjtPQUFuQixDQUhGOztBQTBCWCxVQUFNLFFBQVEsU0FBUixLQUFRLEdBQXdCO1lBQXZCLDhEQUFRLGtCQUFlO1lBQVgsc0JBQVc7O0FBQ3BDLGdCQUFRLE9BQU8sSUFBUDtBQUNOLGVBQUssVUFBTDtBQUNFLGdEQUNLLFNBQ0gsS0FBSyxTQUFMLEVBQWdCLE1BQWhCLEdBRkYsQ0FERjs7QUFERixlQU9PLGFBQUw7QUFDRSxtQkFBTyxNQUFNLEdBQU4sQ0FBVTtxQkFBSyxLQUFLLENBQUws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O09BRmEsQ0ExT0o7O0FBNFBYLFVBQU0sVUFBVSxTQUFWLE9BQVU7ZUFFZDs7O1VBQ0Usb0JBQUMsT0FBRCxPQURGO1VBRUUsb0JBQUMsZUFBRCxPQUZGO1VBR0Usb0JBQUMsTUFBRCxPQUhGOztPQUZjLENBNVBMOztVQXFRTDs7Ozs7Ozs7Ozs7NENBQ2M7QUFDaEIsbUJBQU87QUFDTCxxQkFBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYO2FBRFQsQ0FEZ0I7Ozs7bUNBS1Q7QUFDUCxtQkFBTyxLQUFLLEtBQUwsQ0FBVyxRQUFYLENBREE7Ozs7ZUFOTDtRQUFpQixXQXJRWjs7VUFnUkgsY0FBZ0IsTUFBaEIsWUFoUkc7OztBQWtSWCxlQUFTLE1BQVQsQ0FDRTtBQUFDLGdCQUFEO1VBQVUsT0FBTyxZQUFZLE9BQVosQ0FBUCxFQUFWO1FBQ0Usb0JBQUMsT0FBRCxPQURGO09BREYsRUFJRSxjQUpGLEVBbFJXOzs7O1NBTFQ7OztBQWdTTixPQUFPLE9BQVAsR0FBaUIsUUFBakIiLCJmaWxlIjoicmVkdXhBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSZWR1eCA9IHJlcXVpcmUoJ3JlZHV4Jyk7XG5cbnZhciByZWFjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2luZGV4JyksXG4gICAgUmVhY3RET00gPSByZWFjdGlvbi5SZWFjdERPTSxcbiAgICBSZWFjdCA9IHJlYWN0aW9uLlJlYWN0O1xuXG5jbGFzcyBSZWR1eEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICBzdGF0aWMgcnVuKCkge1xuICAgIGNvbnN0IHJvb3RET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblxuICAgIGNvbnN0IHRvZG8gPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdBRERfVE9ETyc6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBhY3Rpb24uaWQsXG4gICAgICAgICAgICB0ZXh0OiBhY3Rpb24udGV4dCxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICAgICAgICB9O1xuXG4gICAgICAgIGNhc2UgJ1RPR0dMRV9UT0RPJzpcbiAgICAgICAgICBpZiAoc3RhdGUuaWQgIT09IGFjdGlvbi5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgY29tcGxldGVkOiAhc3RhdGUuY29tcGxldGVkXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHRvZG9zID0gKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xuICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdBRERfVE9ETyc6XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgdG9kbyh1bmRlZmluZWQsIGFjdGlvbilcbiAgICAgICAgICBdO1xuXG4gICAgICAgIGNhc2UgJ1RPR0dMRV9UT0RPJzpcbiAgICAgICAgICByZXR1cm4gc3RhdGUubWFwKHQgPT4gdG9kbyh0LCBhY3Rpb24pKTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdmlzaWJpbGl0eUZpbHRlciA9ICggc3RhdGUgPSAnU0hPV19BTEwnLCBhY3Rpb24pID0+IHtcbiAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnU0VUX1ZJU0lCSUxJVFlfRklMVEVSJzpcbiAgICAgICAgICByZXR1cm4gYWN0aW9uLmZpbHRlcjtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgeyBjb21iaW5lUmVkdWNlcnMgfSA9IFJlZHV4O1xuXG4gICAgY29uc3QgdG9kb0FwcCA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgICB0b2RvczogdG9kb3MsXG4gICAgICB2aXNpYmlsaXR5RmlsdGVyOiB2aXNpYmlsaXR5RmlsdGVyXG4gICAgfSk7XG5cbiAgICBjb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbiAgICBjb25zdCBnZXRWaXNpYmxlVG9kb3MgPSAoXG4gICAgICB0b2RvcyxcbiAgICAgIGZpbHRlclxuICAgICkgPT4ge1xuICAgICAgc3dpdGNoIChmaWx0ZXIpIHtcbiAgICAgICAgY2FzZSAnU0hPV19BTEwnOlxuICAgICAgICAgIHJldHVybiB0b2RvcztcblxuICAgICAgICBjYXNlICdTSE9XX0NPTVBMRVRFRCc6XG4gICAgICAgICAgcmV0dXJuIHRvZG9zLmZpbHRlcihcbiAgICAgICAgICAgICAgdCA9PiB0LmNvbXBsZXRlZFxuICAgICAgICAgICk7XG5cbiAgICAgICAgY2FzZSAnU0hPV19BQ1RJVkUnOlxuICAgICAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIoXG4gICAgICAgICAgICAgIHQgPT4gIXQuY29tcGxldGVkXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgVG9kbyA9ICh7XG4gICAgICBvbkNsaWNrLFxuICAgICAgY29tcGxldGVkLFxuICAgICAgdGV4dFxuICAgIH0pID0+IChcblxuICAgICAgPGxpIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkID9cbiAgICAgICAgICAgICAgICAgICAgICAnbGluZS10aHJvdWdoJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAnbm9uZSd9fVxuICAgICAgPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvbGk+XG4gICAgKTtcblxuICAgIGNvbnN0IFRvZG9MaXN0ID0gKHtcbiAgICAgIHRvZG9zLFxuICAgICAgb25Ub2RvQ2xpY2tcbiAgICB9KSA9PiAgKFxuXG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7dG9kb3MubWFwKHRvZG8gPT4gPFRvZG8gdGV4dD17dG9kby50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQ9e3RvZG8uY29tcGxldGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub2RvQ2xpY2sodG9kby5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgLz4pfVxuICAgICAgICA8L3VsPlxuICAgICk7XG5cbiAgICBjb25zdCBMaW5rID0gKFxuICAgICAgcHJvcHNcbiAgICApID0+IHtcbiAgICAgIGNvbnN0IHsgYWN0aXZlLCBvbkNsaWNrIH0gPSBwcm9wcztcblxuICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gPHNwYW4+e3Byb3BzLmNoaWxkcmVufTwvc3Bhbj47XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGEgaHJlZj0nIydcbiAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgIG9uQ2xpY2soKTtcbiAgICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2E+XG4gICAgICApO1xuICAgIH07XG5cbiAgICBjbGFzcyBGaWx0ZXJMaW5rIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PiBcbiAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TGluayBhY3RpdmU9e1xuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5maWx0ZXIgPT09IHN0YXRlLnZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NFVF9WSVNJQklMSVRZX0ZJTFRFUicsXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogdGhpcy5wcm9wcy5maWx0ZXJcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgbmV4dFRvZG9JZCA9IDA7XG4gICAgY29uc3QgQWRkVG9kbyA9IChcbiAgICAgIHByb3BzLFxuICAgICAge1xuICAgICAgICBzdG9yZVxuICAgICAgfVxuICAgICkgPT4ge1xuICAgICAgbGV0IGlucHV0O1xuXG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlucHV0IHJlZj17ZG9tRWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICBpbnB1dCA9IGRvbUVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdBRERfVE9ETycsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogaW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IG5leHRUb2RvSWQrK1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQWRkIHRvZG9cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH07XG5cbiAgICBjbGFzcyBWaXNpYmxlVG9kb0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+XG4gICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG5cbiAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgIDxUb2RvTGlzdCB0b2Rvcz17XG4gICAgICAgICAgICAgICAgICAgICAgZ2V0VmlzaWJsZVRvZG9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUudG9kb3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS52aXNpYmlsaXR5RmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9uVG9kb0NsaWNrPXtpZCA9PlxuICAgICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdUT0dHTEVfVE9ETycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaWRcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuXG4gICAgICA8cD5cbiAgICAgICAgeydTaG93OiAnfVxuICAgICAgICA8RmlsdGVyTGluayBmaWx0ZXI9J1NIT1dfQUxMJz5cbiAgICAgICAgICBBbGxcbiAgICAgICAgPC9GaWx0ZXJMaW5rPlxuICAgICAgICB7JyAtICd9XG4gICAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19BQ1RJVkUnPlxuICAgICAgICAgIEFjdGl2ZVxuICAgICAgICA8L0ZpbHRlckxpbms+XG4gICAgICAgIHsnIC0gJ31cbiAgICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPSdTSE9XX0NPTVBMRVRFRCc+XG4gICAgICAgICAgQ29tcGxldGVkXG4gICAgICAgIDwvRmlsdGVyTGluaz5cbiAgICAgIDwvcD5cbiAgICApO1xuXG4gICAgY29uc3QgVG9kb0FwcCA9ICgpID0+IChcblxuICAgICAgPGRpdj5cbiAgICAgICAgPEFkZFRvZG8gLz5cbiAgICAgICAgPFZpc2libGVUb2RvTGlzdCAvPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgY2xhc3MgUHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0b3JlOiB0aGlzLnByb3BzLnN0b3JlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHsgY3JlYXRlU3RvcmUgfSA9IFJlZHV4O1xuXG4gICAgUmVhY3RET00ucmVuZGVyKFxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtjcmVhdGVTdG9yZSh0b2RvQXBwKX0+XG4gICAgICAgIDxUb2RvQXBwIC8+XG4gICAgICA8L1Byb3ZpZGVyPixcbiAgICAgIHJvb3RET01FbGVtZW50XG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZHV4QXBwO1xuIl19