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
const createStore = (reducer)=>{
    let state, listeners = [];
    const getState = ()=>{
        return state;
    };
    const dispatch = (action)=>{
        state = reducer(state, action);
        listeners.forEach((listener)=>{
            listener();
        });
    };
    const subscribe = (listener)=>{
        listeners.push(listener);
        return ()=>{
            unsubscribe(listener);
        };
    };
    const unsubscribe = (l)=>{
        listeners = listeners.filter((listener)=>{
            if (listener !== l) {
                return true;
            }
        });
    };
    dispatch({});
    return {
        getState,
        dispatch,
        subscribe,
        unsubscribe
    };
};
const combineReducers = (reducers)=>{
    return (state = {}, action)=>{
        const keys = Object.keys(reducers), nextState = keys.reduce((nextState, key)=>{
            const reducer = reducers[key];
            nextState[key] = reducer(state[key], action);
            return nextState;
        }, {});
        return nextState;
    };
};
const Redux = {
    createStore,
    combineReducers
};
const _default = Redux;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3JlZHV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBjcmVhdGVTdG9yZSA9IChyZWR1Y2VyKSA9PiB7XG4gIGxldCBzdGF0ZSxcbiAgICAgIGxpc3RlbmVycyA9IFtdO1xuXG4gIGNvbnN0IGdldFN0YXRlID0gKCkgPT4ge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcblxuICBjb25zdCBkaXNwYXRjaCA9IChhY3Rpb24pID0+IHtcbiAgICBzdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc3Vic2NyaWJlID0gKGxpc3RlbmVyKSA9PiB7XG4gICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuICgoKSA9PiB7XG4gICAgICB1bnN1YnNjcmliZShsaXN0ZW5lcik7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdW5zdWJzY3JpYmUgPSAobCkgPT4ge1xuICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoKGxpc3RlbmVyKSA9PiB7XG4gICAgICBpZiAobGlzdGVuZXIgIT09IGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZGlzcGF0Y2goe30pO1xuXG4gIHJldHVybiB7IGdldFN0YXRlLCBkaXNwYXRjaCwgc3Vic2NyaWJlLCB1bnN1YnNjcmliZSB9O1xufTtcblxuY29uc3QgY29tYmluZVJlZHVjZXJzID0gKHJlZHVjZXJzKSA9PiB7XG4gIHJldHVybiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKSxcbiAgICAgICAgICBuZXh0U3RhdGUgPSBrZXlzLnJlZHVjZSgobmV4dFN0YXRlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZHVjZXIgPSByZWR1Y2Vyc1trZXldO1xuXG4gICAgICAgICAgICBuZXh0U3RhdGVba2V5XSA9IHJlZHVjZXIoc3RhdGVba2V5XSwgYWN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgICAgICAgICB9LCB7fSk7XG5cbiAgICByZXR1cm4gbmV4dFN0YXRlO1xuICB9O1xufTtcblxuY29uc3QgUmVkdXggPSB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfTtcblxuZXhwb3J0IGRlZmF1bHQgUmVkdXg7XG4iXSwibmFtZXMiOlsiY3JlYXRlU3RvcmUiLCJyZWR1Y2VyIiwic3RhdGUiLCJsaXN0ZW5lcnMiLCJnZXRTdGF0ZSIsImRpc3BhdGNoIiwiYWN0aW9uIiwiZm9yRWFjaCIsImxpc3RlbmVyIiwic3Vic2NyaWJlIiwicHVzaCIsInVuc3Vic2NyaWJlIiwibCIsImZpbHRlciIsImNvbWJpbmVSZWR1Y2VycyIsInJlZHVjZXJzIiwia2V5cyIsIk9iamVjdCIsIm5leHRTdGF0ZSIsInJlZHVjZSIsImtleSIsIlJlZHV4Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF3REE7OztlQUFBOzs7QUF0REEsTUFBTUEsY0FBYyxDQUFDQztJQUNuQixJQUFJQyxPQUNBQyxZQUFZLEVBQUU7SUFFbEIsTUFBTUMsV0FBVztRQUNmLE9BQU9GO0lBQ1Q7SUFFQSxNQUFNRyxXQUFXLENBQUNDO1FBQ2hCSixRQUFRRCxRQUFRQyxPQUFPSTtRQUV2QkgsVUFBVUksT0FBTyxDQUFDLENBQUNDO1lBQ2pCQTtRQUNGO0lBQ0Y7SUFFQSxNQUFNQyxZQUFZLENBQUNEO1FBQ2pCTCxVQUFVTyxJQUFJLENBQUNGO1FBRWYsT0FBUTtZQUNORyxZQUFZSDtRQUNkO0lBQ0Y7SUFFQSxNQUFNRyxjQUFjLENBQUNDO1FBQ25CVCxZQUFZQSxVQUFVVSxNQUFNLENBQUMsQ0FBQ0w7WUFDNUIsSUFBSUEsYUFBYUksR0FBRztnQkFDbEIsT0FBTztZQUNUO1FBQ0Y7SUFDRjtJQUVBUCxTQUFTLENBQUM7SUFFVixPQUFPO1FBQUVEO1FBQVVDO1FBQVVJO1FBQVdFO0lBQVk7QUFDdEQ7QUFFQSxNQUFNRyxrQkFBa0IsQ0FBQ0M7SUFDdkIsT0FBTyxDQUFDYixRQUFRLENBQUMsQ0FBQyxFQUFFSTtRQUNsQixNQUFNVSxPQUFPQyxPQUFPRCxJQUFJLENBQUNELFdBQ25CRyxZQUFZRixLQUFLRyxNQUFNLENBQUMsQ0FBQ0QsV0FBV0U7WUFDbEMsTUFBTW5CLFVBQVVjLFFBQVEsQ0FBQ0ssSUFBSTtZQUU3QkYsU0FBUyxDQUFDRSxJQUFJLEdBQUduQixRQUFRQyxLQUFLLENBQUNrQixJQUFJLEVBQUVkO1lBRXJDLE9BQU9ZO1FBQ1QsR0FBRyxDQUFDO1FBRVYsT0FBT0E7SUFDVDtBQUNGO0FBRUEsTUFBTUcsUUFBUTtJQUFFckI7SUFBYWM7QUFBZ0I7TUFFN0MsV0FBZU8ifQ==