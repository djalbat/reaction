"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = visibilityFilter;

var _constants = require("../constants");

function visibilityFilter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants.SHOW_ALL;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type;

  switch (type) {
    case _constants.SET_VISIBILITY_FILTER:
      var _visibilityFilter = action.visibilityFilter;
      state = _visibilityFilter;
      break;
  }

  return state;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpc2liaWxpdHlGaWx0ZXIuanMiXSwibmFtZXMiOlsidmlzaWJpbGl0eUZpbHRlciIsInN0YXRlIiwiU0hPV19BTEwiLCJhY3Rpb24iLCJ0eXBlIiwiU0VUX1ZJU0lCSUxJVFlfRklMVEVSIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVlLFNBQVNBLGdCQUFULEdBQXlEO0FBQUEsTUFBL0JDLEtBQStCLHVFQUF2QkMsbUJBQXVCO0FBQUEsTUFBYkMsTUFBYSx1RUFBSixFQUFJO0FBQUEsTUFDOURDLElBRDhELEdBQ3JERCxNQURxRCxDQUM5REMsSUFEOEQ7O0FBR3RFLFVBQVFBLElBQVI7QUFDRSxTQUFLQyxnQ0FBTDtBQUFBLFVBQ1VMLGlCQURWLEdBQytCRyxNQUQvQixDQUNVSCxnQkFEVjtBQUdFQyxNQUFBQSxLQUFLLEdBQUdELGlCQUFSO0FBQ0E7QUFMSjs7QUFRQSxTQUFPQyxLQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU0hPV19BTEwsIFNFVF9WSVNJQklMSVRZX0ZJTFRFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlzaWJpbGl0eUZpbHRlcihzdGF0ZSA9IFNIT1dfQUxMLCBhY3Rpb24gPSB7fSkge1xuICBjb25zdCB7IHR5cGUgfSA9IGFjdGlvbjtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFNFVF9WSVNJQklMSVRZX0ZJTFRFUiA6XG4gICAgICBjb25zdCB7IHZpc2liaWxpdHlGaWx0ZXIgfSA9IGFjdGlvbjtcblxuICAgICAgc3RhdGUgPSB2aXNpYmlsaXR5RmlsdGVyO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=