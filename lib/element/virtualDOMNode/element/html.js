"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var nameUtilities = require("../../../utilities/name"),
    VirtualDOMElement = require("../element");

var isHTMLAttributeName = nameUtilities.isHTMLAttributeName;

var VirtualDOMHTMLElement = /*#__PURE__*/function (_VirtualDOMElement) {
  _inherits(VirtualDOMHTMLElement, _VirtualDOMElement);

  var _super = _createSuper(VirtualDOMHTMLElement);

  function VirtualDOMHTMLElement(tagName, props) {
    _classCallCheck(this, VirtualDOMHTMLElement);

    var domElement = document.createElement(tagName);
    return _super.call(this, props, domElement);
  }

  _createClass(VirtualDOMHTMLElement, [{
    key: "isAttributeName",
    value: function isAttributeName(name) {
      return isHTMLAttributeName(name);
    }
  }]);

  return VirtualDOMHTMLElement;
}(VirtualDOMElement);

module.exports = VirtualDOMHTMLElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0bWwuanMiXSwibmFtZXMiOlsibmFtZVV0aWxpdGllcyIsInJlcXVpcmUiLCJWaXJ0dWFsRE9NRWxlbWVudCIsImlzSFRNTEF0dHJpYnV0ZU5hbWUiLCJWaXJ0dWFsRE9NSFRNTEVsZW1lbnQiLCJ0YWdOYW1lIiwicHJvcHMiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwibmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLE9BQU8sQ0FBQyx5QkFBRCxDQUE3QjtBQUFBLElBQ01DLGlCQUFpQixHQUFHRCxPQUFPLENBQUMsWUFBRCxDQURqQzs7SUFHUUUsbUIsR0FBd0JILGEsQ0FBeEJHLG1COztJQUVGQyxxQjs7Ozs7QUFDSixpQ0FBWUMsT0FBWixFQUFxQkMsS0FBckIsRUFBNEI7QUFBQTs7QUFDMUIsUUFBTUMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUJKLE9BQXZCLENBQW5CO0FBRDBCLDZCQUdwQkMsS0FIb0IsRUFHYkMsVUFIYTtBQUkzQjs7OztvQ0FFZUcsSSxFQUFNO0FBQ3BCLGFBQU9QLG1CQUFtQixDQUFDTyxJQUFELENBQTFCO0FBQ0Q7Ozs7RUFUaUNSLGlCOztBQVlwQ1MsTUFBTSxDQUFDQyxPQUFQLEdBQWlCUixxQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgbmFtZVV0aWxpdGllcyA9IHJlcXVpcmUoXCIuLi8uLi8uLi91dGlsaXRpZXMvbmFtZVwiKSxcbiAgICAgIFZpcnR1YWxET01FbGVtZW50ID0gcmVxdWlyZShcIi4uL2VsZW1lbnRcIik7XG5cbmNvbnN0IHsgaXNIVE1MQXR0cmlidXRlTmFtZSB9ID0gbmFtZVV0aWxpdGllcztcblxuY2xhc3MgVmlydHVhbERPTUhUTUxFbGVtZW50IGV4dGVuZHMgVmlydHVhbERPTUVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0YWdOYW1lLCBwcm9wcykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgc3VwZXIocHJvcHMsIGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgaXNBdHRyaWJ1dGVOYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gaXNIVE1MQXR0cmlidXRlTmFtZShuYW1lKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZpcnR1YWxET01IVE1MRWxlbWVudDtcblxuIl19