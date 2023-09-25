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
var _container = /*#__PURE__*/ _interop_require_default(require("../container"));
var _containerElement = /*#__PURE__*/ _interop_require_default(require("../../mixins/containerElement"));
var _constants = require("../../constants");
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
var Element = /*#__PURE__*/ function(ContainerElement) {
    _inherits(Element, ContainerElement);
    var _super = _create_super(Element);
    function Element() {
        _class_call_check(this, Element);
        return _super.apply(this, arguments);
    }
    _create_class(Element, [
        {
            key: "mount",
            value: function mount(parent, reference, context) {
                _get(_get_prototype_of(Element.prototype), "mount", this).call(this, parent, reference);
                var childParent = this, childReference = null, childContext = context, children = this.getChildren();
                children.forEach(function(child) {
                    child.mount(childParent, childReference, childContext);
                });
                this.applyProps();
            }
        },
        {
            key: "unmount",
            value: function unmount(context) {
                var childContext = context, children = this.getChildren();
                children.forEach(function(child) {
                    child.unmount(childContext);
                });
                _get(_get_prototype_of(Element.prototype), "unmount", this).call(this);
            }
        },
        {
            key: "applyProps",
            value: function applyProps() {
                var _this = this;
                var names = Object.keys(this.props);
                names.forEach(function(name) {
                    var value = _this.props[name];
                    if (false) {} else if (_this.isHandlerName(name)) {
                        _this.setHandler(name, value);
                    } else if (_this.isAttributeName(name)) {
                        _this.setAttribute(name, value);
                    } else if (name === _constants.REF) {
                        var callback = value; ///
                        callback(_this.domElement);
                    }
                });
            }
        },
        {
            key: "setHandler",
            value: function setHandler(name, value) {
                var eventType = name.substr(2).toLowerCase(), handler = value; ///
                this.domElement.addEventListener(eventType, handler);
            }
        },
        {
            key: "isHandlerName",
            value: function isHandlerName(name) {
                return /^on/.test(name);
            }
        }
    ]);
    return Element;
}(_container.default);
Object.assign(Element.prototype, _containerElement.default);
var _default = Element;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aXJ0dWFsRE9NL2NvbnRhaW5lci9lbGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29udGFpbmVyRWxlbWVudCBmcm9tIFwiLi4vY29udGFpbmVyXCI7XG5pbXBvcnQgY29udGFpbmVyRWxlbWVudE1peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL2NvbnRhaW5lckVsZW1lbnRcIjtcblxuaW1wb3J0IHsgUkVGIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBFbGVtZW50IGV4dGVuZHMgQ29udGFpbmVyRWxlbWVudCB7XG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50LCByZWZlcmVuY2UpO1xuXG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSBjb250ZXh0LFxuICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXBwbHlQcm9wcygpO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gY29udGV4dCxcbiAgICAgICAgICBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBhcHBseVByb3BzKCkge1xuICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcyk7XG5cbiAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucHJvcHNbbmFtZV07XG5cbiAgICAgIGlmIChmYWxzZSkge1xuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNIYW5kbGVyTmFtZShuYW1lKSkge1xuICAgICAgICB0aGlzLnNldEhhbmRsZXIobmFtZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzQXR0cmlidXRlTmFtZShuYW1lKSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFJFRikge1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IHZhbHVlOyAvLy9cbiAgICAgICAgXG4gICAgICAgIGNhbGxiYWNrKHRoaXMuZG9tRWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRIYW5kbGVyKG5hbWUsIHZhbHVlKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gbmFtZS5zdWJzdHIoMikudG9Mb3dlckNhc2UoKSwgLy8vXG4gICAgICAgICAgaGFuZGxlciA9IHZhbHVlOyAgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsICBoYW5kbGVyKTtcbiAgfVxuXG5cdGlzSGFuZGxlck5hbWUobmFtZSkge1xuXHRcdHJldHVybiAvXm9uLy50ZXN0KG5hbWUpO1xuXHR9XG59XG5cbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGNvbnRhaW5lckVsZW1lbnRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50O1xuIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJtb3VudCIsInBhcmVudCIsInJlZmVyZW5jZSIsImNvbnRleHQiLCJjaGlsZFBhcmVudCIsImNoaWxkUmVmZXJlbmNlIiwiY2hpbGRDb250ZXh0IiwiY2hpbGRyZW4iLCJnZXRDaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZCIsImFwcGx5UHJvcHMiLCJ1bm1vdW50IiwibmFtZXMiLCJPYmplY3QiLCJrZXlzIiwicHJvcHMiLCJuYW1lIiwidmFsdWUiLCJpc0hhbmRsZXJOYW1lIiwic2V0SGFuZGxlciIsImlzQXR0cmlidXRlTmFtZSIsInNldEF0dHJpYnV0ZSIsIlJFRiIsImNhbGxiYWNrIiwiZG9tRWxlbWVudCIsImV2ZW50VHlwZSIsInN1YnN0ciIsInRvTG93ZXJDYXNlIiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZXN0IiwiQ29udGFpbmVyRWxlbWVudCIsImFzc2lnbiIsInByb3RvdHlwZSIsImNvbnRhaW5lckVsZW1lbnRNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW9FQTs7O2VBQUE7OztnRUFsRTZCO3VFQUNNO3lCQUVmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEIsSUFBQSxBQUFNQSx3QkEyREgsQUEzREg7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxPQUFPO2dCQUM5Qix1QkFGRUosb0JBRUlDLFNBQU4sSUFBSyxhQUFPQyxRQUFRQztnQkFFcEIsSUFBTUUsY0FBYyxJQUFJLEVBQ2xCQyxpQkFBaUIsTUFDakJDLGVBQWVILFNBQ2ZJLFdBQVcsSUFBSSxDQUFDQyxXQUFXO2dCQUVqQ0QsU0FBU0UsT0FBTyxDQUFDLFNBQUNDO29CQUNoQkEsTUFBTVYsS0FBSyxDQUFDSSxhQUFhQyxnQkFBZ0JDO2dCQUMzQztnQkFFQSxJQUFJLENBQUNLLFVBQVU7WUFDakI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUVQsT0FBTztnQkFDYixJQUFNRyxlQUFlSCxTQUNmSSxXQUFXLElBQUksQ0FBQ0MsV0FBVztnQkFFakNELFNBQVNFLE9BQU8sQ0FBQyxTQUFDQztvQkFDaEJBLE1BQU1FLE9BQU8sQ0FBQ047Z0JBQ2hCO2dCQUVBLHVCQXhCRVAsb0JBd0JJYSxXQUFOLElBQUs7WUFDUDs7O1lBRUFELEtBQUFBO21CQUFBQSxTQUFBQTs7Z0JBQ0UsSUFBTUUsUUFBUUMsT0FBT0MsSUFBSSxDQUFDLElBQUksQ0FBQ0MsS0FBSztnQkFFcENILE1BQU1KLE9BQU8sQ0FBQyxTQUFDUTtvQkFDYixJQUFNQyxRQUFRLE1BQUtGLEtBQUssQ0FBQ0MsS0FBSztvQkFFOUIsSUFBSSxPQUFPLENBRVgsT0FBTyxJQUFJLE1BQUtFLGFBQWEsQ0FBQ0YsT0FBTzt3QkFDbkMsTUFBS0csVUFBVSxDQUFDSCxNQUFNQztvQkFDeEIsT0FBTyxJQUFJLE1BQUtHLGVBQWUsQ0FBQ0osT0FBTzt3QkFDckMsTUFBS0ssWUFBWSxDQUFDTCxNQUFNQztvQkFDMUIsT0FBTyxJQUFJRCxTQUFTTSxjQUFHLEVBQUU7d0JBQ3ZCLElBQU1DLFdBQVdOLE9BQU8sR0FBRzt3QkFFM0JNLFNBQVMsTUFBS0MsVUFBVTtvQkFDMUI7Z0JBQ0Y7WUFDRjs7O1lBRUFMLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXSCxJQUFJLEVBQUVDLEtBQUs7Z0JBQ3BCLElBQU1RLFlBQVlULEtBQUtVLE1BQU0sQ0FBQyxHQUFHQyxXQUFXLElBQ3RDQyxVQUFVWCxPQUFRLEdBQUc7Z0JBRTNCLElBQUksQ0FBQ08sVUFBVSxDQUFDSyxnQkFBZ0IsQ0FBQ0osV0FBWUc7WUFDL0M7OztZQUVEVixLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0YsSUFBSTtnQkFDakIsT0FBTyxNQUFNYyxJQUFJLENBQUNkO1lBQ25COzs7V0F4REtsQjtFQUFnQmlDLGtCQUFnQjtBQTJEdENsQixPQUFPbUIsTUFBTSxDQUFDbEMsUUFBUW1DLFNBQVMsRUFBRUMseUJBQXNCO0lBRXZELFdBQWVwQyJ9