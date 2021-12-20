"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = visibilityFilter;
var _constants = require("../constants");
function visibilityFilter() {
    var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.SHOW_ALL, action = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    };
    var type = action.type;
    switch(type){
        case _constants.SET_VISIBILITY_FILTER:
            var visibilityFilter1 = action.visibilityFilter;
            state = visibilityFilter1;
            break;
    }
    return state;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHVjZXIvdmlzaWJpbGl0eUZpbHRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU0hPV19BTEwsIFNFVF9WSVNJQklMSVRZX0ZJTFRFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlzaWJpbGl0eUZpbHRlcihzdGF0ZSA9IFNIT1dfQUxMLCBhY3Rpb24gPSB7fSkge1xuICBjb25zdCB7IHR5cGUgfSA9IGFjdGlvbjtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFNFVF9WSVNJQklMSVRZX0ZJTFRFUiA6XG4gICAgICBjb25zdCB7IHZpc2liaWxpdHlGaWx0ZXIgfSA9IGFjdGlvbjtcblxuICAgICAgc3RhdGUgPSB2aXNpYmlsaXR5RmlsdGVyO1xuXG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdLCJuYW1lcyI6WyJ2aXNpYmlsaXR5RmlsdGVyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7O2tCQUlZQSxnQkFBZ0I7QUFGUSxHQUFjLENBQWQsVUFBYztTQUV0Q0EsZ0JBQWdCLEdBQWdDLENBQUM7UUFBaENDLEtBQUssb0VBRkUsVUFBYyxXQUVIQyxNQUFNLG9FQUFHLENBQUM7SUFBQSxDQUFDO0lBQ3BFLEdBQUssQ0FBR0MsSUFBSSxHQUFLRCxNQUFNLENBQWZDLElBQUk7SUFFWixNQUFNLENBQUVBLElBQUk7UUFDVixJQUFJLENBTndDLFVBQWM7WUFPeEQsR0FBSyxDQUFHSCxpQkFBZ0IsR0FBS0UsTUFBTSxDQUEzQkYsZ0JBQWdCO1lBRXhCQyxLQUFLLEdBQUdELGlCQUFnQjtZQUV4QixLQUFLOztJQUdULE1BQU0sQ0FBQ0MsS0FBSztBQUNkLENBQUMifQ==