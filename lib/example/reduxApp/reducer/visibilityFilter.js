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
            var visibilityFilter = action.visibilityFilter;
            state = visibilityFilter;
            break;
    }
    return state;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHVjZXIvdmlzaWJpbGl0eUZpbHRlci5qcyJdLCJuYW1lcyI6WyJTSE9XX0FMTCIsIlNFVF9WSVNJQklMSVRZX0ZJTFRFUiIsInZpc2liaWxpdHlGaWx0ZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7a0JBSVksZ0JBQWdCO0FBRlEsR0FBYyxDQUFkLFVBQWM7U0FFdEMsZ0JBQWdCLENBQUMsS0FBZ0IsRUFBRSxNQUFXLEVBQUUsQ0FBQztRQUFoQyxLQUFLLEdBQUwsS0FBZ0IsY0FGVCxVQUFjLFlBRXJCLEtBQWdCLEVBQUUsTUFBTSxHQUFOLE1BQVcsY0FBRixDQUFDO0lBQUEsQ0FBQyxHQUFYLE1BQVc7SUFDcEUsR0FBSyxDQUFHLElBQUksR0FBSyxNQUFNLENBQWYsSUFBSTtJQUVaLE1BQU0sQ0FBRSxJQUFJO1FBQ1YsSUFBSSxDQU53QyxVQUFjO1lBT3hELEdBQUssQ0FBRyxnQkFBZ0IsR0FBSyxNQUFNLENBQTNCLGdCQUFnQjtZQUV4QixLQUFLLEdBQUcsZ0JBQWdCO1lBRXhCLEtBQUs7O0lBR1QsTUFBTSxDQUFDLEtBQUs7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNIT1dfQUxMLCBTRVRfVklTSUJJTElUWV9GSUxURVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZpc2liaWxpdHlGaWx0ZXIoc3RhdGUgPSBTSE9XX0FMTCwgYWN0aW9uID0ge30pIHtcbiAgY29uc3QgeyB0eXBlIH0gPSBhY3Rpb247XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBTRVRfVklTSUJJTElUWV9GSUxURVIgOlxuICAgICAgY29uc3QgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSBhY3Rpb247XG5cbiAgICAgIHN0YXRlID0gdmlzaWJpbGl0eUZpbHRlcjtcblxuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=