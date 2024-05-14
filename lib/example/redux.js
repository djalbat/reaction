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
            listener();
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
            if (listener !== l) {
                return true;
            }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3JlZHV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBjcmVhdGVTdG9yZSA9IChyZWR1Y2VyKSA9PiB7XG4gIGxldCBzdGF0ZSxcbiAgICAgIGxpc3RlbmVycyA9IFtdO1xuXG4gIGNvbnN0IGdldFN0YXRlID0gKCkgPT4ge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcblxuICBjb25zdCBkaXNwYXRjaCA9IChhY3Rpb24pID0+IHtcbiAgICBzdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc3Vic2NyaWJlID0gKGxpc3RlbmVyKSA9PiB7XG4gICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuICgoKSA9PiB7XG4gICAgICB1bnN1YnNjcmliZShsaXN0ZW5lcik7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdW5zdWJzY3JpYmUgPSAobCkgPT4ge1xuICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoKGxpc3RlbmVyKSA9PiB7XG4gICAgICBpZiAobGlzdGVuZXIgIT09IGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZGlzcGF0Y2goe30pO1xuXG4gIHJldHVybiB7IGdldFN0YXRlLCBkaXNwYXRjaCwgc3Vic2NyaWJlLCB1bnN1YnNjcmliZSB9O1xufTtcblxuY29uc3QgY29tYmluZVJlZHVjZXJzID0gKHJlZHVjZXJzKSA9PiB7XG4gIHJldHVybiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKSxcbiAgICAgICAgICBuZXh0U3RhdGUgPSBrZXlzLnJlZHVjZSgobmV4dFN0YXRlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZHVjZXIgPSByZWR1Y2Vyc1trZXldO1xuXG4gICAgICAgICAgICBuZXh0U3RhdGVba2V5XSA9IHJlZHVjZXIoc3RhdGVba2V5XSwgYWN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgICAgICAgICB9LCB7fSk7XG5cbiAgICByZXR1cm4gbmV4dFN0YXRlO1xuICB9O1xufTtcblxuY29uc3QgUmVkdXggPSB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfTtcblxuZXhwb3J0IGRlZmF1bHQgUmVkdXg7XG4iXSwibmFtZXMiOlsiY3JlYXRlU3RvcmUiLCJyZWR1Y2VyIiwic3RhdGUiLCJsaXN0ZW5lcnMiLCJnZXRTdGF0ZSIsImRpc3BhdGNoIiwiYWN0aW9uIiwiZm9yRWFjaCIsImxpc3RlbmVyIiwic3Vic2NyaWJlIiwicHVzaCIsInVuc3Vic2NyaWJlIiwibCIsImZpbHRlciIsImNvbWJpbmVSZWR1Y2VycyIsInJlZHVjZXJzIiwia2V5cyIsIk9iamVjdCIsIm5leHRTdGF0ZSIsInJlZHVjZSIsImtleSIsIlJlZHV4Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBd0RBOzs7ZUFBQTs7O0FBdERBLElBQU1BLGNBQWMsU0FBQ0M7SUFDbkIsSUFBSUMsT0FDQUMsWUFBWSxFQUFFO0lBRWxCLElBQU1DLFdBQVc7UUFDZixPQUFPRjtJQUNUO0lBRUEsSUFBTUcsV0FBVyxTQUFDQztRQUNoQkosUUFBUUQsUUFBUUMsT0FBT0k7UUFFdkJILFVBQVVJLE9BQU8sQ0FBQyxTQUFDQztZQUNqQkE7UUFDRjtJQUNGO0lBRUEsSUFBTUMsWUFBWSxTQUFDRDtRQUNqQkwsVUFBVU8sSUFBSSxDQUFDRjtRQUVmLE9BQVE7WUFDTkcsWUFBWUg7UUFDZDtJQUNGO0lBRUEsSUFBTUcsY0FBYyxTQUFDQztRQUNuQlQsWUFBWUEsVUFBVVUsTUFBTSxDQUFDLFNBQUNMO1lBQzVCLElBQUlBLGFBQWFJLEdBQUc7Z0JBQ2xCLE9BQU87WUFDVDtRQUNGO0lBQ0Y7SUFFQVAsU0FBUyxDQUFDO0lBRVYsT0FBTztRQUFFRCxVQUFBQTtRQUFVQyxVQUFBQTtRQUFVSSxXQUFBQTtRQUFXRSxhQUFBQTtJQUFZO0FBQ3REO0FBRUEsSUFBTUcsa0JBQWtCLFNBQUNDO0lBQ3ZCLE9BQU87WUFBQ2IseUVBQVEsQ0FBQyxHQUFHSTtRQUNsQixJQUFNVSxPQUFPQyxPQUFPRCxJQUFJLENBQUNELFdBQ25CRyxZQUFZRixLQUFLRyxNQUFNLENBQUMsU0FBQ0QsV0FBV0U7WUFDbEMsSUFBTW5CLFVBQVVjLFFBQVEsQ0FBQ0ssSUFBSTtZQUU3QkYsU0FBUyxDQUFDRSxJQUFJLEdBQUduQixRQUFRQyxLQUFLLENBQUNrQixJQUFJLEVBQUVkO1lBRXJDLE9BQU9ZO1FBQ1QsR0FBRyxDQUFDO1FBRVYsT0FBT0E7SUFDVDtBQUNGO0FBRUEsSUFBTUcsUUFBUTtJQUFFckIsYUFBQUE7SUFBYWMsaUJBQUFBO0FBQWdCO0lBRTdDLFdBQWVPIn0=