"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _virtualDOMNode = _interopRequireDefault(require("../virtualDOMNode"));
var _virtualDOMElement = _interopRequireDefault(require("../../mixins/virtualDOMElement"));
var _constants = require("../../constants");
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
    return VirtualDOMElement;
}(_virtualDOMNode.default);
Object.assign(VirtualDOMElement.prototype, _virtualDOMElement.default);
var _default = VirtualDOMElement;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL2VsZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWaXJ0dWFsRE9NTm9kZSBmcm9tIFwiLi4vdmlydHVhbERPTU5vZGVcIjtcblxuaW1wb3J0IHZpcnR1YWxET01FbGVtZW50TWl4aW5zIGZyb20gXCIuLi8uLi9taXhpbnMvdmlydHVhbERPTUVsZW1lbnRcIjtcblxuaW1wb3J0IHsgUkVGIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBWaXJ0dWFsRE9NRWxlbWVudCBleHRlbmRzIFZpcnR1YWxET01Ob2RlIHtcbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICBzdXBlci5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSk7XG5cbiAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IGNvbnRleHQsXG4gICAgICAgICAgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpKTtcblxuICAgIHRoaXMuYXBwbHlQcm9wcygpO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gY29udGV4dCxcbiAgICAgICAgICBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCkpO1xuXG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgYXBwbHlQcm9wcygpIHtcbiAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMpO1xuXG4gICAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnByb3BzW25hbWVdO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcblxuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzSGFuZGxlck5hbWUobmFtZSkpIHtcbiAgICAgICAgdGhpcy5zZXRIYW5kbGVyKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0F0dHJpYnV0ZU5hbWUobmFtZSkpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBSRUYpIHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSB2YWx1ZTsgLy8vXG4gICAgICAgIFxuICAgICAgICBjYWxsYmFjayh0aGlzLmRvbUVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0SGFuZGxlcihuYW1lLCB2YWx1ZSkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IG5hbWUuc3Vic3RyKDIpLnRvTG93ZXJDYXNlKCksIC8vL1xuICAgICAgICAgIGhhbmRsZXIgPSB2YWx1ZTsgIC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCAgaGFuZGxlcik7XG4gIH1cblxuXHRpc0hhbmRsZXJOYW1lKG5hbWUpIHtcblx0XHRyZXR1cm4gL15vbi8udGVzdChuYW1lKTtcblx0fVxufVxuXG5PYmplY3QuYXNzaWduKFZpcnR1YWxET01FbGVtZW50LnByb3RvdHlwZSwgdmlydHVhbERPTUVsZW1lbnRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBWaXJ0dWFsRE9NRWxlbWVudDtcbiJdLCJuYW1lcyI6WyJWaXJ0dWFsRE9NRWxlbWVudCIsIm1vdW50IiwicGFyZW50IiwicmVmZXJlbmNlIiwiY29udGV4dCIsImNoaWxkUGFyZW50IiwiY2hpbGRSZWZlcmVuY2UiLCJjaGlsZENvbnRleHQiLCJjaGlsZHJlbiIsImdldENoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwiYXBwbHlQcm9wcyIsInVubW91bnQiLCJuYW1lcyIsIk9iamVjdCIsImtleXMiLCJwcm9wcyIsIm5hbWUiLCJ2YWx1ZSIsImlzSGFuZGxlck5hbWUiLCJzZXRIYW5kbGVyIiwiaXNBdHRyaWJ1dGVOYW1lIiwic2V0QXR0cmlidXRlIiwiY2FsbGJhY2siLCJkb21FbGVtZW50IiwiZXZlbnRUeXBlIiwic3Vic3RyIiwidG9Mb3dlckNhc2UiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRlc3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRWUsR0FBbUIsQ0FBbkIsZUFBbUI7QUFFVixHQUFnQyxDQUFoQyxrQkFBZ0M7QUFFaEQsR0FBaUIsQ0FBakIsVUFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUvQkEsaUJBQWlCLGlCQUF2QixRQUFRO2NBQUZBLGlCQUFpQjs4QkFBakJBLGlCQUFpQjthQUFqQkEsaUJBQWlCOzhCQUFqQkEsaUJBQWlCOzs7aUJBQWpCQSxpQkFBaUI7O1lBQ3JCQyxHQUFLLEVBQUxBLENBQUs7bUJBQUxBLFFBQVEsQ0FBUkEsS0FBSyxDQUFDQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsT0FBTyxFQUFFLENBQUM7cUNBRC9CSixpQkFBaUIsYUFFYkMsQ0FBSyxRQUFYLElBQUssYUFBT0MsTUFBTSxFQUFFQyxTQUFTO2dCQUU3QixHQUFLLENBQUNFLFdBQVcsR0FBRyxJQUFJLEVBQ2xCQyxjQUFjLEdBQUcsSUFBSSxFQUNyQkMsWUFBWSxHQUFHSCxPQUFPLEVBQ3RCSSxRQUFRLEdBQUcsSUFBSSxDQUFDQyxXQUFXO2dCQUVqQ0QsUUFBUSxD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