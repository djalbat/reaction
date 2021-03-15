"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("../../element/react"));
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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var ReactFunctionElement = function(ReactElement) {
    _inherits(ReactFunctionElement, _react.default);
    function ReactFunctionElement(reactFunction, props) {
        _classCallCheck(this, ReactFunctionElement);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactFunctionElement).call(this, props));
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
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
            }
        }
    ]);
    return ReactFunctionElement;
}(_react.default);
exports.default = ReactFunctionElement;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3JlYWN0L2Z1bmN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3RFbGVtZW50IGZyb20gXCIuLi8uLi9lbGVtZW50L3JlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0RnVuY3Rpb25FbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RGdW5jdGlvbiwgcHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlYWN0RnVuY3Rpb24gPSByZWFjdEZ1bmN0aW9uO1xuXG5cblxuXG4gIH1cbiBcbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0RnVuY3Rpb24odGhpcy5wcm9wcywgdGhpcy5jb250ZXh0LCB0aGlzKTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuIFxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7O0lBRUEsTUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRUEsb0JBQUEsWUFBQSxZQUFBO2NBQUEsb0JBQUEsRUFGQSxNQUFBO2FBRUEsb0JBQUEsQ0FDQSxhQUFBLEVBQUEsS0FBQTs4QkFEQSxvQkFBQTs7aUVBQUEsb0JBQUEsYUFFQSxLQUFBO2NBRUEsYUFBQSxHQUFBLGFBQUE7OztpQkFKQSxvQkFBQTs7QUFXQSxlQUFBLEdBQUEsTUFBQTs0QkFBQSxNQUFBLENBQUEsTUFBQTs0QkFDQSxhQUFBLE1BQUEsS0FBQSxPQUFBLE9BQUE7Ozs7QUFHQSxlQUFBLEdBQUEsZUFBQTs0QkFBQSxlQUFBOzs7O0FBSUEsZUFBQSxHQUFBLGVBQUE7NEJBQUEsZUFBQSxDQUFBLE9BQUE7dUJBQ0EsT0FBQTs7OztBQUdBLGVBQUEsR0FBQSxpQkFBQTs0QkFBQSxpQkFBQTs7OztBQUlBLGVBQUEsR0FBQSxvQkFBQTs0QkFBQSxvQkFBQTs7OztXQTNCQSxvQkFBQTtFQUZBLE1BQUE7a0JBRUEsb0JBQUEifQ==