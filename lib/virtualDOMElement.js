"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return VirtualDOMElement;
    }
});
var _array = require("./utilities/array");
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
var VirtualDOMElement = /*#__PURE__*/ function() {
    function VirtualDOMElement(props) {
        _class_call_check(this, VirtualDOMElement);
        this.props = props;
        this.parent = null;
        this.children = props.children; ///
    }
    _create_class(VirtualDOMElement, [
        {
            key: "getProps",
            value: function getProps() {
                return this.props;
            }
        },
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
                var firstChild = (0, _array.first)(this.children) || null;
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
    return VirtualDOMElement;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aXJ0dWFsRE9NRWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlydHVhbERPTUVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgdGhpcy5jaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuOyAgLy8vXG4gIH1cblxuICBnZXRQcm9wcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcztcbiAgfVxuXG4gIGdldFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gIH1cblxuICBnZXRDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbjtcbiAgfVxuXG4gIGdldEZpcnN0Q2hpbGQoKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZmlyc3RDaGlsZDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgY2hpbGRyZW4pIHtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH1cblxuICB1bm1vdW50KCkge1xuICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgICB0aGlzLmNoaWxkcmVuID0gbnVsbDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlZpcnR1YWxET01FbGVtZW50IiwicHJvcHMiLCJwYXJlbnQiLCJjaGlsZHJlbiIsImdldFByb3BzIiwiZ2V0UGFyZW50IiwiZ2V0Q2hpbGRyZW4iLCJnZXRGaXJzdENoaWxkIiwiZmlyc3RDaGlsZCIsImZpcnN0IiwibW91bnQiLCJ1bm1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OztxQkFGQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxJQUFBLEFBQU1BLGtDQUFELEFBQUw7YUFBTUEsa0JBQ1BDLEtBQUs7Z0NBREVEO1FBRWpCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsTUFBTSxHQUFHO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdGLE1BQU1FLFFBQVEsRUFBRyxHQUFHOztrQkFKbkJIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxLQUFLO1lBQ25COzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGFBQWFDLElBQUFBLFlBQUssRUFBQyxJQUFJLENBQUNOLFFBQVEsS0FBSztnQkFFM0MsT0FBT0s7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNUixNQUFNLEVBQUVDLFFBQVE7Z0JBQ3BCLElBQUksQ0FBQ0QsTUFBTSxHQUFHQTtnQkFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7WUFDbEI7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDVCxNQUFNLEdBQUc7Z0JBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUc7WUFDbEI7OztXQWpDbUJIIn0=