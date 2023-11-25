"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClassUseStateParagraph", {
    enumerable: true,
    get: function() {
        return ClassUseStateParagraph;
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
var createClass = React.createClass;
var initialCount = 0;
var ClassUseStateParagraph = createClass({
    render: function render(update, element) {
        var _useState = _sliced_to_array((0, _hooks.useState)(initialCount, element), 2), count = _useState[0], setCount = _useState[1];
        return /*#__PURE__*/ React.createElement("p", {
            onClick: function(event) {
                return setCount(count + 1);
            }
        }, "state: ", "".concat(count));
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwL3VzZVN0YXRlL2NsYXNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9ob29rc1wiO1xuXG5jb25zdCB7IGNyZWF0ZUNsYXNzIH0gPSBSZWFjdDtcblxubGV0IGluaXRpYWxDb3VudCA9IDA7XG5cbmV4cG9ydCBjb25zdCBDbGFzc1VzZVN0YXRlUGFyYWdyYXBoID0gY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uKHVwZGF0ZSwgZWxlbWVudCkge1xuICAgIGNvbnN0IFsgY291bnQsIHNldENvdW50IF0gPSB1c2VTdGF0ZShpbml0aWFsQ291bnQsIGVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPHAgb25DbGljaz17KGV2ZW50KSA9PiBzZXRDb3VudChjb3VudCArIDEpfT5cbiAgICAgICAgc3RhdGU6IHtgJHtjb3VudH1gfVxuICAgICAgPC9wPlxuXG4gICAgKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiQ2xhc3NVc2VTdGF0ZVBhcmFncmFwaCIsImNyZWF0ZUNsYXNzIiwiUmVhY3QiLCJpbml0aWFsQ291bnQiLCJyZW5kZXIiLCJ1cGRhdGUiLCJlbGVtZW50IiwidXNlU3RhdGUiLCJjb3VudCIsInNldENvdW50IiwicCIsIm9uQ2xpY2siLCJldmVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUWFBOzs7ZUFBQUE7OztxQkFOWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsSUFBTSxBQUFFQyxjQUFnQkMsTUFBaEJEO0FBRVIsSUFBSUUsZUFBZTtBQUVaLElBQU1ILHlCQUF5QkMsWUFBWTtJQUNoREcsUUFBUSxTQUFSQSxPQUFpQkMsTUFBTSxFQUFFQyxPQUFPO1FBQzlCLElBQTRCQyw2QkFBQUEsSUFBQUEsZUFBUSxFQUFDSixjQUFjRyxjQUEzQ0UsUUFBb0JELGNBQWJFLFdBQWFGO1FBRTVCLHFCQUVFLG9CQUFDRztZQUFFQyxTQUFTLFNBQUNDO3VCQUFVSCxTQUFTRCxRQUFROztXQUFJLFdBQ2xDLEFBQUMsR0FBUSxPQUFOQTtJQUlqQjtBQUNGIn0=