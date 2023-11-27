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
                var update = null, children = (0, _array.guarantee)(this.render(update, this)), childContext = this.getChildContext(context);
                _get(_get_prototype_of(ReactElement.prototype), "mount", this).call(this, parent, children);
                children.forEach(function(child) {
                    var childParent = _this, childReference = reference;
                    child.mount(childParent, childReference, childContext);
                });
                this.childContextSet(context);
                this.componentDidMount();
            }
        },
        {
            key: "unmount",
            value: function unmount(context) {
                this.context = context;
                this.componentWillUnmount();
                var children = this.getChildren(), childContext = this.getChildContext(context);
                children.forEach(function(child) {
                    child.unmount(childContext);
                });
                this.childContextSet(context);
                _get(_get_prototype_of(ReactElement.prototype), "unmount", this).call(this);
            }
        },
        {
            key: "redraw",
            value: function redraw(update) {
                var childParent = this, childContext = this.getChildContext(this.context), childReference = this.getChildReference();
                this.children.forEach(function(child) {
                    child.unmount(childContext);
                });
                this.children = (0, _array.guarantee)(this.render(update, this));
                this.children.forEach(function(child) {
                    child.mount(childParent, childReference, childContext);
                });
                this.childContextSet(this.context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aXJ0dWFsRE9NL3JlYWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmlydHVhbERPTUVsZW1lbnQgZnJvbSBcIi4uL3ZpcnR1YWxET01FbGVtZW50XCI7XG5pbXBvcnQgcmVhY3RFbGVtZW50TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvcmVhY3RFbGVtZW50XCI7XG5cbmltcG9ydCB7IGd1YXJhbnRlZSwgcmVtYWluaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jbGFzcyBSZWFjdEVsZW1lbnQgZXh0ZW5kcyBWaXJ0dWFsRE9NRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIFxuICAgIHRoaXMuc3RhdGUgPSBudWxsO1xuICAgIHRoaXMuY29udGV4dCA9IG51bGw7XG4gIH1cblxuICBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRDaGlsZFJlZmVyZW5jZSgpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudCgpLFxuICAgICAgICAgIGNoaWxkID0gdGhpczsgLy8vXG5cbiAgICByZXR1cm4gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICB9XG5cbiAgc2V0U3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICB0aGlzLnJlZHJhdygpO1xuICB9XG5cbiAgdXBkYXRlU3RhdGUoc3RhdGUpIHtcbiAgICBjb25zdCBvbGRTdGF0ZSA9IHRoaXMuc3RhdGUsICAvLy9cbiAgICAgIG5ld1N0YXRlID0gc3RhdGU7IC8vL1xuXG4gICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24ob2xkU3RhdGUsIG5ld1N0YXRlKTtcblxuICAgIHRoaXMucmVkcmF3KCk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTsgIC8vL1xuICB9XG5cbiAgZm9yY2VVcGRhdGUodXBkYXRlKSB7XG4gICAgdGhpcy5yZWRyYXcodXBkYXRlKTtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIGNvbnN0IHVwZGF0ZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGRyZW4gPSBndWFyYW50ZWUodGhpcy5yZW5kZXIodXBkYXRlLCB0aGlzKSksXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCk7XG5cbiAgICBzdXBlci5tb3VudChwYXJlbnQsIGNoaWxkcmVuKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcblxuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jaGlsZENvbnRleHRTZXQoY29udGV4dCk7XG5cbiAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCksXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCk7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jaGlsZENvbnRleHRTZXQoY29udGV4dCk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICByZWRyYXcodXBkYXRlKSB7XG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KHRoaXMuY29udGV4dCksXG4gICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSB0aGlzLmdldENoaWxkUmVmZXJlbmNlKCk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gZ3VhcmFudGVlKHRoaXMucmVuZGVyKHVwZGF0ZSwgdGhpcykpO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jaGlsZENvbnRleHRTZXQodGhpcy5jb250ZXh0KTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFJlYWN0RWxlbWVudC5wcm90b3R5cGUsIHJlYWN0RWxlbWVudE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0RWxlbWVudDtcblxuZnVuY3Rpb24gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpIHtcbiAgbGV0IHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCksXG4gICAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcblxuICB3aGlsZSAoKHJlZmVyZW5jZSA9PT0gbnVsbCkgJiYgKHBhcmVudERPTUVsZW1lbnQgPT09IG51bGwpKSB7XG4gICAgY2hpbGQgPSBwYXJlbnQ7IC8vL1xuXG4gICAgcGFyZW50ID0gcGFyZW50LmdldFBhcmVudCgpO1xuXG4gICAgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmdldENoaWxkcmVuKCksXG4gICAgICAgIHJlbWFpbmluZ0NoaWxkcmVuID0gcmVtYWluaW5nKGNoaWxkLCBjaGlsZHJlbik7XG5cbiAgcmV0dXJuIHJlbWFpbmluZ0NoaWxkcmVuLnJlZHVjZSgocmVmZXJlbmNlLCByZW1haW5pbmdDaGlsZCkgPT4ge1xuICAgIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCA9IHJlbWFpbmluZ0NoaWxkLmdldERPTUVsZW1lbnQoKTtcblxuICAgICAgaWYgKHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2UgPSByZW1haW5pbmdDaGlsZDsgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IG51bGw7XG5cbiAgICAgICAgcGFyZW50ID0gcmVtYWluaW5nQ2hpbGQ7ICAvLy9cblxuICAgICAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH0sIG51bGwpO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0RWxlbWVudCIsInByb3BzIiwic3RhdGUiLCJjb250ZXh0IiwiZ2V0U3RhdGUiLCJnZXRDb250ZXh0IiwiZ2V0RE9NRWxlbWVudCIsImdldENoaWxkUmVmZXJlbmNlIiwicGFyZW50IiwiZ2V0UGFyZW50IiwiY2hpbGQiLCJyZWZlcmVuY2UiLCJzZXRTdGF0ZSIsInJlZHJhdyIsInVwZGF0ZVN0YXRlIiwib2xkU3RhdGUiLCJuZXdTdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsInNldEluaXRpYWxTdGF0ZSIsImluaXRpYWxTdGF0ZSIsImZvcmNlVXBkYXRlIiwidXBkYXRlIiwibW91bnQiLCJjaGlsZHJlbiIsImd1YXJhbnRlZSIsInJlbmRlciIsImNoaWxkQ29udGV4dCIsImdldENoaWxkQ29udGV4dCIsImZvckVhY2giLCJjaGlsZFBhcmVudCIsImNoaWxkUmVmZXJlbmNlIiwiY2hpbGRDb250ZXh0U2V0IiwiY29tcG9uZW50RGlkTW91bnQiLCJ1bm1vdW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRDaGlsZHJlbiIsIlZpcnR1YWxET01FbGVtZW50IiwicHJvdG90eXBlIiwicmVhY3RFbGVtZW50TWl4aW5zIiwiZmluZFJlZmVyZW5jZSIsInBhcmVudERPTUVsZW1lbnQiLCJyZW1haW5pbmdDaGlsZHJlbiIsInJlbWFpbmluZyIsInJlZHVjZSIsInJlbWFpbmluZ0NoaWxkIiwicmVtYWluaW5nQ2hpbGRET01FbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvSEE7OztlQUFBOzs7d0VBbEg4QjttRUFDQztxQkFFTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJDLElBQUEsQUFBTUEsNkJBMkdILEFBM0dIO2NBQU1BOytCQUFBQTthQUFBQSxhQUNRQyxLQUFLO2dDQURiRDs7a0NBRUlDO1FBRU4sTUFBS0MsS0FBSyxHQUFHO1FBQ2IsTUFBS0MsT0FBTyxHQUFHOzs7a0JBTGJIOztZQVFKSSxLQUFBQTttQkFBQUEsU0FBQUE7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