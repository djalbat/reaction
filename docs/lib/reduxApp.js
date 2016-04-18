'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var redux = require('redux'),
    expect = require('expect');

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

      var counter = function counter() {
        var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
        var action = arguments[1];

        switch (action.type) {
          case 'INCREMENT':
            return state + 1;
          case 'DECREMENT':
            return state - 1;
          default:
            return state;
        }
      };

      var Counter = function Counter(_ref) {
        var value = _ref.value;
        var onIncrement = _ref.onIncrement;
        var onDecrement = _ref.onDecrement;
        return React.createElement(
          'div',
          null,
          React.createElement(
            'h1',
            null,
            value
          ),
          React.createElement(
            'button',
            { onClick: onIncrement },
            '+'
          ),
          React.createElement(
            'button',
            { onClick: onDecrement },
            '-'
          )
        );
      };

      var createStore = redux.createStore;

      var store = createStore(counter);

      var render = function render() {
        ReactDOM.render(React.createElement(Counter, {
          value: store.getState(),
          onIncrement: function onIncrement() {
            store.dispatch({
              type: 'INCREMENT'
            });
          },
          onDecrement: function onDecrement() {
            store.dispatch({
              type: 'DECREMENT'
            });
          }
        }), rootDOMElement);
      };

      store.subscribe(render);

      render();
    }
  }]);

  return ReduxApp;
}();

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