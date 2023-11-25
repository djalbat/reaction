"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ClassUseStateParagraph: function() {
        return ClassUseStateParagraph;
    },
    default: function() {
        return _default;
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
var _default = ClassUseStateParagraph;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwL3VzZVN0YXRlL2NsYXNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwiLi4vLi4vLi4vaG9va3NcIjtcblxuY29uc3QgeyBjcmVhdGVDbGFzcyB9ID0gUmVhY3Q7XG5cbmxldCBpbml0aWFsQ291bnQgPSAwO1xuXG5leHBvcnQgY29uc3QgQ2xhc3NVc2VTdGF0ZVBhcmFncmFwaCA9IGNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbih1cGRhdGUsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBbIGNvdW50LCBzZXRDb3VudCBdID0gdXNlU3RhdGUoaW5pdGlhbENvdW50LCBlbGVtZW50KTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxwIG9uQ2xpY2s9eyhldmVudCkgPT4gc2V0Q291bnQoY291bnQgKyAxKX0+XG4gICAgICAgIHN0YXRlOiB7YCR7Y291bnR9YH1cbiAgICAgIDwvcD5cblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDbGFzc1VzZVN0YXRlUGFyYWdyYXBoO1xuIl0sIm5hbWVzIjpbIkNsYXNzVXNlU3RhdGVQYXJhZ3JhcGgiLCJjcmVhdGVDbGFzcyIsIlJlYWN0IiwiaW5pdGlhbENvdW50IiwicmVuZGVyIiwidXBkYXRlIiwiZWxlbWVudCIsInVzZVN0YXRlIiwiY291bnQiLCJzZXRDb3VudCIsInAiLCJvbkNsaWNrIiwiZXZlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQVFhQSxzQkFBc0I7ZUFBdEJBOztJQWNiLE9BQXNDO2VBQXRDOzs7cUJBcEJ1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsSUFBTSxBQUFFQyxjQUFnQkMsTUFBaEJEO0FBRVIsSUFBSUUsZUFBZTtBQUVaLElBQU1ILHlCQUF5QkMsWUFBWTtJQUNoREcsUUFBUSxTQUFSQSxPQUFpQkMsTUFBTSxFQUFFQyxPQUFPO1FBQzlCLElBQTRCQyw2QkFBQUEsSUFBQUEsZUFBUSxFQUFDSixjQUFjRyxjQUEzQ0UsUUFBb0JELGNBQWJFLFdBQWFGO1FBRTVCLHFCQUVFLG9CQUFDRztZQUFFQyxTQUFTLFNBQUNDO3VCQUFVSCxTQUFTRCxRQUFROztXQUFJLFdBQ2xDLEFBQUMsR0FBUSxPQUFOQTtJQUlqQjtBQUNGO0lBRUEsV0FBZVIifQ==