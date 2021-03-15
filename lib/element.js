"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _array = require("./utilities/array");
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
var Element1 = function() {
    function Element1(props) {
        _classCallCheck(this, Element1);
        this.props = props;
        this.parent = null;
        this.children = props.children; ///
    }
    _createClass(Element1, [
        {
            key: "getParent",
            value: function getParent() {
                return this.parent;
            }
        },
        {
            key: "getChildren",
            value: function getChildren() {
                return this.children;
            }
        },
        {
            key: "getFirstChild",
            value: function getFirstChild() {
                var firstChild = _array.first(this.children) || null;
                return firstChild;
            }
        },
        {
            key: "mount",
            value: function mount(parent, children) {
                this.parent = parent;
                this.children = children;
            }
        },
        {
            key: "unmount",
            value: function unmount() {
                this.parent = null;
                this.children = null;
            }
        }
    ]);
    return Element1;
}();
exports.default = Element1;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG5cbiAgICB0aGlzLnBhcmVudCA9IG51bGw7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47ICAvLy9cbiAgfVxuXG4gIGdldFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gIH1cblxuICBnZXRDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbjtcbiAgfVxuXG4gIGdldEZpcnN0Q2hpbGQoKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZmlyc3RDaGlsZDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgY2hpbGRyZW4pIHtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IG51bGw7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7OztJQUVBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRUEsUUFBQTthQUFBLFFBQUEsQ0FDQSxLQUFBOzhCQURBLFFBQUE7YUFFQSxLQUFBLEdBQUEsS0FBQTthQUVBLE1BQUEsR0FBQSxJQUFBO2FBRUEsUUFBQSxHQUFBLEtBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7O2lCQU5BLFFBQUE7O0FBU0EsZUFBQSxHQUFBLFNBQUE7NEJBQUEsU0FBQTs0QkFDQSxNQUFBOzs7O0FBR0EsZUFBQSxHQUFBLFdBQUE7NEJBQUEsV0FBQTs0QkFDQSxRQUFBOzs7O0FBR0EsZUFBQSxHQUFBLGFBQUE7NEJBQUEsYUFBQTtvQkFDQSxVQUFBLEdBcEJBLE1BQUEsWUFvQkEsUUFBQSxLQUFBLElBQUE7dUJBRUEsVUFBQTs7OztBQUdBLGVBQUEsR0FBQSxLQUFBOzRCQUFBLEtBQUEsQ0FBQSxNQUFBLEVBQUEsUUFBQTtxQkFDQSxNQUFBLEdBQUEsTUFBQTtxQkFFQSxRQUFBLEdBQUEsUUFBQTs7OztBQUdBLGVBQUEsR0FBQSxPQUFBOzRCQUFBLE9BQUE7cUJBQ0EsTUFBQSxHQUFBLElBQUE7cUJBRUEsUUFBQSxHQUFBLElBQUE7Ozs7V0FoQ0EsUUFBQTs7a0JBQUEsUUFBQSJ9