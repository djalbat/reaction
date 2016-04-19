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

      var createStore = Redux.createStore;

      var store = createStore(todoApp);

      var Component = React.Component;


      var FilterLink = function FilterLink(_ref) {
        var filter = _ref.filter;
        var currentFilter = _ref.currentFilter;
        var children = _ref.children;

        if (filter === currentFilter) {
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
              store.dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter: filter
              });
            }
          },
          children
        );
      };

      var nextTodoId = 0;

      var AddTodos = function (_Component) {
        _inherits(AddTodos, _Component);

        function AddTodos() {
          _classCallCheck(this, AddTodos);

          return _possibleConstructorReturn(this, Object.getPrototypeOf(AddTodos).apply(this, arguments));
        }

        _createClass(AddTodos, [{
          key: 'render',
          value: function render() {
            var _this2 = this;

            return React.createElement(
              'div',
              null,
              React.createElement('input', { ref: function ref(node) {
                  _this2.input = node;
                } }),
              React.createElement(
                'button',
                { onClick: function onClick() {
                    store.dispatch({
                      type: 'ADD_TODO',
                      text: _this2.input.value,
                      id: nextTodoId++
                    });
                    _this2.input.value = '';
                  } },
                'Add todo'
              )
            );
          }
        }]);

        return AddTodos;
      }(Component);

      var Todo = function Todo(_ref2) {
        var todo = _ref2.todo;
        return React.createElement(
          'li',
          { onClick: function onClick() {
              store.dispatch({
                type: 'TOGGLE_TODO',
                id: todo.id
              });
            },
            style: { textDecoration: todo.completed ? 'line-through' : 'none' }
          },
          todo.text
        );
      };

      var TodosList = function TodosList(_ref3) {
        var visibleTodos = _ref3.visibleTodos;
        return React.createElement(
          'ul',
          null,
          visibleTodos.map(function (todo) {
            return React.createElement(Todo, { todo: todo });
          })
        );
      };

      var Footer = function Footer(_ref4) {
        var visibilityFilter = _ref4.visibilityFilter;
        return React.createElement(
          'p',
          null,
          'Show:',
          ' ',
          React.createElement(
            FilterLink,
            { filter: 'SHOW_ALL', currentFilter: visibilityFilter },
            'All'
          ),
          ' ',
          React.createElement(
            FilterLink,
            { filter: 'SHOW_ACTIVE', currentFilter: visibilityFilter },
            'Active'
          ),
          ' ',
          React.createElement(
            FilterLink,
            { filter: 'SHOW_COMPLETED', currentFilter: visibilityFilter },
            'Completed'
          )
        );
      };

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

      var TodoApp = function (_Component2) {
        _inherits(TodoApp, _Component2);

        function TodoApp() {
          _classCallCheck(this, TodoApp);

          return _possibleConstructorReturn(this, Object.getPrototypeOf(TodoApp).apply(this, arguments));
        }

        _createClass(TodoApp, [{
          key: 'render',
          value: function render() {
            var _props = this.props;
            var todos = _props.todos;
            var visibilityFilter = _props.visibilityFilter;


            var visibleTodos = getVisibleTodos(todos, visibilityFilter);

            return React.createElement(
              'div',
              null,
              React.createElement(AddTodos, null),
              React.createElement(TodosList, { visibleTodos: visibleTodos }),
              React.createElement(Footer, { visibilityFilter: visibilityFilter })
            );
          }
        }]);

        return TodoApp;
      }(Component);

      var render = function render() {
        ReactDOM.render(React.createElement(TodoApp, store.getState()), rootDOMElement);
      };

      store.subscribe(render);

      render();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWR1eEFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSSxRQUFRLFFBQVEsT0FBUixDQUFSO0lBQ0EsU0FBVSxRQUFRLFFBQVIsQ0FBVjtJQUNBLGFBQWEsUUFBUSxhQUFSLENBQWI7O0FBRUosSUFBSSxXQUFXLFFBQVEsYUFBUixDQUFYO0lBQ0EsV0FBVyxTQUFTLFFBQVQ7SUFDWCxRQUFRLFNBQVMsS0FBVDs7SUFFTjtBQUNKLFdBREksUUFDSixHQUFjOzBCQURWLFVBQ1U7R0FBZDs7ZUFESTs7MEJBS1M7QUFDWCxVQUFJLGlCQUFpQixTQUFTLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBakIsQ0FETzs7QUFHWCxVQUFNLE9BQU8sU0FBUCxJQUFPLENBQUMsS0FBRCxFQUFRLE1BQVIsRUFBbUI7QUFDOUIsZ0JBQVEsT0FBTyxJQUFQO0FBQ04sZUFBSyxVQUFMO0FBQ0UsbUJBQU87QUFDTCxrQkFBSSxPQUFPLEVBQVA7QUFDSixvQkFBTSxPQUFPLElBQVA7QUFDTix5QkFBVyxLQUFYO2FBSEYsQ0FERjs7QUFERixlQVFPLGFBQUw7QUFDRSxnQkFBSSxNQUFNLEVBQU4sS0FBYSxPQUFPLEVBQVAsRUFBVztBQUMxQixxQkFBTyxLQUFQLENBRDBCO2FBQTVCOztBQUlBLG1CQUFPLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBbEIsRUFBeUI7QUFDOUIseUJBQVcsQ0FBQyxNQUFNLFNBQU47YUFEUCxDQUFQLENBTEY7O0FBUkY7QUFrQkksbUJBQU8sS0FBUCxDQURGO0FBakJGLFNBRDhCO09BQW5CLENBSEY7O0FBMEJYLFVBQU0sUUFBUSxTQUFSLEtBQVEsR0FBd0I7WUFBdkIsOERBQVEsa0JBQWU7WUFBWCxzQkFBVzs7QUFDcEMsZ0JBQVEsT0FBTyxJQUFQO0FBQ04sZUFBSyxVQUFMO0FBQ0UsZ0RBQ0ssU0FDSCxLQUFLLFNBQUwsRUFBZ0IsTUFBaEIsR0FGRixDQURGOztBQURGLGVB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c0IsRUFHbkI7QUFDSCxnQkFBUSxNQUFSO0FBQ0UsZUFBSyxVQUFMO0FBQ0UsbUJBQU8sS0FBUCxDQURGOztBQURGLGVBSU8sZ0JBQUw7QUFDRSxtQkFBTyxNQUFNLE1BQU4sQ0FDTDtxQkFBSyxFQUFFLFNBQUY7YUFBTCxDQURGLENBREY7O0FBSkYsZUFTTyxhQUFMO0FBQ0UsbUJBQU8sTUFBTSxNQUFOLENBQ0g7cUJBQUssQ0FBQyxFQUFFLFNBQUY7YUFBTixDQURKLENBREY7QUFURixTQURHO09BSG1CLENBaEtiOztVQW9MTDs7Ozs7Ozs7Ozs7bUNBQ0s7eUJBSUgsS0FBSyxLQUFMLENBSkc7Z0JBRUwscUJBRks7Z0JBR0wsMkNBSEs7OztBQU1QLGdCQUFNLGVBQWUsZ0JBQ25CLEtBRG1CLEVBRW5CLGdCQUZtQixDQUFmLENBTkM7O0FBV1AsbUJBQ0U7OztjQUNFLG9CQUFDLFFBQUQsT0FERjtjQUVFLG9CQUFDLFNBQUQsSUFBVyxjQUFjLFlBQWQsRUFBWCxDQUZGO2NBR0Usb0JBQUMsTUFBRCxJQUFRLGtCQUFrQixnQkFBbEIsRUFBUixDQUhGO2FBREYsQ0FYTzs7OztlQURMO1FBQWdCLFdBcExYOztBQTBNWCxVQUFNLFNBQVMsU0FBVCxNQUFTLEdBQU07QUFDbkIsaUJBQVMsTUFBVCxDQUNFLG9CQUFDLE9BQUQsRUFBYSxNQUFNLFFBQU4sRUFBYixDQURGLEVBRUUsY0FGRixFQURtQjtPQUFOLENBMU1KOztBQWlOWCxZQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsRUFqTlc7O0FBbU5YLGVBbk5XOzs7O1NBTFQ7OztBQTROTixPQUFPLE9BQVAsR0FBaUIsUUFBakIiLCJmaWxlIjoicmVkdXhBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSZWR1eCA9IHJlcXVpcmUoJ3JlZHV4JyksXG4gICAgZXhwZWN0ICA9IHJlcXVpcmUoJ2V4cGVjdCcpLFxuICAgIGRlZXBGcmVlemUgPSByZXF1aXJlKCdkZWVwLWZyZWV6ZScpO1xuXG52YXIgcmVhY3Rpb24gPSByZXF1aXJlKCcuLi8uLi9pbmRleCcpLFxuICAgIFJlYWN0RE9NID0gcmVhY3Rpb24uUmVhY3RET00sXG4gICAgUmVhY3QgPSByZWFjdGlvbi5SZWFjdDtcblxuY2xhc3MgUmVkdXhBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgc3RhdGljIHJ1bigpIHtcbiAgICB2YXIgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXG4gICAgY29uc3QgdG9kbyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0FERF9UT0RPJzpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGFjdGlvbi5pZCxcbiAgICAgICAgICAgIHRleHQ6IGFjdGlvbi50ZXh0LFxuICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgY2FzZSAnVE9HR0xFX1RPRE8nOlxuICAgICAgICAgIGlmIChzdGF0ZS5pZCAhPT0gYWN0aW9uLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICBjb21wbGV0ZWQ6ICFzdGF0ZS5jb21wbGV0ZWRcbiAgICAgICAgICB9KTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdG9kb3MgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0FERF9UT0RPJzpcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICB0b2RvKHVuZGVmaW5lZCwgYWN0aW9uKVxuICAgICAgICAgIF07XG5cbiAgICAgICAgY2FzZSAnVE9HR0xFX1RPRE8nOlxuICAgICAgICAgIHJldHVybiBzdGF0ZS5tYXAodCA9PiB0b2RvKHQsIGFjdGlvbikpO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB2aXNpYmlsaXR5RmlsdGVyID0gKCBzdGF0ZSA9ICdTSE9XX0FMTCcsIGFjdGlvbikgPT4ge1xuICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdTRVRfVklTSUJJTElUWV9GSUxURVInOlxuICAgICAgICAgIHJldHVybiBhY3Rpb24uZmlsdGVyO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB7IGNvbWJpbmVSZWR1Y2VycyB9ID0gUmVkdXg7XG5cbiAgICBjb25zdCB0b2RvQXBwID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICAgIHRvZG9zOiB0b2RvcyxcbiAgICAgIHZpc2liaWxpdHlGaWx0ZXI6IHZpc2liaWxpdHlGaWx0ZXJcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgY3JlYXRlU3RvcmUgfSA9IFJlZHV4O1xuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUodG9kb0FwcCk7XG5cbiAgICBjb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbiAgICBjb25zdCBGaWx0ZXJMaW5rID0gKHtcbiAgICAgIGZpbHRlcixcbiAgICAgIGN1cnJlbnRGaWx0ZXIsXG4gICAgICBjaGlsZHJlblxuICAgIH0pID0+IHtcbiAgICAgIGlmIChmaWx0ZXIgPT09IGN1cnJlbnRGaWx0ZXIpIHtcbiAgICAgICAgcmV0dXJuIDxzcGFuPntjaGlsZHJlbn08L3NwYW4+O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8YSBocmVmPScjJ1xuICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgdHlwZTogJ1NFVF9WSVNJQklMSVRZX0ZJTFRFUicsXG4gICAgICAgICAgICAgICBmaWx0ZXJcbiAgICAgICAgICAgICB9KVxuICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2E+XG4gICAgICApO1xuICAgIH07XG5cbiAgICBsZXQgbmV4dFRvZG9JZCA9IDA7XG4gICAgY2xhc3MgQWRkVG9kb3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXQgcmVmPXtub2RlID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBub2RlO1xuICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgdHlwZTogJ0FERF9UT0RPJyxcbiAgICAgICAgICAgICAgdGV4dDogdGhpcy5pbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgaWQ6IG5leHRUb2RvSWQrK1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIEFkZCB0b2RvXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBUb2RvID0gKHtcbiAgICAgIHRvZG9cbiAgICB9KSA9PiAoXG5cbiAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiB7c3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1RPR0dMRV9UT0RPJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0b2RvLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICBzdHlsZT17e3RleHREZWNvcmF0aW9uOlxuICAgICAgICAgICAgICAgICAgICB0b2RvLmNvbXBsZXRlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgJ2xpbmUtdGhyb3VnaCcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgJ25vbmUnfX1cbiAgICAgID5cbiAgICAgICAge3RvZG8udGV4dH1cbiAgICAgIDwvbGk+XG4gICAgKTtcblxuICAgIGNvbnN0IFRvZG9zTGlzdCA9ICh7XG4gICAgICB2aXNpYmxlVG9kb3NcbiAgICB9KSA9PiAoXG5cbiAgICAgIDx1bD5cbiAgICAgICAge3Zpc2libGVUb2Rvcy5tYXAodG9kbyA9PiA8VG9kbyB0b2RvPXt0b2RvfSAvPil9XG4gICAgICA8L3VsPlxuICAgICk7XG5cbiAgICBjb25zdCBGb290ZXIgPSAoe1xuICAgICAgdmlzaWJpbGl0eUZpbHRlclxuICAgIH0pID0+IChcblxuICAgICAgPHA+XG4gICAgICAgIFNob3c6XG4gICAgICAgIHsnICd9XG4gICAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19BTEwnIGN1cnJlbnRGaWx0ZXI9e3Zpc2liaWxpdHlGaWx0ZXJ9PlxuICAgICAgICAgIEFsbFxuICAgICAgICA8L0ZpbHRlckxpbms+XG4gICAgICAgIHsnICd9XG4gICAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19BQ1RJVkUnIGN1cnJlbnRGaWx0ZXI9e3Zpc2liaWxpdHlGaWx0ZXJ9PlxuICAgICAgICAgIEFjdGl2ZVxuICAgICAgICA8L0ZpbHRlckxpbms+XG4gICAgICAgIHsnICd9XG4gICAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19DT01QTEVURUQnIGN1cnJlbnRGaWx0ZXI9e3Zpc2liaWxpdHlGaWx0ZXJ9PlxuICAgICAgICAgIENvbXBsZXRlZFxuICAgICAgICA8L0ZpbHRlckxpbms+XG4gICAgICA8L3A+XG4gICAgKTtcblxuICAgIGNvbnN0IGdldFZpc2libGVUb2RvcyA9IChcbiAgICAgIHRvZG9zLFxuICAgICAgZmlsdGVyXG4gICAgKSA9PiB7XG4gICAgICBzd2l0Y2ggKGZpbHRlcikge1xuICAgICAgICBjYXNlICdTSE9XX0FMTCc6XG4gICAgICAgICAgcmV0dXJuIHRvZG9zO1xuXG4gICAgICAgIGNhc2UgJ1NIT1dfQ09NUExFVEVEJzpcbiAgICAgICAgICByZXR1cm4gdG9kb3MuZmlsdGVyKFxuICAgICAgICAgICAgdCA9PiB0LmNvbXBsZXRlZFxuICAgICAgICAgICk7XG5cbiAgICAgICAgY2FzZSAnU0hPV19BQ1RJVkUnOlxuICAgICAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIoXG4gICAgICAgICAgICAgIHQgPT4gIXQuY29tcGxldGVkXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY2xhc3MgVG9kb0FwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICB0b2RvcyxcbiAgICAgICAgICB2aXNpYmlsaXR5RmlsdGVyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IHZpc2libGVUb2RvcyA9IGdldFZpc2libGVUb2RvcyhcbiAgICAgICAgICB0b2RvcyxcbiAgICAgICAgICB2aXNpYmlsaXR5RmlsdGVyXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEFkZFRvZG9zIC8+XG4gICAgICAgICAgICA8VG9kb3NMaXN0IHZpc2libGVUb2Rvcz17dmlzaWJsZVRvZG9zfSAvPlxuICAgICAgICAgICAgPEZvb3RlciB2aXNpYmlsaXR5RmlsdGVyPXt2aXNpYmlsaXR5RmlsdGVyfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICAgIDxUb2RvQXBwIHsuLi5zdG9yZS5nZXRTdGF0ZSgpfSAvPixcbiAgICAgICAgcm9vdERPTUVsZW1lbnRcbiAgICAgICk7XG4gICAgfTtcblxuICAgIHN0b3JlLnN1YnNjcmliZShyZW5kZXIpO1xuXG4gICAgcmVuZGVyKCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWR1eEFwcDtcblxuLy8gY29uc3QgYWRkQ291bnRlciA9IChsaXN0KSA9PiB7XG4vLyAgIGxpc3QgPSBbLi4ubGlzdCwgMF07XG4vL1xuLy8gICByZXR1cm4gbGlzdDtcbi8vIH07XG4vL1xuLy8gY29uc3QgcmVtb3ZlQ291bnRlciA9IChsaXN0LCBpbmRleCkgPT4ge1xuLy8gICBsaXN0ID0gW1xuLy8gICAgIC4uLmxpc3Quc2xpY2UoMCwgaW5kZXgpLFxuLy8gICAgIC4uLmxpc3Quc2xpY2UoaW5kZXggKyAxKVxuLy8gICBdO1xuLy9cbi8vICAgcmV0dXJuIGxpc3Q7XG4vLyB9O1xuLy9cbi8vIGNvbnN0IGluY3JlbWVudENvdW50ZXIgPSAobGlzdCwgaW5kZXgpID0+IHtcbi8vICAgbGlzdCA9IFtcbi8vICAgICAuLi5saXN0LnNsaWNlKDAsIGluZGV4KSxcbi8vICAgICBsaXN0W2luZGV4XSArIDEsXG4vLyAgICAgLi4ubGlzdC5zbGljZShpbmRleCArIDEpXG4vLyAgIF07XG4vL1xuLy8gICByZXR1cm4gbGlzdDtcbi8vIH07XG4vL1xuLy8gY29uc3QgdGVzdEFkZENvdW50ZXIgPSAoKSA9PiB7XG4vLyAgIGNvbnN0IGxpc3RCZWZvcmUgPSBbXTtcbi8vICAgY29uc3QgbGlzdEFmdGVyID0gWzBdO1xuLy9cbi8vICAgZGVlcEZyZWV6ZShsaXN0QmVmb3JlKTtcbi8vXG4vLyAgIGV4cGVjdChcbi8vICAgICBhZGRDb3VudGVyKGxpc3RCZWZvcmUpXG4vLyAgICkudG9FcXVhbChsaXN0QWZ0ZXIpO1xuLy8gfTtcbi8vXG4vLyBjb25zdCB0ZXN0UmVtb3ZlQ291bnRlciA9ICgpID0+IHtcbi8vICAgY29uc3QgbGlzdEJlZm9yZSA9IFswLCAxMCwgMjBdO1xuLy8gICBjb25zdCBsaXN0QWZ0ZXIgPSBbMCwgMjBdO1xuLy9cbi8vICAgZGVlcEZyZWV6ZShsaXN0QmVmb3JlKTtcbi8vXG4vLyAgIGV4cGVjdChcbi8vICAgICByZW1vdmVDb3VudGVyKGxpc3RCZWZvcmUsIDEpXG4vLyAgICkudG9FcXVhbChsaXN0QWZ0ZXIpO1xuLy8gfTtcbi8vXG4vLyBjb25zdCB0ZXN0SW5jcmVtZW50Q291bnRlciA9ICgpID0+IHtcbi8vICAgY29uc3QgbGlzdEJlZm9yZSA9IFswLCAxMCwgMjBdO1xuLy8gICBjb25zdCBsaXN0QWZ0ZXIgPSBbMCwgMTEsIDIwXTtcbi8vXG4vLyAgIGRlZXBGcmVlemUobGlzdEJlZm9yZSk7XG4vL1xuLy8gICBleHBlY3QoXG4vLyAgICAgaW5jcmVtZW50Q291bnRlcihsaXN0QmVmb3JlLCAxKVxuLy8gICApLnRvRXF1YWwobGlzdEFmdGVyKTtcbi8vIH07XG4vL1xuLy8gdGVzdEFkZENvdW50ZXIoKTtcbi8vIHRlc3RSZW1vdmVDb3VudGVyKCk7XG4vLyB0ZXN0SW5jcmVtZW50Q291bnRlcigpO1xuLy9cbi8vIGNvbnNvbGUubG9nKCdBbGwgdGVzdHMgcGFzc2VkLicpXG5cbi8vIHN0YXRpYyBydW4oKSB7XG4vLyAgIHZhciByb290RE9NRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG4vL1xuLy8gICBjb25zdCBjb3VudGVyID0gKHN0YXRlID0gMCwgYWN0aW9uKSA9PiB7XG4vLyAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuLy8gICAgICAgY2FzZSAnSU5DUkVNRU5UJzpcbi8vICAgICAgICAgcmV0dXJuIHN0YXRlICsgMTtcbi8vICAgICAgIGNhc2UgJ0RFQ1JFTUVOVCc6XG4vLyAgICAgICAgIHJldHVybiBzdGF0ZSAtIDE7XG4vLyAgICAgICBkZWZhdWx0OlxuLy8gICAgICAgICByZXR1cm4gc3RhdGU7XG4vLyAgICAgfVxuLy8gICB9O1xuLy9cbi8vICAgY29uc3QgQ291bnRlciA9ICh7IHZhbHVlLCBvbkluY3JlbWVudCwgb25EZWNyZW1lbnQgfSkgPT4gKFxuLy8gICAgIDxkaXY+XG4vLyAgICAgICA8aDE+e3ZhbHVlfTwvaDE+XG4vLyAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uSW5jcmVtZW50fT4rPC9idXR0b24+XG4vLyAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uRGVjcmVtZW50fT4tPC9idXR0b24+XG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vL1xuLy8gICBjb25zdCB7IGNyZWF0ZVN0b3JlIH0gPSByZWR1eDtcbi8vICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShjb3VudGVyKTtcbi8vXG4vLyAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbi8vICAgICBSZWFjdERPTS5yZW5kZXIoXG4vLyAgICAgICA8Q291bnRlclxuLy8gICAgICAgICB2YWx1ZT17c3RvcmUuZ2V0U3RhdGUoKX1cbi8vICAgICAgICAgb25JbmNyZW1lbnQ9eygpID0+IHtcbi8vICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4vLyAgICAgICAgICAgICB0eXBlOiAnSU5DUkVNRU5UJ1xuLy8gICAgICAgICAgIH0pXG4vLyAgICAgICAgIH19XG4vLyAgICAgICAgIG9uRGVjcmVtZW50PXsoKSA9PiB7XG4vLyAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuLy8gICAgICAgICAgICAgdHlwZTogJ0RFQ1JFTUVOVCdcbi8vICAgICAgICAgICB9KVxuLy8gICAgICAgICB9fVxuLy8gICAgICAgLz4sXG4vLyAgICAgICByb290RE9NRWxlbWVudFxuLy8gICAgICk7XG4vLyAgIH07XG4vL1xuLy8gICBzdG9yZS5zdWJzY3JpYmUocmVuZGVyKTtcbi8vXG4vLyAgIHJlbmRlcigpO1xuLy9cbi8vICAgZXhwZWN0KFxuLy8gICAgICAgY291bnRlcigwLCB7IHR5cGU6ICdJTkNSRU1FTlQnIH0pXG4vLyAgICkudG9FcXVhbCgxKTtcbi8vXG4vLyAgIGV4cGVjdChcbi8vICAgICAgIGNvdW50ZXIoMSwgeyB0eXBlOiAnSU5DUkVNRU5UJyB9KVxuLy8gICApLnRvRXF1YWwoMik7XG4vL1xuLy8gICBleHBlY3QoXG4vLyAgICAgICBjb3VudGVyKDIsIHsgdHlwZTogJ0RFQ1JFTUVOVCcgfSlcbi8vICAgKS50b0VxdWFsKDEpO1xuLy9cbi8vICAgZXhwZWN0KFxuLy8gICAgICAgY291bnRlcigxLCB7IHR5cGU6ICdERUNSRU1FTlQnIH0pXG4vLyAgICkudG9FcXVhbCgwKTtcbi8vXG4vLyAgIGV4cGVjdChcbi8vICAgICAgIGNvdW50ZXIoMSwgeyB0eXBlOiAnU09NRVRISU5HX0VMU0UnfSApXG4vLyAgICkudG9FcXVhbCgxKTtcbi8vXG4vLyAgIGV4cGVjdChcbi8vICAgICAgIGNvdW50ZXIodW5kZWZpbmVkLCB7fSlcbi8vICAgKS50b0VxdWFsKDApO1xuLy9cbi8vICAgY29uc29sZS5sb2coJ1Rlc3RzIHBhc3NlZCEnKVxuLy8gfVxuIl19