"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FilterLink;
    }
});
var _index = require("../../../index");
var _constants = require("../constants");
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
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
var Component = _index.React.Component;
var FilterLink = /*#__PURE__*/ function(Component) {
    _inherits(FilterLink, Component);
    var _super = _createSuper(FilterLink);
    function FilterLink() {
        _classCallCheck(this, FilterLink);
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "updateHandler", function() {
            _this.forceUpdate();
        });
        return _this;
    }
    _createClass(FilterLink, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var store = this.context.store;
                this.unsubscribe = store.subscribe(this.updateHandler);
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.unsubscribe();
            }
        },
        {
            key: "render",
            value: function render() {
                var store = this.context.store, state = store.getState(), visibilityFilter = state.visibilityFilter, _props = this.props, children = _props.children, filter = _props.filter, active = filter === visibilityFilter;
                if (active) {
                    return /*#__PURE__*/ _index.React.createElement("span", null, children);
                }
                return /*#__PURE__*/ _index.React.createElement("a", {
                    href: "#",
                    className: "filter",
                    onClick: function(event) {
                        event.preventDefault();
                        var type = _constants.SET_VISIBILITY_FILTER, visibilityFilter = filter, action = {
                            type: type,
                            visibilityFilter: visibilityFilter
                        };
                        store.dispatch(action);
                    }
                }, children);
            }
        }
    ]);
    return FilterLink;
}(Component);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC9maWx0ZXJMaW5rLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IHsgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlckxpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xuICB1cGRhdGVIYW5kbGVyID0gKCkgPT4ge1xuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUodGhpcy51cGRhdGVIYW5kbGVyKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgdmlzaWJpbGl0eUZpbHRlciB9ID0gc3RhdGUsXG4gICAgICAgICAgeyBjaGlsZHJlbiwgZmlsdGVyIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGFjdGl2ZSA9IChmaWx0ZXIgPT09IHZpc2liaWxpdHlGaWx0ZXIpO1xuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgcmV0dXJuIChcblxuICAgICAgICA8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPlxuXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxhIGhyZWY9XCIjXCJcbiAgICAgICAgIGNsYXNzTmFtZT1cImZpbHRlclwiXG4gICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcblxuICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgIGNvbnN0IHR5cGUgPSBTRVRfVklTSUJJTElUWV9GSUxURVIsXG4gICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXIgPSBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuXG4gICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJGaWx0ZXJMaW5rIiwiQ29tcG9uZW50IiwiUmVhY3QiLCJ1cGRhdGVIYW5kbGVyIiwiZm9yY2VVcGRhdGUiLCJjb21wb25lbnREaWRNb3VudCIsInN0b3JlIiwiY29udGV4dCIsInVuc3Vic2NyaWJlIiwic3Vic2NyaWJlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW5kZXIiLCJzdGF0ZSIsImdldFN0YXRlIiwidmlzaWJpbGl0eUZpbHRlciIsInByb3BzIiwiY2hpbGRyZW4iLCJmaWx0ZXIiLCJhY3RpdmUiLCJzcGFuIiwiYSIsImhyZWYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInR5cGUiLCJTRVRfVklTSUJJTElUWV9GSUxURVIiLCJhY3Rpb24iLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBUVFBLFVBQVU7OztxQkFOVCxnQkFBZ0I7eUJBRUEsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBELElBQU0sQUFBRUMsU0FBUyxHQUFLQyxNQUFLLE1BQUEsQ0FBbkJELFNBQVMsQUFBVSxBQUFDO0FBRWIsSUFBQSxBQUFNRCxVQUFVLGlCQUFoQjs7O2FBQU1BLFVBQVU7Ozs7UUFDN0JHLCtDQUFBQSxlQUFhLEVBQUcsV0FBTTtZQUNwQixNQUFLQyxXQUFXLEVBQUUsQ0FBQztTQUNwQixDQUFBLENBQUE7Ozs7O1lBRURDLEdBQWlCLEVBQWpCQSxtQkFBaUI7bUJBQWpCQSxTQUFBQSxpQkFBaUIsR0FBRztnQkFDbEIsSUFBTSxBQUFFQyxLQUFLLEdBQUssSUFBSSxDQUFDQyxPQUFPLENBQXRCRCxLQUFLLEFBQWlCLEFBQUM7Z0JBRS9CLElBQUksQ0FBQ0UsV0FBVyxHQUFHRixLQUFLLENBQUNHLFNBQVMsQ0FBQyxJQUFJLENBQUNOLGFBQWEsQ0FBQyxDQUFDO2FBQ3hEOzs7WUFFRE8sR0FBb0IsRUFBcEJBLHNCQUFvQjttQkFBcEJBLFNBQUFBLG9CQUFvQixHQUFHO2dCQUNyQixJQUFJLENBQUNGLFdBQVcsRUFBRSxDQUFDO2FBQ3BCOzs7WUFFREcsR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLEdBQUc7Z0JBQ1AsSUFBTSxBQUFFTCxLQUFLLEdBQUssSUFBSSxDQUFDQyxPQUFPLENBQXRCRCxLQUFLLEFBQWlCLEVBQ3hCTSxLQUFLLEdBQUdOLEtBQUssQ0FBQ08sUUFBUSxFQUFFLEVBQ3hCLEFBQUVDLGdCQUFnQixHQUFLRixLQUFLLENBQTFCRSxnQkFBZ0IsQUFBVSxFQUNMLE1BQVUsR0FBVixJQUFJLENBQUNDLEtBQUssRUFBL0JDLFFBQVEsR0FBYSxNQUFVLENBQS9CQSxRQUFRLEVBQUVDLE1BQU0sR0FBSyxNQUFVLENBQXJCQSxNQUFNLEVBQ2xCQyxNQUFNLEdBQUlELE1BQU0sS0FBS0gsZ0JBQWdCLEFBQUMsQUFBQztnQkFFN0MsSUFBSUksTUFBTSxFQUFFO29CQUNWLHFCQUVFLDJCQUFDQyxNQUFJLFFBQUVILFFBQVEsQ0FBUSxDQUV2QjtpQkFDSDtnQkFFRCxxQkFFRSwyQkFBQ0ksR0FBQztvQkFBQ0MsSUFBSSxFQUFDLEdBQUc7b0JBQ1JDLFNBQVMsRUFBQyxRQUFRO29CQUNsQkMsT0FBTyxFQUFFLFNBQUNDLEtBQUssRUFBSzt3QkFFbEJBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFLENBQUM7d0JBRXZCLElBQU1DLElBQUksR0FBR0MsVUFBcUIsc0JBQUEsRUFDNUJiLGdCQUFnQixHQUFHRyxNQUFNLEVBQ3pCVyxNQUFNLEdBQUc7NEJBQ1BGLElBQUksRUFBSkEsSUFBSTs0QkFDSlosZ0JBQWdCLEVBQWhCQSxnQkFBZ0I7eUJBQ2pCLEFBQUM7d0JBRVJSLEtBQUssQ0FBQ3VCLFFBQVEsQ0FBQ0QsTUFBTSxDQUFDLENBQUM7cUJBRXhCO21CQUVEWixRQUFRLENBQ1AsQ0FDSjthQUNIOzs7O0NBQ0YsQ0FyRHVDZixTQUFTLENBcURoRCJ9