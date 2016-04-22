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

// const addCounter = (list) => {
//   list = [...list, 0];
//
//   return list;
// };
//
// const removeCounter = (list, index) => {
//   list = [
//     ...list.slice(0, index),
//     ...list.slice(index + 1)
//   ];
//
//   return list;
// };
//
// const incrementCounter = (list, index) => {
//   list = [
//     ...list.slice(0, index),
//     list[index] + 1,
//     ...list.slice(index + 1)
//   ];
//
//   return list;
// };
//
// const testAddCounter = () => {
//   const listBefore = [];
//   const listAfter = [0];
//
//   deepFreeze(listBefore);
//
//   expect(
//     addCounter(listBefore)
//   ).toEqual(listAfter);
// };
//
// const testRemoveCounter = () => {
//   const listBefore = [0, 10, 20];
//   const listAfter = [0, 20];
//
//   deepFreeze(listBefore);
//
//   expect(
//     removeCounter(listBefore, 1)
//   ).toEqual(listAfter);
// };
//
// const testIncrementCounter = () => {
//   const listBefore = [0, 10, 20];
//   const listAfter = [0, 11, 20];
//
//   deepFreeze(listBefore);
//
//   expect(
//     incrementCounter(listBefore, 1)
//   ).toEqual(listAfter);
// };
//
// testAddCounter();
// testRemoveCounter();
// testIncrementCounter();
//
// console.log('All tests passed.')

