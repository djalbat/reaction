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
var VirtualDOMElement = /*#__PURE__*/ function() {
    function VirtualDOMElement(props) {
        _classCallCheck(this, VirtualDOMElement);
        this.props = props;
        this.parent = null;
        this.children = props.children; ///
    }
    _createClass(VirtualDOMElement, [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aXJ0dWFsRE9NRWxlbWVudC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlydHVhbERPTUVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcblxuICAgIHRoaXMucGFyZW50ID0gbnVsbDtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjsgIC8vL1xuICB9XG5cbiAgZ2V0UGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudDtcbiAgfVxuXG4gIGdldENoaWxkcmVuKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuO1xuICB9XG5cbiAgZ2V0Rmlyc3RDaGlsZCgpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbikgfHwgbnVsbDtcblxuICAgIHJldHVybiBmaXJzdENoaWxkO1xuICB9XG5cbiAgbW91bnQocGFyZW50LCBjaGlsZHJlbikge1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9XG5cbiAgdW5tb3VudCgpIHtcbiAgICB0aGlzLnBhcmVudCA9IG51bGw7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gbnVsbDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJWaXJ0dWFsRE9NRWxlbWVudCIsInByb3BzIiwicGFyZW50IiwiY2hpbGRyZW4iLCJnZXRQYXJlbnQiLCJnZXRDaGlsZHJlbiIsImdldEZpcnN0Q2hpbGQiLCJmaXJzdENoaWxkIiwiZmlyc3QiLCJtb3VudCIsInVubW91bnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O3FCQUZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLElBQUEsQUFBTUEsa0NBQU47YUFBTUEsa0JBQ1BDLEtBQUs7OEJBREVEO1FBRWpCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUViLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUk7UUFFbEIsSUFBSSxDQUFDQyxRQUFRLEdBQUdGLE1BQU1FLFFBQVEsRUFBRyxHQUFHOztpQkFObkJIOztZQVNuQkksS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVk7Z0JBQ1YsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBYztnQkFDWixPQUFPLElBQUksQ0FBQ0YsUUFBUTtZQUN0Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0I7Z0JBQ2QsSUFBTUMsYUFBYUMsSUFBQUEsWUFBSyxFQUFDLElBQUksQ0FBQ0wsUUFBUSxLQUFLLElBQUk7Z0JBRS9DLE9BQU9JO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTVAsTUFBTSxFQUFFQyxRQUFRLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQ0QsTUFBTSxHQUFHQTtnQkFFZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7WUFDbEI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVTtnQkFDUixJQUFJLENBQUNSLE1BQU0sR0FBRyxJQUFJO2dCQUVsQixJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJO1lBQ3RCOzs7V0FqQ21CSCJ9