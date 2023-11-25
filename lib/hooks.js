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
            element.remount();
        }
    ];
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ob29rcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgZWxlbWVudFRvU3RhdGVXZWFrTWFwID0gbmV3IFdlYWtNYXAoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSwgZWxlbWVudCkge1xuICBsZXQgc3RhdGU7XG5cbiAgaWYgKGVsZW1lbnRUb1N0YXRlV2Vha01hcC5oYXMoZWxlbWVudCkpIHtcbiAgICBzdGF0ZSA9IGVsZW1lbnRUb1N0YXRlV2Vha01hcC5nZXQoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgc3RhdGUgPSBpbml0aWFsU3RhdGU7IC8vL1xuXG4gICAgZWxlbWVudFRvU3RhdGVXZWFrTWFwLnNldChlbGVtZW50LCBzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gKFsgc3RhdGUsICh1cGRhdGVkU3RhdGUpID0+IHtcbiAgICBzdGF0ZSA9IHVwZGF0ZWRTdGF0ZTsgIC8vL1xuXG4gICAgZWxlbWVudFRvU3RhdGVXZWFrTWFwLnNldChlbGVtZW50LCBzdGF0ZSk7XG5cbiAgICBlbGVtZW50LnJlbW91bnQoKTtcbiAgfV0pO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiZWxlbWVudFRvU3RhdGVXZWFrTWFwIiwiV2Vha01hcCIsImluaXRpYWxTdGF0ZSIsImVsZW1lbnQiLCJzdGF0ZSIsImhhcyIsImdldCIsInNldCIsInVwZGF0ZWRTdGF0ZSIsInJlbW91bnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlnQkE7OztlQUFBQTs7O0FBRmhCLElBQU1DLHdCQUF3QixJQUFJQztBQUUzQixTQUFTRixTQUFTRyxZQUFZLEVBQUVDLE9BQU87SUFDNUMsSUFBSUM7SUFFSixJQUFJSixzQkFBc0JLLEdBQUcsQ0FBQ0YsVUFBVTtRQUN0Q0MsUUFBUUosc0JBQXNCTSxHQUFHLENBQUNIO0lBQ3BDLE9BQU87UUFDTEMsUUFBUUYsY0FBYyxHQUFHO1FBRXpCRixzQkFBc0JPLEdBQUcsQ0FBQ0osU0FBU0M7SUFDckM7SUFFQSxPQUFRO1FBQUVBO1FBQU8sU0FBQ0k7WUFDaEJKLFFBQVFJLGNBQWUsR0FBRztZQUUxQlIsc0JBQXNCTyxHQUFHLENBQUNKLFNBQVNDO1lBRW5DRCxRQUFRTSxPQUFPO1FBQ2pCO0tBQUU7QUFDSiJ9