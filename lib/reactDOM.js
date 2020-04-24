"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _virtualDOMNode = _interopRequireDefault(require("./element/virtualDOMNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ReactDOM = /*#__PURE__*/function () {
  function ReactDOM() {
    _classCallCheck(this, ReactDOM);
  }

  _createClass(ReactDOM, null, [{
    key: "render",
    value: function render(element, parentDOMElement) {
      var parent = _virtualDOMNode["default"].fromDOMElement(parentDOMElement),
          reference = null,
          context = {};

      element.mount(parent, reference, context);
    }
  }]);

  return ReactDOM;
}();

exports["default"] = ReactDOM;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0RE9NLmpzIl0sIm5hbWVzIjpbIlJlYWN0RE9NIiwiZWxlbWVudCIsInBhcmVudERPTUVsZW1lbnQiLCJwYXJlbnQiLCJWaXJ0dWFsRE9NTm9kZSIsImZyb21ET01FbGVtZW50IiwicmVmZXJlbmNlIiwiY29udGV4dCIsIm1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7OzJCQUNMQyxPLEVBQVNDLGdCLEVBQWtCO0FBQ3ZDLFVBQU1DLE1BQU0sR0FBR0MsMkJBQWVDLGNBQWYsQ0FBOEJILGdCQUE5QixDQUFmO0FBQUEsVUFDTUksU0FBUyxHQUFHLElBRGxCO0FBQUEsVUFFTUMsT0FBTyxHQUFHLEVBRmhCOztBQUlBTixNQUFBQSxPQUFPLENBQUNPLEtBQVIsQ0FBY0wsTUFBZCxFQUFzQkcsU0FBdEIsRUFBaUNDLE9BQWpDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZpcnR1YWxET01Ob2RlIGZyb20gXCIuL2VsZW1lbnQvdmlydHVhbERPTU5vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RET00ge1xuICBzdGF0aWMgcmVuZGVyKGVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBWaXJ0dWFsRE9NTm9kZS5mcm9tRE9NRWxlbWVudChwYXJlbnRET01FbGVtZW50KSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIGNvbnRleHQgPSB7fTtcblxuICAgIGVsZW1lbnQubW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpO1xuICB9XG59XG4iXX0=