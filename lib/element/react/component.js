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
var ReactComponentElement = /*#__PURE__*/ function(ReactElement) {
    _inherits(ReactComponentElement, ReactElement);
    function ReactComponentElement(reactComponent, props) {
        _classCallCheck(this, ReactComponentElement);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactComponentElement).call(this, props));
        _this.reactComponent = reactComponent;
        var initialState = _this.getInitialState();
        _this.setInitialState(initialState);
        return _this;
    }
    _createClass(ReactComponentElement, [
        {
            key: "render",
            value: function render(update) {
                return this.reactComponent.render.call(this, update);
            }
        },
        {
            key: "getInitialState",
            value: function getInitialState() {
                return this.reactComponent.getInitialState.call(this);
            }
        },
        {
            key: "getChildContext",
            value: function getChildContext(context) {
                return this.reactComponent.getChildContext.call(this, context);
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.reactComponent.componentDidMount.call(this);
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.reactComponent.componentWillUnmount.call(this);
            }
        }
    ]);
    return ReactComponentElement;
}(_react.default);
exports.default = ReactComponentElement;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3JlYWN0L2NvbXBvbmVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0RWxlbWVudCBmcm9tIFwiLi4vLi4vZWxlbWVudC9yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdENvbXBvbmVudEVsZW1lbnQgZXh0ZW5kcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdENvbXBvbmVudCwgcHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlYWN0Q29tcG9uZW50ID0gcmVhY3RDb21wb25lbnQ7XG5cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB0aGlzLmdldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoaW5pdGlhbFN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENvbXBvbmVudC5yZW5kZXIuY2FsbCh0aGlzLCB1cGRhdGUpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q29tcG9uZW50LmdldEluaXRpYWxTdGF0ZS5jYWxsKHRoaXMpO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENvbXBvbmVudC5nZXRDaGlsZENvbnRleHQuY2FsbCh0aGlzLCBjb250ZXh0KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDb21wb25lbnQuY29tcG9uZW50RGlkTW91bnQuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDb21wb25lbnQuY29tcG9uZW50V2lsbFVubW91bnQuY2FsbCh0aGlzKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRWEsTUFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV6QixxQkFBcUI7Y0FBckIscUJBQXFCO2FBQXJCLHFCQUFxQixDQUM1QixjQUFjLEVBQUUsS0FBSzs4QkFEZCxxQkFBcUI7O2lFQUFyQixxQkFBcUIsYUFFaEMsS0FBSztjQUVOLGNBQWMsR0FBRyxjQUFjO1lBRTlCLFlBQVksU0FBUSxlQUFlO2NBRXBDLGVBQWUsQ0FBQyxZQUFZOzs7aUJBUmhCLHFCQUFxQjs7WUFXeEMsR0FBTSxHQUFOLE1BQU07NEJBQU4sTUFBTSxDQUFDLE1BQU07NEJBQ0MsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sTUFBTTs7OztZQUdyRCxHQUFlLEdBQWYsZUFBZTs0QkFBZixlQUFlOzRCQUNELGNBQWMsQ0FBQyxlQUFlLENBQUMsSUFBSTs7OztZQUdqRCxHQUFlLEdBQWYsZUFBZTs0QkFBZixlQUFlLENBQUMsT0FBTzs0QkFDVCxjQUFjLENBQUMsZUFBZSxDQUFDLElBQUksT0FBTyxPQUFPOzs7O1lBRy9ELEdBQWlCLEdBQWpCLGlCQUFpQjs0QkFBakIsaUJBQWlCO3FCQUNWLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJOzs7O1lBRzVDLEdBQW9CLEdBQXBCLG9CQUFvQjs0QkFBcEIsb0JBQW9CO3FCQUNiLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJOzs7O1dBNUI1QixxQkFBcUI7RUFGakIsTUFBcUI7a0JBRXpCLHFCQUFxQiJ9