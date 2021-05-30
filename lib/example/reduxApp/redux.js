"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createStore = exports.combineReducers = void 0;
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
exports.createStore = createStore;
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
exports.combineReducers = combineReducers;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlU3RvcmUgPSAocmVkdWNlcikgPT4ge1xuICBsZXQgc3RhdGUsXG4gICAgICBsaXN0ZW5lcnMgPSBbXTtcblxuICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSAoYWN0aW9uKSA9PiB7XG4gICAgc3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcigpKTtcbiAgfTtcblxuICBjb25zdCBzdWJzY3JpYmUgPSAobGlzdGVuZXIpID0+IHtcbiAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gKCgpID0+IHtcbiAgICAgIHVuc3Vic2NyaWJlKGxpc3RlbmVyKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB1bnN1YnNjcmliZSA9IChsKSA9PiB7XG4gICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcigobGlzdGVuZXIpID0+IHtcbiAgICAgIHJldHVybiAobGlzdGVuZXIgIT09IGwpO1xuICAgIH0pO1xuICB9O1xuXG4gIGRpc3BhdGNoKCk7XG5cbiAgcmV0dXJuIHsgZ2V0U3RhdGUsIGRpc3BhdGNoLCBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlIH07XG59O1xuXG5leHBvcnQgY29uc3QgY29tYmluZVJlZHVjZXJzID0gKHJlZHVjZXJzKSA9PiB7XG4gIHJldHVybiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKSxcbiAgICAgICAgICBuZXh0U3RhdGUgPSBrZXlzLnJlZHVjZSgobmV4dFN0YXRlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZHVjZXIgPSByZWR1Y2Vyc1trZXldO1xuXG4gICAgICAgICAgICBuZXh0U3RhdGVba2V5XSA9IHJlZHVjZXIoc3RhdGVba2V5XSwgYWN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgICAgICAgICB9LCB7fSk7XG5cbiAgICByZXR1cm4gbmV4dFN0YXRlO1xuICB9O1xufTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVDLFdBQVcsWUFBSSxPQUFPO1FBQzdCLEtBQUssRUFDTCxTQUFTO1FBRVAsUUFBUTtlQUNMLEtBQUs7O1FBR1IsUUFBUSxZQUFJLE1BQU07UUFDdEIsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTTtRQUU3QixTQUFTLENBQUMsT0FBTyxVQUFFLFFBQVE7bUJBQUssUUFBUTs7O1FBR3BDLFNBQVMsWUFBSSxRQUFRO1FBQ3pCLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUTs7WUFHckIsV0FBVyxDQUFDLFFBQVE7OztRQUlsQixXQUFXLFlBQUksQ0FBQztRQUNwQixTQUFTLEdBQUcsU0FBUyxDQUFDLE1BQU0sVUFBRSxRQUFRO21CQUM1QixRQUFRLEtBQUssQ0FBQzs7O0lBSTFCLFFBQVE7O1FBRUMsUUFBUSxFQUFSLFFBQVE7UUFBRSxRQUFRLEVBQVIsUUFBUTtRQUFFLFNBQVMsRUFBVCxTQUFTO1FBQUUsV0FBVyxFQUFYLFdBQVc7OztRQTlCeEMsV0FBVyxHQUFYLFdBQVc7SUFpQ1gsZUFBZSxZQUFJLFFBQVE7MkJBQ2xCLE1BQU07WUFBbEIsS0FBSzs7WUFDTCxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQzNCLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxVQUFFLFVBQVMsRUFBRSxHQUFHO2dCQUMvQixPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUc7WUFFNUIsVUFBUyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxNQUFNO21CQUVwQyxVQUFTOzs7ZUFHakIsU0FBUzs7O1FBWFAsZUFBZSxHQUFmLGVBQWUifQ==