"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
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
    dispatch({});
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
var Redux = {
    createStore: createStore,
    combineReducers: combineReducers
};
var _default = Redux;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3JlZHV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBjcmVhdGVTdG9yZSA9IChyZWR1Y2VyKSA9PiB7XG4gIGxldCBzdGF0ZSxcbiAgICAgIGxpc3RlbmVycyA9IFtdO1xuXG4gIGNvbnN0IGdldFN0YXRlID0gKCkgPT4ge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcblxuICBjb25zdCBkaXNwYXRjaCA9IChhY3Rpb24pID0+IHtcbiAgICBzdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IGxpc3RlbmVyKCkpO1xuICB9O1xuXG4gIGNvbnN0IHN1YnNjcmliZSA9IChsaXN0ZW5lcikgPT4ge1xuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiAoKCkgPT4ge1xuICAgICAgdW5zdWJzY3JpYmUobGlzdGVuZXIpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHVuc3Vic2NyaWJlID0gKGwpID0+IHtcbiAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKChsaXN0ZW5lcikgPT4ge1xuICAgICAgcmV0dXJuIChsaXN0ZW5lciAhPT0gbCk7XG4gICAgfSk7XG4gIH07XG5cbiAgZGlzcGF0Y2goe30pO1xuXG4gIHJldHVybiB7IGdldFN0YXRlLCBkaXNwYXRjaCwgc3Vic2NyaWJlLCB1bnN1YnNjcmliZSB9O1xufTtcblxuY29uc3QgY29tYmluZVJlZHVjZXJzID0gKHJlZHVjZXJzKSA9PiB7XG4gIHJldHVybiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKSxcbiAgICAgICAgICBuZXh0U3RhdGUgPSBrZXlzLnJlZHVjZSgobmV4dFN0YXRlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZHVjZXIgPSByZWR1Y2Vyc1trZXldO1xuXG4gICAgICAgICAgICBuZXh0U3RhdGVba2V5XSA9IHJlZHVjZXIoc3RhdGVba2V5XSwgYWN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgICAgICAgICB9LCB7fSk7XG5cbiAgICByZXR1cm4gbmV4dFN0YXRlO1xuICB9O1xufTtcblxuY29uc3QgUmVkdXggPSB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfTtcblxuZXhwb3J0IGRlZmF1bHQgUmVkdXg7XG4iXSwibmFtZXMiOlsiY3JlYXRlU3RvcmUiLCJyZWR1Y2VyIiwic3RhdGUiLCJsaXN0ZW5lcnMiLCJnZXRTdGF0ZSIsImRpc3BhdGNoIiwiYWN0aW9uIiwiZm9yRWFjaCIsImxpc3RlbmVyIiwic3Vic2NyaWJlIiwicHVzaCIsInVuc3Vic2NyaWJlIiwibCIsImZpbHRlciIsImNvbWJpbmVSZWR1Y2VycyIsInJlZHVjZXJzIiwia2V5cyIsIk9iamVjdCIsIm5leHRTdGF0ZSIsInJlZHVjZSIsImtleSIsIlJlZHV4Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvREE7OztlQUFBOzs7QUFsREEsSUFBTUEsY0FBYyxTQUFDQyxTQUFZO0lBQy9CLElBQUlDLE9BQ0FDLFlBQVksRUFBRTtJQUVsQixJQUFNQyxXQUFXLFdBQU07UUFDckIsT0FBT0Y7SUFDVDtJQUVBLElBQU1HLFdBQVcsU0FBQ0MsUUFBVztRQUMzQkosUUFBUUQsUUFBUUMsT0FBT0k7UUFFdkJILFVBQVVJLE9BQU8sQ0FBQyxTQUFDQzttQkFBYUE7O0lBQ2xDO0lBRUEsSUFBTUMsWUFBWSxTQUFDRCxVQUFhO1FBQzlCTCxVQUFVTyxJQUFJLENBQUNGO1FBRWYsT0FBUSxXQUFNO1lBQ1pHLFlBQVlIO1FBQ2Q7SUFDRjtJQUVBLElBQU1HLGNBQWMsU0FBQ0MsR0FBTTtRQUN6QlQsWUFBWUEsVUFBVVUsTUFBTSxDQUFDLFNBQUNMLFVBQWE7WUFDekMsT0FBUUEsYUFBYUk7UUFDdkI7SUFDRjtJQUVBUCxTQUFTLENBQUM7SUFFVixPQUFPO1FBQUVELFVBQUFBO1FBQVVDLFVBQUFBO1FBQVVJLFdBQUFBO1FBQVdFLGFBQUFBO0lBQVk7QUFDdEQ7QUFFQSxJQUFNRyxrQkFBa0IsU0FBQ0MsVUFBYTtJQUNwQyxPQUFPLFdBQXdCO1lBQXZCYix5RUFBUSxDQUFDLEdBQUdJO1FBQ2xCLElBQU1VLE9BQU9DLE9BQU9ELElBQUksQ0FBQ0QsV0FDbkJHLFlBQVlGLEtBQUtHLE1BQU0sQ0FBQyxTQUFDRCxXQUFXRSxLQUFRO1lBQzFDLElBQU1uQixVQUFVYyxRQUFRLENBQUNLLElBQUk7WUFFN0JGLFNBQVMsQ0FBQ0UsSUFBSSxHQUFHbkIsUUFBUUMsS0FBSyxDQUFDa0IsSUFBSSxFQUFFZDtZQUVyQyxPQUFPWTtRQUNULEdBQUcsQ0FBQztRQUVWLE9BQU9BO0lBQ1Q7QUFDRjtBQUVBLElBQU1HLFFBQVE7SUFBRXJCLGFBQUFBO0lBQWFjLGlCQUFBQTtBQUFnQjtJQUU3QyxXQUFlTyJ9