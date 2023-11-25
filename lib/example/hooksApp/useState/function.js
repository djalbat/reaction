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
var FunctionUseStateParagraph = function(props, context, element) {
    var _useState = _sliced_to_array((0, _hooks.useState)(initialCount, element), 2), count = _useState[0], setCount = _useState[1];
    return /*#__PURE__*/ React.createElement("p", {
        onClick: function(event) {
            return setCount(count + 1);
        }
    }, "state: ", "".concat(count));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwL3VzZVN0YXRlL2Z1bmN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9ob29rc1wiO1xuXG5jb25zdCBpbml0aWFsQ291bnQgPSAwO1xuXG5leHBvcnQgY29uc3QgRnVuY3Rpb25Vc2VTdGF0ZVBhcmFncmFwaCA9IChwcm9wcywgY29udGV4dCwgZWxlbWVudCkgPT4ge1xuICBjb25zdCBbIGNvdW50LCBzZXRDb3VudCBdID0gdXNlU3RhdGUoaW5pdGlhbENvdW50LCBlbGVtZW50KTtcblxuICByZXR1cm4gKFxuXG4gICAgPHAgb25DbGljaz17KGV2ZW50KSA9PiBzZXRDb3VudChjb3VudCArIDEpfT5cbiAgICAgIHN0YXRlOiB7YCR7Y291bnR9YH1cbiAgICA8L3A+XG5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiRnVuY3Rpb25Vc2VTdGF0ZVBhcmFncmFwaCIsImluaXRpYWxDb3VudCIsInByb3BzIiwiY29udGV4dCIsImVsZW1lbnQiLCJ1c2VTdGF0ZSIsImNvdW50Iiwic2V0Q291bnQiLCJwIiwib25DbGljayIsImV2ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNYUE7OztlQUFBQTs7O3FCQUpZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixJQUFNQyxlQUFlO0FBRWQsSUFBTUQsNEJBQTRCLFNBQUNFLE9BQU9DLFNBQVNDO0lBQ3hELElBQTRCQyw2QkFBQUEsSUFBQUEsZUFBUSxFQUFDSixjQUFjRyxjQUEzQ0UsUUFBb0JELGNBQWJFLFdBQWFGO0lBRTVCLHFCQUVFLG9CQUFDRztRQUFFQyxTQUFTLFNBQUNDO21CQUFVSCxTQUFTRCxRQUFROztPQUFJLFdBQ2xDLEFBQUMsR0FBUSxPQUFOQTtBQUlqQiJ9