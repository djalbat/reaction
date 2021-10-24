"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = visibilityFilter1;
var _constants = require("../constants");
function visibilityFilter1(param, param1) {
    var state = param === void 0 ? _constants.SHOW_ALL : param, action = param1 === void 0 ? {
    } : param1;
    var type = action.type;
    switch(type){
        case _constants.SET_VISIBILITY_FILTER:
            var visibilityFilter = action.visibilityFilter;
            state = visibilityFilter;
            break;
    }
    return state;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHVjZXIvdmlzaWJpbGl0eUZpbHRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU0hPV19BTEwsIFNFVF9WSVNJQklMSVRZX0ZJTFRFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlzaWJpbGl0eUZpbHRlcihzdGF0ZSA9IFNIT1dfQUxMLCBhY3Rpb24gPSB7fSkge1xuICBjb25zdCB7IHR5cGUgfSA9IGFjdGlvbjtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFNFVF9WSVNJQklMSVRZX0ZJTFRFUiA6XG4gICAgICBjb25zdCB7IHZpc2liaWxpdHlGaWx0ZXIgfSA9IGFjdGlvbjtcblxuICAgICAgc3RhdGUgPSB2aXNpYmlsaXR5RmlsdGVyO1xuXG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdLCJuYW1lcyI6WyJ2aXNpYmlsaXR5RmlsdGVyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7O2tCQUlZQSxpQkFBZ0I7QUFGUSxHQUFjLENBQWQsVUFBYztTQUV0Q0EsaUJBQWdCLENBQUNDLEtBQWdCLEVBQUVDLE1BQVcsRUFBRSxDQUFDO1FBQWhDRCxLQUFLLEdBQUxBLEtBQWdCLGNBRlQsVUFBYyxZQUVyQkEsS0FBZ0IsRUFBRUMsTUFBTSxHQUFOQSxNQUFXLGNBQUYsQ0FBQztJQUFBLENBQUMsR0FBWEEsTUFBVztJQUNwRSxHQUFLLENBQUdDLElBQUksR0FBS0QsTUFBTSxDQUFmQyxJQUFJO0lBRVosTUFBTSxDQUFFQSxJQUFJO1FBQ1YsSUFBSSxDQU53QyxVQUFjO1lBT3hELEdBQUssQ0FBR0gsZ0JBQWdCLEdBQUtFLE1BQU0sQ0FBM0JGLGdCQUFnQjtZQUV4QkMsS0FBSyxHQUFHRCxnQkFBZ0I7WUFFeEIsS0FBSzs7SUFHVCxNQUFNLENBQUNDLEtBQUs7QUFDZCxDQUFDIn0=