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
    default: function() {
        return _default;
    },
    useState: function() {
        return useState;
    }
});
var elementToStateWeakMap = new WeakMap();
function useState(initialState, element) {
    var state;
    if (elementToStateWeakMap.has(element)) {
        state = elementToStateWeakMap.get(element);
    } else {
        state = initialState; ///
        elementToStateWeakMap.set(element, state);
    }
    return [
        state,
        function(updatedState) {
            state = updatedState; ///
            elementToStateWeakMap.set(element, state);
            var update = null;
            element.remount(update);
        }
    ];
}
var _default = {
    useState: useState
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ob29rcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgZWxlbWVudFRvU3RhdGVXZWFrTWFwID0gbmV3IFdlYWtNYXAoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSwgZWxlbWVudCkge1xuICBsZXQgc3RhdGU7XG5cbiAgaWYgKGVsZW1lbnRUb1N0YXRlV2Vha01hcC5oYXMoZWxlbWVudCkpIHtcbiAgICBzdGF0ZSA9IGVsZW1lbnRUb1N0YXRlV2Vha01hcC5nZXQoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgc3RhdGUgPSBpbml0aWFsU3RhdGU7IC8vL1xuXG4gICAgZWxlbWVudFRvU3RhdGVXZWFrTWFwLnNldChlbGVtZW50LCBzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gKFsgc3RhdGUsICh1cGRhdGVkU3RhdGUpID0+IHtcbiAgICBzdGF0ZSA9IHVwZGF0ZWRTdGF0ZTsgIC8vL1xuXG4gICAgZWxlbWVudFRvU3RhdGVXZWFrTWFwLnNldChlbGVtZW50LCBzdGF0ZSk7XG5cbiAgICBjb25zdCB1cGRhdGUgPSBudWxsO1xuXG4gICAgZWxlbWVudC5yZW1vdW50KHVwZGF0ZSk7XG4gIH1dKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICB1c2VTdGF0ZVxufTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImVsZW1lbnRUb1N0YXRlV2Vha01hcCIsIldlYWtNYXAiLCJpbml0aWFsU3RhdGUiLCJlbGVtZW50Iiwic3RhdGUiLCJoYXMiLCJnZXQiLCJzZXQiLCJ1cGRhdGVkU3RhdGUiLCJ1cGRhdGUiLCJyZW1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUEwQkEsT0FFRTtlQUZGOztJQXRCZ0JBLFFBQVE7ZUFBUkE7OztBQUZoQixJQUFNQyx3QkFBd0IsSUFBSUM7QUFFM0IsU0FBU0YsU0FBU0csWUFBWSxFQUFFQyxPQUFPO0lBQzVDLElBQUlDO0lBRUosSUFBSUosc0JBQXNCSyxHQUFHLENBQUNGLFVBQVU7UUFDdENDLFFBQVFKLHNCQUFzQk0sR0FBRyxDQUFDSDtJQUNwQyxPQUFPO1FBQ0xDLFFBQVFGLGNBQWMsR0FBRztRQUV6QkYsc0JBQXNCTyxHQUFHLENBQUNKLFNBQVNDO0lBQ3JDO0lBRUEsT0FBUTtRQUFFQTtRQUFPLFNBQUNJO1lBQ2hCSixRQUFRSSxjQUFlLEdBQUc7WUFFMUJSLHNCQUFzQk8sR0FBRyxDQUFDSixTQUFTQztZQUVuQyxJQUFNSyxTQUFTO1lBRWZOLFFBQVFPLE9BQU8sQ0FBQ0Q7UUFDbEI7S0FBRTtBQUNKO0lBRUEsV0FBZTtJQUNiVixVQUFBQTtBQUNGIn0=