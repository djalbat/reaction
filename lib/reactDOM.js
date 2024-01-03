"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ReactDOM;
    }
});
var _container = /*#__PURE__*/ _interop_require_default(require("./virtualDOM/container"));
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var ReactDOM = /*#__PURE__*/ function() {
    function ReactDOM() {
        _class_call_check(this, ReactDOM);
    }
    _create_class(ReactDOM, null, [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdERPTS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnRhaW5lckVsZW1lbnQgZnJvbSBcIi4vdmlydHVhbERPTS9jb250YWluZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RET00ge1xuICBzdGF0aWMgcmVuZGVyKGVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBDb250YWluZXJFbGVtZW50LmZyb21ET01FbGVtZW50KHBhcmVudERPTUVsZW1lbnQpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgY29udGV4dCA9IHt9O1xuXG4gICAgZWxlbWVudC5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSZWFjdERPTSIsInJlbmRlciIsImVsZW1lbnQiLCJwYXJlbnRET01FbGVtZW50IiwicGFyZW50IiwiQ29udGFpbmVyRWxlbWVudCIsImZyb21ET01FbGVtZW50IiwicmVmZXJlbmNlIiwiY29udGV4dCIsIm1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OztnRUFGUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLElBQUEsQUFBTUEseUJBQUQsQUFBTDthQUFNQTtnQ0FBQUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0EsT0FBT0MsT0FBTyxFQUFFQyxnQkFBZ0I7Z0JBQ3JDLElBQU1DLFNBQVNDLGtCQUFnQixDQUFDQyxjQUFjLENBQUNILG1CQUN6Q0ksWUFBWSxNQUNaQyxVQUFVLENBQUM7Z0JBRWpCTixRQUFRTyxLQUFLLENBQUNMLFFBQVFHLFdBQVdDO1lBQ25DOzs7V0FQbUJSIn0=