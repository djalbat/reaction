"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return visibilityFilter;
    }
});
const _constants = require("../constants");
function visibilityFilter(state = _constants.SHOW_ALL, action = {}) {
    const { type } = action;
    switch(type){
        case _constants.SET_VISIBILITY_FILTER:
            const { visibilityFilter: visibilityFilter1 } = action;
            state = visibilityFilter1;
            break;
    }
    return state;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHVjZXIvdmlzaWJpbGl0eUZpbHRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU0hPV19BTEwsIFNFVF9WSVNJQklMSVRZX0ZJTFRFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlzaWJpbGl0eUZpbHRlcihzdGF0ZSA9IFNIT1dfQUxMLCBhY3Rpb24gPSB7fSkge1xuICBjb25zdCB7IHR5cGUgfSA9IGFjdGlvbjtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFNFVF9WSVNJQklMSVRZX0ZJTFRFUiA6XG4gICAgICBjb25zdCB7IHZpc2liaWxpdHlGaWx0ZXIgfSA9IGFjdGlvbjtcblxuICAgICAgc3RhdGUgPSB2aXNpYmlsaXR5RmlsdGVyO1xuXG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdLCJuYW1lcyI6WyJ2aXNpYmlsaXR5RmlsdGVyIiwic3RhdGUiLCJTSE9XX0FMTCIsImFjdGlvbiIsInR5cGUiLCJTRVRfVklTSUJJTElUWV9GSUxURVIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBd0JBOzs7MkJBRndCO0FBRWpDLFNBQVNBLGlCQUFpQkMsUUFBUUMsbUJBQVEsRUFBRUMsU0FBUyxDQUFDLENBQUM7SUFDcEUsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0Q7SUFFakIsT0FBUUM7UUFDTixLQUFLQyxnQ0FBcUI7WUFDeEIsTUFBTSxFQUFFTCxrQkFBQUEsaUJBQWdCLEVBQUUsR0FBR0c7WUFFN0JGLFFBQVFEO1lBRVI7SUFDSjtJQUVBLE9BQU9DO0FBQ1QifQ==