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
    const rootDOMElement = document.getElementById('root');

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

    const { Component } = React;

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

    const Todo = ({
      onClick,
      completed,
      text
    }) => (

      <li onClick={onClick}
          style={{textDecoration:
                    completed ?
                      'line-through' :
                        'none'}}
      >
        {text}
      </li>
    );

    const TodoList = ({
      todos,
      onTodoClick
    }) => (

      <ul>
        {todos.map(todo => <Todo text={todo.text}
                                 completed={todo.completed}
                                 onClick={() =>
                                   onTodoClick(todo.id)
                                 }
                           />)}
      </ul>
    );

    const Link = ({
      active,
      onClick,
      children
    }) => {
      if (active) {
        return <span>{children}</span>;
      }

      return (
          <a href='#'
             onClick={e => {
               e.preventDefault();
               onClick();
             }}
          >
            {children}
          </a>
      );
    };

    class FilterLink extends Component {
      componentDidMount() {
        const { store } = this.props;

        this.unsubscribe = store.subscribe(() =>
          this.forceUpdate()
        );
      }
      
      componentWillUnmount() {
        this.unsubscribe();
      }
      
      render() {
        const { store } = this.props;
        const props = this.props;
        const state = store.getState();

        return (
          <Link active={
                  props.filter === state.visibilityFilter
                }
                onClick={() =>
                  store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter: props.filter
                  })
                }
          >
            {props.children}
          </Link>
        );
      }
    }

    let nextTodoId = 0;
    const AddTodo = ({
      store
    }) => {
      let input;

      return (

        <div>
          <input ref={node => {
                  input = node;
                 }}
          />
          <button onClick={() => {
                    store.dispatch({
                      type: 'ADD_TODO',
                      text: input.value,
                      id: nextTodoId++
                    });
                    input.value = '';
                  }}
          >
            Add todo
          </button>
        </div>
      );
    };

    class VisibleTodoList extends Component {
      componentDidMount() {
        const { store } = this.props;

        this.unsubscribe = store.subscribe(() =>
          this.forceUpdate()
        );
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        const { store } = this.props;
        const state = store.getState();

        return (

          <TodoList todos={
                      getVisibleTodos(
                        state.todos,
                        state.visibilityFilter
                      )
                    }
                    onTodoClick={id =>
                      store.dispatch({
                        type: 'TOGGLE_TODO',
                        id: id
                      })
                    }
          />
        );
      }
    }

    const Footer = ({
      store
    }) => (

      <p>
        Show:
        {' '}
        <FilterLink filter='SHOW_ALL' store={store}>
          All
        </FilterLink>
        {' '}
        <FilterLink filter='SHOW_ACTIVE' store={store}>
          Active
        </FilterLink>
        {' '}
        <FilterLink filter='SHOW_COMPLETED' store={store}>
          Completed
        </FilterLink>
      </p>
    );

    const TodoApp = ({
      store
    }) => (

      <div>
        <AddTodo store={store}/>
        <VisibleTodoList store={store}/>
        <Footer store={store}/>
      </div>
    );

    const { createStore } = Redux;

    ReactDOM.render(
      <TodoApp store={createStore(todoApp)} />,
      rootDOMElement
    );
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
