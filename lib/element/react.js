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
var ReactElement = function(Element1) {
    _inherits(ReactElement, _element.default);
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
                this.context = context;
                var childContext = this.getChildContext(context), children = _array.guarantee(this.render());
                _get(_getPrototypeOf(ReactElement.prototype), "mount", this).call(this, parent, children);
                children.forEach((function(child) {
                    var childParent = this, childReference = reference;
                    child.mount(childParent, childReference, childContext);
                }).bind(this));
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
                this.children = _array.guarantee(this.render(update));
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
}(_wrapNativeSuper(_element.default));
Object.assign(ReactElement.prototype, _reactElement.default);
var _default = ReactElement;
exports.default = _default;
function reference(parent, child) {
    var reference1 = findReference(parent, child), parentDOMElement = parent.getDOMElement();
    while(reference1 === null && parentDOMElement === null){
        child = parent; ///
        parent = parent.getParent();
        reference1 = findReference(parent, child);
        parentDOMElement = parent.getDOMElement();
    }
    return reference1;
}
function findReference(parent, child) {
    var children = parent.getChildren(), remainingChildren = _array.remaining(child, children);
    return remainingChildren.reduce(function(reference1, remainingChild) {
        if (reference1 === null) {
            var remainingChildDOMElement = remainingChild.getDOMElement();
            if (remainingChildDOMElement !== null) {
                reference1 = remainingChild; ///
            } else {
                child = null;
                parent = remainingChild; ///
                reference1 = findReference(parent, child);
            }
        }
        return reference1;
    }, null);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlYWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgcmVhY3RFbGVtZW50TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvcmVhY3RFbGVtZW50XCI7XG5cbmltcG9ydCB7IGd1YXJhbnRlZSwgcmVtYWluaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jbGFzcyBSZWFjdEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gICAgdGhpcy5zdGF0ZSA9IHVuZGVmaW5lZDsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQgPSB1bmRlZmluZWQ7IC8vL1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCksXG4gICAgICAgICAgY2hpbGRyZW4gPSBndWFyYW50ZWUodGhpcy5yZW5kZXIoKSk7XG5cbiAgICBzdXBlci5tb3VudChwYXJlbnQsIGNoaWxkcmVuKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcblxuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudCgpO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQoKTtcblxuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpLFxuICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KSk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICByZW1vdW50KHVwZGF0ZSkge1xuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHRoaXMuZ2V0Q2hpbGRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dCh0aGlzLmNvbnRleHQpO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpKTtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBndWFyYW50ZWUodGhpcy5yZW5kZXIodXBkYXRlKSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCkpO1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7ICAvLy9cbiAgfVxuXG4gIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgdGhpcy5yZW1vdW50KCk7XG4gIH1cblxuICB1cGRhdGVTdGF0ZShuZXdTdGF0ZSkge1xuICAgIGNvbnN0IG9sZFN0YXRlID0gdGhpcy5zdGF0ZTsgIC8vL1xuXG4gICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24ob2xkU3RhdGUsIG5ld1N0YXRlKTtcblxuICAgIHRoaXMucmVtb3VudCgpO1xuICB9XG5cbiAgZm9yY2VVcGRhdGUodXBkYXRlKSB7XG4gICAgdGhpcy5yZW1vdW50KHVwZGF0ZSk7XG4gIH1cblxuICBnZXRDaGlsZFJlZmVyZW5jZSgpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudCgpLFxuICAgICAgICAgIGNoaWxkID0gdGhpczsgLy8vXG5cbiAgICByZXR1cm4gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUmVhY3RFbGVtZW50LnByb3RvdHlwZSwgcmVhY3RFbGVtZW50TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RFbGVtZW50O1xuXG5mdW5jdGlvbiByZWZlcmVuY2UocGFyZW50LCBjaGlsZCkge1xuICBsZXQgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSxcbiAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIHdoaWxlICgocmVmZXJlbmNlID09PSBudWxsKSAmJiAocGFyZW50RE9NRWxlbWVudCA9PT0gbnVsbCkpIHtcbiAgICBjaGlsZCA9IHBhcmVudDsgLy8vXG5cbiAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5mdW5jdGlvbiBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpIHtcbiAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuZ2V0Q2hpbGRyZW4oKSxcbiAgICAgICAgcmVtYWluaW5nQ2hpbGRyZW4gPSByZW1haW5pbmcoY2hpbGQsIGNoaWxkcmVuKTtcblxuICByZXR1cm4gcmVtYWluaW5nQ2hpbGRyZW4ucmVkdWNlKChyZWZlcmVuY2UsIHJlbWFpbmluZ0NoaWxkKSA9PiB7XG4gICAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgcmVtYWluaW5nQ2hpbGRET01FbGVtZW50ID0gcmVtYWluaW5nQ2hpbGQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgICBpZiAocmVtYWluaW5nQ2hpbGRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJlZmVyZW5jZSA9IHJlbWFpbmluZ0NoaWxkOyAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gbnVsbDtcblxuICAgICAgICBwYXJlbnQgPSByZW1haW5pbmdDaGlsZDsgIC8vL1xuXG4gICAgICAgIHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfSwgbnVsbCk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7Ozs7SUFFQSxRQUFBO0lBRUEsYUFBQTtJQUVBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVBLFlBQUEsWUFBQSxRQUFBO2NBQUEsWUFBQSxFQU5BLFFBQUE7YUFNQSxZQUFBLENBQ0EsS0FBQTs4QkFEQSxZQUFBOztpRUFBQSxZQUFBLGFBRUEsS0FBQTtjQUVBLEtBQUEsR0FBQSxTQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7Y0FFQSxPQUFBLEdBQUEsU0FBQSxDQUFBLENB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