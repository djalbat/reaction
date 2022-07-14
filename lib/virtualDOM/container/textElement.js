"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TextElement;
    }
});
var _container = /*#__PURE__*/ _interopRequireDefault(require("../container"));
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
var TextElement = /*#__PURE__*/ function(ContainerElement) {
    _inherits(TextElement, ContainerElement);
    var _super = _createSuper(TextElement);
    function TextElement(text) {
        _classCallCheck(this, TextElement);
        var domElement = document.createTextNode(text), children = [], props = {
            children: children
        };
        return _super.call(this, props, domElement);
    }
    _createClass(TextElement, [
        {
            key: "mount",
            value: function mount(parent, reference, context) {
                _get(_getPrototypeOf(TextElement.prototype), "mount", this).call(this, parent, reference);
            }
        },
        {
            key: "unmount",
            value: function unmount(context) {
                _get(_getPrototypeOf(TextElement.prototype), "unmount", this).call(this);
            }
        },
        {
            key: "getText",
            value: function getText() {
                var nodeValue = this.domElement.nodeValue, text = nodeValue; ///
                return text;
            }
        },
        {
            key: "setText",
            value: function setText(text) {
                var nodeValue = text; ///
                this.domElement.nodeValue = nodeValue;
            }
        }
    ]);
    return TextElement;
}(_container.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aXJ0dWFsRE9NL2NvbnRhaW5lci90ZXh0RWxlbWVudC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnRhaW5lckVsZW1lbnQgZnJvbSBcIi4uL2NvbnRhaW5lclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0RWxlbWVudCBleHRlbmRzIENvbnRhaW5lckVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpLFxuICAgICAgICAgIGNoaWxkcmVuID0gW10sXG4gICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgIH07XG5cbiAgICBzdXBlcihwcm9wcywgZG9tRWxlbWVudCk7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgcmVmZXJlbmNlKTtcbiAgfVxuICBcbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgZ2V0VGV4dCgpIHtcbiAgICBjb25zdCBub2RlVmFsdWUgPSB0aGlzLmRvbUVsZW1lbnQubm9kZVZhbHVlLFxuICAgICAgICAgIHRleHQgPSBub2RlVmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBzZXRUZXh0KHRleHQpIHtcbiAgICBjb25zdCBub2RlVmFsdWUgPSB0ZXh0OyAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUgPSBub2RlVmFsdWU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVGV4dEVsZW1lbnQiLCJ0ZXh0IiwiZG9tRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJjaGlsZHJlbiIsInByb3BzIiwibW91bnQiLCJwYXJlbnQiLCJyZWZlcmVuY2UiLCJjb250ZXh0IiwidW5tb3VudCIsImdldFRleHQiLCJub2RlVmFsdWUiLCJzZXRUZXh0IiwiQ29udGFpbmVyRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBSVFBLFdBQVc7Ozs4REFGSCxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsSUFBQSxBQUFNQSxXQUFXLGlCQUFqQjs7O2FBQU1BLFdBQVcsQ0FDbEJDLElBQUk7O1FBQ2QsSUFBTUMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQ0gsSUFBSSxDQUFDLEVBQzFDSSxRQUFRLEdBQUcsRUFBRSxFQUNiQyxLQUFLLEdBQUc7WUFDTkQsUUFBUSxFQUFSQSxRQUFRO1NBQ1QsQUFBQztpQ0FFRkMsS0FBSyxFQUFFSixVQUFVOzs7O1lBR3pCSyxHQUFLLEVBQUxBLE9BQUs7bUJBQUxBLFNBQUFBLEtBQUssQ0FBQ0MsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLE9BQU8sRUFBRTtnQkFDaEMscUJBWmlCVixXQUFXLGFBWXRCTyxPQUFLLEVBQVgsSUFBSyxDQUFBLFlBQU9DLE1BQU0sRUFBRUMsU0FBUyxFQUFFO2FBQ2hDOzs7WUFFREUsR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxPQUFPLENBQUNELE9BQU8sRUFBRTtnQkFDZixxQkFoQmlCVixXQUFXLGFBZ0J0QlcsU0FBTyxFQUFiLElBQUssQ0FBQSxZQUFXO2FBQ2pCOzs7WUFFREMsR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxPQUFPLEdBQUc7Z0JBQ1IsSUFBTUMsU0FBUyxHQUFHLElBQUksQ0FBQ1gsVUFBVSxDQUFDVyxTQUFTLEVBQ3JDWixJQUFJLEdBQUdZLFNBQVMsQUFBQyxFQUFDLEdBQUc7Z0JBRTNCLE9BQU9aLElBQUksQ0FBQzthQUNiOzs7WUFFRGEsR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxPQUFPLENBQUNiLElBQUksRUFBRTtnQkFDWixJQUFNWSxTQUFTLEdBQUdaLElBQUksQUFBQyxFQUFDLEdBQUc7Z0JBRTNCLElBQUksQ0FBQ0MsVUFBVSxDQUFDVyxTQUFTLEdBQUdBLFNBQVMsQ0FBQzthQUN2Qzs7OztDQUNGLENBL0J3Q0UsVUFBZ0IsUUFBQSxDQStCeEQifQ==