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
                var childContext = this.getChildContext(context);
                var update = null, children = (0, _array.guarantee)(this.render(update, this));
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
                var childContext = this.getChildContext(context);
                var children = this.getChildren();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aXJ0dWFsRE9NL3JlYWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmlydHVhbERPTUVsZW1lbnQgZnJvbSBcIi4uL3ZpcnR1YWxET01FbGVtZW50XCI7XG5pbXBvcnQgcmVhY3RFbGVtZW50TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvcmVhY3RFbGVtZW50XCI7XG5cbmltcG9ydCB7IGd1YXJhbnRlZSwgcmVtYWluaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jbGFzcyBSZWFjdEVsZW1lbnQgZXh0ZW5kcyBWaXJ0dWFsRE9NRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIFxuICAgIHRoaXMuc3RhdGUgPSBudWxsO1xuICAgIHRoaXMuY29udGV4dCA9IG51bGw7XG4gIH1cblxuICBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRDaGlsZFJlZmVyZW5jZSgpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudCgpLFxuICAgICAgICAgIGNoaWxkID0gdGhpczsgLy8vXG5cbiAgICByZXR1cm4gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICB9XG5cbiAgc2V0U3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICB0aGlzLnJlZHJhdygpO1xuICB9XG5cbiAgdXBkYXRlU3RhdGUoc3RhdGUpIHtcbiAgICBjb25zdCBvbGRTdGF0ZSA9IHRoaXMuc3RhdGUsICAvLy9cbiAgICAgIG5ld1N0YXRlID0gc3RhdGU7IC8vL1xuXG4gICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24ob2xkU3RhdGUsIG5ld1N0YXRlKTtcblxuICAgIHRoaXMucmVkcmF3KCk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTsgIC8vL1xuICB9XG5cbiAgZm9yY2VVcGRhdGUodXBkYXRlKSB7XG4gICAgdGhpcy5yZWRyYXcodXBkYXRlKTtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpO1xuXG4gICAgY29uc3QgdXBkYXRlID0gbnVsbCxcbiAgICAgICAgICBjaGlsZHJlbiA9IGd1YXJhbnRlZSh0aGlzLnJlbmRlcih1cGRhdGUsIHRoaXMpKTtcblxuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgY2hpbGRyZW4pO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuXG4gICAgICBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNoaWxkQ29udGV4dFNldChjb250ZXh0KTtcblxuICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgfVxuXG4gIHVubW91bnQoY29udGV4dCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG5cbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dChjb250ZXh0KTtcblxuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2hpbGRDb250ZXh0U2V0KGNvbnRleHQpO1xuXG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgcmVkcmF3KHVwZGF0ZSkge1xuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dCh0aGlzLmNvbnRleHQpLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gdGhpcy5nZXRDaGlsZFJlZmVyZW5jZSgpO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IGd1YXJhbnRlZSh0aGlzLnJlbmRlcih1cGRhdGUsIHRoaXMpKTtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2hpbGRDb250ZXh0U2V0KHRoaXMuY29udGV4dCk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihSZWFjdEVsZW1lbnQucHJvdG90eXBlLCByZWFjdEVsZW1lbnRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIHJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSB7XG4gIGxldCByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpLFxuICAgICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG5cbiAgd2hpbGUgKChyZWZlcmVuY2UgPT09IG51bGwpICYmIChwYXJlbnRET01FbGVtZW50ID09PSBudWxsKSkge1xuICAgIGNoaWxkID0gcGFyZW50OyAvLy9cblxuICAgIHBhcmVudCA9IHBhcmVudC5nZXRQYXJlbnQoKTtcblxuICAgIHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmZ1bmN0aW9uIGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCkge1xuICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5nZXRDaGlsZHJlbigpLFxuICAgICAgICByZW1haW5pbmdDaGlsZHJlbiA9IHJlbWFpbmluZyhjaGlsZCwgY2hpbGRyZW4pO1xuXG4gIHJldHVybiByZW1haW5pbmdDaGlsZHJlbi5yZWR1Y2UoKHJlZmVyZW5jZSwgcmVtYWluaW5nQ2hpbGQpID0+IHtcbiAgICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgICBjb25zdCByZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgPSByZW1haW5pbmdDaGlsZC5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGlmIChyZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gcmVtYWluaW5nQ2hpbGQ7IC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBudWxsO1xuXG4gICAgICAgIHBhcmVudCA9IHJlbWFpbmluZ0NoaWxkOyAgLy8vXG5cbiAgICAgICAgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9LCBudWxsKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdEVsZW1lbnQiLCJwcm9wcyIsInN0YXRlIiwiY29udGV4dCIsImdldFN0YXRlIiwiZ2V0Q29udGV4dCIsImdldERPTUVsZW1lbnQiLCJnZXRDaGlsZFJlZmVyZW5jZSIsInBhcmVudCIsImdldFBhcmVudCIsImNoaWxkIiwicmVmZXJlbmNlIiwic2V0U3RhdGUiLCJyZWRyYXciLCJ1cGRhdGVTdGF0ZSIsIm9sZFN0YXRlIiwibmV3U3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRJbml0aWFsU3RhdGUiLCJpbml0aWFsU3RhdGUiLCJmb3JjZVVwZGF0ZSIsInVwZGF0ZSIsIm1vdW50IiwiY2hpbGRDb250ZXh0IiwiZ2V0Q2hpbGRDb250ZXh0IiwiY2hpbGRyZW4iLCJndWFyYW50ZWUiLCJyZW5kZXIiLCJmb3JFYWNoIiwiY2hpbGRQYXJlbnQiLCJjaGlsZFJlZmVyZW5jZSIsImNoaWxkQ29udGV4dFNldCIsImNvbXBvbmVudERpZE1vdW50IiwidW5tb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0Q2hpbGRyZW4iLCJWaXJ0dWFsRE9NRWxlbWVudCIsInByb3RvdHlwZSIsInJlYWN0RWxlbWVudE1peGlucyIsImZpbmRSZWZlcmVuY2UiLCJwYXJlbnRET01FbGVtZW50IiwicmVtYWluaW5nQ2hpbGRyZW4iLCJyZW1haW5pbmciLCJyZWR1Y2UiLCJyZW1haW5pbmdDaGlsZCIsInJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc0hBOzs7ZUFBQTs7O3dFQXBIOEI7bUVBQ0M7cUJBRU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxJQUFBLEFBQU1BLDZCQTZHSCxBQTdHSDtjQUFNQTsrQkFBQUE7YUFBQUEsYUFDUUMsS0FBSztnQ0FEYkQ7O2tDQUVJQztRQUVOLE1BQUtDLEtBQUssR0FBRztRQUNiLE1BQUtDLE9BQU8sR0FBRzs7O2tCQUxiSDs7WUFRSkksS0FBQUE7bUJBQUFBLFNB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