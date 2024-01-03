"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContainerElement;
    }
});
var _virtualDOMElement = /*#__PURE__*/ _interop_require_default(require("../virtualDOMElement"));
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
var ContainerElement = /*#__PURE__*/ function(VirtualDOMElement) {
    _inherits(ContainerElement, VirtualDOMElement);
    var _super = _create_super(ContainerElement);
    function ContainerElement(props, domElement) {
        _class_call_check(this, ContainerElement);
        var _this;
        _this = _super.call(this, props);
        _this.domElement = domElement;
        return _this;
    }
    _create_class(ContainerElement, [
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
                _get(_get_prototype_of(ContainerElement.prototype), "mount", this).call(this, parent, children);
                parentDOMElement(parent).insertBefore(this.domElement, referenceDOMElement(reference));
                return this.domElement;
            }
        },
        {
            key: "unmount",
            value: function unmount() {
                this.domElement.parentElement.removeChild(this.domElement);
                _get(_get_prototype_of(ContainerElement.prototype), "unmount", this).call(this);
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
function parentDOMElement(parent) {
    var parentDOMElement = parent.getDOMElement();
    while(parentDOMElement === null){
        parent = parent.getParent();
        parentDOMElement = parent.getDOMElement();
    }
    return parentDOMElement;
}
function referenceDOMElement(reference) {
    var referenceDOMElement = reference !== null ? reference.getDOMElement() : null;
    return referenceDOMElement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aXJ0dWFsRE9NL2NvbnRhaW5lci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZpcnR1YWxET01FbGVtZW50IGZyb20gXCIuLi92aXJ0dWFsRE9NRWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWluZXJFbGVtZW50IGV4dGVuZHMgVmlydHVhbERPTUVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgZG9tRWxlbWVudCkge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcbiAgICBcbiAgICBzdXBlci5tb3VudChwYXJlbnQsIGNoaWxkcmVuKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQocGFyZW50KS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCByZWZlcmVuY2VET01FbGVtZW50KHJlZmVyZW5jZSkpO1xuXG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcblxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXSxcbiAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2aXJ0dWFsRE9NTm9kZSA9IG5ldyBDb250YWluZXJFbGVtZW50KHByb3BzLCBkb21FbGVtZW50KTtcblxuICAgIHJldHVybiB2aXJ0dWFsRE9NTm9kZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJlbnRET01FbGVtZW50KHBhcmVudCkge1xuICBsZXQgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG5cbiAgd2hpbGUgKHBhcmVudERPTUVsZW1lbnQgPT09IG51bGwpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIHJldHVybiBwYXJlbnRET01FbGVtZW50O1xufVxuXG5mdW5jdGlvbiByZWZlcmVuY2VET01FbGVtZW50KHJlZmVyZW5jZSkge1xuICBjb25zdCByZWZlcmVuY2VET01FbGVtZW50ID0gKHJlZmVyZW5jZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2UuZ2V0RE9NRWxlbWVudCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiByZWZlcmVuY2VET01FbGVtZW50O1xufVxuIl0sIm5hbWVzIjpbIkNvbnRhaW5lckVsZW1lbnQiLCJwcm9wcyIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwibW91bnQiLCJwYXJlbnQiLCJyZWZlcmVuY2UiLCJjaGlsZHJlbiIsImdldENoaWxkcmVuIiwicGFyZW50RE9NRWxlbWVudCIsImluc2VydEJlZm9yZSIsInJlZmVyZW5jZURPTUVsZW1lbnQiLCJ1bm1vdW50IiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwiZnJvbURPTUVsZW1lbnQiLCJ2aXJ0dWFsRE9NTm9kZSIsIlZpcnR1YWxET01FbGVtZW50IiwiZ2V0UGFyZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozt3RUFGUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWYsSUFBQSxBQUFNQSxpQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQSxpQkFDUEMsS0FBSyxFQUFFQyxVQUFVO2dDQURWRjs7a0NBRVhDO1FBRU4sTUFBS0MsVUFBVSxHQUFHQTs7O2tCQUpERjs7WUFPbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsVUFBVTtZQUN4Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxNQUFNLEVBQUVDLFNBQVM7Z0JBQ3JCLElBQU1DLFdBQVcsSUFBSSxDQUFDQyxXQUFXO2dCQUVqQyx1QkFkaUJSLDZCQWNYSSxTQUFOLElBQUssYUFBT0MsUUFBUUU7Z0JBRXBCRSxpQkFBaUJKLFFBQVFLLFlBQVksQ0FBQyxJQUFJLENBQUNSLFVBQVUsRUFBRVMsb0JBQW9CTDtnQkFFM0UsT0FBTyxJQUFJLENBQUNKLFVBQVU7WUFDeEI7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDVixVQUFVLENBQUNXLGFBQWEsQ0FBQ0MsV0FBVyxDQUFDLElBQUksQ0FBQ1osVUFBVTtnQkFFekQsdUJBeEJpQkYsNkJBd0JYWSxXQUFOLElBQUs7WUFDUDs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxlQUFlYixVQUFVO2dCQUM5QixJQUFNSyxXQUFXLEVBQUUsRUFDYk4sUUFBUTtvQkFDTk0sVUFBQUE7Z0JBQ0YsR0FDQVMsaUJBQWlCLElBaENOaEIsaUJBZ0MyQkMsT0FBT0M7Z0JBRW5ELE9BQU9jO1lBQ1Q7OztXQW5DbUJoQjtFQUF5QmlCLDBCQUFpQjtBQXNDL0QsU0FBU1IsaUJBQWlCSixNQUFNO0lBQzlCLElBQUlJLG1CQUFtQkosT0FBT0YsYUFBYTtJQUUzQyxNQUFPTSxxQkFBcUIsS0FBTTtRQUNoQ0osU0FBU0EsT0FBT2EsU0FBUztRQUV6QlQsbUJBQW1CSixPQUFPRixhQUFhO0lBQ3pDO0lBRUEsT0FBT007QUFDVDtBQUVBLFNBQVNFLG9CQUFvQkwsU0FBUztJQUNwQyxJQUFNSyxzQkFBc0IsQUFBQ0wsY0FBYyxPQUNiQSxVQUFVSCxhQUFhLEtBQ3JCO0lBRWhDLE9BQU9RO0FBQ1QifQ==