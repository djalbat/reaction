"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var VirtualDOMNode = require("./element/virtualDOMNode");

var ReactDOM = /*#__PURE__*/function () {
  function ReactDOM() {
    _classCallCheck(this, ReactDOM);
  }

  _createClass(ReactDOM, null, [{
    key: "render",
    value: function render(element, parentDOMElement) {
      var parent = VirtualDOMNode.fromDOMElement(parentDOMElement),
          reference = null,
          context = {};
      element.mount(parent, reference, context);
    }
  }]);

  return ReactDOM;
}();

module.exports = ReactDOM;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0RE9NLmpzIl0sIm5hbWVzIjpbIlZpcnR1YWxET01Ob2RlIiwicmVxdWlyZSIsIlJlYWN0RE9NIiwiZWxlbWVudCIsInBhcmVudERPTUVsZW1lbnQiLCJwYXJlbnQiLCJmcm9tRE9NRWxlbWVudCIsInJlZmVyZW5jZSIsImNvbnRleHQiLCJtb3VudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGNBQWMsR0FBR0MsT0FBTyxDQUFDLDBCQUFELENBQTlCOztJQUVNQyxROzs7Ozs7OzJCQUNVQyxPLEVBQVNDLGdCLEVBQWtCO0FBQ3ZDLFVBQU1DLE1BQU0sR0FBR0wsY0FBYyxDQUFDTSxjQUFmLENBQThCRixnQkFBOUIsQ0FBZjtBQUFBLFVBQ01HLFNBQVMsR0FBRyxJQURsQjtBQUFBLFVBRU1DLE9BQU8sR0FBRyxFQUZoQjtBQUlBTCxNQUFBQSxPQUFPLENBQUNNLEtBQVIsQ0FBY0osTUFBZCxFQUFzQkUsU0FBdEIsRUFBaUNDLE9BQWpDO0FBQ0Q7Ozs7OztBQUdIRSxNQUFNLENBQUNDLE9BQVAsR0FBaUJULFFBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IFZpcnR1YWxET01Ob2RlID0gcmVxdWlyZShcIi4vZWxlbWVudC92aXJ0dWFsRE9NTm9kZVwiKTtcblxuY2xhc3MgUmVhY3RET00ge1xuICBzdGF0aWMgcmVuZGVyKGVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBWaXJ0dWFsRE9NTm9kZS5mcm9tRE9NRWxlbWVudChwYXJlbnRET01FbGVtZW50KSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIGNvbnRleHQgPSB7fTtcblxuICAgIGVsZW1lbnQubW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG4iXX0=