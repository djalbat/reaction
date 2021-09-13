"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _virtualDOMNode = _interopRequireDefault(require("./element/virtualDOMNode"));
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
                var parent = _virtualDOMNode.default.fromDOMElement(parentDOMElement), reference = null, context = {
                };
                element.mount(parent, reference, context);
            }
        }
    ]);
    return ReactDOM;
}();
exports.default = ReactDOM;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdERPTS5qcyJdLCJuYW1lcyI6WyJWaXJ0dWFsRE9NTm9kZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZWxlbWVudCIsInBhcmVudERPTUVsZW1lbnQiLCJwYXJlbnQiLCJmcm9tRE9NRWxlbWVudCIsInJlZmVyZW5jZSIsImNvbnRleHQiLCJtb3VudCJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFZSxHQUEwQixDQUExQixlQUEwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVoQyxRQUFRLGlCQUFkLFFBQVE7YUFBRixRQUFROzhCQUFSLFFBQVE7O2lCQUFSLFFBQVE7O1lBQ3BCLEdBQU0sR0FBTixNQUFNO21CQUFiLFFBQVEsQ0FBRCxNQUFNLENBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLENBQUM7Z0JBQ3hDLEdBQUssQ0FBQyxNQUFNLEdBSlcsZUFBMEIsU0FJbkIsY0FBYyxDQUFDLGdCQUFnQixHQUN2RCxTQUFTLEdBQUcsSUFBSSxFQUNoQixPQUFPLEdBQUcsQ0FBQztnQkFBQSxDQUFDO2dCQUVsQixPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTztZQUMxQyxDQUFDOzs7V0FQa0IsUUFBUTs7a0JBQVIsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmlydHVhbERPTU5vZGUgZnJvbSBcIi4vZWxlbWVudC92aXJ0dWFsRE9NTm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdERPTSB7XG4gIHN0YXRpYyByZW5kZXIoZWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudCA9IFZpcnR1YWxET01Ob2RlLmZyb21ET01FbGVtZW50KHBhcmVudERPTUVsZW1lbnQpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgY29udGV4dCA9IHt9O1xuXG4gICAgZWxlbWVudC5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCk7XG4gIH1cbn1cbiJdfQ==