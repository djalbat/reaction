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
var _virtualDOMElement = /*#__PURE__*/ _interopRequireDefault(require("../virtualDOMElement"));
var _reactElement = /*#__PURE__*/ _interopRequireDefault(require("../mixins/reactElement"));
var _array = require("../utilities/array");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
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
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
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
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var ReactElement = /*#__PURE__*/ function(VirtualDOMElement) {
    _inherits(ReactElement, VirtualDOMElement);
    var _super = _createSuper(ReactElement);
    function ReactElement(props) {
        _classCallCheck(this, ReactElement);
        var _this;
        _this = _super.call(this, props);
        _this.state = undefined; ///
        _this.context = undefined; ///
        return _this;
    }
    _createClass(ReactElement, [
        {
            key: "mount",
            value: function mount(parent, reference, context) {
                var _this = this;
                this.context = context;
                var childContext = this.getChildContext(context), children = (0, _array.guarantee)(this.render());
                _get(_getPrototypeOf(ReactElement.prototype), "mount", this).call(this, parent, children);
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
                    return child.unmount(childContext);
                });
                _get(_getPrototypeOf(ReactElement.prototype), "unmount", this).call(this);
            }
        },
        {
            key: "remount",
            value: function remount(update) {
                var childParent = this, childReference = this.getChildReference(), childContext = this.getChildContext(this.context);
                this.children.forEach(function(child) {
                    return child.unmount(childContext);
                });
                this.children = (0, _array.guarantee)(this.render(update));
                this.children.forEach(function(child) {
                    return child.mount(childParent, childReference, childContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aXJ0dWFsRE9NL3JlYWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmlydHVhbERPTUVsZW1lbnQgZnJvbSBcIi4uL3ZpcnR1YWxET01FbGVtZW50XCI7XG5pbXBvcnQgcmVhY3RFbGVtZW50TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvcmVhY3RFbGVtZW50XCI7XG5cbmltcG9ydCB7IGd1YXJhbnRlZSwgcmVtYWluaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jbGFzcyBSZWFjdEVsZW1lbnQgZXh0ZW5kcyBWaXJ0dWFsRE9NRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIFxuICAgIHRoaXMuc3RhdGUgPSB1bmRlZmluZWQ7IC8vL1xuXG4gICAgdGhpcy5jb250ZXh0ID0gdW5kZWZpbmVkOyAvLy9cbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpLFxuICAgICAgICAgIGNoaWxkcmVuID0gZ3VhcmFudGVlKHRoaXMucmVuZGVyKCkpO1xuXG4gICAgc3VwZXIubW91bnQocGFyZW50LCBjaGlsZHJlbik7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSByZWZlcmVuY2U7XG5cbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgfVxuXG4gIHVubW91bnQoY29udGV4dCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG5cbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dChjb250ZXh0KSxcbiAgICAgICAgICBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCkpO1xuXG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgcmVtb3VudCh1cGRhdGUpIHtcbiAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSB0aGlzLmdldENoaWxkUmVmZXJlbmNlKCksXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQodGhpcy5jb250ZXh0KTtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gZ3VhcmFudGVlKHRoaXMucmVuZGVyKHVwZGF0ZSkpO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpKTtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlOyAgLy8vXG4gIH1cblxuICBzZXRTdGF0ZShzdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxuICAgIHRoaXMucmVtb3VudCgpO1xuICB9XG5cbiAgdXBkYXRlU3RhdGUobmV3U3RhdGUpIHtcbiAgICBjb25zdCBvbGRTdGF0ZSA9IHRoaXMuc3RhdGU7ICAvLy9cblxuICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKG9sZFN0YXRlLCBuZXdTdGF0ZSk7XG5cbiAgICB0aGlzLnJlbW91bnQoKTtcbiAgfVxuXG4gIGZvcmNlVXBkYXRlKHVwZGF0ZSkge1xuICAgIHRoaXMucmVtb3VudCh1cGRhdGUpO1xuICB9XG5cbiAgZ2V0Q2hpbGRSZWZlcmVuY2UoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnQoKSxcbiAgICAgICAgICBjaGlsZCA9IHRoaXM7IC8vL1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFJlYWN0RWxlbWVudC5wcm90b3R5cGUsIHJlYWN0RWxlbWVudE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0RWxlbWVudDtcblxuZnVuY3Rpb24gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpIHtcbiAgbGV0IHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCksXG4gICAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcblxuICB3aGlsZSAoKHJlZmVyZW5jZSA9PT0gbnVsbCkgJiYgKHBhcmVudERPTUVsZW1lbnQgPT09IG51bGwpKSB7XG4gICAgY2hpbGQgPSBwYXJlbnQ7IC8vL1xuXG4gICAgcGFyZW50ID0gcGFyZW50LmdldFBhcmVudCgpO1xuXG4gICAgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmdldENoaWxkcmVuKCksXG4gICAgICAgIHJlbWFpbmluZ0NoaWxkcmVuID0gcmVtYWluaW5nKGNoaWxkLCBjaGlsZHJlbik7XG5cbiAgcmV0dXJuIHJlbWFpbmluZ0NoaWxkcmVuLnJlZHVjZSgocmVmZXJlbmNlLCByZW1haW5pbmdDaGlsZCkgPT4ge1xuICAgIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCA9IHJlbWFpbmluZ0NoaWxkLmdldERPTUVsZW1lbnQoKTtcblxuICAgICAgaWYgKHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2UgPSByZW1haW5pbmdDaGlsZDsgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IG51bGw7XG5cbiAgICAgICAgcGFyZW50ID0gcmVtYWluaW5nQ2hpbGQ7ICAvLy9cblxuICAgICAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH0sIG51bGwpO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0RWxlbWVudCIsInByb3BzIiwic3RhdGUiLCJ1bmRlZmluZWQiLCJjb250ZXh0IiwibW91bnQiLCJwYXJlbnQiLCJyZWZlcmVuY2UiLCJjaGlsZENvbnRleHQiLCJnZXRDaGlsZENvbnRleHQiLCJjaGlsZHJlbiIsImd1YXJhbnRlZSIsInJlbmRlciIsImZvckVhY2giLCJjaGlsZCIsImNoaWxkUGFyZW50IiwiY2hpbGRSZWZlcmVuY2UiLCJjb21wb25lbnREaWRNb3VudCIsInVubW91bnQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldENoaWxkcmVuIiwicmVtb3VudCIsInVwZGF0ZSIsImdldENoaWxkUmVmZXJlbmNlIiwiZ2V0RE9NRWxlbWVudCIsImdldFN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwiaW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsIm5ld1N0YXRlIiwib2xkU3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJmb3JjZVVwZGF0ZSIsImdldFBhcmVudCIsIlZpcnR1YWxET01FbGVtZW50IiwicHJvdG90eXBlIiwicmVhY3RFbGVtZW50TWl4aW5zIiwiZmluZFJlZmVyZW5jZSIsInBhcmVudERPTUVsZW1lbnQiLCJyZW1haW5pbmdDaGlsZHJlbiIsInJlbWFpbmluZyIsInJlZHVjZSIsInJlbWFpbmluZ0NoaWxkIiwicmVtYWluaW5nQ2hpbGRET01FbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBbUdiLFNBQTRCOzs7ZUFBNUIsUUFBNEI7OztzRUFqR0Usc0JBQXNCO2lFQUNyQix3QkFBd0I7cUJBRWxCLG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpELElBQUEsQUFBTUEsWUFBWSxpQkEwRmYsQUExRkg7OzthQUFNQSxZQUFZLENBQ0pDLEtBQUs7OztrQ0FDVEEsS0FBSyxFQUFFO1FBRWIsTUFBS0MsS0FBSyxHQUFHQyxTQUFTLENBQUMsQ0FBQyxHQUFHO1FBRTNCLE1BQUtDLE9BQU8sR0FBR0QsU0FBUyxDQUFDLENBQUMsR0FBRzs7Ozs7WUFHL0JFLEdBQUssRUFBTEEsT0FBSzttQkFBTEEsU0FBQUEsS0FBSyxDQUFDQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUgsT0FBTyxFQUFFOztnQkFDaEMsSUFBSSxDQUFDQSxPQUFPLEdBQUdBLE9BQU8sQ0FBQztnQkFFdkIsSUFBTUksWUFBWSxHQUFHLElBQUksQ0FBQ0MsZUFBZSxDQUFDTCxPQUFPLENBQUMsRUFDNUNNLFFBQVEsR0FBR0MsSUFBQUEsTUFBUyxVQUFBLEVBQUMsSUFBSSxDQUFDQyxN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