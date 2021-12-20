"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _element = _interopRequireDefault(require("../element"));
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
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
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
var VirtualDOMNode = /*#__PURE__*/ function(Element) {
    _inherits(VirtualDOMNode, Element);
    var _super = _createSuper(VirtualDOMNode);
    function VirtualDOMNode(props, domElement) {
        _classCallCheck(this, VirtualDOMNode);
        var _this;
        _this = _super.call(this, props);
        _this.domElement = domElement;
        return _this;
    }
    _createClass(VirtualDOMNode, [
        {
            key: "getDOMElement",
            value: function getDOMElement() {
                return this.domElement;
            }
        },
        {
            key: "mount",
            value: function mount(parent, reference) {
                var children = this.getChildren();
                _get(_getPrototypeOf(VirtualDOMNode.prototype), "mount", this).call(this, parent, children);
                parentDOMElement(parent).insertBefore(this.domElement, referenceDOMElement(reference));
                return this.domElement;
            }
        },
        {
            key: "unmount",
            value: function unmount() {
                this.domElement.parentElement.removeChild(this.domElement);
                _get(_getPrototypeOf(VirtualDOMNode.prototype), "unmount", this).call(this);
            }
        }
    ], [
        {
            key: "fromDOMElement",
            value: function fromDOMElement(domElement) {
                var children = [], props = {
                    children: children
                }, virtualDOMNode = new VirtualDOMNode(props, domElement);
                return virtualDOMNode;
            }
        }
    ]);
    return VirtualDOMNode;
}(_wrapNativeSuper(_element.default));
exports.default = VirtualDOMNode;
function parentDOMElement(parent) {
    var parentDOMElement1 = parent.getDOMElement();
    while(parentDOMElement1 === null){
        parent = parent.getParent();
        parentDOMElement1 = parent.getDOMElement();
    }
    return parentDOMElement1;
}
function referenceDOMElement(reference) {
    var referenceDOMElement1 = reference !== null ? reference.getDOMElement() : null;
    return referenceDOMElement1;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ZpcnR1YWxET01Ob2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaXJ0dWFsRE9NTm9kZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgZG9tRWxlbWVudCkge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcbiAgICBcbiAgICBzdXBlci5tb3VudChwYXJlbnQsIGNoaWxkcmVuKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQocGFyZW50KS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCByZWZlcmVuY2VET01FbGVtZW50KHJlZmVyZW5jZSkpO1xuXG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcblxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXSxcbiAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2aXJ0dWFsRE9NTm9kZSA9IG5ldyBWaXJ0dWFsRE9NTm9kZShwcm9wcywgZG9tRWxlbWVudCk7XG5cbiAgICByZXR1cm4gdmlydHVhbERPTU5vZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyZW50RE9NRWxlbWVudChwYXJlbnQpIHtcbiAgbGV0IHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIHdoaWxlIChwYXJlbnRET01FbGVtZW50ID09PSBudWxsKSB7XG4gICAgcGFyZW50ID0gcGFyZW50LmdldFBhcmVudCgpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG4gIH1cblxuICByZXR1cm4gcGFyZW50RE9NRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gcmVmZXJlbmNlRE9NRWxlbWVudChyZWZlcmVuY2UpIHtcbiAgY29uc3QgcmVmZXJlbmNlRE9NRWxlbWVudCA9IChyZWZlcmVuY2UgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlLmdldERPTUVsZW1lbnQoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gcmVmZXJlbmNlRE9NRWxlbWVudDtcbn1cbiJdLCJuYW1lcyI6WyJWaXJ0dWFsRE9NTm9kZSIsInByb3BzIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJtb3VudCIsInBhcmVudCIsInJlZmVyZW5jZSIsImNoaWxkcmVuIiwiZ2V0Q2hpbGRyZW4iLCJwYXJlbnRET01FbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwicmVmZXJlbmNlRE9NRWxlbWVudCIsInVubW91bnQiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJmcm9tRE9NRWxlbWVudCIsInZpcnR1YWxET01Ob2RlIiwiZ2V0UGFyZW50Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVRLEdBQVksQ0FBWixRQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVhBLGNBQWMsaUJBQXBCLFFBQVE7Y0FBRkEsY0FBYzs4QkFBZEEsY0FBYzthQUFkQSxjQUFjLENBQ3JCQyxLQUFLLEVBQUVDLFVBQVU7OEJBRFZGLGNBQWM7O2tDQUV6QkMsS0FBSztjQUVOQyxVQUFVLEdBQUdBLFVBQVU7OztpQkFKWEYsY0FBYzs7WUFPakNHLEdBQWEsRUFBYkEsQ0FBYTttQkFBYkEsUUFBUSxDQUFSQSxhQUFhLEdBQUcsQ0FBQztnQkFDZixNQUFNLENBQUMsSUFBSSxDQUFDRCxVQUFVO1lBQ3hCLENBQUM7OztZQUVERSxHQUFLLEVBQUxBLENBQUs7bUJBQUxBLFFBQVEsQ0FBUkEsS0FBSyxDQUFDQyxNQUFNLEVBQUVDLFNBQVMsRUFBRSxDQUFDO2dCQUN4QixHQUFLLENBQUNDLFFBQVEsR0FBRyxJQUFJLENBQUNDLFdBQVc7cUNBWmhCUixjQUFjLGFBY3pCSSxDQUFLLFFBQVgsSUFBSyxhQUFPQyxNQUFNLEVBQUVFLFFBQVE7Z0JBRTVCRSxnQkFBZ0IsQ0FBQ0osTUFBTSxFQUFFSyxZQUFZLENBQUMsSUFBSSxDQUFDUixVQUFVLEVBQUVTLG1CQUFtQixDQUFDTCxTQUFTO2dCQUVwRixNQUFNLENBQUMsSUFBSSxDQUFDSixVQUFVO1lBQ3hCLENBQUM7OztZQUVEVSxHQUFPLEVBQVBBLENBQU87bUJBQVBBLFFBQVEsQ0FBUkEsT0FBTyxHQUFHLENBQUM7Z0JBQ1QsSUFBSSxDQUFDVixVQUFVLENBQUNXLGFBQWEsQ0FBQ0MsV0FBVyxDQUFDLElBQUksQ0FBQ1osVUFBVTtxQ0F0QnhDRixjQUFjLGFBd0J6QlksQ0FBTyxVQUFiLElBQUs7WUFDUCxDQUFDOzs7O1lBRU1HLEdBQWMsRUFBZEEsQ0FBYzttQkFBckIsUUFBUSxDQUFEQSxjQUFjLENBQUNiLFVBQVUsRUFBRSxDQUFDO2dCQUNqQyxHQUFLLENBQUNLLFFBQVEsR0FBRyxDQUFDLENBQUMsRUFDYk4sS0FBSyxHQUFHLENBQUM7b0JBQ1BNLFFBQVEsRUFBUkEsUUFBUTtnQkFDVixDQUFDLEVBQ0RTLGNBQWMsR0FBRyxHQUFHLENBQUNoQixjQUFjLENBQUNDLEtBQUssRUFBRUMsVUFBVTtnQkFFM0QsTUFBTSxDQUFDYyxjQUFjO1lBQ3ZCLENBQUM7OztXQW5Da0JoQixjQUFjO21CQUZmLFFBQVk7a0JBRVhBLGNBQWM7U0FzQzFCUyxnQkFBZ0IsQ0FBQ0osTUFBTSxFQUFFLENBQUM7SUFDakMsR0FBRyxDQUFDSSxpQkFBZ0IsR0FBR0osTUFBTSxDQUFDRixhQUFhO1VBRXBDTSxpQkFBZ0IsS0FBSyxJQUFJLENBQUUsQ0FBQztRQUNqQ0osTUFBTSxHQUFHQSxNQUFNLENBQUNZLFNBQVM7UUFFekJSLGlCQUFnQixHQUFHSixNQUFNLENBQUNGLGFBQWE7SUFDekMsQ0FBQztJQUVELE1BQU0sQ0FBQ00saUJBQWdCO0FBQ3pCLENBQUM7U0FFUUUsbUJBQW1CLENBQUNMLFNBQVMsRUFBRSxDQUFDO0lBQ3ZDLEdBQUssQ0FBQ0ssb0JBQW1CLEdBQUlMLFNBQVMsS0FBSyxJQUFJLEdBQ2pCQSxTQUFTLENBQUNILGFBQWEsS0FDckIsSUFBSTtJQUVwQyxNQUFNLENBQUNRLG9CQUFtQjtBQUM1QixDQUFDIn0=