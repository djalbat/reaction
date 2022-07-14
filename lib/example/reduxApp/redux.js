"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createStore: function() {
        return createStore;
    },
    combineReducers: function() {
        return combineReducers;
    }
});
var createStore = function(reducer) {
    var state, listeners = [];
    var getState = function() {
        return state;
    };
    var dispatch = function(action) {
        state = reducer(state, action);
        listeners.forEach(function(listener) {
            return listener();
        });
    };
    var subscribe = function(listener) {
        listeners.push(listener);
        return function() {
            unsubscribe(listener);
        };
    };
    var unsubscribe = function(l) {
        listeners = listeners.filter(function(listener) {
            return listener !== l;
        });
    };
    dispatch();
    return {
        getState: getState,
        dispatch: dispatch,
        subscribe: subscribe,
        unsubscribe: unsubscribe
    };
};
var combineReducers = function(reducers) {
    return function() {
        var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, action = arguments.length > 1 ? arguments[1] : void 0;
        var keys = Object.keys(reducers), nextState = keys.reduce(function(nextState, key) {
            var reducer = reducers[key];
            nextState[key] = reducer(state[key], action);
            return nextState;
        }, {});
        return nextState;
    };
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlU3RvcmUgPSAocmVkdWNlcikgPT4ge1xuICBsZXQgc3RhdGUsXG4gICAgICBsaXN0ZW5lcnMgPSBbXTtcblxuICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSAoYWN0aW9uKSA9PiB7XG4gICAgc3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcigpKTtcbiAgfTtcblxuICBjb25zdCBzdWJzY3JpYmUgPSAobGlzdGVuZXIpID0+IHtcbiAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gKCgpID0+IHtcbiAgICAgIHVuc3Vic2NyaWJlKGxpc3RlbmVyKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB1bnN1YnNjcmliZSA9IChsKSA9PiB7XG4gICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcigobGlzdGVuZXIpID0+IHtcbiAgICAgIHJldHVybiAobGlzdGVuZXIgIT09IGwpO1xuICAgIH0pO1xuICB9O1xuXG4gIGRpc3BhdGNoKCk7XG5cbiAgcmV0dXJuIHsgZ2V0U3RhdGUsIGRpc3BhdGNoLCBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlIH07XG59O1xuXG5leHBvcnQgY29uc3QgY29tYmluZVJlZHVjZXJzID0gKHJlZHVjZXJzKSA9PiB7XG4gIHJldHVybiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKSxcbiAgICAgICAgICBuZXh0U3RhdGUgPSBrZXlzLnJlZHVjZSgobmV4dFN0YXRlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZHVjZXIgPSByZWR1Y2Vyc1trZXldO1xuXG4gICAgICAgICAgICBuZXh0U3RhdGVba2V5XSA9IHJlZHVjZXIoc3RhdGVba2V5XSwgYWN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgICAgICAgICB9LCB7fSk7XG5cbiAgICByZXR1cm4gbmV4dFN0YXRlO1xuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsImNvbWJpbmVSZWR1Y2VycyIsInJlZHVjZXIiLCJzdGF0ZSIsImxpc3RlbmVycyIsImdldFN0YXRlIiwiZGlzcGF0Y2giLCJhY3Rpb24iLCJmb3JFYWNoIiwibGlzdGVuZXIiLCJzdWJzY3JpYmUiLCJwdXNoIiwidW5zdWJzY3JpYmUiLCJsIiwiZmlsdGVyIiwicmVkdWNlcnMiLCJrZXlzIiwiT2JqZWN0IiwibmV4dFN0YXRlIiwicmVkdWNlIiwia2V5Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0lBRUFBLFdBQVc7ZUFBWEEsV0FBVzs7SUFpQ1hDLGVBQWU7ZUFBZkEsZUFBZTs7O0FBakNyQixJQUFNRCxXQUFXLEdBQUcsU0FBQ0UsT0FBTyxFQUFLO0lBQ3RDLElBQUlDLEtBQUssRUFDTEMsU0FBUyxHQUFHLEVBQUUsQUFBQztJQUVuQixJQUFNQyxRQUFRLEdBQUcsV0FBTTtRQUNyQixPQUFPRixLQUFLLENBQUM7S0FDZCxBQUFDO0lBRUYsSUFBTUcsUUFBUSxHQUFHLFNBQUNDLE1BQU0sRUFBSztRQUMzQkosS0FBSyxHQUFHRCxPQUFPLENBQUNDLEtBQUssRUFBRUksTUFBTSxDQUFDLENBQUM7UUFFL0JILFNBQVMsQ0FBQ0ksT0FBTyxDQUFDLFNBQUNDLFFBQVE7bUJBQUtBLFFBQVEsRUFBRTtTQUFBLENBQUMsQ0FBQztLQUM3QyxBQUFDO0lBRUYsSUFBTUMsU0FBUyxHQUFHLFNBQUNELFFBQVEsRUFBSztRQUM5QkwsU0FBUyxDQUFDTyxJQUFJLENBQUNGLFFBQVEsQ0FBQyxDQUFDO1FBRXpCLE9BQVEsV0FBTTtZQUNaRyxXQUFXLENBQUNILFFBQVEsQ0FBQyxDQUFDO1NBQ3ZCLENBQUU7S0FDSixBQUFDO0lBRUYsSUFBTUcsV0FBVyxHQUFHLFNBQUNDLENBQUMsRUFBSztRQUN6QlQsU0FBUyxHQUFHQSxTQUFTLENBQUNVLE1BQU0sQ0FBQyxTQUFDTCxRQUFRLEVBQUs7WUFDekMsT0FBUUEsUUFBUSxLQUFLSSxDQUFDLENBQUU7U0FDekIsQ0FBQyxDQUFDO0tBQ0osQUFBQztJQUVGUCxRQUFRLEVBQUUsQ0FBQztJQUVYLE9BQU87UUFBRUQsUUFBUSxFQUFSQSxRQUFRO1FBQUVDLFFBQVEsRUFBUkEsUUFBUTtRQUFFSSxTQUFTLEVBQVRBLFNBQVM7UUFBRUUsV0FBVyxFQUFYQSxXQUFXO0tBQUUsQ0FBQztDQUN2RCxBQUFDO0FBRUssSUFBTVgsZUFBZSxHQUFHLFNBQUNjLFFBQVEsRUFBSztJQUMzQyxPQUFPLFdBQXdCO1lBQXZCWixLQUFLLG9FQUFHLEVBQUUsRUFBRUksTUFBTTtRQUN4QixJQUFNUyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDRCxRQUFRLENBQUMsRUFDNUJHLFNBQVMsR0FBR0YsSUFBSSxDQUFDRyxNQUFNLENBQUMsU0FBQ0QsU0FBUyxFQUFFRSxHQUFHLEVBQUs7WUFDMUMsSUFBTWxCLE9BQU8sR0FBR2EsUUFBUSxDQUFDSyxHQUFHLENBQUMsQUFBQztZQUU5QkYsU0FBUyxDQUFDRSxHQUFHLENBQUMsR0FBR2xCLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDaUIsR0FBRyxDQUFDLEVBQUViLE1BQU0sQ0FBQyxDQUFDO1lBRTdDLE9BQU9XLFNBQVMsQ0FBQztTQUNsQixFQUFFLEVBQUUsQ0FBQyxBQUFDO1FBRWIsT0FBT0EsU0FBUyxDQUFDO0tBQ2xCLENBQUM7Q0FDSCxBQUFDIn0=