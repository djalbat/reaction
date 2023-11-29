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
var _react = /*#__PURE__*/ _interop_require_default(require("../react"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var ReactClassElement = /*#__PURE__*/ function(ReactElement) {
    _inherits(ReactClassElement, ReactElement);
    var _super = _create_super(ReactClassElement);
    function ReactClassElement(reactClass, props) {
        _class_call_check(this, ReactClassElement);
        var _this;
        _this = _super.call(this, props);
        _this.reactClass = reactClass;
        var initialState = _this.getInitialState();
        _this.setInitialState(initialState);
        return _this;
    }
    _create_class(ReactClassElement, [
        {
            key: "render",
            value: function render(update) {
                return this.reactClass.render.call(this, update, this);
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
            key: "childContextSet",
            value: function childContextSet(childContext) {
                this.reactClass.childContextSet.call(this, childContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aXJ0dWFsRE9NL3JlYWN0L2NsYXNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3RFbGVtZW50IGZyb20gXCIuLi9yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdENsYXNzRWxlbWVudCBleHRlbmRzIFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q2xhc3MsIHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5yZWFjdENsYXNzID0gcmVhY3RDbGFzcztcblxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MucmVuZGVyLmNhbGwodGhpcywgdXBkYXRlLCB0aGlzKTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENsYXNzLmdldEluaXRpYWxTdGF0ZS5jYWxsKHRoaXMpO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENsYXNzLmdldENoaWxkQ29udGV4dC5jYWxsKHRoaXMsIGNvbnRleHQpO1xuICB9XG5cbiAgY2hpbGRDb250ZXh0U2V0KGNoaWxkQ29udGV4dCkge1xuICAgIHRoaXMucmVhY3RDbGFzcy5jaGlsZENvbnRleHRTZXQuY2FsbCh0aGlzLCBjaGlsZENvbnRleHQpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENsYXNzLmNvbXBvbmVudERpZE1vdW50LmNhbGwodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q2xhc3MuY29tcG9uZW50V2lsbFVubW91bnQuY2FsbCh0aGlzKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0Q2xhc3NFbGVtZW50IiwicmVhY3RDbGFzcyIsInByb3BzIiwiaW5pdGlhbFN0YXRlIiwiZ2V0SW5pdGlhbFN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwicmVuZGVyIiwidXBkYXRlIiwiY2FsbCIsImdldENoaWxkQ29udGV4dCIsImNvbnRleHQiLCJjaGlsZENvbnRleHRTZXQiLCJjaGlsZENvbnRleHQiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiUmVhY3RFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozs0REFGSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVWLElBQUEsQUFBTUEsa0NBQU47Y0FBTUE7K0JBQUFBO2FBQUFBLGtCQUNQQyxVQUFVLEVBQUVDLEtBQUs7Z0NBRFZGOztrQ0FFWEU7UUFFTixNQUFLRCxVQUFVLEdBQUdBO1FBRWxCLElBQU1FLGVBQWUsTUFBS0MsZUFBZTtRQUV6QyxNQUFLQyxlQUFlLENBQUNGOzs7a0JBUkpIOztZQVduQk0sS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU07Z0JBQ1gsT0FBTyxJQUFJLENBQUNOLFVBQVUsQ0FBQ0ssTUFBTSxDQUFDRSxJQUFJLENBQUMsSUFBSSxFQUFFRCxRQUFRLElBQUk7WUFDdkQ7OztZQUVBSCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFVBQVUsQ0FBQ0csZUFBZSxDQUFDSSxJQUFJLENBQUMsSUFBSTtZQUNsRDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JDLE9BQU87Z0JBQ3JCLE9BQU8sSUFBSSxDQUFDVCxVQUFVLENBQUNRLGVBQWUsQ0FBQ0QsSUFBSSxDQUFDLElBQUksRUFBRUU7WUFDcEQ7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCQyxZQUFZO2dCQUMxQixJQUFJLENBQUNYLFVBQVUsQ0FBQ1UsZUFBZSxDQUFDSCxJQUFJLENBQUMsSUFBSSxFQUFFSTtZQUM3Qzs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNaLFVBQVUsQ0FBQ1ksaUJBQWlCLENBQUNMLElBQUksQ0FBQyxJQUFJO1lBQzdDOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ2IsVUFBVSxDQUFDYSxvQkFBb0IsQ0FBQ04sSUFBSSxDQUFDLElBQUk7WUFDaEQ7OztXQWpDbUJSO0VBQTBCZSxjQUFZIn0=