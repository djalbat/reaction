"use strict";

const createStore = (reducer) => {
  let state,
      listeners = [];

  const getState = () => {
    return state;
  };

  const dispatch = (action) => {
    state = reducer(state, action);

    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);

    return (() => {
      unsubscribe(listener);
    });
  };

  const unsubscribe = (l) => {
    listeners = listeners.filter((listener) => {
      return (listener !== l);
    });
  };

  dispatch({});

  return { getState, dispatch, subscribe, unsubscribe };
};

const combineReducers = (reducers) => {
  return (state = {}, action) => {
    const keys = Object.keys(reducers),
          nextState = keys.reduce((nextState, key) => {
            const reducer = reducers[key];

            nextState[key] = reducer(state[key], action);

            return nextState;
          }, {});

    return nextState;
  };
};

const Redux = { createStore, combineReducers };

export default Redux;
