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
var _virtualDOMElement = /*#__PURE__*/ _interop_require_default(require("../virtualDOMElement"));
var _reactElement = /*#__PURE__*/ _interop_require_default(require("../mixins/reactElement"));
var _array = require("../utilities/array");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var ReactElement = /*#__PURE__*/ function(VirtualDOMElement) {
    _inherits(ReactElement, VirtualDOMElement);
    var _super = _create_super(ReactElement);
    function ReactElement(props) {
        _class_call_check(this, ReactElement);
        var _this;
        _this = _super.call(this, props);
        _this.state = null;
        _this.context = null;
        return _this;
    }
    _create_class(ReactElement, [
        {
            key: "getState",
            value: function getState() {
                return this.state;
            }
        },
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getDOMElement",
            value: function getDOMElement() {
                return null;
            }
        },
        {
            key: "getChildReference",
            value: function getChildReference() {
                var parent = this.getParent(), child = this; ///
                return reference(parent, child);
            }
        },
        {
            key: "setState",
            value: function setState(state) {
                this.state = state;
                this.redraw();
            }
        },
        {
            key: "updateState",
            value: function updateState(state) {
                var oldState = this.state, newState = state; ///
                this.state = Object.assign(oldState, newState);
                this.redraw();
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState(initialState) {
                this.state = initialState; ///
            }
        },
        {
            key: "forceUpdate",
            value: function forceUpdate(update) {
                this.redraw(update);
            }
        },
        {
            key: "mount",
            value: function mount(parent, reference, context) {
                var _this = this;
                this.context = context;
                var childContext = this.getChildContext(context) || null;
                var update = null, children = (0, _array.guarantee)(this.render(update, this));
                _get(_get_prototype_of(ReactElement.prototype), "mount", this).call(this, parent, children);
                children.forEach(function(child) {
                    var childParent = _this, childReference = reference;
                    child.mount(childParent, childReference, childContext);
                });
                this.childContextSet(childContext);
                this.componentDidMount();
            }
        },
        {
            key: "unmount",
            value: function unmount(context) {
                this.context = context;
                this.componentWillUnmount();
                var childContext = this.getChildContext(context) || null;
                var children = this.getChildren();
                children.forEach(function(child) {
                    child.unmount(childContext);
                });
                this.childContextSet(childContext);
                _get(_get_prototype_of(ReactElement.prototype), "unmount", this).call(this);
            }
        },
        {
            key: "redraw",
            value: function redraw(update) {
                var childParent = this, childContext = this.getChildContext(this.context) || null, childReference = this.getChildReference();
                this.children.forEach(function(child) {
                    child.unmount(childContext);
                });
                this.children = (0, _array.guarantee)(this.render(update, this));
                this.children.forEach(function(child) {
                    child.mount(childParent, childReference, childContext);
                });
                this.childContextSet(childContext);
            }
        }
    ]);
    return ReactElement;
}(_virtualDOMElement.default);
Object.assign(ReactElement.prototype, _reactElement.default);
var _default = ReactElement;
function reference(parent, child) {
    var reference = findReference(parent, child), parentDOMElement = parent.getDOMElement();
    while(reference === null && parentDOMElement === null){
        child = parent; ///
        parent = parent.getParent();
        reference = findReference(parent, child);
        parentDOMElement = parent.getDOMElement();
    }
    return reference;
}
function findReference(parent, child) {
    var children = parent.getChildren(), remainingChildren = (0, _array.remaining)(child, children);
    return remainingChildren.reduce(function(reference, remainingChild) {
        if (reference === null) {
            var remainingChildDOMElement = remainingChild.getDOMElement();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aXJ0dWFsRE9NL3JlYWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmlydHVhbERPTUVsZW1lbnQgZnJvbSBcIi4uL3ZpcnR1YWxET01FbGVtZW50XCI7XG5pbXBvcnQgcmVhY3RFbGVtZW50TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvcmVhY3RFbGVtZW50XCI7XG5cbmltcG9ydCB7IGd1YXJhbnRlZSwgcmVtYWluaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jbGFzcyBSZWFjdEVsZW1lbnQgZXh0ZW5kcyBWaXJ0dWFsRE9NRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIFxuICAgIHRoaXMuc3RhdGUgPSBudWxsO1xuICAgIHRoaXMuY29udGV4dCA9IG51bGw7XG4gIH1cblxuICBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRDaGlsZFJlZmVyZW5jZSgpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudCgpLFxuICAgICAgICAgIGNoaWxkID0gdGhpczsgLy8vXG5cbiAgICByZXR1cm4gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICB9XG5cbiAgc2V0U3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICB0aGlzLnJlZHJhdygpO1xuICB9XG5cbiAgdXBkYXRlU3RhdGUoc3RhdGUpIHtcbiAgICBjb25zdCBvbGRTdGF0ZSA9IHRoaXMuc3RhdGUsICAvLy9cbiAgICAgIG5ld1N0YXRlID0gc3RhdGU7IC8vL1xuXG4gICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24ob2xkU3RhdGUsIG5ld1N0YXRlKTtcblxuICAgIHRoaXMucmVkcmF3KCk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTsgIC8vL1xuICB9XG5cbiAgZm9yY2VVcGRhdGUodXBkYXRlKSB7XG4gICAgdGhpcy5yZWRyYXcodXBkYXRlKTtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHx8IG51bGw7XG5cbiAgICBjb25zdCB1cGRhdGUgPSBudWxsLFxuICAgICAgICAgIGNoaWxkcmVuID0gZ3VhcmFudGVlKHRoaXMucmVuZGVyKHVwZGF0ZSwgdGhpcykpO1xuXG4gICAgc3VwZXIubW91bnQocGFyZW50LCBjaGlsZHJlbik7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSByZWZlcmVuY2U7XG5cbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2hpbGRDb250ZXh0U2V0KGNoaWxkQ29udGV4dCk7XG5cbiAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCkgfHwgbnVsbDtcblxuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2hpbGRDb250ZXh0U2V0KGNoaWxkQ29udGV4dCk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICByZWRyYXcodXBkYXRlKSB7XG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KHRoaXMuY29udGV4dCkgfHwgbnVsbCxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHRoaXMuZ2V0Q2hpbGRSZWZlcmVuY2UoKTtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBndWFyYW50ZWUodGhpcy5yZW5kZXIodXBkYXRlLCB0aGlzKSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNoaWxkQ29udGV4dFNldChjaGlsZENvbnRleHQpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUmVhY3RFbGVtZW50LnByb3RvdHlwZSwgcmVhY3RFbGVtZW50TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RFbGVtZW50O1xuXG5mdW5jdGlvbiByZWZlcmVuY2UocGFyZW50LCBjaGlsZCkge1xuICBsZXQgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSxcbiAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIHdoaWxlICgocmVmZXJlbmNlID09PSBudWxsKSAmJiAocGFyZW50RE9NRWxlbWVudCA9PT0gbnVsbCkpIHtcbiAgICBjaGlsZCA9IHBhcmVudDsgLy8vXG5cbiAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5mdW5jdGlvbiBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpIHtcbiAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuZ2V0Q2hpbGRyZW4oKSxcbiAgICAgICAgcmVtYWluaW5nQ2hpbGRyZW4gPSByZW1haW5pbmcoY2hpbGQsIGNoaWxkcmVuKTtcblxuICByZXR1cm4gcmVtYWluaW5nQ2hpbGRyZW4ucmVkdWNlKChyZWZlcmVuY2UsIHJlbWFpbmluZ0NoaWxkKSA9PiB7XG4gICAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgcmVtYWluaW5nQ2hpbGRET01FbGVtZW50ID0gcmVtYWluaW5nQ2hpbGQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgICBpZiAocmVtYWluaW5nQ2hpbGRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJlZmVyZW5jZSA9IHJlbWFpbmluZ0NoaWxkOyAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gbnVsbDtcblxuICAgICAgICBwYXJlbnQgPSByZW1haW5pbmdDaGlsZDsgIC8vL1xuXG4gICAgICAgIHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfSwgbnVsbCk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3RFbGVtZW50IiwicHJvcHMiLCJzdGF0ZSIsImNvbnRleHQiLCJnZXRTdGF0ZSIsImdldENvbnRleHQiLCJnZXRET01FbGVtZW50IiwiZ2V0Q2hpbGRSZWZlcmVuY2UiLCJwYXJlbnQiLCJnZXRQYXJlbnQiLCJjaGlsZCIsInJlZmVyZW5jZSIsInNldFN0YXRlIiwicmVkcmF3IiwidXBkYXRlU3RhdGUiLCJvbGRTdGF0ZSIsIm5ld1N0YXRlIiwiT2JqZWN0IiwiYXNzaWduIiwic2V0SW5pdGlhbFN0YXRlIiwiaW5pdGlhbFN0YXRlIiwiZm9yY2VVcGRhdGUiLCJ1cGRhdGUiLCJtb3VudCIsImNoaWxkQ29udGV4dCIsImdldENoaWxkQ29udGV4dCIsImNoaWxkcmVuIiwiZ3VhcmFudGVlIiwicmVuZGVyIiwiZm9yRWFjaCIsImNoaWxkUGFyZW50IiwiY2hpbGRSZWZlcmVuY2UiLCJjaGlsZENvbnRleHRTZXQiLCJjb21wb25lbnREaWRNb3VudCIsInVubW91bnQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldENoaWxkcmVuIiwiVmlydHVhbERPTUVsZW1lbnQiLCJwcm90b3R5cGUiLCJyZWFjdEVsZW1lbnRNaXhpbnMiLCJmaW5kUmVmZXJlbmNlIiwicGFyZW50RE9NRWxlbWVudCIsInJlbWFpbmluZ0NoaWxkcmVuIiwicmVtYWluaW5nIiwicmVkdWNlIiwicmVtYWluaW5nQ2hpbGQiLCJyZW1haW5pbmdDaGlsZERPTUVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNIQTs7O2VBQUE7Ozt3RUFwSDhCO21FQUNDO3FCQUVNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBQSxBQUFNQSw2QkE2R0gsQUE3R0g7Y0FBTUE7K0JBQUFBO2FBQUFBLGFBQ1FDLEtBQUs7Z0NBRGJEOztrQ0FFSUM7UUFFTixNQUFLQyxLQUFLLEdBQUc7UUFDYixNQUFLQyxPQUFPLEdB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