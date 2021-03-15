"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
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
    dispatch({
    });
    return {
        getState: getState,
        dispatch: dispatch,
        subscribe: subscribe,
        unsubscribe: unsubscribe
    };
};
var combineReducers = function(reducers) {
    return function(param, action) {
        var state = param === void 0 ? {
        } : param;
        var keys = Object.keys(reducers), nextState = keys.reduce(function(nextState1, key) {
            var reducer = reducers[key];
            nextState1[key] = reducer(state[key], action);
            return nextState1;
        }, {
        });
        return nextState;
    };
};
var Redux = {
    createStore: createStore,
    combineReducers: combineReducers
};
var _default = Redux;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3JlZHV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBjcmVhdGVTdG9yZSA9IChyZWR1Y2VyKSA9PiB7XG4gIGxldCBzdGF0ZSxcbiAgICAgIGxpc3RlbmVycyA9IFtdO1xuXG4gIGNvbnN0IGdldFN0YXRlID0gKCkgPT4ge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcblxuICBjb25zdCBkaXNwYXRjaCA9IChhY3Rpb24pID0+IHtcbiAgICBzdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IGxpc3RlbmVyKCkpO1xuICB9O1xuXG4gIGNvbnN0IHN1YnNjcmliZSA9IChsaXN0ZW5lcikgPT4ge1xuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiAoKCkgPT4ge1xuICAgICAgdW5zdWJzY3JpYmUobGlzdGVuZXIpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHVuc3Vic2NyaWJlID0gKGwpID0+IHtcbiAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKChsaXN0ZW5lcikgPT4ge1xuICAgICAgcmV0dXJuIChsaXN0ZW5lciAhPT0gbCk7XG4gICAgfSk7XG4gIH07XG5cbiAgZGlzcGF0Y2goe30pO1xuXG4gIHJldHVybiB7IGdldFN0YXRlLCBkaXNwYXRjaCwgc3Vic2NyaWJlLCB1bnN1YnNjcmliZSB9O1xufTtcblxuY29uc3QgY29tYmluZVJlZHVjZXJzID0gKHJlZHVjZXJzKSA9PiB7XG4gIHJldHVybiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKSxcbiAgICAgICAgICBuZXh0U3RhdGUgPSBrZXlzLnJlZHVjZSgobmV4dFN0YXRlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZHVjZXIgPSByZWR1Y2Vyc1trZXldO1xuXG4gICAgICAgICAgICBuZXh0U3RhdGVba2V5XSA9IHJlZHVjZXIoc3RhdGVba2V5XSwgYWN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgICAgICAgICB9LCB7fSk7XG5cbiAgICByZXR1cm4gbmV4dFN0YXRlO1xuICB9O1xufTtcblxuY29uc3QgUmVkdXggPSB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfTtcblxuZXhwb3J0IGRlZmF1bHQgUmVkdXg7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7Ozs7SUFFQSxXQUFBLFlBQUEsT0FBQTtRQUNBLEtBQUEsRUFDQSxTQUFBO1FBRUEsUUFBQTtlQUNBLEtBQUE7O1FBR0EsUUFBQSxZQUFBLE1BQUE7QUFDQSxhQUFBLEdBQUEsT0FBQSxDQUFBLEtBQUEsRUFBQSxNQUFBO0FBRUEsaUJBQUEsQ0FBQSxPQUFBLFVBQUEsUUFBQTttQkFBQSxRQUFBOzs7UUFHQSxTQUFBLFlBQUEsUUFBQTtBQUNBLGlCQUFBLENBQUEsSUFBQSxDQUFBLFFBQUE7O0FBR0EsdUJBQUEsQ0FBQSxRQUFBOzs7UUFJQSxXQUFBLFlBQUEsQ0FBQTtBQUNBLGlCQUFBLEdBQUEsU0FBQSxDQUFBLE1BQUEsVUFBQSxRQUFBO21CQUNBLFFBQUEsS0FBQSxDQUFBOzs7QUFJQSxZQUFBOzs7QUFFQSxnQkFBQSxFQUFBLFFBQUE7QUFBQSxnQkFBQSxFQUFBLFFBQUE7QUFBQSxpQkFBQSxFQUFBLFNBQUE7QUFBQSxtQkFBQSxFQUFBLFdBQUE7OztJQUdBLGVBQUEsWUFBQSxRQUFBOzJCQUNBLE1BQUE7WUFBQSxLQUFBOztZQUNBLElBQUEsR0FBQSxNQUFBLENBQUEsSUFBQSxDQUFBLFFBQUEsR0FDQSxTQUFBLEdBQUEsSUFBQSxDQUFBLE1BQUEsVUFBQSxVQUFBLEVBQUEsR0FBQTtnQkFDQSxPQUFBLEdBQUEsUUFBQSxDQUFBLEdBQUE7QUFFQSxzQkFBQSxDQUFBLEdBQUEsSUFBQSxPQUFBLENBQUEsS0FBQSxDQUFBLEdBQUEsR0FBQSxNQUFBO21CQUVBLFVBQUE7OztlQUdBLFNBQUE7OztJQUlBLEtBQUE7QUFBQSxlQUFBLEVBQUEsV0FBQTtBQUFBLG1CQUFBLEVBQUEsZUFBQTs7ZUFFQSxLQUFBIn0=