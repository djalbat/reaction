"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _element = _interopRequireDefault(require("../element"));
var _reactElement = _interopRequireDefault(require("../mixins/reactElement"));
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
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
var ReactElement = /*#__PURE__*/ function(Element) {
    _inherits(ReactElement, Element);
    function ReactElement(props) {
        _classCallCheck(this, ReactElement);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactElement).call(this, props));
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
                var childContext = this.getChildContext(context), children = (0, _array).guarantee(this.render());
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
                this.children = (0, _array).guarantee(this.render(update));
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
                return reference1(parent, child);
            }
        }
    ]);
    return ReactElement;
}(_wrapNativeSuper(_element.default));
Object.assign(ReactElement.prototype, _reactElement.default);
var _default = ReactElement;
exports.default = _default;
function reference1(parent, child) {
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
    var children = parent.getChildren(), remainingChildren = (0, _array).remaining(child, children);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlYWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgcmVhY3RFbGVtZW50TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvcmVhY3RFbGVtZW50XCI7XG5cbmltcG9ydCB7IGd1YXJhbnRlZSwgcmVtYWluaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jbGFzcyBSZWFjdEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gICAgdGhpcy5zdGF0ZSA9IHVuZGVmaW5lZDsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQgPSB1bmRlZmluZWQ7IC8vL1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCksXG4gICAgICAgICAgY2hpbGRyZW4gPSBndWFyYW50ZWUodGhpcy5yZW5kZXIoKSk7XG5cbiAgICBzdXBlci5tb3VudChwYXJlbnQsIGNoaWxkcmVuKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcblxuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudCgpO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQoKTtcblxuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpLFxuICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KSk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICByZW1vdW50KHVwZGF0ZSkge1xuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHRoaXMuZ2V0Q2hpbGRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dCh0aGlzLmNvbnRleHQpO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpKTtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBndWFyYW50ZWUodGhpcy5yZW5kZXIodXBkYXRlKSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCkpO1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7ICAvLy9cbiAgfVxuXG4gIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgdGhpcy5yZW1vdW50KCk7XG4gIH1cblxuICB1cGRhdGVTdGF0ZShuZXdTdGF0ZSkge1xuICAgIGNvbnN0IG9sZFN0YXRlID0gdGhpcy5zdGF0ZTsgIC8vL1xuXG4gICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24ob2xkU3RhdGUsIG5ld1N0YXRlKTtcblxuICAgIHRoaXMucmVtb3VudCgpO1xuICB9XG5cbiAgZm9yY2VVcGRhdGUodXBkYXRlKSB7XG4gICAgdGhpcy5yZW1vdW50KHVwZGF0ZSk7XG4gIH1cblxuICBnZXRDaGlsZFJlZmVyZW5jZSgpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudCgpLFxuICAgICAgICAgIGNoaWxkID0gdGhpczsgLy8vXG5cbiAgICByZXR1cm4gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUmVhY3RFbGVtZW50LnByb3RvdHlwZSwgcmVhY3RFbGVtZW50TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RFbGVtZW50O1xuXG5mdW5jdGlvbiByZWZlcmVuY2UocGFyZW50LCBjaGlsZCkge1xuICBsZXQgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSxcbiAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIHdoaWxlICgocmVmZXJlbmNlID09PSBudWxsKSAmJiAocGFyZW50RE9NRWxlbWVudCA9PT0gbnVsbCkpIHtcbiAgICBjaGlsZCA9IHBhcmVudDsgLy8vXG5cbiAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5mdW5jdGlvbiBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpIHtcbiAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuZ2V0Q2hpbGRyZW4oKSxcbiAgICAgICAgcmVtYWluaW5nQ2hpbGRyZW4gPSByZW1haW5pbmcoY2hpbGQsIGNoaWxkcmVuKTtcblxuICByZXR1cm4gcmVtYWluaW5nQ2hpbGRyZW4ucmVkdWNlKChyZWZlcmVuY2UsIHJlbWFpbmluZ0NoaWxkKSA9PiB7XG4gICAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgcmVtYWluaW5nQ2hpbGRET01FbGVtZW50ID0gcmVtYWluaW5nQ2hpbGQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgICBpZiAocmVtYWluaW5nQ2hpbGRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJlZmVyZW5jZSA9IHJlbWFpbmluZ0NoaWxkOyAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gbnVsbDtcblxuICAgICAgICBwYXJlbnQgPSByZW1haW5pbmdDaGlsZDsgIC8vL1xuXG4gICAgICAgIHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfSwgbnVsbCk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3RFbGVtZW50IiwicHJvcHMiLCJzdGF0ZSIsInVuZGVmaW5lZCIsImNvbnRleHQiLCJtb3VudCIsInBhcmVudCIsInJlZmVyZW5jZSIsImNoaWxkQ29udGV4dCIsImdldENoaWxkQ29udGV4dCIsImNoaWxkcmVuIiwicmVuZGVyIiwiZm9yRWFjaCIsImNoaWxkIiwiY2hpbGRQYXJlbnQiLCJjaGlsZFJlZmVyZW5jZSIsImNvbXBvbmVudERpZE1vdW50IiwidW5tb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0Q2hpbGRyZW4iLCJyZW1vdW50IiwidXBkYXRlIiwiZ2V0Q2hpbGRSZWZlcmVuY2UiLCJnZXRET01FbGVtZW50IiwiZ2V0U3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJpbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwibmV3U3RhdGUiLCJvbGRTdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsImZvcmNlVXBkYXRlIiwiZ2V0UGFyZW50IiwicHJvdG90eXBlIiwiZmluZFJlZmVyZW5jZSIsInBhcmVudERPTUVsZW1lbnQiLCJyZW1haW5pbmdDaGlsZHJlbiIsInJlZHVjZSIsInJlbWFpbmluZ0NoaWxkIiwicmVtYWluaW5nQ2hpbGRET01FbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVRLEdBQVksQ0FBWixRQUFZO0FBRUQsR0FBd0IsQ0FBeEIsYUFBd0I7QUFFbEIsR0FBb0IsQ0FBcEIsTUFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVuREEsWUFBWSxpQkFBbEIsUUFBUTtjQUFGQSxZQUFZO2FBQVpBLFlBQVksQ0FDSkMsS0FBSzs4QkFEYkQsWUFBWTs7aUVBQVpBLFlBQVksYUFFUkMsS0FBSztjQUVOQyxLQUFLLEdBQUdDLFNBQVMsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Y0FFdEJDLE9BQU8sR0FBR0QsU0FBUyxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzs7O2lCQU4zQkgsWUFBWTs7WUFTaEJLLEdBQUssRUFBTEEsQ0FBSzttQkFBTEEsUUFBUSxDQUFSQSxLQUFLLENBQUNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFSCxPQUFPLEVBQUUsQ0FBQzs7Z0JBQ2pDLElBQUksQ0FBQ0EsT0FBTyxHQUFHQSxPQUFPO2dCQUV0QixHQUFLLENBQUNJLFlBQVksR0FBRyxJQUFJLENBQUNDLGVBQWUsQ0FBQ0wsT0FBTyxHQUMzQ00sUUFBUSxPQWZtQixNQUFvQixZQWUxQixJQUFJLENBQUNDLE1BQU07cUNBYnBDWCxZQUFZLGFBZVJLLENBQUss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