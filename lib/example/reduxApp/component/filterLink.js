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
var FilterLink = /*#__PURE__*/ function(Component1) {
    _inherits(FilterLink, Component1);
    var _super = _createSuper(FilterLink);
    function FilterLink() {
        _classCallCheck(this, FilterLink);
        return _super.apply(this, arguments);
    }
    _createClass(FilterLink, [
        {
            // static mixins = [
            //   updateHandler
            // ];
            key: "updateHandler",
            value: function updateHandler() {
                this.forceUpdate();
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this = this;
                var store = this.context.store;
                this.unsubscribe = store.subscribe(function() {
                    return _this.updateHandler();
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
} // function updateHandler() {
 //   this.forceUpdate();
 // }
(Component);
exports.default = FilterLink;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC9maWx0ZXJMaW5rLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IHsgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlckxpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvLyBzdGF0aWMgbWl4aW5zID0gW1xuICAvLyAgIHVwZGF0ZUhhbmRsZXJcbiAgLy8gXTtcblxuICB1cGRhdGVIYW5kbGVyKCkge1xuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVIYW5kbGVyKCkpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCksXG4gICAgICAgICAgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSBzdGF0ZSxcbiAgICAgICAgICB7IGNoaWxkcmVuLCBmaWx0ZXIgfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYWN0aXZlID0gKGZpbHRlciA9PT0gdmlzaWJpbGl0eUZpbHRlcik7XG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxzcGFuPntjaGlsZHJlbn08L3NwYW4+XG5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGEgaHJlZj1cIiNcIlxuICAgICAgICAgY2xhc3NOYW1lPVwiZmlsdGVyXCJcbiAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXG4gICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgY29uc3QgdHlwZSA9IFNFVF9WSVNJQklMSVRZX0ZJTFRFUixcbiAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eUZpbHRlciA9IGZpbHRlcixcbiAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG5cbiAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvYT5cbiAgICApO1xuICB9XG59XG5cbi8vIGZ1bmN0aW9uIHVwZGF0ZUhhbmRsZXIoKSB7XG4vLyAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbi8vIH1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJGaWx0ZXJMaW5rIiwidXBkYXRlSGFuZGxlciIsImZvcmNlVXBkYXRlIiwiY29tcG9uZW50RGlkTW91bnQiLCJzdG9yZSIsImNvbnRleHQiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVuZGVyIiwic3RhdGUiLCJnZXRTdGF0ZSIsInZpc2liaWxpdHlGaWx0ZXIiLCJwcm9wcyIsImNoaWxkcmVuIiwiZmlsdGVyIiwiYWN0aXZlIiwic3BhbiIsImEiLCJocmVmIiwiY2xhc3NOYW1lIiwib25DbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0eXBlIiwiYWN0aW9uIiwiZGlzcGF0Y2giXSwibWFw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