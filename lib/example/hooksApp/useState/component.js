"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ComponentUseStateParagraph", {
    enumerable: true,
    get: function() {
        return ComponentUseStateParagraph;
    }
});
var _hooks = require("../../../hooks");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
var Component = React.Component;
var initialCount = 0;
var ComponentUseStateParagraph = /*#__PURE__*/ function(Component) {
    _inherits(ComponentUseStateParagraph, Component);
    var _super = _create_super(ComponentUseStateParagraph);
    function ComponentUseStateParagraph() {
        _class_call_check(this, ComponentUseStateParagraph);
        return _super.apply(this, arguments);
    }
    _create_class(ComponentUseStateParagraph, [
        {
            key: "render",
            value: function render(update, element) {
                var _useState = _sliced_to_array((0, _hooks.useState)(initialCount, element), 2), count = _useState[0], setCount = _useState[1];
                return /*#__PURE__*/ React.createElement("p", {
                    onClick: function(event) {
                        return setCount(count + 1);
                    }
                }, "state: ", "".concat(count));
            }
        }
    ]);
    return ComponentUseStateParagraph;
}(Component);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwL3VzZVN0YXRlL2NvbXBvbmVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vaG9va3NcIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5sZXQgaW5pdGlhbENvdW50ID0gMDtcblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFVzZVN0YXRlUGFyYWdyYXBoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKHVwZGF0ZSwgZWxlbWVudCkge1xuICAgIGNvbnN0IFsgY291bnQsIHNldENvdW50IF0gPSB1c2VTdGF0ZShpbml0aWFsQ291bnQsIGVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPHAgb25DbGljaz17KGV2ZW50KSA9PiBzZXRDb3VudChjb3VudCArIDEpfT5cbiAgICAgICAgc3RhdGU6IHtgJHtjb3VudH1gfVxuICAgICAgPC9wPlxuXG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudFVzZVN0YXRlUGFyYWdyYXBoIiwiQ29tcG9uZW50IiwiUmVhY3QiLCJpbml0aWFsQ291bnQiLCJyZW5kZXIiLCJ1cGRhdGUiLCJlbGVtZW50IiwidXNlU3RhdGUiLCJjb3VudCIsInNldENvdW50IiwicCIsIm9uQ2xpY2siLCJldmVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUWFBOzs7ZUFBQUE7OztxQkFOWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQU0sQUFBRUMsWUFBY0MsTUFBZEQ7QUFFUixJQUFJRSxlQUFlO0FBRVosSUFBQSxBQUFNSCwyQ0FBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNYSSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTSxFQUFFQyxPQUFPO2dCQUNwQixJQUE0QkMsNkJBQUFBLElBQUFBLGVBQVEsRUFBQ0osY0FBY0csY0FBM0NFLFFBQW9CRCxjQUFiRSxXQUFhRjtnQkFFNUIscUJBRUUsb0JBQUNHO29CQUFFQyxTQUFTLFNBQUNDOytCQUFVSCxTQUFTRCxRQUFROzttQkFBSSxXQUNsQyxBQUFDLEdBQVEsT0FBTkE7WUFJakI7OztXQVhXUjtFQUFtQ0MifQ==