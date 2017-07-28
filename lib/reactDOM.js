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
          context = undefined;

      element.mount(parent, reference, context);
    }
  }]);

  return ReactDOM;
}();

module.exports = ReactDOM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdERPTS5qcyJdLCJuYW1lcyI6WyJWaXJ0dWFsRE9NTm9kZSIsInJlcXVpcmUiLCJSZWFjdERPTSIsImVsZW1lbnQiLCJwYXJlbnRET01FbGVtZW50IiwicGFyZW50IiwiZnJvbURPTUVsZW1lbnQiLCJyZWZlcmVuY2UiLCJjb250ZXh0IiwidW5kZWZpbmVkIiwibW91bnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCQyxRQUFRLDBCQUFSLENBQXZCOztJQUVNQyxROzs7Ozs7OzJCQUNVQyxPLEVBQVNDLGdCLEVBQWtCO0FBQ3ZDLFVBQU1DLFNBQVNMLGVBQWVNLGNBQWYsQ0FBOEJGLGdCQUE5QixDQUFmO0FBQUEsVUFDTUcsWUFBWSxJQURsQjtBQUFBLFVBRU1DLFVBQVVDLFNBRmhCOztBQUlBTixjQUFRTyxLQUFSLENBQWNMLE1BQWQsRUFBc0JFLFNBQXRCLEVBQWlDQyxPQUFqQztBQUNEOzs7Ozs7QUFHSEcsT0FBT0MsT0FBUCxHQUFpQlYsUUFBakIiLCJmaWxlIjoicmVhY3RET00uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFZpcnR1YWxET01Ob2RlID0gcmVxdWlyZSgnLi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlJyk7XG5cbmNsYXNzIFJlYWN0RE9NIHtcbiAgc3RhdGljIHJlbmRlcihlbGVtZW50LCBwYXJlbnRET01FbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50ID0gVmlydHVhbERPTU5vZGUuZnJvbURPTUVsZW1lbnQocGFyZW50RE9NRWxlbWVudCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICBjb250ZXh0ID0gdW5kZWZpbmVkO1xuXG4gICAgZWxlbWVudC5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcbiJdfQ==