'use strict';

var createStore = function createStore(reducer) {
  var state = void 0,
      listeners = [];

  var getState = function getState() {
    return state;
  };

  var dispatch = function dispatch(action) {
    state = reducer(state, action);

    listeners.forEach(function (listener) {
      return listener();
    });
  };

  var subscribe = function subscribe(listener) {
    listeners.push(listener);

    return function () {
      unsubscribe(listener);
    };
  };

  var unsubscribe = function unsubscribe(l) {
    listeners = listeners.filter(function (listener) {
      return listener !== l;
    });
  };

  dispatch({});

  return { getState: getState, dispatch: dispatch, subscribe: subscribe, unsubscribe: unsubscribe };
};

var combineReducers = function combineReducers(reducers) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    var keys = Object.keys(reducers),
        nextState = keys.reduce(function (nextState, key) {
      var reducer = reducers[key];

      nextState[key] = reducer(state[key], action);

      return nextState;
    }, {});

    return nextState;
  };
};

var Redux = { createStore: createStore, combineReducers: combineReducers };

module.exports = Redux;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9yZWR1eC5qcyJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJzdGF0ZSIsImxpc3RlbmVycyIsImdldFN0YXRlIiwiZGlzcGF0Y2giLCJhY3Rpb24iLCJmb3JFYWNoIiwibGlzdGVuZXIiLCJzdWJzY3JpYmUiLCJwdXNoIiwidW5zdWJzY3JpYmUiLCJsIiwiZmlsdGVyIiwiY29tYmluZVJlZHVjZXJzIiwicmVkdWNlcnMiLCJrZXlzIiwiT2JqZWN0IiwibmV4dFN0YXRlIiwicmVkdWNlIiwia2V5IiwiUmVkdXgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsT0FBRCxFQUFhO0FBQy9CLE1BQUlDLGNBQUo7QUFBQSxNQUNJQyxZQUFZLEVBRGhCOztBQUdBLE1BQU1DLFdBQVcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCLFdBQU9GLEtBQVA7QUFDRCxHQUZEOztBQUlBLE1BQU1HLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxNQUFELEVBQVk7QUFDM0JKLFlBQVFELFFBQVFDLEtBQVIsRUFBZUksTUFBZixDQUFSOztBQUVBSCxjQUFVSSxPQUFWLENBQWtCLFVBQUNDLFFBQUQ7QUFBQSxhQUFjQSxVQUFkO0FBQUEsS0FBbEI7QUFDRCxHQUpEOztBQU1BLE1BQU1DLFlBQVksU0FBWkEsU0FBWSxDQUFDRCxRQUFELEVBQWM7QUFDOUJMLGNBQVVPLElBQVYsQ0FBZUYsUUFBZjs7QUFFQSxXQUFRLFlBQU07QUFDWkcsa0JBQVlILFFBQVo7QUFDRCxLQUZEO0FBR0QsR0FORDs7QUFRQSxNQUFNRyxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3pCVCxnQkFBWUEsVUFBVVUsTUFBVixDQUFpQixVQUFDTCxRQUFELEVBQWM7QUFDekMsYUFBUUEsYUFBYUksQ0FBckI7QUFDRCxLQUZXLENBQVo7QUFHRCxHQUpEOztBQU1BUCxXQUFTLEVBQVQ7O0FBRUEsU0FBTyxFQUFFRCxrQkFBRixFQUFZQyxrQkFBWixFQUFzQkksb0JBQXRCLEVBQWlDRSx3QkFBakMsRUFBUDtBQUNELENBL0JEOztBQWlDQSxJQUFNRyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLFFBQUQsRUFBYztBQUNwQyxTQUFPLFlBQXdCO0FBQUEsUUFBdkJiLEtBQXVCLHVFQUFmLEVBQWU7QUFBQSxRQUFYSSxNQUFXOztBQUM3QixRQUFNVSxPQUFPQyxPQUFPRCxJQUFQLENBQVlELFFBQVosQ0FBYjtBQUFBLFFBQ01HLFlBQVlGLEtBQUtHLE1BQUwsQ0FBWSxVQUFDRCxTQUFELEVBQVlFLEdBQVosRUFBb0I7QUFDMUMsVUFBTW5CLFVBQVVjLFNBQVNLLEdBQVQsQ0FBaEI7O0FBRUFGLGdCQUFVRSxHQUFWLElBQWlCbkIsUUFBUUMsTUFBTWtCLEdBQU4sQ0FBUixFQUFvQmQsTUFBcEIsQ0FBakI7O0FBRUEsYUFBT1ksU0FBUDtBQUNELEtBTlcsRUFNVCxFQU5TLENBRGxCOztBQVNBLFdBQU9BLFNBQVA7QUFDRCxHQVhEO0FBWUQsQ0FiRDs7QUFlQSxJQUFNRyxRQUFRLEVBQUVyQix3QkFBRixFQUFlYyxnQ0FBZixFQUFkOztBQUVBUSxPQUFPQyxPQUFQLEdBQWlCRixLQUFqQiIsImZpbGUiOiJyZWR1eC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3JlYXRlU3RvcmUgPSAocmVkdWNlcikgPT4ge1xuICBsZXQgc3RhdGUsXG4gICAgICBsaXN0ZW5lcnMgPSBbXTtcblxuICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSAoYWN0aW9uKSA9PiB7XG4gICAgc3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcigpKTtcbiAgfTtcblxuICBjb25zdCBzdWJzY3JpYmUgPSAobGlzdGVuZXIpID0+IHtcbiAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gKCgpID0+IHtcbiAgICAgIHVuc3Vic2NyaWJlKGxpc3RlbmVyKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB1bnN1YnNjcmliZSA9IChsKSA9PiB7XG4gICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcigobGlzdGVuZXIpID0+IHtcbiAgICAgIHJldHVybiAobGlzdGVuZXIgIT09IGwpO1xuICAgIH0pO1xuICB9O1xuXG4gIGRpc3BhdGNoKHt9KTtcblxuICByZXR1cm4geyBnZXRTdGF0ZSwgZGlzcGF0Y2gsIHN1YnNjcmliZSwgdW5zdWJzY3JpYmUgfTtcbn07XG5cbmNvbnN0IGNvbWJpbmVSZWR1Y2VycyA9IChyZWR1Y2VycykgPT4ge1xuICByZXR1cm4gKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2VycyksXG4gICAgICAgICAgbmV4dFN0YXRlID0ga2V5cy5yZWR1Y2UoKG5leHRTdGF0ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWR1Y2VyID0gcmVkdWNlcnNba2V5XTtcblxuICAgICAgICAgICAgbmV4dFN0YXRlW2tleV0gPSByZWR1Y2VyKHN0YXRlW2tleV0sIGFjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXh0U3RhdGU7XG4gICAgICAgICAgfSwge30pO1xuXG4gICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgfTtcbn07XG5cbmNvbnN0IFJlZHV4ID0geyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVkdXg7XG4iXX0=