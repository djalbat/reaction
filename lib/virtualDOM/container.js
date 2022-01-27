"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _virtualDOMElement = _interopRequireDefault(require("../virtualDOMElement"));
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
var ContainerElement = /*#__PURE__*/ function(VirtualDOMElement) {
    _inherits(ContainerElement, VirtualDOMElement);
    var _super = _createSuper(ContainerElement);
    function ContainerElement(props, domElement) {
        _classCallCheck(this, ContainerElement);
        var _this;
        _this = _super.call(this, props);
        _this.domElement = domElement;
        return _this;
    }
    _createClass(ContainerElement, [
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
                _get(_getPrototypeOf(ContainerElement.prototype), "mount", this).call(this, parent, children);
                parentDOMElement(parent).insertBefore(this.domElement, referenceDOMElement(reference));
                return this.domElement;
            }
        },
        {
            key: "unmount",
            value: function unmount() {
                this.domElement.parentElement.removeChild(this.domElement);
                _get(_getPrototypeOf(ContainerElement.prototype), "unmount", this).call(this);
            }
        }
    ], [
        {
            key: "fromDOMElement",
            value: function fromDOMElement(domElement) {
                var children = [], props = {
                    children: children
                }, virtualDOMNode = new ContainerElement(props, domElement);
                return virtualDOMNode;
            }
        }
    ]);
    return ContainerElement;
}(_virtualDOMElement.default);
exports.default = ContainerElement;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aXJ0dWFsRE9NL2NvbnRhaW5lci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZpcnR1YWxET01FbGVtZW50IGZyb20gXCIuLi92aXJ0dWFsRE9NRWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWluZXJFbGVtZW50IGV4dGVuZHMgVmlydHVhbERPTUVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgZG9tRWxlbWVudCkge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcbiAgICBcbiAgICBzdXBlci5tb3VudChwYXJlbnQsIGNoaWxkcmVuKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQocGFyZW50KS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCByZWZlcmVuY2VET01FbGVtZW50KHJlZmVyZW5jZSkpO1xuXG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcblxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXSxcbiAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2aXJ0dWFsRE9NTm9kZSA9IG5ldyBDb250YWluZXJFbGVtZW50KHByb3BzLCBkb21FbGVtZW50KTtcblxuICAgIHJldHVybiB2aXJ0dWFsRE9NTm9kZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJlbnRET01FbGVtZW50KHBhcmVudCkge1xuICBsZXQgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG5cbiAgd2hpbGUgKHBhcmVudERPTUVsZW1lbnQgPT09IG51bGwpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIHJldHVybiBwYXJlbnRET01FbGVtZW50O1xufVxuXG5mdW5jdGlvbiByZWZlcmVuY2VET01FbGVtZW50KHJlZmVyZW5jZSkge1xuICBjb25zdCByZWZlcmVuY2VET01FbGVtZW50ID0gKHJlZmVyZW5jZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2UuZ2V0RE9NRWxlbWVudCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiByZWZlcmVuY2VET01FbGVtZW50O1xufVxuIl0sIm5hbWVzIjpbIkNvbnRhaW5lckVsZW1lbnQiLCJwcm9wcyIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwibW91bnQiLCJwYXJlbnQiLCJyZWZlcmVuY2UiLCJjaGlsZHJlbiIsImdldENoaWxkcmVuIiwicGFyZW50RE9NRWxlbWVudCIsImluc2VydEJlZm9yZSIsInJlZmVyZW5jZURPTUVsZW1lbnQiLCJ1bm1vdW50IiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwiZnJvbURPTUVsZW1lbnQiLCJ2aXJ0dWFsRE9NTm9kZSIsImdldFBhcmVudCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFa0IsR0FBc0IsQ0FBdEIsa0JBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFL0JBLGdCQUFnQixpQkFBdEIsUUFBUTs7O2FBQUZBLGdCQUFnQixDQUN2QkMsS0FBSyxFQUFFQyxVQUFVOzs7a0NBQ3JCRCxLQUFLO2NBRU5DLFVBQVUsR0FBR0EsVUFBVTs7Ozs7WUFHOUJDLEdBQWEsRUFBYkEsQ0FBYTttQkFBYkEsUUFBUSxDQUFSQSxhQUFhLEdBQUcsQ0FBQztnQkFDZixNQUFNLENBQUMsSUFBSSxDQUFDRCxVQUFVO1lBQ3hCLENBQUM7OztZQUVERSxHQUFLLEVBQUxBLENBQUs7bUJBQUxBLFFBQVEsQ0FBUkEsS0FBSyxDQUFDQyxNQUFNLEVBQUVDLFNBQVMsRUFBRSxDQUFDO2dCQUN4QixHQUFLLENBQUNDLFFBQVEsR0FBRyxJQUFJLENBQUNDLFdBQVc7cUNBWmhCUixnQkFBZ0IsYUFjM0JJLENBQUssUUFBWCxJQUFLLGFBQU9DLE1BQU0sRUFBRUUsUUFBUTtnQkFFNUJFLGdCQUFnQixDQUFDSixNQUFNLEVBQUVLLFlBQVksQ0FBQyxJQUFJLENBQUNSLFVBQVUsRUFBRVMsbUJBQW1CLENBQUNMLFNBQVM7Z0JBRXBGLE1BQU0sQ0FBQyxJQUFJLENBQUNKLFVBQVU7WUFDeEIsQ0FBQzs7O1lBRURVLEdBQU8sRUFBUEEsQ0FBTzttQkFBUEEsUUFBUSxDQUFSQSxPQUFPLEdBQUcsQ0FBQztnQkFDVCxJQUFJLENBQUNWLFVBQVUsQ0FBQ1csYUFBYSxDQUFDQyxXQUFXLENBQUMsSUFBSSxDQUFDWixVQUFVO3FDQXRCeENGLGdCQUFnQixhQXdCM0JZLENBQU8sVUFBYixJQUFLO1lBQ1AsQ0FBQzs7OztZQUVNRyxHQUFjLEVBQWRBLENBQWM7bUJBQXJCLFFBQVEsQ0FBREEsY0FBYyxDQUFDYixVQUFVLEVBQUUsQ0FBQztnQkFDakMsR0FBSyxDQUFDSyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEVBQ2JOLEtBQUssR0FBRyxDQUFDO29CQUNQTSxRQUFRLEVBQVJBLFFBQVE7Z0JBQ1YsQ0FBQyxFQUNEUyxjQUFjLEdBQUcsR0FBRyxDQUFDaEIsZ0JBQWdCLENBQUNDLEtBQUssRUFBRUMsVUFBVTtnQkFFN0QsTUFBTSxDQUFDYyxjQUFjO1lBQ3ZCLENBQUM7Ozs7RUFyQzJCLGtCQUFzQjtrQkFFL0JoQixnQkFBZ0I7U0FzQzVCUyxnQkFBZ0IsQ0FBQ0osTUFBTSxFQUFFLENBQUM7SUFDakMsR0FBRyxDQUFDSSxpQkFBZ0IsR0FBR0osTUFBTSxDQUFDRixhQUFhO1VBRXBDTSxpQkFBZ0IsS0FBSyxJQUFJLENBQUUsQ0FBQztRQUNqQ0osTUFBTSxHQUFHQSxNQUFNLENBQUNZLFNBQVM7UUFFekJSLGlCQUFnQixHQUFHSixNQUFNLENBQUNGLGFBQWE7SUFDekMsQ0FBQztJQUVELE1BQU0sQ0FBQ00saUJBQWdCO0FBQ3pCLENBQUM7U0FFUUUsbUJBQW1CLENBQUNMLFNBQVMsRUFBRSxDQUFDO0lBQ3ZDLEdBQUssQ0FBQ0ssb0JBQW1CLEdBQUlMLFNBQVMsS0FBSyxJQUFJLEdBQ2pCQSxTQUFTLENBQUNILGFBQWEsS0FDckIsSUFBSTtJQUVwQyxNQUFNLENBQUNRLG9CQUFtQjtBQUM1QixDQUFDIn0=