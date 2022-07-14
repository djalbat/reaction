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
var _constants = require("../constants");
function visibilityFilter() {
    var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.SHOW_ALL, action = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var type = action.type;
    switch(type){
        case _constants.SET_VISIBILITY_FILTER:
            var visibilityFilter = action.visibilityFilter;
            state = visibilityFilter;
            break;
    }
    return state;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHVjZXIvdmlzaWJpbGl0eUZpbHRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU0hPV19BTEwsIFNFVF9WSVNJQklMSVRZX0ZJTFRFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlzaWJpbGl0eUZpbHRlcihzdGF0ZSA9IFNIT1dfQUxMLCBhY3Rpb24gPSB7fSkge1xuICBjb25zdCB7IHR5cGUgfSA9IGFjdGlvbjtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFNFVF9WSVNJQklMSVRZX0ZJTFRFUiA6XG4gICAgICBjb25zdCB7IHZpc2liaWxpdHlGaWx0ZXIgfSA9IGFjdGlvbjtcblxuICAgICAgc3RhdGUgPSB2aXNpYmlsaXR5RmlsdGVyO1xuXG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdLCJuYW1lcyI6WyJ2aXNpYmlsaXR5RmlsdGVyIiwic3RhdGUiLCJTSE9XX0FMTCIsImFjdGlvbiIsInR5cGUiLCJTRVRfVklTSUJJTElUWV9GSUxURVIiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkFJYixTQWFDOzs7ZUFidUJBLGdCQUFnQjs7O3lCQUZRLGNBQWM7QUFFL0MsU0FBU0EsZ0JBQWdCLEdBQWdDO1FBQS9CQyxLQUFLLEdBQUxBLCtDQUFnQixrQkFBUkMsVUFBUSxTQUFBLEVBQUVDLE1BQU0sR0FBTkEsK0NBQVcsa0JBQUYsRUFBRTtJQUNwRSxJQUFNLEFBQUVDLElBQUksR0FBS0QsTUFBTSxDQUFmQyxJQUFJLEFBQVcsQUFBQztJQUV4QixPQUFRQSxJQUFJO1FBQ1YsS0FBS0MsVUFBcUIsc0JBQUE7WUFDeEIsSUFBTSxBQUFFTCxnQkFBZ0IsR0FBS0csTUFBTSxDQUEzQkgsZ0JBQWdCLEFBQVcsQUFBQztZQUVwQ0MsS0FBSyxHQUFHRCxnQkFBZ0IsQ0FBQztZQUV6QixNQUFNO0tBQ1Q7SUFFRCxPQUFPQyxLQUFLLENBQUM7Q0FDZCJ9