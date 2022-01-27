"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("./virtualDOM/react"));
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
var ReactComponent = /*#__PURE__*/ function(ReactElement) {
    _inherits(ReactComponent, ReactElement);
    var _super = _createSuper(ReactComponent);
    function ReactComponent(props) {
        _classCallCheck(this, ReactComponent);
        var _this;
        _this = _super.call(this, props);
        // this.reactComponent = reactComponent;
        var initialState = _this.getInitialState();
        _this.setInitialState(initialState);
        return _this;
    }
    _createClass(ReactComponent, [
        {
            // render(update) {
            //   return this.reactComponent.render.call(this, update);
            // }
            // getInitialState() {
            //   return this.reactComponent.getInitialState.call(this);
            // }
            // getChildContext(context) {
            //   return this.reactComponent.getChildContext.call(this, context);
            // }
            // componentDidMount() {
            //   this.reactComponent.componentDidMount.call(this);
            // }
            // componentWillUnmount() {
            //   this.reactComponent.componentWillUnmount.call(this);
            // }
            key: "getInitialState",
            value: function getInitialState() {
                return {};
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
            value: function componentDidMount() {}
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {}
        }
    ]);
    return ReactComponent;
}(_react.default);
exports.default = ReactComponent;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdENvbXBvbmVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0RWxlbWVudCBmcm9tIFwiLi92aXJ0dWFsRE9NL3JlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0Q29tcG9uZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAvLyB0aGlzLnJlYWN0Q29tcG9uZW50ID0gcmVhY3RDb21wb25lbnQ7XG5cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB0aGlzLmdldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoaW5pdGlhbFN0YXRlKTtcbiAgfVxuXG4gIC8vIHJlbmRlcih1cGRhdGUpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5yZWFjdENvbXBvbmVudC5yZW5kZXIuY2FsbCh0aGlzLCB1cGRhdGUpO1xuICAvLyB9XG5cbiAgLy8gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAvLyAgIHJldHVybiB0aGlzLnJlYWN0Q29tcG9uZW50LmdldEluaXRpYWxTdGF0ZS5jYWxsKHRoaXMpO1xuICAvLyB9XG5cbiAgLy8gZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5yZWFjdENvbXBvbmVudC5nZXRDaGlsZENvbnRleHQuY2FsbCh0aGlzLCBjb250ZXh0KTtcbiAgLy8gfVxuXG4gIC8vIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAvLyAgIHRoaXMucmVhY3RDb21wb25lbnQuY29tcG9uZW50RGlkTW91bnQuY2FsbCh0aGlzKTtcbiAgLy8gfVxuXG4gIC8vIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAvLyAgIHRoaXMucmVhY3RDb21wb25lbnQuY29tcG9uZW50V2lsbFVubW91bnQuY2FsbCh0aGlzKTtcbiAgLy8gfVxuXG5cblxuXG5cblxuXG5cblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIFxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICBcbiAgfVxuIFxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblxuICB9XG5cblxuXG5cblxuXG59XG4iXSwibmFtZXMiOlsiUmVhY3RDb21wb25lbnQiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsImdldEluaXRpYWxTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsImdldENoaWxkQ29udGV4dCIsImNvbnRleHQiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVhLEdBQW9CLENBQXBCLE1BQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXhCQSxjQUFjLGlCQUFwQixRQUFROzs7YUFBRkEsY0FBYyxDQUNyQkMsS0FBSzs7O2tDQUNUQSxLQUFLO1FBRVgsRUFBd0MsQUFBeEMsc0NBQXdDO1FBRXhDLEdBQUssQ0FBQ0MsWUFBWSxTQUFRQyxlQUFlO2NBRXBDQyxlQUFlLENBQUNGLFlBQVk7Ozs7O1lBR25DLEVBQW1CLEFBQW5CLGlCQUFtQjtZQUNuQixFQUEwRCxBQUExRCx3REFBMEQ7WUFDMUQsRUFBSSxBQUFKLEVBQUk7WUFFSixFQUFzQixBQUF0QixvQkFBc0I7WUFDdEIsRUFBMkQsQUFBM0QseURBQTJEO1lBQzNELEVBQUksQUFBSixFQUFJO1lBRUosRUFBNkIsQUFBN0IsMkJBQTZCO1lBQzdCLEVBQW9FLEFBQXBFLGtFQUFvRTtZQUNwRSxFQUFJLEFBQUosRUFBSTtZQUVKLEVBQXdCLEFBQXhCLHNCQUF3QjtZQUN4QixFQUFzRCxBQUF0RCxvREFBc0Q7WUFDdEQsRUFBSSxBQUFKLEVBQUk7WUFFSixFQUEyQixBQUEzQix5QkFBMkI7WUFDM0IsRUFBeUQsQUFBekQsdURBQXlEO1lBQ3pELEVBQUksQUFBSixFQUFJO1lBVUpDLEdBQWUsRUFBZkEsQ0FBZTttQkFBZkEsUUFBUSxDQUFSQSxlQUFlLEdBQUcsQ0FBQztnQkFDakIsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNYLENBQUM7OztZQUVERSxHQUFlLEVBQWZBLENBQWU7bUJBQWZBLFFBQVEsQ0FBUkEsZUFBZSxDQUFDQyxPQUFPLEVBQUUsQ0FBQztnQkFDeEIsTUFBTSxDQUFDQSxPQUFPO1lBQ2hCLENBQUM7OztZQUVEQyxHQUFpQixFQUFqQkEsQ0FBaUI7bUJBQWpCQSxRQUFRLENBQVJBLGlCQUFpQixHQUFHLENBQUMsQUFFckIsQ0FBQzs7O1lBRURDLEdBQW9CLEVBQXBCQSxDQUFvQjttQkFBcEJBLFFBQVEsQ0FBUkEsb0JBQW9CLEdBQUcsQ0FBQyxBQUV4QixDQUFDOzs7O0VBdkRzQixNQUFvQjtrQkFFeEJSLGNBQWMifQ==