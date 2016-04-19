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

      var nextTodoId = 0;

      var TodoApp = function (_Component) {
        _inherits(TodoApp, _Component);

        function TodoApp() {
          _classCallCheck(this, TodoApp);

          return _possibleConstructorReturn(this, Object.getPrototypeOf(TodoApp).apply(this, arguments));
        }

        _createClass(TodoApp, [{
          key: 'render',
          value: function render() {
            var _this2 = this;

            var _props = this.props;
            var todos = _props.todos;
            var visibilityFilter = _props.visibilityFilter;


            var visibleTodos = getVisibleTodos(todos, visibilityFilter);

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
              ),
              React.createElement(
                'ul',
                null,
                visibleTodos.map(function (todo) {
                  return React.createElement(
                    'li',
                    { key: todo.id,
                      onClick: function onClick() {
                        store.dispatch({
                          type: 'TOGGLE_TODO',
                          id: todo.id
                        });
                      },
                      style: {
                        textDecoration: todo.completed ? 'line-through' : 'none'
                      } },
                    todo.text
                  );
                })
              ),
              React.createElement(
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
              )
            );
          }
        }]);

        return TodoApp;
      }(Component);

      var render = function render() {
        ReactDOM.render(React.createElement(TodoApp, {
          todos: store.getState().todos,
          visibilityFilter: store.getState().visibilityFilter
        }), rootDOMElement);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWR1eEFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSSxRQUFRLFFBQVEsT0FBUixDQUFSO0lBQ0EsU0FBVSxRQUFRLFFBQVIsQ0FBVjtJQUNBLGFBQWEsUUFBUSxhQUFSLENBQWI7O0FBRUosSUFBSSxXQUFXLFFBQVEsYUFBUixDQUFYO0lBQ0EsV0FBVyxTQUFTLFFBQVQ7SUFDWCxRQUFRLFNBQVMsS0FBVDs7SUFFTjtBQUNKLFdBREksUUFDSixHQUFjOzBCQURWLFVBQ1U7R0FBZDs7ZUFESTs7MEJBS1M7QUFDWCxVQUFJLGlCQUFpQixTQUFTLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBakIsQ0FETzs7QUFHWCxVQUFNLE9BQU8sU0FBUCxJQUFPLENBQUMsS0FBRCxFQUFRLE1BQVIsRUFBbUI7QUFDOUIsZ0JBQVEsT0FBTyxJQUFQO0FBQ04sZUFBSyxVQUFMO0FBQ0UsbUJBQU87QUFDTCxrQkFBSSxPQUFPLEVBQVA7QUFDSixvQkFBTSxPQUFPLElBQVA7QUFDTix5QkFBVyxLQUFYO2FBSEYsQ0FERjs7QUFERixlQVFPLGFBQUw7QUFDRSxnQkFBSSxNQUFNLEVBQU4sS0FBYSxPQUFPLEVBQVAsRUFBVztBQUMxQixxQkFBTyxLQUFQLENBRDBCO2FBQTVCOztBQUlBLG1CQUFPLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBbEIsRUFBeUI7QUFDOUIseUJBQVcsQ0FBQyxNQUFNLFNBQU47YUFEUCxDQUFQLENBTEY7O0FBUkY7QUFrQkksbUJBQU8sS0FBUCxDQURGO0FBakJGLFNBRDhCO09BQW5CLENBSEY7O0FBMEJYLFVBQU0sUUFBUSxTQUFSLEtBQVEsR0FBd0I7WUFBdkIsOERBQVEsa0JBQWU7WUFBWCxzQkFBVzs7QUFDcEMsZ0JBQVEsT0FBTyxJQUFQO0FBQ04sZUFBSyxVQUFMO0FBQ0UsZ0RBQ0ssU0FDSCxLQUFLLFNBQUwsRUFBZ0IsTUFBaEIsR0FGRixDQURGOztBQURGLGVB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QUFQLEVBQWtCLGVBQWUsZ0JBQWYsRUFBOUI7O2lCQUhGO2dCQU1HLEdBTkg7Z0JBT0U7QUFBQyw0QkFBRDtvQkFBWSxRQUFPLGFBQVAsRUFBcUIsZUFBZSxnQkFBZixFQUFqQzs7aUJBUEY7Z0JBVUcsR0FWSDtnQkFXRTtBQUFDLDRCQUFEO29CQUFZLFFBQU8sZ0JBQVAsRUFBd0IsZUFBZSxnQkFBZixFQUFwQzs7aUJBWEY7ZUFqQ0Y7YUFERixDQVhPOzs7O2VBREw7UUFBZ0IsV0E3R1g7O0FBK0tYLFVBQU0sU0FBUyxTQUFULE1BQVMsR0FBTTtBQUNuQixpQkFBUyxNQUFULENBQ0Usb0JBQUMsT0FBRDtBQUNFLGlCQUFPLE1BQU0sUUFBTixHQUFpQixLQUFqQjtBQUNQLDRCQUFrQixNQUFNLFFBQU4sR0FBaUIsZ0JBQWpCO1NBRnBCLENBREYsRUFLRSxjQUxGLEVBRG1CO09BQU4sQ0EvS0o7O0FBeUxYLFlBQU0sU0FBTixDQUFnQixNQUFoQixFQXpMVzs7QUEyTFgsZUEzTFc7Ozs7U0FMVDs7O0FBb01OLE9BQU8sT0FBUCxHQUFpQixRQUFqQiIsImZpbGUiOiJyZWR1eEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFJlZHV4ID0gcmVxdWlyZSgncmVkdXgnKSxcbiAgICBleHBlY3QgID0gcmVxdWlyZSgnZXhwZWN0JyksXG4gICAgZGVlcEZyZWV6ZSA9IHJlcXVpcmUoJ2RlZXAtZnJlZXplJyk7XG5cbnZhciByZWFjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2luZGV4JyksXG4gICAgUmVhY3RET00gPSByZWFjdGlvbi5SZWFjdERPTSxcbiAgICBSZWFjdCA9IHJlYWN0aW9uLlJlYWN0O1xuXG5jbGFzcyBSZWR1eEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICBzdGF0aWMgcnVuKCkge1xuICAgIHZhciByb290RE9NRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5cbiAgICBjb25zdCB0b2RvID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnQUREX1RPRE8nOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogYWN0aW9uLmlkLFxuICAgICAgICAgICAgdGV4dDogYWN0aW9uLnRleHQsXG4gICAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlXG4gICAgICAgICAgfTtcblxuICAgICAgICBjYXNlICdUT0dHTEVfVE9ETyc6XG4gICAgICAgICAgaWYgKHN0YXRlLmlkICE9PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgIGNvbXBsZXRlZDogIXN0YXRlLmNvbXBsZXRlZFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB0b2RvcyA9IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcbiAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnQUREX1RPRE8nOlxuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHRvZG8odW5kZWZpbmVkLCBhY3Rpb24pXG4gICAgICAgICAgXTtcblxuICAgICAgICBjYXNlICdUT0dHTEVfVE9ETyc6XG4gICAgICAgICAgcmV0dXJuIHN0YXRlLm1hcCh0ID0+IHRvZG8odCwgYWN0aW9uKSk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHZpc2liaWxpdHlGaWx0ZXIgPSAoIHN0YXRlID0gJ1NIT1dfQUxMJywgYWN0aW9uKSA9PiB7XG4gICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ1NFVF9WSVNJQklMSVRZX0ZJTFRFUic6XG4gICAgICAgICAgcmV0dXJuIGFjdGlvbi5maWx0ZXI7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHsgY29tYmluZVJlZHVjZXJzIH0gPSBSZWR1eDtcblxuICAgIGNvbnN0IHRvZG9BcHAgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgICAgdG9kb3M6IHRvZG9zLFxuICAgICAgdmlzaWJpbGl0eUZpbHRlcjogdmlzaWJpbGl0eUZpbHRlclxuICAgIH0pO1xuXG4gICAgY29uc3QgeyBjcmVhdGVTdG9yZSB9ID0gUmVkdXg7XG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZSh0b2RvQXBwKTtcblxuICAgIGNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuICAgIGNvbnN0IEZpbHRlckxpbmsgPSAoe1xuICAgICAgZmlsdGVyLFxuICAgICAgY3VycmVudEZpbHRlcixcbiAgICAgIGNoaWxkcmVuXG4gICAgfSkgPT4ge1xuICAgICAgaWYgKGZpbHRlciA9PT0gY3VycmVudEZpbHRlcikge1xuICAgICAgICByZXR1cm4gPHNwYW4+e2NoaWxkcmVufTwvc3Bhbj47XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxhIGhyZWY9JyMnXG4gICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICB0eXBlOiAnU0VUX1ZJU0lCSUxJVFlfRklMVEVSJyxcbiAgICAgICAgICAgICAgIGZpbHRlclxuICAgICAgICAgICAgIH0pXG4gICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvYT5cbiAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFZpc2libGVUb2RvcyA9IChcbiAgICAgIHRvZG9zLFxuICAgICAgZmlsdGVyXG4gICAgKSA9PiB7XG4gICAgICBzd2l0Y2ggKGZpbHRlcikge1xuICAgICAgICBjYXNlICdTSE9XX0FMTCc6XG4gICAgICAgICAgcmV0dXJuIHRvZG9zO1xuXG4gICAgICAgIGNhc2UgJ1NIT1dfQ09NUExFVEVEJzpcbiAgICAgICAgICByZXR1cm4gdG9kb3MuZmlsdGVyKFxuICAgICAgICAgICAgdCA9PiB0LmNvbXBsZXRlZFxuICAgICAgICAgICk7XG5cbiAgICAgICAgY2FzZSAnU0hPV19BQ1RJVkUnOlxuICAgICAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIoXG4gICAgICAgICAgICAgIHQgPT4gIXQuY29tcGxldGVkXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0IG5leHRUb2RvSWQgPSAwO1xuICAgIGNsYXNzIFRvZG9BcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgdG9kb3MsXG4gICAgICAgICAgdmlzaWJpbGl0eUZpbHRlclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBjb25zdCB2aXNpYmxlVG9kb3MgPSBnZXRWaXNpYmxlVG9kb3MoXG4gICAgICAgICAgdG9kb3MsXG4gICAgICAgICAgdmlzaWJpbGl0eUZpbHRlclxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9e25vZGUgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmlucHV0ID0gbm9kZTtcbiAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdBRERfVE9ETycsXG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5pbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICBpZDogbmV4dFRvZG9JZCsrXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgQWRkIHRvZG9cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7dmlzaWJsZVRvZG9zLm1hcCh0b2RvID0+XG4gICAgICAgICAgICAgICAgPGxpIGtleT17dG9kby5pZH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdUT0dHTEVfVE9ETycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdG9kby5pZFxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvLmNvbXBsZXRlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICdsaW5lLXRocm91Z2gnIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICB7dG9kby50ZXh0fVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFNob3c6XG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19BTEwnIGN1cnJlbnRGaWx0ZXI9e3Zpc2liaWxpdHlGaWx0ZXJ9PlxuICAgICAgICAgICAgICAgIEFsbFxuICAgICAgICAgICAgICA8L0ZpbHRlckxpbms+XG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19BQ1RJVkUnIGN1cnJlbnRGaWx0ZXI9e3Zpc2liaWxpdHlGaWx0ZXJ9PlxuICAgICAgICAgICAgICAgIEFjdGl2ZVxuICAgICAgICAgICAgICA8L0ZpbHRlckxpbms+XG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19DT01QTEVURUQnIGN1cnJlbnRGaWx0ZXI9e3Zpc2liaWxpdHlGaWx0ZXJ9PlxuICAgICAgICAgICAgICAgIENvbXBsZXRlZFxuICAgICAgICAgICAgICA8L0ZpbHRlckxpbms+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICAgIFJlYWN0RE9NLnJlbmRlcihcbiAgICAgICAgPFRvZG9BcHBcbiAgICAgICAgICB0b2Rvcz17c3RvcmUuZ2V0U3RhdGUoKS50b2Rvc31cbiAgICAgICAgICB2aXNpYmlsaXR5RmlsdGVyPXtzdG9yZS5nZXRTdGF0ZSgpLnZpc2liaWxpdHlGaWx0ZXJ9XG4gICAgICAgIC8+LFxuICAgICAgICByb290RE9NRWxlbWVudFxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgc3RvcmUuc3Vic2NyaWJlKHJlbmRlcik7XG5cbiAgICByZW5kZXIoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZHV4QXBwO1xuXG4vLyBjb25zdCBhZGRDb3VudGVyID0gKGxpc3QpID0+IHtcbi8vICAgbGlzdCA9IFsuLi5saXN0LCAwXTtcbi8vXG4vLyAgIHJldHVybiBsaXN0O1xuLy8gfTtcbi8vXG4vLyBjb25zdCByZW1vdmVDb3VudGVyID0gKGxpc3QsIGluZGV4KSA9PiB7XG4vLyAgIGxpc3QgPSBbXG4vLyAgICAgLi4ubGlzdC5zbGljZSgwLCBpbmRleCksXG4vLyAgICAgLi4ubGlzdC5zbGljZShpbmRleCArIDEpXG4vLyAgIF07XG4vL1xuLy8gICByZXR1cm4gbGlzdDtcbi8vIH07XG4vL1xuLy8gY29uc3QgaW5jcmVtZW50Q291bnRlciA9IChsaXN0LCBpbmRleCkgPT4ge1xuLy8gICBsaXN0ID0gW1xuLy8gICAgIC4uLmxpc3Quc2xpY2UoMCwgaW5kZXgpLFxuLy8gICAgIGxpc3RbaW5kZXhdICsgMSxcbi8vICAgICAuLi5saXN0LnNsaWNlKGluZGV4ICsgMSlcbi8vICAgXTtcbi8vXG4vLyAgIHJldHVybiBsaXN0O1xuLy8gfTtcbi8vXG4vLyBjb25zdCB0ZXN0QWRkQ291bnRlciA9ICgpID0+IHtcbi8vICAgY29uc3QgbGlzdEJlZm9yZSA9IFtdO1xuLy8gICBjb25zdCBsaXN0QWZ0ZXIgPSBbMF07XG4vL1xuLy8gICBkZWVwRnJlZXplKGxpc3RCZWZvcmUpO1xuLy9cbi8vICAgZXhwZWN0KFxuLy8gICAgIGFkZENvdW50ZXIobGlzdEJlZm9yZSlcbi8vICAgKS50b0VxdWFsKGxpc3RBZnRlcik7XG4vLyB9O1xuLy9cbi8vIGNvbnN0IHRlc3RSZW1vdmVDb3VudGVyID0gKCkgPT4ge1xuLy8gICBjb25zdCBsaXN0QmVmb3JlID0gWzAsIDEwLCAyMF07XG4vLyAgIGNvbnN0IGxpc3RBZnRlciA9IFswLCAyMF07XG4vL1xuLy8gICBkZWVwRnJlZXplKGxpc3RCZWZvcmUpO1xuLy9cbi8vICAgZXhwZWN0KFxuLy8gICAgIHJlbW92ZUNvdW50ZXIobGlzdEJlZm9yZSwgMSlcbi8vICAgKS50b0VxdWFsKGxpc3RBZnRlcik7XG4vLyB9O1xuLy9cbi8vIGNvbnN0IHRlc3RJbmNyZW1lbnRDb3VudGVyID0gKCkgPT4ge1xuLy8gICBjb25zdCBsaXN0QmVmb3JlID0gWzAsIDEwLCAyMF07XG4vLyAgIGNvbnN0IGxpc3RBZnRlciA9IFswLCAxMSwgMjBdO1xuLy9cbi8vICAgZGVlcEZyZWV6ZShsaXN0QmVmb3JlKTtcbi8vXG4vLyAgIGV4cGVjdChcbi8vICAgICBpbmNyZW1lbnRDb3VudGVyKGxpc3RCZWZvcmUsIDEpXG4vLyAgICkudG9FcXVhbChsaXN0QWZ0ZXIpO1xuLy8gfTtcbi8vXG4vLyB0ZXN0QWRkQ291bnRlcigpO1xuLy8gdGVzdFJlbW92ZUNvdW50ZXIoKTtcbi8vIHRlc3RJbmNyZW1lbnRDb3VudGVyKCk7XG4vL1xuLy8gY29uc29sZS5sb2coJ0FsbCB0ZXN0cyBwYXNzZWQuJylcblxuLy8gc3RhdGljIHJ1bigpIHtcbi8vICAgdmFyIHJvb3RET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcbi8vXG4vLyAgIGNvbnN0IGNvdW50ZXIgPSAoc3RhdGUgPSAwLCBhY3Rpb24pID0+IHtcbi8vICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4vLyAgICAgICBjYXNlICdJTkNSRU1FTlQnOlxuLy8gICAgICAgICByZXR1cm4gc3RhdGUgKyAxO1xuLy8gICAgICAgY2FzZSAnREVDUkVNRU5UJzpcbi8vICAgICAgICAgcmV0dXJuIHN0YXRlIC0gMTtcbi8vICAgICAgIGRlZmF1bHQ6XG4vLyAgICAgICAgIHJldHVybiBzdGF0ZTtcbi8vICAgICB9XG4vLyAgIH07XG4vL1xuLy8gICBjb25zdCBDb3VudGVyID0gKHsgdmFsdWUsIG9uSW5jcmVtZW50LCBvbkRlY3JlbWVudCB9KSA9PiAoXG4vLyAgICAgPGRpdj5cbi8vICAgICAgIDxoMT57dmFsdWV9PC9oMT5cbi8vICAgICAgIDxidXR0b24gb25DbGljaz17b25JbmNyZW1lbnR9Pis8L2J1dHRvbj5cbi8vICAgICAgIDxidXR0b24gb25DbGljaz17b25EZWNyZW1lbnR9Pi08L2J1dHRvbj5cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vXG4vLyAgIGNvbnN0IHsgY3JlYXRlU3RvcmUgfSA9IHJlZHV4O1xuLy8gICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKGNvdW50ZXIpO1xuLy9cbi8vICAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuLy8gICAgIFJlYWN0RE9NLnJlbmRlcihcbi8vICAgICAgIDxDb3VudGVyXG4vLyAgICAgICAgIHZhbHVlPXtzdG9yZS5nZXRTdGF0ZSgpfVxuLy8gICAgICAgICBvbkluY3JlbWVudD17KCkgPT4ge1xuLy8gICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbi8vICAgICAgICAgICAgIHR5cGU6ICdJTkNSRU1FTlQnXG4vLyAgICAgICAgICAgfSlcbi8vICAgICAgICAgfX1cbi8vICAgICAgICAgb25EZWNyZW1lbnQ9eygpID0+IHtcbi8vICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4vLyAgICAgICAgICAgICB0eXBlOiAnREVDUkVNRU5UJ1xuLy8gICAgICAgICAgIH0pXG4vLyAgICAgICAgIH19XG4vLyAgICAgICAvPixcbi8vICAgICAgIHJvb3RET01FbGVtZW50XG4vLyAgICAgKTtcbi8vICAgfTtcbi8vXG4vLyAgIHN0b3JlLnN1YnNjcmliZShyZW5kZXIpO1xuLy9cbi8vICAgcmVuZGVyKCk7XG4vL1xuLy8gICBleHBlY3QoXG4vLyAgICAgICBjb3VudGVyKDAsIHsgdHlwZTogJ0lOQ1JFTUVOVCcgfSlcbi8vICAgKS50b0VxdWFsKDEpO1xuLy9cbi8vICAgZXhwZWN0KFxuLy8gICAgICAgY291bnRlcigxLCB7IHR5cGU6ICdJTkNSRU1FTlQnIH0pXG4vLyAgICkudG9FcXVhbCgyKTtcbi8vXG4vLyAgIGV4cGVjdChcbi8vICAgICAgIGNvdW50ZXIoMiwgeyB0eXBlOiAnREVDUkVNRU5UJyB9KVxuLy8gICApLnRvRXF1YWwoMSk7XG4vL1xuLy8gICBleHBlY3QoXG4vLyAgICAgICBjb3VudGVyKDEsIHsgdHlwZTogJ0RFQ1JFTUVOVCcgfSlcbi8vICAgKS50b0VxdWFsKDApO1xuLy9cbi8vICAgZXhwZWN0KFxuLy8gICAgICAgY291bnRlcigxLCB7IHR5cGU6ICdTT01FVEhJTkdfRUxTRSd9IClcbi8vICAgKS50b0VxdWFsKDEpO1xuLy9cbi8vICAgZXhwZWN0KFxuLy8gICAgICAgY291bnRlcih1bmRlZmluZWQsIHt9KVxuLy8gICApLnRvRXF1YWwoMCk7XG4vL1xuLy8gICBjb25zb2xlLmxvZygnVGVzdHMgcGFzc2VkIScpXG4vLyB9XG4iXX0=