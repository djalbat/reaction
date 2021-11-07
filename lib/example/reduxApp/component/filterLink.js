"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var Component1 = _index.React.Component;
var FilterLink = /*#__PURE__*/ function(Component) {
    _inherits(FilterLink, Component);
    function FilterLink() {
        _classCallCheck(this, FilterLink);
        return _possibleConstructorReturn(this, _getPrototypeOf(FilterLink).apply(this, arguments));
    }
    _createClass(FilterLink, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this = this;
                var store = this.context.store;
                this.unsubscribe = store.subscribe(function() {
                    return _this.forceUpdate();
                });
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
                var store = this.context.store, state = store.getState(), visibilityFilter1 = state.visibilityFilter, _props = this.props, children = _props.children, filter = _props.filter, active = filter === visibilityFilter1;
                if (active) {
                    return(/*#__PURE__*/ _index.React.createElement("span", null, children));
                }
                return(/*#__PURE__*/ _index.React.createElement("a", {
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
                }, children));
            }
        }
    ]);
    return FilterLink;
}(Component1);
exports.default = FilterLink;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC9maWx0ZXJMaW5rLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IHsgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlckxpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHRoaXMuZm9yY2VVcGRhdGUoKSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICAgIHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IHZpc2liaWxpdHlGaWx0ZXIgfSA9IHN0YXRlLFxuICAgICAgICAgIHsgY2hpbGRyZW4sIGZpbHRlciB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBhY3RpdmUgPSAoZmlsdGVyID09PSB2aXNpYmlsaXR5RmlsdGVyKTtcblxuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIHJldHVybiAoXG5cbiAgICAgICAgPHNwYW4+e2NoaWxkcmVufTwvc3Bhbj5cblxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8YSBocmVmPVwiI1wiXG4gICAgICAgICBjbGFzc05hbWU9XCJmaWx0ZXJcIlxuICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICBjb25zdCB0eXBlID0gU0VUX1ZJU0lCSUxJVFlfRklMVEVSLFxuICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5RmlsdGVyID0gZmlsdGVyLFxuICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5RmlsdGVyXG4gICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcblxuICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9hPlxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJGaWx0ZXJMaW5rIiwiY29tcG9uZW50RGlkTW91bnQiLCJzdG9yZSIsImNvbnRleHQiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsImZvcmNlVXBkYXRlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW5kZXIiLCJzdGF0ZSIsImdldFN0YXRlIiwidmlzaWJpbGl0eUZpbHRlciIsInByb3BzIiwiY2hpbGRyZW4iLCJmaWx0ZXIiLCJhY3RpdmUiLCJzcGFuIiwiYSIsImhyZWYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInR5cGUiLCJhY3Rpb24iLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFnQixDQUFoQixNQUFnQjtBQUVBLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBELEdBQUssQ0FBR0EsVUFBUyxHQUpLLE1BQWdCLE9BSTlCQSxTQUFTO0lBRUlDLFVBQVUsaUJBQWhCLFFBQVE7Y0FBRkEsVUFBVTthQUFWQSxVQUFVOzhCQUFWQSxVQUFVO2dFQUFWQSxVQUFVOztpQkFBVkEsVUFBVTs7WUFDN0JDLEdBQWlCLEVBQWpCQSxDQUFpQjttQkFBakJBLFFBQVEsQ0FBUkEsaUJBQWlCLEdBQUcsQ0FBQzs7Z0JBQ25CLEdBQUssQ0FBR0MsS0FBSyxHQUFLLElBQUksQ0FBQ0MsT0FBTyxDQUF0QkQsS0FBSztnQkFFYixJQUFJLENBQUNFLFdBQVcsR0FBR0YsS0FBSyxDQUFDRyxTQUFTLENBQUMsUUFBUTtvQkFBRixNQUFNLE9BQURDLFdBQVc7O1lBQzNELENBQUM7OztZQUVEQyxHQUFvQixFQUFwQkEsQ0FBb0I7bUJBQXBCQSxRQUFRLENBQVJBLG9CQUFvQixHQUFHLENBQUM7Z0JBQ3RCLElBQUksQ0FBQ0gsV0FBVztZQUNsQixDQUFDOzs7WUFFREksR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1BQU0sR0FBRyxDQUFDO2dCQUNSLEdBQUssQ0FBR04sS0FBSyxHQUFLLElBQUksQ0FBQ0MsT0FBTyxDQUF0QkQsS0FBSyxFQUNQTyxLQUFLLEdBQUdQLEtBQUssQ0FBQ1EsUUFBUSxJQUNwQkMsaUJBQWdCLEdBQUtGLEtBQUssQ0FBMUJFLGdCQUFnQixFQUNLLE1BQVUsR0FBVixJQUFJLENBQUNDLEtBQUssRUFBL0JDLFFBQVEsR0FBYSxNQUFVLENBQS9CQSxRQUFRLEVBQUVDLE1BQU0sR0FBSyxNQUFVLENBQXJCQSxNQUFNLEVBQ2xCQyxNQUFNLEdBQUlELE1BQU0sS0FBS0gsaUJBQWdCO2dCQUUzQyxFQUFFLEVBQUVJLE1BQU0sRUFBRSxDQUFDO29CQUNYLE1BQU0sZUF6QlUsTUFBZ0IscUJBMkI3QkMsQ0FBSSxhQUFFSCxRQUFRO2dCQUduQixDQUFDO2dCQUVELE1BQU0sZUFoQ1ksTUFBZ0IscUJBa0MvQkksQ0FBQztvQkFBQ0MsSUFBSSxFQUFDLENBQUc7b0JBQ1JDLFNBQVMsRUFBQyxDQUFRO29CQUNsQkMsT0FBTyxFQUFFLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7d0JBRW5CQSxLQUFLLENBQUNDLGNBQWM7d0JBRXBCLEdBQUssQ0FBQ0MsSUFBSSxHQXRDaUIsVUFBYyx3QkF1Q25DWixnQkFBZ0IsR0FBR0csTUFBTSxFQUN6QlUsTUFBTSxHQUFHLENBQUM7NEJBQ1JELElBQUksRUFBSkEsSUFBSTs0QkFDSlosZ0JBQWdCLEVBQWhCQSxnQkFBZ0I7d0JBQ2xCLENBQUM7d0JBRVBULEtBQUssQ0FBQ3VCLFFBQVEsQ0FBQ0QsTUFBTTtvQkFFdkIsQ0FBQzttQkFFRFgsUUFBUTtZQUdmLENBQUM7OztXQWhEa0JiLFVBQVU7RUFBU0QsVUFBUztrQkFBNUJDLFVBQVUifQ==