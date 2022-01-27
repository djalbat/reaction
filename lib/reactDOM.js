"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _container = _interopRequireDefault(require("./virtualDOM/container"));
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var ReactDOM = /*#__PURE__*/ function() {
    function ReactDOM() {
        _classCallCheck(this, ReactDOM);
    }
    _createClass(ReactDOM, null, [
        {
            key: "render",
            value: function render(element, parentDOMElement) {
                var parent = _container.default.fromDOMElement(parentDOMElement), reference = null, context = {};
                element.mount(parent, reference, context);
            }
        }
    ]);
    return ReactDOM;
}();
exports.default = ReactDOM;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdERPTS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnRhaW5lckVsZW1lbnQgZnJvbSBcIi4vdmlydHVhbERPTS9jb250YWluZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RET00ge1xuICBzdGF0aWMgcmVuZGVyKGVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBDb250YWluZXJFbGVtZW50LmZyb21ET01FbGVtZW50KHBhcmVudERPTUVsZW1lbnQpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgY29udGV4dCA9IHt9O1xuXG4gICAgZWxlbWVudC5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSZWFjdERPTSIsInJlbmRlciIsImVsZW1lbnQiLCJwYXJlbnRET01FbGVtZW50IiwicGFyZW50IiwiZnJvbURPTUVsZW1lbnQiLCJyZWZlcmVuY2UiLCJjb250ZXh0IiwibW91bnQiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRWlCLEdBQXdCLENBQXhCLFVBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWhDQSxRQUFRLGlCQUFkLFFBQVE7YUFBRkEsUUFBUTs7Ozs7WUFDcEJDLEdBQU0sRUFBTkEsQ0FBTTttQkFBYixRQUFRLENBQURBLE1BQU0sQ0FBQ0MsT0FBTyxFQUFFQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUN4QyxHQUFLLENBQUNDLE1BQU0sR0FKYSxVQUF3QixTQUlqQkMsY0FBYyxDQUFDRixnQkFBZ0IsR0FDekRHLFNBQVMsR0FBRyxJQUFJLEVBQ2hCQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2dCQUVsQkwsT0FBTyxDQUFDTSxLQUFLLENBQUNKLE1BQU0sRUFBRUUsU0FBUyxFQUFFQyxPQUFPO1lBQzFDLENBQUM7Ozs7O2tCQVBrQlAsUUFBUSJ9