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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3JlZHV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBjcmVhdGVTdG9yZSA9IChyZWR1Y2VyKSA9PiB7XG4gIGxldCBzdGF0ZSxcbiAgICAgIGxpc3RlbmVycyA9IFtdO1xuXG4gIGNvbnN0IGdldFN0YXRlID0gKCkgPT4ge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcblxuICBjb25zdCBkaXNwYXRjaCA9IChhY3Rpb24pID0+IHtcbiAgICBzdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IGxpc3RlbmVyKCkpO1xuICB9O1xuXG4gIGNvbnN0IHN1YnNjcmliZSA9IChsaXN0ZW5lcikgPT4ge1xuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiAoKCkgPT4ge1xuICAgICAgdW5zdWJzY3JpYmUobGlzdGVuZXIpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHVuc3Vic2NyaWJlID0gKGwpID0+IHtcbiAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKChsaXN0ZW5lcikgPT4ge1xuICAgICAgcmV0dXJuIChsaXN0ZW5lciAhPT0gbCk7XG4gICAgfSk7XG4gIH07XG5cbiAgZGlzcGF0Y2goe30pO1xuXG4gIHJldHVybiB7IGdldFN0YXRlLCBkaXNwYXRjaCwgc3Vic2NyaWJlLCB1bnN1YnNjcmliZSB9O1xufTtcblxuY29uc3QgY29tYmluZVJlZHVjZXJzID0gKHJlZHVjZXJzKSA9PiB7XG4gIHJldHVybiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKSxcbiAgICAgICAgICBuZXh0U3RhdGUgPSBrZXlzLnJlZHVjZSgobmV4dFN0YXRlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZHVjZXIgPSByZWR1Y2Vyc1trZXldO1xuXG4gICAgICAgICAgICBuZXh0U3RhdGVba2V5XSA9IHJlZHVjZXIoc3RhdGVba2V5XSwgYWN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgICAgICAgICB9LCB7fSk7XG5cbiAgICByZXR1cm4gbmV4dFN0YXRlO1xuICB9O1xufTtcblxuY29uc3QgUmVkdXggPSB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfTtcblxuZXhwb3J0IGRlZmF1bHQgUmVkdXg7XG4iXSwibmFtZXMiOlsiY3JlYXRlU3RvcmUiLCJyZWR1Y2VyIiwic3RhdGUiLCJsaXN0ZW5lcnMiLCJnZXRTdGF0ZSIsImRpc3BhdGNoIiwiYWN0aW9uIiwiZm9yRWFjaCIsImxpc3RlbmVyIiwic3Vic2NyaWJlIiwicHVzaCIsInVuc3Vic2NyaWJlIiwibCIsImZpbHRlciIsImNvbWJpbmVSZWR1Y2VycyIsInJlZHVjZXJzIiwia2V5cyIsIk9iamVjdCIsIm5leHRTdGF0ZSIsInJlZHVjZSIsImtleSIsIlJlZHV4Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBb0RiLFNBQXFCOzs7ZUFBckIsUUFBcUI7OztBQWxEckIsSUFBTUEsV0FBVyxHQUFHLFNBQUNDLE9BQU8sRUFBSztJQUMvQixJQUFJQyxLQUFLLEVBQ0xDLFNBQVMsR0FBRyxFQUFFLEFBQUM7SUFFbkIsSUFBTUMsUUFBUSxHQUFHLFdBQU07UUFDckIsT0FBT0YsS0FBSyxDQUFDO0tBQ2QsQUFBQztJQUVGLElBQU1HLFFBQVEsR0FBRyxTQUFDQyxNQUFNLEVBQUs7UUFDM0JKLEtBQUssR0FBR0QsT0FBTyxDQUFDQyxLQUFLLEVBQUVJLE1BQU0sQ0FBQyxDQUFDO1FBRS9CSCxTQUFTLENBQUNJLE9BQU8sQ0FBQyxTQUFDQyxRQUFRO21CQUFLQSxRQUFRLEVBQUU7U0FBQSxDQUFDLENBQUM7S0FDN0MsQUFBQztJQUVGLElBQU1DLFNBQVMsR0FBRyxTQUFDRCxRQUFRLEVBQUs7UUFDOUJMLFNBQVMsQ0FBQ08sSUFBSSxDQUFDRixRQUFRLENBQUMsQ0FBQztRQUV6QixPQUFRLFdBQU07WUFDWkcsV0FBVyxDQUFDSCxRQUFRLENBQUMsQ0FBQztTQUN2QixDQUFFO0tBQ0osQUFBQztJQUVGLElBQU1HLFdBQVcsR0FBRyxTQUFDQyxDQUFDLEVBQUs7UUFDekJULFNBQVMsR0FBR0EsU0FBUyxDQUFDVSxNQUFNLENBQUMsU0FBQ0wsUUFBUSxFQUFLO1lBQ3pDLE9BQVFBLFFBQVEsS0FBS0ksQ0FBQyxDQUFFO1NBQ3pCLENBQUMsQ0FBQztLQUNKLEFBQUM7SUFFRlAsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRWIsT0FBTztRQUFFRCxRQUFRLEVBQVJBLFFBQVE7UUFBRUMsUUFBUSxFQUFSQSxRQUFRO1FBQUVJLFNBQVMsRUFBVEEsU0FBUztRQUFFRSxXQUFXLEVBQVhBLFdBQVc7S0FBRSxDQUFDO0NBQ3ZELEFBQUM7QUFFRixJQUFNRyxlQUFlLEdBQUcsU0FBQ0MsUUFBUSxFQUFLO0lBQ3BDLE9BQU8sV0FBd0I7WUFBdkJiLEtBQUssb0VBQUcsRUFBRSxFQUFFSSxNQUFNO1FBQ3hCLElBQU1VLElBQUksR0FBR0MsTUFBTSxDQUFDRCxJQUFJLENBQUNELFFBQVEsQ0FBQyxFQUM1QkcsU0FBUyxHQUFHRixJQUFJLENBQUNHLE1BQU0sQ0FBQyxTQUFDRCxTQUFTLEVBQUVFLEdBQUcsRUFBSztZQUMxQyxJQUFNbkIsT0FBTyxHQUFHYyxRQUFRLENBQUNLLEdBQUcsQ0FBQyxBQUFDO1lBRTlCRixTQUFTLENBQUNFLEdBQUcsQ0FBQyxHQUFHbkIsT0FBTyxDQUFDQyxLQUFLLENBQUNrQixHQUFHLENBQUMsRUFBRWQsTUFBTSxDQUFDLENBQUM7WUFFN0MsT0FBT1ksU0FBUyxDQUFDO1NBQ2xCLEVBQUUsRUFBRSxDQUFDLEFBQUM7UUFFYixPQUFPQSxTQUFTLENBQUM7S0FDbEIsQ0FBQztDQUNILEFBQUM7QUFFRixJQUFNRyxLQUFLLEdBQUc7SUFBRXJCLFdBQVcsRUFBWEEsV0FBVztJQUFFYyxlQUFlLEVBQWZBLGVBQWU7Q0FBRSxBQUFDO0lBRS9DLFFBQXFCLEdBQU5PLEtBQUsifQ==