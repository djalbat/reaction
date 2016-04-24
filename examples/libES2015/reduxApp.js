'use strict';

var Redux = require('redux');

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
    }) =>  (

        <ul>
          {todos.map(todo => <Todo text={todo.text}
                                   completed={todo.completed}
                                   onClick={() =>
                                 onTodoClick(todo.id)
                               }
          />)}
        </ul>
    );

    const Link = (
      props
    ) => {
      const { active, onClick } = props;

      if (active) {
        return <span>{props.children}</span>;
      }

      return (
          <a href='#'
             onClick={e => {
               e.preventDefault();
               onClick();
             }}
          >
            {props.children}
          </a>
      );
    };

    class FilterLink extends Component {
      componentDidMount() {
        const { store } = this.context;

        this.unsubscribe = store.subscribe(() => 
           this.forceUpdate()
        );
      }
      
      componentWillUnmount() {
        this.unsubscribe();
      }
      
      render() {
        const { store } = this.context;
        const state = store.getState();

        return (
          <Link active={
                  this.props.filter === state.visibilityFilter
                }
                onClick={() =>
                  store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter: this.props.filter
                  })
                }
          >
            {this.props.children}
          </Link>
        );
      }
    }

    let nextTodoId = 0;
    const AddTodo = (
      props,
      {
        store
      }
    ) => {
      let input;

      return (

        <div>
          <input ref={domElement => {
                  input = domElement;
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
        const { store } = this.context;

        this.unsubscribe = store.subscribe(() =>
          this.forceUpdate()
        );
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        const { store } = this.context;
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
    
    const Footer = () => (

      <p>
        {'Show: '}
        <FilterLink filter='SHOW_ALL'>
          All
        </FilterLink>
        {' - '}
        <FilterLink filter='SHOW_ACTIVE'>
          Active
        </FilterLink>
        {' - '}
        <FilterLink filter='SHOW_COMPLETED'>
          Completed
        </FilterLink>
      </p>
    );

    const TodoApp = () => (

      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );

    class Provider extends Component {
      getChildContext() {
        return {
          store: this.props.store
        };
      }
      render() {
        return this.props.children;
      }
    }

    const { createStore } = Redux;

    ReactDOM.render(
      <Provider store={createStore(todoApp)}>
        <TodoApp />
      </Provider>,
      rootDOMElement
    );
  }
}

module.exports = ReduxApp;
