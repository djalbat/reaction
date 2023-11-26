"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FunctionUseStateParagraph", {
    enumerable: true,
    get: function() {
        return FunctionUseStateParagraph;
    }
});
var _hooks = require("../../../hooks");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var initialCount = 0;
var FunctionUseStateParagraph = function(props, context, update, element) {
    var _useState = _sliced_to_array((0, _hooks.useState)(initialCount, element), 2), count = _useState[0], setCount = _useState[1];
    return /*#__PURE__*/ React.createElement("p", {
        onClick: function(event) {
            return setCount(count + 1);
        }
    }, "state: ", "".concat(count));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwL3VzZVN0YXRlL2Z1bmN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9ob29rc1wiO1xuXG5jb25zdCBpbml0aWFsQ291bnQgPSAwO1xuXG5leHBvcnQgY29uc3QgRnVuY3Rpb25Vc2VTdGF0ZVBhcmFncmFwaCA9IChwcm9wcywgY29udGV4dCwgdXBkYXRlLCBlbGVtZW50KSA9PiB7XG4gIGNvbnN0IFsgY291bnQsIHNldENvdW50IF0gPSB1c2VTdGF0ZShpbml0aWFsQ291bnQsIGVsZW1lbnQpO1xuXG4gIHJldHVybiAoXG5cbiAgICA8cCBvbkNsaWNrPXsoZXZlbnQpID0+IHNldENvdW50KGNvdW50ICsgMSl9PlxuICAgICAgc3RhdGU6IHtgJHtjb3VudH1gfVxuICAgIDwvcD5cblxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJGdW5jdGlvblVzZVN0YXRlUGFyYWdyYXBoIiwiaW5pdGlhbENvdW50IiwicHJvcHMiLCJjb250ZXh0IiwidXBkYXRlIiwiZWxlbWVudCIsInVzZVN0YXRlIiwiY291bnQiLCJzZXRDb3VudCIsInAiLCJvbkNsaWNrIiwiZXZlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1hQTs7O2VBQUFBOzs7cUJBSlk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQU1DLGVBQWU7QUFFZCxJQUFNRCw0QkFBNEIsU0FBQ0UsT0FBT0MsU0FBU0MsUUFBUUM7SUFDaEUsSUFBNEJDLDZCQUFBQSxJQUFBQSxlQUFRLEVBQUNMLGNBQWNJLGNBQTNDRSxRQUFvQkQsY0FBYkUsV0FBYUY7SUFFNUIscUJBRUUsb0JBQUNHO1FBQUVDLFNBQVMsU0FBQ0M7bUJBQVVILFNBQVNELFFBQVE7O09BQUksV0FDbEMsQUFBQyxHQUFRLE9BQU5BO0FBSWpCIn0=