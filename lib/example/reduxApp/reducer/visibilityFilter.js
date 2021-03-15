"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
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
exports.default = visibilityFilter;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHVjZXIvdmlzaWJpbGl0eUZpbHRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU0hPV19BTEwsIFNFVF9WSVNJQklMSVRZX0ZJTFRFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlzaWJpbGl0eUZpbHRlcihzdGF0ZSA9IFNIT1dfQUxMLCBhY3Rpb24gPSB7fSkge1xuICBjb25zdCB7IHR5cGUgfSA9IGFjdGlvbjtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFNFVF9WSVNJQklMSVRZX0ZJTFRFUiA6XG4gICAgICBjb25zdCB7IHZpc2liaWxpdHlGaWx0ZXIgfSA9IGFjdGlvbjtcblxuICAgICAgc3RhdGUgPSB2aXNpYmlsaXR5RmlsdGVyO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7OztJQUVBLFVBQUE7U0FFQSxnQkFBQSxDQUFBLEtBQUEsRUFBQSxNQUFBO1FBQUEsS0FBQSxHQUFBLEtBQUEsY0FGQSxVQUFBLFlBRUEsS0FBQSxFQUFBLE1BQUEsR0FBQSxNQUFBO1FBQUEsTUFBQTtRQUNBLElBQUEsR0FBQSxNQUFBLENBQUEsSUFBQTtXQUVBLElBQUE7YUFMQSxVQUFBO2dCQU9BLGlCQUFBLEdBQUEsTUFBQSxDQUFBLGdCQUFBO0FBRUEsaUJBQUEsR0FBQSxpQkFBQTs7O1dBSUEsS0FBQTs7a0JBWEEsZ0JBQUEifQ==