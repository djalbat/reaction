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
var Element = /*#__PURE__*/ function() {
    function Element(props) {
        _classCallCheck(this, Element);
        this.props = props;
        this.parent = null;
        this.children = props.children; ///
    }
    _createClass(Element, [
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
                var firstChild = (0, _array).first(this.children) || null;
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
    return Element;
}();
exports.default = Element;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG5cbiAgICB0aGlzLnBhcmVudCA9IG51bGw7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47ICAvLy9cbiAgfVxuXG4gIGdldFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gIH1cblxuICBnZXRDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbjtcbiAgfVxuXG4gIGdldEZpcnN0Q2hpbGQoKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZmlyc3RDaGlsZDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgY2hpbGRyZW4pIHtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IG51bGw7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFbGVtZW50IiwicHJvcHMiLCJwYXJlbnQiLCJjaGlsZHJlbiIsImdldFBhcmVudCIsImdldENoaWxkcmVuIiwiZ2V0Rmlyc3RDaGlsZCIsImZpcnN0Q2hpbGQiLCJtb3VudCIsInVubW91bnQiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBbUIsQ0FBbkIsTUFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXBCQSxPQUFPLGlCQUFiLFFBQVE7YUFBRkEsT0FBTyxDQUNkQyxLQUFLOzhCQURFRCxPQUFPO1FBRXhCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO1FBRWxCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUk7UUFFbEIsSUFBSSxDQUFDQyxRQUFRLEdBQUdGLEtBQUssQ0FBQ0UsUUFBUSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzs7aUJBTm5CSCxPQUFPOztZQVMxQkksR0FBUyxFQUFUQSxDQUFTO21CQUFUQSxRQUFRLENBQVJBLFNBQVMsR0FBRyxDQUFDO2dCQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUNGLE1BQU07WUFDcEIsQ0FBQzs7O1lBRURHLEdBQVcsRUFBWEEsQ0FBVzttQkFBWEEsUUFBUSxDQUFSQSxXQUFXLEdBQUcsQ0FBQztnQkFDYixNQUFNLENBQUMsSUFBSSxDQUFDRixRQUFRO1lBQ3RCLENBQUM7OztZQUVERyxHQUFhLEVBQWJBLENBQWE7bUJBQWJBLFFBQVEsQ0FBUkEsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsR0FBSyxDQUFDQyxVQUFVLE9BcEJFLE1BQW1CLFFBb0JaLElBQUksQ0FBQ0osUUFBUSxLQUFLLElBQUk7Z0JBRS9DLE1BQU0sQ0FBQ0ksVUFBVTtZQUNuQixDQUFDOzs7WUFFREMsR0FBSyxFQUFMQSxDQUFLO21CQUFMQSxRQUFRLENBQVJBLEtBQUssQ0FBQ04sTUFBTSxFQUFFQyxRQUFRLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDRCxNQUFNLEdBQUdBLE1BQU07Z0JBRXBCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO1lBQzFCLENBQUM7OztZQUVETSxHQUFPLEVBQVBBLENBQU87bUJBQVBBLFFBQVEsQ0FBUkEsT0FBTyxHQUFHLENBQUM7Z0JBQ1QsSUFBSSxDQUFDUCxNQUFNLEdBQUcsSUFBSTtnQkFFbEIsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtZQUN0QixDQUFDOzs7V0FqQ2tCSCxPQUFPOztrQkFBUEEsT0FBTyJ9