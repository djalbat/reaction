"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _container = /*#__PURE__*/ _interop_require_default(require("../container"));
const _containerElement = /*#__PURE__*/ _interop_require_default(require("../../mixins/containerElement"));
const _constants = require("../../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class Element extends _container.default {
    mount(parent, reference, context) {
        super.mount(parent, reference);
        const childParent = this, childReference = null, childContext = context, children = this.getChildren();
        children.forEach((child)=>{
            child.mount(childParent, childReference, childContext);
        });
        this.applyProps();
    }
    unmount(context) {
        const childContext = context, children = this.getChildren();
        children.forEach((child)=>{
            child.unmount(childContext);
        });
        super.unmount();
    }
    applyProps() {
        const names = Object.keys(this.props);
        names.forEach((name)=>{
            const value = this.props[name];
            if (false) {} else if (this.isHandlerName(name)) {
                this.setHandler(name, value);
            } else if (this.isAttributeName(name)) {
                this.setAttribute(name, value);
            } else if (name === _constants.REF) {
                const callback = value; ///
                callback(this.domElement);
            }
        });
    }
    setHandler(name, value) {
        const eventType = name.substr(2).toLowerCase(), handler = value; ///
        this.domElement.addEventListener(eventType, handler);
    }
    isHandlerName(name) {
        return /^on/.test(name);
    }
}
Object.assign(Element.prototype, _containerElement.default);
const _default = Element;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aXJ0dWFsRE9NL2NvbnRhaW5lci9lbGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29udGFpbmVyRWxlbWVudCBmcm9tIFwiLi4vY29udGFpbmVyXCI7XG5pbXBvcnQgY29udGFpbmVyRWxlbWVudE1peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL2NvbnRhaW5lckVsZW1lbnRcIjtcblxuaW1wb3J0IHsgUkVGIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBFbGVtZW50IGV4dGVuZHMgQ29udGFpbmVyRWxlbWVudCB7XG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50LCByZWZlcmVuY2UpO1xuXG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSBjb250ZXh0LFxuICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXBwbHlQcm9wcygpO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gY29udGV4dCxcbiAgICAgICAgICBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBhcHBseVByb3BzKCkge1xuICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcyk7XG5cbiAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucHJvcHNbbmFtZV07XG5cbiAgICAgIGlmIChmYWxzZSkge1xuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNIYW5kbGVyTmFtZShuYW1lKSkge1xuICAgICAgICB0aGlzLnNldEhhbmRsZXIobmFtZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzQXR0cmlidXRlTmFtZShuYW1lKSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFJFRikge1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IHZhbHVlOyAvLy9cbiAgICAgICAgXG4gICAgICAgIGNhbGxiYWNrKHRoaXMuZG9tRWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRIYW5kbGVyKG5hbWUsIHZhbHVlKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gbmFtZS5zdWJzdHIoMikudG9Mb3dlckNhc2UoKSwgLy8vXG4gICAgICAgICAgaGFuZGxlciA9IHZhbHVlOyAgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsICBoYW5kbGVyKTtcbiAgfVxuXG5cdGlzSGFuZGxlck5hbWUobmFtZSkge1xuXHRcdHJldHVybiAvXm9uLy50ZXN0KG5hbWUpO1xuXHR9XG59XG5cbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGNvbnRhaW5lckVsZW1lbnRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50O1xuIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJDb250YWluZXJFbGVtZW50IiwibW91bnQiLCJwYXJlbnQiLCJyZWZlcmVuY2UiLCJjb250ZXh0IiwiY2hpbGRQYXJlbnQiLCJjaGlsZFJlZmVyZW5jZSIsImNoaWxkQ29udGV4dCIsImNoaWxkcmVuIiwiZ2V0Q2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGQiLCJhcHBseVByb3BzIiwidW5tb3VudCIsIm5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsInByb3BzIiwibmFtZSIsInZhbHVlIiwiaXNIYW5kbGVyTmFtZSIsInNldEhhbmRsZXIiLCJpc0F0dHJpYnV0ZU5hbWUiLCJzZXRBdHRyaWJ1dGUiLCJSRUYiLCJjYWxsYmFjayIsImRvbUVsZW1lbnQiLCJldmVudFR5cGUiLCJzdWJzdHIiLCJ0b0xvd2VyQ2FzZSIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwidGVzdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImNvbnRhaW5lckVsZW1lbnRNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW9FQTs7O2VBQUE7OztrRUFsRTZCO3lFQUNNOzJCQUVmOzs7Ozs7QUFFcEIsTUFBTUEsZ0JBQWdCQyxrQkFBZ0I7SUFDcENDLE1BQU1DLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxPQUFPLEVBQUU7UUFDaEMsS0FBSyxDQUFDSCxNQUFNQyxRQUFRQztRQUVwQixNQUFNRSxjQUFjLElBQUksRUFDbEJDLGlCQUFpQixNQUNqQkMsZUFBZUgsU0FDZkksV0FBVyxJQUFJLENBQUNDLFdBQVc7UUFFakNELFNBQVNFLE9BQU8sQ0FBQyxDQUFDQztZQUNoQkEsTUFBTVYsS0FBSyxDQUFDSSxhQUFhQyxnQkFBZ0JDO1FBQzNDO1FBRUEsSUFBSSxDQUFDSyxVQUFVO0lBQ2pCO0lBRUFDLFFBQVFULE9BQU8sRUFBRTtRQUNmLE1BQU1HLGVBQWVILFNBQ2ZJLFdBQVcsSUFBSSxDQUFDQyxXQUFXO1FBRWpDRCxTQUFTRSxPQUFPLENBQUMsQ0FBQ0M7WUFDaEJBLE1BQU1FLE9BQU8sQ0FBQ047UUFDaEI7UUFFQSxLQUFLLENBQUNNO0lBQ1I7SUFFQUQsYUFBYTtRQUNYLE1BQU1FLFFBQVFDLE9BQU9DLElBQUksQ0FBQyxJQUFJLENBQUNDLEtBQUs7UUFFcENILE1BQU1KLE9BQU8sQ0FBQyxDQUFDUTtZQUNiLE1BQU1DLFFBQVEsSUFBSSxDQUFDRixLQUFLLENBQUNDLEtBQUs7WUFFOUIsSUFBSSxPQUFPLENBRVgsT0FBTyxJQUFJLElBQUksQ0FBQ0UsYUFBYSxDQUFDRixPQUFPO2dCQUNuQyxJQUFJLENBQUNHLFVBQVUsQ0FBQ0gsTUFBTUM7WUFDeEIsT0FBTyxJQUFJLElBQUksQ0FBQ0csZUFBZSxDQUFDSixPQUFPO2dCQUNyQyxJQUFJLENBQUNLLFlBQVksQ0FBQ0wsTUFBTUM7WUFDMUIsT0FBTyxJQUFJRCxTQUFTTSxjQUFHLEVBQUU7Z0JBQ3ZCLE1BQU1DLFdBQVdOLE9BQU8sR0FBRztnQkFFM0JNLFNBQVMsSUFBSSxDQUFDQyxVQUFVO1lBQzFCO1FBQ0Y7SUFDRjtJQUVBTCxXQUFXSCxJQUFJLEVBQUVDLEtBQUssRUFBRTtRQUN0QixNQUFNUSxZQUFZVCxLQUFLVSxNQUFNLENBQUMsR0FBR0MsV0FBVyxJQUN0Q0MsVUFBVVgsT0FBUSxHQUFHO1FBRTNCLElBQUksQ0FBQ08sVUFBVSxDQUFDSyxnQkFBZ0IsQ0FBQ0osV0FBWUc7SUFDL0M7SUFFRFYsY0FBY0YsSUFBSSxFQUFFO1FBQ25CLE9BQU8sTUFBTWMsSUFBSSxDQUFDZDtJQUNuQjtBQUNEO0FBRUFILE9BQU9rQixNQUFNLENBQUNsQyxRQUFRbUMsU0FBUyxFQUFFQyx5QkFBc0I7TUFFdkQsV0FBZXBDIn0=