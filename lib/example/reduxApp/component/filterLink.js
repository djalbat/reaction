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
} // function updateHandler() {
 //   this.forceUpdate();
 // }
(Component);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC9maWx0ZXJMaW5rLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IHsgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlckxpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvLyBzdGF0aWMgbWl4aW5zID0gW1xuICAvLyAgIHVwZGF0ZUhhbmRsZXJcbiAgLy8gXTtcblxuICB1cGRhdGVIYW5kbGVyKCkge1xuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVIYW5kbGVyKCkpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCksXG4gICAgICAgICAgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSBzdGF0ZSxcbiAgICAgICAgICB7IGNoaWxkcmVuLCBmaWx0ZXIgfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYWN0aXZlID0gKGZpbHRlciA9PT0gdmlzaWJpbGl0eUZpbHRlcik7XG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxzcGFuPntjaGlsZHJlbn08L3NwYW4+XG5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGEgaHJlZj1cIiNcIlxuICAgICAgICAgY2xhc3NOYW1lPVwiZmlsdGVyXCJcbiAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXG4gICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgY29uc3QgdHlwZSA9IFNFVF9WSVNJQklMSVRZX0ZJTFRFUixcbiAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eUZpbHRlciA9IGZpbHRlcixcbiAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG5cbiAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvYT5cbiAgICApO1xuICB9XG59XG5cbi8vIGZ1bmN0aW9uIHVwZGF0ZUhhbmRsZXIoKSB7XG4vLyAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbi8vIH1cbiJdLCJuYW1lcyI6WyJGaWx0ZXJMaW5rIiwiQ29tcG9uZW50IiwiUmVhY3QiLCJ1cGRhdGVIYW5kbGVyIiwiZm9yY2VVcGRhdGUiLCJjb21wb25lbnREaWRNb3VudCIsInN0b3JlIiwiY29udGV4dCIsInVuc3Vic2NyaWJlIiwic3Vic2NyaWJlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW5kZXIiLCJzdGF0ZSIsImdldFN0YXRlIiwidmlzaWJpbGl0eUZpbHRlciIsInByb3BzIiwiY2hpbGRyZW4iLCJmaWx0ZXIiLCJhY3RpdmUiLCJzcGFuIiwiYSIsImhyZWYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInR5cGUiLCJTRVRfVklTSUJJTElUWV9G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