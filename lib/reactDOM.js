'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VirtualDOMNode = require('./element/virtualDOMNode');

var ReactDOM = function () {
  function ReactDOM() {
    _classCallCheck(this, ReactDOM);
  }

  _createClass(ReactDOM, null, [{
    key: 'render',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdERPTS5qcyJdLCJuYW1lcyI6WyJWaXJ0dWFsRE9NTm9kZSIsInJlcXVpcmUiLCJSZWFjdERPTSIsImVsZW1lbnQiLCJwYXJlbnRET01FbGVtZW50IiwicGFyZW50IiwiZnJvbURPTUVsZW1lbnQiLCJyZWZlcmVuY2UiLCJjb250ZXh0IiwibW91bnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCQyxRQUFRLDBCQUFSLENBQXZCOztJQUVNQyxROzs7Ozs7OzJCQUNVQyxPLEVBQVNDLGdCLEVBQWtCO0FBQ3ZDLFVBQU1DLFNBQVNMLGVBQWVNLGNBQWYsQ0FBOEJGLGdCQUE5QixDQUFmO0FBQUEsVUFDTUcsWUFBWSxJQURsQjtBQUFBLFVBRU1DLFVBQVUsRUFGaEI7O0FBSUFMLGNBQVFNLEtBQVIsQ0FBY0osTUFBZCxFQUFzQkUsU0FBdEIsRUFBaUNDLE9BQWpDO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCVCxRQUFqQiIsImZpbGUiOiJyZWFjdERPTS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVmlydHVhbERPTU5vZGUgPSByZXF1aXJlKCcuL2VsZW1lbnQvdmlydHVhbERPTU5vZGUnKTtcblxuY2xhc3MgUmVhY3RET00ge1xuICBzdGF0aWMgcmVuZGVyKGVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBWaXJ0dWFsRE9NTm9kZS5mcm9tRE9NRWxlbWVudChwYXJlbnRET01FbGVtZW50KSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIGNvbnRleHQgPSB7fTtcblxuICAgIGVsZW1lbnQubW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG4iXX0=