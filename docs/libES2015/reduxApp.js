'use strict';

var redux = require('redux'),
    expect  = require('expect');

var reaction = require('../../index'),
    ReactDOM = reaction.ReactDOM,
    React = reaction.React;

class ReduxApp {
  constructor() {

  }

  static run() {
    var rootDOMElement = document.getElementById('root');

    const counter = (state = 0, action) => {
      switch (action.type) {
        case 'INCREMENT':
          return state + 1;
        case 'DECREMENT':
          return state - 1;
        default:
          return state;
      }
    };

    const Counter = ({ value }) => (
      <h1>{value}</h1>
    );

    const { createStore } = redux;
    const store = createStore(counter);

    const render = () => {
      ReactDOM.render(
        <Counter value={store.getState()}/>,
        rootDOMElement
      );
    };

    store.subscribe(render);

    render();
  }
}

  // expect(
  //     counter(0, { type: 'INCREMENT' })
  // ).toEqual(1);
  //
  // expect(
  //     counter(1, { type: 'INCREMENT' })
  // ).toEqual(2);
  //
  // expect(
  //     counter(2, { type: 'DECREMENT' })
  // ).toEqual(1);
  //
  // expect(
  //     counter(1, { type: 'DECREMENT' })
  // ).toEqual(0);
  //
  // expect(
  //     counter(1, { type: 'SOMETHING_ELSE'} )
  // ).toEqual(1);
  //
  // expect(
  //     counter(undefined, {})
  // ).toEqual(0);
  //
  // console.log('Tests passed!')  }


// document.addEventListener('click', function () {
//   store.dispatch({type: 'INCREMENT'});
// });
//
// const createStore = (reducer) => {
//   let state;
//   let listeners = [];
//
//   const getState = () => state;
//
//   const dispatch = (action) => {
//     state = reducer(state, action);
//
//     listeners.forEach(listener => listener());
//   };
//
//   const subscribe = (listener) => {
//     listeners.push(listener);
//
//     return () => {
//       listeners.filter(l => l !== listener);
//     }
//   };
//
//   dispatch({});
//
//   return { getState, dispatch, subscribe };
// };

module.exports = ReduxApp;
