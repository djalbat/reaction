"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = visibilityFilter;
var _constants = require("../constants");
function visibilityFilter(param, param1) {
    var state = param === void 0 ? _constants.SHOW_ALL : param, action = param1 === void 0 ? {
    } : param1;
    var type = action.type;
    switch(type){
        case _constants.SET_VISIBILITY_FILTER:
            var visibilityFilter1 = action.visibilityFilter;
            state = visibilityFilter1;
            break;
    }
    return state;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHVjZXIvdmlzaWJpbGl0eUZpbHRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU0hPV19BTEwsIFNFVF9WSVNJQklMSVRZX0ZJTFRFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlzaWJpbGl0eUZpbHRlcihzdGF0ZSA9IFNIT1dfQUxMLCBhY3Rpb24gPSB7fSkge1xuICBjb25zdCB7IHR5cGUgfSA9IGFjdGlvbjtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFNFVF9WSVNJQklMSVRZX0ZJTFRFUiA6XG4gICAgICBjb25zdCB7IHZpc2liaWxpdHlGaWx0ZXIgfSA9IGFjdGlvbjtcblxuICAgICAgc3RhdGUgPSB2aXNpYmlsaXR5RmlsdGVyO1xuXG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O2tCQUlZLGdCQUFnQjtBQUZRLEdBQWMsQ0FBZCxVQUFjO1NBRXRDLGdCQUFnQixDQUFDLEtBQWdCLEVBQUUsTUFBVyxFQUFFLENBQUM7UUFBaEMsS0FBSyxHQUFMLEtBQWdCLGNBRlQsVUFBYyxZQUVyQixLQUFnQixFQUFFLE1BQU0sR0FBTixNQUFXO1FBQVgsTUFBVztJQUNwRSxHQUFLLENBQUcsSUFBSSxHQUFLLE1BQU0sQ0FBZixJQUFJO1dBRUosSUFBSTthQUxrQyxVQUFjO1lBT3hELEdBQUssQ0FBRyxpQkFBZ0IsR0FBSyxNQUFNLENBQTNCLGdCQUFnQjtZQUV4QixLQUFLLEdBQUcsaUJBQWdCOzs7V0FLckIsS0FBSztBQUNkLENBQUMifQ==