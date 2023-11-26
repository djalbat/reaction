"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useState", {
    enumerable: true,
    get: function() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ob29rcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgZWxlbWVudFRvU3RhdGVXZWFrTWFwID0gbmV3IFdlYWtNYXAoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSwgZWxlbWVudCkge1xuICBsZXQgc3RhdGU7XG5cbiAgaWYgKGVsZW1lbnRUb1N0YXRlV2Vha01hcC5oYXMoZWxlbWVudCkpIHtcbiAgICBzdGF0ZSA9IGVsZW1lbnRUb1N0YXRlV2Vha01hcC5nZXQoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgc3RhdGUgPSBpbml0aWFsU3RhdGU7IC8vL1xuXG4gICAgZWxlbWVudFRvU3RhdGVXZWFrTWFwLnNldChlbGVtZW50LCBzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gKFsgc3RhdGUsICh1cGRhdGVkU3RhdGUpID0+IHtcbiAgICBzdGF0ZSA9IHVwZGF0ZWRTdGF0ZTsgIC8vL1xuXG4gICAgZWxlbWVudFRvU3RhdGVXZWFrTWFwLnNldChlbGVtZW50LCBzdGF0ZSk7XG5cbiAgICBjb25zdCB1cGRhdGUgPSBudWxsO1xuXG4gICAgZWxlbWVudC5yZW1vdW50KHVwZGF0ZSk7XG4gIH1dKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImVsZW1lbnRUb1N0YXRlV2Vha01hcCIsIldlYWtNYXAiLCJpbml0aWFsU3RhdGUiLCJlbGVtZW50Iiwic3RhdGUiLCJoYXMiLCJnZXQiLCJzZXQiLCJ1cGRhdGVkU3RhdGUiLCJ1cGRhdGUiLCJyZW1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJZ0JBOzs7ZUFBQUE7OztBQUZoQixJQUFNQyx3QkFBd0IsSUFBSUM7QUFFM0IsU0FBU0YsU0FBU0csWUFBWSxFQUFFQyxPQUFPO0lBQzVDLElBQUlDO0lBRUosSUFBSUosc0JBQXNCSyxHQUFHLENBQUNGLFVBQVU7UUFDdENDLFFBQVFKLHNCQUFzQk0sR0FBRyxDQUFDSDtJQUNwQyxPQUFPO1FBQ0xDLFFBQVFGLGNBQWMsR0FBRztRQUV6QkYsc0JBQXNCTyxHQUFHLENBQUNKLFNBQVNDO0lBQ3JDO0lBRUEsT0FBUTtRQUFFQTtRQUFPLFNBQUNJO1lBQ2hCSixRQUFRSSxjQUFlLEdBQUc7WUFFMUJSLHNCQUFzQk8sR0FBRyxDQUFDSixTQUFTQztZQUVuQyxJQUFNSyxTQUFTO1lBRWZOLFFBQVFPLE9BQU8sQ0FBQ0Q7UUFDbEI7S0FBRTtBQUNKIn0=