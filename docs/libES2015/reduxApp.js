'use strict';

var Redux = require('redux'),
    expect  = require('expect'),
    deepFreeze = require('deep-freeze');

var reaction = require('../../index'),
    ReactDOM = reaction.ReactDOM,
    React = reaction.React;

class ReduxApp {
  constructor() {

  }

  static run() {
    var rootDOMElement = document.getElementById('root');

    const todo = (state, action) => {
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

    const todos = (state = [], action) => {
      switch (action.type) {
        case 'ADD_TODO':
          return [
            ...state,
            todo(undefined, action)
          ];

        case 'TOGGLE_TODO':
          return state.map(t => todo(t, action));

        default:
          return state;
      }
    };

    const visibilityFilter = ( state = 'SHOW_ALL', action) => {
      switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
          return action.filter;

        default:
          return state;
      }
    };

    const { combineReducers } = Redux;

    const todoApp = combineReducers({
      todos: todos,
      visibilityFilter: visibilityFilter
    });

    const { createStore } = Redux;
    const store = createStore(todoApp);

    const { Component } = React;

    const FilterLink = ({
      filter,
      currentFilter,
      children
    }) => {
      if (filter === currentFilter) {
        return <span>{children}</span>;
      }

      return (
        <a href='#'
           onClick={e => {
             e.preventDefault();
             store.dispatch({
               type: 'SET_VISIBILITY_FILTER',
               filter
             })
           }}
        >
          {children}
        </a>
      );
    };

    let nextTodoId = 0;
    class AddTodos extends Component {
      render () {
        return (

          <div>
            <input ref={node => {
            this.input = node;
          }} />
            <button onClick={() => {
            store.dispatch({
              type: 'ADD_TODO',
              text: this.input.value,
              id: nextTodoId++
            });
            this.input.value = '';
          }}>
              Add todo
            </button>
          </div>
        );
      }
    }

    const Todo = ({
      todo
    }) => (

      <li onClick={() => {store.dispatch({
                              type: 'TOGGLE_TODO',
                              id: todo.id
                            })
                          }}
          style={{textDecoration:
                    todo.completed ?
                      'line-through' :
                        'none'}}
      >
        {todo.text}
      </li>
    );

    const TodosList = ({
      visibleTodos
    }) => (

      <ul>
        {visibleTodos.map(todo => <Todo todo={todo} />)}
      </ul>
    );

    const Footer = ({
      visibilityFilter
    }) => (

      <p>
        Show:
        {' '}
        <FilterLink filter='SHOW_ALL' currentFilter={visibilityFilter}>
          All
        </FilterLink>
        {' '}
        <FilterLink filter='SHOW_ACTIVE' currentFilter={visibilityFilter}>
          Active
        </FilterLink>
        {' '}
        <FilterLink filter='SHOW_COMPLETED' currentFilter={visibilityFilter}>
          Completed
        </FilterLink>
      </p>
    );

    const getVisibleTodos = (
      todos,
      filter
    ) => {
      switch (filter) {
        case 'SHOW_ALL':
          return todos;

        case 'SHOW_COMPLETED':
          return todos.filter(
            t => t.completed
          );

        case 'SHOW_ACTIVE':
          return todos.filter(
              t => !t.completed
          );
      }
    };

    class TodoApp extends Component {
      render() {
        const {
          todos,
          visibilityFilter
        } = this.props;

        const visibleTodos = getVisibleTodos(
          todos,
          visibilityFilter
        );

        return (
          <div>
            <AddTodos />
            <TodosList visibleTodos={visibleTodos} />
            <Footer visibilityFilter={visibilityFilter} />
          </div>
        );
      }
    }
    
    const render = () => {
      ReactDOM.render(
        <TodoApp {...store.getState()} />,
        rootDOMElement
      );
    };

    store.subscribe(render);

    render();
  }
}

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
