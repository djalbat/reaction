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
var ReactClassElement = function(ReactElement) {
    _inherits(ReactClassElement, _react.default);
    function ReactClassElement(reactClass, props) {
        _classCallCheck(this, ReactClassElement);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactClassElement).call(this, props));
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
exports.default = ReactClassElement;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3JlYWN0L2NsYXNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3RFbGVtZW50IGZyb20gXCIuLi8uLi9lbGVtZW50L3JlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0Q2xhc3NFbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RDbGFzcywgcHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlYWN0Q2xhc3MgPSByZWFjdENsYXNzO1xuXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gdGhpcy5nZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDbGFzcy5yZW5kZXIuY2FsbCh0aGlzLCB1cGRhdGUpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MuZ2V0SW5pdGlhbFN0YXRlLmNhbGwodGhpcyk7XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MuZ2V0Q2hpbGRDb250ZXh0LmNhbGwodGhpcywgY29udGV4dCk7XG4gIH1cbiAgXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDbGFzcy5jb21wb25lbnREaWRNb3VudC5jYWxsKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENsYXNzLmNvbXBvbmVudFdpbGxVbm1vdW50LmNhbGwodGhpcyk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7OztJQUVBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVBLGlCQUFBLFlBQUEsWUFBQTtjQUFBLGlCQUFBLEVBRkEsTUFBQTthQUVBLGlCQUFBLENBQ0EsVUFBQSxFQUFBLEtBQUE7OEJBREEsaUJBQUE7O2lFQUFBLGlCQUFBLGFBRUEsS0FBQTtjQUVBLFVBQUEsR0FBQSxVQUFBO1lBRUEsWUFBQSxTQUFBLGVBQUE7Y0FFQSxlQUFBLENBQUEsWUFBQTs7O2lCQVJBLGlCQUFBOztBQVdBLGVBQUEsR0FBQSxNQUFBOzRCQUFBLE1BQUEsQ0FBQSxNQUFBOzRCQUNBLFVBQUEsQ0FBQSxNQUFBLENBQUEsSUFBQSxPQUFBLE1BQUE7Ozs7QUFHQSxlQUFBLEdBQUEsZUFBQTs0QkFBQSxlQUFBOzRCQUNBLFVBQUEsQ0FBQSxlQUFBLENBQUEsSUFBQTs7OztBQUdBLGVBQUEsR0FBQSxlQUFBOzRCQUFBLGVBQUEsQ0FBQSxPQUFBOzRCQUNBLFVBQUEsQ0FBQSxlQUFBLENBQUEsSUFBQSxPQUFBLE9BQUE7Ozs7QUFHQSxlQUFBLEdBQUEsaUJBQUE7NEJBQUEsaUJBQUE7cUJBQ0EsVUFBQSxDQUFBLGlCQUFBLENBQUEsSUFBQTs7OztBQUdBLGVBQUEsR0FBQSxvQkFBQTs0QkFBQSxvQkFBQTtxQkFDQSxVQUFBLENBQUEsb0JBQUEsQ0FBQSxJQUFBOzs7O1dBNUJBLGlCQUFBO0VBRkEsTUFBQTtrQkFFQSxpQkFBQSJ9