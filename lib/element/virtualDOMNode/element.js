"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _virtualDOMNode = _interopRequireDefault(require("../virtualDOMNode"));
var _virtualDOMElement = _interopRequireDefault(require("../../mixins/virtualDOMElement"));
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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
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
var VirtualDOMElement = /*#__PURE__*/ function(VirtualDOMNode) {
    _inherits(VirtualDOMElement, VirtualDOMNode);
    var _super = _createSuper(VirtualDOMElement);
    function VirtualDOMElement() {
        _classCallCheck(this, VirtualDOMElement);
        return _super.apply(this, arguments);
    }
    _createClass(VirtualDOMElement, [
        {
            key: "mount",
            value: function mount(parent, reference, context) {
                _get(_getPrototypeOf(VirtualDOMElement.prototype), "mount", this).call(this, parent, reference);
                var childParent = this, childReference = null, childContext = context, children = this.getChildren();
                children.forEach(function(child) {
                    return child.mount(childParent, childReference, childContext);
                });
                this.applyProps();
            }
        },
        {
            key: "unmount",
            value: function unmount(context) {
                var childContext = context, children = this.getChildren();
                children.forEach(function(child) {
                    return child.unmount(childContext);
                });
                _get(_getPrototypeOf(VirtualDOMElement.prototype), "unmount", this).call(this);
            }
        },
        {
            key: "applyProps",
            value: function applyProps() {
                var _this = this;
                var names = Object.keys(this.props);
                names.forEach(function(name) {
                    var value = _this.props[name];
                    if (false) {
                    } else if (_this.isHandlerName(name)) {
                        _this.setHandler(name, value);
                    } else if (_this.isAttributeName(name)) {
                        _this.setAttribute(name, value);
                    } else if (name === "ref") {
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
                return name.match(/^on/);
            }
        }
    ]);
    return VirtualDOMElement;
}(_virtualDOMNode.default);
Object.assign(VirtualDOMElement.prototype, _virtualDOMElement.default);
var _default = VirtualDOMElement;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL2VsZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWaXJ0dWFsRE9NTm9kZSBmcm9tIFwiLi4vdmlydHVhbERPTU5vZGVcIjtcblxuaW1wb3J0IHZpcnR1YWxET01FbGVtZW50TWl4aW5zIGZyb20gXCIuLi8uLi9taXhpbnMvdmlydHVhbERPTUVsZW1lbnRcIjtcblxuY2xhc3MgVmlydHVhbERPTUVsZW1lbnQgZXh0ZW5kcyBWaXJ0dWFsRE9NTm9kZSB7XG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50LCByZWZlcmVuY2UpO1xuXG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSBjb250ZXh0LFxuICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KSk7XG5cbiAgICB0aGlzLmFwcGx5UHJvcHMoKTtcbiAgfVxuXG4gIHVubW91bnQoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IGNvbnRleHQsXG4gICAgICAgICAgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpKTtcblxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIGFwcGx5UHJvcHMoKSB7XG4gICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzKTtcblxuICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wcm9wc1tuYW1lXTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0hhbmRsZXJOYW1lKG5hbWUpKSB7XG4gICAgICAgIHRoaXMuc2V0SGFuZGxlcihuYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNBdHRyaWJ1dGVOYW1lKG5hbWUpKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJyZWZcIikge1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IHZhbHVlOyAvLy9cbiAgICAgICAgXG4gICAgICAgIGNhbGxiYWNrKHRoaXMuZG9tRWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRIYW5kbGVyKG5hbWUsIHZhbHVlKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gbmFtZS5zdWJzdHIoMikudG9Mb3dlckNhc2UoKSwgLy8vXG4gICAgICAgICAgaGFuZGxlciA9IHZhbHVlOyAgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsICBoYW5kbGVyKTtcbiAgfVxuXG5cdGlzSGFuZGxlck5hbWUobmFtZSkge1xuXHRcdHJldHVybiBuYW1lLm1hdGNoKC9eb24vKTtcblx0fVxufVxuXG5PYmplY3QuYXNzaWduKFZpcnR1YWxET01FbGVtZW50LnByb3RvdHlwZSwgdmlydHVhbERPTUVsZW1lbnRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBWaXJ0dWFsRE9NRWxlbWVudDtcbiJdLCJuYW1lcyI6WyJWaXJ0dWFsRE9NRWxlbWVudCIsIm1vdW50IiwicGFyZW50IiwicmVmZXJlbmNlIiwiY29udGV4dCIsImNoaWxkUGFyZW50IiwiY2hpbGRSZWZlcmVuY2UiLCJjaGlsZENvbnRleHQiLCJjaGlsZHJlbiIsImdldENoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwiYXBwbHlQcm9wcyIsInVubW91bnQiLCJuYW1lcyIsIk9iamVjdCIsImtleXMiLCJwcm9wcyIsIm5hbWUiLCJ2YWx1ZSIsImlzSGFuZGxlck5hbWUiLCJzZXRIYW5kbGVyIiwiaXNBdHRyaWJ1dGVOYW1lIiwic2V0QXR0cmlidXRlIiwiY2FsbGJhY2siLCJkb21FbGVtZW50IiwiZXZlbnRUeXBlIiwic3Vic3RyIiwidG9Mb3dlckNhc2UiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1hdGNoIiwiYXNzaWduIiwicHJvdG90eXBlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVlLEdBQW1CLENBQW5CLGVBQW1CO0FBRVYsR0FBZ0MsQ0FBaEMsa0JBQWdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFOURBLGlCQUFpQixpQkFBdkIsUUFBUTtjQUFGQSxpQkFBaUI7OEJBQWpCQSxpQkFBaUI7YUFBakJBLGlCQUFpQjs4QkFBakJBLGlCQUFpQjs7O2lCQUFqQkEsaUJBQWlCOztZQUNyQkMsR0FBSyxFQUFMQSxDQUFLO21CQUFMQSxRQUFRLENBQVJBLEtBQUssQ0FBQ0MsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLE9BQU8sRUFBRSxDQUFDO3FDQUQvQkosaUJBQWlCLGFBRWJDLENBQUssUUFBWCxJQUFLLGFBQU9DLE1BQU0sRUFBRUMsU0FBUztnQkFFN0IsR0FBSyxDQUFDRSxXQUFXLEdBQUcsSUFBSSxFQUNsQkMsY0FBYyxHQUFHLElBQUksRUFDckJDLFlBQVksR0FBR0gsT0FBTyxFQUN0QkksUUFBUSxHQUFHLElBQUksQ0FBQ0MsV0FBVztnQkFFakNELFFBQVEsQ0FBQ0UsT0FBTyxDQUFDLFFBQVEsQ0FBUEMsS0FBSztvQkFBS0EsTUFBTVYsQ0FBTlUsS0FBSyxDQUFDVixLQUFLLENBQUNJLFdBQVcsRUFBRUMsY0FBYyxFQUFFQyxZQUFZOztnQkFFakYsSUFBSSxDQUFDSyxVQUFVO1lBQ2pCLENBQUM7OztZQUVEQyxHQUFPLEVBQVBBLENBQU87bUJBQVBBLFFBQVFULENBQVJTLE9BQU8sQ0FBQ1QsT0FBTyxFQUFFLENBQUM7Z0JBQ2hCLEdBQUssQ0FBQ0csWUFBWSxHQUFHSCxPQUFPLEVBQ3RCSSxRQUFRLEdBQUcsSUFBSSxDQUFDQyxXQUFXO2dCQUVqQ0QsUUFBUSxDQUFDRSxPQUFPLENBQUMsUUFBUSxDQUFQQyxLQUFLO29CQUFLQSxNQUFNRSxDQUFORixLQUFLLENBQUNFLE9BQU8sQ0FBQ04sWUFBWTs7cUNBbEJwRFAsaUJBQWlCLGFBb0JiYSxDQUFPLFVBQWIsSUFBSztZQUNQLENBQUM7OztZQUVERCxHQUFVLEVBQVZBLENBQVU7bUJBQVZBLFFBQVEsQ0FBUkEsVUFBVSxHQUFHLENBQUM7O2dCQUNaLEdBQUssQ0FBQ0UsS0FBSyxHQUFHQyxNQUFNLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUNDLEtBQUs7Z0JBRXBDSCxLQUFLLENBQUNKLE9BQU8sQ0FBQyxRQUFRLENBQVBRLElBQUksRUFBSyxDQUFDO29CQUN2QixHQUFLLENBQUNDLEtBQUssU0FBUUYsS0FBSyxDQUFDQyxJQUFJO29CQUU3QixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUM7b0JBRVosQ0FBQyxNQUFNLEVBQUUsUUFBT0UsYUFBYSxDQUFDRixJQUFJLEdBQUcsQ0FBQzs4QkFDL0JHLFVBQVUsQ0FBQ0gsSUFBSSxFQUFFQyxLQUFLO29CQUM3QixDQUFDLE1BQU0sRUFBRSxRQUFPRyxlQUFlLENBQUNKLElBQUksR0FBRyxDQUFDOzhCQUNqQ0ssWUFBWSxDQUFDTCxJQUFJLEVBQUVDLEtBQUs7b0JBQy9CLENBQUMsTUFBTSxFQUFFLEVBQUVELElBQUksS0FBSyxDQUFLLE1BQUUsQ0FBQzt3QkFDMUIsR0FBSyxDQUFDTSxRQUFRLEdBQUdMLEtBQUssQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7d0JBRTNCSyxRQUFRLE9BQU1DLFVBQVU7b0JBQzFCLENBQUM7Z0JBQ0gsQ0FBQztZQUNILENBQUM7OztZQUVESixHQUFVLEVBQVZBLENBQVU7bUJBQVZBLFFBQVEsQ0FBUkEsVUFBVSxDQUFDSCxJQUFJLEVBQUVDLEtBQUssRUFBRSxDQUFDO2dCQUN2QixHQUFLLENBQUNPLFNBQVMsR0FBR1IsSUFBSSxDQUFDUyxNQUFNLENBQUMsQ0FBQyxFQUFFQyxXQUFXLElBQ3RDQyxPQUFPLEdBQUdWLEtBQUssQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRTNCLElBQUksQ0FBQ00sVUFBVSxDQUFDSyxnQkFBZ0IsQ0FBQ0osU0FBUyxFQUFHRyxPQUFPO1lBQ3RELENBQUM7OztZQUVGVCxHQUFhLEVBQWJBLENBQWE7bUJBQWJBLFFBQVEsQ0FBUkEsYUFBYSxDQUFDRixJQUFJLEVBQUUsQ0FBQztnQkFDcEIsTUFBTSxDQUFDQSxJQUFJLENBQUNhLEtBQUs7WUFDbEIsQ0FBQzs7O1dBcERJL0IsaUJBQWlCO0VBSkksZUFBbUI7QUEyRDlDZSxNQUFNLENBQUNpQixNQUFNLENBQUNoQyxpQkFBaUIsQ0FBQ2lDLFNBQVMsRUF6REwsa0JBQWdDO2VBMkRyRGpDLGlCQUFpQiJ9