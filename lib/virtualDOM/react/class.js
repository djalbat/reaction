"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ReactClassElement;
    }
});
var _react = /*#__PURE__*/ _interopRequireDefault(require("../react"));
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
var ReactClassElement = /*#__PURE__*/ function(ReactElement) {
    _inherits(ReactClassElement, ReactElement);
    var _super = _createSuper(ReactClassElement);
    function ReactClassElement(reactClass, props) {
        _classCallCheck(this, ReactClassElement);
        var _this;
        _this = _super.call(this, props);
        _this.reactClass = reactClass;
        var initialState = _this.getInitialState();
        _this.setInitialState(initialState);
        return _this;
    }
    _createClass(ReactClassElement, [
        {
            key: "render",
            value: function render(update) {
                return this.reactClass.render.call(this, update);
            }
        },
        {
            key: "getInitialState",
            value: function getInitialState() {
                return this.reactClass.getInitialState.call(this);
            }
        },
        {
            key: "getChildContext",
            value: function getChildContext(context) {
                return this.reactClass.getChildContext.call(this, context);
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.reactClass.componentDidMount.call(this);
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.reactClass.componentWillUnmount.call(this);
            }
        }
    ]);
    return ReactClassElement;
}(_react.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aXJ0dWFsRE9NL3JlYWN0L2NsYXNzLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3RFbGVtZW50IGZyb20gXCIuLi9yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdENsYXNzRWxlbWVudCBleHRlbmRzIFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q2xhc3MsIHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5yZWFjdENsYXNzID0gcmVhY3RDbGFzcztcblxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MucmVuZGVyLmNhbGwodGhpcywgdXBkYXRlKTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENsYXNzLmdldEluaXRpYWxTdGF0ZS5jYWxsKHRoaXMpO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENsYXNzLmdldENoaWxkQ29udGV4dC5jYWxsKHRoaXMsIGNvbnRleHQpO1xuICB9XG4gIFxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q2xhc3MuY29tcG9uZW50RGlkTW91bnQuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDbGFzcy5jb21wb25lbnRXaWxsVW5tb3VudC5jYWxsKHRoaXMpO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJlYWN0Q2xhc3NFbGVtZW50IiwicmVhY3RDbGFzcyIsInByb3BzIiwiaW5pdGlhbFN0YXRlIiwiZ2V0SW5pdGlhbFN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwicmVuZGVyIiwidXBkYXRlIiwiY2FsbCIsImdldENoaWxkQ29udGV4dCIsImNvbnRleHQiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiUmVhY3RFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzswREFGSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVWLElBQUEsQUFBTUEsa0NBQU47Y0FBTUE7OEJBQUFBO2FBQUFBLGtCQUNQQyxVQUFVLEVBQUVDLEtBQUs7OEJBRFZGOztrQ0FFWEU7UUFFTixNQUFLRCxVQUFVLEdBQUdBO1FBRWxCLElBQU1FLGVBQWUsTUFBS0MsZUFBZTtRQUV6QyxNQUFLQyxlQUFlLENBQUNGOzs7aUJBUkpIOztZQVduQk0sS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU0sRUFBRTtnQkFDYixPQUFPLElBQUksQ0FBQ04sVUFBVSxDQUFDSyxNQUFNLENBQUNFLElBQUksQ0FBQyxJQUFJLEVBQUVEO1lBQzNDOzs7WUFFQUgsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQjtnQkFDaEIsT0FBTyxJQUFJLENBQUNILFVBQVUsQ0FBQ0csZUFBZSxDQUFDSSxJQUFJLENBQUMsSUFBSTtZQUNsRDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JDLE9BQU8sRUFBRTtnQkFDdkIsT0FBTyxJQUFJLENBQUNULFVBQVUsQ0FBQ1EsZUFBZSxDQUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFRTtZQUNwRDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0I7Z0JBQ2xCLElBQUksQ0FBQ1YsVUFBVSxDQUFDVSxpQkFBaUIsQ0FBQ0gsSUFBSSxDQUFDLElBQUk7WUFDN0M7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCO2dCQUNyQixJQUFJLENBQUNYLFVBQVUsQ0FBQ1csb0JBQW9CLENBQUNKLElBQUksQ0FBQyxJQUFJO1lBQ2hEOzs7V0E3Qm1CUjtFQUEwQmEsY0FBWSJ9