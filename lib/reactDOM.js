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
const _container = /*#__PURE__*/ _interop_require_default(require("./virtualDOM/container"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ReactDOM {
    static render(element, parentDOMElement) {
        const parent = _container.default.fromDOMElement(parentDOMElement), reference = null, context = {};
        element.mount(parent, reference, context);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdERPTS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnRhaW5lckVsZW1lbnQgZnJvbSBcIi4vdmlydHVhbERPTS9jb250YWluZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RET00ge1xuICBzdGF0aWMgcmVuZGVyKGVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBDb250YWluZXJFbGVtZW50LmZyb21ET01FbGVtZW50KHBhcmVudERPTUVsZW1lbnQpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgY29udGV4dCA9IHt9O1xuXG4gICAgZWxlbWVudC5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSZWFjdERPTSIsInJlbmRlciIsImVsZW1lbnQiLCJwYXJlbnRET01FbGVtZW50IiwicGFyZW50IiwiQ29udGFpbmVyRWxlbWVudCIsImZyb21ET01FbGVtZW50IiwicmVmZXJlbmNlIiwiY29udGV4dCIsIm1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7O2tFQUZROzs7Ozs7QUFFZCxNQUFNQTtJQUNuQixPQUFPQyxPQUFPQyxPQUFPLEVBQUVDLGdCQUFnQixFQUFFO1FBQ3ZDLE1BQU1DLFNBQVNDLGtCQUFnQixDQUFDQyxjQUFjLENBQUNILG1CQUN6Q0ksWUFBWSxNQUNaQyxVQUFVLENBQUM7UUFFakJOLFFBQVFPLEtBQUssQ0FBQ0wsUUFBUUcsV0FBV0M7SUFDbkM7QUFDRiJ9