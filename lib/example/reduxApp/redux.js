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
    combineReducers: function() {
        return combineReducers;
    },
    createStore: function() {
        return createStore;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlU3RvcmUgPSAocmVkdWNlcikgPT4ge1xuICBsZXQgc3RhdGUsXG4gICAgICBsaXN0ZW5lcnMgPSBbXTtcblxuICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSAoYWN0aW9uKSA9PiB7XG4gICAgc3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHN1YnNjcmliZSA9IChsaXN0ZW5lcikgPT4ge1xuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiAoKCkgPT4ge1xuICAgICAgdW5zdWJzY3JpYmUobGlzdGVuZXIpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHVuc3Vic2NyaWJlID0gKGwpID0+IHtcbiAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKChsaXN0ZW5lcikgPT4ge1xuICAgICAgcmV0dXJuIChsaXN0ZW5lciAhPT0gbCk7XG4gICAgfSk7XG4gIH07XG5cbiAgZGlzcGF0Y2goKTtcblxuICByZXR1cm4geyBnZXRTdGF0ZSwgZGlzcGF0Y2gsIHN1YnNjcmliZSwgdW5zdWJzY3JpYmUgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb21iaW5lUmVkdWNlcnMgPSAocmVkdWNlcnMpID0+IHtcbiAgcmV0dXJuIChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpLFxuICAgICAgICAgIG5leHRTdGF0ZSA9IGtleXMucmVkdWNlKChuZXh0U3RhdGUsIGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVkdWNlciA9IHJlZHVjZXJzW2tleV07XG5cbiAgICAgICAgICAgIG5leHRTdGF0ZVtrZXldID0gcmVkdWNlcihzdGF0ZVtrZXldLCBhY3Rpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV4dFN0YXRlO1xuICAgICAgICAgIH0sIHt9KTtcblxuICAgIHJldHVybiBuZXh0U3RhdGU7XG4gIH07XG59O1xuIl0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsInN0YXRlIiwibGlzdGVuZXJzIiwiZ2V0U3RhdGUiLCJkaXNwYXRjaCIsImFjdGlvbiIsImZvckVhY2giLCJsaXN0ZW5lciIsInN1YnNjcmliZSIsInB1c2giLCJ1bnN1YnNjcmliZSIsImwiLCJmaWx0ZXIiLCJyZWR1Y2VycyIsImtleXMiLCJPYmplY3QiLCJuZXh0U3RhdGUiLCJyZWR1Y2UiLCJrZXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQXFDYUEsZUFBZTtlQUFmQTs7SUFuQ0FDLFdBQVc7ZUFBWEE7OztBQUFOLElBQU1BLGNBQWMsU0FBQ0M7SUFDMUIsSUFBSUMsT0FDQUMsWUFBWSxFQUFFO0lBRWxCLElBQU1DLFdBQVc7UUFDZixPQUFPRjtJQUNUO0lBRUEsSUFBTUcsV0FBVyxTQUFDQztRQUNoQkosUUFBUUQsUUFBUUMsT0FBT0k7UUFFdkJILFVBQVVJLE9BQU8sQ0FBQyxTQUFDQztZQUNqQkE7UUFDRjtJQUNGO0lBRUEsSUFBTUMsWUFBWSxTQUFDRDtRQUNqQkwsVUFBVU8sSUFBSSxDQUFDRjtRQUVmLE9BQVE7WUFDTkcsWUFBWUg7UUFDZDtJQUNGO0lBRUEsSUFBTUcsY0FBYyxTQUFDQztRQUNuQlQsWUFBWUEsVUFBVVUsTUFBTSxDQUFDLFNBQUNMO1lBQzVCLE9BQVFBLGFBQWFJO1FBQ3ZCO0lBQ0Y7SUFFQVA7SUFFQSxPQUFPO1FBQUVELFVBQUFBO1FBQVVDLFVBQUFBO1FBQVVJLFdBQUFBO1FBQVdFLGFBQUFBO0lBQVk7QUFDdEQ7QUFFTyxJQUFNWixrQkFBa0IsU0FBQ2U7SUFDOUIsT0FBTztZQUFDWix5RUFBUSxDQUFDLEdBQUdJO1FBQ2xCLElBQU1TLE9BQU9DLE9BQU9ELElBQUksQ0FBQ0QsV0FDbkJHLFlBQVlGLEtBQUtHLE1BQU0sQ0FBQyxTQUFDRCxXQUFXRTtZQUNsQyxJQUFNbEIsVUFBVWEsUUFBUSxDQUFDSyxJQUFJO1lBRTdCRixTQUFTLENBQUNFLElBQUksR0FBR2xCLFFBQVFDLEtBQUssQ0FBQ2lCLElBQUksRUFBRWI7WUFFckMsT0FBT1c7UUFDVCxHQUFHLENBQUM7UUFFVixPQUFPQTtJQUNUO0FBQ0YifQ==