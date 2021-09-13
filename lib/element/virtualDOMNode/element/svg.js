"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _element = _interopRequireDefault(require("../element"));
var _name = require("../../../utilities/name");
var _constants = require("../../../constants");
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
var VirtualDOMSVGElement = /*#__PURE__*/ function(VirtualDOMElement) {
    _inherits(VirtualDOMSVGElement, VirtualDOMElement);
    function VirtualDOMSVGElement(tagName, props) {
        _classCallCheck(this, VirtualDOMSVGElement);
        var domElement = document.createElementNS(_constants.HTTP_WWW_W3_ORG_2000_SVG, tagName);
        return _possibleConstructorReturn(this, _getPrototypeOf(VirtualDOMSVGElement).call(this, props, domElement));
    }
    _createClass(VirtualDOMSVGElement, [
        {
            key: "isAttributeName",
            value: function isAttributeName(name) {
                return (0, _name).isSVGAttributeName(name);
            }
        }
    ]);
    return VirtualDOMSVGElement;
}(_element.default);
exports.default = VirtualDOMSVGElement;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL2VsZW1lbnQvc3ZnLmpzIl0sIm5hbWVzIjpbIlZpcnR1YWxET01FbGVtZW50IiwiaXNTVkdBdHRyaWJ1dGVOYW1lIiwiSFRUUF9XV1dfVzNfT1JHXzIwMDBfU1ZHIiwiVmlydHVhbERPTVNWR0VsZW1lbnQiLCJjb25zdHJ1Y3RvciIsInRhZ05hbWUiLCJwcm9wcyIsImRvbUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnROUyIsImlzQXR0cmlidXRlTmFtZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRWtCLEdBQVksQ0FBWixRQUFZO0FBRVAsR0FBeUIsQ0FBekIsS0FBeUI7QUFDbkIsR0FBb0IsQ0FBcEIsVUFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV4QyxvQkFBb0IsaUJBQTFCLFFBQVE7Y0FBRixvQkFBb0I7YUFBcEIsb0JBQW9CLENBQzNCLE9BQU8sRUFBRSxLQUFLOzhCQURQLG9CQUFvQjtRQUVyQyxHQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBSk4sVUFBb0IsMkJBSWEsT0FBTztnRUFGNUQsb0JBQW9CLGFBSS9CLEtBQUssRUFBRSxVQUFVOztpQkFKTixvQkFBb0I7O1lBT3ZDLEdBQWUsR0FBZixlQUFlO21CQUFmLFFBQVEsQ0FBUixlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3JCLE1BQU0sS0FYeUIsS0FBeUIscUJBVzlCLElBQUk7WUFDaEMsQ0FBQzs7O1dBVGtCLG9CQUFvQjtFQUxYLFFBQVk7a0JBS3JCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmlydHVhbERPTUVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgaXNTVkdBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBIVFRQX1dXV19XM19PUkdfMjAwMF9TVkcgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpcnR1YWxET01TVkdFbGVtZW50IGV4dGVuZHMgVmlydHVhbERPTUVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0YWdOYW1lLCBwcm9wcykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoSFRUUF9XV1dfVzNfT1JHXzIwMDBfU1ZHLCB0YWdOYW1lKTtcblxuICAgIHN1cGVyKHByb3BzLCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIGlzQXR0cmlidXRlTmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIGlzU1ZHQXR0cmlidXRlTmFtZShuYW1lKTtcbiAgfVxufVxuIl19