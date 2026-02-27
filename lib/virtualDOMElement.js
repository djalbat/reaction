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
const _array = require("./utilities/array");
class VirtualDOMElement {
    constructor(props){
        this.props = props;
        this.parent = null;
        this.children = props.children; ///
    }
    getProps() {
        return this.props;
    }
    getParent() {
        return this.parent;
    }
    getChildren() {
        return this.children;
    }
    getFirstChild() {
        const firstChild = (0, _array.first)(this.children) || null;
        return firstChild;
    }
    mount(parent, children) {
        this.parent = parent;
        this.children = children;
    }
    unmount() {
        this.parent = null;
        this.children = null;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aXJ0dWFsRE9NRWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlydHVhbERPTUVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgdGhpcy5jaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuOyAgLy8vXG4gIH1cblxuICBnZXRQcm9wcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcztcbiAgfVxuXG4gIGdldFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gIH1cblxuICBnZXRDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbjtcbiAgfVxuXG4gIGdldEZpcnN0Q2hpbGQoKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZmlyc3RDaGlsZDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgY2hpbGRyZW4pIHtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH1cblxuICB1bm1vdW50KCkge1xuICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgICB0aGlzLmNoaWxkcmVuID0gbnVsbDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlZpcnR1YWxET01FbGVtZW50IiwicHJvcHMiLCJwYXJlbnQiLCJjaGlsZHJlbiIsImdldFByb3BzIiwiZ2V0UGFyZW50IiwiZ2V0Q2hpbGRyZW4iLCJnZXRGaXJzdENoaWxkIiwiZmlyc3RDaGlsZCIsImZpcnN0IiwibW91bnQiLCJ1bm1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7O3VCQUZDO0FBRVAsTUFBTUE7SUFDbkIsWUFBWUMsS0FBSyxDQUFFO1FBQ2pCLElBQUksQ0FBQ0EsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsTUFBTSxHQUFHO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdGLE1BQU1FLFFBQVEsRUFBRyxHQUFHO0lBQ3RDO0lBRUFDLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0gsS0FBSztJQUNuQjtJQUVBSSxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUNILE1BQU07SUFDcEI7SUFFQUksY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDSCxRQUFRO0lBQ3RCO0lBRUFJLGdCQUFnQjtRQUNkLE1BQU1DLGFBQWFDLElBQUFBLFlBQUssRUFBQyxJQUFJLENBQUNOLFFBQVEsS0FBSztRQUUzQyxPQUFPSztJQUNUO0lBRUFFLE1BQU1SLE1BQU0sRUFBRUMsUUFBUSxFQUFFO1FBQ3RCLElBQUksQ0FBQ0QsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtJQUNsQjtJQUVBUSxVQUFVO1FBQ1IsSUFBSSxDQUFDVCxNQUFNLEdBQUc7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBRztJQUNsQjtBQUNGIn0=