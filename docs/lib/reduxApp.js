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
        return React.createElement(
          'h1',
          null,
          value
        );
      };

      var createStore = redux.createStore;

      var store = createStore(counter);

      var render = function render() {
        ReactDOM.render(React.createElement(Counter, { value: store.getState() }), rootDOMElement);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWR1eEFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSSxRQUFRLFFBQVEsT0FBUixDQUFSO0lBQ0EsU0FBVSxRQUFRLFFBQVIsQ0FBVjs7QUFFSixJQUFJLFdBQVcsUUFBUSxhQUFSLENBQVg7SUFDQSxXQUFXLFNBQVMsUUFBVDtJQUNYLFFBQVEsU0FBUyxLQUFUOztJQUVOO0FBQ0osV0FESSxRQUNKLEdBQWM7MEJBRFYsVUFDVTtHQUFkOztlQURJOzswQkFLUztBQUNYLFVBQUksaUJBQWlCLFNBQVMsY0FBVCxDQUF3QixNQUF4QixDQUFqQixDQURPOztBQUdYLFVBQU0sVUFBVSxTQUFWLE9BQVUsR0FBdUI7WUFBdEIsOERBQVEsaUJBQWM7WUFBWCxzQkFBVzs7QUFDckMsZ0JBQVEsT0FBTyxJQUFQO0FBQ04sZUFBSyxXQUFMO0FBQ0UsbUJBQU8sUUFBUSxDQUFSLENBRFQ7QUFERixlQUdPLFdBQUw7QUFDRSxtQkFBTyxRQUFRLENBQVIsQ0FEVDtBQUhGO0FBTUksbUJBQU8sS0FBUCxDQURGO0FBTEYsU0FEcUM7T0FBdkIsQ0FITDs7QUFjWCxVQUFNLFVBQVUsU0FBVixPQUFVO1lBQUc7ZUFDakI7OztVQUFLLEtBQUw7O09BRGMsQ0FkTDs7VUFrQkgsY0FBZ0IsTUFBaEIsWUFsQkc7O0FBbUJYLFVBQU0sUUFBUSxZQUFZLE9BQVosQ0FBUixDQW5CSzs7QUFxQlgsVUFBTSxTQUFTLFNBQVQsTUFBUyxHQUFNO0FBQ25CLGlCQUFTLE1BQVQsQ0FDRSxvQkFBQyxPQUFELElBQVMsT0FBTyxNQUFNLFFBQU4sRUFBUCxFQUFULENBREYsRUFFRSxjQUZGLEVBRG1CO09BQU4sQ0FyQko7O0FBNEJYLFlBQU0sU0FBTixDQUFnQixNQUFoQixFQTVCVzs7QUE4QlgsZUE5Qlc7Ozs7U0FMVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStGTixPQUFPLE9BQVAsR0FBaUIsUUFBakIiLCJmaWxlIjoicmVkdXhBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciByZWR1eCA9IHJlcXVpcmUoJ3JlZHV4JyksXG4gICAgZXhwZWN0ICA9IHJlcXVpcmUoJ2V4cGVjdCcpO1xuXG52YXIgcmVhY3Rpb24gPSByZXF1aXJlKCcuLi8uLi9pbmRleCcpLFxuICAgIFJlYWN0RE9NID0gcmVhY3Rpb24uUmVhY3RET00sXG4gICAgUmVhY3QgPSByZWFjdGlvbi5SZWFjdDtcblxuY2xhc3MgUmVkdXhBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgc3RhdGljIHJ1bigpIHtcbiAgICB2YXIgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXG4gICAgY29uc3QgY291bnRlciA9IChzdGF0ZSA9IDAsIGFjdGlvbikgPT4ge1xuICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdJTkNSRU1FTlQnOlxuICAgICAgICAgIHJldHVybiBzdGF0ZSArIDE7XG4gICAgICAgIGNhc2UgJ0RFQ1JFTUVOVCc6XG4gICAgICAgICAgcmV0dXJuIHN0YXRlIC0gMTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IENvdW50ZXIgPSAoeyB2YWx1ZSB9KSA9PiAoXG4gICAgICA8aDE+e3ZhbHVlfTwvaDE+XG4gICAgKTtcblxuICAgIGNvbnN0IHsgY3JlYXRlU3RvcmUgfSA9IHJlZHV4O1xuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoY291bnRlcik7XG5cbiAgICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICAgIDxDb3VudGVyIHZhbHVlPXtzdG9yZS5nZXRTdGF0ZSgpfS8+LFxuICAgICAgICByb290RE9NRWxlbWVudFxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgc3RvcmUuc3Vic2NyaWJlKHJlbmRlcik7XG5cbiAgICByZW5kZXIoKTtcbiAgfVxufVxuXG4gIC8vIGV4cGVjdChcbiAgLy8gICAgIGNvdW50ZXIoMCwgeyB0eXBlOiAnSU5DUkVNRU5UJyB9KVxuICAvLyApLnRvRXF1YWwoMSk7XG4gIC8vXG4gIC8vIGV4cGVjdChcbiAgLy8gICAgIGNvdW50ZXIoMSwgeyB0eXBlOiAnSU5DUkVNRU5UJyB9KVxuICAvLyApLnRvRXF1YWwoMik7XG4gIC8vXG4gIC8vIGV4cGVjdChcbiAgLy8gICAgIGNvdW50ZXIoMiwgeyB0eXBlOiAnREVDUkVNRU5UJyB9KVxuICAvLyApLnRvRXF1YWwoMSk7XG4gIC8vXG4gIC8vIGV4cGVjdChcbiAgLy8gICAgIGNvdW50ZXIoMSwgeyB0eXBlOiAnREVDUkVNRU5UJyB9KVxuICAvLyApLnRvRXF1YWwoMCk7XG4gIC8vXG4gIC8vIGV4cGVjdChcbiAgLy8gICAgIGNvdW50ZXIoMSwgeyB0eXBlOiAnU09NRVRISU5HX0VMU0UnfSApXG4gIC8vICkudG9FcXVhbCgxKTtcbiAgLy9cbiAgLy8gZXhwZWN0KFxuICAvLyAgICAgY291bnRlcih1bmRlZmluZWQsIHt9KVxuICAvLyApLnRvRXF1YWwoMCk7XG4gIC8vXG4gIC8vIGNvbnNvbGUubG9nKCdUZXN0cyBwYXNzZWQhJykgIH1cblxuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbi8vICAgc3RvcmUuZGlzcGF0Y2goe3R5cGU6ICdJTkNSRU1FTlQnfSk7XG4vLyB9KTtcbi8vXG4vLyBjb25zdCBjcmVhdGVTdG9yZSA9IChyZWR1Y2VyKSA9PiB7XG4vLyAgIGxldCBzdGF0ZTtcbi8vICAgbGV0IGxpc3RlbmVycyA9IFtdO1xuLy9cbi8vICAgY29uc3QgZ2V0U3RhdGUgPSAoKSA9PiBzdGF0ZTtcbi8vXG4vLyAgIGNvbnN0IGRpc3BhdGNoID0gKGFjdGlvbikgPT4ge1xuLy8gICAgIHN0YXRlID0gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbi8vXG4vLyAgICAgbGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4gbGlzdGVuZXIoKSk7XG4vLyAgIH07XG4vL1xuLy8gICBjb25zdCBzdWJzY3JpYmUgPSAobGlzdGVuZXIpID0+IHtcbi8vICAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4vL1xuLy8gICAgIHJldHVybiAoKSA9PiB7XG4vLyAgICAgICBsaXN0ZW5lcnMuZmlsdGVyKGwgPT4gbCAhPT0gbGlzdGVuZXIpO1xuLy8gICAgIH1cbi8vICAgfTtcbi8vXG4vLyAgIGRpc3BhdGNoKHt9KTtcbi8vXG4vLyAgIHJldHVybiB7IGdldFN0YXRlLCBkaXNwYXRjaCwgc3Vic2NyaWJlIH07XG4vLyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZHV4QXBwO1xuIl19