"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("../react"));
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
var ReactFunctionElement = /*#__PURE__*/ function(ReactElement) {
    _inherits(ReactFunctionElement, ReactElement);
    var _super = _createSuper(ReactFunctionElement);
    function ReactFunctionElement(reactFunction, props) {
        _classCallCheck(this, ReactFunctionElement);
        var _this;
        _this = _super.call(this, props);
        _this.reactFunction = reactFunction;
        return _this;
    }
    _createClass(ReactFunctionElement, [
        {
            key: "render",
            value: function render(update) {
                return this.reactFunction(this.props, this.context, this);
            }
        },
        {
            key: "getInitialState",
            value: function getInitialState() {
            ///
            }
        },
        {
            key: "getChildContext",
            value: function getChildContext(context) {
                return context;
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
            ///
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
            ///
            }
        }
    ]);
    return ReactFunctionElement;
}(_react.default);
exports.default = ReactFunctionElement;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aXJ0dWFsRE9NL3JlYWN0L2Z1bmN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3RFbGVtZW50IGZyb20gXCIuLi9yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdEZ1bmN0aW9uRWxlbWVudCBleHRlbmRzIFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0RnVuY3Rpb24sIHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5yZWFjdEZ1bmN0aW9uID0gcmVhY3RGdW5jdGlvbjtcbiAgfVxuIFxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RGdW5jdGlvbih0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQsIHRoaXMpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIC8vL1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vL1xuICB9XG4gXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVhY3RGdW5jdGlvbkVsZW1lbnQiLCJyZWFjdEZ1bmN0aW9uIiwicHJvcHMiLCJyZW5kZXIiLCJ1cGRhdGUiLCJjb250ZXh0IiwiZ2V0SW5pdGlhbFN0YXRlIiwiZ2V0Q2hpbGRDb250ZXh0IiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnRXaWxsVW5tb3VudCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFYSxHQUFVLENBQVYsTUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVkQSxvQkFBb0IsaUJBQTFCLFFBQVE7OzthQUFGQSxvQkFBb0IsQ0FDM0JDLGFBQWEsRUFBRUMsS0FBSzs7O2tDQUN4QkEsS0FBSztjQUVORCxhQUFhLEdBQUdBLGFBQWE7Ozs7O1lBR3BDRSxHQUFNLEVBQU5BLENBQU07bUJBQU5BLFFBQVEsQ0FBUkEsTUFBTSxDQUFDQyxNQUFNLEVBQUUsQ0FBQztnQkFDZCxNQUFNLENBQUMsSUFBSSxDQUFDSCxhQUFhLENBQUMsSUFBSSxDQUFDQyxLQUFLLEVBQUUsSUFBSSxDQUFDRyxPQUFPLEVBQUUsSUFBSTtZQUMxRCxDQUFDOzs7WUFFREMsR0FBZSxFQUFmQSxDQUFlO21CQUFmQSxRQUFRLENBQVJBLGVBQWUsR0FBRyxDQUFDO1lBQ2pCLEVBQUcsQUFBSCxDQUFHO1lBQ0wsQ0FBQzs7O1lBRURDLEdBQWUsRUFBZkEsQ0FBZTttQkFBZkEsUUFBUSxDQUFSQSxlQUFlLENBQUNGLE9BQU8sRUFBRSxDQUFDO2dCQUN4QixNQUFNLENBQUNBLE9BQU87WUFDaEIsQ0FBQzs7O1lBRURHLEdBQWlCLEVBQWpCQSxDQUFpQjttQkFBakJBLFFBQVEsQ0FBUkEsaUJBQWlCLEdBQUcsQ0FBQztZQUNuQixFQUFHLEFBQUgsQ0FBRztZQUNMLENBQUM7OztZQUVEQyxHQUFvQixFQUFwQkEsQ0FBb0I7bUJBQXBCQSxRQUFRLENBQVJBLG9CQUFvQixHQUFHLENBQUM7WUFDdEIsRUFBRyxBQUFILENBQUc7WUFDTCxDQUFDOzs7O0VBM0JzQixNQUFVO2tCQUVkVCxvQkFBb0IifQ==