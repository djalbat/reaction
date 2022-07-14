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
var _container = /*#__PURE__*/ _interopRequireDefault(require("./virtualDOM/container"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdERPTS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnRhaW5lckVsZW1lbnQgZnJvbSBcIi4vdmlydHVhbERPTS9jb250YWluZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RET00ge1xuICBzdGF0aWMgcmVuZGVyKGVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBDb250YWluZXJFbGVtZW50LmZyb21ET01FbGVtZW50KHBhcmVudERPTUVsZW1lbnQpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgY29udGV4dCA9IHt9O1xuXG4gICAgZWxlbWVudC5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCk7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUmVhY3RET00iLCJyZW5kZXIiLCJlbGVtZW50IiwicGFyZW50RE9NRWxlbWVudCIsInBhcmVudCIsIkNvbnRhaW5lckVsZW1lbnQiLCJmcm9tRE9NRWxlbWVudCIsInJlZmVyZW5jZSIsImNvbnRleHQiLCJtb3VudCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBSVFBLFFBQVE7Ozs4REFGQSx3QkFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBQSxBQUFNQSxRQUFRLGlCQUFkO2FBQU1BLFFBQVE7Ozs7O1lBQ3BCQyxHQUFNLEVBQU5BLFFBQU07bUJBQWIsU0FBT0EsTUFBTSxDQUFDQyxPQUFPLEVBQUVDLGdCQUFnQixFQUFFO2dCQUN2QyxJQUFNQyxNQUFNLEdBQUdDLFVBQWdCLFFBQUEsQ0FBQ0MsY0FBYyxDQUFDSCxnQkFBZ0IsQ0FBQyxFQUMxREksU0FBUyxHQUFHLElBQUksRUFDaEJDLE9BQU8sR0FBRyxFQUFFLEFBQUM7Z0JBRW5CTixPQUFPLENBQUNPLEtBQUssQ0FBQ0wsTUFBTSxFQUFFRyxTQUFTLEVBQUVDLE9BQU8sQ0FBQyxDQUFDO2FBQzNDOzs7O0NBQ0YsRUFBQSJ9