// static run() {
//   var rootDOMElement = document.getElementById('root');
//
//   const counter = (state = 0, action) => {
//     switch (action.type) {
//       case 'INCREMENT':
//         return state + 1;
//       case 'DECREMENT':
//         return state - 1;
//       default:
//         return state;
//     }
//   };
//
//   const Counter = ({ value, onIncrement, onDecrement }) => (
//     <div>
//       <h1>{value}</h1>
//       <button onClick={onIncrement}>+</button>
//       <button onClick={onDecrement}>-</button>
//     </div>
//   );
//
//   const { createStore } = redux;
//   const store = createStore(counter);
//
//   const render = () => {
//     ReactDOM.render(
//       <Counter
//         value={store.getState()}
//         onIncrement={() => {
//           store.dispatch({
//             type: 'INCREMENT'
//           })
//         }}
//         onDecrement={() => {
//           store.dispatch({
//             type: 'DECREMENT'
//           })
//         }}
//       />,
//       rootDOMElement
//     );
//   };
//
//   store.subscribe(render);
//
//   render();
//
//   expect(
//       counter(0, { type: 'INCREMENT' })
//   ).toEqual(1);
//
//   expect(
//       counter(1, { type: 'INCREMENT' })
//   ).toEqual(2);
//
//   expect(
//       counter(2, { type: 'DECREMENT' })
//   ).toEqual(1);
//
//   expect(
//       counter(1, { type: 'DECREMENT' })
//   ).toEqual(0);
//
//   expect(
//       counter(1, { type: 'SOMETHING_ELSE'} )
//   ).toEqual(1);
//
//   expect(
//       counter(undefined, {})
//   ).toEqual(0);
//
//   console.log('Tests passed!')
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWR1eEFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSSxRQUFRLFFBQVEsT0FBUixDQUFSO0lBQ0EsU0FBVSxRQUFRLFFBQVIsQ0FBVjtJQUNBLGFBQWEsUUFBUSxhQUFSLENBQWI7O0FBRUosSUFBSSxXQUFXLFFBQVEsYUFBUixDQUFYO0lBQ0EsV0FBVyxTQUFTLFFBQVQ7SUFDWCxRQUFRLFNBQVMsS0FBVDs7SUFFTjtBQUNKLFdBREksUUFDSixHQUFjOzBCQURWLFVBQ1U7R0FBZDs7ZUFESTs7MEJBS1M7QUFDWCxVQUFJLGlCQUFpQixTQUFTLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBakIsQ0FETzs7QUFHWCxVQUFNLE9BQU8sU0FBUCxJQUFPLENBQUMsS0FBRCxFQUFRLE1BQVIsRUFBbUI7QUFDOUIsZ0JBQVEsT0FBTyxJQUFQO0FBQ04sZUFBSyxVQUFMO0FBQ0UsbUJBQU87QUFDTCxrQkFBSSxPQUFPLEVBQVA7QUFDSixvQkFBTSxPQUFPLElBQVA7QUFDTix5QkFBVyxLQUFYO2FBSEYsQ0FERjs7QUFERixlQVFPLGFBQUw7QUFDRSxnQkFBSSxNQUFNLEVBQU4sS0FBYSxPQUFPLEVBQVAsRUFBVztBQUMxQixxQkFBTyxLQUFQLENBRDBCO2FBQTVCOztBQUlBLG1CQUFPLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBbEIsRUFBeUI7QUFDOUIseUJBQVcsQ0FBQyxNQUFNLFNBQU47YUFEUCxDQUFQLENBTEY7O0FBUkY7QUFrQkksbUJBQU8sS0FBUCxDQURGO0FBakJGLFNBRDhCO09BQW5CLENBSEY7O0FBMEJYLFVBQU0sUUFBUSxTQUFSLEtBQVEsR0FBd0I7WUFBdkIsOERBQVEsa0JBQWU7WUFBWCxzQkFBVzs7QUFDcEMsZ0JBQVEsT0FBTyxJQUFQO0FBQ04sZUFBSyxVQUFMO0FBQ0UsZ0RBQ0ssU0FDSCxLQUFLLFNBQUwsRUFBZ0IsTUFBaEIsR0FGRixDQURGOztBQURGLGVB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QVZIO1VBV0U7QUFBQyxzQkFBRDtjQUFZLFFBQU8sZ0JBQVAsRUFBd0IsT0FBTyxLQUFQLEVBQXBDOztXQVhGOztPQUphLENBeE9KOztBQTZQWCxVQUFNLFVBQVUsU0FBVixPQUFVO1lBQ2Q7ZUFHQTs7O1VBQ0Usb0JBQUMsT0FBRCxJQUFTLE9BQU8sS0FBUCxFQUFULENBREY7VUFFRSxvQkFBQyxlQUFELElBQWlCLE9BQU8sS0FBUCxFQUFqQixDQUZGO1VBR0Usb0JBQUMsTUFBRCxJQUFRLE9BQU8sS0FBUCxFQUFSLENBSEY7O09BSmMsQ0E3UEw7O1VBd1FILGNBQWdCLE1BQWhCLFlBeFFHOzs7QUEwUVgsZUFBUyxNQUFULENBQ0Usb0JBQUMsT0FBRCxJQUFTLE9BQU8sWUFBWSxPQUFaLENBQVAsRUFBVCxDQURGLEVBRUUsY0FGRixFQTFRVzs7OztTQUxUOzs7QUFzUk4sT0FBTyxPQUFQLEdBQWlCLFFBQWpCIiwiZmlsZSI6InJlZHV4QXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVkdXggPSByZXF1aXJlKCdyZWR1eCcpLFxuICAgIGV4cGVjdCAgPSByZXF1aXJlKCdleHBlY3QnKSxcbiAgICBkZWVwRnJlZXplID0gcmVxdWlyZSgnZGVlcC1mcmVlemUnKTtcblxudmFyIHJlYWN0aW9uID0gcmVxdWlyZSgnLi4vLi4vaW5kZXgnKSxcbiAgICBSZWFjdERPTSA9IHJlYWN0aW9uLlJlYWN0RE9NLFxuICAgIFJlYWN0ID0gcmVhY3Rpb24uUmVhY3Q7XG5cbmNsYXNzIFJlZHV4QXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIHN0YXRpYyBydW4oKSB7XG4gICAgdmFyIHJvb3RET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblxuICAgIGNvbnN0IHRvZG8gPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdBRERfVE9ETyc6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBhY3Rpb24uaWQsXG4gICAgICAgICAgICB0ZXh0OiBhY3Rpb24udGV4dCxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICAgICAgICB9O1xuXG4gICAgICAgIGNhc2UgJ1RPR0dMRV9UT0RPJzpcbiAgICAgICAgICBpZiAoc3RhdGUuaWQgIT09IGFjdGlvbi5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgY29tcGxldGVkOiAhc3RhdGUuY29tcGxldGVkXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHRvZG9zID0gKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xuICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdBRERfVE9ETyc6XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgdG9kbyh1bmRlZmluZWQsIGFjdGlvbilcbiAgICAgICAgICBdO1xuXG4gICAgICAgIGNhc2UgJ1RPR0dMRV9UT0RPJzpcbiAgICAgICAgICByZXR1cm4gc3RhdGUubWFwKHQgPT4gdG9kbyh0LCBhY3Rpb24pKTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdmlzaWJpbGl0eUZpbHRlciA9ICggc3RhdGUgPSAnU0hPV19BTEwnLCBhY3Rpb24pID0+IHtcbiAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnU0VUX1ZJU0lCSUxJVFlfRklMVEVSJzpcbiAgICAgICAgICByZXR1cm4gYWN0aW9uLmZpbHRlcjtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgeyBjb21iaW5lUmVkdWNlcnMgfSA9IFJlZHV4O1xuXG4gICAgY29uc3QgdG9kb0FwcCA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgICB0b2RvczogdG9kb3MsXG4gICAgICB2aXNpYmlsaXR5RmlsdGVyOiB2aXNpYmlsaXR5RmlsdGVyXG4gICAgfSk7XG5cbiAgICBjb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbiAgICBjb25zdCBnZXRWaXNpYmxlVG9kb3MgPSAoXG4gICAgICAgIHRvZG9zLFxuICAgICAgICBmaWx0ZXJcbiAgICApID0+IHtcbiAgICAgIHN3aXRjaCAoZmlsdGVyKSB7XG4gICAgICAgIGNhc2UgJ1NIT1dfQUxMJzpcbiAgICAgICAgICByZXR1cm4gdG9kb3M7XG5cbiAgICAgICAgY2FzZSAnU0hPV19DT01QTEVURUQnOlxuICAgICAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIoXG4gICAgICAgICAgICAgIHQgPT4gdC5jb21wbGV0ZWRcbiAgICAgICAgICApO1xuXG4gICAgICAgIGNhc2UgJ1NIT1dfQUNUSVZFJzpcbiAgICAgICAgICByZXR1cm4gdG9kb3MuZmlsdGVyKFxuICAgICAgICAgICAgICB0ID0+ICF0LmNvbXBsZXRlZFxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IFRvZG8gPSAoe1xuICAgICAgb25DbGljayxcbiAgICAgIGNvbXBsZXRlZCxcbiAgICAgIHRleHRcbiAgICB9KSA9PiAoXG5cbiAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgIHN0eWxlPXt7dGV4dERlY29yYXRpb246XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgJ2xpbmUtdGhyb3VnaCcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgJ25vbmUnfX1cbiAgICAgID5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2xpPlxuICAgICk7XG5cbiAgICBjb25zdCBUb2RvTGlzdCA9ICh7XG4gICAgICB0b2RvcyxcbiAgICAgIG9uVG9kb0NsaWNrXG4gICAgfSkgPT4gKFxuXG4gICAgICA8dWw+XG4gICAgICAgIHt0b2Rvcy5tYXAodG9kbyA9PiA8VG9kbyB0ZXh0PXt0b2RvLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQ9e3RvZG8uY29tcGxldGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub2RvQ2xpY2sodG9kby5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KX1cbiAgICAgIDwvdWw+XG4gICAgKTtcblxuICAgIGNvbnN0IExpbmsgPSAoe1xuICAgICAgYWN0aXZlLFxuICAgICAgb25DbGljayxcbiAgICAgIGNoaWxkcmVuXG4gICAgfSkgPT4ge1xuICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gPHNwYW4+e2NoaWxkcmVufTwvc3Bhbj47XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGEgaHJlZj0nIydcbiAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgIG9uQ2xpY2soKTtcbiAgICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L2E+XG4gICAgICApO1xuICAgIH07XG5cbiAgICBjbGFzcyBGaWx0ZXJMaW5rIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT5cbiAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxMaW5rIGFjdGl2ZT17XG4gICAgICAgICAgICAgICAgICBwcm9wcy5maWx0ZXIgPT09IHN0YXRlLnZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NFVF9WSVNJQklMSVRZX0ZJTFRFUicsXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogcHJvcHMuZmlsdGVyXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBuZXh0VG9kb0lkID0gMDtcbiAgICBjb25zdCBBZGRUb2RvID0gKHtcbiAgICAgIHN0b3JlXG4gICAgfSkgPT4ge1xuICAgICAgbGV0IGlucHV0O1xuXG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlucHV0IHJlZj17bm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgICBpbnB1dCA9IG5vZGU7XG4gICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdBRERfVE9ETycsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogaW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IG5leHRUb2RvSWQrK1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQWRkIHRvZG9cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH07XG5cbiAgICBjbGFzcyBWaXNpYmxlVG9kb0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PlxuICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuXG4gICAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgPFRvZG9MaXN0IHRvZG9zPXtcbiAgICAgICAgICAgICAgICAgICAgICBnZXRWaXNpYmxlVG9kb3MoXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS50b2RvcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb25Ub2RvQ2xpY2s9e2lkID0+XG4gICAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1RPR0dMRV9UT0RPJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IEZvb3RlciA9ICh7XG4gICAgICBzdG9yZVxuICAgIH0pID0+IChcblxuICAgICAgPHA+XG4gICAgICAgIFNob3c6XG4gICAgICAgIHsnICd9XG4gICAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19BTEwnIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgQWxsXG4gICAgICAgIDwvRmlsdGVyTGluaz5cbiAgICAgICAgeycgJ31cbiAgICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPSdTSE9XX0FDVElWRScgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICBBY3RpdmVcbiAgICAgICAgPC9GaWx0ZXJMaW5rPlxuICAgICAgICB7JyAnfVxuICAgICAgICA8RmlsdGVyTGluayBmaWx0ZXI9J1NIT1dfQ09NUExFVEVEJyBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgIENvbXBsZXRlZFxuICAgICAgICA8L0ZpbHRlckxpbms+XG4gICAgICA8L3A+XG4gICAgKTtcblxuICAgIGNvbnN0IFRvZG9BcHAgPSAoe1xuICAgICAgc3RvcmVcbiAgICB9KSA9PiAoXG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxBZGRUb2RvIHN0b3JlPXtzdG9yZX0vPlxuICAgICAgICA8VmlzaWJsZVRvZG9MaXN0IHN0b3JlPXtzdG9yZX0vPlxuICAgICAgICA8Rm9vdGVyIHN0b3JlPXtzdG9yZX0vPlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIGNvbnN0IHsgY3JlYXRlU3RvcmUgfSA9IFJlZHV4O1xuXG4gICAgUmVhY3RET00ucmVuZGVyKFxuICAgICAgPFRvZG9BcHAgc3RvcmU9e2NyZWF0ZVN0b3JlKHRvZG9BcHApfSAvPixcbiAgICAgIHJvb3RET01FbGVtZW50XG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZHV4QXBwO1xuXG4vLyBjb25zdCBhZGRDb3VudGVyID0gKGxpc3QpID0+IHtcbi8vICAgbGlzdCA9IFsuLi5saXN0LCAwXTtcbi8vXG4vLyAgIHJldHVybiBsaXN0O1xuLy8gfTtcbi8vXG4vLyBjb25zdCByZW1vdmVDb3VudGVyID0gKGxpc3QsIGluZGV4KSA9PiB7XG4vLyAgIGxpc3QgPSBbXG4vLyAgICAgLi4ubGlzdC5zbGljZSgwLCBpbmRleCksXG4vLyAgICAgLi4ubGlzdC5zbGljZShpbmRleCArIDEpXG4vLyAgIF07XG4vL1xuLy8gICByZXR1cm4gbGlzdDtcbi8vIH07XG4vL1xuLy8gY29uc3QgaW5jcmVtZW50Q291bnRlciA9IChsaXN0LCBpbmRleCkgPT4ge1xuLy8gICBsaXN0ID0gW1xuLy8gICAgIC4uLmxpc3Quc2xpY2UoMCwgaW5kZXgpLFxuLy8gICAgIGxpc3RbaW5kZXhdICsgMSxcbi8vICAgICAuLi5saXN0LnNsaWNlKGluZGV4ICsgMSlcbi8vICAgXTtcbi8vXG4vLyAgIHJldHVybiBsaXN0O1xuLy8gfTtcbi8vXG4vLyBjb25zdCB0ZXN0QWRkQ291bnRlciA9ICgpID0+IHtcbi8vICAgY29uc3QgbGlzdEJlZm9yZSA9IFtdO1xuLy8gICBjb25zdCBsaXN0QWZ0ZXIgPSBbMF07XG4vL1xuLy8gICBkZWVwRnJlZXplKGxpc3RCZWZvcmUpO1xuLy9cbi8vICAgZXhwZWN0KFxuLy8gICAgIGFkZENvdW50ZXIobGlzdEJlZm9yZSlcbi8vICAgKS50b0VxdWFsKGxpc3RBZnRlcik7XG4vLyB9O1xuLy9cbi8vIGNvbnN0IHRlc3RSZW1vdmVDb3VudGVyID0gKCkgPT4ge1xuLy8gICBjb25zdCBsaXN0QmVmb3JlID0gWzAsIDEwLCAyMF07XG4vLyAgIGNvbnN0IGxpc3RBZnRlciA9IFswLCAyMF07XG4vL1xuLy8gICBkZWVwRnJlZXplKGxpc3RCZWZvcmUpO1xuLy9cbi8vICAgZXhwZWN0KFxuLy8gICAgIHJlbW92ZUNvdW50ZXIobGlzdEJlZm9yZSwgMSlcbi8vICAgKS50b0VxdWFsKGxpc3RBZnRlcik7XG4vLyB9O1xuLy9cbi8vIGNvbnN0IHRlc3RJbmNyZW1lbnRDb3VudGVyID0gKCkgPT4ge1xuLy8gICBjb25zdCBsaXN0QmVmb3JlID0gWzAsIDEwLCAyMF07XG4vLyAgIGNvbnN0IGxpc3RBZnRlciA9IFswLCAxMSwgMjBdO1xuLy9cbi8vICAgZGVlcEZyZWV6ZShsaXN0QmVmb3JlKTtcbi8vXG4vLyAgIGV4cGVjdChcbi8vICAgICBpbmNyZW1lbnRDb3VudGVyKGxpc3RCZWZvcmUsIDEpXG4vLyAgICkudG9FcXVhbChsaXN0QWZ0ZXIpO1xuLy8gfTtcbi8vXG4vLyB0ZXN0QWRkQ291bnRlcigpO1xuLy8gdGVzdFJlbW92ZUNvdW50ZXIoKTtcbi8vIHRlc3RJbmNyZW1lbnRDb3VudGVyKCk7XG4vL1xuLy8gY29uc29sZS5sb2coJ0FsbCB0ZXN0cyBwYXNzZWQuJylcblxuLy8gc3RhdGljIHJ1bigpIHtcbi8vICAgdmFyIHJvb3RET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcbi8vXG4vLyAgIGNvbnN0IGNvdW50ZXIgPSAoc3RhdGUgPSAwLCBhY3Rpb24pID0+IHtcbi8vICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4vLyAgICAgICBjYXNlICdJTkNSRU1FTlQnOlxuLy8gICAgICAgICByZXR1cm4gc3RhdGUgKyAxO1xuLy8gICAgICAgY2FzZSAnREVDUkVNRU5UJzpcbi8vICAgICAgICAgcmV0dXJuIHN0YXRlIC0gMTtcbi8vICAgICAgIGRlZmF1bHQ6XG4vLyAgICAgICAgIHJldHVybiBzdGF0ZTtcbi8vICAgICB9XG4vLyAgIH07XG4vL1xuLy8gICBjb25zdCBDb3VudGVyID0gKHsgdmFsdWUsIG9uSW5jcmVtZW50LCBvbkRlY3JlbWVudCB9KSA9PiAoXG4vLyAgICAgPGRpdj5cbi8vICAgICAgIDxoMT57dmFsdWV9PC9oMT5cbi8vICAgICAgIDxidXR0b24gb25DbGljaz17b25JbmNyZW1lbnR9Pis8L2J1dHRvbj5cbi8vICAgICAgIDxidXR0b24gb25DbGljaz17b25EZWNyZW1lbnR9Pi08L2J1dHRvbj5cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vXG4vLyAgIGNvbnN0IHsgY3JlYXRlU3RvcmUgfSA9IHJlZHV4O1xuLy8gICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKGNvdW50ZXIpO1xuLy9cbi8vICAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuLy8gICAgIFJlYWN0RE9NLnJlbmRlcihcbi8vICAgICAgIDxDb3VudGVyXG4vLyAgICAgICAgIHZhbHVlPXtzdG9yZS5nZXRTdGF0ZSgpfVxuLy8gICAgICAgICBvbkluY3JlbWVudD17KCkgPT4ge1xuLy8gICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbi8vICAgICAgICAgICAgIHR5cGU6ICdJTkNSRU1FTlQnXG4vLyAgICAgICAgICAgfSlcbi8vICAgICAgICAgfX1cbi8vICAgICAgICAgb25EZWNyZW1lbnQ9eygpID0+IHtcbi8vICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4vLyAgICAgICAgICAgICB0eXBlOiAnREVDUkVNRU5UJ1xuLy8gICAgICAgICAgIH0pXG4vLyAgICAgICAgIH19XG4vLyAgICAgICAvPixcbi8vICAgICAgIHJvb3RET01FbGVtZW50XG4vLyAgICAgKTtcbi8vICAgfTtcbi8vXG4vLyAgIHN0b3JlLnN1YnNjcmliZShyZW5kZXIpO1xuLy9cbi8vICAgcmVuZGVyKCk7XG4vL1xuLy8gICBleHBlY3QoXG4vLyAgICAgICBjb3VudGVyKDAsIHsgdHlwZTogJ0lOQ1JFTUVOVCcgfSlcbi8vICAgKS50b0VxdWFsKDEpO1xuLy9cbi8vICAgZXhwZWN0KFxuLy8gICAgICAgY291bnRlcigxLCB7IHR5cGU6ICdJTkNSRU1FTlQnIH0pXG4vLyAgICkudG9FcXVhbCgyKTtcbi8vXG4vLyAgIGV4cGVjdChcbi8vICAgICAgIGNvdW50ZXIoMiwgeyB0eXBlOiAnREVDUkVNRU5UJyB9KVxuLy8gICApLnRvRXF1YWwoMSk7XG4vL1xuLy8gICBleHBlY3QoXG4vLyAgICAgICBjb3VudGVyKDEsIHsgdHlwZTogJ0RFQ1JFTUVOVCcgfSlcbi8vICAgKS50b0VxdWFsKDApO1xuLy9cbi8vICAgZXhwZWN0KFxuLy8gICAgICAgY291bnRlcigxLCB7IHR5cGU6ICdTT01FVEhJTkdfRUxTRSd9IClcbi8vICAgKS50b0VxdWFsKDEpO1xuLy9cbi8vICAgZXhwZWN0KFxuLy8gICAgICAgY291bnRlcih1bmRlZmluZWQsIHt9KVxuLy8gICApLnRvRXF1YWwoMCk7XG4vL1xuLy8gICBjb25zb2xlLmxvZygnVGVzdHMgcGFzc2VkIScpXG4vLyB9XG4iXX0=