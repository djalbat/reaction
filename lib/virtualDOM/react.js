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
            key: "mount",
            value: function mount(parent, reference, context) {
                var _this = this;
                this.context = context;
                var update = null, childContext = this.getChildContext(context), children = (0, _array.guarantee)(this.render(update, this));
                _get(_get_prototype_of(ReactElement.prototype), "mount", this).call(this, parent, children);
                children.forEach(function(child) {
                    var childParent = _this, childReference = reference;
                    child.mount(childParent, childReference, childContext);
                });
                this.componentDidMount();
            }
        },
        {
            key: "unmount",
            value: function unmount(context) {
                this.context = context;
                this.componentWillUnmount();
                var childContext = this.getChildContext(context), children = this.getChildren();
                children.forEach(function(child) {
                    child.unmount(childContext);
                });
                _get(_get_prototype_of(ReactElement.prototype), "unmount", this).call(this);
            }
        },
        {
            key: "remount",
            value: function remount(update) {
                var childParent = this, childReference = this.getChildReference(), childContext = this.getChildContext(this.context);
                this.children.forEach(function(child) {
                    child.unmount(childContext);
                });
                this.children = (0, _array.guarantee)(this.render(update, this));
                this.children.forEach(function(child) {
                    child.mount(childParent, childReference, childContext);
                });
            }
        },
        {
            key: "getDOMElement",
            value: function getDOMElement() {
                return null;
            }
        },
        {
            key: "getState",
            value: function getState() {
                return this.state;
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState(initialState) {
                this.state = initialState; ///
            }
        },
        {
            key: "setState",
            value: function setState(state) {
                this.state = state;
                this.remount();
            }
        },
        {
            key: "updateState",
            value: function updateState(newState) {
                var oldState = this.state; ///
                this.state = Object.assign(oldState, newState);
                this.remount();
            }
        },
        {
            key: "forceUpdate",
            value: function forceUpdate(update) {
                this.remount(update);
            }
        },
        {
            key: "getChildReference",
            value: function getChildReference() {
                var parent = this.getParent(), child = this; ///
                return reference(parent, child);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aXJ0dWFsRE9NL3JlYWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmlydHVhbERPTUVsZW1lbnQgZnJvbSBcIi4uL3ZpcnR1YWxET01FbGVtZW50XCI7XG5pbXBvcnQgcmVhY3RFbGVtZW50TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvcmVhY3RFbGVtZW50XCI7XG5cbmltcG9ydCB7IGd1YXJhbnRlZSwgcmVtYWluaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jbGFzcyBSZWFjdEVsZW1lbnQgZXh0ZW5kcyBWaXJ0dWFsRE9NRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIFxuICAgIHRoaXMuc3RhdGUgPSBudWxsO1xuXG4gICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIGNvbnN0IHVwZGF0ZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCksXG4gICAgICAgICAgY2hpbGRyZW4gPSBndWFyYW50ZWUodGhpcy5yZW5kZXIodXBkYXRlLCB0aGlzKSk7XG5cbiAgICBzdXBlci5tb3VudChwYXJlbnQsIGNoaWxkcmVuKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcblxuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudCgpO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQoKTtcblxuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpLFxuICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIHJlbW91bnQodXBkYXRlKSB7XG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gdGhpcy5nZXRDaGlsZFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KHRoaXMuY29udGV4dCk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gZ3VhcmFudGVlKHRoaXMucmVuZGVyKHVwZGF0ZSwgdGhpcykpO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7ICAvLy9cbiAgfVxuXG4gIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgdGhpcy5yZW1vdW50KCk7XG4gIH1cblxuICB1cGRhdGVTdGF0ZShuZXdTdGF0ZSkge1xuICAgIGNvbnN0IG9sZFN0YXRlID0gdGhpcy5zdGF0ZTsgIC8vL1xuXG4gICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24ob2xkU3RhdGUsIG5ld1N0YXRlKTtcblxuICAgIHRoaXMucmVtb3VudCgpO1xuICB9XG5cbiAgZm9yY2VVcGRhdGUodXBkYXRlKSB7XG4gICAgdGhpcy5yZW1vdW50KHVwZGF0ZSk7XG4gIH1cblxuICBnZXRDaGlsZFJlZmVyZW5jZSgpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudCgpLFxuICAgICAgICAgIGNoaWxkID0gdGhpczsgLy8vXG5cbiAgICByZXR1cm4gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUmVhY3RFbGVtZW50LnByb3RvdHlwZSwgcmVhY3RFbGVtZW50TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RFbGVtZW50O1xuXG5mdW5jdGlvbiByZWZlcmVuY2UocGFyZW50LCBjaGlsZCkge1xuICBsZXQgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSxcbiAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIHdoaWxlICgocmVmZXJlbmNlID09PSBudWxsKSAmJiAocGFyZW50RE9NRWxlbWVudCA9PT0gbnVsbCkpIHtcbiAgICBjaGlsZCA9IHBhcmVudDsgLy8vXG5cbiAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5mdW5jdGlvbiBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpIHtcbiAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuZ2V0Q2hpbGRyZW4oKSxcbiAgICAgICAgcmVtYWluaW5nQ2hpbGRyZW4gPSByZW1haW5pbmcoY2hpbGQsIGNoaWxkcmVuKTtcblxuICByZXR1cm4gcmVtYWluaW5nQ2hpbGRyZW4ucmVkdWNlKChyZWZlcmVuY2UsIHJlbWFpbmluZ0NoaWxkKSA9PiB7XG4gICAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgcmVtYWluaW5nQ2hpbGRET01FbGVtZW50ID0gcmVtYWluaW5nQ2hpbGQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgICBpZiAocmVtYWluaW5nQ2hpbGRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJlZmVyZW5jZSA9IHJlbWFpbmluZ0NoaWxkOyAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gbnVsbDtcblxuICAgICAgICBwYXJlbnQgPSByZW1haW5pbmdDaGlsZDsgIC8vL1xuXG4gICAgICAgIHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfSwgbnVsbCk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3RFbGVtZW50IiwicHJvcHMiLCJzdGF0ZSIsImNvbnRleHQiLCJtb3VudCIsInBhcmVudCIsInJlZmVyZW5jZSIsInVwZGF0ZSIsImNoaWxkQ29udGV4dCIsImdldENoaWxkQ29udGV4dCIsImNoaWxkcmVuIiwiZ3VhcmFudGVlIiwicmVuZGVyIiwiZm9yRWFjaCIsImNoaWxkIiwiY2hpbGRQYXJlbnQiLCJjaGlsZFJlZmVyZW5jZSIsImNvbXBvbmVudERpZE1vdW50IiwidW5tb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0Q2hpbGRyZW4iLCJyZW1vdW50IiwiZ2V0Q2hpbGRSZWZlcmVuY2UiLCJnZXRET01FbGVtZW50IiwiZ2V0U3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJpbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwibmV3U3RhdGUiLCJvbGRTdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsImZvcmNlVXBkYXRlIiwiZ2V0UGFyZW50IiwiVmlydHVhbERPTUVsZW1lbnQiLCJwcm90b3R5cGUiLCJyZWFjdEVsZW1lbnRNaXhpbnMiLCJmaW5kUmVmZXJlbmNlIiwicGFyZW50RE9NRWxlbWVudCIsInJlbWFpbmluZ0NoaWxkcmVuIiwicmVtYWluaW5nIiwicmVkdWNlIiwicmVtYWluaW5nQ2hpbGQiLCJyZW1haW5pbmdDaGlsZERPTUVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBHQTs7O2VBQUE7Ozt3RUF4RzhCO21FQUNDO3FCQUVNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBQSxBQUFNQSw2QkFpR0gsQUFqR0g7Y0FBTUE7K0JBQUFBO2FBQUFBLGFBQ1FDLEtBQUs7Z0NBRGJEOztrQ0FFSUM7UUFFTixNQUFLQyxLQUFLLEdBQUc7UUFFYixNQUFLQyxPQUFPLEdBQUc7OztrQkFOYkg7O1lBU0pJLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUgsT0FBTzs7Z0JBQzlCLElBQUksQ0FBQ0EsT0FBTyxHQUFHQTtnQkFFZixJQUFNSSxTQUFTLE1BQ1RDLGVBQWUsSUFBSSxDQUFDQyxlQUFlLENBQUNOLFVBQ3BDTyxXQUFXQyxJQUFBQSxnQkFBUyxFQUFDLElBQUksQ0FBQ0MsTUFBTSxDQUFDTCxRQUFRLElBQUk7Z0JBRW5ELHVCQWhCRVAseUJBZ0JJSSxTQUFOLElBQUssYUFBT0MsUUFBUUs7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