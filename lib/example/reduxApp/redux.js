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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlU3RvcmUgPSAocmVkdWNlcikgPT4ge1xuICBsZXQgc3RhdGUsXG4gICAgICBsaXN0ZW5lcnMgPSBbXTtcblxuICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSAoYWN0aW9uKSA9PiB7XG4gICAgc3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcigpKTtcbiAgfTtcblxuICBjb25zdCBzdWJzY3JpYmUgPSAobGlzdGVuZXIpID0+IHtcbiAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gKCgpID0+IHtcbiAgICAgIHVuc3Vic2NyaWJlKGxpc3RlbmVyKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB1bnN1YnNjcmliZSA9IChsKSA9PiB7XG4gICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcigobGlzdGVuZXIpID0+IHtcbiAgICAgIHJldHVybiAobGlzdGVuZXIgIT09IGwpO1xuICAgIH0pO1xuICB9O1xuXG4gIGRpc3BhdGNoKCk7XG5cbiAgcmV0dXJuIHsgZ2V0U3RhdGUsIGRpc3BhdGNoLCBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlIH07XG59O1xuXG5leHBvcnQgY29uc3QgY29tYmluZVJlZHVjZXJzID0gKHJlZHVjZXJzKSA9PiB7XG4gIHJldHVybiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKSxcbiAgICAgICAgICBuZXh0U3RhdGUgPSBrZXlzLnJlZHVjZSgobmV4dFN0YXRlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZHVjZXIgPSByZWR1Y2Vyc1trZXldO1xuXG4gICAgICAgICAgICBuZXh0U3RhdGVba2V5XSA9IHJlZHVjZXIoc3RhdGVba2V5XSwgYWN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgICAgICAgICB9LCB7fSk7XG5cbiAgICByZXR1cm4gbmV4dFN0YXRlO1xuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsImNvbWJpbmVSZWR1Y2VycyIsInJlZHVjZXIiLCJzdGF0ZSIsImxpc3RlbmVycyIsImdldFN0YXRlIiwiZGlzcGF0Y2giLCJhY3Rpb24iLCJmb3JFYWNoIiwibGlzdGVuZXIiLCJzdWJzY3JpYmUiLCJwdXNoIiwidW5zdWJzY3JpYmUiLCJsIiwiZmlsdGVyIiwicmVkdWNlcnMiLCJrZXlzIiwiT2JqZWN0IiwibmV4dFN0YXRlIiwicmVkdWNlIiwia2V5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFFYUEsV0FBVztlQUFYQTs7SUFpQ0FDLGVBQWU7ZUFBZkE7OztBQWpDTixJQUFNRCxjQUFjLFNBQUNFLFNBQVk7SUFDdEMsSUFBSUMsT0FDQUMsWUFBWSxFQUFFO0lBRWxCLElBQU1DLFdBQVcsV0FBTTtRQUNyQixPQUFPRjtJQUNUO0lBRUEsSUFBTUcsV0FBVyxTQUFDQyxRQUFXO1FBQzNCSixRQUFRRCxRQUFRQyxPQUFPSTtRQUV2QkgsVUFBVUksT0FBTyxDQUFDLFNBQUNDO21CQUFhQTs7SUFDbEM7SUFFQSxJQUFNQyxZQUFZLFNBQUNELFVBQWE7UUFDOUJMLFVBQVVPLElBQUksQ0FBQ0Y7UUFFZixPQUFRLFdBQU07WUFDWkcsWUFBWUg7UUFDZDtJQUNGO0lBRUEsSUFBTUcsY0FBYyxTQUFDQyxHQUFNO1FBQ3pCVCxZQUFZQSxVQUFVVSxNQUFNLENBQUMsU0FBQ0wsVUFBYTtZQUN6QyxPQUFRQSxhQUFhSTtRQUN2QjtJQUNGO0lBRUFQO0lBRUEsT0FBTztRQUFFRCxVQUFBQTtRQUFVQyxVQUFBQTtRQUFVSSxXQUFBQTtRQUFXRSxhQUFBQTtJQUFZO0FBQ3REO0FBRU8sSUFBTVgsa0JBQWtCLFNBQUNjLFVBQWE7SUFDM0MsT0FBTyxXQUF3QjtZQUF2QloseUVBQVEsQ0FBQyxHQUFHSTtRQUNsQixJQUFNUyxPQUFPQyxPQUFPRCxJQUFJLENBQUNELFdBQ25CRyxZQUFZRixLQUFLRyxNQUFNLENBQUMsU0FBQ0QsV0FBV0UsS0FBUTtZQUMxQyxJQUFNbEIsVUFBVWEsUUFBUSxDQUFDSyxJQUFJO1lBRTdCRixTQUFTLENBQUNFLElBQUksR0FBR2xCLFFBQVFDLEtBQUssQ0FBQ2lCLElBQUksRUFBRWI7WUFFckMsT0FBT1c7UUFDVCxHQUFHLENBQUM7UUFFVixPQUFPQTtJQUNUO0FBQ0YifQ==