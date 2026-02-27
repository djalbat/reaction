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
const _virtualDOMElement = /*#__PURE__*/ _interop_require_default(require("../virtualDOMElement"));
const _reactElement = /*#__PURE__*/ _interop_require_default(require("../mixins/reactElement"));
const _array = require("../utilities/array");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ReactElement extends _virtualDOMElement.default {
    constructor(props){
        super(props);
        this.state = null;
        this.context = null;
    }
    getState() {
        return this.state;
    }
    getContext() {
        return this.context;
    }
    getDOMElement() {
        return null;
    }
    getChildReference() {
        const parent = this.getParent(), child = this; ///
        return reference(parent, child);
    }
    setState(state) {
        this.state = state;
        this.redraw();
    }
    updateState(state) {
        const oldState = this.state, newState = state; ///
        this.state = Object.assign(oldState, newState);
        this.redraw();
    }
    setInitialState(initialState) {
        this.state = initialState; ///
    }
    forceUpdate(update) {
        this.redraw(update);
    }
    mount(parent, reference, context) {
        this.context = context;
        const childContext = this.getChildContext(context) || null;
        const update = null, children = (0, _array.guarantee)(this.render(update, this));
        super.mount(parent, children);
        children.forEach((child)=>{
            const childParent = this, childReference = reference;
            child.mount(childParent, childReference, childContext);
        });
        this.childContextSet(childContext);
        this.componentDidMount();
    }
    unmount() {
        this.componentWillUnmount();
        const children = this.getChildren();
        children.forEach((child)=>{
            child.unmount();
        });
        super.unmount();
    }
    redraw(update) {
        const childContext = this.getChildContext(this.context) || null;
        this.children.forEach((child)=>{
            child.unmount();
        });
        this.children = (0, _array.guarantee)(this.render(update, this));
        this.children.forEach((child)=>{
            const childParent = this, childReference = this.getChildReference();
            child.mount(childParent, childReference, childContext);
        });
        this.childContextSet(childContext);
    }
}
Object.assign(ReactElement.prototype, _reactElement.default);
const _default = ReactElement;
function reference(parent, child) {
    let reference = findReference(parent, child), parentDOMElement = parent.getDOMElement();
    while(reference === null && parentDOMElement === null){
        child = parent; ///
        parent = parent.getParent();
        reference = findReference(parent, child);
        parentDOMElement = parent.getDOMElement();
    }
    return reference;
}
function findReference(parent, child) {
    const children = parent.getChildren(), remainingChildren = (0, _array.remaining)(child, children);
    return remainingChildren.reduce((reference, remainingChild)=>{
        if (reference === null) {
            const remainingChildDOMElement = remainingChild.getDOMElement();
            if (remainingChildDOMElement !== null) {
                reference = remainingChild; ///
            } else {
                child = null;
                parent = remainingChild; ///
                reference = findReference(parent, child);
            }
        }
        return reference;
    }, null);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aXJ0dWFsRE9NL3JlYWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmlydHVhbERPTUVsZW1lbnQgZnJvbSBcIi4uL3ZpcnR1YWxET01FbGVtZW50XCI7XG5pbXBvcnQgcmVhY3RFbGVtZW50TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvcmVhY3RFbGVtZW50XCI7XG5cbmltcG9ydCB7IGd1YXJhbnRlZSwgcmVtYWluaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jbGFzcyBSZWFjdEVsZW1lbnQgZXh0ZW5kcyBWaXJ0dWFsRE9NRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIFxuICAgIHRoaXMuc3RhdGUgPSBudWxsO1xuICAgIHRoaXMuY29udGV4dCA9IG51bGw7XG4gIH1cblxuICBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRDaGlsZFJlZmVyZW5jZSgpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudCgpLFxuICAgICAgICAgIGNoaWxkID0gdGhpczsgLy8vXG5cbiAgICByZXR1cm4gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICB9XG5cbiAgc2V0U3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICB0aGlzLnJlZHJhdygpO1xuICB9XG5cbiAgdXBkYXRlU3RhdGUoc3RhdGUpIHtcbiAgICBjb25zdCBvbGRTdGF0ZSA9IHRoaXMuc3RhdGUsICAvLy9cbiAgICAgICAgICBuZXdTdGF0ZSA9IHN0YXRlOyAvLy9cblxuICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKG9sZFN0YXRlLCBuZXdTdGF0ZSk7XG5cbiAgICB0aGlzLnJlZHJhdygpO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7ICAvLy9cbiAgfVxuXG4gIGZvcmNlVXBkYXRlKHVwZGF0ZSkge1xuICAgIHRoaXMucmVkcmF3KHVwZGF0ZSk7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dChjb250ZXh0KSB8fCBudWxsO1xuXG4gICAgY29uc3QgdXBkYXRlID0gbnVsbCxcbiAgICAgICAgICBjaGlsZHJlbiA9IGd1YXJhbnRlZSh0aGlzLnJlbmRlcih1cGRhdGUsIHRoaXMpKTtcblxuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgY2hpbGRyZW4pO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuXG4gICAgICBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNoaWxkQ29udGV4dFNldChjaGlsZENvbnRleHQpO1xuXG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudCgpO1xuICB9XG5cbiAgdW5tb3VudCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC51bm1vdW50KCk7XG4gICAgfSk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICByZWRyYXcodXBkYXRlKSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQodGhpcy5jb250ZXh0KSB8fCBudWxsO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQudW5tb3VudCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IGd1YXJhbnRlZSh0aGlzLnJlbmRlcih1cGRhdGUsIHRoaXMpKTtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gdGhpcy5nZXRDaGlsZFJlZmVyZW5jZSgpO1xuXG4gICAgICBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNoaWxkQ29udGV4dFNldChjaGlsZENvbnRleHQpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUmVhY3RFbGVtZW50LnByb3RvdHlwZSwgcmVhY3RFbGVtZW50TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RFbGVtZW50O1xuXG5mdW5jdGlvbiByZWZlcmVuY2UocGFyZW50LCBjaGlsZCkge1xuICBsZXQgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSxcbiAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIHdoaWxlICgocmVmZXJlbmNlID09PSBudWxsKSAmJiAocGFyZW50RE9NRWxlbWVudCA9PT0gbnVsbCkpIHtcbiAgICBjaGlsZCA9IHBhcmVudDsgLy8vXG5cbiAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5mdW5jdGlvbiBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpIHtcbiAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuZ2V0Q2hpbGRyZW4oKSxcbiAgICAgICAgcmVtYWluaW5nQ2hpbGRyZW4gPSByZW1haW5pbmcoY2hpbGQsIGNoaWxkcmVuKTtcblxuICByZXR1cm4gcmVtYWluaW5nQ2hpbGRyZW4ucmVkdWNlKChyZWZlcmVuY2UsIHJlbWFpbmluZ0NoaWxkKSA9PiB7XG4gICAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgcmVtYWluaW5nQ2hpbGRET01FbGVtZW50ID0gcmVtYWluaW5nQ2hpbGQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgICBpZiAocmVtYWluaW5nQ2hpbGRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJlZmVyZW5jZSA9IHJlbWFpbmluZ0NoaWxkOyAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gbnVsbDtcblxuICAgICAgICBwYXJlbnQgPSByZW1haW5pbmdDaGlsZDsgIC8vL1xuXG4gICAgICAgIHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfSwgbnVsbCk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3RFbGVtZW50IiwiVmlydHVhbERPTUVsZW1lbnQiLCJwcm9wcyIsInN0YXRlIiwiY29udGV4dCIsImdldFN0YXRlIiwiZ2V0Q29udGV4dCIsImdldERPTUVsZW1lbnQiLCJnZXRDaGlsZFJlZmVyZW5jZSIsInBhcmVudCIsImdldFBhcmVudCIsImNoaWxkIiwicmVmZXJlbmNlIiwic2V0U3RhdGUiLCJyZWRyYXciLCJ1cGRhdGVTdGF0ZSIsIm9sZFN0YXRlIiwibmV3U3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRJbml0aWFsU3RhdGUiLCJpbml0aWFsU3RhdGUiLCJmb3JjZVVwZGF0ZSIsInVwZGF0ZSIsIm1vdW50IiwiY2hpbGRDb250ZXh0IiwiZ2V0Q2hpbGRDb250ZXh0IiwiY2hpbGRyZW4iLCJndWFyYW50ZWUiLCJyZW5kZXIiLCJmb3JFYWNoIiwiY2hpbGRQYXJlbnQiLCJjaGlsZFJlZmVyZW5jZSIsImNoaWxkQ29udGV4dFNldCIsImNvbXBvbmVudERpZE1vdW50IiwidW5tb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0Q2hpbGRyZW4iLCJwcm90b3R5cGUiLCJyZWFjdEVsZW1lbnRNaXhpbnMiLCJmaW5kUmVmZXJlbmNlIiwicGFyZW50RE9NRWxlbWVudCIsInJlbWFpbmluZ0NoaWxkcmVuIiwicmVtYWluaW5nIiwicmVkdWNlIiwicmVtYWluaW5nQ2hpbGQiLCJyZW1haW5pbmdDaGlsZERPTUVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlIQTs7O2VBQUE7OzswRUEvRzhCO3FFQUNDO3VCQUVNOzs7Ozs7QUFFckMsTUFBTUEscUJBQXFCQywwQkFBaUI7SUFDMUMsWUFBWUMsS0FBSyxDQUFFO1FBQ2pCLEtBQUssQ0FBQ0E7UUFFTixJQUFJLENBQUNDLEtBQUssR0FBRztRQUNiLElBQUksQ0FBQ0MsT0FBTyxHQUFHO0lBQ2pCO0lBRUFDLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0YsS0FBSztJQUNuQjtJQUVBRyxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUNGLE9BQU87SUFDckI7SUFFQUcsZ0JBQWdCO1FBQ2QsT0FBTztJQUNUO0lBRUFDLG9CQUFvQjtRQUNsQixNQUFNQyxTQUFTLElBQUksQ0FBQ0MsU0FBUyxJQUN2QkMsUUFBUSxJQUFJLEVBQUUsR0FBRztRQUV2QixPQUFPQyxVQUFVSCxRQUFRRTtJQUMzQjtJQUVBRSxTQUFTVixLQUFLLEVBQUU7UUFDZCxJQUFJLENBQUNBLEtBQUss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